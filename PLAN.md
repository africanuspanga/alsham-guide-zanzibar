# ALSHAM GUIDE ZANZIBAR — Implementation Plan

**Stack**: Next.js 15 (App Router) + TypeScript 5 + Tailwind CSS 4 + next-intl
**Working directory**: `/Users/admin/alsham-guide-zanzibar`

---

## Phase 1 — Image Assets: Rename, Convert, Organize

### 1.1 Convert HEIC files to JPEG using macOS `sips`

Run from `public/images/`:

```bash
sips -s format jpeg "nakupenda 1.HEIC" --out "nakupenda-beach-1.jpeg"
sips -s format jpeg "mnemba 2.HEIC"    --out "mnemba-island-2.jpeg"
sips -s format jpeg "mnemba 4.HEIC"    --out "mnemba-island-4.jpeg"
sips -s format jpeg "mnemba 5.HEIC"    --out "mnemba-island-5.jpeg"
sips -s format jpeg "mnemba 6.HEIC"    --out "mnemba-island-6.jpeg"
sips -s format jpeg "mnemba 7.HEIC"    --out "mnemba-island-7.jpeg"
sips -s format jpeg "jozani foresdt.HEIC" --out "jozani-forest-2.jpeg"
sips -s format jpeg "jozani foresrt.HEIC" --out "jozani-forest-3.jpeg"
sips -s format jpeg "jozani forest.HEIC"  --out "jozani-forest-4.jpeg"
```

Then delete the original `.HEIC` files.

### 1.2 Rename all images — spaces to hyphens, clean names

**Logo** (root of public/):
- `AL SHAM LOGO- NO BG.png` → `alsham-logo.png`

**Shared / Hero**:
- `hero section image.jpg` → `hero-home.jpg`
- `why zanzibar al shami.png` → `why-zanzibar.png`
- `boat-shore-near-sea-sunny-day-with-cloudy-sky-background.jpg` → `boat-shore.jpg`
- `fishing-ship-water-indian-ocean-low-tide-zanzibar-tanzania.jpg` → `fishing-ship.jpg`
- `wooden-handmade-boat-sea-cloudy-sky-sunlight-sunset.jpg` → `wooden-boat.jpg`

**Prison Island**:
- `prison island 1.JPG.jpeg` → `prison-island-1.jpeg`
- `prison island 2.JPG.jpeg` → `prison-island-2.jpeg`
- `prison island 3.JPG.jpeg` → `prison-island-3.jpeg`
- `prison island 4.JPG.jpeg` → `prison-island-4.jpeg`

**Maalum Cave**:
- `maalum.JPG.jpeg` → `maalum-cave-1.jpeg`
- `maalum cave 2.JPG.jpeg` → `maalum-cave-2.jpeg`
- `maalum cave 3.JPG.jpeg` → `maalum-cave-3.jpeg`

**Mnemba Island**:
- `mnemba.PNG` → `mnemba-island-1.png`
- `mnemba 3.JPG.jpeg` → `mnemba-island-3.jpeg`
- `mnemba 8.JPG.jpeg` → `mnemba-island-8.jpeg`
- `mnemba 9.PNG` → `mnemba-island-9.png`
- `mnemba 10.PNG` → `mnemba-island-10.png`
- `mnemba 12.PNG` → `mnemba-island-12.png`

**Mtende Beach**:
- `mtende image.jpeg` → `mtende-beach-hero.jpeg`
- `mtende beach 1.JPG.jpeg` → `mtende-beach-1.jpeg`
- `mtende beach 2.JPG.jpeg` → `mtende-beach-2.jpeg`
- `mtende beach 3.JPG.jpeg` → `mtende-beach-3.jpeg`
- `mtende beach 4.JPG.jpeg` → `mtende-beach-4.jpeg`
- `more mtende.PNG` → `mtende-beach-5.png`
- `other mtende.PNG` → `mtende-beach-6.png`

**Nakupenda Beach**:
- `nakupenda 2.JPG.jpeg` → `nakupenda-beach-2.jpeg`
- `nakupenda 3.JPG.jpeg` → `nakupenda-beach-3.jpeg`
- `nakupenda 4.JPG.jpeg` → `nakupenda-beach-4.jpeg`

