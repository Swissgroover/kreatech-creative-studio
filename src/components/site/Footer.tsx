import { useLang } from "@/i18n/lang";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
          <span className="font-display font-semibold text-foreground">Kreatech</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
        <p className="text-center md:text-right">{t.footer.legal}</p>
        <a
          href="mailto:info@kreatech.ee"
          className="underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
        >
          info@kreatech.ee
        </a>
      </div>
    </footer>
  );
}
