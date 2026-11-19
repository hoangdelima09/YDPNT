# Hướng dẫn deploy lên Cloudflare Pages (miễn phí)

Website gồm hai phần cùng nằm trên Cloudflare Pages:

- **Giao diện** (`index.html`, `assets/`): file tĩnh, được gom vào `dist/` bằng `python3 tools/build_dist.py`.
- **API chatbot và Chẩn tin** (`functions/`): Cloudflare Pages Functions, gọi Google Gemini. Khóa API chỉ nằm trong biến môi trường của Cloudflare.

```
functions/
  api/chat.js        -> POST /api/chat    (MAI AI)
  api/verify.js      -> POST /api/verify  (Chẩn tin)
  _lib/core.js       -> logic dùng chung (truy xuất kiến thức + gọi Gemini)
  _lib/knowledge.json, prompts.json   -> kiến thức và lời nhắc của bot
```

> Chạy thử trên máy bạn vẫn dùng `python3 serve.py` như cũ (xem cuối file).

---

## Bước 0 – Chuẩn bị (làm một lần)

1. **Tạo API key Gemini MỚI** tại https://aistudio.google.com/apikey. Key cũ đã lộ trong cuộc trò chuyện, hãy xóa/thu hồi nó.
   - Nên bật thanh toán và **đặt giới hạn chi tiêu** trong Google AI Studio / Google Cloud để key không bị dùng quá tay. Gói miễn phí có hạn mức thấp, khi đông người dùng bot sẽ báo bận.
2. Sửa file `.env` ở máy (dùng khi chạy local) thành key mới: `GEMINI_API_KEY=...`
3. Có tài khoản Cloudflare (đăng ký miễn phí tại https://dash.cloudflare.com/sign-up).

## Cách A – Kết nối GitHub (khuyên dùng: push code là tự deploy)

1. Đưa dự án lên GitHub (thư mục chưa có git):
   ```bash
   cd ~/Projects/YduocPNT
   git init
   git add .
   git commit -m "MAI website"
   # tạo repo trống trên github.com (để Private cũng được), rồi:
   git branch -M main
   git remote add origin https://github.com/<tên-bạn>/<tên-repo>.git
   git push -u origin main
   ```
   File `.gitignore` đã loại `.env`, `.dev.vars` và `dist/`. Hãy kiểm tra `git status` để chắc chắn **không có file chứa key** được commit.
2. Vào Cloudflare Dashboard → **Workers & Pages** → **Create** → tab **Pages** → **Connect to Git** → chọn repo.
3. Cấu hình build:
   | Mục | Giá trị |
   |---|---|
   | Production branch | `main` |
   | Framework preset | None |
   | Build command | `python3 tools/build_dist.py` |
   | Build output directory | `dist` |
4. **Save and Deploy.** Lần đầu bot chưa chạy vì chưa có key, làm tiếp bước 5.
5. Vào project → **Settings** → **Variables and Secrets** → **Add**:
   - Type: **Secret**
   - Variable name: `GEMINI_API_KEY`
   - Value: key mới
   - Thêm cho cả **Production** (và Preview nếu muốn thử nhánh khác).
6. **Deployments** → bấm **Retry deployment** (hoặc push một commit mới) để biến mới có hiệu lực.
7. Mở địa chỉ `https://<tên-project>.pages.dev`, thử chatbot ở trang chủ và tab **Chẩn tin**.

## Cách B – Deploy trực tiếp từ máy (không cần GitHub)

```bash
cd ~/Projects/YduocPNT
python3 tools/build_dist.py
npx wrangler login                    # mở trình duyệt để đăng nhập Cloudflare
npx wrangler pages deploy             # đọc wrangler.toml (output: dist, tên project: mai-viem-gan-b)
npx wrangler pages secret put GEMINI_API_KEY --project-name mai-viem-gan-b   # dán key mới khi được hỏi
npx wrangler pages deploy             # deploy lại để áp dụng secret
```

Lần đầu `wrangler` sẽ hỏi tạo project: chọn nhánh production là `main`.

## Bước cuối – Chống bị lạm dụng hạn mức (nên làm)

Giới hạn trong code chỉ có tác dụng trong từng tiến trình, **không thay thế** quy tắc của Cloudflare. Hãy tạo thêm:

1. Dashboard → chọn **domain** của bạn → **Security** → **WAF** → **Rate limiting rules** → **Create rule**.
   - *Lưu ý:* quy tắc này áp dụng cho domain bạn đã thêm vào Cloudflare. Nếu chỉ dùng địa chỉ `*.pages.dev` thì chưa dùng được, bạn nên gắn một tên miền riêng cho project (Custom domains).
2. Cấu hình gợi ý:
   - Khi: **URI Path** *starts with* `/api/`
   - Đếm theo: **IP**
   - Ngưỡng: khoảng **5 request / 10 giây** (gói free thường chỉ cho một chu kỳ ngắn và một quy tắc; hãy chọn giá trị gần nhất mà giao diện cho phép)
   - Hành động: **Block** vài giây đến vài phút.
3. Trong Google AI Studio/Cloud: đặt **ngân sách/giới hạn chi tiêu** và cảnh báo.

## Gắn tên miền riêng (tùy chọn)

Project → **Custom domains** → **Set up a custom domain** → làm theo hướng dẫn.

## Cập nhật nội dung sau này

| Bạn sửa | Cần chạy | Rồi |
|---|---|---|
| Bài viết (`assets/js/data.js`, `data.en.js`) | `python3 tools/build_kb.py` (để bot học nội dung mới) | commit + push |
| Ngân hàng câu hỏi | `python3 tools/build_quiz.py <file q200.txt> assets/js/quiz.js` rồi `python3 tools/build_kb.py` | commit + push |
| Chỉ giao diện (HTML/CSS/JS) | không cần | commit + push |
| Lời nhắc của bot | sửa `functions/_lib/prompts.json` | commit + push |

`build_kb.py` cập nhật `functions/_lib/knowledge.json`; file này **phải được commit** vì Cloudflare dùng nó trực tiếp.

## Xử lý sự cố

- **Chat báo "chưa được cấu hình khóa API"**: chưa thêm secret `GEMINI_API_KEY`, hoặc chưa deploy lại sau khi thêm.
- **Bot báo "quá tải/gửi quá nhanh"**: hết hạn mức Gemini hoặc bị rate limit; bật thanh toán hoặc thử lại sau.
- **Xem log lỗi**: project → **Deployments** → chọn bản deploy → **Functions** → *Real-time logs* (hoặc `npx wrangler pages deployment tail`).
- **Build lỗi "python3 not found"**: trong **Settings → Environment variables** thêm biến build `PYTHON_VERSION` = `3.11`; hoặc dùng Cách B.
- **Sửa xong mà web vẫn cũ**: tải lại cứng (Ctrl+Shift+R); file tĩnh được cache tối đa 5 phút.

## Chạy thử trên máy

- Bản Python (nhanh nhất): `python3 serve.py` → http://127.0.0.1:8000
- Bản giống hệt Cloudflare (kiểm tra trước khi deploy):
  ```bash
  python3 tools/build_dist.py
  cp .env .dev.vars                       # wrangler đọc key từ .dev.vars
  npx wrangler pages dev dist             # mở http://127.0.0.1:8788
  ```
