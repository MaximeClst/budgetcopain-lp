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
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {tag}
        </span>
      )}
      <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted">
          {description}
        </p>
      )}
    </div>
  );
}
