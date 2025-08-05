# Yepos - Professional Software Development Company Website

A modern, responsive website for Yepos, a leading global software development company. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🌍 **Multi-language Support** - English and Chinese
- 📱 **Responsive Design** - Works perfectly on all devices
- ⚡ **Performance Optimized** - Fast loading and smooth animations
- 🎨 **Modern UI/UX** - Professional and engaging design
- 🔧 **Technical Excellence** - Built with latest technologies

## Sections

1. **Hero Section** - Compelling introduction with call-to-action
2. **Company Introduction** - Professional company overview and statistics
3. **Technical Advantages** - Technology stack and development process
4. **Statistics** - Animated counters showing company achievements
5. **Core Goals** - Company objectives and value propositions
6. **Market Pain Points** - Industry challenges and solutions
7. **Core Values** - Company principles and beliefs
8. **Industry Solutions** - Sector-specific solutions
9. **Services** - Comprehensive service offerings
10. **Development Process** - Step-by-step project methodology
11. **Client Cases** - Success stories and testimonials
12. **Blog Featured** - Latest insights and updates
13. **Contact Form** - Easy communication channel

## Technology Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Internationalization:** next-i18next

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd YeposWebsite
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
YeposWebsite/
├── app/
│   ├── [lng]/           # Language-specific routes
│   ├── components/      # Reusable components
│   ├── i18n/           # Internationalization
│   └── globals.css     # Global styles
├── public/             # Static assets
└── package.json        # Dependencies and scripts
```

## Key Components

### ProfessionalCompanyIntro
Comprehensive company overview with statistics and core advantages.

### TechnicalAdvantages
Showcases technology stack and development methodologies.

### StatsSection
Animated statistics with counter effects.

### ServiceProcess
Six-step development process with visual indicators.

### ClientCases
Success stories and case studies from various industries.

## Customization

### Adding New Languages

1. Create new translation files in `app/i18n/locales/[language]/`
2. Update the language configuration in `app/i18n/settings.ts`

### Modifying Content

- Update translation files for text content
- Modify component props for dynamic content
- Adjust styling using Tailwind CSS classes

### Adding New Sections

1. Create new component in `app/components/`
2. Import and add to main page in `app/[lng]/page.tsx`
3. Add translations if needed

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
3. Deploy automatically on push to main branch

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## Performance Optimization

- Images are optimized using Next.js Image component
- Code splitting is handled automatically by Next.js
- CSS is purged in production builds
- Animations are optimized with Framer Motion

## SEO Features

- Meta tags for each page
- Open Graph and Twitter Card support
- Structured data markup
- Sitemap generation
- Robots.txt configuration

## Contact Information

For questions or support:
- Email: info@yepos.co.uk
- Phone: +44 755 000 6600
- Website: www.yepos.co.uk

## License

This project is proprietary software developed for Yepos.

---

*Built with ❤️ by the Yepos development team*
