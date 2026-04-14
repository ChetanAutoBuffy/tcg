# TCG AI Agents - System Architecture

Visual overview of the three-agent system and how they work together.

---

## System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                     TCG AI AGENT ECOSYSTEM                       │
│                                                                   │
│  ┌─────────────┐      ┌─────────────┐      ┌──────────────┐    │
│  │  RESPONDER  │      │   TRACKER   │      │  FOLLOW-UP   │    │
│  │    AGENT    │      │    AGENT    │      │    AGENT     │    │
│  └─────────────┘      └─────────────┘      └──────────────┘    │
│        ↓                     ↓                     ↓             │
│   Auto-reply to         Log & route          Nurture cold       │
│   lead emails          hot leads             leads daily        │
└─────────────────────────────────────────────────────────────────┘
                              ↓
                    ┌──────────────────┐
                    │  Claude 3.5 Haiku │
                    │  (Anthropic API)  │
                    └──────────────────┘
                              ↓
                    ┌──────────────────┐
                    │  Google Sheets    │
                    │  Lead Pipeline    │
                    └──────────────────┘
```

---

## Agent 1: Auto-Responder

**Purpose:** Automatically draft replies to incoming lead emails using AI.

### Flow Diagram

```
┌──────────────┐
│ Gmail Inbox  │
│ (Label:Leads)│
└──────┬───────┘
       │ Every 1 min (poll)
       ↓
┌──────────────────┐
│ New email found? │
└──────┬───────────┘
       │ Yes
       ↓
┌─────────────────────────┐
│ Is it a reply OR from   │  ← Check subject starts with "Re:"
│ contact form?           │     or from FormSubmit/TCG domain
└──────┬──────────────────┘
       │ Yes
       ↓
┌─────────────────────────┐
│ Call Anthropic API      │  ← Claude 3.5 Haiku generates
│ (Claude Haiku)          │     professional response
└──────┬──────────────────┘
       │
       ↓
┌─────────────────────────┐
│ Create Gmail Draft      │  ← Draft saved to Gmail
└──────┬──────────────────┘
       │
       ↓
┌─────────────────────────┐
│ Send Slack Notification │  ← Notify Chetan
└─────────────────────────┘
```

### Key Features

- ✅ Drafts replies (doesn't auto-send)
- ✅ Uses lead's original message as context
- ✅ References TCG services and pricing
- ✅ Includes Calendly booking link
- ✅ Professional tone with personality

### Configuration

| Setting | Value |
|---------|-------|
| Trigger | Gmail label "Leads" |
| Poll Interval | 1 minute |
| AI Model | Claude 3.5 Haiku |
| Max Tokens | 1024 |
| Output | Gmail draft |

---

## Agent 2: Lead Tracker

**Purpose:** Capture leads from contact form, log to sheet, auto-email hot leads.

### Flow Diagram

```
┌──────────────────┐
│ Contact Form     │
│ (Website)        │
└──────┬───────────┘
       │ POST webhook
       ↓
┌──────────────────────┐
│ n8n Webhook Endpoint │
└──────┬───────────────┘
       │ Parse form data
       ↓
┌─────────────────────────────────────┐
│ Google Sheets - Append Lead Row     │
│                                      │
│ Date | Name | Email | Service | ... │
└──────┬──────────────────────────────┘
       │
       ↓
┌─────────────────────────┐
│ Is Hot Lead?            │  ← Budget includes $5K, Pro,
│ (Filter Logic)          │     Enterprise, or Custom
└──────┬──────────────────┘
       │
       ├─── Yes ──────────────────┐
       │                           ↓
       │                   ┌──────────────────┐
       │                   │ Send Gmail       │
       │                   │ (with Calendly)  │
       │                   └────────┬─────────┘
       │                            │
       │                            ↓
       │                   ┌──────────────────┐
       │                   │ Slack: Hot Lead! │
       │                   └────────┬─────────┘
       │                            │
       ├─── No ────────────┐        │
       │                   ↓        │
       │          ┌──────────────┐  │
       │          │ Slack: Lead  │  │
       │          └──────┬───────┘  │
       │                 │          │
       └─────────────────┴──────────┘
                         │
                         ↓
               ┌──────────────────┐
               │ Webhook Response │
               │ (200 OK)         │
               └──────────────────┘
