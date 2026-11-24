---
name: Ahsan Yasir Sharar Portfolio
description: Dark-mode backend & agentic AI engineering portfolio built around high-signal telemetry, verifiable metrics, and recruiter scanability.
colors:
  primary: "#818cf8"
  primary-deep: "#4f46e5"
  primary-soft: "#a5b4fc"
  primary-surface: "#12121e"
  primary-border: "#1e1b4b"
  secondary: "#fbbf24"
  secondary-deep: "#f59e0b"
  tertiary: "#10b981"
  danger: "#f43f5e"
  neutral-bg: "#09090b"
  surface: "#18181b"
  surface-elevated: "#202023"
  border: "#27272a"
  border-hover: "#3f3f46"
  text-primary: "#ffffff"
  text-secondary: "#d4d4d8"
  text-muted: "#a1a1aa"
  text-subtle: "#71717a"
typography:
  display:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.1em"
rounded:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.primary-deep}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  chip-tech:
    backgroundColor: "{colors.neutral-bg}"
    textColor: "{colors.text-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.xs}"
    padding: "2px 8px"
  card-standard:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.lg}"
    padding: "24px"
  input-field:
    backgroundColor: "{colors.neutral-bg}"
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
---

# Design System: Ahsan Yasir Sharar Portfolio

## Overview

**Creative North Star: "The Agentic Terminal Observatory"**

The portfolio operates as a dark obsidian engineering studio where production backend architecture, AI/RAG pipelines, and automated test suites are presented with the clarity of a live telemetry dashboard. Rather than relying on decorative flourishes or abstract agency graphics, the visual language treats real technical proof—query reductions, E2E test counts, architecture badges, and live deployment links—as the primary visual hero.

Every section balances editorial readability with terminal-inspired precision. Generous dark canvas breathing room keeps dense engineering metrics effortless to scan for time-constrained recruiters and hiring managers, while subtle ambient indigo backlights, monospace eyebrow labels, and spring-physics micro-interactions give the interface a tactile, contemporary developer-tool craft.

The system rejects light-mode corporate resume templates, unverified skill progress bars (e.g., "Python 95%"), and cluttered multi-color neon gradients that obscure text hierarchy.

**Key Characteristics:**
- Deep obsidian-zinc canvas (`#09090b`) paired with translucent carbon-slate cards (`#18181b` at 30%–60% opacity) and crisp `1px` structural borders.
- Dual-voice typography pairing geometric **Inter** for narrative clarity with **JetBrains Mono** for system metadata, tech stack tags, eyebrow labels, and interactive status indicators.
- Role-governed color semantics: **Signal Indigo** for primary actions and core focus, **Capstone Amber** exclusively for flagship award recognition (`HELPDESK` Kaggle Capstone), and **Telemetry Emerald** for verified metrics and live system status.
- Tactile motion grammar powered by spring transitions, subtle card lift (`-4px`), image zoom on hover (`1.03x`–`1.05x`), and ambient radial glows.

## Colors

The palette anchors on a low-glare zinc-obsidian dark mode punctuated by high-contrast indigo primary accents, warm amber capstone highlights, and emerald verification signals.

### Primary
- **Signal Indigo** (`#818cf8`, mapped to `--color-indigo-500`): Primary interactive accent used for CTA buttons, active filter tabs, section eyebrow labels, timeline nodes, and link hover states.
- **Electric Indigo** (`#4f46e5`, mapped to `--color-indigo-600`): Deep hover state for primary buttons, text selection background, and print-mode accent ink.
- **Soft Periwinkle** (`#a5b4fc`, mapped to `--color-indigo-400`): Secondary gradient stop in the Hero subtitle (`from-indigo-400 to-violet-400`) and subtle badge text highlight.
- **Deep Indigo Surface** (`#12121e`, mapped to `--color-indigo-950`): Tinted dark well for icon badges, status pills, and ambient radial background blurs.
- **Indigo Hairline** (`#1e1b4b`, mapped to `--color-indigo-900`): Subtle border stroke for indigo-tinted pills and active icon containers.

### Secondary
- **Capstone Amber** (`#fbbf24` / `#f59e0b`): Reserved strictly for flagship recognition—highlighting the featured Google × Kaggle Capstone project card border (`rgba(245, 158, 11, 0.4)`), the "Kaggle Capstone" trophy badge, featured achievement checkmarks, and active lightbox indicators.

### Tertiary
- **Telemetry Emerald** (`#10b981`): Signals live availability (pulsing status dot on the Hero terminal badge), verified experience checkmarks, database/QA skill category icons, and form submission confirmation states.
- **Validation Rose** (`#f43f5e`): Marks required form field asterisks and inline validation error banners.

