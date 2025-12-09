# G.I.M.S. Service - Production Setup Guide

## 🚀 Deployment Checklist

### 1. Environment Variables

Create a `.env.local` file with the following variables:

```env
# Google Analytics 4
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# EmailJS (optional - for contact form)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Calendly (optional)
NEXT_PUBLIC_CALENDLY_USERNAME=your_calendly_username

# Site URL
NEXT_PUBLIC_SITE_URL=https://gimsservice.vercel.app
```

### 2. Company Information

Update `lib/data.ts` with complete company information:
- **P.IVA**: Add to `companyInfo` object and footer
- **Complete address**: Verify all details
- **Business hours**: Update in JSON-LD schema (layout.tsx)

### 3. SEO Setup

✅ **Completed:**
- Meta tags and Open Graph
- JSON-LD structured data (LocalBusiness)
- Sitemap.xml (auto-generated)
- Robots.txt
- Canonical URLs

**To do:**
- [ ] Add Google Search Console verification code in `layout.tsx`
- [ ] Submit sitemap to Google Search Console
- [ ] Verify business on Google My Business

### 4. Analytics

**Google Analytics 4:**
1. Create GA4 property
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to `.env.local` as `NEXT_PUBLIC_GA_ID`
4. Verify tracking in GA4 Real-Time reports

**Vercel Analytics:**
- Automatically enabled on Vercel deployments
- No configuration needed

### 5. Contact Form

**Option A: EmailJS (Recommended for quick setup)**
1. Sign up at https://www.emailjs.com/
2. Create email service (Gmail, Outlook, etc.)
3. Create email template
4. Get Service ID, Template ID, and Public Key
5. Add to `.env.local`

**Option B: API Route**
- Contact form uses `/api/contact` route as fallback
- Integrate with your email service (Resend, SendGrid, AWS SES)
- Update `app/api/contact/route.ts`

### 6. PWA Icons

Create and add PWA icons:
- `/public/icon-192.png` (192x192)
- `/public/icon-512.png` (512x512)
- `/public/apple-touch-icon.png` (180x180)
- `/public/favicon.ico`
- `/public/icon.svg`

Use tools like:
- https://realfavicongenerator.net/
- https://www.pwabuilder.com/imageGenerator

### 7. Performance Optimization

**Core Web Vitals Targets:**
- LCP < 2.5s ✅ (Images optimized with Next/Image)
- CLS < 0.1 ✅ (Layout shifts minimized)
- FID < 100ms ✅ (Code splitting enabled)

**Check Performance:**
```bash
npm run build
npm run start
# Test with Lighthouse or PageSpeed Insights
```

### 8. Legal Pages

✅ **Created:**
- `/privacy` - Privacy Policy
- `/cookie` - Cookie Policy
- `/condizioni` - Terms of Use

**Review and customize:**
- Update P.IVA in privacy page
- Add specific business details
- Review GDPR compliance

### 9. WhatsApp Integration

✅ **Completed:**
- Floating WhatsApp button
- Auto-appears after scroll
- Pre-filled message

**Verify:**
- Phone number in `lib/data.ts` is correct
- WhatsApp link works on mobile devices

### 10. Cookie Consent

✅ **Completed:**
- GDPR-compliant cookie banner
- LocalStorage persistence
- Analytics consent management

**Test:**
- Clear localStorage and reload
- Verify banner appears
- Test accept/reject functionality

## 📦 Dependencies to Install

```bash
npm install @emailjs/browser
```

## 🔧 Build & Deploy

```bash
# Build for production
npm run build

# Test production build locally
npm run start

# Deploy to Vercel
vercel --prod
```

## ✅ Pre-Launch Checklist

- [ ] All environment variables set
- [ ] P.IVA added to footer and privacy page
- [ ] Google Analytics tracking verified
- [ ] Contact form tested and working
- [ ] All images optimized and loading
- [ ] Legal pages reviewed and customized
- [ ] Mobile responsiveness tested
- [ ] Performance scores > 90 (Lighthouse)
- [ ] SEO meta tags verified
- [ ] Social media previews tested
- [ ] Cookie consent working
- [ ] WhatsApp button functional
- [ ] Sitemap submitted to Google
- [ ] Google My Business verified

## 🎯 Post-Launch

1. **Monitor Analytics:**
   - Track form submissions
   - Monitor page views
   - Check conversion rates

2. **SEO:**
   - Submit to Google Search Console
   - Monitor search rankings
   - Update content regularly

3. **Performance:**
   - Monitor Core Web Vitals
   - Optimize slow pages
   - Update images as needed

## 📞 Support

For issues or questions:
- Email: info@gimsservice.it
- Phone: +39 347 800 4971

---

**Last Updated:** 2025-01-XX
**Version:** 1.0.0
