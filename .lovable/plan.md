## Hinnang olemasolevale SEO-le

Põhi on hea: title/description, robots, theme-color, JSON-LD (Organization + WebSite + FAQPage), sitemap server-route, robots.txt, favicon.svg. Aga leidsin mõned probleemid – kõige tähtsam on et **og-image hetkel ei tööta** ühelgi sotsiaalvõrgustikul ega AI-eelvaates.

## Probleemid

### 1. og:image vale tee (kriitiline)
`src/routes/__root.tsx` viitab:
- `og:image` → `https://kreatech.ee/og-image.png`
- `twitter:image` → `https://kreatech.ee/og-image.jpg` (vale laiend pealekauba)

Päris fail asub `public/images/og-image.png`, mis serveeritakse aadressilt `/images/og-image.png`. Seega `https://kreatech.ee/og-image.png` annab 404 – Facebook/LinkedIn/Slack/X/AI crawler ei näe ühtegi pilti.

**Lahendus:** parandan mõlemad URL-id `https://kreatech.ee/images/og-image.png` peale (sama fail nii og:image kui twitter:image).

### 2. og:image / og:url asuvad ainult `__root.tsx`-s
Knowledge hoiatab: `og:image` peaks olema lehe leaf route'is (`src/routes/index.tsx`), mitte rootis – muidu kõik tulevased alamlehed pärivad sama pildi. Praegu on ainult `/`, seega töötab, aga kui lisame `/teenused` vms, on probleem juba ees.

**Lahendus:** viin `og:image`, `og:image:width/height`, `twitter:image`, `og:url`, `twitter:title`, `twitter:description` `__root.tsx`-st üle `src/routes/index.tsx` `head()`-i. `__root.tsx`-i jätan ainult sitewide vaikeväärtused (charset, viewport, site_name, theme-color, favicon, fondid).

### 3. Favicon link puudub `<head>`-st
Fail `public/favicon.svg` on olemas, aga `__root.tsx` `links` ei viita talle. Brauserid tavaliselt leiavad, aga eksplitsiitne on parem.

**Lahendus:** lisan `{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }` ja Apple touch icon kui soovid (PNG vajadusel hiljem).

### 4. Topelt title/description root vs index
`__root.tsx` ja `src/routes/index.tsx` mõlemad määravad title + description (erinevad sõnastused). TanStack mergeb name/property järgi nii et leaf võidab – töötab, aga tekitab segadust. Hoian rootis lühikese vaikimisi sõnastuse, leafis täiusliku.

### 5. og:url konflikt
Root: `https://kreatech.ee` (absoluutne). Index: `/` (relatiivne). Leaf võidab, aga viin ainult leafi (vt punkt 2) – siis on kõik üheselt määratud.

### 6. Väikesed asjad
- `og:image` mõõtmed (1200x630) on määratud – kontrolli, kas päris fail vastab sellele. Kui ei, parandan väärtused.
- Twitter card kasutab `property=` aga spetsifikatsioon eelistab `name=` Twitteri tagide jaoks – ühtlustan `name="twitter:*"`.
- Võiksin lisada `og:image:alt` ligipääsetavuse jaoks.

## Mida teen koodis

1. **`src/routes/__root.tsx`** – eemaldan og:image, og:url, twitter:image/title/description. Lisan favicon linki. Jätan ainult sitewide vaikeväärtused.
2. **`src/routes/index.tsx`** – lisan og:image (`/images/og-image.png` absoluutsena), og:image:width/height/alt, twitter:image, twitter:title, twitter:description. Kasutan `name="twitter:*"` `property` asemel.
3. **Kontroll** – pärast muudatust soovitan testida Facebook Sharing Debuggeri / LinkedIn Post Inspectoriga.

## Mida ei muuda
JSON-LD struktuuriandmeid (Organization/WebSite/FAQPage) – need on juba korras. Sitemapi ja robotsit ka mitte.
