#!/usr/bin/env python3
"""Gom các file công khai của website vào dist/ để đưa lên Cloudflare Pages.

Chỉ chép index.html và assets/ – KHÔNG chép .env, serve.py, tools/, functions/ (Functions được Cloudflare
đọc trực tiếp từ thư mục functions/ ở gốc dự án, không nằm trong dist/).

Chạy:  python3 tools/build_dist.py
"""
import os
import shutil

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIST = os.path.join(ROOT, "dist")

shutil.rmtree(DIST, ignore_errors=True)
os.makedirs(DIST)
shutil.copy(os.path.join(ROOT, "index.html"), DIST)
shutil.copytree(os.path.join(ROOT, "assets"), os.path.join(DIST, "assets"))

# Tiêu đề HTTP: bảo mật cơ bản; file tĩnh giữ cache ngắn (tên file không có mã băm nên cần kiểm tra lại thường xuyên)
with open(os.path.join(DIST, "_headers"), "w", encoding="utf8") as f:
    f.write("""/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  X-Frame-Options: SAMEORIGIN
  Permissions-Policy: camera=(), microphone=(), geolocation=()

/assets/*
  Cache-Control: public, max-age=300, must-revalidate

/index.html
  Cache-Control: no-cache
""")
n = sum(len(fs) for _, _, fs in os.walk(DIST))
print(f"dist/ sẵn sàng: {n} file")