**Forodhani Gardens**:
- `Forodhani 1.JPG.jpeg` → `forodhani-gardens-1.jpeg`
- `Forodhani 2.JPG.jpeg` → `forodhani-gardens-2.jpeg`
- `Forodhani 3.JPG.jpeg` → `forodhani-gardens-3.jpeg`
- `Forodhani 4.JPG.jpeg` → `forodhani-gardens-4.jpeg`

**Spice Farm**:
- `agricole traditionnelle.JPG.jpeg` → `spice-farm-1.jpeg`
- `agricole traditionnelle 2.JPG.jpeg` → `spice-farm-2.jpeg`
- `agricole traditionnelle 3.JPG.jpeg` → `spice-farm-3.jpeg`

**Pungume Island**:
- `L'île de Pungume .JPG.jpeg` → `pungume-island-1.jpeg`
- `L'île de Pungume 2.JPG.jpeg` → `pungume-island-2.jpeg`
- `L'île de Pungume 3.JPG.jpeg` → `pungume-island-3.jpeg`
- `L'île de Pungume 4.JPG.jpeg` → `pungume-island-4.jpeg`
- `L'île de Pungume 5.JPG.jpeg` → `pungume-island-5.jpeg`

**Safari Blue**:
- `safari blue.JPG.jpeg` → `safari-blue-1.jpeg`
- `safari blue 2.JPG.jpeg` → `safari-blue-2.jpeg`
- `safari blue 3.JPG.jpeg` → `safari-blue-3.jpeg`
- `safari blue 4.JPG.jpeg` → `safari-blue-4.jpeg`
- `safari blue 5.JPG.jpeg` → `safari-blue-5.jpeg`
- `safari blue 6.JPG.jpeg` → `safari-blue-6.jpeg`
- `safari blue 7.JPG.jpeg` → `safari-blue-7.jpeg`
- `safari blue 8.JPG.jpeg` → `safari-blue-8.jpeg`

**Jozani Forest**:
- `jozani forest.JPG.jpeg` → `jozani-forest-1.jpeg`
- (3 more from HEIC conversion above → jozani-forest-2/3/4.jpeg)

**Stone Town**:
- `stone town 1.jpeg` → `stone-town-1.jpeg`
- `stone town 2.jpeg` → `stone-town-2.jpeg`
- `stone town 3.jpeg` → `stone-town-3.jpeg`
- `stone town 4.jpeg` → `stone-town-4.jpeg`
- `stone rown 5.jpeg` → `stone-town-5.jpeg`
- `stone town 6.jpeg` → `stone-town-6.jpeg`

**Quad Tour**:
- `quad 1.jpeg` → `quad-tour-1.jpeg`
- `quad 2.jpeg` → `quad-tour-2.jpeg`
- `quad 3.jpeg` → `quad-tour-3.jpeg`
- `quad 4.jpeg` → `quad-tour-4.jpeg`

**Blue Lagoon**:
- `Blue lagoon.jpeg` → `blue-lagoon-1.jpeg`
- `blue lagooon 2.jpeg` → `blue-lagoon-2.jpeg`
- `blue lagoon 4.jpeg` → `blue-lagoon-4.jpeg`

**Safari packages**:
- `safari.jpeg` → `safari-hero.jpeg`
- `safari 2.jpeg` → `safari-2.jpeg`
- `safari 3.jpeg` → `safari-3.jpeg`
- `safari images.jpeg` → `safari-4.jpeg`
- `safari picturs.jpeg` → `safari-5.jpeg`
- `safarii imafg.jpeg` → `safari-6.jpeg`
- `more safari .jpeg` → `safari-7.jpeg`
- `maasai safari .jpeg` → `safari-maasai.jpeg`
- `JOURS ET DEUX NUITS 1.jpeg` → `serengeti-1.jpeg`
- `JOURS ET DEUX NUITS 2.jpeg` → `serengeti-2.jpeg`
- `JOURS ET DEUX NUITS 3.jpeg` → `serengeti-3.jpeg`
- `JOURS ET DEUX NUITS 4.jpeg` → `serengeti-4.jpeg`
- `JOURS ET DEUX NUITS 6.jpeg` → `serengeti-6.jpeg`

