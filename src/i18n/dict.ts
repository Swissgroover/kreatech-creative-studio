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
      words: ["Sinu", "tehniline", "partner", "digilahendustes."],
      italicWord: "tehniline",
      lead: "Kreatech OÜ analüüsib, planeerib ja arendab veebilehti ning tarkvara. Alustame probleemist, mitte valmis lahendusest — vahel on õige vastus olemasoleva süsteemi parandamine, tehniline SEO või integratsioon, mitte uus arendus. Kui arendus on vajalik, teeme selle ise ära või juhime seda sinu poolel.",
      ctaPrimary: "Alusta projekti",
      ctaSecondary: "Vaata töid",
      scroll: "Keri",
    },
    services: {
      eyebrow: "/ Teenused",
      title: ["Mida me ", "teeme", "?"],
      sub: "Alustame sellest, mida on päriselt vaja lahendada. Analüüs, arendus, SEO, haldus või projektijuhtimine tuleb selle järgi.",
      items: [
        {
          title: "Analüüs ja tehniline audit",
          desc: "Vaatame üle olemasoleva veebilehe või tarkvara: arhitektuur, jõudlus, turvalisus, integratsioonid ja tehnilised kitsaskohad. Sa ei pea tulema valmis lähteülesandega — selle koostame koos. Tulemus on selge pilt sellest, mida on mõistlik teha enne, kui arendusraha kulutatakse.",
          tags: ["Veebilehe audit", "Tarkvara analüüs", "Lähteülesanne"],
        },
        {
          title: "Tarkvaraarendus",
          desc: "Kohandatud veebirakendused, infosüsteemid ja integratsioonid vastavalt tegelikule vajadusele. Tehnoloogia valime selle järgi, mis lahendusele päriselt sobib — mitte vastupidi. Ehitame ka andmesillad olemasolevate süsteemide vahel (CRM, e-pood, raamatupidamine, API-d), kui info peab liikuma käsitsi töö asemel automaatselt.",
          tags: ["ReactJS", "TypeScript", "Integratsioonid"],
        },
        {
          title: "Veebiarendus: Statamic & WordPress",
          desc: "Veebilehed ja sisuhaldussüsteemid, mida kliendi tiim päriselt kasutada tahab. WordPress kiireks käivitamiseks ja laiaks lisade valikuks, Statamic puhtama struktuuri ja headless-lahenduste jaoks. Arendame ka olemasolevaid saite edasi — ümber tegema ei pea alati kõike.",
          tags: ["WordPress", "Statamic", "Headless"],
        },
        {
          title: "Tehniline SEO ja leitavus",
          desc: "Tehniline SEO audit: saidi struktuur, indekseerimine, crawlitavus, laadimiskiirus, metaandmed ja struktuurandmed. Sama töö parandab ka leitavust AI-otsingutes (ChatGPT, Perplexity, Google AI), sest need loevad sama sisu ja struktuuri. Me ei luba positsioone — parandame selle, mis on tehniliselt sinu kontrolli all.",
          tags: ["Tehniline SEO", "Struktuurandmed", "Jõudlus"],
        },
        {
          title: "Hooldus ja süsteemide haldus",
          desc: "Serverid, monitooring, varundused, turvauuendused ja pidev edasiarendus. Hooldame WordPressi ja Statamicu saite ning haldame pilve- ja deploy-protsesse, et süsteem püsiks töös ka pärast launchi.",
          tags: ["Hooldus", "DevOps", "Turvalisus"],
        },
        {
          title: "Tehniline projektijuhtimine",
          desc: "Oleme tehniline esindaja kliendi poolel: tõlgime ärivajaduse tehnilisteks nõueteks, hindame pakkumisi, leiame ja koordineerime arenduspartnereid ning hoiame silma peal riskidel. Sobib ettevõttele, kellel pole enda CTO-d ega tehnilist tootejuhti.",
          tags: ["Projektijuhtimine", "Nõuded", "Partnerid"],
        },
      ],
    },
    process: {
      eyebrow: "/ Protsess",
      title: ["Kuidas me ", "töötame", "."],
      sub: "Selge, läbipaistev ja iteratiivne lähenemine — algab probleemist, mitte tehnoloogiavalikust.",
      steps: [
        {
          title: "Avastus ja analüüs",
          desc: "Kuulame ärilist eesmärki, kaardistame kasutajad, olemasolevad süsteemid, andmed ja riskid. Tulemus: selge skoop, tehniline plaan ja hinnang, kas üldse on vaja uut arendust või piisab olemasoleva parandamisest.",
        },
        {
          title: "Lahenduse plaan ja prototüüp",
          desc: "Paneme paika nõuded, arhitektuuri ja voo. Vajadusel teeme interaktiivse prototüübi, mille peal saab enne arendust testida — nii tulevad valearusaamad välja siis, kui nende parandamine on veel odav.",
        },
        {
          title: "Arendus iteratsioonidena",
          desc: "Iga 1–2 nädala tagant midagi nähtavat. Sa näed edenemist, saad infot arusaadavas keeles ja suunda saab kiiresti muuta. Kui arendust teeb keegi teine, juhime ja vaatame töö sinu poolel üle.",
        },
        {
          title: "Haldus ja edasiarendus",
          desc: "Stabiilne haldus, monitooring, varundus, tehniline SEO seire ja pidev edasiarendus. Süsteem ei jää üksi pärast käivitamist.",
        },
      ],
    },
    works: {
      eyebrow: "/ Tehtud tööd",
      title: ["Valitud ", "projektid", "."],
      sub: "Väike valik projekte — veebilehed, e-poed ja äritarkvara. Täielik nimekiri saadaval päringu peale.",

      items: [
        {
          title: "Projecting – Ettevõtluskoolitused ja projektinõustamine",
          tag: "WordPress · TutorLMS · Koolitusplatvorm",
          href: "https://projecting.ee/",
          image: "/images/projecting.png",
        },
        {
          title: "Haeska Farm – Farmi haldustarkvara",
          tag: "ReactJS · Node · Infosüsteem",
          href: "https://farm-view-live.vercel.app/",
          image: "/images/haeska.png",
        },
        {
          title: "Solaris Kliima – Küttelahendused ja kliimaseadmed",
          tag: "ReactJS · GSAP · Veebileht",
          href: "https://solariskliima.vercel.app/",
          image: "/images/solaris.png",
        },
        {
          title: "BabyCool – Innovaatiline mahe beebitoit",
          tag: "Statamic · Tootesait",
          href: "https://babycoolfood.com/",
          image: "/images/babycoolfood.png",
        },
        {
          title: "Alar Truu – Fotograaf",
          tag: "Statamic · Portfoolio",
          href: "https://alartruu.com/",
          image: "/images/Alar.png",
        },
        {
          title: "Kalma Ehitus – Ehitus- ja renoveerimistööd",
          tag: "Statamic · Ettevõtte veebileht",
          href: "https://kalmaehitus.ee/",
          image: "/images/kalma.png",
        },
        {
          title: "Rebel Moto – Mootorratta varuosad ja varustus",
          tag: "WordPress · E-pood",
          href: "https://www.rebelmoto.ee/",
          image: "/images/rebelmoto.png",
        },
        {
          title: "Kuressaare Täiskasvanute Gümnaasium",
          tag: "Statamic · Kooli veebileht",
          href: "https://www.ktg.edu.ee/",
          image: "/images/ktg.png",
        },
      ],
    },
    lead: {
      eyebrow: "/ Võta meid projektijuhiks",
      title: ["Sul on ", "arendusmeeskond", ", kuid sul puudub inimene, ", "kes neist aru saab."],
      sub: "Astume sisse tehnilise projektijuhina ja oleme tehniline esindaja sinu poolel. Räägime mõlema poole keelt: sina mõtled ärile, meie hoiame, et arendus liigub õiges suunas, õigel ajal ja õige hinnaga. Ja kui arendusmeeskonda veel pole, aitame enne töö alustamist vajaduse läbi mõelda, nõuded paika panna ning sobiva partneri leida ja hinnata. Sa ei pea selleks ise tehniline olema.",
      bullets: [
        "Tõlgime ärivajaduse konkreetseteks tehnilisteks nõueteks",
        "Suhtleme arendajate ja agentuuridega sinu eest",
        "Vaatame üle pakkumised ja hindame, kas lahendus on mõistlik",
        "Aitame leida ja koordineerida sobiva arenduspartneri",
        "Toome tehnilised riskid välja enne, kui need maksma lähevad",
        "Hoiame skoopi, tähtaegu ja eelarvet ärilise eesmärgiga kooskõlas",
      ],
      cta: "Räägime sinu projektist",
    },
    about: {
      eyebrow: "/ Meist",
      title: ["Kaks inimest, ", "üks tiim", "."],
      sub: "Kreatech OÜ on Eesti tehnoloogiaettevõte, mis aitab ettevõtetel digiprobleemidest töötavate lahendusteni jõuda. Analüüsime, nõustame, planeerime, juhime, leiame vajadusel õiged partnerid ja arendame ise. Töötame otse — ilma vahendajate, pikkade koosolekute ja tühjade lubadusteta. Sa räägid inimestega, kes su lahenduse ka päriselt läbi mõtlevad, ehitavad ja hiljem hooldavad. Töötame Eestis ja rahvusvaheliselt, eesti või inglise keeles.",
      foundedLabel: "Asutatud",
      projectsLabel: "Projekte",
      team: [
        { name: "Karl Gregor Rauniste", role: "Projektijuht · Arendaja", image: "" },
        { name: "Gen Vikat", role: "Arendaja · Süsteemid", image: "" },
      ],
    },
    faq: {
      eyebrow: "/ Korduma kippuvad küsimused",
      title: "Kas sul on küsimus?",
      sub: "Siin on vastused kõige levinumatele küsimustele — kui midagi jääb arusaamatuks, kirjuta julgesti.",
      items: [
        {
          q: "Millega Kreatech tegeleb?",
          a: "Kreatech OÜ on tehniline arenduspartner. Analüüsime olemasolevaid veebilehti ja tarkvara, kaardistame arendusvajaduse, planeerime lahenduse ning arendame veebilehti, infosüsteeme ja integratsioone. Lisaks pakume tehnilist projektijuhtimist, tehnilist SEO analüüsi ning olemasolevate lahenduste hooldust ja edasiarendust.",
        },
        {
          q: "Kas Kreatech saab analüüsida olemasolevat veebilehte või tarkvaralahendust?",
          a: "Jah. Vaatame üle tehnilise arhitektuuri, koodi seisu, jõudluse, turvalisuse, integratsioonid, SEO ja tööprotsessid. Sa ei pea tulema valmis lähteülesandega — analüüsi eesmärk ongi välja selgitada, mida on mõistlik teha enne raha kulutamist. Vahel on vastus, et uut arendust polegi vaja.",
        },
        {
          q: "Kas Kreatech teeb tarkvaraarendust ja veebiarendust?",
          a: "Jah. Arendame kohandatud veebirakendusi ja infosüsteeme ReactJSi, TypeScripti ja Node.js-i baasil ning veebilehti ja e-poode WordPressi ja Statamicu peal. Ehitame ka integratsioone olemasolevate süsteemide vahel ja arendame olemasolevaid lahendusi edasi.",
        },
        {
          q: "Mis on tehniline projektijuhtimine ja millal seda vaja on?",
          a: "See tähendab, et Kreatech on tehniline esindaja sinu poolel. Tõlgime ärivajaduse tehnilisteks nõueteks, suhtleme arendajatega, vaatame üle pakkumised, hindame lahenduste mõistlikkust, toome välja riskid ja hoiame arenduse ärilise eesmärgiga kooskõlas. Seda on vaja siis, kui ettevõttel pole oma CTO-d ega tehnilist tootejuhti.",
        },
        {
          q: "Kas Kreatech saab aidata arenduspartneri leidmisel ja koordineerimisel?",
          a: "Jah. Aitame koostada lähteülesande, leida sobivad arendajad või agentuurid, võrrelda pakkumisi ja koordineerida tööd. Kui olemasolev partner on juba olemas, saame olla tehniline vastaspool, kes küsib õigeid küsimusi ja kontrollib tarnet.",
        },
        {
          q: "Kas Kreatech teeb SEO ja tehnilise SEO analüüsi?",
          a: "Jah, keskendume tehnilisele poolele: saidi struktuur, indekseerimine, crawlitavus, laadimiskiirus, metaandmed, struktuurandmed ja sisu arhitektuur. See parandab leitavust nii Google'is kui AI-otsingutes. Positsioone me ei luba — parandame selle, mis on tehniliselt kontrollitav.",
        },
        {
          q: "Kas olemasolevat süsteemi saab edasi arendada või tuleb uuesti teha?",
          a: "Enamasti saab edasi arendada. Alustame analüüsist ja ütleme ausalt, kas mõistlikum on olemasolevat parandada, osa ümber ehitada või terve lahendus asendada. Uue arenduse soovitame ainult siis, kui see on tegelikult odavam või vajalikum kui olemasoleva korrastamine.",
        },
        {
          q: "Kuidas koostöö Kreatechiga algab?",
          a: "Alustame lühikesest tutvumiskõnest, kus räägid probleemist või eesmärgist. Seejärel teeme vajadusel analüüsi ja saadame pakkumise koos skoobi ja ajakavaga. Suuremate projektide puhul jagame töö etappideks, et iga etapi järel oleks näha konkreetne tulemus.",
        },
      ],
    },
    contact: {
      eyebrow: "/ Kontakt",
      title: ["Räägime ", "sinu", " projektist."],
      sub: "Kirjelda lühidalt probleemi või eesmärki — vastame paari tööpäeva jooksul ja lepime kokku tutvumiskõne. Valmis lähteülesannet pole vaja.",
      nameLabel: "Sinu nimi",
      emailLabel: "Email",
      messageLabel: "Sõnum",
      submit: "Saada sõnum",
      mailSubject: (name: string) => `Päring saidilt — ${name}`,
      mailBody: (name: string, email: string, msg: string) =>
        `Nimi: ${name}\nEmail: ${email}\n\n${msg}`,
    },
    footer: {
      legal: "Kreatech OÜ · Tarkvaraarendus, analüüs ja tehniline projektijuhtimine",
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
      words: ["Your", "technical", "partner", "in digital solutions."],
      italicWord: "technical",
      lead: "Kreatech OÜ analyses, plans and builds websites and software. We start from the problem, not from a predefined solution — sometimes the right answer is fixing what exists, technical SEO or an integration rather than new development. When development is needed, we build it or lead it on your side.",
      ctaPrimary: "Start a project",
      ctaSecondary: "See our work",
      scroll: "Scroll",
    },
    services: {
      eyebrow: "/ Services",
      title: ["What we ", "do", "."],
      sub: "We start from what actually needs solving. Analysis, development, SEO, maintenance or project management follows from that.",
      items: [
        {
          title: "Analysis & technical audit",
          desc: "We review your existing website or software: architecture, performance, security, integrations and technical bottlenecks. You don't need a finished specification — we write it together. The output is a clear view of what is actually worth doing before development money is spent.",
          tags: ["Website audit", "Software analysis", "Requirements"],
        },
        {
          title: "Software development",
          desc: "Custom web applications, business systems and integrations built around the actual need. We choose the technology that genuinely fits the solution — not the other way round. We also connect existing systems (CRM, e-commerce, accounting, APIs) so data moves automatically instead of by hand.",
          tags: ["ReactJS", "TypeScript", "Integrations"],
        },
        {
          title: "Web development: Statamic & WordPress",
          desc: "Websites and content systems your team actually wants to use. WordPress for fast launches and a wide plugin ecosystem, Statamic for cleaner structures and headless setups. We also improve existing sites — a full rebuild isn't always the answer.",
          tags: ["WordPress", "Statamic", "Headless"],
        },
        {
          title: "Technical SEO & discoverability",
          desc: "Technical SEO audits: site structure, indexing, crawlability, performance, metadata and structured data. The same work improves visibility in AI search (ChatGPT, Perplexity, Google AI), because they read the same content and structure. We don't promise rankings — we fix what is technically in your control.",
          tags: ["Technical SEO", "Structured data", "Performance"],
        },
        {
          title: "Maintenance & systems management",
          desc: "Servers, monitoring, backups, security updates and ongoing development. We maintain WordPress and Statamic sites and manage cloud and deployment processes so the system keeps running after launch.",
          tags: ["Maintenance", "DevOps", "Security"],
        },
        {
          title: "Technical project management",
          desc: "We act as the technical representative on your side: translating business needs into technical requirements, reviewing proposals, finding and coordinating development partners and flagging risks early. Built for companies without their own CTO or technical product manager.",
          tags: ["Project management", "Requirements", "Partners"],
        },
      ],
    },
    process: {
      eyebrow: "/ Process",
      title: ["How we ", "work", "."],
      sub: "Clear, transparent and iterative — starting from the problem, not from a technology choice.",
      steps: [
        {
          title: "Discovery & analysis",
          desc: "We listen to your business goal and map users, existing systems, data and risks. Output: a clear scope, a technical plan and an honest answer on whether new development is needed at all.",
        },
        {
          title: "Solution plan & prototype",
          desc: "We define requirements, architecture and flow. When useful we build an interactive prototype you can test before development — misunderstandings surface while they're still cheap to fix.",
        },
        {
          title: "Iterative development",
          desc: "Something visible every 1–2 weeks. You see progress in plain language and direction can change fast. If someone else builds it, we lead and review the work on your side.",
        },
        {
          title: "Maintenance & further development",
          desc: "Stable operations, monitoring, backups, technical SEO monitoring and ongoing improvements. Your system isn't abandoned after launch.",
        },
      ],
    },
    works: {
      eyebrow: "/ Selected work",
      title: ["Selected ", "projects", "."],
      sub: "A small selection — websites, online stores and business software. Full list available on request.",
      items: [
        {
          title: "Projecting – Entrepreneurship training & project consulting",
          tag: "WordPress · TutorLMS · Learning platform",
          href: "https://projecting.ee/",
          image: "/images/projecting.png",
        },
        {
          title: "Haeska Farm – Farm management software",
          tag: "ReactJS · Node · Business system",
          href: "https://farm-view-live.vercel.app/",
          image: "/images/haeska.png",
        },
        {
          title: "Solaris Kliima – Heating & climate solutions",
          tag: "ReactJS · GSAP · Website",
          href: "https://solariskliima.vercel.app/",
          image: "/images/solaris.png",
        },
        {
          title: "BabyCool – Innovative organic baby food",
          tag: "Statamic · Product site",
          href: "https://babycoolfood.com/",
          image: "/images/babycoolfood.png",
        },
        {
          title: "Alar Truu – Photographer",
          tag: "Statamic · Portfolio",
          href: "https://alartruu.com/",
          image: "/images/Alar.png",
        },
        {
          title: "Kalma Ehitus – Construction & renovation",
          tag: "Statamic · Company website",
          href: "https://kalmaehitus.ee/",
          image: "/images/kalma.png",
        },
        {
          title: "Rebel Moto – Motorcycle parts & gear",
          tag: "WordPress · E-commerce",
          href: "https://www.rebelmoto.ee/",
          image: "/images/rebelmoto.png",
        },
        {
          title: "Kuressaare Adult Gymnasium",
          tag: "Statamic · School website",
          href: "https://www.ktg.edu.ee/",
          image: "/images/ktg.png",
        },
      ],
    },
    lead: {
      eyebrow: "/ Hire us as your project lead",
      title: [
        "You have a ",
        "dev team",
        ". You're missing the person ",
        "who actually understands them.",
      ],
      sub: "We step in as your technical project lead and act as the technical representative on your side. We speak both languages: you focus on the business, we make sure development moves in the right direction, on time and on budget. And if there is no development team yet, we help think the need through, define the requirements and find and evaluate the right partner before the work starts. You don't need to be technical yourself.",
      bullets: [
        "We translate business needs into concrete technical requirements",
        "We talk to developers and agencies on your behalf",
        "We review proposals and judge whether the solution makes sense",
        "We help find and coordinate the right development partner",
        "We surface technical risks before they get expensive",
        "We keep scope, deadlines and budget aligned with the business goal",
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
      sub: "Kreatech OÜ is an Estonian technology company that helps businesses get from digital problems to solutions that actually work. We analyse, advise, plan, manage, find the right partners when needed and build ourselves. We work directly — no middlemen, no endless meetings, no empty promises. You talk to the people who think your solution through, build it and later maintain it. We work in Estonia and internationally, in Estonian or English.",
      foundedLabel: "Founded",
      projectsLabel: "Projects",
      team: [
        { name: "Karl Gregor Rauniste", role: "Project lead · Developer", image: "" },
        { name: "Gen Vikat", role: "Developer · Systems", image: "" },
      ],
    },
    faq: {
      eyebrow: "/ Frequently asked questions",
      title: "Got a question?",
      sub: "Here are answers to the most common questions — if anything is still unclear, just drop us a line.",
      items: [
        {
          q: "What does Kreatech do?",
          a: "Kreatech OÜ is a technical development partner. We analyse existing websites and software, map development needs, plan the solution and build websites, business systems and integrations. We also provide technical project management, technical SEO analysis and maintenance and further development of existing solutions.",
        },
        {
          q: "Can Kreatech analyse an existing website or software system?",
          a: "Yes. We review technical architecture, code, performance, security, integrations, SEO and workflows. You don't need a finished specification — the point of the analysis is to determine what is worth doing before money is spent. Sometimes the answer is that no new development is needed.",
        },
        {
          q: "Does Kreatech build software and websites?",
          a: "Yes. We build custom web applications and business systems with ReactJS, TypeScript and Node.js, and websites and online stores on WordPress and Statamic. We also build integrations between existing systems and extend solutions that are already live.",
        },
        {
          q: "What is technical project management and when do you need it?",
          a: "It means Kreatech acts as the technical representative on your side. We translate business needs into technical requirements, talk to developers, review proposals, judge whether solutions make sense, flag risks and keep the work aligned with the business objective. It fits companies without their own CTO or technical product manager.",
        },
        {
          q: "Can Kreatech help find or coordinate a development partner?",
          a: "Yes. We help write the requirements, find suitable developers or agencies, compare proposals and coordinate the work. If a partner is already in place, we can be the technical counterpart who asks the right questions and reviews delivery.",
        },
        {
          q: "Does Kreatech provide SEO and technical SEO analysis?",
          a: "Yes, with a technical focus: site structure, indexing, crawlability, performance, metadata, structured data and content architecture. This improves visibility both in Google and in AI search. We don't promise rankings — we fix what is technically verifiable.",
        },
        {
          q: "Can an existing system be improved, or does it need rebuilding?",
          a: "Usually it can be improved. We start with analysis and tell you honestly whether to fix what exists, rebuild part of it, or replace it. We only recommend a rebuild when it is genuinely cheaper or more necessary than fixing the current solution.",
        },
        {
          q: "How does working with Kreatech start?",
          a: "With a short intro call where you describe the problem or goal. From there we run an analysis if needed and send a proposal with scope and timeline. Larger projects are split into stages so each stage produces a visible result.",
        },
      ],
    },
    contact: {
      eyebrow: "/ Contact",
      title: ["Let's talk about ", "your", " project."],
      sub: "Describe the problem or goal in a few lines — we reply within a couple of business days and book an intro call. No finished specification needed.",
      nameLabel: "Your name",
      emailLabel: "Email",
      messageLabel: "Message",
      submit: "Send message",
      mailSubject: (name: string) => `Website enquiry — ${name}`,
      mailBody: (name: string, email: string, msg: string) =>
        `Name: ${name}\nEmail: ${email}\n\n${msg}`,
    },
    footer: {
      legal: "Kreatech OÜ · Software development, analysis and technical project management",
    },
  },
} as const;

export type Lang = "et" | "en";
export type Dict = typeof dict.et;
