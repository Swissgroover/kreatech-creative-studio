export const SITE = {
  name: "Kreatech",
  legalName: "Kreatech OÜ",
  url: "https://kreatech.ee",
  email: "info@kreatech.ee",
  locale: "et_EE",
  tagline: "Tarkvaraarendus, veebilahendused ja tehniline projektijuhtimine.",
  description:
    "Kreatech OÜ arendab ettevõtetele kohandatud tarkvara, veebirakendusi, WordPressi ja Statamicu lahendusi ning pakub tarkvara analüüsi, tehnilist projektijuhtimist ning hooldust ja edasiarendust.",
  ogImage: "/images/og-kreatech.jpg",
} as const;

export type Service = {
  slug: string;
  href: string;
  num: string;
  title: string;
  navTitle: string;
  short: string;
  intro: string;
  forWhom: readonly string[];
  problems: readonly string[];
  weDo: readonly string[];
  tech?: readonly string[];
  process?: readonly { title: string; desc: string }[];
  faq: readonly { q: string; a: string }[];
  projects: readonly string[];
  metaTitle: string;
  metaDescription: string;
};

export const SERVICES = [
  {
    slug: "tarkvaraarendus",
    href: "/tarkvaraarendus",
    num: "01",
    title: "Tarkvaraarendus",
    navTitle: "Tarkvaraarendus",
    short:
      "Kohandatud ärisüsteemid, veebirakendused, integratsioonid ja automatiseerimine. Arendame lahendusi, mis lähtuvad tegelikest tööprotsessidest, mitte valmispakist.",
    intro:
      "Kreatech arendab ettevõtetele kohandatud tarkvara: sisemisi ärisüsteeme, veebirakendusi, andmehaldust ja liidestusi olemasolevate süsteemidega. Töötame väikeses tiimis ja otse kliendiga — sa räägid inimestega, kes koodi ka kirjutavad.",
    forWhom: [
      "Ettevõtted, kelle tööprotsess ei mahu standardtarkvarasse.",
      "Organisatsioonid, kes haldavad andmeid täna tabelites ja e-kirjades.",
      "Tiimid, kes vajavad olemasoleva süsteemi kõrvale uut liidest või liidestust.",
    ],
    problems: [
      "Andmed on laiali erinevates süsteemides ja tabelites.",
      "Käsitsi tehtav korduv töö võtab aega ja tekitab vigu.",
      "Olemasolev tarkvara ei toeta protsessi, mida ettevõte tegelikult kasutab.",
    ],
    weDo: [
      "Kaardistame protsessi ja paneme kirja tehnilise skoobi.",
      "Kavandame andmemudeli ja süsteemi arhitektuuri.",
      "Arendame rakenduse iteratsioonidena, iga etapp on kasutatav.",
      "Liidestame olemasolevate süsteemide ja API-dega.",
      "Anname süsteemi üle koos dokumentatsiooni ja hooldusplaaniga.",
    ],
    tech: ["ReactJS", "TypeScript", "Node.js", "REST ja JSON API-d", "PostgreSQL", "Vercel"],
    process: [
      { title: "Analüüs", desc: "Protsess, kasutajad, andmed ja piirangud kirja." },
      { title: "Arhitektuur", desc: "Andmemudel, liidestused ja tehniline plaan." },
      { title: "Arendus", desc: "Iteratsioonid, iga 1–2 nädala järel nähtav tulemus." },
      { title: "Käivitamine", desc: "Testimine, üleandmine, dokumentatsioon." },
    ],
    faq: [
      {
        q: "Kas saate edasi arendada olemasolevat tarkvara?",
        a: "Jah. Alustame koodibaasi ja arhitektuuri ülevaatusest ning lepime kokku, mida on mõistlik edasi arendada ja mida ümber ehitada.",
      },
      {
        q: "Kuidas käib hinnastamine?",
        a: "Alustame tutvumiskõnest ja analüüsist. Selle põhjal anname skoobipõhise pakkumise. Mahukamad projektid jagame etappideks.",
      },
    ],
    projects: ["haeska-farm"],
    metaTitle: "Tarkvaraarendus ettevõtetele | Kreatech",
    metaDescription:
      "Kreatech arendab kohandatud ärisüsteeme, veebirakendusi, integratsioone ja automatiseerimist. Analüüsist arenduse ja hoolduseni.",
  },
  {
    slug: "veebiarendus",
    href: "/veebiarendus",
    num: "02",
    title: "Veebiarendus",
    navTitle: "Veebiarendus",
    short:
      "Kiired, hooldatavad ja tehniliselt korralikud veebilehed ning digiteenused. Sisuhaldus, mida kliendi tiim päriselt kasutada oskab.",
    intro:
      "Ehitame veebilehti ja digiteenuseid, mis on kiired, ligipääsetavad ja otsingumootoritele arusaadavad. Valime tehnoloogia projekti järgi — ReactJS rakenduse, WordPressi või Statamicu — mitte vastupidi.",
    forWhom: [
      "Ettevõtted, kelle praegune veeb on aeglane või raskesti hallatav.",
      "Organisatsioonid, kes vajavad sisuhaldust mitmele toimetajale.",
      "Tiimid, kes vajavad veebi, mis on ühendatud teiste süsteemidega.",
    ],
    problems: [
      "Veebileht laeb aeglaselt ja mobiilis on kasutuskogemus vilets.",
      "Sisu muutmine nõuab iga kord arendaja abi.",
      "Otsingumootorid ei saa lehe sisust ja teenustest aru.",
    ],
    weDo: [
      "Paneme paika infoarhitektuuri ja sisumudeli.",
      "Ehitame kiire ja ligipääsetava kasutajaliidese.",
      "Seadistame tehnilise SEO: struktuurandmed, sitemap, metaandmed.",
      "Koolitame sisuhalduse kasutajad ja anname juhendi.",
    ],
    tech: ["ReactJS", "TanStack Start", "WordPress", "Statamic", "Tailwind CSS"],
    faq: [
      {
        q: "Kui kaua veebilehe arendus võtab?",
        a: "Sisulehe või CMS-põhise veebi puhul tavaliselt paar nädalat kuni paar kuud, olenevalt sisu ja liidestuste mahust.",
      },
      {
        q: "Kas teete ka olemasoleva veebi kiirendamist?",
        a: "Jah. Vaatame üle jõudluse, piltide, päringute ja hostingu poole ning teeme konkreetsed parandused.",
      },
    ],
    projects: ["solaris-kliima", "kalma-ehitus", "ktg"],
    metaTitle: "Veebiarendus ja veebilahendused | Kreatech",
    metaDescription:
      "Kiired ja hooldatavad veebilehed ning digiteenused. ReactJS, WordPress ja Statamic — koos tehnilise SEO ja sisuhaldusega.",
  },
  {
    slug: "wordpress-arendus",
    href: "/wordpress-arendus",
    num: "03",
    title: "WordPressi arendus",
    navTitle: "WordPress",
    short:
      "Kohandatud teemad, pluginad, e-poed ja liidestused. Ka olemasoleva WordPressi ülevõtmine, korrastamine ja edasiarendus.",
    intro:
      "WordPress sobib, kui sisu on palju, toimetajaid mitu ja lahendus peab kiiresti tööle minema. Kreatech arendab kohandatud teemasid ja funktsionaalsust ning võtab üle olemasolevaid saite, mis vajavad korrastamist.",
    forWhom: [
      "Ettevõtted, kellel on juba WordPressi leht ja vaja arendajat.",
      "E-poed, mis vajavad kohandatud funktsionaalsust või liidestusi.",
      "Organisatsioonid, kes soovivad sisu ise hallata.",
    ],
    problems: [
      "Sait on ehitatud pluginate virnast ja seda on raske muuta.",
      "Uuendused jäävad tegemata ja tekivad turvariskid.",
      "Toimetaja jaoks on sisu muutmine keeruline.",
    ],
    weDo: [
      "Arendame kohandatud teema ja sisutüübid vastavalt sisumudelile.",
      "Ehitame vajaliku funktsionaalsuse pluginate asemel koodis.",
      "Liidestame maksed, kursused, CRM-i või muud välised teenused.",
      "Võtame üle olemasoleva saidi ja korrastame selle.",
    ],
    tech: ["WordPress", "PHP", "WooCommerce", "TutorLMS", "ACF"],
    faq: [
      {
        q: "Kas võtate üle teise arendaja tehtud WordPressi lehe?",
        a: "Jah. Alustame ülevaatusest: teema, pluginad, uuendused, varundus ja turvalisus. Seejärel lepime kokku, mis vajab kohe parandust.",
      },
      {
        q: "Kas teete ka WooCommerce e-poode?",
        a: "Jah, arendame ja hooldame WooCommerce'i põhiseid e-poode koos vajalike liidestustega.",
      },
    ],
    projects: ["projecting", "rebel-moto"],
    metaTitle: "WordPressi arendus ja kohandatud lahendused | Kreatech",
    metaDescription:
      "Kohandatud WordPressi teemad, funktsionaalsus, WooCommerce e-poed ja liidestused. Ka olemasoleva saidi ülevõtmine ja edasiarendus.",
  },
  {
    slug: "statamic-arendus",
    href: "/statamic-arendus",
    num: "04",
    title: "Statamicu arendus",
    navTitle: "Statamic",
    short:
      "Statamic sobib, kui sisustruktuur peab olema puhas ja paindlik. Arendame nii klassikalisi kui headless-lahendusi.",
    intro:
      "Statamic on Laraveli-põhine sisuhaldus, kus sisu struktuur on selgelt kirjeldatud ja versioneeritav. Kasutame seda projektides, kus sisu on kujundusega tihedalt seotud ja toimetaja vajab paindlikku, kuid kontrollitud liidest.",
    forWhom: [
      "Sisurikkad veebilehed ja portfooliod.",
      "Organisatsioonid, kes vajavad mitmekeelset või struktureeritud sisu.",
      "Projektid, kus sisu tarbib ka mõni teine süsteem või rakendus.",
    ],
    problems: [
      "Sisumudel on ajaga laiali valgunud ja ebaühtlane.",
      "Toimetajal on liiga palju või liiga vähe vabadust.",
      "Sama sisu on vaja kasutada mitmes kohas.",
    ],
    weDo: [
      "Kirjeldame sisumudeli ja ehitame toimetajale selge liidese.",
      "Arendame kujunduse ja komponendid sisumudeli peale.",
      "Seadistame vajadusel headless-väljundi API kaudu.",
      "Hooldame ja arendame lahendust edasi.",
    ],
    tech: ["Statamic", "Laravel", "PHP", "Antlers", "Headless API"],
    faq: [
      {
        q: "Millal valida Statamic WordPressi asemel?",
        a: "Statamic sobib, kui sisustruktuur on projekti keskmes ja soovitakse puhast, versioneeritavat lahendust ilma suure pluginate kihita. WordPress sobib, kui vaja on laia ökosüsteemi ja kiiret käivitust.",
      },
      {
        q: "Kas Statamicut saab kasutada headless-CMS-ina?",
        a: "Jah. Sisu saab kätte API kaudu ja kuvada eraldi frontendis, näiteks ReactJS rakenduses.",
      },
    ],
    projects: ["babycool", "alar-truu", "kalma-ehitus", "ktg"],
    metaTitle: "Statamic CMS arendus | Kreatech",
    metaDescription:
      "Statamicu veebilehtede ja headless-lahenduste arendus: sisumudel, toimetaja liides, kujundus ja edasiarendus.",
  },
  {
    slug: "tarkvara-analuus",
    href: "/tarkvara-analuus",
    num: "05",
    title: "Analüüs ja arhitektuur",
    navTitle: "Analüüs",
    short:
      "Nõuded, tehniline analüüs, süsteemiarhitektuur ja arendusplaan. Dokument, mille pealt saab arendada või pakkumisi küsida.",
    intro:
      "Enne arendust on vaja teada, mida täpselt ehitatakse. Kreatech teeb tarkvara analüüsi ja kirjutab projektidokumendi: nõuded, kasutuslood, andmemudel, arhitektuur, etapid ja riskid. Tulemust saab kasutada nii arenduse alusena kui hankes või taotluses.",
    forWhom: [
      "Ettevõtted, kes plaanivad suuremat arendusprojekti.",
      "Organisatsioonid, kes peavad küsima võrreldavaid pakkumisi.",
      "Tiimid, kelle projekt on kinni jäänud ebaselge skoobi taha.",
    ],
    problems: [
      "Pakkumised on võrreldamatud, sest skoop on ebaselge.",
      "Arendus algab enne, kui nõuded on kirjas.",
      "Tehnilised valikud tehakse ilma pikema plaanita.",
    ],
    weDo: [
      "Intervjueerime osapooli ja kaardistame protsessi.",
      "Paneme kirja funktsionaalsed ja tehnilised nõuded.",
      "Kavandame andmemudeli ja süsteemiarhitektuuri.",
      "Jagame arenduse etappideks koos prioriteetidega.",
      "Anname üle dokumendi, mille pealt saab arendada.",
    ],
    faq: [
      {
        q: "Kas analüüs on eraldi teenus?",
        a: "Jah, analüüsi saab tellida eraldi ja kasutada seda ka teise arenduspartneriga.",
      },
      {
        q: "Mida analüüs sisaldab?",
        a: "Nõuded, kasutuslood, andmemudeli, arhitektuurivalikud, etapiplaani ja riskid.",
      },
    ],
    projects: [],
    metaTitle: "Tarkvara analüüs ja arhitektuur | Kreatech",
    metaDescription:
      "Tarkvara analüüs, nõuete kirjeldus, süsteemiarhitektuur ja arendusplaan. Selge dokument arenduse või hanke aluseks.",
  },
  {
    slug: "tehniline-projektijuhtimine",
    href: "/tehniline-projektijuhtimine",
    num: "06",
    title: "Tehniline projektijuhtimine",
    navTitle: "Projektijuhtimine",
    short:
      "Sild ärinõuete, kliendi ja arendusmeeskonna vahel. Sobib, kui arendajad on olemas, aga puudub inimene, kes mõlema poole keelt räägib.",
    intro:
      "Kreatech astub projekti tehnilise projektijuhina: tõlgime ärilise vajaduse arendajatele arusaadavaks, hoiame skoopi ja tähtaegu ning anname regulaarselt ülevaate seisust. Töötame nii sinu oma arendusmeeskonna kui ka välise partneriga.",
    forWhom: [
      "Ettevõtted, kellel on arendusmeeskond, aga puudub tehniline juht.",
      "Organisatsioonid, kes tellivad arendust välispartnerilt.",
      "Projektid, kus ärinõuded ja tehniline pool ei kohtu.",
    ],
    problems: [
      "Arendus liigub, aga mitte selles suunas, mida äri ootas.",
      "Skoop kasvab märkamatult ja tähtajad libisevad.",
      "Otsused jäävad tegemata, sest puudub tehniline vastaspool.",
    ],
    weDo: [
      "Tõlgime ärilise eesmärgi tehnilisteks ülesanneteks.",
      "Suhtleme arendusmeeskonnaga sinu eest.",
      "Hoiame skoopi, ajakava ja eelarvet kontrolli all.",
      "Anname regulaarse ülevaate seisust ja vajalikest otsustest.",
      "Vaatame üle tehnilised lahendused ja koodi kvaliteedi.",
    ],
    faq: [
      {
        q: "Kas pakute projektijuhtimist ilma arenduseta?",
        a: "Jah. Saame tulla projekti ainult tehnilise projektijuhina, kui arendus tehakse mujal.",
      },
      {
        q: "Kui suur on tavaline koormus?",
        a: "See lepitakse kokku projekti järgi — mõnest tunnist nädalas kuni igapäevase kaasatuseni.",
      },
    ],
    projects: [],
    metaTitle: "Tehniline projektijuhtimine | Kreatech",
    metaDescription:
      "Tehniline projektijuhtimine: ärinõuete tõlkimine arendusmeeskonnale, skoobi ja ajakava hoidmine ning tehniline järelevalve.",
  },
  {
    slug: "hooldus-ja-edasiarendus",
    href: "/hooldus-ja-edasiarendus",
    num: "07",
    title: "Hooldus ja edasiarendus",
    navTitle: "Hooldus",
    short:
      "Pikaajaline tehniline hooldus: uuendused, varundus, monitooring, jõudlus ja järjepidev edasiarendus.",
    intro:
      "Süsteem ei ole valmis käivitamise hetkel. Kreatech hoiab veebilehed ja rakendused töös: uuendused, varundused, monitooring ja jõudlus. Sama tiim teeb ka edasiarendused, nii et konteksti ei ole vaja iga kord uuesti selgitada.",
    forWhom: [
      "Ettevõtted, kelle veeb või süsteem on ärikriitiline.",
      "Organisatsioonid ilma oma tehnilise meeskonnata.",
      "Kliendid, kelle senine arenduspartner on projektist väljunud.",
    ],
    problems: [
      "Uuendused ja varundused on tegemata.",
      "Tõrke korral pole selget vastutajat.",
      "Väiksemad muudatused jäävad kuudeks ootele.",
    ],
    weDo: [
      "Uuendame CMS-i, sõltuvused ja serveritarkvara.",
      "Seadistame varundused ja jälgime nende toimimist.",
      "Monitoorime kättesaadavust ja jõudlust.",
      "Teeme jooksvad parandused ja edasiarendused.",
    ],
    tech: ["WordPress", "Statamic", "Node.js", "Serverihaldus", "Monitooring", "Varundus"],
    faq: [
      {
        q: "Kas võtate hooldusesse ka saidi, mida te ise ei ehitanud?",
        a: "Jah. Alustame tehnilisest ülevaatusest ja teeme kriitilised parandused enne püsihoolduse alustamist.",
      },
      {
        q: "Mida hooldus sisaldab?",
        a: "Uuendused, varundus, monitooring, turvaparandused, jõudluse jälgimine ja kokkulepitud mahus jooksvad muudatused.",
      },
    ],
    projects: [],
    metaTitle: "Veebi ja tarkvara hooldus ning edasiarendus | Kreatech",
    metaDescription:
      "Tehniline hooldus ja edasiarendus: uuendused, varundus, monitooring, turvalisus ja jooksvad parandused.",
  },
] as const satisfies readonly Service[];

