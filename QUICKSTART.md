# Quick Start Guide

Your portfolio website is ready! Here's what to do next:

## 📋 Immediate Next Steps

### 1. Add Your Profile Image
- Replace `assets/images/profile.jpg` with your photo
- Recommended size: 400x400px (square)
- Format: JPG, PNG, or WebP

### 2. Customize Your Information
Update the following files with your details:

**index.html** (Home page)
- Line 34-45: Update your tagline and bio
- Update LinkedIn URL (line 54)

**resume.html** (Resume)
- Lines 25-46: Add/update your education
- Lines 48-95: Add/update your work experience
- Lines 97-121: Update skills

**projects.html** (Projects)
- Lines 31-120: Add your project cards
- Update project links and descriptions

### 3. Add Your Resume PDF
- Save your resume as `assets/resume.pdf`
- The download button on resume.html will automatically link to it

## 🚀 Testing Locally

Before deploying, test your website locally:

**Option 1: Direct open**
- Navigate to your PortfolioWebsite folder
- Double-click `index.html` to open in browser

**Option 2: Local server (recommended)**
```bash
# Open terminal/command prompt in the PortfolioWebsite folder
# Then run one of these:

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if you have it)
npx http-server

# Ruby (if you have it)
ruby -run -ehttpd . -p8000
```

Then visit: `http://localhost:8000`

## 🎨 Customize Colors

To change the color scheme (teal to something else):

1. Open `assets/css/styles.css`
2. Find the `:root` section (lines 1-20)
3. Change these colors:
   - `--color-primary`: Main color (#17a099 for teal)
   - `--color-primary-dark`: Darker shade for hover effects
   - `--color-primary-light`: Lighter shade for backgrounds

Popular alternatives:
- **Blue**: `#0066cc` (primary), `#0052a3` (dark), `#3399ff` (light)
- **Purple**: `#7c3aed` (primary), `#6d28d9` (dark), `#a78bfa` (light)
- **Green**: `#059669` (primary), `#047857` (dark), `#10b981` (light)
- **Orange**: `#f97316` (primary), `#ea580c` (dark), `#fb923c` (light)

## 🌐 Deploy to GitHub Pages

1. Create a GitHub account (if you don't have one)
2. Create a new repository named `portfolio-website`
3. Clone it:
   ```bash
   git clone https://github.com/YOUR_USERNAME/portfolio-website.git
   cd portfolio-website
   ```
4. Copy all files from your PortfolioWebsite folder into this cloned folder
5. Push to GitHub:
   ```bash
   git add .
   git commit -m "Initial portfolio site"
   git push origin main
   ```
6. Go to repository Settings → Pages
7. Set source to `main` branch and save
8. Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio-website`

**Note:** Change `YOUR_USERNAME` to your actual GitHub username

## 🎯 Optional Enhancements

- Add a favicon (browser tab icon)
- Optimize images for faster loading
- Add Google Analytics
- Create a custom domain
- Add dark mode toggle
- Add project filters by category
- Add testimonials section

## 🆘 Need Help?

Common issues and solutions are in the README.md file.

---

**You're all set!** Your portfolio website is ready to showcase your work. 🎉
