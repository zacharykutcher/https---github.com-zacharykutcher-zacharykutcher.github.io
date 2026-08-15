# Zachary Kutcher's Portfolio Website

A modern, responsive portfolio website built with vanilla HTML, CSS, and JavaScript. Optimized for GitHub Pages deployment.

## 📁 Project Structure

```
PortfolioWebsite/
├── index.html                 # Home page
├── resume.html               # Resume page
├── projects.html             # Projects showcase
├── assets/
│   ├── css/
│   │   └── styles.css        # Main stylesheet
│   ├── js/
│   │   └── script.js         # JavaScript functionality
│   ├── images/
│   │   └── profile.jpg       # Profile photo (add your image)
│   └── resume.pdf            # Resume PDF (add your file)
└── README.md                 # Project documentation
```

## 🎨 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Teal color scheme (#17a099)
- ✅ Smooth navigation between pages
- ✅ Project showcase with cards
- ✅ Social media links
- ✅ Print-friendly resume
- ✅ Accessibility features
- ✅ Fast loading (no external dependencies)

## 🚀 Quick Start

1. **Clone or download this repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd PortfolioWebsite
   ```

2. **Add your images**
   - Replace `assets/images/profile.jpg` with your profile photo
   - Recommended size: 400x400px or larger
   - Supported formats: JPG, PNG, WebP

3. **Add your resume**
   - Place your resume PDF as `assets/resume.pdf`
   - Update the download link in `resume.html` if needed

4. **Customize content**
   - Edit `index.html` with your info
   - Update `resume.html` with your experience
   - Add your projects to `projects.html`
   - Create blog articles in the `blog/` folder

5. **Test locally**
   - Open `index.html` in your browser, or
   - Use a local server:
     ```bash
     python -m http.server 8000
     # or with Node.js:
     npx http-server
     ```
   - Visit `http://localhost:8000`

## 📧 Contact Form Setup

The contact form uses **Formspree** (free service) to send emails. 

**To set it up:**

1. Go to [formspree.io](https://formspree.io)
2. Sign up and create a new form
3. Get your form ID (looks like `f/xxxxxxxxxx`)
4. Update the form endpoint in `assets/js/script.js`:
   ```javascript
   fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

**Alternative options:**
- **Netlify Forms** (if hosting on Netlify)
- **Basin** (basin.io)
- **EmailJS** (no backend required)

## 🌐 Deployment

### GitHub Pages (Free)

1. Create a GitHub repository named `portfolio-website`
2. Push this code to the repository
3. Go to **Settings** → **Pages**
4. Set source to `main` branch
5. Your site will be live at `https://yourusername.github.io/portfolio-website`

### Netlify

1. Connect your GitHub repository at [netlify.com](https://netlify.com)
2. Your site deploys automatically on every push

### Vercel

1. Push to GitHub
2. Import project at [vercel.com](https://vercel.com)
3. Auto-deploys on every push

## 🎯 Customization Guide

### Update Your Resume PDF
Replace `assets/resume.pdf` with your actual resume. The download button will automatically link to it.

### Change Color Scheme
Edit CSS variables in `assets/css/styles.css`:
```css
:root {
    --color-primary: #17a099;        /* Change this */
    --color-primary-dark: #0d6b63;
    --color-primary-light: #2fc5ba;
}
```

### Add More Projects
Add a new card to `projects.html`:
```html
<article class="project-card">
    <h3>Your Project Title</h3>
    <p class="project-tag">PROJECT TYPE</p>
    <p class="project-description">Description...</p>
    <div class="project-actions">
        <a href="#" class="btn btn-small btn-primary">View</a>
    </div>
</article>
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for images and links
- Keyboard navigation support
- Color contrast meets WCAG AA standards
- Mobile-friendly touch targets

## 📄 License

This template is free to use. Feel free to modify and customize it for your needs.

## 💡 Tips

- Keep images optimized (compress before uploading)
- Update content regularly
- Use descriptive project titles
- Add meaningful article descriptions
- Test on mobile devices before deploying
- Monitor contact form submissions (check Formspree dashboard)

## 🐛 Troubleshooting

**Images not showing?**
- Check file paths are relative and correct
- Ensure image files exist in `assets/images/`
- Try refreshing or clearing browser cache

**Mobile menu issues?**
- Clear browser cache
- Check viewport meta tag is present
- Test in incognito/private mode

---

Happy building! Feel free to reach out with questions. 🚀
