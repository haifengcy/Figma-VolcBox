---
name: ui-spec
description: Turn a UI design discussion or feature request into a structured UI specification document. No interview — just synthesis of what's already been discussed. Produces a spec covering layout, components, interactions, states, and acceptance criteria.
---

# UI Spec

This skill takes the current conversation context and produces a structured **UI specification document**. It does NOT conduct an interview — use `/grill-me` first if you need to surface requirements.

## When to use

- After a `/grill-me` session and you have clear requirements
- When turning a Figma file or design screenshot into a buildable spec
- When breaking down a feature for handoff to implementation
- To create a shared reference document before coding begins

## Process

### 1. Gather context

Review everything available:
- The current conversation
- Any referenced Figma files, screenshots, or design references
- The existing codebase (components, design system, routing conventions)
- Any previous specs or ADRs in the `.agents/` or `docs/` directory

### 2. Write the spec using the template below

Use the project's domain vocabulary throughout. Reference existing components by name where applicable.

### 3. Confirm with user

Share the spec and ask:
> "Does this capture what you're building? Anything missing or wrong?"

Get sign-off before implementation begins.

---

## Spec Template

```markdown
# [Feature Name] — UI Spec

**Status:** Draft | Review | Approved  
**Author:** [agent or person]  
**Last updated:** [date]

---

## Overview

One paragraph describing what this UI does and why it exists.

## Users & Context

- **Primary user:** [who]
- **Entry point:** [how they get here — nav, link, action, etc.]
- **Device:** [desktop / mobile / both] — [primary breakpoint]

## Layout

### Page Structure

[Describe the overall layout: full-width, sidebar, centered, etc.]

### Information Hierarchy

1. [Most important element]
2. [Second most important]
3. [Supporting content]

### Responsive Behavior

- **Desktop (≥1024px):** [layout description]
- **Tablet (768–1023px):** [layout description]  
- **Mobile (<768px):** [layout description]

---

## Components

### [Component Name]

- **What it is:** [brief description]
- **Existing component:** [Yes — `<ComponentName>` / No — needs to be built]
- **Props / variants:** [list key configuration]
- **Behavior:** [interactions, states]

[Repeat for each component]

---

## Interactions

| Interaction | Trigger | Result |
|-------------|---------|--------|
| [e.g. Click "Save"] | User clicks the Save button | Form submits, success toast shows |
| [e.g. Hover card] | Mouse over a card | Shadow elevates, CTA appears |

---

## States

### Loading
[How does the UI look while data is loading? Skeleton? Spinner? Which elements are affected?]

### Empty
[What does the user see when there's no data? Empty state illustration? CTA?]

### Error
[How are errors surfaced? Inline? Toast? Banner? What's the recovery action?]

### Success
[How does the UI confirm a completed action?]

---

## Animations & Transitions

| Element | Animation | Duration | Notes |
|---------|-----------|----------|-------|
| [e.g. Modal open] | Fade + scale up | 200ms | ease-out |

If no animations are required, write: "No custom animations. Use system defaults."

---

## Accessibility

- [ ] All interactive elements are keyboard-navigable
- [ ] Color is not the sole means of conveying information  
- [ ] Images have alt text
- [ ] Form fields have associated labels
- [ ] Focus states are visible
- [ ] ARIA roles applied where needed: [list specifics]

---

## Out of Scope

List things explicitly NOT included in this spec:

- [e.g. Mobile-specific interactions]
- [e.g. Admin view]
- [e.g. Internationalization]

---

## Acceptance Criteria

- [ ] [Specific, testable condition 1]
- [ ] [Specific, testable condition 2]
- [ ] [Specific, testable condition 3]

---

## Open Questions

| Question | Owner | Due |
|----------|-------|-----|
| [e.g. Should the table support sorting?] | [PM name] | [date] |

---

## References

- Figma: [link]
- Related spec: [link]
- Design system: [link]
```