export type Project = {
  slug: string;
  name: string;
  client: string;
  industry: string;
  category: string;
  tech: string[];
  summary: string;
  challenge: string;
  solution: string;
  role: string;
  implementation: string[];
  image: string;
  url: string;
  services: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "projecting",
    name: "Projecting",
    client: "Projecting",
    industry: "Koolitus ja nõustamine",
    category: "WordPress · TutorLMS",
    tech: ["WordPress", "TutorLMS", "PHP"],
    summary:
      "Ettevõtluskoolituste ja projektinõustamise veebileht koos veebikursuste keskkonnaga.",
    challenge:
      "Koolitusi ja nõustamisteenuseid tuli esitleda ühes kohas koos veebipõhiste kursustega, mida saab ise hallata ja täiendada.",
    solution:
      "Ehitasime WordPressi-põhise lehe, kus teenuste sisu ja kursuste keskkond on ühendatud ning sisu haldab klient ise.",
    role: "Arendus ja tehniline haldus.",
    implementation: [
      "Kohandatud WordPressi teema ja sisutüübid.",
      "TutorLMS-i põhine kursuste keskkond.",
      "Sisuhalduse seadistus kliendi toimetajale.",
    ],
    image: "/images/projecting.webp",
    url: "https://projecting.ee/",
    services: ["wordpress-arendus", "veebiarendus"],
  },
  {
    slug: "haeska-farm",
    name: "Haeska Farm",
    client: "Haeska Farm",
    industry: "Põllumajandus",
    category: "Veebirakendus",
    tech: ["ReactJS", "Node.js"],
    summary: "Farmi igapäevase halduse veebirakendus.",
    challenge:
      "Farmi andmed ja igapäevased tegevused olid laiali ning vajasid ühte kohta, kus neid sisestada ja vaadata.",
    solution:
      "Arendasime veebirakenduse, kus farmi andmeid saab hallata brauserist, ka nutitelefonist.",
    role: "Analüüs, arendus ja käivitamine.",
    implementation: [
      "ReactJS-i põhine kasutajaliides.",
      "Node.js-i taustsüsteem ja andmemudel.",
      "Mobiilis kasutatav vaade igapäevaseks sisestuseks.",
    ],
    image: "/images/haeska.webp",
    url: "https://farm-view-live.vercel.app/",
    services: ["tarkvaraarendus"],
  },
  {
    slug: "solaris-kliima",
    name: "Solaris Kliima",
    client: "Solaris Kliima",
    industry: "Kütte- ja kliimaseadmed",
    category: "Veebiarendus",
    tech: ["ReactJS", "GSAP"],
    summary: "Küttelahenduste ja kliimaseadmete ettevõtte veebileht.",
    challenge:
      "Teenused ja tootevalik vajasid selget esitlust, mis eristub tehniliselt sarnaste pakkujate seas.",
    solution:
      "Ehitasime kiire ReactJS-i põhise veebilehe, kus teenuste struktuur on selge ja liikumine lehel rahulik.",
    role: "Disainilahendus ja arendus.",
    implementation: [
      "ReactJS-i põhine frontend.",
      "Mõõdukad, sisu toetavad animatsioonid.",
      "Mobiilivaate optimeerimine.",
    ],
    image: "/images/solaris.webp",
    url: "https://solariskliima.vercel.app/",
    services: ["veebiarendus"],
  },
  {
    slug: "babycool",
    name: "BabyCool",
    client: "BabyCool",
    industry: "Toidutootmine",
    category: "Statamic",
    tech: ["Statamic", "Laravel"],
    summary: "Mahebeebitoidu tootja veebileht Statamicu sisuhaldusega.",
    challenge:
      "Tootesisu ja brändilugu tuli esitada ühtses vormis ning anda kliendile võimalus seda ise hallata.",
    solution: "Arendasime Statamicu-põhise lehe selge sisumudeli ja toimetaja liidesega.",
    role: "Arendus ja sisumudeli kavandamine.",
    implementation: [
      "Statamicu sisumudel ja toimetaja vaated.",
      "Kohandatud kujundus ja komponendid.",
    ],
    image: "/images/babycoolfood.webp",
    url: "https://babycoolfood.com/",
    services: ["statamic-arendus", "veebiarendus"],
  },
  {
    slug: "alar-truu",
    name: "Alar Truu",
    client: "Alar Truu",
    industry: "Fotograafia",
    category: "Statamic · Portfoolio",
    tech: ["Statamic", "Laravel"],
    summary: "Fotograafi portfoolioleht, kus pildid on esiplaanil.",
    challenge: "Suur pildimaht vajas esitlust, mis on kiire ja hõlpsasti täiendatav.",
    solution:
      "Ehitasime Statamicu-põhise portfoolio, kus galeriide lisamine käib sisuhaldusest ja pildid laetakse optimeeritult.",
    role: "Arendus.",
    implementation: ["Statamicu galeriide sisumudel.", "Piltide optimeerimine ja laadimisloogika."],
    image: "/images/alar.webp",
    url: "https://alartruu.com/",
    services: ["statamic-arendus"],
  },
  {
    slug: "kalma-ehitus",
    name: "Kalma Ehitus",
    client: "Kalma Ehitus",
    industry: "Ehitus",
    category: "Statamic",
    tech: ["Statamic", "Laravel"],
    summary: "Ehitus- ja renoveerimisettevõtte veebileht.",
    challenge: "Teenused ja tehtud tööd vajasid struktuuri, mida saab jooksvalt täiendada.",
    solution:
      "Arendasime Statamicu-põhise lehe, kus teenused ja objektid on eraldi sisutüübid ja omavahel seotud.",
    role: "Arendus ja sisumudeli kavandamine.",
    implementation: ["Teenuste ja objektide sisutüübid.", "Kohandatud kujundus ja vormid."],
    image: "/images/kalma.webp",
    url: "https://kalmaehitus.ee/",
    services: ["statamic-arendus", "veebiarendus"],
  },
  {
    slug: "rebel-moto",
    name: "Rebel Moto",
    client: "Rebel Moto",
    industry: "Jaekaubandus",
    category: "WordPress · E-pood",
    tech: ["WordPress", "WooCommerce"],
    summary: "Mootorratta varustuse e-pood.",
    challenge: "Tootevalik ja ostuprotsess vajasid hallatavat ja töökindlat lahendust.",
    solution: "Arendasime WordPressi ja WooCommerce'i põhise e-poe koos toote- ja tellimushaldusega.",
    role: "Arendus ja haldus.",
    implementation: ["WooCommerce'i seadistus ja kohandused.", "Tootekataloogi struktuur."],
    image: "/images/rebelmoto.webp",
    url: "https://www.rebelmoto.ee/",
    services: ["wordpress-arendus"],
  },
  {
    slug: "ktg",
    name: "Kuressaare Täiskasvanute Gümnaasium",
    client: "Kuressaare Täiskasvanute Gümnaasium",
    industry: "Haridus",
    category: "Statamic · Avalik sektor",
    tech: ["Statamic", "Laravel"],
    summary: "Kooli veebileht, kus sisu haldavad kooli töötajad.",
    challenge:
      "Kooli info, õppekorraldus ja uudised vajasid selget struktuuri ning lihtsat sisuhaldust mitmele toimetajale.",
    solution:
      "Arendasime Statamicu-põhise lehe, kus sisu on jagatud selgeteks tüüpideks ja toimetamine on lihtne.",
    role: "Arendus ja sisumudeli kavandamine.",
    implementation: [
      "Sisutüübid õppekorralduse, uudiste ja dokumentide jaoks.",
      "Toimetaja liides mitmele kasutajale.",
    ],
    image: "/images/ktg.webp",
    url: "https://www.ktg.edu.ee/",
    services: ["statamic-arendus", "veebiarendus"],
  },
];

