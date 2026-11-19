# Hướng dẫn deploy lên Cloudflare Workers (miễn phí)

Website chạy trên **một Worker** của Cloudflare, gồm hai phần:

- **Giao diện** (`index.html`, `assets/`): file tĩnh, được gom vào `dist/` bằng `python3 tools/build_dist.py`.
- **API chatbot và Chẩn tin** (`worker.js`): gọi Google Gemini. Khóa API chỉ nằm trong secret của Cloudflare.

```
worker.js            -> định tuyến /api/chat và /api/verify
functions/_lib/
  core.js            -> logic dùng chung (truy xuất kiến thức + gọi Gemini)
  knowledge.json, prompts.json   -> kiến thức và lời nhắc của bot
wrangler.toml        -> cấu hình Worker (tên: ydpnt, thư mục tĩnh: dist)
```

> Chạy thử trên máy bạn vẫn dùng `python3 serve.py` như cũ (xem cuối file).

---

## Bước 0 – Chuẩn bị (làm một lần)

1. **Tạo API key Gemini MỚI** tại https://aistudio.google.com/apikey. Key cũ đã lộ trong cuộc trò chuyện, hãy xóa/thu hồi nó.
   - Nên bật thanh toán và **đặt giới hạn chi tiêu** trong Google AI Studio / Google Cloud để key không bị dùng quá tay. Gói miễn phí có hạn mức thấp, khi đông người dùng bot sẽ báo bận.
2. Sửa file `.env` ở máy (dùng khi chạy local) thành key mới: `GEMINI_API_KEY=...`
3. Có tài khoản Cloudflare (đăng ký miễn phí tại https://dash.cloudflare.com/sign-up).

## Cách A – Kết nối GitHub (khuyên dùng: push code là tự deploy)

1. Đưa dự án lên GitHub (đã làm: `hoangdelima09/YDPNT`). File `.gitignore` loại `.env`, `.dev.vars` và `dist/`; kiểm tra `git status` để chắc chắn **không có file chứa key** được commit.
2. Cloudflare Dashboard → **Workers & Pages** → **Create application** → **Import a repository** → chọn repo.
3. Màn hình **Set up your application**:
   | Mục | Giá trị |
   |---|---|
   | Project name | `ydpnt` (**phải trùng** `name` trong `wrangler.toml`) |
   | Build command | `python3 tools/build_dist.py` |
   | Deploy command | `npx wrangler deploy` (giữ nguyên) |
   | Preview command | `npx wrangler preview` (giữ nguyên) |
4. Bấm **Deploy**. Lần đầu bot chưa chạy vì chưa có key, làm tiếp bước 5.
5. Vào Worker `ydpnt` → **Settings** → **Variables and Secrets** → **Add**:
   - Type: **Secret**
   - Variable name: `GEMINI_API_KEY`
   - Value: key mới
   - Bấm **Deploy** để lưu và áp dụng.
6. Mở địa chỉ `https://ydpnt.<subdomain-của-bạn>.workers.dev` (hiện ở đầu trang Worker), thử chatbot ở trang chủ và tab **Chẩn tin**.

## Cách B – Deploy trực tiếp từ máy (không cần GitHub)

```bash
cd ~/Projects/YduocPNT
python3 tools/build_dist.py
npx wrangler login                    # mở trình duyệt để đăng nhập Cloudflare
npx wrangler deploy                   # đọc wrangler.toml
npx wrangler secret put GEMINI_API_KEY   # dán key mới khi được hỏi
```

## Bước cuối – Chống bị lạm dụng hạn mức (nên làm)

Giới hạn trong code chỉ có tác dụng trong từng tiến trình, **không thay thế** quy tắc của Cloudflare. Hãy tạo thêm:

1. Dashboard → chọn **domain** của bạn → **Security** → **WAF** → **Rate limiting rules** → **Create rule**.
   - *Lưu ý:* quy tắc này áp dụng cho domain bạn đã thêm vào Cloudflare. Nếu chỉ dùng địa chỉ `*.workers.dev` thì chưa dùng được, bạn nên gắn một tên miền riêng cho project (Settings → Domains & Routes).
2. Cấu hình gợi ý:
   - Khi: **URI Path** *starts with* `/api/`
   - Đếm theo: **IP**
   - Ngưỡng: khoảng **5 request / 10 giây** (gói free thường chỉ cho một chu kỳ ngắn và một quy tắc; hãy chọn giá trị gần nhất mà giao diện cho phép)
   - Hành động: **Block** vài giây đến vài phút.
3. Trong Google AI Studio/Cloud: đặt **ngân sách/giới hạn chi tiêu** và cảnh báo.

## Gắn tên miền riêng (tùy chọn)

Worker → **Settings** → **Domains & Routes** → **Add** → **Custom domain** → làm theo hướng dẫn.

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
- **Xem log lỗi**: Worker → **Observability** → *Logs* (hoặc `npx wrangler tail`).
- **Build lỗi "python3 not found"**: Worker → **Settings → Build → Variables and secrets** thêm biến build `PYTHON_VERSION` = `3.11`; hoặc dùng Cách B.
- **Deploy lỗi về tên Worker**: tên Worker trên Cloudflare phải trùng `name` trong `wrangler.toml`.
- **Sửa xong mà web vẫn cũ**: tải lại cứng (Ctrl+Shift+R); file tĩnh được cache tối đa 5 phút.

## Chạy thử trên máy

- Bản Python (nhanh nhất): `python3 serve.py` → http://127.0.0.1:8000
- Bản giống hệt Cloudflare (kiểm tra trước khi deploy):
  ```bash
  python3 tools/build_dist.py
  cp .env .dev.vars                       # wrangler đọc key từ .dev.vars
  npx wrangler dev                        # mở http://127.0.0.1:8787
  ```
