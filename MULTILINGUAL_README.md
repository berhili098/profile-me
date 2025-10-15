# Multilingual Portfolio - Testing Guide

## How to Test the Language Switching

### Option 1: Using Python HTTP Server (Recommended)
```bash
cd /Users/oussama/dev/ext/profile-me
python3 -m http.server 8080
```
Then open: http://localhost:8080

### Option 2: Using Live Server Extension in VS Code
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 3: Using PHP Server
```bash
cd /Users/oussama/dev/ext/profile-me
php -S localhost:8080
```
Then open: http://localhost:8080

## Important Notes

⚠️ **DO NOT open the HTML file directly** (file:// protocol) as the `fetch()` API for loading translations.json will be blocked by CORS policy.

## Testing Steps

1. Start a local server using one of the options above
2. Open the website in your browser
3. Open browser Developer Tools (F12 or Cmd+Option+I on Mac)
4. Check the Console tab for log messages:
   - ✅ Translations loaded successfully
   - 🔘 Setting up language switcher
   - 📄 Found translatable elements
5. Click the "EN" or "FR" buttons in the navigation bar
6. Watch the console for:
   - 🔄 Language button clicked
   - 🌐 Translating page to: [language]
7. Verify that all text changes on the page

## What Should Change

When switching languages, the following should update:
- Navigation menu items
- Hero section (title, subtitle, bio, buttons)
- About section content
- All experience descriptions
- All project descriptions
- Skills categories
- Education details
- Certifications
- Contact section
- Footer text
- Page title (in browser tab)
- Meta tags (for SEO)

## Troubleshooting

If the language doesn't switch:

1. **Check Console for Errors**: Look for red error messages
2. **Verify Server is Running**: Make sure you're using a local server, not file://
3. **Check Network Tab**: Look for translations.json - should return status 200
4. **Clear Cache**: Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
5. **Check Browser Console Logs**: Should see emoji logs about loading and switching

## Features

- 🌍 Auto-detects browser language on first visit
- 💾 Remembers your language preference (localStorage)
- 🔄 Instant language switching without page reload
- 📱 Mobile-responsive language switcher
- 🔍 SEO-friendly (updates meta tags dynamically)