```

### Hot Lead Criteria

A lead is "hot" if **any** of these conditions are true:

- Budget field contains: `$5,000`, `$7,000`, `$10,000`
- Budget field contains: `Pro`, `Enterprise`, `Custom`
- Service Type contains: `Pro`, `Enterprise`

### Lead Sheet Structure

| Column | Description | Example |
|--------|-------------|---------|
| Date | Timestamp of submission | 2026-04-13 14:32:00 |
| Name | Lead's full name | John Smith |
| Email | Contact email | john@example.com |
| Source | Where lead came from | Contact Form |
| Service | Service requested | Build |
| Budget | Budget mentioned | $5,000 - $10,000 |
| Status | Lead status | New / Contacted / Closed |
| Notes | Message content | "Need AI agent for CRM" |

---

## Agent 3: Follow-Up Nurture

**Purpose:** Re-engage leads who haven't responded in 3+ days with personalized follow-ups.

### Flow Diagram

```
┌──────────────────┐
│ Cron Schedule    │
│ Daily @ 9am ET   │
└──────┬───────────┘
       │
       ↓
┌─────────────────────────────┐
│ Google Sheets - Read All    │
│ WHERE Status = "Contacted"  │
└──────┬──────────────────────┘
       │
       ↓
┌─────────────────────────────┐
│ JavaScript Code Node        │
│ Filter: last_contact_date   │ ← Only keep leads with
│         >= 3 days ago       │     Date 3+ days old
└──────┬──────────────────────┘
       │
       ↓
┌─────────────────────────┐
│ Any stale leads found?  │
└──────┬──────────────────┘
       │ Yes (loop through each)
       ↓
┌───────────────────────────────┐
│ FOR EACH stale lead:          │
│                                │
│  ┌─────────────────────────┐  │
│  │ Call Anthropic API      │  │ ← Claude generates custom
│  │ (Claude Haiku)          │  │     follow-up based on
│  └──────┬──────────────────┘  │     original inquiry
│         │                      │
│         ↓                      │
│  ┌─────────────────────────┐  │
│  │ Create Gmail Draft      │  │ ← Save draft for review
│  └──────┬──────────────────┘  │
│         │                      │
│         ↓ (next lead)          │
└─────────┬──────────────────────┘
          │
          ↓ (all done)
┌──────────────────────────┐
│ Slack: Summary           │  ← "5 follow-up drafts created"
└──────────────────────────┘
```

### Follow-Up Logic

**Conditions to trigger follow-up:**

1. Lead status = "Contacted" (already reached out once)
2. Last contact date ≥ 3 days ago
3. Status ≠ "Closed" or "Won"

**Email Style:**

- Short and friendly (2-3 paragraphs)
- Acknowledges they may be busy
- Provides additional value or insight
- Gentle reminder of TCG's offer
- Soft CTA (reply or book call)
- No pressure or sales-y language

**Example Follow-Up:**

```
Hi John,

I wanted to follow up on my last email about building your AI-powered CRM
integration. I know things get busy!

I recently worked on a similar project for a client using Claude API + n8n
automation—it cut their manual data entry by 80%. Happy to share more about
the approach if you're still exploring options.

No pressure at all—just wanted to make sure this didn't get lost in your inbox.
If now's not the right time, totally understand!

If you'd like to chat, here's my calendar: [Calendly Link]

Best,
Chetan
```

---

## Data Flow

```
┌───────────────┐
│ Lead Source   │
│ (Form, Email) │
└───────┬───────┘
        │
        ↓
┌────────────────────────┐
│ Webhook / Gmail Trigger│
└────────┬───────────────┘
         │
         ↓
┌─────────────────────┐
│ Google Sheet        │ ← Central lead database
│ (TCG Lead Pipeline) │
└────────┬────────────┘
         │
         ├──→ Auto-Responder Agent
         │    (reads email, generates reply)
         │
         ├──→ Lead Tracker Agent
         │    (logs lead, routes hot leads)
         │
         └──→ Follow-Up Agent
              (re-engages stale leads)
```

---

## Integration Points

### 1. Contact Form → Lead Tracker

**Method:** Webhook POST
**Endpoint:** `https://n8n-instance.com/webhook/tcg-lead-submission`

**Payload:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "service": "Build",
  "budget": "$3,500 - $7,000",
  "message": "I need an AI chatbot for my e-commerce site"
}
```

### 2. Gmail → Auto-Responder

**Method:** Gmail API (OAuth2)
**Trigger:** New email with label "Leads"
**Polling:** Every 60 seconds

### 3. n8n → Anthropic API

**Method:** HTTP POST
**Endpoint:** `https://api.anthropic.com/v1/messages`
**Headers:**
```
x-api-key: YOUR_API_KEY
anthropic-version: 2023-06-01
content-type: application/json
```