### Neutral
- **Obsidian Zinc** (`#09090b`, mapped to `--color-neutral-950`): Root page background, section canvas, input field interiors, and custom scrollbar track.
- **Carbon Slate** (`#18181b`, mapped to `--color-neutral-900`): Base card surface, secondary button fill, floating status badge background, and modal containers.
- **Elevated Graphite** (`#202023`, mapped to `--color-neutral-850`): Subtle border and surface step for nested metric boxes and tech stack chips.
- **Structural Zinc Border** (`#27272a`, mapped to `--color-neutral-800`): Default `1px` border across cards, inputs, timeline rules, and navigation dividers.
- **Hover Zinc Border** (`#3f3f46`, mapped to `--color-neutral-700`): Interactive border elevation on neutral buttons and skill chips.
- **Pure White** (`#ffffff`): Primary display headings, section titles, card headings, and active button labels.
- **Crisp Zinc** (`#d4d4d8`, mapped to `--color-neutral-300`): Lead summaries, achievement list items, and highlighted values.
- **Muted Zinc** (`#a1a1aa`, mapped to `--color-neutral-400`): Standard body paragraphs, card descriptions, and inactive navigation links.
- **Subtle Telemetry Grey** (`#71717a`, mapped to `--color-neutral-500`): Metadata captions, timestamps, location tags, and footer colophon.

### Named Rules
**The Capstone Amber Exclusivity Rule.** Capstone Amber (`#fbbf24`) belongs exclusively to featured competition-winning or flagship work (`project.featured === true`). Never dilute it across ordinary buttons, standard skill tags, or non-featured cards.

**The Telemetry Emerald Rule.** Telemetry Emerald (`#10b981`) communicates live operational status, verified engineering accomplishments, or successful transmission—never decorative backgrounds.

## Typography

**Display Font:** Inter (`ui-sans-serif, system-ui, sans-serif`)
**Body Font:** Inter (`ui-sans-serif, system-ui, sans-serif`)
**Label/Mono Font:** JetBrains Mono (`ui-monospace, SFMono-Regular, monospace`)

**Character:** Clean, high-x-height geometric sans-serif prose (**Inter**) paired with a sharp, technical monospace (**JetBrains Mono**) that frames every section and metadata tag like structured code telemetry.

### Hierarchy
- **Display** (`700` bold, `2.25rem` mobile to `3rem` desktop / `36px–48px`, `line-height: 1.2`, `letter-spacing: -0.025em`): Hero typed name heading with an animated `3px` Signal Indigo cursor bar.
- **Headline** (`700` bold, `1.875rem` mobile to `2.25rem` desktop / `30px–36px`, `line-height: 1.25`, `letter-spacing: -0.025em`): Section headings (`About`, `Professional Experience`, `Education`, `Featured Projects`, `Technical Skills Matrix`, `Certifications & Credentials`, `Get In Touch`).
- **Title** (`600–700` semibold/bold, `1.125rem–1.25rem` / `18px–20px`, `line-height: 1.4`): Project card titles, timeline roles, certificate titles, and capability card headers.
- **Body** (`400` regular, `0.875rem–1rem` / `14px–16px`, `line-height: 1.625`, max measure `60ch–68ch`): Section intros, project narratives, and experience bullet points.
- **Label / Telemetry Mono** (`500–600` medium/semibold, `0.625rem–0.75rem` / `10px–12px`, `letter-spacing: 0.08em–0.1em`, uppercase for eyebrows): Section eyebrow kickers, tech stack pills, date/location metadata, filter tabs, and status badges.

### Named Rules
**The Monospace Telemetry Rule.** Every section header must open with a `12px` (`0.75rem`) uppercase `JetBrains Mono` eyebrow label in Signal Indigo (`#818cf8`) with wide tracking (`0.1em`) above the `Inter` section headline. All technical tags, timestamps, and system filenames (`interactive_resume.json`, `ahsan.yasir()`) are strictly set in `JetBrains Mono`.

## Layout

- **Container & Grid:** Centered `max-w-7xl` (`1280px`) container with `24px` (`px-6`) horizontal padding.
  - **Hero & Contact:** 12-column asymmetric split (`lg:grid-cols-12` — 7 columns content / 5 columns profile frame in Hero; 5 columns contact channels / 7 columns interactive form in Contact).
  - **About:** 12-column split (`lg:grid-cols-12` — 6 columns narrative + 2x2 highlight grid / 6 columns 2x2 capability card grid).
  - **Experience & Education:** Centered `max-w-4xl` (`896px`) vertical alternating timeline with a `2px` structural spine (`left-4` on mobile, `left-1/2` on desktop).
  - **Projects, Skills, & Certificates:** 1-column mobile, 2-column tablet (`md:grid-cols-2`), 3-column desktop (`lg:grid-cols-3`) equal-height card grids (`gap-6` to `gap-8`).
