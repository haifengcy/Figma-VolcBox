# Typography Reference

## Full Type Scale

| Token | Size | Line Height | Letter Spacing | Weight | Use Case |
|---|---|---|---|---|---|
| `heading-4xl` | 32pt | 40pt | -2% | Medium 500 | Hero headers, splash screens |
| `heading-3xl` | 28pt | 36pt | -2% | Medium 500 | Section headers |
| `heading-2xl` | 24pt | 32pt | -2% | Medium 500 | Page titles |
| `heading-xl` | 20pt | 28pt | -1% | Medium 500 | Card titles, modal headers |
| `heading-lg` | 18pt | 26pt | -1% | Medium 500 | Subheadings |
| `heading-md` | 16pt | 24pt | -1% | Medium 500 | List item titles |
| `heading-sm` | 14pt | 20pt | -1% | Medium 500 | Small headings, overlines |
| `heading-xs` | 12pt | 16pt | 0% | Medium 500 | Tags, chip labels |
| `heading-xxs` | 10pt | 14pt | 0% | Medium 500 | Navigation/menu labels |
| `body-lg` | 16pt | 24pt | 0–0.5% | Regular 400 | Primary body text |
| `body-md` | 14pt | 20pt | 0–0.5% | Regular 400 | Secondary body text |
| `body-sm` | 12pt | 16pt | 1% | Regular 400 | Captions, helper text |

---

## Platform Specifics

### iOS (Human Interface Guidelines)
- System font: **SF Pro** (San Francisco)
- Dynamic Type: support all 11 text styles (`largeTitle`, `title1`…`caption2`)
- Line height: ≈ 1.3× font size
- Minimum body text: **17pt** (system default)
- Example specs:
  - Body (17pt) → line height 22pt
  - Subhead (15pt) → line height 20pt
  - Caption 1 (12pt) → line height 16pt

### Android (Material Design 3)
- System font: **Roboto** (default), or **Google Sans**
- Units: `sp` for text (scales with user preferences), `dp` for everything else
- Line height system: 4pt increments
- Example specs:
  - Display Large (57sp) → line height 64dp
  - Headline Medium (28sp) → line height 36dp
  - Body Large (16sp) → line height 24dp
  - Label Small (11sp) → line height 16dp
