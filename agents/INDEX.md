# TCG AI Agents - Directory Index

Welcome to the TCG AI Agents directory. This folder contains everything you need to set up an automated lead management system powered by Claude AI.

---

## Start Here

**New to this project?** Start with these files in order:

1. **SUMMARY.md** - Overview of what you got and what it does (5 min read)
2. **QUICKSTART.md** - 30-minute setup guide to get everything running (30 min)
3. **README.md** - Detailed documentation for reference (as needed)

---

## Directory Structure

```
/Users/chetanchadha/tcg-landing/agents/
│
├── INDEX.md                          ← You are here
├── SUMMARY.md                        ← Project overview & quick reference
├── QUICKSTART.md                     ← 30-minute setup guide
├── README.md                         ← Complete documentation
├── ARCHITECTURE.md                   ← System diagrams & technical details
│
├── responder-workflow.json           ← n8n workflow: Auto-reply to leads
├── lead-tracker-workflow.json        ← n8n workflow: Log & route leads
├── followup-workflow.json            ← n8n workflow: Nurture cold leads
│
├── claude-persona-prompt.md          ← Master AI prompt template
└── cold-email-sequences.md           ← (Bonus) Cold outreach templates
```

---

## File Guide

### Documentation Files

| File | Purpose | Read This When... |
|------|---------|-------------------|
| **SUMMARY.md** | High-level overview, ROI, key features | You want to understand what you got |
| **QUICKSTART.md** | Step-by-step setup instructions | You're ready to set up the agents |
| **README.md** | Complete technical documentation | You need detailed info on configuration |
| **ARCHITECTURE.md** | System design, data flow, diagrams | You want to understand how it works |
| **INDEX.md** | This file - directory navigation | You're new and need orientation |

### Workflow Files (Import into n8n)

| File | What It Does | Trigger |
|------|--------------|---------|
| **responder-workflow.json** | Auto-drafts replies to lead emails using Claude AI | Gmail label "Leads" (every 1 min) |
| **lead-tracker-workflow.json** | Captures form submissions, logs to Sheet, emails hot leads | Webhook POST |
| **followup-workflow.json** | Re-engages stale leads with AI-generated follow-ups | Daily at 9am ET |

### Reference Files

| File | Purpose |
|------|---------|
| **claude-persona-prompt.md** | Master prompt with TCG services, pricing, portfolio, response guidelines |
| **cold-email-sequences.md** | (Bonus) Cold email templates for outbound campaigns |

---

## Quick Reference

### What Each Agent Does

1. **Auto-Responder** → Drafts replies to incoming lead emails
2. **Lead Tracker** → Logs form submissions, fast-tracks hot leads
3. **Follow-Up Nurture** → Re-engages cold leads after 3 days

### Tech Stack

- n8n (workflow automation)
- Claude 3.5 Haiku (AI text generation)
- Gmail API (email)
- Google Sheets API (database)
- Slack API (notifications)

### Cost

- ~$0.12/month for 100 leads (Anthropic API)
- +$20/month if using n8n Cloud (free if self-hosted)

---

## Setup Checklist

- [ ] Read SUMMARY.md (understand the system)
- [ ] Follow QUICKSTART.md (set up workflows)
- [ ] Import 3 JSON files into n8n
- [ ] Configure credentials (Gmail, Anthropic, Sheets, Slack)
- [ ] Create Google Sheet "TCG Lead Pipeline"
- [ ] Update Calendly link in workflows
- [ ] Test each workflow manually
- [ ] Activate all workflows
- [ ] Connect contact form to webhook

---

## Getting Help

| Question | Where to Look |
|----------|---------------|
| How do I set this up? | `QUICKSTART.md` |
| How does it work? | `ARCHITECTURE.md` |
| How do I configure X? | `README.md` |
| What's the AI prompt? | `claude-persona-prompt.md` |
| Workflow not working? | `README.md` → Troubleshooting |
| What's my ROI? | `SUMMARY.md` → ROI Calculation |

---

## File Sizes

| File | Size |
|------|------|
| ARCHITECTURE.md | 16 KB |
| SUMMARY.md | 8.3 KB |
| README.md | 9.9 KB |
| QUICKSTART.md | 7.9 KB |
| claude-persona-prompt.md | 9.5 KB |
| cold-email-sequences.md | 9.6 KB |
| lead-tracker-workflow.json | 11 KB |
| followup-workflow.json | 9.8 KB |
| responder-workflow.json | 7.8 KB |
| **Total** | **~90 KB** |

---

## Version Info

- **Version:** 1.0
- **Last Updated:** April 13, 2026
- **Maintained by:** Chetan Chadha (TCG Founder)
- **Built for:** The Chadha Group (TCG)

---

## Next Steps

**Never set up an AI agent before?**
1. Read `SUMMARY.md` (5 min)
2. Follow `QUICKSTART.md` (30 min)
3. You're done!

**Already familiar with n8n?**
1. Import 3 JSON files
2. Add credentials
3. Update Google Sheet ID
4. Activate workflows
5. Done in 15 minutes!

**Want to understand the architecture first?**
1. Read `ARCHITECTURE.md`
2. Review workflow JSON files
3. Check `claude-persona-prompt.md`
4. Then set up via `QUICKSTART.md`

---

**Ready to get started?** Open `SUMMARY.md` or `QUICKSTART.md` next!
