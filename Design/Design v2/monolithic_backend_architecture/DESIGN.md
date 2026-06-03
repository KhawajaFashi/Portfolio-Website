---
name: Monolithic Backend Architecture
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4c4546'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#bc000a'
  on-secondary: '#ffffff'
  secondary-container: '#e2241f'
  on-secondary-container: '#fffbff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1b1b'
  on-tertiary-container: '#848484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#ffdad5'
  secondary-fixed-dim: '#ffb4aa'
  on-secondary-fixed: '#410001'
  on-secondary-fixed-variant: '#930005'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1b1b1b'
  on-tertiary-fixed-variant: '#474747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
  code-gray: '#1A1A1A'
  surface-muted: '#F5F5F5'
  terminal-green: '#00FF41'
typography:
  display-xl:
    fontFamily: Playfair Display
    fontSize: 120px
    fontWeight: '900'
    lineHeight: 110px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  body-lg:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.1em
  quote-italics:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 36px
spacing:
  container-max: 1440px
  gutter: 32px
  margin-mobile: 20px
  section-padding: 160px
  inner-padding: 24px
---

## Brand & Style

This design system is built for a senior-level Backend Engineer, emphasizing technical precision, structural integrity, and architectural authority. The personality is "Intellectual Powerhouse"—quietly confident, highly organized, and focused on deep systems rather than surface-level flash.

The aesthetic blends **Minimalism** with **Editorial Brutalism**. It utilizes expansive white space to denote clarity of thought, while oversized, high-impact typography mirrors the "heavy lifting" of backend architecture. The layout is structured like a high-end technical journal or a premium fashion lookbook, creating a jarring but sophisticated juxtaposition with the technical subject matter.

The goal is to evoke a sense of reliability and elite craft, moving the portfolio away from standard "tech-bro" templates toward a timeless, gallery-like experience.

## Colors

The palette is strictly high-contrast to emphasize clarity and "binary" logic. 

- **Primary Black:** Used for all structural elements, primary text, and heavy display type. It represents the "black box" of the backend.
- **Pure White:** The canvas. Generous whitespace is non-negotiable to maintain the premium editorial feel.
- **Signature Red:** A vibrant, aggressive accent color used sparingly for calls to action, active states, and critical highlights. It draws the eye to the most important "nodes" in the system.
- **Terminal Green:** Reserved exclusively for small data points, uptime indicators, or live code snippets to add a subtle "hacker" nod without breaking the editorial aesthetic.

## Typography

The typography strategy relies on the tension between a high-contrast Serif and a technical Monospace.

- **Headlines:** Use **Playfair Display** at massive scales. It should feel oversized and slightly "crowded" to create visual impact. For the most critical hero statements, use the 900 weight with tight letter spacing.
- **Body:** **Geist** provides a clean, technical, yet highly legible reading experience for long-form documentation and experience descriptions.
- **Labels/Data:** **JetBrains Mono** is used for all "meta-information" (dates, tech stacks, stats). This anchors the design in the engineering world.
- **Stylistic Rule:** Mix serif italics within headlines to emphasize specific keywords, mimicking the editorial style seen in premium print magazines.

## Layout & Spacing

The system uses a **Fixed Grid** on desktop (12 columns) and a **Fluid Grid** on mobile (4 columns).

- **Section Breathing:** Use aggressive vertical padding (`160px` or more) between major content blocks to ensure each project or experience feels like a standalone exhibit.
- **Asymmetry:** Shift content off-center. For example, a headline might span columns 1-8, while the supporting body text sits in columns 6-12. This "staggered" layout creates a dynamic, architectural feel.
- **The "Data Margin":** Reserve a narrow side column (2 columns wide) for technical metadata (labels, dates, git links) that scrolls alongside the main content.

## Elevation & Depth

This system avoids traditional shadows in favor of **Tonal Layers** and **Bold Outlines**.

- **Flat Depth:** Depth is achieved through layering flat shapes. Use a "Surface-Muted" (light gray) background for secondary containers to distinguish them from the pure white base.
- **Hard Borders:** When separation is required, use `1px` solid black borders. Do not use soft shadows or blurs.
- **Interaction Depth:** For the 'award-winning mouse effect,' implement a "Negative Space Cursor." The cursor should be a large circle that inverts the colors of whatever it hovers over (turning white text black and black backgrounds white).

## Shapes

The shape language is strictly **Sharp (0)**. 

Every element—from project cards to buttons—must have 90-degree corners. This reinforces the "Backend/Architectural" theme, suggesting rigidity, structure, and precision. The only exception to this rule is the circular "Scroll Down" indicator or specific image masks that may use a large-scale organic curve to break the grid (as seen in the reference images).

## Components

- **Navigation:** A floating "Status Bar" at the top or bottom. Use `label-mono` for links. It should feel like a system terminal menu—minimal and utilitarian.
- **Hero Sections:** Feature a "Display-XL" headline that occupies at least 60% of the viewport height. Backgrounds should be pure white or a high-resolution, low-saturation technical schematic.
- **Project Cards:** Large-scale imagery or "Code Previews." Headlines are placed over the image in a "Negative Space" blend mode. Technical stacks are listed at the bottom in `label-mono`.
- **Experience Timeline:** A vertical 1px line. Each "node" is a sharp black square. Dates and titles use a mix of Serif Bold and Mono Medium.
- **Buttons:** Rectangular, sharp-edged blocks. Default state is a 1px border; hover state is a solid black fill with white text. No transitions—state changes should be "instant" to mimic terminal response times.
- **The Mouse Effect:** A large (approx 80px) circle cursor that acts as a "magnifier" or "color inverter." When hovering over a project title, the circle should expand, and the project image should bleed into the circle's radius.