- **Vertical Rhythm:** Consistent `96px` (`py-24`) vertical padding per section, separated by a full-width `1px` top border in `#18181b` (`border-t border-neutral-900`).
- **Viewport Budget:** The Hero occupies `min-h-screen` with comfortable whitespace around the 2-column split and a bottom scroll indicator; subsequent sections maintain at least 25% open Obsidian Zinc background around card grids.

## Elevation & Depth

Depth is achieved through **Hybrid Tonal Layering + Ambient Backlight**: translucent dark surfaces (`bg-neutral-900/30` to `bg-neutral-900/60`) sit over the `#09090b` canvas, delineated by crisp `1px` borders (`#27272a`) that brighten to Signal Indigo (`rgba(129, 140, 248, 0.3–0.5)`) or Capstone Amber (`rgba(251, 191, 36, 0.7)`) on hover. Large, low-opacity radial blurs (`blur-[100px]` to `blur-[120px]`) provide atmospheric depth behind the Hero and section margins without reducing text contrast.

### Shadow Vocabulary
- **Primary CTA Glow** (`0 10px 15px -3px rgba(129, 140, 248, 0.25)`): Applied to primary Signal Indigo buttons (`View Work`, `Get in touch`, active filter tabs) to anchor interactive priority.
- **Brand Monogram Glow** (`0 0 15px rgba(129, 140, 248, 0.5)`): Neon badge halo around the header `AY` monogram square.
- **Featured Capstone Aura** (`0 10px 15px -3px rgba(245, 158, 11, 0.05)`): Subtle warm elevation distinguishing featured Kaggle Capstone project cards.
- **Card & Modal Depth** (`0 20px 25px -5px rgba(0, 0, 0, 0.5)` to `0 25px 50px -12px rgba(0, 0, 0, 0.75)`): Structural drop shadow lifting timeline cards, profile frames, and lightbox/resume modals off the dark canvas.
- **Certificate Lightbox Halo** (`0 0 50px rgba(99, 102, 241, 0.15)`): Ambient indigo frame glow around expanded certificate previews.

### Named Rules
**The Border-First Elevation Rule.** On dark obsidian surfaces, standard drop shadows alone disappear. Every elevated card, chip, button, or modal must carry an explicit `1px` border (`#27272a` at rest, transitioning to a tinted accent border on hover or focus).

## Shapes

- **Corner Radius Hierarchy:**
  - `4px` (`rounded`): Compact technology stack micro-tags inside project cards and resume inventory lists.
  - `8px` (`rounded-lg`): Brand monogram badge, section icon wells (`36px–40px`), and back-to-top controls.
  - `12px` (`rounded-xl`): Primary & secondary CTA buttons, filter tabs, form inputs, highlight boxes, and skill tags.
  - `16px` (`rounded-2xl`): All primary content cards (Projects, Experience, Education, Skills, Certificates, Contact form container, and Resume modal).
  - `24px` (`rounded-3xl`): Hero portrait frame (`aspect-[4/5]`) with inner vignette shadow (`inset 0 0 40px rgba(0,0,0,0.6)`).
  - `9999px` (`rounded-full`): Status availability pills, category overlay badges, timeline center nodes, and lightbox navigation buttons.
- **Background Geometry:** Hero features a subtle radial dot matrix (`1.5px` white dots spaced on a `24px × 24px` grid at `3%` opacity) layered over soft radial indigo/violet blurs.

## Components

### Buttons
- **Character:** Tactile, high-contrast, and immediately responsive with directional icon micro-motion.
- **Shape:** `12px` radius (`rounded-xl` for hero/form CTAs, `8px` `rounded-lg` for compact navbar CTA).
- **Primary:** Signal Indigo background (`#818cf8`), pure white semibold text (`14px–16px`), `12px 24px` padding (`px-6 py-3`), paired with the Primary CTA Glow.
- **Hover / Focus:** Background deepens to Electric Indigo (`#4f46e5`); trailing directional icons shift (`translate-y-0.5` for down arrows, `translate-x-0.5` for external links).
- **Secondary / Ghost:** Carbon Slate fill (`#18181b`) with a `1px` Structural Zinc border (`#27272a`), Crisp Zinc text (`#e4e4e7`), brightening to `#27272a` fill on hover.

