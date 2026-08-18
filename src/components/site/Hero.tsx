import { Link } from "@tanstack/react-router";

export function Hero() {
  return (
    <section className="on-dark relative isolate flex min-h-[85svh] items-end overflow-hidden pt-24">
      <picture>
        <source media="(max-width: 640px)" srcSet="/images/hero-mobile.webp" />
        <source media="(max-width: 1280px)" srcSet="/images/hero-1200.webp" />
        <img
          src="/images/hero-desktop.webp"
          alt="Kreatech — tarkvaraarendus"
          width={1672}
          height={941}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        />
      </picture>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-teal-900 via-teal-900/70 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-28 bg-gradient-to-b from-teal-900/70 to-transparent"
      />

      <div className="mx-auto w-full max-w-6xl px-5 pb-14 sm:pb-20">
        <p className="max-w-xl text-balance text-[clamp(1rem,2.6vw,1.375rem)] text-paper/90">
          Tarkvaraarendus, veebilahendused ja tehniline projektijuhtimine.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Link
            to="/"
            hash="kontakt"
            className="border border-sand/60 px-6 py-3 text-sm text-paper transition-colors hover:bg-sand hover:text-teal-900"
          >
            Räägime projektist <span aria-hidden="true">→</span>
          </Link>
          <Link to="/projektid" className="underline-link text-sm text-paper/80">
            Vaata tehtud töid
          </Link>
        </div>
      </div>
    </section>
  );
}
