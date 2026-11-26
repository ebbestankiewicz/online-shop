export default function ProductLoading() {
  return (
    <div
      aria-busy="true"
      aria-label="Loading product"
      className="animate-pulse"
    >
      <div className="h-4 w-36 rounded bg-ink/10" />
      <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="aspect-square rounded-card bg-ink/5" />
        <div className="space-y-5">
          <div className="h-6 w-32 rounded-full bg-ink/10" />
          <div className="h-12 w-3/4 rounded bg-ink/10" />
          <div className="h-5 w-28 rounded bg-ink/10" />
          <div className="h-8 w-40 rounded bg-ink/10" />
          <div className="space-y-2">
            <div className="h-4 w-full rounded bg-ink/10" />
            <div className="h-4 w-5/6 rounded bg-ink/10" />
          </div>
        </div>
      </div>
    </div>
  );
}