### Chips & Badges
- **Tech Stack Micro-Chips:** `4px` radius (`rounded`), `2px 8px` padding, `#09090b` at 50% opacity with `#202023` border, `10px` `JetBrains Mono` in Muted Zinc (`#a1a1aa`).
- **Skill Matrix Pills:** `12px` radius (`rounded-xl`), `6px 12px` padding, `#18181b` at 60% opacity with `#27272a` border, `12px` `JetBrains Mono` text with a leading `6px` Signal Indigo status dot.
- **Category & Status Pills:** Full pill radius (`9999px`), `10px–12px` `JetBrains Mono`, pairing a `14px` category icon or pulsing availability dot with a translucent dark or tinted border.

### Cards / Containers
- **Corner Style:** `16px` radius (`rounded-2xl`).
- **Background:** Translucent Carbon Slate (`rgba(24, 24, 27, 0.4)`) for grid cards; solid Carbon Slate (`#18181b`) for timeline cards and modals.
- **Shadow Strategy:** `shadow-xl` combined with the Border-First Elevation Rule.
- **Border:** `1px solid rgba(39, 39, 42, 0.6–0.8)` at rest; transitions to `rgba(129, 140, 248, 0.4)` on hover (`rgba(251, 191, 36, 0.7)` for featured Capstone cards).
- **Internal Padding:** `24px` (`p-6`) standard card padding; `32px` (`sm:p-8`) for form containers and modals.

### Inputs / Fields
- **Style:** `12px` radius (`rounded-xl`), Obsidian Zinc interior (`#09090b`), `1px` Structural Zinc border (`#27272a`), `12px 16px` (`px-4 py-3`) padding, `14px` Inter text in `#e4e4e7`, with `12px` `JetBrains Mono` labels above.
- **Focus:** Outline removed (`focus:outline-none`) in favor of a clean `1px` Signal Indigo border shift (`focus:border-indigo-500`).
- **Error / Disabled:** Validation errors display in a translucent rose banner (`bg-rose-950/40 border-rose-900/60 text-rose-300`); disabled submit button shifts to `#1e1b4b` with a spinning border loader.

### Navigation
- **Style:** Fixed top header (`z-50`), transitioning from transparent (`py-5`) at top-of-page to glassmorphic Obsidian Zinc (`bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/50 py-3 shadow-lg`) after scrolling `20px`.
- **Brand Signature:** `AY` indigo monogram badge + `ahsan.yasir()` monospace function-call wordmark.
- **Links & Mobile Drawer:** `14px` medium Inter links (`#a1a1aa` to `#ffffff` on hover), social icon buttons, compact `Get in touch` CTA, and an animated collapsible mobile drawer (`md:hidden`).

### Signature Components
- **Key Achievements Telemetry Box:** Nested inside project cards (`p-3 rounded-xl bg-neutral-900/80 border-neutral-850`, or `bg-amber-950/20 border-amber-900/30` on featured work), displaying a `10px` uppercase monospace `KEY ACHIEVEMENTS` header and checkmark-prefixed quantified engineering metrics.
- **Interactive Printable Resume Modal (`interactive_resume.json`):** A terminal-chrome modal dialog (`max-w-4xl`) styled like a JSON document viewer on screen that dynamically transforms into a clean, black-on-white executive paper resume under `@media print`.
- **Floating Hero Status Telemetry Badge:** Animated floating card (`-bottom-6 -left-6`) with infinite gentle vertical oscillation (`y: [0, -8, 0]` over 5s), pairing a terminal icon and pulsing emerald status dot with `"System Status: Ready for Impact"`.

## Do's and Don'ts

### Do:
- **Do** pair every section headline with a `12px` uppercase `JetBrains Mono` eyebrow kicker in Signal Indigo (`#818cf8`).
- **Do** use `1px` structural borders (`#27272a`) on every dark surface and transition the border color to Signal Indigo (`#818cf8`) or Capstone Amber (`#fbbf24`) on hover.
- **Do** highlight quantified engineering outcomes inside the nested `Key Achievements` telemetry block on project cards.
- **Do** preserve the `@media print` light-mode override rules in `ResumeModal` so printed/PDF resumes export cleanly on white paper.
- **Do** prefix public asset paths with `import.meta.env.BASE_URL` so images render reliably under GitHub Pages (`/Sharar-s-portfolio/`).

### Don't:
- **Don't** apply Capstone Amber (`#fbbf24`) to non-featured cards, ordinary buttons, or general section accents (violates the Capstone Amber Exclusivity Rule).
- **Don't** introduce arbitrary percentage skill bars or circular gauges in the Skills Matrix; keep skills as structured monospace pills with status dots.
- **Don't** place borderless dark cards (`#18181b`) directly on the `#09090b` background without a `1px` border.
- **Don't** mix serif or decorative display fonts into the `Inter` + `JetBrains Mono` dual-font hierarchy.