export const PROCESS = [
  { num: "01", title: "Analüüs", desc: "Kaardistame eesmärgi, kasutajad, andmed ja piirangud." },
  { num: "02", title: "Lahendus", desc: "Paneme paika skoobi, arhitektuuri ja etapid." },
  { num: "03", title: "Arendus", desc: "Ehitame iteratsioonidena, iga etapp on nähtav." },
  { num: "04", title: "Testimine", desc: "Kontrollime funktsionaalsuse, jõudluse ja mobiilivaate." },
  { num: "05", title: "Käivitamine", desc: "Üleandmine, dokumentatsioon ja koolitus." },
  { num: "06", title: "Edasiarendus", desc: "Hooldus, uuendused ja järjepidevad täiendused." },
];

export const CAPABILITIES = [
  { title: "Frontend", items: ["ReactJS", "TypeScript", "TanStack Start", "Tailwind CSS"] },
  { title: "Backend", items: ["Node.js", "PHP", "Laravel", "REST ja JSON API-d"] },
  { title: "Sisuhaldus", items: ["WordPress", "Statamic", "WooCommerce", "Headless CMS"] },
  { title: "Infrastruktuur", items: ["Vercel", "Serverihaldus", "Varundus", "Monitooring"] },
  { title: "Liidestused", items: ["Välised API-d", "Maksed", "Kursusekeskkonnad", "Andmeimport"] },
  { title: "Kvaliteet", items: ["Tehniline SEO", "Jõudlus", "Ligipääsetavus", "Dokumentatsioon"] },
];

