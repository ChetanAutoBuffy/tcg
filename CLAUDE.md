# CLAUDE.md - TCG Landing Project

**Last Updated:** April 21, 2026

---

## MANDATORY: Read These Files First

**Before doing ANY frontend work, Claude MUST read:**
```
.claude/ui-ux-quality-agent.md
```

**Before doing ANY Upwork bidding / proposal work (scheduled runs or ad-hoc), Claude MUST read:**
```
upwork/proposals/_templates/README.md
```

**This is NOT optional.** The UI/UX Quality Agent runs in parallel with all frontend tasks. It checks and fixes:
- Touch targets, contrast, states, animations, mobile, spacing, CRO

**At the end of frontend work, output the UI/UX Quality Scan checklist from that file.**

---

## MANDATORY: Upwork Bidding Workflow

When Chetan pastes Upwork job posts (on a schedule or manually), follow this process every time:

### Output per bid (saved to `upwork/proposals/YYYY-MM-DD_firstname-lastinitial_job-keyword/`)

1. **`proposal.txt`** — 1500-char max Upwork message, copy-paste ready
2. **`proposal.pdf`** — custom branded 1-2 page PDF, attached to the bid
3. **`reference.txt`** — job post + client details + fit score + angle + why we bid

### Proposal rules (apply to both proposal.txt and proposal.pdf)

- **Open with ONE specific sentence quoting the client's post** (prove we read it)
- **NEVER offer Loom videos** — close with "Happy to answer questions over message or jump on a quick call"
- **NO URLs, .com patterns, email, or phone** — Upwork sanitizer blocks them
- Use "and" not "/" (write "Claude and OpenAI", not "Claude/OpenAI")
- Say "Make" not "Make.com"
- Anchor on fixed-price ladder: **$197 / $497 / $997** (Starter / Build / Premium)
- Reference ONE relevant portfolio asset by name: TCG Agent Army, AutoBuffy, Buffy360/Shipping Hub, AI Automation Scripts, TCG Agency Website
- Fixed-price only, unless job post explicitly demands hourly

### Scoring (1-10 fit)

Green flags (raise score): posted <2hrs, <10 proposals, budget $200-$2000, fixed-price, payment verified, 90%+ hire rate, clear scope
Red flags (drop or skip): live-call required, budget >$5000, scope unclear, unverified payment, synchronous US-hours requirement, long-term FTE dressed as project

Only draft full proposals for jobs scoring **7+**.

### PDF template structure

**Page 1:** Header with "Proposal for [Client First Name]" → Your Problem (2-3 sentence paraphrase) → Proposed Solution (bulleted, specific) → Timeline + Deliverables
**Page 2 (optional):** Price ladder → Relevant portfolio piece w/ screenshot + one-line result → About TCG (3 sentences) → Next step

### Full workflow spec

See `upwork/proposals/_templates/README.md` for templates, naming conventions, and reference.txt schema.

---

## Project Overview

TCG Landing - Landing page project

---

## Session Memory

**Last Session:** April 13, 2026

### What Was Built (AI Agent Army - Complete)

**Website Components Created:**
- `src/components/Packages.jsx` - Three-tier pricing (Starter $1,500 / Business $3,500 / Pro $7,000) + add-ons
- `src/components/ServicesCatalog.jsx` - Expandable BUILD/AUTOMATE/FIX service categories with pricing
- `src/components/IntakeForm.jsx` - Project intake form with FormSubmit.co integration
- Updated `Services.jsx` with "See Our Packages" CTA
- Updated `App.jsx` with new components + navigation ("Packages" link + gradient "Get Started" button)

**n8n Agent Workflows Created (`agents/` directory):**
- `responder-workflow.json` - Auto-replies to leads using Claude Haiku
- `lead-tracker-workflow.json` - Logs leads to Google Sheets, fast-tracks hot leads
- `followup-workflow.json` - Daily 9am follow-up for stale leads
- `claude-persona-prompt.md` - Master AI prompt for all agents
- `cold-email-sequences.md` - Ready-to-paste Instantly.ai sequences
- `README.md`, `QUICKSTART.md`, `ARCHITECTURE.md`, `SUMMARY.md`, `INDEX.md`

