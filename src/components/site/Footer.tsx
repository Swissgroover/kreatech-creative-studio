import { useLang } from "@/i18n/lang";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-border/60 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          <span className="font-display font-semibold tracking-tight text-foreground">Kreatech</span>
          <span className="text-muted-foreground/80">© {new Date().getFullYear()}</span>
        </div>
        <p className="max-w-[46ch] text-[0.8125rem] leading-relaxed text-muted-foreground/80">
          {t.footer.legal}
        </p>
        <a
          href="mailto:info@kreatech.ee"
          className="underline decoration-accent/70 decoration-1 underline-offset-4 transition-colors duration-300 hover:text-accent"
        >
          info@kreatech.ee
        </a>
      </div>
    </footer>
  );
}
