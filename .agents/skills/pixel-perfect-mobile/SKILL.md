---
name: pixel-perfect-mobile
description: >
  Mobile UI design system for production-ready component specs, design tokens, and code.
  Works with Claude, GPT, Gemini, Cursor, VS Code, Claude Code, OpenCode, Manus, Antigravity and more.
  Use for: component specs (button, card, input, nav, toggle, snackbar), design tokens
  (colors, spacing, radius, typography), iOS HIG / Material Design 3 rules, Figma specs,
  Tailwind / SwiftUI / Jetpack Compose / React Native code, UI critique, or building a
  full mobile design system from scratch. Triggers on: "pixel perfect", "mobile component",
  "design system", "UI tokens", "8pt grid", "4pt grid", "component spec", "what size should X be".
---

# Pixel-Perfect Mobile UI Skill

A complete, opinionated mobile UI design system distilled from real-world best practices.
Use this skill to generate accurate, production-grade specs, tokens, and code for mobile apps.

---

## Core Philosophy

**4pt Grid System** — all spacing, sizing, and layout values are multiples of 4.
Gives finer control than 8pt for compact mobile canvases while staying compatible with 8pt grids.

```
4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 48 | 56 | 64
```

**Hard Grid for structure. Soft Grid for flow.**
- Hard grid: all containers, cards, navigation snap to exact multiples
- Soft grid: body text, captions, decorative elements may deviate slightly for visual balance

---

## Typography System

See `references/typography.md` for full scale and platform details.

### Quick Reference

| Role | Size | Line Height | Letter Spacing | Weight |
|---|---|---|---|---|
| Headline XL | 32pt | 40pt | -2% | Medium |
| Headline L | 28pt | 36pt | -2% | Medium |
| Headline M | 24pt | 32pt | -2% | Medium |
| Headline S | 20pt | 28pt | -1% | Medium |
| Subheading | 18pt | 26pt | -1% | Medium |
| Body L | 16pt | 24pt | 0–0.5% | Regular |
| Body M | 14pt | 20pt | 0–0.5% | Regular |
| Caption | 12pt | 16pt | 1% | Regular |
| Menu Label | 10–12pt | 14pt | 0% | Medium |

**iOS baseline:** line-height ≈ 1.3× font size  
**Material Design:** 4pt increments, dp units (Body 16dp → 24dp line height)

---

## Color System

See `references/colors.md` for token naming and dark mode mapping.

### Minimum Contrast Requirements
- Body text on background: **≥ 4.5:1** (WCAG AA)
- Large text / headings: **≥ 3:1**
- Interactive elements: **≥ 3:1**

### Token Structure
```
color/
  primary/default, hover, pressed, disabled
  neutral/0(white)…900(black)
  semantic/success, warning, error, info
  surface/default, elevated, overlay
  text/primary, secondary, disabled, inverse
```

---

## Spacing & Layout

### Grid Setup (Figma)
```
Frame: 375×812 (iOS) | 360×800 (Android)
Columns: 4
Gutter: 12px
Margin: 16px
Base unit: 8px vertical
```

### Margin Patterns
| Layout | Side Padding |
|---|---|
| Single-column (minimal) | 16px |
| Dual-column (complex) | 6–12px outer, 16px inner |
| Cards in a list | 16px from screen edge |
| Full-bleed images | 0px |

---

## Component Library

See `references/components.md` for specs of all 25+ components.

### Component Quick Index
`Icon` `Avatar` `Tag` `Button` `Input` `Search` `Checkbox` `Radio` `Switch` `Stepper` `Slider` `Progress` `Spinner` `Tooltip` `Snackbar` `Dialog` `BottomSheet` `Accordion` `List` `Card` `SegmentedControl` `TabBar` `NavBar` `Header` `EmptyState`

---

## Output Routing

When asked for specs or code, format according to the requested platform:

- **Figma Specs**: Frame dimensions, auto-layout values, exact padding, corner radius, text style names
- **React Native**: `StyleSheet.create` with explicit pixel values, Flexbox properties
- **SwiftUI**: Views with `.frame`, `.padding`, `.cornerRadius`, using system fonts
- **Jetpack Compose**: Composable functions with `Modifier.padding`, `dp` units, `MaterialTheme`
- **Tailwind**: Utility classes mapped from the 4pt token scale (`h-11`, `p-4`, `rounded-xl`)
