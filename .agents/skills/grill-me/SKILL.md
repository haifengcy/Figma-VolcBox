---
name: grill-me
description: A relentless interview to sharpen a UI plan or design. Use before starting any UI/UX work to ensure alignment. The agent asks probing questions about layout, user flow, visual style, interactions, and edge cases — then synthesizes a clear design brief.
---

# Grill Me

A **grill session** is a structured interview where the agent asks you probing questions to surface assumptions, spot gaps, and build shared understanding — **before any design or code is written**.

This is the most important skill in the toolkit. Use it every time you're about to start something new.

## When to use

- Before designing a new page, component, or feature
- When a brief feels vague ("make it look better", "redesign the dashboard")
- When you're unsure what the user actually wants
- Any time alignment is more valuable than speed

## Process

### Phase 1: Open question

Start with a single open question:

> "Before I start, I want to make sure I build the right thing. Can you describe what you're imagining — what it does, who uses it, and roughly what it looks like?"

Let the user speak freely. Don't interrupt. Take notes.

### Phase 2: Focused grilling

Based on what they said, ask targeted follow-up questions. Cover these angles:

**Purpose & Users**
- Who is the primary user of this UI?
- What is the single most important thing they need to accomplish?
- What's the failure mode if the UI gets in their way?

**Layout & Structure**
- Is this a new page, a section within an existing page, or a modal/drawer/overlay?
- What's the rough information hierarchy? (What's most important, least important?)
- Does it need to work on mobile? Which breakpoints matter?

**Visual Style**
- Is there an existing design system or component library to follow?
- Are there reference designs (competitor sites, screenshots, Figma files) you want to draw from?
- What's the overall feel? (Clean/minimal, dense/data-heavy, playful, enterprise...)

**Interactions & States**
- What are the key interactions? (Clicking, dragging, filtering, searching...)
- What are the loading, empty, and error states?
- Are there any animations or transitions expected?

**Constraints**
- What are the hard constraints? (Tech stack, existing components, deadlines)
- What's explicitly out of scope?
- Any accessibility requirements?

**Success Criteria**
- How will you know the UI is working? What does "done" look like?
- Will this be reviewed by stakeholders before implementation? Who?

### Phase 3: Synthesize & confirm

After grilling, summarize back:

> "Here's what I'm hearing: [concise summary]. I'm going to [specific plan]. Does that match what you're imagining?"

Get explicit confirmation before proceeding.

### Phase 4: Produce a design brief

Write a short design brief with:

```
## Design Brief

**What:** [One-sentence description of the UI]
**Who:** [Primary user]
**Goal:** [What the user accomplishes]
**Layout:** [Key structural decisions]
**Style:** [Visual direction]
**Interactions:** [Key interactions]
**States:** [Loading / empty / error handling]
**Out of scope:** [What we're NOT doing]
**Success:** [How we'll know it's done]
```

Share this with the user before starting any implementation.

## Rules

- **Ask one question at a time** during the grilling phase — don't dump a list.
- **Push back on vague answers.** "Make it look good" → "What does 'good' mean for this audience — enterprise dashboard, consumer app, something else?"
- **Don't offer solutions during grilling.** The point is to understand, not to design yet.
- **Stop when you have enough to act.** You don't need perfect information — you need enough to make a plan and know what to validate.