**Taxi Transfer**:
- `Transfer Taxi 1.jpeg` → `taxi-transfer-1.jpeg`
- `Tranfer Taxi 2.jpeg` → `taxi-transfer-2.jpeg`
- `transfer taxi 3.jpeg` → `taxi-transfer-3.jpeg`
- `transfer taxi 4.jpeg` → `taxi-transfer-4.jpeg`
- `trasfer taxi 5.jpeg` → `taxi-transfer-5.jpeg`
- `trasfer taxi 6.jpeg` → `taxi-transfer-6.jpeg`

---

## Phase 2 — Dependencies and Configuration

### 2.1 Install packages

```bash
npm install next-intl
```

No UI library — pure Tailwind. Booking form uses plain `useState`.

### 2.2 Tailwind CSS 4 brand colors

Edit `src/app/globals.css` — add to `@theme inline` (no tailwind.config.ts needed in v4):

```css
@theme inline {
  /* ... existing tokens ... */
  --color-brand-blue:       #2C87B8;
  --color-brand-blue-dark:  #1F5F86;
  --color-brand-gold:       #F39C34;
  --color-brand-gold-light: #F7C948;
  --color-brand-gray:       #8A8A8A;
  --color-brand-sky:        #9EC3DA;
  --color-navy:             #0f2744;
}
```

Remove dark-mode media query — this site is light-mode only.

### 2.3 App Router restructure for next-intl

Move all pages under `src/app/[locale]/`. New structure:

```
src/app/
  layout.tsx              ← thin shell: <html><body>{children}</body></html>
  [locale]/
    layout.tsx            ← NextIntlClientProvider + Header + Footer
    page.tsx              ← Home
    car-rental/page.tsx
    taxi-transfer/page.tsx
    safari/page.tsx
    excursion/
      page.tsx            ← listing grid
      [slug]/page.tsx     ← detail page
    contact/page.tsx
```

Delete old stubs: `src/app/about/`, `src/app/tours/`.

### 2.4 i18n files to create

- `src/i18n/routing.ts` — locales: `['fr', 'en']`, defaultLocale: `'fr'`
- `src/i18n/navigation.ts` — `createNavigation(routing)`
- `src/i18n/request.ts` — `getRequestConfig` loading messages
- `src/middleware.ts` — `createMiddleware(routing)`
- `messages/fr.json` — French translations (primary)
- `messages/en.json` — English translations (secondary)
- `next.config.ts` — wrap with `createNextIntlPlugin`

### 2.5 Data files to create

- `src/types/index.ts` — `Tour`, `SafariPackage`, `BookingFormData` interfaces
- `src/lib/tours.ts` — array of all 13 excursion tours with slugs, FR/EN titles, descriptions, images
- `src/lib/safaris.ts` — array of 2 safari packages

---

## Phase 3 — Core Components

| Component | File | Notes |
|-----------|------|-------|
| WaveDivider | `src/components/ui/WaveDivider.tsx` | SVG wave, `fill` + `flip` props |
| LanguagePicker | `src/components/ui/LanguagePicker.tsx` | 🇫🇷/🇬🇧 flag toggle, uses next-intl `useRouter` |
| TourCard | `src/components/ui/TourCard.tsx` | Image + dark info bar + title + 2 action buttons |
| BookingModal | `src/components/ui/BookingModal.tsx` | 7-field form, WhatsApp + mailto submit |
| HeroSection | `src/components/sections/HeroSection.tsx` | 2-column: text left, image right |
| Header | `src/components/layout/Header.tsx` | Sticky, white, mobile hamburger |
| Footer | `src/components/layout/Footer.tsx` | Dark navy, 4-column, wave divider above |

### TourCard structure (matches reference screenshots):
1. Image (aspect-video, `object-cover`) — badge top-right (`bg-brand-gold`)
2. Dark info bar (`bg-brand-blue-dark text-white`) — price + duration
3. Card body — bold blue title, 2-line clamped description
4. Action row — "Voir Détails" (outlined gold) + "Réserver" (filled gold)

### BookingModal fields (from screenshot):
1. Nom Complet * — text input
2. Email * — email input
3. Téléphone * — tel input
4. Nombre de Personnes * — number input
5. Date Souhaitée * — date input
6. Pays * — text input
7. Demandes Spéciales — textarea (optional)

