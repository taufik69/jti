/** Shown while a route's chunk loads: holds the footer down and fades in a thin bar only if loading is slow. */
export function PageFallback() {
  return (
    <div aria-busy="true" aria-label="Loading page" className="min-h-[70vh] bg-canvas">
      <div className="h-0.5 w-full overflow-hidden opacity-0 [animation:fade-in_200ms_ease-out_400ms_forwards]">
        <div className="h-full w-1/3 bg-plum-700 motion-safe:animate-[loading-bar_1.2s_ease-in-out_infinite]" />
      </div>
    </div>
  );
}
