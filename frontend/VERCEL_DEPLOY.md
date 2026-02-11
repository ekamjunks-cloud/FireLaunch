# Fire Launch - Vercel Deployment Guide

## Quick Deploy to Vercel (Free)

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy from the frontend folder:**
   ```bash
   cd frontend
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? `Y`
   - Which scope? Select your account
   - Link to existing project? `N`
   - Project name? `fire-launch` (or your choice)
   - Directory? `./` (current directory)
   - Override settings? `N`

5. **For production deployment:**
   ```bash
   vercel --prod
   ```

---

### Option 2: Deploy via GitHub

1. **Push code to GitHub:**
   - Create a new repository on GitHub
   - Push the `frontend` folder contents

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Select the `frontend` folder as root directory
   - Click "Deploy"

---

### Custom Domain Setup

1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `firelaunch.co.uk`)
4. Update DNS records at your domain provider:
   - **A Record:** `76.76.21.21`
   - **CNAME:** `cname.vercel-dns.com` (for www subdomain)

---

### Project Structure for Vercel

```
frontend/
├── public/
├── src/
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   └── DemoStores.jsx
│   ├── components/
│   ├── App.js
│   ├── App.css
│   └── index.css
├── package.json
├── vercel.json
└── .env.example
```

---

### Environment Variables (Optional)

If you add analytics later, set them in Vercel:
1. Go to Project Settings → Environment Variables
2. Add variables like `REACT_APP_GA_ID`

---

### Notes

- ✅ No backend needed - static marketing site
- ✅ All booking goes to Calendly (external)
- ✅ Free tier includes custom domains
- ✅ Automatic HTTPS
- ✅ Global CDN for fast loading
