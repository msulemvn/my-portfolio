# Deployment Guide

## Why Not GitHub Pages?

This portfolio uses Next.js Server Actions for the contact form email functionality. Server Actions require a Node.js runtime and cannot work with static hosting like GitHub Pages.

## Recommended: Deploy to Vercel (Free)

Vercel is the best platform for Next.js applications with Server Actions:

### Steps to Deploy:

1. **Create a Vercel account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

2. **Import your repository**
   - Click "Add New Project"
   - Select this repository (`my-portfolio`)
   - Vercel will auto-detect Next.js settings

3. **Add environment variable**
   - In project settings, add your `RESEND_API_KEY`
   - This is required for the contact form to work

4. **Deploy**
   - Click "Deploy"
   - Your site will be live at `your-project.vercel.app`
   - You can add a custom domain later

### Automatic Deployments

Every push to `main` branch will automatically deploy to production.

## Alternative: Netlify

If you prefer Netlify:

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add `RESEND_API_KEY` environment variable
5. Enable Next.js runtime in settings

## Local Development

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Environment Variables

Create a `.env.local` file:

```
RESEND_API_KEY=your_resend_api_key_here
```
