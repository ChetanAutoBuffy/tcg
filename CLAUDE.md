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

> Add notes here during conversations to remember context.

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
