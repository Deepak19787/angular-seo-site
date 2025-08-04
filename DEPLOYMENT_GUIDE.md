# Angular SSR Production Deployment Guide

## Issue: Can't View All Pages in Production Except Home Page

### Problem Description
When deploying your Angular SSR application to production, you can only access the home page (`/`), but when you try to access other routes like `/about`, `/contact`, or `/blog`, you get a 404 error or the page doesn't load.

### Root Cause
This is a common issue with Angular SSR applications where the production server is not properly configured to handle client-side routing. The server needs to be set up to handle all routes through the Angular SSR engine, not just serve static files.

### Solution Overview
Your Angular SSR application needs to be deployed with a Node.js server that handles all routes through the Angular SSR engine.

## Production Deployment Steps

### 1. Build for Production
```bash
# Build the application for production
npm run build

# This will create:
# - dist/angular-seo-site/browser/ (static files)
# - dist/angular-seo-site/server/ (server files)
```

### 2. Production Server Setup
Your production server must:
- Run Node.js (version 18+ recommended)
- Use the Express server from `dist/server/server.js`
- Handle all routes through the Angular SSR engine

### 3. Hosting Provider Requirements
Choose a hosting provider that supports Node.js SSR:
- **Vercel** (Recommended for Angular SSR)
- **Netlify** (with Netlify Functions)
- **Firebase Hosting** (with Cloud Functions)
- **AWS Amplify**
- **Heroku**
- **DigitalOcean App Platform**

### 4. Deployment Configuration Examples

#### Option A: Vercel (Recommended)
1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Create `vercel.json`:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "dist/server/server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/dist/server/server.js"
    }
  ]
}
```

3. Deploy:
```bash
vercel --prod
```

#### Option B: Netlify
1. Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist/angular-seo-site/browser"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

2. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

3. Deploy:
```bash
netlify deploy --prod
```

#### Option C: Firebase Hosting
1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Initialize Firebase:
```bash
firebase init hosting
```

3. Create `firebase.json`:
```json
{
  "hosting": {
    "public": "dist/angular-seo-site/browser",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "function": "ssr"
      }
    ]
  }
}
```

4. Deploy:
```bash
firebase deploy
```

### 5. Manual Node.js Server Deployment
If you're deploying to your own server:

1. **Install Node.js on your server**
2. **Copy build files**:
```bash
# Copy these to your server:
dist/angular-seo-site/browser/
dist/angular-seo-site/server/
```

3. **Start the server**:
```bash
cd /path/to/dist
PORT=3000 node server/server.js
```

4. **Use PM2 for process management**:
```bash
npm install -g pm2
pm2 start dist/server/server.js --name angular-ssr-app
```

### 6. Environment Variables
Set these environment variables in production:
```bash
NODE_ENV=production
PORT=3000
```

### 7. Testing Production Build Locally
Before deploying, test locally:
```bash
# Build for production
npm run build

# Test the production build
npm run serve:ssr
```

### 8. Common Issues and Solutions

#### Issue: 404 on refresh
**Solution**: Ensure your server is running the Express server, not just serving static files.

#### Issue: Routes not working
**Solution**: Verify that all routes are handled by the Angular SSR engine.

#### Issue: Static assets not loading
**Solution**: Check that static file serving is properly configured.

### 9. Verification Steps
After deployment, test these URLs:
- `https://yourdomain.com/` (should work)
- `https://yourdomain.com/about` (should work)
- `https://yourdomain.com/contact` (should work)
- `https://yourdomain.com/blog` (should work)
- Refresh any of these pages (should work)

### 10. Monitoring
Add logging to monitor your application:
```typescript
// In your server.ts
console.log(`Request received: ${req.method} ${req.url}`);
```

## Quick Fix Summary
1. **Build**: `npm run build`
2. **Choose hosting**: Vercel, Netlify, or Firebase
3. **Deploy**: Use the appropriate deployment method
4. **Test**: Verify all routes work correctly

The updated `server.ts` file now includes proper route handling for all Angular routes.
