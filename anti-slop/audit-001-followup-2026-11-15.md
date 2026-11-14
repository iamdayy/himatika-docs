# Audit 001 — followup — 2026-11-15

Verifikasi: production build (`npm run build` + `node .output/server/index.mjs` :3100), inspect.mjs @1440/768/390 → `.taste-skill/final-home`, `.taste-skill/final-intro`. Before: `.taste-skill/before*` (dev :3000).

## Before → After (homepage, production)
- FAIL 6 → 1, WARN 7 → 3
- contrast link hijau 2.5:1 → lolos (brand-500 `#047857` ≈ 5.5:1) — FIXED
- emoji di UI (✨📚⚙ + 100+ di konten) → 0 di luar tabel status — FIXED
- covered-text → hanya muncul di dev (artefak `#vue-tracer-overlay` Vue devtools, tidak ada di production) — FIXED
- off-centre mobile 28/10px → sama — FIXED
- headline 3 baris @390 → 2 baris (override 2rem @≤640px) — FIXED
- few-pictures 3 → hero pakai screenshot asli `/dasbor/halaman-dasbor.jpeg` — FIXED
- shadow diam, hairline header, glass, 2 h1, em dash 53, CTA generik → semua FIXED

## Sisa (defensible)
- `still-page` (6 elemen bergerak, floor 8): motion bawaan tema Docus, tidak ada aset video.
- `no-footage`: belum ada video kini yang jujur untuk dipakai.
- `body-size` 15px / `measure` 156 char: pengukuran elemen periferi tema; body sudah 16px.
- intro page: `few-pictures` 1 (artikel docs, bukan landing page).

## File yang berubah
- `content/**`: emoji heading/kallout dihapus (tabel status ✅❌ dipertahankan), 53 em dash → `:`, hr `---` body dihapus, CTA spesifik, gambar asli ditambah di index + introduction, h1 ganda diperbaiki.
- `app/app.config.ts`: `ui.colors.primary: 'brand'`; `assistant.floatingInput: false`.
- `app/assets/main.css` (baru): palet brand, header non-sticky, h1 mobile, ink penuh, hairline/shadow/eyebrow dimatikan, `--ui-info` gelap.
- `nuxt.config.ts`: register `~/assets/main.css`.

Catatan env: `sharp` perlu `npm rebuild sharp` + restart dev agar `/_ipx/` jalan (500 tanpa itu).
