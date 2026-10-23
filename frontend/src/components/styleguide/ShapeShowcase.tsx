import { SectionLabel } from "@/components/ui/SectionLabel";

const radii = [
  { token: "radius-control", value: "6px", use: "Buttons, inputs", className: "rounded-control" },
  { token: "radius-card", value: "16px", use: "Cards, menus", className: "rounded-card" },
  { token: "radius-media", value: "28px", use: "Large photos", className: "rounded-media" },
];

export function ShapeShowcase() {
  return (
    <div className="space-y-10">
      <ul className="grid gap-4 sm:grid-cols-3">
        {radii.map((radius) => (
          <li key={radius.token}>
            <div className={`h-28 border border-plum-300 bg-plum-50 ${radius.className}`} />
            <p className="mt-3 text-[0.875rem] font-medium text-ink">
              {radius.token} · {radius.value}
            </p>
            <p className="text-[0.875rem] text-muted">{radius.use}</p>
          </li>
        ))}
      </ul>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-card border border-line bg-paper p-6 text-[0.9375rem]">
          Default: 1px line border, no shadow.
        </div>
        <div className="rounded-card bg-paper p-6 text-[0.9375rem] shadow-float">
          shadow-float: menus and the hero card only.
        </div>
      </div>
      <div className="space-y-4">
        <SectionLabel index="01">Courses</SectionLabel>
        <SectionLabel>Study with us</SectionLabel>
        <div className="rounded-card bg-plum-950 p-6">
          <SectionLabel index="05" onDark>
            In numbers
          </SectionLabel>
        </div>
      </div>
    </div>
  );
}