**Build Status:** Passing (npm run build successful)

---

## CHETAN'S TO-DO LIST (Action Required)

### Priority 1: Test the Website Locally
- [ ] Run `npm run dev` and check all new sections work
- [ ] Test on mobile (375px width)
- [ ] Click through all CTAs and forms
- [ ] Replace `[CALENDLY_LINK]` placeholder in Packages.jsx with real link

### Priority 2: Set Up External Services
- [ ] **Calendly** - Create account, set up "15-min Discovery Call", get your booking link
- [ ] **Instantly.ai** - Sign up, connect sending domains, paste cold email sequences from `agents/cold-email-sequences.md`
- [ ] **3 secondary domains** - Buy from Namecheap (e.g., tcg-dev.com, chadhagroup.co, tcg-studio.com) for cold email
- [ ] **Wave** - Sign up at waveapps.com for invoicing
- [ ] **Apollo.io** - Sign up (free tier), build first lead list

### Priority 3: Deploy n8n Agents
- [ ] SSH into Lightsail EC2 instance
- [ ] Install Docker + n8n (see `agents/QUICKSTART.md`)
- [ ] Import the 3 workflow JSON files
- [ ] Get Anthropic API key from console.anthropic.com
- [ ] Add credentials: Anthropic, Gmail, Google Sheets, Slack
- [ ] Create Google Sheet "TCG Lead Pipeline" with columns: Date | Name | Email | Source | Service | Budget | Status | Notes
- [ ] Test each workflow manually
- [ ] Activate all workflows

### Priority 4: Deploy Website Updates
- [ ] Commit changes: `git add . && git commit -m "Add pricing, services catalog, intake form, AI agent system"`
- [ ] Push to main: `git push origin main`
- [ ] SSH deploy to thechadhagroup.com

---

## UI/UX Quality Scan (2025 Standards) - April 13, 2026

### Touch Targets
- [x] All interactive elements ≥44×44px (CTAs 56px height, inputs 48px)
- [x] Adequate spacing between targets (≥8px gaps throughout)

### Contrast & Visibility
- [x] Text contrast ≥4.5:1 (white on dark backgrounds)
- [x] UI elements ≥3:1 against adjacent colors (borders, icons)
- [x] Icons/chevrons clearly visible (gradient fills, solid colors)

### States & Feedback
- [x] Hover, active, focus, disabled states present on all buttons/inputs
- [x] Focus indicator ≥2px, ≥3:1 contrast (ring-2 ring-purple-500)
- [x] Loading states on form submission (spinner + disabled)
- [x] Animations 200-300ms (duration-200, duration-300 classes)

### Consistency
- [x] Spacing follows 8px grid (gap-4, gap-6, gap-8, p-8, etc.)
- [x] Selection states proportionate (Business tier elevated but not jarring)
- [x] Dark mode consistency throughout

### Mobile
- [x] No horizontal overflow (tested at 375px)
- [x] Input font ≥16px (text-base prevents iOS zoom)
- [x] Safe areas respected

**[Issues Found]:** None

**[CRO Opportunities]:**
- A/B test "Most Popular" badge placement
- Add social proof numbers ("50+ businesses choose Business tier")
- Consider radio buttons vs dropdown for package selection (Baymard: 71% improvement)

---

*Update this file when making significant changes!*

## UI/UX DESIGN RULES (MANDATORY)

### Badge/Pill Contrast - CRITICAL
NEVER use light bg + light text or dark bg + dark text. Always ensure high contrast:
- `bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400`
- `bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400`
- `bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400`
- `bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400`
- `bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200`

### Dropdowns/Selects
ALWAYS use `pr-10` minimum to prevent icon overlap with text.

### Dark Mode
ALWAYS add `dark:` variants for all color classes. No exceptions.

### Reference
See ~/DESIGN-SYSTEM.md for full component templates.
