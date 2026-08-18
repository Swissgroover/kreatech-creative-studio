import { useLang } from "@/i18n/lang";

export function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className="relative">
      <div className="relative w-full md:h-[86vh]">
        <picture className="block w-full md:h-full">
          <source
            type="image/avif"
            srcSet="/images/hero-800.avif 800w, /images/hero-1280.avif 1280w, /images/hero-1672.avif 1672w"
            sizes="100vw"
          />
          <source
            type="image/webp"
            srcSet="/images/hero-800.webp 800w, /images/hero-1280.webp 1280w, /images/hero-1672.webp 1672w"
            sizes="100vw"
          />
          <img
            src="/images/hero-1280.jpg"
            alt={t.hero.alt}
            width={1672}
            height={941}
            fetchPriority="high"
            decoding="async"
            className="h-auto w-full md:h-full md:object-cover md:object-center"
          />
        </picture>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background"
        />
      </div>

      <div className="relative z-10 mx-auto mt-8 max-w-6xl px-6 pb-4 md:-mt-24">
        <p className="max-w-xl text-balance text-lg text-foreground md:text-xl">
          {t.hero.statement}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-sm bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity duration-200 hover:opacity-90"
          >
            {t.hero.ctaPrimary} <span aria-hidden="true">→</span>
          </a>
          <a
            href="#works"
            className="text-sm text-muted-foreground underline-offset-4 transition-colors duration-200 hover:text-foreground hover:underline"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
