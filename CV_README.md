# Portfolio Website with Integrated Resume

This portfolio website now includes an integrated CV/Resume system.

## File Structure

```
portfolio-website/
├── index.html          # Main portfolio page
├── resume.html         # CV/Resume page
├── cv/
│   └── resume.css     # CV-specific styles
├── css/               # Main website styles
├── js/                # Main website scripts
└── ... (other files)
```

## Resume Features

- **Interactive CV**: Zoom controls, page break indicators
- **PDF Download**: Generate and download PDF version
- **Responsive Design**: Works on all devices
- **Navigation**: Back to portfolio button
- **Professional Layout**: Clean, ATS-friendly design

## Deployment Options

### Option 1: GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Your site will be available at `https://username.github.io/repository-name`

### Option 2: Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: (none needed)
3. Set publish directory: `/` (root)
4. Auto-deploy on every push

### Option 3: Vercel
1. Import your GitHub repository to Vercel
2. No additional configuration needed
3. Auto-deploy on every push

## Editing Your Resume

To update your CV/Resume:
1. Edit `resume.html` for content changes
2. Edit `cv/resume.css` for styling changes
3. The page break indicator shows where content splits across PDF pages

## How It Works

- The "Resume" button in your portfolio navigation opens the CV in a new tab
- Users can zoom in/out, download PDF, or navigate back to your portfolio
- The CV is fully self-contained and optimized for both web viewing and PDF generation

## Notes

- All styles are scoped to avoid conflicts with your main website
- PDF generation works entirely client-side (no server required)
- Page break indicators are hidden when printing/generating PDFs
- The CV uses the same Inter font as your portfolio for consistency
