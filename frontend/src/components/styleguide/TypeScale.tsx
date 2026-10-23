const samples = [
  { token: "display", spec: "44 → 88px · 600 · 1.02", className: "text-display text-ink" },
  { token: "h1", spec: "36 → 60px · 600 · 1.08", className: "text-h1 text-ink" },
  { token: "h2", spec: "28 → 44px · 600 · 1.14", className: "text-h2 text-ink" },
  { token: "h3", spec: "22 → 28px · 500 · 1.2", className: "text-h3 text-ink" },
  { token: "body-lg", spec: "18 → 20px · 400 · 1.6", className: "text-body-lg" },
  { token: "body", spec: "16 → 17px · 400 · 1.65", className: "text-body" },
  { token: "label", spec: "13px · 500 · uppercase · 0.06em", className: "text-label text-plum-700" },
];

export function TypeScale() {
  return (
    <div>
      <ul className="divide-y divide-line">
        {samples.map((sample) => (
          <li key={sample.token} className="grid gap-2 py-6 md:grid-cols-[10rem_1fr] md:gap-8">
            <div className="text-[0.8125rem]">
              <p className="font-medium text-ink">{sample.token}</p>
              <p className="text-muted">{sample.spec}</p>
            </div>
            <p className={`${sample.className} max-w-[65ch]`}>
              {sample.token === "display" ? (
                <>
                  Lifting you to the next level
                </>
              ) : (
                "Certificate III in Individual Support (Ageing & Disability)"
              )}
            </p>
          </li>
        ))}
      </ul>
      <blockquote className="mt-10 max-w-[30ch] border-l-2 border-gold-500 pl-6 text-h3 font-medium text-plum-700">
        “Always lifting you to the next level.”
      </blockquote>
    </div>
  );
}
