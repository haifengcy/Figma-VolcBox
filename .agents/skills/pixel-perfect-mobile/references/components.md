# Component Specs Reference

All measurements in 4pt grid. Values in `pt` (iOS) / `dp` (Android) unless noted.

---

## Button

### Sizes
| Variant | Height | Padding H | Font | Radius |
|---|---|---|---|---|
| Large | 52pt | 24pt | 16pt Medium | 12pt |
| Medium | 44pt | 20pt | 14pt Medium | 10pt |
| Small | 36pt | 16pt | 12pt Medium | 8pt |
| XSmall | 28pt | 12pt | 10pt Medium | 6pt |

### States
- **Default**: Primary color fill
- **Hover/Pressed**: 10–15% darker tint, scale 0.97
- **Disabled**: opacity 0.38 (Material) / 0.3 (HIG), no interaction
- **Loading**: replace label with 20pt spinner, maintain width

### Variants
- **Primary**: filled, high emphasis
- **Secondary/Outlined**: 1.5px border, transparent fill
- **Ghost/Text**: no border, no fill, label only
- **Destructive**: red-600 fill or red-600 text

### Good vs Bad
- ✅ Full-width buttons for single primary action per screen
- ✅ Icon + label for clarity (icon left, 8pt gap)
- ❌ More than 2 button variants on one screen
- ❌ Touch target below 44pt

---

## Input / Text Field

### Sizes
| Variant | Height | Padding H | Padding V | Font |
|---|---|---|---|---|
| Large | 56pt | 16pt | 16pt | 16pt |
| Medium | 48pt | 16pt | 12pt | 14pt |
| Small | 40pt | 12pt | 8pt | 12pt |

### Anatomy
- Label: 12pt Regular, 4pt above field, text-secondary color
- Placeholder: same size as input text, 40% opacity
- Helper text: 12pt, 4pt below field
- Error text: 12pt, red-600, with ⚠️ icon (16pt)
- Border: 1px neutral-300 default, 2px primary on focus, 1px red-600 on error

### States
- Default → Focus → Error → Disabled → Filled

---

## Card

### Sizing
- Width: full column width (screen - 2× margin)
- Min height: 72pt
- Corner radius: 12–16pt
- Padding: 16pt all sides
- Shadow: `0 2px 8px rgba(0,0,0,0.08)`

### Variants
- **Elevated**: white bg + shadow, no border
- **Outlined**: transparent bg + 1px border, no shadow
- **Filled**: neutral-50/100 bg, no border, no shadow

---

## Navigation Bar (Bottom)

| Property | Value |
|---|---|
| Height | 56pt + safe area bottom |
| Icon size | 24pt |
| Label size | 10–12pt |
| Icon → label gap | 4pt |
| Active color | primary |
| Inactive color | neutral-500 |
| Background | surface / white + blur |
| Border top | 0.5px neutral-200 |

---

## Switch / Toggle

| Property | Value |
|---|---|
| Track width | 51pt (iOS) / 52dp (Android) |
| Track height | 31pt (iOS) / 32dp (Android) |
| Thumb diameter | 27pt (iOS) / 24dp (Android) |
| Active color | primary-600 |
| Inactive color | neutral-300 |

---

## Segmented Control

| Property | Value |
|---|---|
| Height | 36–40pt |
| Corner radius | 8–10pt |
| Padding | 2–4pt outer |
| Active tab | white bg + subtle shadow |
| Inactive tab | transparent |
