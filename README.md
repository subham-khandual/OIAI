# OIAI — Odisha Institute of Artificial Intelligence

Marketing and admissions website for OIAI (Bhubaneswar). Eight pages: Home, Programmes, Admissions, About,
Student Voices, AI Build Week, Apply and Contact.

Built with **React 19**, **React Router 7**, **Vite** and **Tailwind CSS 4**.

> ⚠️ **Every fee, date, statistic, partner name and student quote on this site is placeholder content.**
> Nothing has been verified against a real institute. Work through the
> [fact-check checklist](docs/CONTENT-BRIEF.md#fact-check-checklist) before this goes public.

---

## Quick start

Requires **Node.js 20.19+** (or 22.12+). An `.nvmrc` is included (`nvm use`).

```bash
npm install        # install dependencies
npm run dev        # dev server with hot reload → http://localhost:5173
npm run build      # production build → dist/
npm run preview    # serve the production build locally
```

## Project structure

```
oiai-website/
├── index.html                 # Vite entry: fonts, favicon, #root
├── vite.config.js             # React + Tailwind plugins
├── package.json
├── .env.example               # env vars for when a backend is connected
├── .nvmrc
│
├── public/                    # copied as-is to the site root
│   ├── favicon.svg
│   └── _redirects             # SPA fallback for Netlify (see Deployment)
│
├── docs/
│   ├── CONTENT-BRIEF.md       # strategy, copy rules, FACT-CHECK CHECKLIST
│   └── design-reference/      # the video/image references the design was based on
│
└── src/
    ├── main.jsx               # React root: Router + I18nProvider
    ├── App.jsx                # route table (non-home pages are code-split)
    │
    ├── pages/                 # one file per route
    │   ├── Home.jsx           #  /
    │   ├── Programmes.jsx     #  /programmes   (includes the category filter)
    │   ├── Admissions.jsx     #  /admissions
    │   ├── About.jsx          #  /about        (labs, faculty)
    │   ├── Voices.jsx         #  /voices
    │   ├── Event.jsx          #  /event        (AI Build Week 2026)
    │   ├── Apply.jsx          #  /apply        (application form)
    │   ├── Contact.jsx        #  /contact      (message form)
    │   └── NotFound.jsx       #  any other URL → 404
    │
    ├── components/
    │   ├── layout/
    │   │   ├── Layout.jsx     # navbar + page + footer shell for every route
    │   │   ├── Navbar.jsx     # capsule nav, mobile menu, EN/ଓଡ଼ିଆ toggle
    │   │   ├── Footer.jsx
    │   │   ├── Page.jsx       # wraps each page: <title>, meta description, reveal-on-scroll
    │   │   ├── ScrollManager.jsx  # scroll-to-top / #hash scrolling on navigation
    │   │   └── BackToTop.jsx
    │   └── ui/
    │       └── CountUp.jsx    # animated stat numbers
    │
    ├── hooks/
    │   ├── useReveal.js       # fade-up on scroll for `.rv` elements
    │   └── useDemoForm.js     # validation + (fake) submission for Apply/Contact
    │
    ├── context/I18nContext.jsx  # language state + t() helper
    ├── i18n/or.js               # demo Odia dictionary (NOT a real translation)
    │
    ├── data/
    │   ├── site.js            # nav links, footer columns, legal links
    │   └── socials.jsx        # footer social icons/links
    │
    └── styles/
        ├── index.css          # entry: Tailwind + design tokens + layer order
        ├── base.css           # design system: tokens, buttons, cards, nav, footer, sections
        └── pages.css          # page-level styles: heroes, filters, timeline, forms, tables
```

## Routes

| URL | Page | Purpose |
|---|---|---|
| `/` | `Home.jsx` | Hero, programme overview, labs, stats, voices, event, FAQ, CTA |
| `/programmes` | `Programmes.jsx` | All 7 programmes with fee/intake; filter by category |
| `/admissions` | `Admissions.jsx` | Deadline, 5-step process, fees, scholarship bands |
| `/about` | `About.jsx` | Story, campus numbers, research labs, faculty |
| `/voices` | `Voices.jsx` | Student/parent quotes and outcomes |
| `/event` | `Event.jsx` | AI Build Week 2026 schedule, tracks, prizes |
| `/apply` | `Apply.jsx` | Application form |
| `/contact` | `Contact.jsx` | Contact details, message form, campus visits |

Add a page: create `src/pages/YourPage.jsx` (wrap the content in `<Page title="…" description="…">`),
then register it in `src/App.jsx`, and add a link in `src/data/site.js` if it belongs in the nav.

## Styling

Styling has two layers, loaded from `src/styles/index.css`:

1. **Design system (`base.css`, `pages.css`)** — the original hand-written CSS: colour tokens as CSS variables
   (`--lime`, `--salmon`, `--lav`, `--peach`, `--red`, `--ink`, …), plus classes such as `.btn`, `.card`,
   `.hero`, `.prog-card`, `.formcard`. It sits in Tailwind's `components` layer, so the existing pages look
   exactly as designed.
2. **Tailwind CSS 4** — theme tokens and utilities. The brand palette is exposed as Tailwind colours
   (`bg-lime`, `bg-salmon`, `bg-lav`, `bg-peach`, `text-brand`, `text-ink`, `bg-night`, `font-display`, …),
   all pointing at the same CSS variables, so there is one source of truth. Tailwind's preflight reset is
   intentionally **not** loaded, so it cannot disturb the existing design.

Utilities override the design-system classes, so you can tweak an element with
`<div className="card mt-8 bg-peach">`. `NotFound.jsx` is written entirely in Tailwind as a reference.

To change the brand colours, edit the variables in `:root` at the top of `src/styles/base.css`.

## How the interactive parts work

| Feature | Where | Notes |
|---|---|---|
| Sticky nav shadow, mobile menu | `Navbar.jsx` | State-driven, closes on route change |
| Reveal on scroll | `hooks/useReveal.js` | Adds `.in` to `.rv` elements; respects `prefers-reduced-motion` via CSS |
| Animated stats | `components/ui/CountUp.jsx` | Counts up when scrolled into view |
| Programme filter | `pages/Programmes.jsx` | `filter` state; cards hide via `data-hide` attributes |
| Forms | `hooks/useDemoForm.js` | Validates required fields, email and Indian 10-digit mobile |
| Language toggle | `context/I18nContext.jsx` | Text wrapped in `t('…')` is swapped from `i18n/or.js` |
| Page titles / meta | `components/layout/Page.jsx` | Per-page `<title>` and description |

## Before launch — things that are demo-only

1. **Replace placeholder content.** See [`docs/CONTENT-BRIEF.md`](docs/CONTENT-BRIEF.md) → *Fact-Check Checklist*.
   Contact details use `@oiai.example` addresses and a placeholder phone/address.
2. **Wire up the forms.** `useDemoForm.js` fakes submission with a timeout and generates a random reference number.
   Replace the `setTimeout` block with a real request, e.g. `fetch(import.meta.env.VITE_API_URL + '/applications', …)`.
   The footer "Join" form in `Footer.jsx` is also a stub.
3. **Odia / i18n.** The toggle swaps only ~12 phrases and is **not a real translation**. Options: hire a translator,
   machine-translate plus human review, or translate only the nav/CTAs. When you go further, move the strings
   into per-language JSON files and wrap the remaining text in `t()`.
4. **Legal links** (Privacy, Terms, Anti-Ragging, Grievance Redressal) and **social links** are `#` placeholders.
   Create the documents and link them in `Footer.jsx` / `data/socials.jsx`.
5. **Real photography.** The design uses CSS and inline SVG instead of photos. Real campus photos will outperform
   them; the slots are noted in the content brief.
6. **SEO.** Add a sitemap, `robots.txt` and Open Graph tags once the domain is known. Because this is a client-rendered
   SPA, consider pre-rendering (e.g. `vite-plugin-ssg`) if search visibility matters.
7. **Analytics** on the Apply button and scroll depth, as suggested in the brief.

## Deployment

`npm run build` outputs a static site to `dist/`. Any static host works, but because routes like `/apply` are
handled by React Router, the host must serve `index.html` for unknown paths:

- **Netlify** — build command `npm run build`, publish directory `dist`. `public/_redirects` already handles the fallback.
- **Vercel** — framework preset *Vite*. Add a `vercel.json` with `{ "rewrites": [{ "source": "/(.*)", "destination": "/" }] }`.
- **Cloudflare Pages** — build `npm run build`, output `dist`. SPA fallback is automatic.
- **GitHub Pages** — needs a `404.html` copy of `index.html` for the fallback, and `base: '/<repo-name>/'` in `vite.config.js`.
- **Nginx** — `try_files $uri /index.html;`

## Notes on the conversion from static HTML

This project was converted from eight standalone HTML pages plus `styles.css`, `pages.css` and `main.js`.
Page text and structure are unchanged; the work was in turning shared markup into components and the
script into hooks. Small deliberate differences:

- The "Founded 2019" stat no longer renders as "2,019" (the original number formatter added a thousands separator).
- The contact confirmation shows an `OIAI-MSG-…` reference, as its placeholder intended (the original script overwrote it with `OIAI-2026-…`).
- The Odia toggle no longer strips inner markup from headings.
- Page-load animation runs on the page content, not the navbar, so the nav doesn't flash on every navigation.
- Fonts load via a normal stylesheet link with `display=swap`.
