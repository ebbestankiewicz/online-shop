interface TextFieldProps {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  type?: "text" | "email";
  multiline?: boolean;
  autoComplete?: string;
}

export function TextField({
  id,
  label,
  value,
  error,
  onChange,
  onBlur,
  type = "text",
  multiline = false,
  autoComplete,
}: TextFieldProps) {
  const errorId = `${id}-error`;

  const sharedProps = {
    id,
    name: id,
    value,
    onBlur,
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? errorId : undefined,
    className: `w-full rounded-xl bg-paper px-4 py-3 transition focus:outline-none focus:ring-2 focus:ring-terracotta ${
      error ? "ring-2 ring-terracotta-dark" : "ring-1 ring-ink/15"
    }`,
  };

  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-bold">
        {label}
      </label>

      {multiline ? (
        <textarea
          {...sharedProps}
          rows={6}
          onChange={(event) => onChange(event.target.value)}
        />
      ) : (
        <input
          {...sharedProps}
          type={type}
          autoComplete={autoComplete}
          onChange={(event) => onChange(event.target.value)}
        />
      )}

      {error && (
        <p id={errorId} className="text-sm font-semibold text-terracotta-dark">
          {error}
        </p>
      )}
    </div>
  );
}
