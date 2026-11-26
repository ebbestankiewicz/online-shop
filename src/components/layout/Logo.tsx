import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="Sunday Market – home"
      className="inline-flex items-center gap-2.5"
    >
      {/* Sun setting behind the horizon */}
      <span
        aria-hidden
        className="relative h-9 w-9 overflow-hidden rounded-full bg-mustard"
      >
        <span className="absolute inset-x-0 bottom-0 h-[45%] bg-terracotta" />
      </span>
      <span className="leading-none">
        <span className="block font-serif text-2xl">Sunday</span>
        <span className="block text-[0.6rem] font-bold tracking-[0.35em] text-ink-soft">
          MARKET
        </span>
      </span>
    </Link>
  );
}
