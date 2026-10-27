/** Up to two initials from a name, skipping words that don't start with a letter (e.g. "&", "(Pty)"). */
export function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter((word) => /^[A-Za-z]/.test(word))
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
}
