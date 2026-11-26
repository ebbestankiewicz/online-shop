export default function Loading() {
  return (
    <div aria-busy="true" aria-label="Loading products">
      <div className="mb-10 h-28 max-w-xl animate-pulse rounded-card bg-ink/5" />
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }, (_, index) => (
          <li
            key={index}
            className="animate-pulse overflow-hidden rounded-card bg-paper"
          >
            <div className="aspect-[4/3] bg-ink/5" />
            <div className="space-y-3 p-4">
              <div className="h-5 w-3/4 rounded bg-ink/10" />
              <div className="h-4 w-1/3 rounded bg-ink/10" />
              <div className="h-5 w-1/4 rounded bg-ink/10" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
