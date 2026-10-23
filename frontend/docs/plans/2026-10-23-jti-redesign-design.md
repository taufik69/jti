# JTI website redesign — design plan

Date: 2026-10-23. Source brief: client prompt "Redesign Job Training Institute (jti.edu.au)".

## Subject, audience, job

- Subject: a Melbourne RTO (RTO 122208, CRICOS 03373B) teaching care-sector and business qualifications.
- Audience: prospective students, many international and on a phone, comparing several colleges.
- Primary job: understand "what can I study here, how, and is this place legitimate" in five seconds, then enquire or apply.

## Tokens

- Colour: fixed by the brief (plum scale from `#5D147D` / `#733193`, gold `#FFCB69` / `#FDCC76`, cream `#FFF6E3`, warm neutrals). Gold limited to primary CTAs, active states and numerals.
- Type: Schibsted Grotesk 400/500/600 for everything functional; Newsreader italic 400 only for a single accent word in hero headlines, pull quotes and stat numerals.
- Radius: 6px controls, 16px cards, 28px large media. Nothing else.
- Elevation: one float shadow for menus and the hero's floating card; everything else uses 1px `line` borders.

## Layout concept

Left-aligned 12-column grid, 1280px max. Headlines hang on column 1; body copy never exceeds 65ch. Sections alternate between canvas, paper and one deep-plum band (Numbers + Footer), so the page has a rhythm of light-light-dark rather than a uniform stack.

```
Hero         [ headline 7 cols           ][ photo 5 cols, 28px radius ]
Course find  [ toggle ]  [ big card 6 ][ card 3 ][ card 3 ] / rail on mobile
Study modes  ───────── row list with dividers ─────────
Why JTI      [ large image tile 6 ][ 2x2 small tiles 6 ]
Numbers      plum-950 band, Newsreader numerals
```

## Review against generic defaults (what changed and why)

- The brief asks for section labels like "01 — Courses" and an italic accent word. Both are common AI tells. Kept because the client asked, but restricted: numbered labels appear only on the home page, where sections are a deliberate reading order; inner pages use plain labels. The italic accent appears once per page at most.
- The `ui-ux-pro-max` generator suggested claymorphism, blue `#3B82F6` and Baloo/Comic Neue. Rejected: it conflicts with the brand colours and reads as a children's app, not a vocational college.
- Avoided the identical-card kit: courses use an asymmetric grid, study modes a divided list, Why JTI a bento.
- Header shrink is done with background, border and a logo transform, not a height change, so CLS stays at 0.

## Engineering

- Next.js 15 App Router, Tailwind v4 tokens in `@theme`, Radix primitives (NavigationMenu, Dialog, Accordion) restyled to tokens.
- Content in `src/content/*.ts`. Existing URLs (`/courses/...`, `/study/...`, `/who-we-are`, ...) are preserved for SEO.
- Project rule: every component file ≤ 80 lines, strict TypeScript, no `any`.
