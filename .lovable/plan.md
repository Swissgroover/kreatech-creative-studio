
# Plan: päris thumbnailid Works sektsiooni

## Mida teen

1. **Tee screenshot** saidist `https://projecting.ee/` (desktop viewport, 1440×900) `browser--navigate_to_url` + `browser--screenshot` kaudu.
2. **Salvesta CDN-i** `lovable-assets` CLI-ga → `src/assets/works/projecting.png.asset.json` pointer-fail.
3. **Lisa andmestruktuur** `src/i18n/dict.ts`-i — iga `works.items[i]` saab uued väljad:
   - `image: string` (CDN URL)
   - `href: string` (link saidile)
   - `title`, `tag` jäävad alles
   Esimene item mõlemas keeles muutub:
   - ET: `{ title: "Projecting", tag: "WordPress · TutorLMS", href: "https://projecting.ee/", image: <cdn-url> }`
   - EN: sama, tag: `"WordPress · TutorLMS"`
   Ülejäänud 5 itemit jäävad esialgu placeholder-pildiga (kasutavad olemasolevat `placehold.co` URL-i fallback'ina kuni annad nende lingid).
4. **Uuenda `src/components/site/Works.tsx`** — kasuta `w.image` kui olemas, muidu placeholder; `<a href={w.href}>` ja `target="_blank" rel="noopener"` välistele linkidele.

## Mida sa hiljem teed

Kui annad järgmised lingid (ükshaaval või korraga), kordame sammud 1–3 igaühe jaoks. Soovi korral võin jätta ka 5 ülejäänud slotti tühjaks (peita), et leht ei näitaks placeholder'eid — ütle, kumb sobib.

## Tehnilised märkused

- Screenshot tehakse korra; kui sait muutub, tuleb käsitsi uuendada.
- Pildid lähevad Lovable CDN-i (mitte repo), seega lehekoormus jääb kiireks.
- Aspekt `4/3` jääb alles — kärpimine toimub CSS-i `object-cover` kaudu, sait näeb thumbnail'is hea välja.
