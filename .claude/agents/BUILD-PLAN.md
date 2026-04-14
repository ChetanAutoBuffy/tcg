# TCG AI Agent Army — Claude Code Build Plan

## WHAT WE'RE BUILDING

A full freelance automation system for The Chadha Group (TCG). Three parts:

1. **TCG Website Upgrade** — Add services catalog, pricing packages, intake form, Calendly embed
2. **n8n Agent Workflows** — Auto-responder, lead tracker, follow-up nurture (runs on EC2)
3. **Cold Email Templates** — Ready-to-load sequences for Instantly.ai

---

## PART 1: TCG WEBSITE UPGRADE

### What exists now
- React + Vite + Tailwind SPA at `/`
- Components in `src/components/`: Services.jsx, Portfolio.jsx, Contact.jsx, About.jsx, Hero.jsx
- Deployed to EC2 Lightsail at thechadhagroup.com
- Contact form uses FormSubmit.co
- Dark theme, Inter font, blue/purple gradient accents

### What to build

#### 1A. New `src/components/Packages.jsx`
Three-tier pricing cards:

**STARTER — $1,500**
- Single landing page (responsive, mobile-first)
- Contact form integration
- SEO basics (meta tags, sitemap)
- Deployed & live on your domain
- 1 round of revisions
- Delivery: 1-3 business days
- CTA: "Get Started" → links to intake form

**BUSINESS — $3,500**
- Full 5-page website (Home, About, Services, Portfolio/Testimonials, Contact)
- Mobile responsive + SEO optimized
- Google Analytics setup
- CMS integration (if needed)
- 2 rounds of revisions
- Delivery: 3-7 business days
- CTA: "Get Started" → links to intake form

**PRO — $7,000**
- Everything in Business, plus:
- E-commerce OR booking system OR AI chatbot
- Custom features & integrations
- Performance optimization
- 3 rounds of revisions
- Delivery: 7-14 business days
- CTA: "Book a Call" → Calendly link

**Add-ons shown below packages:**
- Monthly Maintenance Retainer: $1,500-$3,000/mo
- AI Chatbot Setup: $2,000-$5,000
- Automation & Workflows: $1,000-$3,000
- Data Cleanup & Migration: $500-$2,000
- Hourly Consulting: $175/hr

#### 1B. New `src/components/ServicesCatalog.jsx`
Three categories with expandable cards:

**BUILD** — Websites, landing pages, web apps, mobile apps, APIs, e-commerce
**AUTOMATE** — AI chatbots, n8n/Zapier workflows, CRM integrations, email automation
**FIX** — Data cleanup, code audits, bug fixes, database migrations, performance optimization

Each card: icon, title, short description, price range, "Learn More" expands to show details.

#### 1C. New `src/components/IntakeForm.jsx`
Short intake form (THIS is what "Get Started" buttons link to):
- Name (required)
- Email (required)
- Which package? (dropdown: Starter / Business / Pro / Custom / Not sure)
- Current website URL (optional)
- Brief description of what you need (textarea, 2-3 sentences)
- Submit button: "Start My Project"

On submit: sends to FormSubmit.co (same as existing contact form) AND shows a success message: "Got it! We'll be in touch within 24 hours with next steps."

#### 1D. Update `src/components/Services.jsx`
Keep the existing Build/Consult/Train section but add a CTA below it that says "See Our Packages →" linking to the Packages section.

