
# Kreatech — portfoolio/ettevõtte leht

Ehitan ühelehelise (single page) tumeda portfoolio-saidi Kreatechile, sarnaselt Energetic'u stiilis: fluid scroll-animatsioonid, suured tüpograafilised pealkirjad, palju liikumist. Põhivärvid: sügav tumesinine taust, ergas sinine ja kollane aktsentidena.

## Stiil & disainisüsteem

- **Värvid** (`src/styles.css`, oklch tokenid):
  - background: väga tume sinakas-must (`oklch(0.12 0.03 250)`)
  - foreground: peaaegu valge
  - primary: ergas sinine (`oklch(0.65 0.2 250)`)
  - accent: soe kollane (`oklch(0.85 0.17 90)`)
  - kaardid/sektsioonid: pisut helem tumesinine
- **Tüpograafia**: suur display-font pealkirjadele (Space Grotesk või Syne) + puhas sans body-tekstile (Inter/DM Sans). Laetakse `<link>` kaudu `__root.tsx` head'is.
- **Liikumine**: `motion` (Motion for React, juba ökosüsteemis) + `gsap` ScrollTrigger jaoks. Lisan paketid: `gsap`, `motion`.

## Lehe struktuur (üks route: `src/routes/index.tsx`)

Asendan praeguse placeholder index'i. Üks pikk leht ankur-linkidega navis.

1. **Nav** — fix top, läbipaistev → blur scroll'imisel. Logo "Kreatech" + lingid (Teenused, Tööd, Meist, Kontakt).
2. **Hero** — täisekraan. Massiivne kineetiline pealkiri ("Building digital craft." vms), sõnad animeeruvad ükshaaval sisse (GSAP SplitText-laadne efekt motion'iga). Taustal subtiilne gradient-blob, mis liigub hiire järgi. Scroll-vihje all.
3. **Services** — 4 kaarti horisontaalse pinned scroll'iga (GSAP ScrollTrigger):
   - IT / Tarkvara arendus
   - ReactJS arendus
   - Statamic & WordPress
   - Süsteemide & WP haldus
   Iga kaart suur number, ikoon, lühikirjeldus.
4. **Works** — grid 6 placeholder-projekti (pilt, tiitel, lühitekst, tag). Pildid kerge parallax'iga, hover'il scale + kollane overlay. Pildid: `https://placehold.co/...` URL'id, et kasutaja saab hiljem oma pildid panna.
5. **About / Meist** — lühike "kes me oleme" tekst + 2 inimese placeholder-kaarti (ringikujuline avatar placeholder, nimi "Eesnimi Perekonnanimi", roll). Kommenteeritud märkus koodis, kuhu kasutaja oma pildi/nime paneb.
6. **Contact** — lihtne vorm (Nimi, Email, Sõnum). Submit teeb `mailto:hello@kreatech.ee?subject=...&body=...` window.location'i kaudu. Kõrval suur kollane "Let's talk" tekst.
7. **Footer** — minimaalne, copyright + sotsiaalid placeholder.

## Animatsioonide register

- Hero pealkirja sõnasõnaline reveal (motion stagger).
- Scroll-triggered fade+slide kõigil sektsioonidel (üks ühine `Reveal` komponent).
- Services horisontaalne pinned scroll (GSAP).
- Works pildid parallax + hover scale.
- Hiir-järgiv gradient hero'l ja Contact'is.
- Smooth scroll ankur-linkidele.

## SEO

`index.tsx` route head: title "Kreatech — Digital craft & systems", description, og tags. H1 hero's. Semantilised `<section>` id'dega scroll-ankrutele.

## Tehnilised märkused

- Uued paketid: `gsap`, `motion` (`bun add gsap motion`).
- Fondid lingitud `__root.tsx` head'is, perekonnad registreeritud `@theme {}` blokki `src/styles.css`.
- Kõik värvid tokenitena, mitte hardkoodituna komponentides.
- Placeholder-pildid: `https://placehold.co/800x600/0a1628/3b82f6?text=Project+1` stiilis URL'id, et hiljem lihtne asendada.
- Üks fail komponendi kohta sektsioonide jaoks: `src/components/site/{Nav,Hero,Services,Works,About,Contact,Footer}.tsx`.

Kas plaan sobib või soovid midagi muuta (nt rohkem lehti eraldi route'idena, kindel font, teine tooni-aktsent)?
