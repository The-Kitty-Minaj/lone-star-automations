# Lone Star Automations - Website

A modern, responsive React website for Lone Star Automations featuring custom API automation solutions.

## Features

- ✅ Modern, professional design
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Fast performance optimized
- ✅ SEO friendly
- ✅ Easy to customize

## Project Structure

```
lone-star-site/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── Navigation.js
│   │   └── Navigation.css
│   ├── pages/
│   │   ├── Homepage.js
│   │   ├── Homepage.css
│   │   ├── About.js
│   │   └── About.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── .gitignore
└── README.md
```

## Getting Started Locally

### Prerequisites

- Node.js 14+ and npm installed on your computer

### Installation

1. Clone the repository:
```bash
git clone https://github.com/The-Kitty-Minaj/lone-star-automations.git
cd lone-star-automations
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to Vercel

### Option 1: Using Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts and your site will be live!

### Option 2: GitHub + Vercel Dashboard

1. Push to GitHub (see instructions below)
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Click Deploy
5. Your site is live!

## Push to GitHub

If you haven't already pushed to GitHub:

```bash
git init
git add .
git commit -m "Initial commit: Lone Star Automations website"
git branch -M main
git remote add origin https://github.com/The-Kitty-Minaj/lone-star-automations.git
git push -u origin main
```

## Customization

### Colors
Edit the color variables in `src/App.css`:
- `--primary-dark`: Main dark color
- `--primary-orange`: Brand orange
- `--text-primary`: Primary text color

### Content
- Homepage: `src/pages/Homepage.js`
- About page: `src/pages/About.js`
- Navigation: `src/components/Navigation.js`

### Images
Update image URLs in Homepage.js and About.js with your own images

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2026 Lone Star Automations. All rights reserved.

## Support

For issues or questions, reach out to: hello@lonestarautomations.com
