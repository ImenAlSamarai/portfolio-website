# Portfolio Website

A modern, responsive portfolio website inspired by Brittany Chiang's design but with our own implementation and customizable content.

## Features

- **Dark/Light Theme Toggle**: Switch between dark and light themes
- **Responsive Design**: Works on all devices and screen sizes
- **Smooth Animations**: Scroll-triggered animations and smooth transitions
- **Easy Content Management**: Edit content through simple JavaScript data files
- **Modern Tech Stack**: Pure HTML, CSS, and JavaScript (no frameworks required)
- **Performance Optimized**: Fast loading and smooth interactions

## Project Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── css/
│   └── main.css        # All styles and responsive design
├── js/
│   ├── data.js         # Content data (easy to edit)
│   └── main.js         # Main functionality
├── img/
│   └── profile.jpg     # Profile image (add your own)
└── README.md          # This file
```

## How to View the Website

### Option 1: Simple File Opening
1. Navigate to the `portfolio-website` folder
2. Double-click on `index.html`
3. The website will open in your default browser

### Option 2: Local Server (Recommended)
For better performance and to avoid any CORS issues:

**Using Python (if installed):**
```bash
cd portfolio-website
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser

**Using Node.js (if installed):**
```bash
cd portfolio-website
npx serve .
```

**Using VS Code:**
1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 3: PHP Local Server
```bash
cd portfolio-website
php -S localhost:8000
```

## Customizing Your Portfolio

### 1. Personal Information
Edit the content in `js/data.js`:

```javascript
// Update your personal information
const portfolioData = {
    experience: [
        // Add your work experience
    ],
    featuredProjects: [
        // Add your main projects
    ],
    otherProjects: [
        // Add smaller projects
    ]
};
```

### 2. Basic Information
In `index.html`, update:
- Page title and meta descriptions
- Your name in the intro section
- Contact email
- Social media links
- Resume link

### 3. Profile Image
- Add your profile picture to the `img/` folder
- Name it `profile.jpg` or update the path in the HTML

### 4. Styling
- Colors and themes can be adjusted in `css/main.css`
- Look for the `:root` CSS variables at the top of the file

## Adding New Sections

To add a new section:

1. **Add HTML structure** in `index.html`:
```html
<section id="new-section" class="section">
    <div class="section-content">
        <h2 class="section-title">
            <span class="section-number">07.</span>
            New Section
        </h2>
        <div id="new-section-content">
            <!-- Content will be loaded here -->
        </div>
    </div>
</section>
```

2. **Add data** in `js/data.js`:
```javascript
newSectionData: [
    // Your data here
]
```

3. **Add loading function** in `js/main.js`:
```javascript
function loadNewSection() {
    const container = document.getElementById('new-section-content');
    // Your loading logic here
}
```

4. **Add styles** in `css/main.css` as needed

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Performance Tips

- Optimize images before adding them
- Keep the `js/data.js` file reasonably sized
- Test on mobile devices

## Deployment

You can deploy this portfolio to:
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Push to a GitHub repo and enable Pages
- **Any web hosting service**: Upload the files via FTP

## Credits

Design inspiration from Brittany Chiang's portfolio, but implemented independently with our own code and structure.

## License

Feel free to use this template for your own portfolio. Please give appropriate credit if you found this helpful!
