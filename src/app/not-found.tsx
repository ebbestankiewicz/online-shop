import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-md py-16 text-center">
      <p className="font-serif text-7xl text-terracotta">404</p>
      <h1 className="mt-4 font-serif text-3xl">
        You&apos;ve wandered off the market
      </h1>
      <p className="mt-3 text-ink-soft">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
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
