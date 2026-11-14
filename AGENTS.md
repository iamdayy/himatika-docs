# AGENTS.md

Docus docs site (Nuxt 4 + Docus layer + @nuxt/content v3 + Tailwind 4 + nuxt-llms). Content language: Indonesian. Site: https://docs.himatika-itsnupekalongan.com (HIMATIKA ITSNU Pekalongan).

## Commands

- `npm run dev` — dev server on :3000 (`nuxt dev --extends docus`)
- `npm run build` — production build to `.output/`
- No lint/test/typecheck scripts. Verify changes with `npm run build` or dev server.

## Gotchas

- Both `bun.lock` and `package-lock.json` exist. Use **npm** (README + Dockerfile do). Don't switch package managers.
- `Dockerfile` is deprecated — production deploys via Vercel. Don't "fix" or rely on it.
- `.data/`, `.nuxt/`, `.output/` are gitignored build/cache dirs (`.data` = better-sqlite3 content cache). Never edit.
- No test suite exists; don't invent one.

## Content structure

- All docs in `content/`. Page order = numeric prefix on dirs/files (`1.getting-started/`, `2.panduan-anggota/`, ...). Add new section with next prefix number.
- Per-dir `.navigation.yml` sets sidebar title (e.g. `title: Memulai`, `icon: false`).
- Each `.md` needs frontmatter `title`. Use MDC components (`::u-page-hero`, `::u-page-card`, `:::u-button`), not raw HTML.
- Homepage = `content/index.md`.

## App code

- `app/app.config.ts` — header/logo + AI assistant config (floating input, shortcuts).
- `app/components/` — custom components (only `FloatingNuxt.vue`). Theme itself comes from the `docus` layer; don't edit `node_modules`.
- `nuxt.config.ts` — registers `@nuxt/content` + `nuxt-llms`; `llms.domain` points at production URL.