Submit: opens WhatsApp deeplink `https://wa.me/255777596239?text=...` with form data pre-filled. Secondary: mailto link.

---

## Phase 4 — Home Page (`/`)

Sections in order:
1. **HeroSection** — "Votre Guide à Zanzibar" / hero-home.jpg / CTA → /excursion
2. **WaveDivider**
3. **Why AlSham? (3 columns)** — authenticity, expertise, flexibility icons with text
4. **WaveDivider**
5. **Featured Excursions** — 4 TourCards (Prison Island, Mnemba, Safari Blue, Jozani) + "Voir tout" → /excursion
6. **WaveDivider**
7. **Safari teaser** — dark navy bg, 2 safari package cards side by side
8. **WaveDivider**
9. **Contact strip** — phones, WhatsApp button, email (gold background band)

---

## Phase 5 — Excursion Pages

### `/excursion` listing
- Grid `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`
- All 13 TourCards from `src/lib/tours.ts`
- BookingModal controlled via `useState` at page level

### `/excursion/[slug]` detail
1. Breadcrumb
2. Hero image (full-width, h-400)
3. Gallery grid (`grid-cols-2 md:grid-cols-4`)
4. Two-column: description (left 2/3) + sticky booking card (right 1/3)
5. Related tours (3 cards)
- `generateStaticParams` from `tours` array
- `generateMetadata` for SEO

---

## Phase 6 — Safari Page (`/safari`)

- HeroSection with safari-hero.jpeg
- Two large package cards (full-width, image + text side by side)
- Each package: title, duration badge, day-by-day itinerary bullets, "Réserver" → BookingModal
- Image gallery (2×2 grid) per package

---

## Phase 7 — Taxi Transfer + Car Rental

### `/taxi-transfer`
- HeroSection with taxi-transfer-1.jpeg
- Image gallery (taxi-transfer-1 through 6)
- 3 service cards: Airport Transfer, Hotel Transfer, City Tour
- Pricing table (placeholder zones and rates)
- "Réserver" → BookingModal

### `/car-rental`
- HeroSection
- 3 placeholder vehicle cards (Sedan, SUV, Minibus) — no images yet
- Features: with driver, airport pickup, flexible duration
- "Réserver" → BookingModal

---

## Phase 8 — Contact Page (`/contact`)

- HeroSection (compact)
- Two-column layout:
  - Left: phone cards, WhatsApp button, email, address
  - Right: Google Maps iframe
- Quick contact form (Name, Email, Message) → mailto submit

**Contact details**:
- Phone: +255 777 596 239 / +255 714 226 778
- Email: Aliyshaib2017@gmail.com
- Address: Zanzibar Town Center, Zanzibar
- WhatsApp: `https://wa.me/255777596239`
- Map: `-6.1603, 39.1996`

---

## Build Order (Dependency Sequence)

```
Phase 1:  Image renaming + HEIC conversion (CLI scripts)
Phase 2:  next-intl install → i18n files → globals.css colors → types → data files
Phase 3:  WaveDivider → LanguagePicker → TourCard → BookingModal → HeroSection → Header → Footer → [locale]/layout.tsx
Phase 4:  Home page
Phase 5:  Excursion listing → Excursion detail [slug]
Phase 6:  Safari page
Phase 7:  Taxi Transfer → Car Rental
Phase 8:  Contact page
```

---

## Key Technical Notes

1. **Tailwind 4**: No `tailwind.config.ts` — colors go in `globals.css` `@theme inline` only.
2. **next-intl**: Requires `src/app/[locale]/` App Router structure + middleware.
3. **All `next/image`** must have `width`+`height` or use `fill` with a positioned parent.
4. **HEIC files** must be converted before `next/image` can use them (browser can't decode HEIC).
5. **Mobile nav**: `useState` hamburger in Header — drawer overlay closes on link click.
6. **Booking form**: no backend — WhatsApp deeplink is primary CTA; mailto is fallback.
7. **WhatsApp format**: `https://wa.me/255777596239` (no `+`, no spaces).
8. **Existing stubs** in `src/app/about/`, `src/app/tours/` must be deleted before adding `[locale]/` routes.
