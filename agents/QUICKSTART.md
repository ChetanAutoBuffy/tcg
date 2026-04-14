# TCG AI Agents - Quick Start Guide

Get your AI agent system up and running in under 30 minutes.

## Prerequisites Checklist

- [ ] n8n instance (cloud or self-hosted)
- [ ] Anthropic API key ([Get one here](https://console.anthropic.com))
- [ ] Google account with Gmail
- [ ] Google Sheet for lead tracking
- [ ] Slack workspace (optional)
- [ ] Calendly account

---

## 5-Minute Setup

### Step 1: Import Workflows

1. Log into your n8n instance
2. Click **Workflows** > **Import from File**
3. Import these 3 files:
   - `responder-workflow.json`
   - `lead-tracker-workflow.json`
   - `followup-workflow.json`

### Step 2: Add Credentials

In n8n, go to **Credentials** and add:

1. **Gmail OAuth2**
   - Name: "Gmail OAuth2 account"
   - Follow OAuth2 setup wizard

2. **Anthropic API Key**
   - Name: "Anthropic API Key"
   - Type: Header Auth
   - Header: `x-api-key`
   - Value: Your API key from console.anthropic.com

3. **Google Sheets OAuth2**
   - Name: "Google Sheets account"
   - Follow OAuth2 setup wizard

4. **Slack API** (optional)
   - Name: "Slack account"
   - Get token from api.slack.com

### Step 3: Create Lead Tracking Sheet

1. Open Google Sheets
2. Create new sheet: **"TCG Lead Pipeline"**
3. Add these column headers in Row 1:
   ```
   Date | Name | Email | Source | Service | Budget | Status | Notes
   ```
4. Copy the sheet ID from URL:
   ```
   https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID_HERE/edit
   ```

### Step 4: Update Sheet ID in Workflows

**In Lead Tracker workflow:**
1. Open workflow in n8n
2. Click **"Google Sheets - Append Lead"** node
3. Update `documentId` to your sheet ID

**In Follow-Up workflow:**
1. Open workflow in n8n
2. Click **"Google Sheets - Read Contacted Leads"** node
3. Update `documentId` to your sheet ID

### Step 5: Configure Gmail Label

1. In Gmail, create label: **"Leads"**
2. Create filter to auto-apply label:
   - From: `formsubmit.co` OR subject contains `inquiry`
   - Apply label: "Leads"

### Step 6: Replace Calendly Link

**Find and replace in all workflows:**

Old: `[CALENDLY_LINK]`
New: `https://calendly.com/your-username/15min`

**Files to update:**
- Lead Tracker workflow → "Gmail - Send Hot Lead Email" node
- All Anthropic API system prompts

### Step 7: Activate Workflows

1. Open each workflow in n8n
2. Toggle **"Active"** switch at top right
3. All 3 workflows should show as **Active**

---

## Testing Your Setup

### Test 1: Auto-Responder

1. Send email to your Gmail
2. Apply "Leads" label manually
3. Subject line: "Re: Testing TCG Agent"
4. Wait 1-2 minutes
5. Check Gmail Drafts → You should see a draft reply

### Test 2: Lead Tracker

1. Get webhook URL from n8n:
   - Open Lead Tracker workflow
   - Click **"Webhook"** node
   - Copy **Production URL**

2. Send test POST request:
   ```bash
   curl -X POST https://your-n8n-instance.com/webhook/tcg-lead-submission \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Test Lead",
       "email": "test@example.com",
       "service": "Build",
       "budget": "$5,000",
       "message": "Testing the lead tracker"
     }'
   ```

3. Check:
   - Google Sheet → New row added
   - Gmail → Email sent (if hot lead)
   - Slack → Notification sent

### Test 3: Follow-Up Nurture

1. In Google Sheet, add a test row:
   - Date: 4 days ago
   - Status: "Contacted"
   - Fill in name, email, etc.

2. In n8n, open Follow-Up workflow
3. Click **"Execute Workflow"** (manual test)
4. Check Gmail Drafts → Follow-up email created

---

## Webhook Integration for Contact Form

### Option 1: FormSubmit.co (Free)

1. In your contact form HTML:
   ```html
   <form action="https://formsubmit.co/your-email@gmail.com" method="POST">
     <input type="hidden" name="_next" value="https://tcgservices.com/thank-you">
     <input type="hidden" name="_cc" value="WEBHOOK_URL">
     <input type="text" name="name" required>
     <input type="email" name="email" required>
     <select name="service">
       <option>Build</option>
       <option>Consult</option>
       <option>Train</option>
     </select>
     <input type="text" name="budget">
     <textarea name="message"></textarea>
     <button type="submit">Send</button>
   </form>
   ```

2. Replace `WEBHOOK_URL` with your n8n webhook URL

### Option 2: Direct Webhook (Custom Form)

1. Get webhook URL from n8n Lead Tracker workflow
2. In your form JavaScript:
   ```javascript
   const form = document.getElementById('contact-form');
   form.addEventListener('submit', async (e) => {
     e.preventDefault();
     const formData = new FormData(form);
     const data = Object.fromEntries(formData);

     await fetch('https://your-n8n-instance.com/webhook/tcg-lead-submission', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(data)
     });

     // Show success message
     alert('Thanks! We'll be in touch soon.');
   });
   ```

---

## Customization Quick Reference

### Change Hot Lead Criteria

**File:** `lead-tracker-workflow.json`
**Node:** "Filter: Is Hot Lead?"

Add/remove conditions:
- Budget contains: `$10,000`, `Enterprise`, etc.
- Service contains: `Custom`, etc.

### Update Email Templates

**File:** `lead-tracker-workflow.json`
**Node:** "Gmail - Send Hot Lead Email"

Edit the HTML in the `message` parameter.

### Modify AI Response Style

**File:** All workflows with Anthropic API
**Node:** "Claude Haiku - Generate Response/Follow-Up"

Edit the `system` parameter prompt:
- Change tone (more formal, more casual)
- Adjust length (shorter, more detailed)
- Add/remove service mentions

### Change Follow-Up Schedule

**File:** `followup-workflow.json`
**Node:** "Schedule - Daily 9am ET"

Change schedule:
- Daily → Weekly
- 9am → Different time
- Add timezone offset

---

## Monitoring Dashboard

### Daily Checklist

- [ ] Check Gmail drafts (review before sending)
- [ ] Review Google Sheet for new leads
- [ ] Check Slack #leads channel
- [ ] Monitor n8n execution logs
- [ ] Respond to hot leads within 2 hours

### Weekly Tasks

- [ ] Archive old leads (move to separate sheet)
- [ ] Update pricing in persona prompt
- [ ] Review and improve email templates
- [ ] Check API usage and costs

### Monthly Maintenance

- [ ] Review workflow performance metrics
- [ ] Update Claude system prompts
- [ ] Optimize hot lead criteria
- [ ] Backup Google Sheet data

---

## Troubleshooting

### Issue: Gmail drafts not created

**Solution:**
1. Check Gmail OAuth2 credentials
2. Verify "Send email" permission granted
3. Test manually trigger workflow

### Issue: Anthropic API errors

**Solution:**
1. Check API key is valid
2. Verify rate limits not exceeded
3. Check system prompt < 2000 chars

### Issue: Google Sheets not updating

**Solution:**
1. Verify OAuth2 permissions
2. Check sheet ID is correct
3. Ensure column headers match exactly

### Issue: Slack notifications not sending

**Solution:**
1. Check Slack bot token
2. Verify channel ID is correct
3. Ensure bot is added to channel

### Issue: Webhook not receiving data

**Solution:**
1. Test webhook URL in browser
2. Check CORS settings if needed
3. Verify POST request format

---

## Success Metrics

Track these KPIs weekly:

- **Lead Volume:** Total leads captured
- **Hot Lead %:** Percentage of high-budget leads
- **Response Time:** Avg time from lead to first contact
- **Draft Accuracy:** % of drafts sent without edits
- **Follow-Up Rate:** % of stale leads re-engaged
- **Conversion Rate:** % of leads → paying clients

---

## Next Steps

Once your agents are running:

1. **Monitor for 1 week** - Watch executions, review drafts
2. **Optimize prompts** - Adjust based on email quality
3. **Refine hot lead criteria** - Based on actual conversions
4. **Scale up** - Add more lead sources (LinkedIn, Twitter, etc.)
5. **Build reporting** - Connect to analytics dashboard

---

## Support

**Documentation:** See `README.md` for detailed guides
**Troubleshooting:** Check n8n execution logs
**Updates:** Review `claude-persona-prompt.md` for latest TCG info

---

**Last Updated:** April 13, 2026
**Version:** 1.0
