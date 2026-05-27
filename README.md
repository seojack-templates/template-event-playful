# template-event-playful

A standalone SEOJack website template. Lean Next.js 16 app (App Router, React 19,
scoped CSS — no Tailwind/Convex/Clerk).

- **Live:** https://event-playful.templates.seojack.website
- **Registry id:** `tpl_event_playful`
- **Showcased on:** https://seojack.net/templates/tpl_event_playful

## Develop

```powershell
npm install
npm run dev          # http://localhost:3000
```

## Anatomy

| File | Role |
|------|------|
| `app/layout.tsx` | SEO metadata, canonical, OpenGraph/Twitter, JSON-LD, theme color |
| `app/page.tsx` | renders `<DemoBody />` |
| `app/DemoBody.tsx` | `'use client'` — font link + scoped CSS inject + sections |
| `app/styles.ts` | one scoped CSS literal (every selector prefixed `.event-playful-demo`) |
| `app/data.ts` | typed, realistic content |
| `app/primitives.tsx` | shared motion primitives (Reveal, Headline, Magnetic, Marquee) |
| `app/SeojackCredit.tsx` | footer credit / inbound link (stripped when used as a builder seed) |
| `app/sitemap.ts`, `app/robots.ts` | indexable for organic discovery |

## Deploy

Own GitHub repo (`seojack-templates/template-event-playful`) + own Vercel project,
production domain `https://event-playful.templates.seojack.website`. See `docs/templates-github-org.md`.