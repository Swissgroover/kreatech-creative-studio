import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { CAPABILITIES, FAQ, PROCESS, PROJECTS, SERVICES, SITE } from "@/content/site";

export function SectionLabel({ children }: { children: string }) {
  return <p className="label-xs text-muted-foreground">{children}</p>;
}

/* ---------------------------------------------------------------- Intro */

export function Intro() {
  return (
    <section id="sisu" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-12 md:py-28">
        <Reveal className="md:col-span-6">
          <h1 className="font-display text-[clamp(2.25rem,5.2vw,4rem)]">
            Tarkvaraarendus ja veebilahendused, mis töötavad.
          </h1>
        </Reveal>
        <Reveal className="md:col-span-6 md:pt-3" delay={80}>
          <p className="text-lg">
            Kreatech OÜ on Eesti tarkvaraarendusettevõte. Arendame ettevõtetele kohandatud tarkvara,
            veebirakendusi ja veebilehti ning hoiame need pärast käivitamist töös.
          </p>
          <p className="mt-5 text-muted-foreground">
            Meie töö hõlmab kohandatud tarkvaraarendust, veebiarendust, WordPressi ja Statamicu
            lahendusi, liidestusi teiste süsteemidega, tarkvara analüüsi ja arhitektuuri, tehnilist
            projektijuhtimist ning pikaajalist hooldust ja edasiarendust. Töötame väikeses tiimis ja
            otse kliendiga.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Services */

export function ServicesSection() {
  return (
    <section id="teenused" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal className="md:flex md:items-end md:justify-between md:gap-10">
          <div>
            <SectionLabel>Teenused</SectionLabel>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,3rem)]">Mida me teeme</h2>
          </div>
          <p className="mt-4 max-w-md text-muted-foreground md:mt-0">
            Seitse teenust, mis katavad tarkvaraprojekti kogu elukaare — analüüsist arenduse,
            juhtimise ja hoolduseni.
          </p>
        </Reveal>

        <ul className="mt-14 border-t border-border">
          {SERVICES.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={i * 40} className="border-b border-border">
              <Link
                to={s.href}
                className="group grid gap-3 py-8 md:grid-cols-12 md:gap-8 md:py-10"
                aria-label={`${s.title} — loe lähemalt`}
              >
                <div className="md:col-span-1">
                  <span className="label-xs text-muted-foreground">{s.num}</span>
                </div>
                <h3 className="font-display text-2xl md:col-span-4 md:text-3xl">
                  <span className="underline-link">{s.title}</span>
                </h3>
                <p className="text-muted-foreground md:col-span-6">{s.short}</p>
                <span
                  aria-hidden="true"
                  className="text-muted-foreground transition-transform group-hover:translate-x-1 md:col-span-1 md:text-right"
                >
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ Why */

const WHY = [
  {
    title: "Sa räägid arendajatega",
    desc: "Väike tiim ilma vahekihtideta. Inimene, kes projekti arutab, on ka see, kes seda ehitab.",
  },
  {
    title: "Tehnoloogia valitakse projekti järgi",
    desc: "ReactJS, WordPress või Statamic — valik lähtub sisust, mahust ja sellest, kes lahendust hiljem haldab.",
  },
  {
    title: "Töö ei lõpe käivitamisega",
    desc: "Hooldus, uuendused ja edasiarendus samas tiimis, kes lahenduse ehitas.",
  },
  {
    title: "Äri ja tehnika kohtuvad",
    desc: "Oskame ärilise nõude tehniliseks ülesandeks tõlkida — ja vastupidi seletada, mida valik tähendab.",
  },
];

export function WhyKreatech() {
  return (
    <section className="on-sand border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal>
          <SectionLabel>Miks Kreatech</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(1.9rem,4vw,3rem)]">
            Väike tiim, selge vastutus ja lahendused, mida saab edasi arendada.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={i * 60} className="border-t border-border pt-6">
              <h3 className="font-display text-xl">{w.title}</h3>
              <p className="mt-3 text-muted-foreground">{w.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Projects */

export function ProjectsSection() {
  const featured = PROJECTS.slice(0, 6);
  return (
    <section id="projektid" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal className="md:flex md:items-end md:justify-between md:gap-10">
          <div>
            <SectionLabel>Projektid</SectionLabel>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,3rem)]">Valitud projektid</h2>
          </div>
          <Link to="/projektid" className="underline-link mt-4 inline-block text-sm md:mt-0">
            Kõik projektid →
          </Link>
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal as="article" key={p.slug} delay={(i % 3) * 60}>
              <Link to="/projektid/$slug" params={{ slug: p.slug }} className="group block">
                <img
                  src={p.image}
                  alt={`${p.name} — vaade veebilehest`}
                  width={1400}
                  height={875}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[8/5] w-full border border-border object-cover object-top"
                />
                <p className="label-xs mt-4 text-muted-foreground">{p.category}</p>
                <h3 className="mt-2 font-display text-2xl">
                  <span className="underline-link">{p.name}</span>
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- Project lead */

export function ProjectLead() {
  const service = SERVICES.find((s) => s.slug === "tehniline-projektijuhtimine")!;
  return (
    <section className="on-dark border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-12 md:py-28">
        <Reveal className="md:col-span-5">
          <SectionLabel>Tehniline projektijuhtimine</SectionLabel>
          <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,3rem)]">
            Arendusmeeskond on olemas. Puudub inimene, kes mõlema poole keelt räägib.
          </h2>
        </Reveal>
        <div className="md:col-span-6 md:col-start-7">
          <Reveal>
            <p className="text-lg">{service.intro}</p>
          </Reveal>
          <ul className="mt-8 space-y-4">
            {service.weDo.map((b, i) => (
              <Reveal as="li" key={b} delay={i * 50} className="border-t border-border pt-4">
                {b}
              </Reveal>
            ))}
          </ul>
          <Reveal>
            <Link
              to="/tehniline-projektijuhtimine"
              className="underline-link mt-8 inline-block text-sm"
            >
              Loe tehnilisest projektijuhtimisest →
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- Process */

export function ProcessSection() {
  return (
    <section id="protsess" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal>
          <SectionLabel>Tööprotsess</SectionLabel>
          <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,3rem)]">Kuidas me töötame</h2>
        </Reveal>
        <ol className="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS.map((step, i) => (
            <Reveal as="li" key={step.num} delay={i * 50} className="border-t border-border pt-5">
              <p className="label-xs text-muted-foreground">{step.num}</p>
              <h3 className="mt-2 font-display text-xl">{step.title}</h3>
              <p className="mt-2 text-muted-foreground">{step.desc}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- Capabilities */

export function Capabilities() {
  return (
    <section id="tehnoloogiad" className="on-sand border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal className="md:flex md:items-end md:justify-between md:gap-10">
          <div>
            <SectionLabel>Tehnoloogiad</SectionLabel>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,3rem)]">
              Millega me igapäevaselt töötame
            </h2>
          </div>
          <p className="mt-4 max-w-md text-muted-foreground md:mt-0">
            Kasutame tehnoloogiaid, mida ka ise hooldame. Kui projekt vajab midagi muud, ütleme seda
            ausalt.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((c, i) => (
            <Reveal key={c.title} delay={i * 50} className="border-t border-border pt-5">
              <h3 className="font-display text-xl">{c.title}</h3>
              <ul className="mt-3 space-y-1 text-muted-foreground">
                {c.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- About */

export function AboutSection() {
  return (
    <section id="meist" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-12 md:py-28">
        <Reveal className="md:col-span-4">
          <SectionLabel>Meist</SectionLabel>
          <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,3rem)]">Kreatech OÜ</h2>
        </Reveal>
        <div className="space-y-5 md:col-span-7 md:col-start-6">
          <Reveal>
            <p className="text-lg">
              Kreatech OÜ on Eesti tarkvaraarendusettevõte, mis arendab ettevõtetele ja
              organisatsioonidele kohandatud tarkvara, veebirakendusi ja veebilehti.
            </p>
          </Reveal>
          <Reveal delay={60}>
            <p className="text-muted-foreground">
              Tegeleme nii uute lahenduste arendamisega kui olemasolevate süsteemide ülevõtmise,
              korrastamise ja edasiarendamisega. Projektid ulatuvad sisuhaldusega veebilehtedest
              kohandatud ärisüsteemide ja liidestusteni. Lisaks arendusele pakume tarkvara analüüsi
              ja tehnilist projektijuhtimist, kui kliendil on arendusmeeskond olemas.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-muted-foreground">
              Töötame väikeses tiimis. See tähendab otsest suhtlust, lühikest otsustusahelat ja
              seda, et sama inimene, kes projekti alguses nõuded kirja paneb, vastutab ka tulemuse
              eest. Räägime eesti ja inglise keeles.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ FAQ */

export function FaqSection({
  items = FAQ,
  title = "Korduma kippuvad küsimused",
}: {
  items?: readonly { q: string; a: string }[];
  title?: string;
}) {
  return (
    <section id="kkk" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-12 md:py-28">
        <Reveal className="md:col-span-4">
          <SectionLabel>KKK</SectionLabel>
          <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,3rem)]">{title}</h2>
        </Reveal>
        <div className="md:col-span-7 md:col-start-6">
          <dl className="border-t border-border">
            {items.map((item, i) => (
              <Reveal key={item.q} delay={i * 30} className="border-b border-border py-6">
                <dt className="font-display text-xl">{item.q}</dt>
                <dd className="mt-2 text-muted-foreground">{item.a}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- Contact */

export function ContactSection() {
  return (
    <section id="kontakt" className="on-dark">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-12 md:py-28">
        <Reveal className="md:col-span-6">
          <SectionLabel>Kontakt</SectionLabel>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.25rem)]">
            On sul projekt, mis vajab tehnilist mõtlemist? Räägime läbi.
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            Kirjuta lühike kirjeldus projektist või olukorrast. Vastame paari tööpäeva jooksul ja
            lepime kokku tutvumiskõne.
          </p>
          <p className="mt-8">
            <a href={`mailto:${SITE.email}`} className="underline-link text-lg">
              {SITE.email}
            </a>
          </p>
        </Reveal>
        <Reveal className="md:col-span-5 md:col-start-8">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <form
      action={`mailto:${SITE.email}`}
      method="post"
      encType="text/plain"
      className="space-y-5"
      aria-label="Kontaktivorm"
    >
      <div>
        <label htmlFor="nimi" className="label-xs text-muted-foreground">
          Nimi
        </label>
        <input
          id="nimi"
          name="Nimi"
          type="text"
          required
          autoComplete="name"
          className="mt-2 w-full border border-border bg-transparent px-4 py-3 text-base"
        />
      </div>
      <div>
        <label htmlFor="email" className="label-xs text-muted-foreground">
          E-post
        </label>
        <input
          id="email"
          name="E-post"
          type="email"
          required
          autoComplete="email"
          className="mt-2 w-full border border-border bg-transparent px-4 py-3 text-base"
        />
      </div>
      <div>
        <label htmlFor="sonum" className="label-xs text-muted-foreground">
          Sõnum
        </label>
        <textarea
          id="sonum"
          name="Sõnum"
          rows={5}
          required
          className="mt-2 w-full border border-border bg-transparent px-4 py-3 text-base"
        />
      </div>
      <button
        type="submit"
        className="border border-sand/60 px-6 py-3 text-sm transition-colors hover:bg-sand hover:text-teal-900"
      >
        Võta ühendust <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}
