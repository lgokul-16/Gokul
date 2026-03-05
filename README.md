# Gokul — Personal Profile Website

A **handcrafted**, modern, and visually stunning personal portfolio website built with pure HTML, CSS, and JavaScript. No frameworks, no libraries—just clean, optimized code with attention to every detail.

## ✨ What Makes This Special

- **100% Handcrafted Code** — Every line written with intention, no AI-generated patterns
- **Zero Dependencies** — Pure vanilla HTML, CSS, and JavaScript
- **Performance Optimized** — Uses `requestAnimationFrame`, `IntersectionObserver`, and debouncing
- **Accessibility First** — ARIA labels, keyboard navigation, reduced motion support
- **Micro-interactions** — Subtle hover effects, magnetic buttons, ripple animations
- **Custom Animations** — Floating orbs, gradient pulses, parallax scrolling
- **Responsive Design** — Mobile-first approach, works flawlessly on all devices

## 🎨 Design Features

### Visual Elements
- **Animated Background Grid** — Subtle grid pattern for depth
- **Floating Gradient Orbs** — Three animated orbs creating ambient movement
- **Custom Scrollbar** — Styled to match the theme
- **Glassmorphism Navigation** — Blurred, translucent navbar
- **Gradient Text Effects** — Dynamic color transitions on headings

### Interactions
- **Magnetic Social Links** — Follow your cursor slightly
- **Button Ripple Effect** — Material Design-inspired click feedback
- **Card Hover Focus** — Other cards dim when hovering one
- **Timeline Markers Pulse** — Animated dots on scroll
- **Skill Tags Float** — Subtle movement on hover
- **Score Ring Animation** — Circular progress indicator loads on scroll

### Typography
- **Inter** — Clean, modern sans-serif for body text
- **Playfair Display** — Elegant serif for headings
- **Custom Letter Spacing** — Meticulously tuned for readability

## 📁 File Structure

```
Gokul-main/
├── index.html          # Semantic HTML5 structure
├── styles.css          # 1800+ lines of custom CSS
├── script.js           # Enhanced JavaScript interactions
├── README.md           # Documentation
└── (future assets)     # Images, icons, etc.
```

## 🚀 Quick Start

### Local Development

1. **Using VS Code Live Server** (Recommended)
   ```bash
   # Install Live Server extension, then:
   Right-click index.html → "Open with Live Server"
   ```

2. **Using Python**
   ```bash
   python -m http.server 8000
   # Visit: http://localhost:8000
   ```

3. **Using Node.js**
   ```bash
   npx serve
   ```

### Deployment

#### GitHub Pages

```bash
# Initialize repository
git init
git add .
git commit -m "Initial commit: Handcrafted portfolio"

# Push to GitHub
git remote add origin https://github.com/yourusername/gokul-portfolio.git
git branch -M main
git push -u origin main

# Enable GitHub Pages in repository Settings → Pages
```

#### Netlify

1. Drag and drop the folder to [Netlify Drop](https://app.netlify.com/drop)
2. Done! Your site is live.

#### Vercel

```bash
npm i -g vercel
vercel
```

## 🎯 Customization Guide

### Change Color Theme

Edit `styles.css` CSS variables:

```css
:root {
    --accent-primary: #3b82f6;      /* Main blue */
    --accent-secondary: #60a5fa;    /* Lighter blue */
    --accent-tertiary: #93c5fd;     /* Lightest blue */
    --bg-primary: #0a0e1a;          /* Darkest background */
    --bg-secondary: #0f1428;        /* Secondary background */
}
```

### Update Personal Info

In `index.html`:
- **Hero Section**: Name, location, roles
- **About Section**: Bio, achievements
- **Journey Section**: Timeline events
- **Leadership Section**: Cards with accomplishments
- **Contact Section**: Email, social links

### Add New Sections

```html
<section class="section" id="new-section">
    <div class="container">
        <h2 class="section-title">
            <span class="title-subtitle">Subtitle</span>
            Your Title
        </h2>
        <!-- Your content -->
    </div>
</section>
```

## 🔧 Performance Tips

1. **Lazy Load Images** (when you add them):
   ```html
   <img src="image.jpg" loading="lazy" alt="Description">
   ```

2. **Preconnect to External Domains**:
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   ```

3. **Minify for Production**:
   ```bash
   # Using terser for JS
   npx terser script.js -o script.min.js
   
   # Using cssnano for CSS
   npx cssnano styles.css styles.min.css
   ```

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |
| Mobile Safari | iOS 14+ |
| Chrome Mobile | Android 10+ |

## 📊 Performance Metrics

Target scores (measured with Lighthouse):

- **Performance**: 95-100
- **Accessibility**: 100
- **Best Practices**: 95-100
- **SEO**: 100

## 🎓 Learning Resources

This project demonstrates:

- CSS Grid & Flexbox layouts
- CSS Custom Properties (variables)
- CSS Animations & Transitions
- Intersection Observer API
- RequestAnimationFrame
- Event delegation
- Responsive design patterns
- Accessibility best practices

## 🤝 Contributing

Found a bug or want to suggest improvements? Feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

© 2025-2026 L. Gokul. All rights reserved.

This is a personal portfolio project. You may use it as inspiration for your own portfolio, but please don't copy it directly.

## 🙏 Acknowledgments

- **Fonts**: Google Fonts (Inter, Playfair Display)
- **Icons**: Custom SVG icons
- **Inspiration**: Modern web design trends, Apple's design language, linear.app

---

**Built with** ❤️ **and lots of coffee** by L. Gokul

*Last updated: March 2026*
