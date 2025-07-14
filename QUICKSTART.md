# Portfolio Website - Quick Start Guide

## 🚀 How to View Your Portfolio

### Method 1: Direct File Opening (Simplest)
1. Open your file manager/explorer
2. Navigate to: `/Users/imenalsamarai/Documents/projects_MCP/portfolio-website/`
3. Double-click on `index.html`
4. Your portfolio will open in your default browser!

### Method 2: Local Server (Better Performance)
If you have Python installed:
```bash
cd /Users/imenalsamarai/Documents/projects_MCP/portfolio-website
python3 -m http.server 8000
```
Then open: http://localhost:8000

## ✨ What You'll See

Your portfolio includes these sections:
- **Hero/Intro**: Main landing with your name and tagline
- **Background**: About section with skills and profile image
- **Skills**: Organized by categories (Languages, Frameworks, Tools)
- **Experience**: Work history with descriptions
- **Featured Projects**: Main projects with images and links
- **Other Projects**: Grid of smaller projects
- **Contact**: Get in touch section
- **Theme Toggle**: Switch between dark/light themes (top right)

## 🎨 Customization

### 1. Change Your Information
Edit `/js/data.js` to update:
- Work experience
- Projects
- Skills
- Company links

### 2. Update Personal Details
Edit `index.html` to change:
- Your name and tagline
- About section text
- Email address
- Social media links

### 3. Add Your Photo
- Replace `img/profile.svg` with your actual photo
- Name it `profile.jpg` or `profile.png`
- Update the path in `index.html` if needed

### 4. Colors & Styling
Edit `css/main.css`:
- Look for `:root` variables at the top
- Change colors, fonts, sizes as needed

## 📱 Features Included

✅ **Responsive Design** - Works on all devices
✅ **Dark/Light Theme** - Toggle in top right
✅ **Smooth Animations** - Scroll-triggered effects
✅ **Fast Loading** - Optimized performance
✅ **Easy to Edit** - All content in data files
✅ **Modern Design** - Inspired by Brittany Chiang's style

## 🔧 File Structure

```
portfolio-website/
├── index.html          # Main page
├── css/main.css        # All styles
├── js/
│   ├── data.js         # Your content (EDIT THIS!)
│   └── main.js         # Functionality
├── img/
│   ├── profile.svg     # Your photo placeholder
│   └── favicon.svg     # Site icon
└── README.md           # Full documentation
```

## 🎯 Next Steps

1. **View the site** using Method 1 above
2. **Take screenshots** of sections you want to change
3. **Edit the content** in `js/data.js`
4. **Add your photo** to replace the placeholder
5. **Customize colors** if desired
6. **Deploy online** when ready (Netlify, Vercel, etc.)

## 💡 Tips

- The theme toggle is in the top-right corner
- All projects load from the data file
- Scroll animations trigger as you browse
- The site works offline once loaded
- Mobile-friendly and touch-optimized

Enjoy your new portfolio! 🎉
