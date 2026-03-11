type SectionTitleProps = {
  tag?: string;
  title: string;
  description?: string;
  className?: string;
};

export default function SectionTitle({
  tag,
  title,
  description,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`mx-auto max-w-2xl text-center ${className}`}>
      {tag && (
        <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
          {tag}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>
      )}
    </div>
  );
}
