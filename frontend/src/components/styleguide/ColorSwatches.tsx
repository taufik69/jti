import { contrastRatio } from "@/lib/contrast";
import { swatchGroups } from "./swatches";

function readableOn(hex: string): string {
  return contrastRatio("#FFFFFF", hex) >= 4.5 ? "#FFFFFF" : "#1C1720";
}

export function ColorSwatches() {
  return (
    <div className="space-y-12">
      {swatchGroups.map((group) => (
        <div key={group.title}>
          <h3 className="mb-4 text-[0.9375rem] font-medium text-ink">{group.title}</h3>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {group.swatches.map((swatch) => (
              <li key={swatch.token} className="overflow-hidden rounded-card border border-line bg-paper">
                <div
                  className="flex h-24 items-end p-3 text-[0.8125rem] tabular-nums"
                  style={{ background: swatch.hex, color: readableOn(swatch.hex) }}
                >
                  {contrastRatio(readableOn(swatch.hex), swatch.hex)}:1
                </div>
                <div className="p-3 text-[0.8125rem]">
                  <p className="font-medium text-ink">{swatch.token}</p>
                  <p className="tabular-nums text-muted">{swatch.hex}</p>
                  {swatch.note && <p className="mt-1 text-body">{swatch.note}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
