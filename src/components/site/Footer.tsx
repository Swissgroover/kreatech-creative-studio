import { Link } from "@tanstack/react-router";
import { SERVICES, SITE } from "@/content/site";

export function Footer() {
  return (
    <footer className="on-dark border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <p className="font-display text-xl tracking-[0.22em]">KREATECH</p>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Kreatech OÜ arendab ettevõtetele kohandatud tarkvara, veebilahendusi ja pakub tehnilist
            projektijuhtimist.
          </p>
        </div>

        <nav aria-label="Teenused">
          <h2 className="label-xs text-muted-foreground">Teenused</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to="/$slug" params={{ slug: s.slug }} className="underline-link">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Leht">
          <h2 className="label-xs text-muted-foreground">Leht</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/" className="underline-link">
                Avaleht
              </Link>
            </li>
            <li>
              <Link to="/teenused" className="underline-link">
                Kõik teenused
              </Link>
            </li>
            <li>
              <Link to="/projektid" className="underline-link">
                Projektid
              </Link>
            </li>
            <li>
              <Link to="/" hash="meist" className="underline-link">
                Meist
              </Link>
            </li>
            <li>
              <Link to="/" hash="kkk" className="underline-link">
                Korduma kippuvad küsimused
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="label-xs text-muted-foreground">Kontakt</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={`mailto:${SITE.email}`} className="underline-link">
                {SITE.email}
              </a>
            </li>
            <li className="text-muted-foreground">Kreatech OÜ, Eesti</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-border px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Kreatech OÜ</p>
        <p>Tarkvaraarendus, veebilahendused ja tehniline projektijuhtimine.</p>
      </div>
    </footer>
  );
}