**Body:**
```json
{
  "model": "claude-3-5-haiku-20241022",
  "max_tokens": 1024,
  "system": "You are an AI assistant for TCG...",
  "messages": [
    {
      "role": "user",
      "content": "Email from lead: ..."
    }
  ]
}
```

### 4. n8n → Google Sheets

**Method:** Google Sheets API (OAuth2)
**Operations:**
- **Append:** Add new lead row
- **Read:** Get leads with specific status
- **Update:** Change lead status

### 5. n8n → Slack

**Method:** Slack Web API
**Operation:** Post message to channel
**Channel:** `#leads` (C01234567)

---

## Security & Privacy

### API Key Management

- ✅ All API keys stored in n8n Credentials Manager
- ✅ Never committed to Git or shared in plain text
- ✅ OAuth2 used for Google/Gmail (more secure than API keys)
- ✅ Webhook endpoints can be protected with auth headers

### Data Storage

- ✅ Leads stored in Google Sheets (encrypted at rest)
- ✅ Email drafts stored in Gmail (Google's security)
- ✅ No PII stored in n8n logs
- ✅ Slack notifications sanitized (no full email content)

### Access Control

- ✅ n8n workflows only accessible to authorized users
- ✅ Google Sheet shared only with team members
- ✅ Slack bot limited to #leads channel
- ✅ Gmail OAuth2 scopes limited to drafts/send only

---

## Performance & Costs

### API Usage (100 leads/month)

| Service | Usage | Cost |
|---------|-------|------|
| Anthropic (Haiku) | ~30K tokens | $0.12/mo |
| Gmail API | ~500 requests | Free |
| Google Sheets API | ~300 requests | Free |
| Slack API | ~200 messages | Free |
| **Total** | | **~$0.12/mo** |

### Response Times

| Agent | Avg Time | Notes |
|-------|----------|-------|
| Auto-Responder | 2-5 seconds | Depends on email length |
| Lead Tracker | <1 second | Webhook → Sheet |
| Follow-Up | 3-7 seconds per lead | Claude API + draft creation |

### Scalability

- ✅ Handles 100+ leads/month easily
- ✅ Can scale to 1,000+ with minimal changes
- ✅ Gmail API quota: 10,000 requests/day
- ✅ Anthropic API: Rate limited by tier (Haiku is fast)

---

## Monitoring & Alerts

### n8n Built-In Monitoring

- **Execution History:** View all workflow runs
- **Error Logs:** See failed executions
- **Manual Retry:** Re-run failed workflows
- **Webhook Testing:** Test endpoints manually

### Custom Alerts

Set up alerts for:

- ❌ Workflow execution failure
- 🔥 Hot lead detected (Slack notification)
- 📬 Daily follow-up summary (Slack notification)
- ⚠️ API rate limit approaching
- 📊 Weekly lead count summary

---

## Maintenance Schedule

### Daily
- Review Gmail drafts before sending
- Check Slack #leads for hot leads
- Monitor n8n execution logs

### Weekly
- Archive old leads (move to "Completed" sheet)
- Update hot lead criteria based on conversions
- Review AI-generated emails for quality

### Monthly
- Update Claude system prompts with new services/pricing
- Review API costs and usage
- Optimize workflows based on metrics
- Backup Google Sheet data

---

## Disaster Recovery

### Backup Strategy

1. **Google Sheet:** Auto-backed up by Google Drive
2. **n8n Workflows:** Export JSON files monthly
3. **Email Drafts:** Stored in Gmail (redundant)
4. **Credentials:** Store in password manager (1Password, Bitwarden)

### Recovery Steps

If workflows break:

1. Check n8n execution logs
2. Test credentials (re-authenticate if needed)
3. Verify API endpoints (Anthropic, Gmail, Sheets)
4. Re-import workflow JSON from backup
5. Re-test with manual execution

---

## Future Enhancements

### Phase 2 (Q2 2026)
- [ ] Lead scoring algorithm (ML-based)
- [ ] SMS notifications via Twilio
- [ ] Voice agent for inbound calls
- [ ] CRM integration (HubSpot, Pipedrive)

### Phase 3 (Q3 2026)
- [ ] Automated proposal generation
- [ ] Contract e-signature workflow
- [ ] Invoice automation
- [ ] Client onboarding sequence

### Phase 4 (Q4 2026)
- [ ] Multi-language support (Spanish, French)
- [ ] Advanced analytics dashboard
- [ ] A/B testing for email templates
- [ ] Predictive lead conversion modeling

---

**Last Updated:** April 13, 2026
**Maintained by:** Chetan Chadha, TCG Founder
**Version:** 1.0
