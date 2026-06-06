type WorkCardProps = {
  title: string;
  tag: string;
  href?: string;
  image?: string;
  index: number;
  total: number;
  fallbackColor: string;
};

export function WorkCard({ title, tag, href, image, index, total, fallbackColor }: WorkCardProps) {
  const isExternal = Boolean(href);
  const imgSrc =
    image ||
    `https://placehold.co/1200x900/${fallbackColor}/eab308?text=${encodeURIComponent(title)}&font=montserrat`;

  return (
    <a
      href={href || "#"}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group relative shrink-0 block overflow-hidden rounded-3xl border border-border bg-surface w-[80vw] sm:w-[55vw] md:w-[40vw] lg:w-[30vw] xl:w-[26rem]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          draggable={false}
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] pointer-events-none"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-accent/40 via-transparent to-transparent opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs uppercase tracking-widest text-white/90 backdrop-blur">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>
      </div>
      <div className="flex items-start justify-between gap-4 p-6 md:p-7">
        <div className="min-w-0">
          <h3 className="font-display text-lg font-semibold md:text-xl line-clamp-2">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{tag}</p>
        </div>
        <span className="shrink-0 text-2xl text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-accent">
          →
        </span>
      </div>
    </a>
  );
}
