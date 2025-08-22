# GitHub Pages Deployment Guide

## Fix for MIME Type Error

The error `"Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of 'application/octet-stream'"` occurs when GitHub Pages doesn't serve JavaScript files with the correct MIME type.

## Solution 1: Use Netlify (Recommended)
The easiest solution is to deploy to Netlify instead of GitHub Pages:

1. Go to https://netlify.com
2. Connect your GitHub account
3. Select your repository `akhilesh-website`
4. Netlify will automatically detect the build settings
5. Your site will be live instantly!

## Solution 2: GitHub Pages with Custom Domain
If you prefer GitHub Pages:

1. **Enable GitHub Pages:**
   - Go to your repository settings
   - Under "Pages", select "GitHub Actions" as source
   - Or select the `main` branch and `/ (root)` folder

2. **Add GitHub Workflow:**
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [ main ]
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
       - uses: actions/checkout@v4
       - uses: actions/setup-node@v4
         with:
           node-version: '18'
       - run: npm ci
       - run: npm run build
       - uses: peaceiris/actions-gh-pages@v3
         with:
           github_token: ${{ secrets.GITHUB_TOKEN }}
           publish_dir: ./dist
   ```

## Solution 3: Manual GitHub Pages Fix
If deploying manually to GitHub Pages:

1. Build the project: `npm run build`
2. Commit and push the `dist` folder to a `gh-pages` branch
3. Enable GitHub Pages to use the `gh-pages` branch

## Why Netlify is Better:
- Better MIME type handling
- Automatic deployments
- Custom domains
- HTTPS by default
- Better performance
- No MIME type issues

## Testing Locally
To test if MIME types work correctly:
1. Run: `node server.js`
2. Visit: http://localhost:5000
3. Check browser console for any MIME type errors

Your site is now configured to work properly with modern hosting platforms!