interface DataTableProps {
  head: string[];
  rows: string[][];
  caption?: string;
}

/** Zebra-free table with hairlines; scrolls sideways inside its card on narrow screens. */
export function DataTable({ head, rows, caption }: DataTableProps) {
  return (
    <figure className="overflow-hidden rounded-card border border-line bg-paper">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[28rem] text-left text-[0.9375rem]">
          <thead className="bg-plum-50/60">
            <tr>
              {head.map((cell) => (
                <th key={cell} scope="col" className="px-5 py-3.5 text-label text-plum-700">
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {rows.map((row) => (
              <tr key={row.join("|")}>
                {row.map((cell, i) => (
                  <td key={i} className={i === 0 ? "px-5 py-3.5 font-medium text-ink" : "px-5 py-3.5 tabular-nums"}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption && <figcaption className="border-t border-line px-5 py-3 text-[0.8125rem] text-muted">{caption}</figcaption>}
    </figure>
  );
}
