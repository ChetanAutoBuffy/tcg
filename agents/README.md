# TCG AI Agents - n8n Workflow Documentation

This directory contains the n8n workflow files for TCG's automated lead management and customer communication agents.

## Overview

The TCG AI Agent system consists of three automated workflows that work together to:

1. **Auto-respond** to lead inquiries using Claude AI
2. **Track and categorize** leads in Google Sheets
3. **Nurture** cold leads with automated follow-ups

All agents use **Claude 3.5 Haiku** via the Anthropic API for intelligent, context-aware responses.

---

## Files in This Directory

| File | Description |
|------|-------------|
| `claude-persona-prompt.md` | Master prompt containing TCG's services, pricing, portfolio, and response guidelines |
| `responder-workflow.json` | Auto-responder that drafts replies to lead emails |
| `lead-tracker-workflow.json` | Lead intake system that logs leads and sends hot lead emails |
| `followup-workflow.json` | Daily nurture agent that follows up with stale leads |

---

## Setup Instructions

### Prerequisites

1. **n8n Instance** - Self-hosted or cloud (n8n.io)
2. **Anthropic API Key** - Get from [console.anthropic.com](https://console.anthropic.com)
3. **Google Account** - For Gmail and Google Sheets integration
4. **Slack Workspace** - For notifications (optional but recommended)

### Step 1: Import Workflows into n8n

1. Open your n8n instance
2. Go to **Workflows** > **Import from File**
3. Import each JSON file:
   - `responder-workflow.json`
   - `lead-tracker-workflow.json`
   - `followup-workflow.json`

### Step 2: Configure Credentials

Each workflow requires the following credentials:

#### Gmail OAuth2
- **Node Type:** Gmail, Gmail Trigger
- **Authentication:** OAuth2
- **Setup:** Follow n8n's Gmail OAuth2 connection guide
- **Permissions Required:**
  - Read emails
  - Create drafts
  - Send emails

#### Anthropic API Key
- **Node Type:** HTTP Request
- **Authentication:** Header Auth
- **Header Name:** `x-api-key`
- **Header Value:** Your Anthropic API key (get from [console.anthropic.com](https://console.anthropic.com))
- **Model Used:** `claude-3-5-haiku-20241022`

#### Google Sheets OAuth2
- **Node Type:** Google Sheets
- **Authentication:** OAuth2
- **Setup:** Follow n8n's Google Sheets OAuth2 guide
- **Permissions Required:**
  - Read spreadsheets
  - Write to spreadsheets

#### Slack API (Optional)
- **Node Type:** Slack
- **Authentication:** Access Token or OAuth2
- **Setup:** Create a Slack App with bot permissions
- **Permissions Required:**
  - `chat:write`
  - `channels:read`

### Step 3: Create Google Sheet for Lead Tracking

1. Create a new Google Sheet named **"TCG Lead Pipeline"**
2. Add the following columns in **Row 1**:
   - `Date`
   - `Name`
   - `Email`
   - `Source`
   - `Service`
   - `Budget`
   - `Status`
   - `Notes`

3. Copy the Google Sheet ID from the URL:
   ```
   https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit
   ```

4. Update the `documentId` in:
   - `lead-tracker-workflow.json` (Google Sheets - Append Lead node)
   - `followup-workflow.json` (Google Sheets - Read Contacted Leads node)

### Step 4: Configure Gmail Labels

For the **Auto-Responder** workflow:

1. In Gmail, create a label called **"Leads"**
2. Apply this label to all lead-related emails (or set up a filter)
3. The workflow will watch for new emails with this label

### Step 5: Set Up Slack Channel (Optional)

1. Create a Slack channel called **#leads**
2. Copy the channel ID (right-click channel > View channel details)
3. Update the `channelId` in all Slack notification nodes

### Step 6: Update Calendly Link

Replace `[CALENDLY_LINK]` in the following locations:

1. **claude-persona-prompt.md** (if you want to update the master prompt)
2. **lead-tracker-workflow.json** (Gmail - Send Hot Lead Email node)
3. **Anthropic API system prompts** in all workflows

**Your Calendly link format:**
```
https://calendly.com/your-username/15min
```

### Step 7: Activate Workflows

1. Open each workflow in n8n
2. Click **"Activate"** toggle in the top right
3. Test each workflow:
   - **Responder:** Send a test email to your Gmail with "Leads" label
   - **Lead Tracker:** Submit a test form via webhook
   - **Follow-Up:** Run manually or wait for scheduled execution

---

## Workflow Details

### 1. Auto-Responder Agent (`responder-workflow.json`)

**Trigger:** Gmail - New email with "Leads" label

**What It Does:**
1. Watches Gmail inbox for new emails tagged "Leads"
2. Filters for replies (subject starts with "Re:") or contact form submissions
3. Calls Claude Haiku API to generate a professional response
4. Creates a draft reply in Gmail
5. Sends Slack notification to Chetan

**Key Nodes:**
- Gmail Trigger - Watch Leads
- Filter: Is Reply or Contact Form
- Claude Haiku - Generate Response (Anthropic API)
- Gmail - Create Draft Reply
- Slack - Notify Chetan

**Execution:** Runs every minute (polling)

---

### 2. Lead Tracker Agent (`lead-tracker-workflow.json`)

**Trigger:** Webhook (from FormSubmit or contact form)

**What It Does:**
1. Receives POST request from contact form submission
2. Appends lead data to Google Sheet ("TCG Lead Pipeline")
3. Checks if lead is "hot" (budget includes "$5,000", "Pro", "enterprise", or "custom")
4. **Hot leads:** Sends immediate email with Calendly link + Slack notification
5. **Regular leads:** Only Slack notification
6. Returns success response to webhook

**Webhook URL Format:**
```
https://your-n8n-instance.com/webhook/tcg-lead-submission
```

**Key Nodes:**
- Webhook - FormSubmit Contact Form
- Google Sheets - Append Lead
- Filter: Is Hot Lead?
- Gmail - Send Hot Lead Email (conditional)
- Slack - Hot Lead Notification / Regular Lead Notification
- Webhook Response - Success

**Execution:** Triggered by webhook POST

---

### 3. Follow-Up Nurture Agent (`followup-workflow.json`)

**Trigger:** Schedule - Daily at 9am ET

**What It Does:**
1. Runs daily at 9am Eastern Time
2. Reads Google Sheet for leads with Status = "Contacted"
3. Filters leads where last contact was 3+ days ago
4. Loops through each stale lead:
   - Calls Claude Haiku to generate personalized follow-up email
   - Creates Gmail draft for review
5. Sends Slack summary with count of follow-ups created

**Key Nodes:**
- Schedule - Daily 9am ET
- Google Sheets - Read Contacted Leads
- Code - Filter Stale Leads (3+ Days)
- Loop Over Stale Leads
- Claude Haiku - Generate Follow-Up
- Gmail - Create Follow-Up Draft
- Slack - Daily Summary Notification

**Execution:** Runs daily at 9am ET (cron schedule)

---

## Configuration Guide

### Anthropic API System Prompts

Each workflow includes a system prompt that tells Claude how to respond. These prompts reference:

- TCG's services (Build, Consult, Train)
- Pricing packages (Starter $1,500, Business $3,500, Pro $7,000)
- Portfolio projects (AutoBuffy, Buffy360, Westar Auto)
- Response tone and structure guidelines

**To update the prompts:**
1. Edit `claude-persona-prompt.md` for the full reference
2. Update the `system` parameter in each Anthropic API HTTP Request node
3. Keep prompts under 2000 characters for optimal performance

### Hot Lead Criteria

The **Lead Tracker** workflow identifies hot leads based on:

- Budget field contains: `$5,000`, `Pro`, `enterprise`, or `custom`
- Service Type contains: `Pro`

**To customize:**
1. Open `lead-tracker-workflow.json` in n8n
2. Edit the **"Filter: Is Hot Lead?"** node
3. Add/remove conditions as needed

### Email Templates

The **Lead Tracker** workflow sends an HTML email to hot leads.

**To customize:**
1. Open the workflow in n8n
2. Go to **"Gmail - Send Hot Lead Email"** node
3. Edit the `message` parameter (HTML content)

---

## Monitoring & Maintenance

### Check Workflow Executions

1. Go to **Executions** in n8n
2. Filter by workflow name
3. Review success/error logs

### Common Issues

**Issue:** Gmail API quota exceeded
- **Solution:** Reduce polling frequency or upgrade Gmail API quota

**Issue:** Anthropic API rate limit
- **Solution:** Add delay between requests or upgrade API tier

**Issue:** Google Sheets not updating
- **Solution:** Verify OAuth2 permissions and sheet ID

**Issue:** Slack notifications not sending
- **Solution:** Check channel ID and bot permissions

### Best Practices

1. **Review drafts before sending** - All agent responses are created as drafts first
2. **Monitor hot leads closely** - Set up mobile Slack notifications
3. **Update the persona prompt** - Keep pricing and services current
4. **Archive old leads** - Move stale leads to separate sheet to reduce processing time
5. **Test regularly** - Send test emails and form submissions monthly

---

## API Costs

### Anthropic API (Claude 3.5 Haiku)

- **Input:** $0.80 per million tokens
- **Output:** $4.00 per million tokens

**Estimated Monthly Cost (100 leads/month):**
- Auto-responder: ~200 tokens/email × 100 = 20,000 tokens = **$0.08**
- Follow-ups: ~200 tokens/email × 50 = 10,000 tokens = **$0.04**
- **Total:** ~$0.12/month

### n8n

- **Self-hosted:** Free (infrastructure costs only)
- **Cloud:** Starting at $20/month

### Gmail/Sheets

- Free for standard use
- API quotas apply (10,000 requests/day for Gmail)

---

## Security Notes

1. **Never commit API keys** - Use n8n credentials manager
2. **Use OAuth2** - More secure than API keys for Google/Gmail
3. **Restrict webhook access** - Use authentication headers if possible
4. **Limit sheet permissions** - Only grant necessary access
5. **Monitor executions** - Watch for suspicious activity

---

## Support & Updates

**Maintained by:** Chetan Chadha (TCG Founder)
**Last Updated:** April 13, 2026
**Version:** 1.0

For questions or issues, contact: [Your Email]

---

## Future Enhancements

Planned features for future versions:

- [ ] SMS notifications via Twilio
- [ ] Lead scoring algorithm
- [ ] A/B testing for email templates
- [ ] Integration with CRM (HubSpot, Pipedrive)
- [ ] Voice call booking via AI phone agent
- [ ] Automated proposal generation
- [ ] Calendar availability sync
- [ ] Multi-language support

---

## License

These workflows are proprietary to The Chadha Group. Modify for internal use only.