#### 1E. Update `src/App.jsx`
- Add route for `/packages` or add Packages as a section on the homepage
- Add ServicesCatalog as a section
- Add IntakeForm as a modal or separate route `/get-started`
- Add Calendly script embed (https://assets.calendly.com/assets/external/widget.js)

#### 1F. Navigation update
Add "Packages" and "Get Started" to the nav. "Get Started" should be a highlighted/accent button.

### Design rules (MANDATORY)
- Follow `.claude/ui-ux-quality-agent.md` for all frontend work
- Dark mode with `dark:` variants on everything
- Touch targets 44x44px minimum
- WCAG 2.2 contrast (4.5:1 text, 3:1 UI)
- Badge contrast per CLAUDE.md rules
- Mobile-first, test at 375px width
- Use existing Tailwind config colors (tcg-black, tcg-dark, tcg-blue)
- Animations: 200-300ms transitions

---

## PART 2: N8N AGENT WORKFLOWS

Create these as JSON workflow files that can be imported directly into n8n.

### 2A. `agents/responder-workflow.json`
**The Auto-Responder Agent**
```
Trigger: Gmail node watches for new emails (label: "Leads" or from specific senders)
→ IF email is a reply to a cold email OR from the TCG contact form
→ HTTP Request node: POST to Anthropic API (Claude Haiku)
  - System prompt: "You are the assistant for The Chadha Group, an AI-native software studio. Our services: [list packages and prices]. Our portfolio: AutoBuffy (AI auto parts marketplace), Buffy360 (e-commerce OS), Westar Auto. Founder: Chetan Chadha. Be professional, friendly, concise. If the lead mentions a specific project with budget, include this Calendly link: [CALENDLY_LINK]. If vague, ask 2-3 qualifying questions about their project scope, timeline, and budget."
  - User message: the email body
→ Gmail node: Create draft reply with Claude's response
→ Slack/Email notification to Chetan: "New lead reply drafted — check your Gmail drafts"
```

### 2B. `agents/lead-tracker-workflow.json`
**The Lead Tracker Agent**
```
Trigger: Webhook node (receives POST from TCG contact form / FormSubmit)
→ Parse the form data (name, email, service type, budget, message)
→ Google Sheets node: Append row to "TCG Lead Pipeline" sheet
  Columns: Date | Name | Email | Source | Service | Budget | Status | Notes
  Status default: "New"
→ IF budget contains "$5,000" or "Pro" or "enterprise" or "custom"
  → Gmail node: Send email with Calendly link (hot lead fast-track)
→ Slack notification: "New lead: [Name] — [Service] — [Budget]"
```

### 2C. `agents/followup-workflow.json`
**The Follow-Up Nurture Agent**
```
Trigger: Cron/Schedule node — runs daily at 9am ET
→ Google Sheets node: Read all rows where Status = "Contacted" AND last_contact_date is 3+ days ago
→ FOR EACH stale lead:
  → HTTP Request to Anthropic API (Claude Haiku)
    - System prompt: "Write a brief, friendly follow-up email. Reference our previous conversation. Keep it under 50 words. End with a soft CTA like 'Still interested?' or 'Want to hop on a quick call?'"
  → Gmail node: Create draft follow-up
→ Slack notification: "[X] follow-up drafts created"
```

### 2D. `agents/claude-persona-prompt.md`
The master prompt used by all agents when calling the Anthropic API:

```
You are the AI assistant for The Chadha Group (TCG), an AI-native software studio founded by Chetan Chadha.

## About TCG
- We build websites, web apps, AI agents, and automation systems
- We use AI-accelerated development to deliver in days, not months
- Portfolio: AutoBuffy (AI auto parts marketplace, 1M+ parts), Buffy360 (e-commerce OS, $10M+ GMV), Westar Auto (B2B/D2C distributor since 1986)

## Our Packages
- Starter ($1,500): Single landing page, responsive, SEO, deployed live. 1-3 day delivery.
- Business ($3,500): Full 5-page website, mobile responsive, SEO, analytics, CMS. 3-7 day delivery.
- Pro ($7,000): Full website + e-commerce/booking/AI chatbot, custom features. 7-14 day delivery.
- Retainer ($1,500-$3,000/mo): Ongoing maintenance, updates, performance monitoring.
- AI Chatbot: $2,000-$5,000
- Automation/Workflows: $1,000-$3,000
- Data Cleanup: $500-$2,000
- Consulting: $175/hr

## How to Respond
- Be professional, friendly, and concise
- Never make up capabilities we don't have
- For leads with clear project scope + budget: include Calendly link [CALENDLY_LINK]
- For vague inquiries: ask about project scope, timeline, and budget
- Always mention our fast delivery times as a differentiator
- Sign off as "The TCG Team"
```

---

## PART 3: COLD EMAIL TEMPLATES

### 3A. `agents/cold-email-sequences.md`
Ready to paste into Instantly.ai:

**Sequence 1: Bad Website Outreach**

Email 1 (Day 1):
Subject: Quick question about {{company_name}}'s website
Body: Hi {{first_name}}, I was looking at {{company_website}} and noticed [it's not mobile-optimized / loads slowly / has an outdated design]. We just rebuilt a similar site for a [industry] business and they saw a 40% increase in leads within the first month. We use AI-accelerated development so we deliver in days, not months — and at a fraction of what traditional agencies charge. Worth a 15-min chat? [CALENDLY_LINK] — Chetan, The Chadha Group

Email 2 (Day 4):
Subject: Re: Quick question about {{company_name}}'s website
Body: Hi {{first_name}}, just following up. I put together a quick audit of {{company_website}} — happy to share it on a brief call. No commitment, just wanted to show you what we found. [CALENDLY_LINK]

Email 3 (Day 8):
Subject: Last one from me
Body: Hi {{first_name}}, I know you're busy so I'll keep this short. If your website isn't a priority right now, no worries at all. But if you ever want a free audit or a quick refresh, we're here. Our packages start at $1,500 for a full landing page delivered in 1-3 days. Just reply "interested" and I'll send over the details. — Chetan

**Sequence 2: AI/Automation Outreach**

Email 1 (Day 1):
Subject: Saving {{company_name}} 10+ hours/week
Body: Hi {{first_name}}, I help businesses like {{company_name}} automate repetitive tasks — things like lead follow-ups, data entry, customer support, and scheduling. One of our clients cut their manual work by 15 hours/week with a simple AI workflow we built in 3 days. If that sounds interesting, I'd love to show you what's possible for {{company_name}}. [CALENDLY_LINK] — Chetan, The Chadha Group

Email 2 (Day 4):
Subject: Re: Saving {{company_name}} 10+ hours/week
Body: Hi {{first_name}}, quick follow-up. Curious — what's the most tedious, repetitive task at {{company_name}} right now? We might be able to automate it in a day. Happy to do a free 15-min assessment. [CALENDLY_LINK]

Email 3 (Day 8):
Subject: Free automation audit for {{company_name}}
Body: Hi {{first_name}}, last note from me. I'd love to do a free 15-minute automation audit for {{company_name}} — no strings attached. Worst case, you get some ideas. Best case, we save you a ton of time. Just reply "yes" and I'll send a calendar link. — Chetan

---

## WHAT CHETAN NEEDS TO PROVIDE

After Claude Code builds all of this, Chetan needs to:

1. **Calendly link** — Create account at calendly.com, set up "15-min Discovery Call" event, paste the link into the code where it says [CALENDLY_LINK]
2. **Instantly.ai account** — Sign up, connect sending domains, paste the cold email sequences from Part 3
3. **3 secondary domains** — Buy from Namecheap (tcg-dev.com, chadhagroup.co, tcg-studio.com or similar), set up email accounts
4. **Wave account** — Sign up at waveapps.com, set up TCG company profile for invoicing
5. **Apollo.io account** — Sign up (free tier), build first lead list targeting local businesses
6. **n8n on EC2** — SSH into Lightsail instance, install Docker + n8n, import the workflow JSON files from Part 2
7. **Anthropic API key** — Get from console.anthropic.com, add to n8n HTTP Request nodes
8. **Google Sheet** — Create "TCG Lead Pipeline" with columns: Date | Name | Email | Source | Service | Budget | Status | Notes

---

## BUILD ORDER FOR CLAUDE CODE

1. Read `.claude/ui-ux-quality-agent.md` first (mandatory)
2. Build `Packages.jsx` component
3. Build `ServicesCatalog.jsx` component  
4. Build `IntakeForm.jsx` component
5. Update `Services.jsx` with CTA to packages
6. Update `App.jsx` with new routes/sections and navigation
7. Create `agents/` directory with all workflow files and templates
8. Run `npm run build` and verify no errors
9. Output the UI/UX Quality Scan checklist
10. Tell Chetan what he needs to do next (the list above)
