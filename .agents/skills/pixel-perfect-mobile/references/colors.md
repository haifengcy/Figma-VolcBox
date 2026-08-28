# Color System Reference

## Token Architecture

```
color/
├── primitive/      # Raw hex values — never use directly in components
├── semantic/       # Role-based tokens — use these in components
└── component/      # Component-specific overrides (rare)
```

---

## Primitive Palette

### Neutral Scale
```yaml
neutral-0:   #FFFFFF
neutral-50:  #FAFAFA
neutral-100: #F5F5F5
neutral-200: #E5E5E5
neutral-300: #D4D4D4
neutral-400: #A3A3A3
neutral-500: #737373
neutral-600: #525252
neutral-700: #404040
neutral-800: #262626
neutral-900: #171717
neutral-950: #0A0A0A
```

### Blue (Primary Example)
```yaml
blue-50:  #EFF6FF
blue-100: #DBEAFE
blue-200: #BFDBFE
blue-300: #93C5FD
blue-400: #60A5FA
blue-500: #3B82F6
blue-600: #2563EB  # recommended primary
blue-700: #1D4ED8
blue-800: #1E40AF
blue-900: #1E3A8A
```

### Semantic Accents
```yaml
# Error / Destructive
red-500: #EF4444
red-600: #DC2626

# Success
green-500: #22C55E
green-600: #16A34A

# Warning
amber-500: #F59E0B
amber-600: #D97706
```

---

## Semantic Tokens

### Light Mode
```yaml
# Background
bg-default:    neutral-0
bg-subtle:     neutral-50
bg-elevated:   neutral-0 + shadow
bg-overlay:    rgba(0, 0, 0, 0.5)

# Surface
surface-default:  neutral-0
surface-raised:   neutral-50

# Text
text-primary:     neutral-900
text-secondary:   neutral-600
text-tertiary:    neutral-400
text-disabled:    neutral-300
text-inverse:     neutral-0
text-on-primary:  neutral-0

# Border
border-default:   neutral-200
border-strong:    neutral-400
border-focus:     blue-600
```

### Dark Mode
```yaml
# Background
bg-default:    neutral-950
bg-subtle:     neutral-900
bg-elevated:   neutral-800

# Surface
surface-default:  neutral-900
surface-raised:   neutral-800

# Text
text-primary:     neutral-50
text-secondary:   neutral-400
text-tertiary:    neutral-500
text-disabled:    neutral-600

# Border
border-default:   neutral-800
border-strong:    neutral-700
border-focus:     blue-500
```
