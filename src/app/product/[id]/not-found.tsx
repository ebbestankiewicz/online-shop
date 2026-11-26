import Link from "next/link";

export default function ProductNotFound() {
  return (
    <div className="mx-auto max-w-md py-16 text-center">
      <h1 className="font-serif text-3xl">This item has left the market</h1>
      <p className="mt-3 text-ink-soft">
        We couldn&apos;t find the product you were looking for. It may have been
        sold or removed.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-full bg-ink px-5 py-2.5 font-semibold text-cream transition-colors hover:bg-ink/85"
      >
        Back to the market
      </Link>
    </div>
  );
}