export const FAQ = [
  {
    q: "Millega Kreatech tegeleb?",
    a: "Kreatech OÜ on Eesti tarkvaraarendusettevõte. Arendame kohandatud tarkvara, veebirakendusi ja veebilehti, teeme tarkvara analüüsi, pakume tehnilist projektijuhtimist ning hooldame ja arendame edasi olemasolevaid lahendusi.",
  },
  {
    q: "Milliseid tarkvaralahendusi Kreatech arendab?",
    a: "Sisemisi ärisüsteeme, veebirakendusi, andmehalduse lahendusi, e-poode ja liidestusi olemasolevate süsteemidega. Peamised tehnoloogiad on ReactJS, TypeScript, Node.js, WordPress ja Statamic.",
  },
  {
    q: "Kas Kreatech teeb WordPressi arendust?",
    a: "Jah. Arendame kohandatud WordPressi teemasid ja funktsionaalsust, WooCommerce'i e-poode ning võtame üle ja korrastame olemasolevaid WordPressi saite.",
  },
  {
    q: "Kas Kreatech arendab Statamic veebilehti?",
    a: "Jah. Arendame Statamicu-põhiseid veebilehti ja headless-lahendusi, sealhulgas sisumudeli kavandamise ja toimetaja liidese.",
  },
  {
    q: "Kas olemasolevat tarkvara saab edasi arendada?",
    a: "Saab. Alustame olemasoleva lahenduse ülevaatusest ning lepime kokku, mida on mõistlik edasi arendada ja mida ümber ehitada.",
  },
  {
    q: "Kas Kreatech saab võtta üle olemasoleva arendusprojekti?",
    a: "Jah. Vaatame üle koodibaasi, arhitektuuri ja dokumentatsiooni ning teeme ettepaneku, kuidas projektiga edasi liikuda.",
  },
  {
    q: "Kas pakute tehnilist projektijuhtimist?",
    a: "Jah. Kui arendusmeeskond on olemas, aga puudub inimene, kes ärilise vajaduse tehniliseks ülesandeks tõlgib, saame tulla projekti tehnilise projektijuhina.",
  },
  {
    q: "Kuidas tarkvaraprojektiga alustamine käib?",
    a: "Alustame tutvumiskõnest, kus räägime läbi eesmärgi ja piirangud. Seejärel teeme analüüsi, lepime kokku skoobi ja etapid ning alustame arendust.",
  },
  {
    q: "Kui palju tarkvaraarendus maksab?",
    a: "Hind sõltub skoobist. Anname pakkumise pärast analüüsi, kui nõuded on kirjas. Mahukamad projektid jagame etappideks, et kulu oleks jälgitav.",
  },
  {
    q: "Kas pakute pärast projekti valmimist hooldust?",
    a: "Jah. Pakume uuendusi, varundust, monitooringut ja jooksvat edasiarendust kokkulepitud mahus.",
  },
];

export function serviceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export function projectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

export function projectsForService(slug: string) {
  return PROJECTS.filter((p) => p.services.includes(slug));
}

export type ServiceItem = (typeof SERVICES)[number];
