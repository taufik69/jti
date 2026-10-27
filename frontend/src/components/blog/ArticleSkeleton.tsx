/** Placeholder lines while the article chunk loads, so the layout doesn't jump. */
export function ArticleSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading article" className="max-w-[68ch] space-y-4">
      {[100, 96, 92, 98, 60, 0, 100, 94, 88].map((width, i) => (
        <div key={i} className="h-4 animate-pulse rounded-full bg-plum-50" style={{ width: `${width}%`, opacity: width ? 1 : 0 }} />
      ))}
    </div>
  );
}
