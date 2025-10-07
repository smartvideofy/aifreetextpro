# Google Analytics 4 Setup Guide

## ✅ Analytics Tracking - Phase 1 Complete!

Comprehensive event tracking has been implemented across all tools. Now you just need to add your Google Analytics 4 Measurement ID.

---

## 🎯 Step 1: Get Your GA4 Measurement ID

1. **Go to Google Analytics**: https://analytics.google.com/
2. **Create a GA4 Property** (if you haven't already):
   - Click "Admin" (gear icon, bottom left)
   - Under "Property" column, click "Create Property"
   - Follow the setup wizard
3. **Get Your Measurement ID**:
   - Go to Admin → Data Streams
   - Click on your web stream (or create one)
   - Copy the **Measurement ID** (format: `G-XXXXXXXXXX`)

---

## 🔧 Step 2: Add Your Measurement ID to the Code

Open `src/lib/analytics.tsx` and replace line 12:

```typescript
// FROM:
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 ID

// TO (example):
const GA_MEASUREMENT_ID = 'G-ABC123XYZ0'; // Your actual ID
```

---

## 📊 What's Already Tracked

### ✅ AI Checker Events
- `ai_check_started` - When user starts analysis (tracks word count)
- `ai_check_completed` - When analysis finishes (tracks AI probability & processing time)
- `sample_text_loaded` - When sample AI/human text is loaded
- `copy_analysis_report` - When user copies the analysis report

### ✅ Humanizer Events
- `humanize_started` - When humanization starts (tracks style, strength, word count)
- `humanize_completed` - When humanization finishes (tracks score, time, words changed)
- `copy_humanized_text` - When user copies result
- `download_humanized_text` - When user downloads result
- `regenerate_text` - When user regenerates text
- `sample_text_loaded` - When sample text is loaded
- `auto_recheck_completed` - When auto AI detection recheck runs

### ✅ Demo Section Events
- `demo_detect_clicked` - When Detect AI button clicked in demo
- `demo_humanize_clicked` - When Humanize button clicked in demo
- `demo_tab_switched` - When user switches between tabs

### ✅ Error Tracking
- `error_occurred` - Tracks all errors with type and message
- Exception tracking for GA4

### ✅ Page Views
- Automatic page view tracking on all route changes

---

## 🔍 Step 3: Set Up Google Search Console

1. **Go to**: https://search.google.com/search-console/
2. **Add Property**: Enter your domain `aifreetextpro.com`
3. **Verify Ownership**:
   - Recommended: Use the GA4 verification method (easiest if GA4 is set up)
   - Or use DNS verification
4. **Submit Sitemap**: 
   - Go to "Sitemaps" in the left menu
   - Submit: `https://aifreetextpro.com/sitemap.xml`

---

## 📈 Step 4: Verify Tracking is Working

After adding your Measurement ID:

1. **Real-time Test**:
   - Open your site in a browser
   - Go to GA4 → Reports → Realtime
   - Click around your site (use tools, copy text, etc.)
   - You should see events appearing in real-time!

2. **Check Specific Events**:
   - GA4 → Reports → Engagement → Events
   - Look for custom events like:
     - `ai_check_completed`
     - `humanize_completed`
     - `copy_humanized_text`

3. **Debug Mode** (optional):
   - Install "Google Analytics Debugger" Chrome extension
   - Open DevTools Console to see all GA events being sent

---

## 🎯 Key Metrics to Monitor

Once data starts flowing, track these in GA4:

### Conversion Metrics
- **Tool Usage Rate**: `ai_check_completed` + `humanize_completed`
- **Completion Rate**: Started vs. Completed events
- **Feature Adoption**: Copy, download, regenerate actions

### Engagement Metrics
- **Processing Time**: Value parameter in completion events
- **Text Length**: Word count in started events
- **Tool Preferences**: Which tool gets more usage

### Quality Metrics
- **AI Detection Scores**: Track average scores over time
- **Humanization Effectiveness**: Undetectability scores

---

## 🎨 Recommended GA4 Dashboards

Create custom explorations to track:

1. **Conversion Funnel**:
   - Page view → Tool interaction → Completion → Copy/Download

2. **Tool Performance**:
   - Average processing times
   - Success rates
   - Error rates

3. **User Engagement**:
   - Sessions with tool usage
   - Pages per session
   - Return visitor rate

---

## 🚀 Next Steps (After Analytics is Live)

Once you have 7-14 days of data:

1. **Identify Drop-off Points**: Where users leave without completing
2. **A/B Test Opportunities**: Test different CTAs, copy, layouts
3. **Content Strategy**: See which blog posts drive tool usage
4. **Technical Issues**: Monitor error rates and fix pain points

---

## ⚠️ Important Notes

- **Privacy**: GA4 is GDPR-compliant by default, but consider adding a cookie consent banner for EU traffic
- **Filters**: Set up filters to exclude internal traffic (your IP)
- **Testing**: Always test in incognito mode to avoid cookie conflicts
- **Data Retention**: GA4 defaults to 14 months - adjust if needed

---

## 🆘 Troubleshooting

### Events not showing up?
- Check browser console for errors
- Verify Measurement ID is correct
- Clear cache and test in incognito
- Wait 24-48 hours for data to populate reports

### Only seeing pageviews?
- Check that custom events aren't being blocked by ad blockers
- Verify imports in component files are correct

---

**Need help?** Check the [GA4 documentation](https://support.google.com/analytics/answer/9304153) or reach out!
