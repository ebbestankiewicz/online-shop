interface QuantityControlProps {
  quantity: number;
  onChange: (quantity: number) => void;
  label: string;
  min?: number;
  max?: number;
}

export function QuantityControl({
  quantity,
  onChange,
  label,
  min = 1,
  max = 99,
}: QuantityControlProps) {
  const buttonClass =
    "grid h-9 w-9 place-items-center rounded-full text-lg transition-colors hover:bg-ink/5 disabled:opacity-30 disabled:hover:bg-transparent";

  return (
    <div
      role="group"
      aria-label={`Quantity for ${label}`}
      className="inline-flex items-center rounded-full ring-1 ring-ink/15"
    >
      <button
        type="button"
        onClick={() => onChange(quantity - 1)}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
        className={buttonClass}
      >
        −
      </button>
      <span
        aria-live="polite"
        className="w-8 text-center font-bold tabular-nums"
      >
        {quantity}
      </span>
      <button
        type="button"
        onClick={() => onChange(quantity + 1)}
        disabled={quantity >= max}
        aria-label="Increase quantity"
        className={buttonClass}
      >
        +
      </button>
    </div>
  );
}
