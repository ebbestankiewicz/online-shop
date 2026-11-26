"use client";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  console.error(error);

  return (
    <div className="mx-auto max-w-md py-16 text-center">
      <h1 className="font-serif text-3xl">The market stalls are empty</h1>
      <p className="mt-3 text-ink-soft">
        We couldn&apos;t load the products right now. Check your connection and
        try again.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-6 rounded-full bg-ink px-5 py-2.5 font-semibold text-cream transition-colors hover:bg-ink/85"
      >
        Try again
      </button>
    </div>
  );
}
