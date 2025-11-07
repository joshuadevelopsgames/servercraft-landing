# 🚀 DIY Waitlist API - Setup Guide

## ✅ **Built Your Own Formspree!**

You now have a custom waitlist API that:
- ✅ Accepts form submissions
- ✅ Emails YOU when someone signs up
- ✅ Sends confirmation email to the user
- ✅ Shows success message on page
- ✅ No third-party dependency!
- ✅ Unlimited submissions (free!)

---

## 🔑 **Setup (5 minutes):**

### **Step 1: Get Resend API Key**

1. Go to **https://resend.com**
2. Sign up (free - 3,000 emails/month!)
3. Verify your email
4. Go to **API Keys** tab
5. Click "Create API Key"
6. Copy the key (starts with `re_...`)

### **Step 2: Add to Vercel**

1. Go to **https://vercel.com/dashboard**
2. Click your **"servercraft-landing"** project
3. Go to **Settings** → **Environment Variables**
4. Add two variables:

```
RESEND_API_KEY = re_your_api_key_here
NOTIFICATION_EMAIL = your-email@example.com
```

5. Click **Save**
6. Go to **Deployments** tab
7. Click "..." on latest deployment → **Redeploy**

### **Step 3: Test It!**

1. Go to your landing page
2. Fill out waitlist form
3. Submit
4. **Check your email** - you should receive:
   - Notification of new sign-up ✅
5. Check the submitter's email - they should receive:
   - Confirmation they're on the list ✅

---

## 📧 **What You Receive:**

Every waitlist sign-up sends YOU an email:

```
Subject: 🎮 New ServerCraft Waitlist Sign-up: John Smith

New Waitlist Sign-up! 🎉

Name: John Smith
Email: john@example.com
Message: I run a modded server with 50 players!

Submitted at: 11/7/2025, 3:45 PM
```

---

## 📊 **User Receives:**

They get an automatic confirmation:

```
Subject: ✅ You're on the ServerCraft Waitlist!

Thanks for joining, John! 🎉

You're officially on the ServerCraft waitlist.

We'll email you when we launch (coming soon!)

Early members get 3 months free Pro 🎁

Questions? Just reply to this email.
```

---

## 🎯 **Benefits Over Formspree:**

| Feature | Your API | Formspree |
|---------|----------|-----------|
| **Cost** | Free (3k emails/mo) | Free (50 subs/mo) |
| **Submissions** | Unlimited | 50/month |
| **Customization** | Full control | Limited |
| **Branding** | Your own emails | Formspree branding |
| **Data** | You own it | Third-party |
| **Future** | Can add database | Locked in |

---

## 🔒 **Verification (For Production):**

Resend requires domain verification for production use:

### **Optional: Verify Your Domain**

1. In Resend dashboard, go to **Domains**
2. Click **"Add Domain"**
3. Add your domain (e.g., `servercraft.io`)
4. Add DNS records they provide
5. Wait for verification (~5 minutes)
6. Update the API to use your domain:

```typescript
from: 'ServerCraft <waitlist@servercraft.io>',
```

**For now:** Use `onboarding@resend.dev` (works immediately!)

---

## 📁 **Optional: Save to Database**

Want to save submissions to a database? Easy!

### **Add Supabase (Free):**

```typescript
// In app/api/waitlist/route.ts
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
)

// After sending email, add:
await supabase.from('waitlist').insert({
  name,
  email,
  message,
  submitted_at: new Date().toISOString()
})
```

---

## 🎉 **You're Done!**

Your waitlist form:
- ✅ Emails you directly
- ✅ Confirms with users
- ✅ Shows success message
- ✅ No third-party forms needed
- ✅ Fully customizable

**Just add your Resend API key to Vercel and you're live!** 🚀

---

## 🐛 **Troubleshooting:**

**"Failed to submit":**
- Check environment variables in Vercel
- Make sure RESEND_API_KEY is set
- Make sure NOTIFICATION_EMAIL is set
- Redeploy after adding vars

**"Not receiving emails":**
- Check spam folder
- Verify Resend API key is correct
- Check Resend dashboard for delivery status

**"User not receiving confirmation":**
- They need to check spam folder
- Or verify your domain in Resend (see above)

---

**This is WAY better than using Formspree!** You own the whole stack! 💪

