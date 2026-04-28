# Bloom 4 Design System — Component JSON Files

This directory contains JSON component files for use with the **Bloom DS Sync** Figma plugin. Each file describes a frame and its nested nodes using design tokens from the Bloom 4 design system.

---

## Directory Structure

```
components/
├── atoms/
│   ├── button.json        — All button variants (primary, secondary, ghost, disabled, full-width)
│   ├── pill.json          — Pill/chip variants (active, default, disabled, outline)
│   ├── badge.json         — Badge/tag variants (brand, success, error, neutral, discount)
│   └── typography.json    — Full text-style showcase (all tokens)
├── molecules/
│   ├── product-card.json  — Product card with image, brand, name, price & badge
│   ├── qty-selector.json  — Quantity stepper (−/count/+)
│   └── color-selector.json — Color swatch picker
├── organisms/
│   ├── header.json        — App header with back arrow, title & wishlist icon
│   └── sticky-cta.json    — Sticky bottom CTA bar with price block & add-to-cart button
└── templates/
    └── component-showcase.json — Full-page showcase of all components
```

---

## JSON Schema

### Top-level structure

```json
{
  "frame": { /* root Figma frame properties */ },
  "nodes": [ /* array of top-level nodes */ ]
}
```

### Frame node

```json
{
  "type": "FRAME",
  "id": "unique-kebab-id",
  "name": "Display Name",
  "layoutMode": "VERTICAL" | "HORIZONTAL" | "NONE",
  "primaryAxisAlignItems": "MIN" | "CENTER" | "MAX" | "SPACE_BETWEEN",
  "counterAxisAlignItems": "MIN" | "CENTER" | "MAX",
  "paddingTop": 16, "paddingBottom": 16,
  "paddingLeft": 16, "paddingRight": 16,
  "itemSpacing": 8,
  "cornerRadius": 8,
  "width": 375,
  "height": 56,
  "layoutSizingHorizontal": "FILL" | "HUG" | "FIXED",
  "layoutSizingVertical": "HUG" | "FIXED",
  "fills": ["color/token/path"],
  "strokes": ["color/token/path"],
  "strokeWeight": 1,
  "strokeAlign": "INSIDE" | "OUTSIDE" | "CENTER",
  "children": [ /* nested nodes */ ]
}
```

### Text node

```json
{
  "type": "TEXT",
  "id": "unique-kebab-id",
  "name": "Display Name",
  "text": "Actual text content",
  "textStyle": "body/small",
  "color": "color/content/neutral/primary",
  "layoutSizingHorizontal": "FILL"
}
```

---

## Color Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `color/bg/brand/default` | `#ec008c` | Primary brand pink fill |
| `color/bg/brand/hover` | dark pink | Brand hover state |
| `color/bg/brand/light/default` | `#fff2f9` | Light brand background |
| `color/bg/brand/disabled` | grey | Disabled button fill |
| `color/bg/neutral/primary` | `#ffffff` | White background |
| `color/bg/neutral/secondary` | `#f5f5f6` | Light grey surface |
| `color/border/neutral/primary` | `#e0e0e3` | Default border |
| `color/border/neutral/secondary` | — | Secondary border |
| `color/border/brand/default` | brand pink | Brand border |
| `color/content/neutral/primary` | `#31313a` | Default text (dark) |
| `color/content/neutral/secondary` | `#69696f` | Secondary/muted text |
| `color/content/neutral/disabled` | `#c9c9cc` | Disabled text |
| `color/content/brand/default` | `#ec008c` | Brand-coloured text |
| `color/content/textlink/default` | `#d90082` | Text link colour |
| `color/bg/error/default` | error red | Error state fill |
| `color/bg/success/default` | success green | Success state fill |

> **Tip:** For raw hex values not covered by tokens (e.g. success green text `#0f9f40`), use an object: `{ "hex": "#0f9f40" }`.

---

## Text Style Tokens

| Token | Usage |
|-------|-------|
| `heading/small` | Large page heading |
| `heading/subheading` | Sub-page heading |
| `section/title` | Section title |
| `section/subtitle` | Section subtitle / header bar title |
| `section/small-subtitle` | Small section label |
| `body/text` | Body copy (semibold) |
| `body/text-regular` | Body copy (regular) |
| `body/bold-text` | Body bold emphasis |
| `body/small` | Small body copy (semibold) |
| `body/small-regular` | Small body copy (regular) |
| `body/bold-small` | Small bold emphasis |
| `body/tiny` | Tiny text (semibold) |
| `body/tiny-regular` | Tiny text (regular) |
| `body/bold-tiny` | Tiny bold — badges, labels |
| `body/micro` | Micro / legal copy |
| `button/lg` | Large button label |
| `button/md` | Medium button label |
| `button/sm` | Small button label |
| `price/main/md` | Main price display |

---

## Corner Radius Tokens

| Token | px value | Shape |
|-------|----------|-------|
| `border-radius/sm` | 4 | Slightly rounded |
| `border-radius/card` | 8 | Card rounding |
| `border-radius/full` | 1000 | Pill / circle |

---

## How to Use with Bloom DS Sync

1. Open Figma and install the **Bloom DS Sync** plugin.
2. In the plugin, choose **Import from JSON**.
3. Select one of the `.json` files from this directory.
4. The plugin will create the described frame on your canvas with all tokens resolved.

### Tips

- Use `component-showcase.json` as a master reference page to see all components at once.
- IDs must be unique within a file. All IDs in these files follow `kebab-case` with a component prefix.
- `fills: []` means transparent (no fill).
- `layoutSizingHorizontal: "FILL"` makes the element stretch to fill its parent's width — equivalent to "Fill container" in Figma's auto-layout panel.
- Nested `children` arrays support unlimited depth.
