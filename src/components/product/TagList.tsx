interface TagListProps {
  tags: string[];
}

export function TagList({ tags }: TagListProps) {
  if (tags.length === 0) return null;

  return (
    <ul className="flex flex-wrap gap-2" aria-label="Tags">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full bg-sage/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink-soft"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
