# HIMATIKA Docs

Portal dokumentasi resmi HIMATIKA ITSNU Pekalongan — dibangun dengan [Docus](https://docus.dev) di atas Nuxt 4.

## Quick Start

```bash
bun install
bun run dev
```

Dokumentasi berjalan di `http://localhost:3000`.

## Struktur

```
content/
├── index.md                  # Beranda
├── 1.getting-started/        # Pengenalan
├── 2.panduan-anggota/        # Panduan untuk anggota
├── 3.panduan-tamu/           # Panduan untuk tamu/non-anggota
├── 4.panduan-admin/          # Panduan untuk admin
├── 5.panduan-agenda/         # Panduan manajemen agenda
├── 6.tanda-tangan-digital/   # Panduan tanda tangan digital
├── 7.referensi-teknis/       # Referensi arsitektur & integrasi
├── 8.bantuan-kontak.md       # Bantuan & kontak
└── 9.terms-and-conditions.md # Syarat & ketentuan
```

## Built with

- [Nuxt 4](https://nuxt.com) — Web framework
- [Nuxt Content](https://content.nuxt.com/) — File-based CMS
- [Docus Layer](https://www.npmjs.com/package/docus) — Documentation theme
- [Tailwind CSS 4](https://tailwindcss.com/) — Utility-first CSS

## Deployment

Production deploy ke **Vercel**. Dockerfile disertakan untuk referensi lokal saja.

```bash
bun run build
```

Output build berada di `.output/`.

## License

[MIT](https://opensource.org/licenses/MIT)
