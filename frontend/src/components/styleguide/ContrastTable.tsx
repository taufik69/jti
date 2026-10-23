import { contrastRatio } from "@/lib/contrast";
import { contrastPairs } from "./swatches";

export function ContrastTable() {
  return (
    <table className="w-full text-left text-[0.9375rem]">
      <caption className="sr-only">WCAG contrast for key text and background pairs</caption>
      <thead className="text-label text-muted">
        <tr className="border-b border-line">
          <th scope="col" className="py-3 font-medium">Pair</th>
          <th scope="col" className="py-3 font-medium">Sample</th>
          <th scope="col" className="py-3 text-right font-medium">Ratio</th>
        </tr>
      </thead>
      <tbody>
        {contrastPairs.map((pair) => {
          const ratio = contrastRatio(pair.fg, pair.bg);
          return (
            <tr key={pair.label} className="border-b border-line">
              <td className="py-3 pr-4">{pair.label}</td>
              <td className="py-3 pr-4">
                <span className="rounded-control px-2.5 py-1" style={{ color: pair.fg, background: pair.bg }}>
                  Aa Training
                </span>
              </td>
              <td className="py-3 text-right tabular-nums">
                {ratio}:1 <span className="text-muted">{ratio >= 7 ? "AAA" : ratio >= 4.5 ? "AA" : "Fail"}</span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
