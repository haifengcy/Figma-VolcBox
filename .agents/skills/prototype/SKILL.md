---
name: prototype
description: Build a throwaway prototype to answer a design question. Use when the user wants to explore what a UI should look like, or sanity-check whether a state model or logic feels right. For UI work, generates several radically different UI variations switchable via URL params and a floating bottom bar.
---

# Prototype

A prototype is **throwaway code that answers a question**. The question decides the shape.

## Pick a branch

Identify which question is being answered, using the user's prompt, the surrounding code, or by asking if the user is around:

- **"Does this logic / state model feel right?"** → Build a single shareable HTML file (free-play buttons plus tabbed guided walkthroughs) that pushes the state machine through cases that are hard to reason about on paper, and that a non-developer can drive.
- **"What should this look like?"** → **UI Prototype** (see below). Generate several radically different UI variations on a single route, switchable via a URL search param and a floating bottom bar.

The two branches produce very different artifacts, so getting this wrong wastes the whole prototype. If the question is genuinely ambiguous and the user isn't reachable, default to whichever branch better matches the surrounding code (a backend module → logic; a page or component → UI) and state the assumption at the top of the prototype.

## Rules that apply to both

1. **Throwaway from day one, and clearly marked as such.** Locate the prototype code close to where it will actually be used so context is obvious.
2. **Use real data wherever possible.** Fake data hides layout problems.
3. **Keep it small.** The goal is a decision, not a feature.

---

## UI Prototype

Generate **several radically different UI variations** on a single route, switchable from a floating bottom bar. The user flips between variants in the browser, picks one (or steals bits from each), then throws the rest away.

### When this is the right shape

- "What should this page look like?"
- "I want to see a few options for this dashboard before committing."
- "Try a different layout for the settings screen."
- Any time the user would otherwise spend a day picking between three vague mockups in their head.

### Process

#### 1. State the question and pick N

Default to **3 variants**. More than 5 stops being radically different and starts being noise, so cap there.

Write down the plan in one line, in the prototype's location or a top-of-file comment:

> "Three variants of the settings page, switchable via `?variant=`, on the existing `/settings` route."

#### 2. Generate radically different variants

Draft each variant. Hold each one to:

- The page's purpose and the data it has access to.
- The project's component library / styling system (TailwindCSS, shadcn, MUI, plain CSS, whatever).
- A clear exported component name, e.g. `VariantA`, `VariantB`, `VariantC`.

**Make the variants actually different.** Different layout paradigms (card grid vs. table vs. timeline), different information hierarchies, different visual weights. Variants that only differ in color or spacing are not useful.

#### 3. Add the floating bottom bar

The bottom bar must:

- Float over the page content (position: fixed, bottom: 0).
- Show a labeled button/tab for each variant.
- Highlight the current variant.
- Switch variants by updating `?variant=` in the URL (use `history.replaceState` or whatever the router provides, so the page doesn't hard-reload).
- Never appear in production (gate it behind an env flag or a `?prototype=true` check).

#### 4. Mark it as throwaway

Add a comment at the top of every file in the prototype:

```
// PROTOTYPE — throwaway, delete before shipping
```

And add a `TODO: delete prototype` note in the issue tracker if one exists.

#### 5. Hand it to the user

Tell the user:
1. How to run it.
2. How to switch variants (the bottom bar, or the URL param directly).
3. That you'll delete the files once they've picked a direction.

---

## After the prototype

Once the user picks a direction (or a mix), do one of:

- **Build it properly** — implement the chosen design cleanly, delete the prototype files.
- **Archive it** — if the decision is deferred, move the prototype to a clearly-named archive location and open a tracking issue.

Never leave prototype files in the main codebase without a clear deletion plan.
