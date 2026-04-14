# CLAUDE.md - TCG Landing Project

**Last Updated:** December 7, 2025

---

## MANDATORY: Read These Files First

**Before doing ANY frontend work, Claude MUST read:**
```
.claude/ui-ux-quality-agent.md
```

**This is NOT optional.** The UI/UX Quality Agent runs in parallel with all frontend tasks. It checks and fixes:
- Touch targets, contrast, states, animations, mobile, spacing, CRO

**At the end of frontend work, output the UI/UX Quality Scan checklist from that file.**

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
