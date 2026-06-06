import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";

export type Lang = "et" | "en";

type Dict = typeof dict.et;

export const dict = {
  et: {
    nav: {
      services: "Teenused",
      process: "Protsess",
      works: "Tööd",
      lead: "Projektijuht",
      about: "Meist",
      faq: "KKK",
      contact: "Kontakt",
      cta: "Räägi meiega",
    },
    hero: {
      badge: "Eesti tarkvarastuudio",
      words: ["Loome", "digitaalseid", "lahendusi,", "mis", "töötavad."],
      italicWord: "lahendusi,",
      lead:
        "Kreatech ehitab veebirakendusi, hoiab töös süsteeme ja annab uue elu olemasolevatele WordPressi- ning Statamicu-saitidele. Väike tiim, suur tähelepanu detailile.",
      ctaPrimary: "Alusta projekti",
      ctaSecondary: "Vaata töid",
      scroll: "Keri",
    },
    services: {
      eyebrow: "/ Teenused",
      title: ["Mida me ", "teeme", "."],
      sub: "Neli põhisuunda — kõik need oskame korralikult. Vali üks või kombineeri.",
      items: [
        {
          title: "Tarkvara arendus",
          desc: "Kohandatud veebirakendused ReactJSi ja moodsa stack'iga. Idee, prototüüp, toode.",
          tags: ["ReactJS", "TypeScript", "API"],
        },
        {
          title: "Statamic & WordPress",
          desc: "Sisuhaldussüsteemid, mida kliendi tiim päriselt kasutada tahab. Kiired, paindlikud, hooldatavad.",
          tags: ["Statamic", "WordPress", "Headless"],
        },
        {
          title: "Süsteemide haldus",
          desc: "Serverid, monitooring, varundus, uuendused. Sinu süsteem püsib töös ka siis, kui sina magad.",
          tags: ["DevOps", "Hosting", "SLA"],
        },
        {
          title: "WordPressi hooldus",
          desc: "Turvauuendused, kiiruseoptimeerimine, varundus ja sisuabi — kõik ühest kohast.",
          tags: ["Turvalisus", "Speed", "Tugi"],
        },
      ],
    },
    process: {
      eyebrow: "/ Protsess",
      title: ["Kuidas me ", "töötame", "."],
      sub: "Selge, läbipaistev ja iteratiivne lähenemine.",
      steps: [
        {
          title: "Avastus & analüüs",
          desc: "Kuulame su ärilist eesmärki, kaardistame kasutajad, süsteemid ja riskid. Tulemus: selge skoop ja tehniline plaan.",
        },
        {
          title: "Disain & prototüüp",
          desc: "Lahendame voo ja liidese — interaktiivne prototüüp, mille peal saab juba kasutajatega testida enne arendust.",
        },
        {
          title: "Arendus iteratsioonidena",
          desc: "Iga 1–2 nädala tagant midagi nähtavat. Sa näed edenemist, anname infot ja muudame suunda kiiresti kui vaja.",
        },
        {
          title: "Käivitus & hooldus",
          desc: "Stabiilne deploy, monitooring, varundus ja pidev tugi. Süsteem ei jää üksi pärast launchi.",
        },
      ],
    },
    works: {
      eyebrow: "/ Tehtud tööd",
      title: ["Valitud ", "projektid", "."],
      sub: "Väike valik tööd, millega oleme rahul. Pikem nimekiri tuleb tutvustusel.",
      items: [
        { title: "Projekt nimi 1", tag: "ReactJS · SaaS" },
        { title: "Projekt nimi 2", tag: "WordPress · E-pood" },
        { title: "Projekt nimi 3", tag: "Statamic · Portfolio" },
        { title: "Projekt nimi 4", tag: "Süsteemihaldus" },
        { title: "Projekt nimi 5", tag: "ReactJS · Dashboard" },
        { title: "Projekt nimi 6", tag: "WordPress · Korporatiiv" },
      ],
    },
    lead: {
      eyebrow: "/ Võta meid projektijuhiks",
      title: ["Sul on ", "arendusmeeskond", ". Sul puudub inimene, ", "kes neist aru saab."],
      sub: "Astume sisse tehnilise projektijuhina — räägime mõlema poole keelt. Sina mõtled ärile, meie hoiame, et arendus liigub õiges suunas, õigel ajal ja õige hinnaga.",
      bullets: [
        "Tõlgime su äriidee tehniliseks plaaniks",
        "Suhtleme arendustiimiga sinu eest",
        "Hoiame skoopi, tähtaegu ja eelarvet kontrolli all",
        "Toome iga nädal raporti ja konkreetsed otsused",
      ],
      cta: "Räägime sinu projektist",
      stats: [
        { k: "Vastus", v: "< 24h" },
        { k: "Iteratsioon", v: "1–2 näd" },
        { k: "Skoobi muutus", v: "läbipaistev" },
        { k: "Raport", v: "iganädalane" },
      ],
    },
    about: {
      eyebrow: "/ Meist",
      title: ["Kaks inimest, ", "üks tiim", "."],
      sub: "Oleme väike Eesti stuudio. Töötame otse — ilma vahendajate, pikkade koosolekute ja tühjade lubadusteta. Sa räägid inimestega, kes su koodi ka päriselt kirjutavad.",
      foundedLabel: "Asutatud",
      projectsLabel: "Projekte",
      team: [
        { name: "Eesnimi Perekonnanimi", role: "Asutaja · Arendaja" },
        { name: "Eesnimi Perekonnanimi", role: "Arendaja · Süsteemid" },
      ],
    },
    faq: {
      eyebrow: "/ Korduma kippuvad küsimused",
      title: "Kas sul on küsimus?",
      sub: "Siin on vastused kõige levinumatele küsimustele — kui midagi jääb arusaamatuks, kirjuta julgesti.",
      items: [
        {
          q: "Mis tehnoloogiate ja raamistikega Kreatech arendusteenuseid pakub?",
          a: "Meie põhitehnoloogiad on ReactJS (sh Next.js ja TanStack Start), WordPress, Statamic CMS ja Node.js. Vajadusel integreerime ka teisi raamistikke ja pilvelahendusi (AWS, Vercel, Supabase) — alati olenevalt projekti vajadustest ja eelarvest.",
        },
        {
          q: "Kui kiiresti saab uus veebiprojekt või digilahendus valmis?",
          a: "Lihtsamad veebilahendused (nt WordPressi- või Statamicu-põhised saidid) jõuavad produktsiooni 2–4 nädalaga. Mahukamad ReactJS-i rakendused ja platvormid võtavad tavaliselt 2–3 kuud.",
        },
        {
          q: "Kas pakute ka ainult projektijuhtimist ilma enda arendusmeeskonnata?",
          a: "Jah — kui sul on juba olemas arendusmeeskond, aga puudub tehniline projektijuht, kes oskab ideid võtta ja need arendajatele arusaadavaks viisiks edasi anda.",
        },
        {
          q: "Mis vahe on WordPressi ja Statamicu kasutamisel — kumba soovitaksite?",
          a: "WordPress on suurepärane, kui vajad kiiresti käivitatavat, laiade lisade ökosüsteemiga veebi. Statamic sobib paremini headless-CMS lahenduste ja puhtama andmestruktuuriga projektidele.",
        },
        {
          q: "Kas pakute ka pidevhalduse ja tugiteenust pärast projekti käivitamist?",
          a: "Kindlasti. Pakume WordPressi ja Statamicu saidide haldust, turvauuendusi, varundusi, jõudluse jälgimist ja kiirparandusi.",
        },
        {
          q: "Kuidas käib hindamine ja kas pakute fikseeritud hinnaga projekte?",
          a: "Alustame tasuta tutvumiskõnega, mille järel saadame fikseeritud hinnaga pakkumise koos ajakavaga. Keerukamate projektide puhul kasutame etappide kaupa (milestone) maksmist.",
        },
        {
          q: "Kas Kreatech töötab ka välisklientidega või ainult Eesti turul?",
          a: "Oleme pärit Eestist, aga töötame meeleldi ka rahvusvaheliste klientidega. Kogu protsess on võimalik läbi viia distantsilt inglise või eesti keeles.",
        },
      ],
    },
    contact: {
      eyebrow: "/ Kontakt",
      title: ["Räägime ", "sinu", " projektist."],
      sub: "Saada lühike kirjeldus — vastame paari tööpäeva jooksul ja lepime kokku tutvumiskõne.",
      nameLabel: "Sinu nimi",
      emailLabel: "Email",
      messageLabel: "Sõnum",
      submit: "Saada sõnum",
      mailSubject: (name: string) => `Päring saidilt — ${name}`,
      mailBody: (name: string, email: string, msg: string) =>
        `Nimi: ${name}\nEmail: ${email}\n\n${msg}`,
    },
  },
  en: {
    nav: {
      services: "Services",
      process: "Process",
      works: "Work",
      lead: "Project Lead",
      about: "About",
      faq: "FAQ",
      contact: "Contact",
      cta: "Get in touch",
    },
    hero: {
      badge: "Estonian software studio",
      words: ["We", "build", "digital products", "that", "work."],
      italicWord: "digital products",
      lead:
        "Kreatech builds web applications, keeps systems running and gives WordPress and Statamic sites a new life. Small team, big attention to detail.",
      ctaPrimary: "Start a project",
      ctaSecondary: "See our work",
      scroll: "Scroll",
    },
    services: {
      eyebrow: "/ Services",
      title: ["What we ", "do", "."],
      sub: "Four core capabilities — we do all of them properly. Pick one or combine.",
      items: [
        {
          title: "Software development",
          desc: "Custom web apps with ReactJS and a modern stack. Idea, prototype, product.",
          tags: ["ReactJS", "TypeScript", "API"],
        },
        {
          title: "Statamic & WordPress",
          desc: "Content systems your team actually wants to use. Fast, flexible, maintainable.",
          tags: ["Statamic", "WordPress", "Headless"],
        },
        {
          title: "Systems management",
          desc: "Servers, monitoring, backups, updates. Your stack keeps running while you sleep.",
          tags: ["DevOps", "Hosting", "SLA"],
        },
        {
          title: "WordPress maintenance",
          desc: "Security updates, performance, backups and content help — all in one place.",
          tags: ["Security", "Speed", "Support"],
        },
      ],
    },
    process: {
      eyebrow: "/ Process",
      title: ["How we ", "work", "."],
      sub: "Clear, transparent and iterative.",
      steps: [
        {
          title: "Discovery & analysis",
          desc: "We listen to your business goal, map users, systems and risks. Output: a clear scope and technical plan.",
        },
        {
          title: "Design & prototype",
          desc: "We design the flow and the interface — an interactive prototype you can test with users before development.",
        },
        {
          title: "Iterative development",
          desc: "Something visible every 1–2 weeks. You see progress, we communicate, and we change direction quickly when needed.",
        },
        {
          title: "Launch & maintenance",
          desc: "Stable deploys, monitoring, backups and ongoing support. Your system isn't abandoned after launch.",
        },
      ],
    },
    works: {
      eyebrow: "/ Selected work",
      title: ["Selected ", "projects", "."],
      sub: "A small selection of work we're proud of. Full list available on request.",
      items: [
        { title: "Project name 1", tag: "ReactJS · SaaS" },
        { title: "Project name 2", tag: "WordPress · E-commerce" },
        { title: "Project name 3", tag: "Statamic · Portfolio" },
        { title: "Project name 4", tag: "Systems management" },
        { title: "Project name 5", tag: "ReactJS · Dashboard" },
        { title: "Project name 6", tag: "WordPress · Corporate" },
      ],
    },
    lead: {
      eyebrow: "/ Hire us as your project lead",
      title: ["You have a ", "dev team", ". You're missing the person ", "who actually understands them."],
      sub: "We step in as your technical project lead — we speak both languages. You focus on the business, we make sure development moves in the right direction, on time and on budget.",
      bullets: [
        "We translate your business idea into a technical plan",
        "We talk to the dev team on your behalf",
        "We keep scope, deadlines and budget under control",
        "We bring a weekly report with concrete decisions",
      ],
      cta: "Let's talk about your project",
      stats: [
        { k: "Response", v: "< 24h" },
        { k: "Iteration", v: "1–2 wk" },
        { k: "Scope change", v: "transparent" },
        { k: "Report", v: "weekly" },
      ],
    },
    about: {
      eyebrow: "/ About",
      title: ["Two people, ", "one team", "."],
      sub: "We're a small Estonian studio. We work directly — no middlemen, no endless meetings, no empty promises. You talk to the people who actually write your code.",
      foundedLabel: "Founded",
      projectsLabel: "Projects",
      team: [
        { name: "First Last", role: "Founder · Developer" },
        { name: "First Last", role: "Developer · Systems" },
      ],
    },
    faq: {
      eyebrow: "/ Frequently asked questions",
      title: "Got a question?",
      sub: "Here are answers to the most common questions — if anything is still unclear, just drop us a line.",
      items: [
        {
          q: "What technologies and frameworks does Kreatech work with?",
          a: "Our core stack is ReactJS (incl. Next.js and TanStack Start), WordPress, Statamic CMS and Node.js. When needed we integrate other frameworks and cloud providers (AWS, Vercel, Supabase) — always based on the project's needs and budget.",
        },
        {
          q: "How fast can a new web project or digital product be ready?",
          a: "Simpler websites (e.g. WordPress or Statamic) reach production in 2–4 weeks. Larger ReactJS applications and platforms usually take 2–3 months.",
        },
        {
          q: "Do you offer project management only, without your own dev team?",
          a: "Yes — when you already have a development team but lack a technical project lead who can take ideas and translate them for developers.",
        },
        {
          q: "What's the difference between WordPress and Statamic — which do you recommend?",
          a: "WordPress is great when you need a fast-launching site with a huge plugin ecosystem. Statamic fits better for headless CMS setups, cleaner data structures and a better developer experience.",
        },
        {
          q: "Do you offer ongoing maintenance and support after launch?",
          a: "Absolutely. We maintain WordPress and Statamic sites — security updates, backups, performance monitoring and hotfixes.",
        },
        {
          q: "How does pricing work — do you offer fixed-price projects?",
          a: "We always start with a free intro call, after which we send a fixed-price proposal with a timeline. For larger projects we use milestone-based billing.",
        },
        {
          q: "Does Kreatech work with international clients or only in Estonia?",
          a: "We're from Estonia but happily work with international clients. The full process can be done remotely in English or Estonian.",
        },
      ],
    },
    contact: {
      eyebrow: "/ Contact",
      title: ["Let's talk about ", "your", " project."],
      sub: "Send us a short brief — we reply within a couple of business days and book an intro call.",
      nameLabel: "Your name",
      emailLabel: "Email",
      messageLabel: "Message",
      submit: "Send message",
      mailSubject: (name: string) => `Website enquiry — ${name}`,
      mailBody: (name: string, email: string, msg: string) =>
        `Name: ${name}\nEmail: ${email}\n\n${msg}`,
    },
  },
} as const;

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };

const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("et");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("kreatech-lang") as Lang | null;
      if (saved === "et" || saved === "en") setLangState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("kreatech-lang", l);
    } catch {}
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: dict[lang] as Dict }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}

/**
 * Wrap content that should fade/blur out and in when the language switches.
 * Keep this OUTSIDE the nav (so the toggle pill keeps its layout animation).
 */
export function LangFade({ children }: { children: ReactNode }) {
  const { lang } = useLang();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={lang}
        initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -8, filter: "blur(6px)" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

