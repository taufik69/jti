---
paths:
  - "src/**/*.tsx"
  - "src/**/*.ts"
---

# TypeScript Rule

- All frontend code is TypeScript (`.ts` / `.tsx`). Never add `.js` / `.jsx` source files.
- No `any`. Use precise types, generics, or `unknown` with narrowing.
- Type component props with an explicit `interface` named `<Component>Props`.
- Use function components and hooks only. No class components.
- Keep `strict` mode on in `tsconfig`. Do not disable type checks with `@ts-ignore`; fix the type instead.
