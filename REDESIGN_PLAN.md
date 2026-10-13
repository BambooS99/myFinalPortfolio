# Portfolio Redesign Plan: "Resume Sheet" Layout

Restyle the portfolio to match the reference resume layout (Swiss / print style: one giant
word, thin rules running to right-aligned dates, black type on white). Keep **all current
content, sections, projects, and links**. Keep the clickable top nav, restyled to fit.

**Constraints**
- No photo of me anywhere (the reference's portrait slot is dropped).
- Nothing gets committed or pushed. Work stays local until I say otherwise.

---

## 1. Where the code lives

**Project folder:** `C:\Users\Owais\portfolio-next` (Next.js 16, TypeScript, plain CSS, no Tailwind)

```
portfolio-next/
├── app/
│   ├── layout.tsx        # fonts, metadata, pre-paint theme script
│   ├── page.tsx          # the whole single-page site (all sections)
│   └── globals.css       # all styles
├── components/
│   ├── Nav.tsx           # sticky top nav: section links, GitHub/LinkedIn icons, theme toggle
│   ├── Reveal.tsx        # scroll fade-in wrapper for sections
│   └── Year.tsx          # footer year
├── data/
│   ├── content.ts        # profile links, about facts, skills, shared types
│   └── experience.tsx    # jobs and projects
├── public/
│   └── resume.pdf
└── REDESIGN_PLAN.md      # this file
```

**Current state**
- `main` on GitHub (`BambooS99/myFinalPortfolio`) has the original version.
- The working copy has the uncommitted taste-skill redesign (Geist font, emerald accent, bento projects).
- That version is backed up as a patch at `C:\Users\Owais\portfolio-taste-version.patch`.
  To restore it later: `git checkout -- . && git apply ../portfolio-taste-version.patch`.

---

## 2. Reading the reference

| Reference element | How it maps to the portfolio |
|---|---|
| Top-left: name + tiny contact lines | `Owais Hassan`, then small lines: email, LinkedIn, GitHub, Resume (all links) |
| Top-right: stacked roles, right-aligned | `Software Engineer` / `Full Stack` / `Frontend` |
| Giant word "Resume" | Giant `Portfolio` (see open question 1) |
| Section heading, light weight (e.g. "Experience") | Same style for every section heading |
| Row: title, thin rule, date on the right | Jobs (dates), projects (project type), education (year) |
| One line of small text under each row | Job and project descriptions in small muted text |
| "Languages" block offset into the right half | **About** block, offset into the right half |
| "Skill Technical" plain-text columns, bottom-left | **Toolkit**: skill groups as plain-text columns, no pills |
| Portrait photo bottom-right | **Dropped** (no photo) |

---

## 3. Page structure (top to bottom)

All current sections stay, and the anchor IDs stay the same so the nav keeps working:
`#about`, `#experience`, `#projects`, `#skills`, `#contact`.

1. **Nav (sticky, restyled)**
   - Left: `Owais Hassan` in small type (scrolls to top).
   - Right: About, Experience, Projects, Skills, Contact as plain small text links.
   - Active section: underlined, no color change.
   - Thin hairline under the bar, white background. GitHub/LinkedIn icons and the theme toggle are removed (links move to the header, and the page goes light-only, see section 5).
   - On mobile: only the section links are hidden. The name stays.
2. **Header**: two columns.
   - Left: name (about 28px) + contact lines (about 12px).
   - Right: three stacked roles, right-aligned, same size as the name.
3. **Giant word**: `Portfolio`, scaled with the screen width (about 220px max), tight letter spacing.
4. **Experience**: one row per job: `Software Engineer, Toshiba Global Commerce Solutions` then a rule then `Mar 2026 - Present`.
   - Below each row: location, then the existing paragraphs in small muted text (max about 70 characters wide).
   - Tech stack as one plain comma-separated line (no pills).
5. **Selected work**: one row per project: title, rule, project type (`Client work` / `Personal project`).
   - Below each row: description, the stack line, and text links (`Live site ↗`, `GitHub ↗`).
6. **Education**: `B.S. Computer Science, UNC Pembroke`, rule, `2021`.
7. **Lower grid (two columns, staggered like the reference)**
   - Right column, sits higher: **About**: the three current paragraphs plus the facts (Currently / Focus).
   - Left column, sits lower: **Toolkit**: four groups (Frontend, Backend & Systems, Testing & Quality, AI-Driven Development) as plain-text lists in columns.
8. **Contact**: section heading, the existing one-line pitch, and text links: email, LinkedIn, GitHub, Resume.
9. **Footer**: tiny `© 2026 Owais Hassan`, left-aligned.

---

## 4. Content changes

**Rename the "Python Math Bot" card to "Math AI Data Parser"**
- Title: `Math AI Data Parser`
- Links: `Live site`: https://mathllm.netlify.app/ and `GitHub`: https://github.com/BambooS99/Math-AI-data-parser
  - The repo was renamed from `RAG-data-parser`; the old URL redirects.
- Description, updated to match the real app (from its README):
  > An AI math engine that never lets the model do the arithmetic. Claude classifies each
  > question into a structured schema, then deterministic solvers (SymPy and Python) compute
  > the answer, including step-by-step derivatives and integrals. React chat UI on a FastAPI backend.
- Stack: React, TypeScript, FastAPI, Claude API, SymPy

**Everything else is unchanged.** That covers all jobs, the other three projects and their links, the skills, the about copy, the facts, the resume PDF, and the email/LinkedIn/GitHub links.

---

## 5. Visual system

| Token | Value | Notes |
|---|---|---|
| Font | **Inter Tight** (`next/font/google`) | Closest free match to the reference's Helvetica-style grotesk. One family for the whole page. Drops Geist and the mono font. |
| Background | `#fcfcfc` | Off-white, not pure white |
| Text | `#111111` | Off-black |
| Muted text | `#6b6b6b` | Descriptions, contact lines (about 5:1 contrast) |
| Rules | `#cfcfcf`, 1px | The leader lines between titles and dates |
| Accent | **none** | Monochrome like the reference. Links are shown by underline only. |
| Weights | 400 for most text, 500 for the giant word and name | The reference is mostly regular weight |
| Theme | **Light only** | Print-style design; the dark mode and toggle are removed |
| Motion | Minimal | Drop the scroll fade-ins (static like a printed page). Keep hover underlines and smooth anchor scrolling. |
| Icons | Only the small `↗` on external links (Phosphor `ArrowUpRight`) | No other icons |

Type scale: giant word about 220px max; name, roles and section headings about 28px; row titles 15px; body 14px; contact lines and footer 12px.

---

## 6. Responsive behavior

- **Up to 1024px:** the lower grid's stagger collapses to normal stacking (About, then Toolkit).
- **Up to 768px:**
  - The header stacks: roles go below the name and become left-aligned.
  - Rows keep the title, rule and date, but the date wraps under the title if space runs out (the rule shrinks to at least 24px first).
  - Toolkit drops to 2 columns, then 1 column at 480px.
- Nav section links are hidden on mobile; the name stays.
- No sideways scrolling at any width. Side padding is 16px on phones and 48px on desktop.

---

## 7. Files to change

| File | Change |
|---|---|
| `app/page.tsx` | Rewrite markup to the new structure (header, giant word, rows, lower grid, contact) |
| `app/globals.css` | Replace with the new visual system and row/grid styles |
| `app/layout.tsx` | Switch to Inter Tight; remove the theme script and `suppressHydrationWarning` |
| `components/Nav.tsx` | Restyle: name left, text links right, underline for the active section; remove the icon buttons and theme toggle |
| `components/Reveal.tsx` | Delete (no scroll fade-ins) |
| `data/content.ts` | Add `roles` and `education`; remove the unused `photo` field |
| `data/experience.tsx` | Rename and update the Math AI Data Parser project and its links |

No new dependencies.

---

## 8. Verification

- `npx tsc --noEmit`, `npm run lint`, `npm run build` all pass.
- Run locally at http://localhost:3000 and check:
  - Every nav link scrolls to its section, and the active link underlines.
  - Every external link opens the right URL in a new tab. That includes mathllm.netlify.app, both GitHub repos, the photography site, LinkedIn, and the resume.
  - No sideways scroll at 375px, 768px, or 1280px.
  - Text contrast passes the standard readability level (WCAG AA).
  - No em-dashes in visible text.
- No commit, no push.

---

## 9. Open questions (defaults in bold)

1. Giant word: **`Portfolio`**, or your name, or something else?
2. Roles on the top right: **Software Engineer / Full Stack / Frontend**. Any changes?
3. Should the project cards show their screenshots (the Math AI app has `demo.png`)? **No by default**, to match the text-only reference.
4. Dark mode: **dropped** to match the print style. Keep it if you want it.
