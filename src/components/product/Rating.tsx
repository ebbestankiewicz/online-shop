interface RatingProps {
  value: number;
  max?: number;
}

export function Rating({ value, max = 5 }: RatingProps) {
  if (value === 0) {
    return <p className="text-sm text-ink-soft">No ratings yet</p>;
  }

  return (
    <div
      className="flex items-center gap-0.5"
      role="img"
      aria-label={`Rated ${value} out of ${max}`}
    >
      {Array.from({ length: max }, (_, index) => (
        <svg
          key={index}
          aria-hidden
          width="15"
          height="15"
          viewBox="0 0 24 24"
          className={index < value ? "fill-mustard" : "fill-ink/15"}
        >
          <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.5 1.3 6.6L12 17.3l-5.9 3.2 1.3-6.6L2.5 9.4l6.6-.8L12 2.5z" />
        </svg>
      ))}
    </div>
  );
}
