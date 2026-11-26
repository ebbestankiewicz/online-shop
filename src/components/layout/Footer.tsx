export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10">
      <div className="page-container flex flex-col gap-2 py-8 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between">
        <p>
          <span className="font-serif text-base text-ink">Sunday Market</span> —
          good things, found slowly.
        </p>
        <p>© {year} · Noroff JavaScript Frameworks</p>
      </div>
    </footer>
  );
}
