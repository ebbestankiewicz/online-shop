import type { Review } from "@/types/product";
import { Rating } from "./Rating";

interface ReviewListProps {
  reviews: Review[];
}

export function ReviewList({ reviews }: ReviewListProps) {
  if (reviews.length === 0) {
    return (
      <p className="text-ink-soft">No reviews yet. Be the first to try it.</p>
    );
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {reviews.map((review) => (
        <li
          key={review.id}
          className="rounded-card bg-paper p-5 ring-1 ring-ink/5"
        >
          <div className="flex items-center justify-between gap-3">
            <p className="font-bold">{review.username}</p>
            <Rating value={review.rating} />
          </div>
          <p className="mt-2 text-ink-soft">{review.description}</p>
        </li>
      ))}
    </ul>
  );
}
