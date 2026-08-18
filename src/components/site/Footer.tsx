import { useLang } from "@/i18n/lang";
import { CONTACT_EMAIL } from "@/i18n/dict";

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg text-foreground">Kreatech OÜ</p>
          <p className="mt-1 max-w-md">{t.footer.tagline}</p>
        </div>
        <div className="md:text-right">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-foreground underline-offset-4 hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="mt-1">
            © {year} Kreatech OÜ. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
