type WorkCardProps = {
  title: string;
  tag: string;
  href?: string;
  image?: string;
  index: number;
  total: number;
  fallbackColor: string;
  /** Visual-only duplicate used for the seamless loop: hidden from a11y + tab order. */
  decorative?: boolean;
};

export function WorkCard({
  title,
  tag,
  href,
  image,
  index,
  total,
  fallbackColor,
  decorative = false,
}: WorkCardProps) {
  const isExternal = Boolean(href);
  const imgSrc =
    image ||
    `https://placehold.co/1200x900/${fallbackColor}/eab308?text=${encodeURIComponent(title)}&font=montserrat`;

  return (
    <a
      href={href || "#"}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(decorative ? { "aria-hidden": true, tabIndex: -1 } : {})}
      className="group relative block w-[80vw] shrink-0 sm:w-[55vw] md:w-[40vw] lg:w-[30vw] xl:w-[26rem]"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/70 bg-surface transition-colors duration-500 group-hover:border-accent/50">
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          draggable={false}
          className="pointer-events-none size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 text-[0.6875rem] uppercase tracking-[0.2em] text-white/70 mix-blend-difference">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>

      <div className="flex items-start justify-between gap-6 pt-5">
        <div className="min-w-0">
          <h3 className="font-display text-lg font-semibold leading-snug tracking-[-0.02em] md:text-xl">
            <span className="bg-gradient-to-r from-accent to-accent bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-500 ease-out group-hover:bg-[length:100%_1px]">
              {title}
            </span>
          </h3>
          <p className="mt-2 text-[0.75rem] uppercase tracking-[0.16em] text-muted-foreground/80">
            {tag}
          </p>
        </div>
        <span
          aria-hidden="true"
          className="mt-1 shrink-0 text-lg text-muted-foreground transition-all duration-500 group-hover:translate-x-1 group-hover:text-accent"
        >
          →
        </span>
      </div>
    </a>
  );
}
