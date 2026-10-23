# CLAUDE.md

Guidance for Claude Code when working in the frontend app.

## Project Structure

```
frontend/
├── CLAUDE.md          # this file
├── .claude/
│   ├── agents/        # custom subagents (empty for now)
│   ├── plan/          # implementation plans (empty for now)
│   ├── skills/        # frontend skills (see below)
│   └── rules/         # coding rules, always follow them
├── docs/plans/        # design plans
├── public/            # static assets (brand/, images/)
└── src/
    ├── app/           # Next.js App Router routes, globals.css (design tokens in @theme)
    ├── components/    # ui/, layout/, form/, course/, motion/, styleguide/
    ├── content/       # typed site data (courses, nav, footer, site facts) — CMS-ready
    ├── hooks/
    └── lib/
```

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript (strict), Tailwind CSS v4, linted with oxlint.
- `motion` for animation, `lenis` for smooth scroll, Radix primitives (NavigationMenu, Dialog,
  Accordion) restyled to tokens, `lucide-react` icons via `components/ui/Icon` (1.5px stroke).
- All commands run from `frontend/`:
  - `npm install` — install dependencies
  - `npm run dev` — start dev server
  - `npm run build` — type-check and build for production
  - `npm run typecheck` — TypeScript only
  - `npm run lint` — run oxlint
  - `npm run start` — serve the production build
- `/styleguide` shows every token and base component.

## Skills

Installed in `.claude/skills/`:

- `frontend-design` — visual design direction and typography.
- `senior-frontend` — React/TypeScript patterns, performance, best practices.
- `ui-ux-pro-max` — UI/UX styles, palettes, font pairings, UX guidelines.

## Rules (must follow)

Detailed rules live in `.claude/rules/`. They override anything a skill suggests:

- `component-size.md` — every component file is **80 lines max**. Split into child components, hooks, types, or utils when larger.
- `typescript.md` — TypeScript only, strict mode, no `any`, typed props.

## Workflow

1. Read the relevant rules in `.claude/rules/` before writing code.
2. Keep components small, focused, and one per file.
3. Run `npm run build` after changes to confirm the app type-checks and builds.
