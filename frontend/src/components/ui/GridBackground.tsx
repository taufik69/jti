import { cn } from "@/lib/cn";

interface GridBackgroundProps {
  className?: string;
  /** Cell size in px. */
  cell?: number;
}

/** A few cells tinted to break the repetition: [column, row]. */
const accents: [number, number][] = [
  [2, 1],
  [9, 3],
  [14, 1],
  [4, 6],
  [17, 7],
];

/**
 * Hairline grid for dark plum sections, fading out towards the edges.
 * Place inside a `relative isolate overflow-hidden` parent.
 */
export function GridBackground({ className, cell = 56 }: GridBackgroundProps) {
  return (
    <svg
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 size-full",
        "[mask-image:radial-gradient(ellipse_75%_70%_at_50%_45%,black_40%,transparent_100%)]",
        className,
      )}
    >
      <defs>
        <pattern id="jti-grid" width={cell} height={cell} patternUnits="userSpaceOnUse">
          <path d={`M${cell} 0H0V${cell}`} fill="none" stroke="rgb(255 255 255 / 0.08)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#jti-grid)" />
      {accents.map(([col, row]) => (
        <rect
          key={`${col}-${row}`}
          x={col * cell + 1}
          y={row * cell + 1}
          width={cell - 1}
          height={cell - 1}
          fill="rgb(139 79 171 / 0.18)"
        />
      ))}
    </svg>
  );
}
