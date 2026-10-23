---
paths:
  - "src/**/*.tsx"
  - "src/**/*.ts"
---

# Component Size Rule

- Every React component file must stay at **80 lines or fewer**, including imports, types, and blank lines.
- If a component approaches 80 lines, split it before adding more code:
  - Move sub-sections of JSX into smaller child components.
  - Move state and side-effect logic into a custom hook (`useSomething.ts`).
  - Move types/interfaces into a sibling `types.ts` file.
  - Move constants and pure helpers into `constants.ts` / `utils.ts`.
- One component per file. File name matches the component name (`UserCard.tsx` exports `UserCard`).
- Never compress code (long single lines, removed formatting) just to fit the limit. Split instead.
- After editing, check line count: `wc -l <file>`. Anything over 80 lines must be refactored before the task is done.
