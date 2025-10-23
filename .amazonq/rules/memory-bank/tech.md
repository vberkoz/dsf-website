# Technology Stack & Development

## Core Technologies

### Frontend Framework
- **Next.js 15.3.2**: React framework with static site generation
- **React 18.2.0**: Component-based UI library
- **TypeScript 4.9.5**: Type-safe JavaScript development

### Styling & UI
- **Tailwind CSS 3.2.4**: Utility-first CSS framework
- **PostCSS 8.4.21**: CSS processing and optimization
- **Autoprefixer 10.4.13**: CSS vendor prefix automation
- **Custom Hover Plugin**: Media query-based hover states

### Maps & Geolocation
- **Leaflet.js 1.9.3**: Interactive map library
- **Leaflet GeoSearch 3.7.0**: Location search functionality
- **Leaflet MarkerCluster 1.5.3**: Map marker clustering

### Content Management
- **Gray Matter 4.0.3**: Markdown frontmatter parsing
- **Remark 14.0.2**: Markdown processing
- **Remark HTML 15.0.2**: Markdown to HTML conversion
- **Remark Breaks 3.0.2**: Line break handling

### Development Tools
- **ESLint 8.33.0**: Code linting and quality
- **Prettier 2.8.3**: Code formatting
- **Prettier Tailwind Plugin 0.2.2**: Tailwind class sorting

### Build & Deployment
- **Sharp 0.34.2**: Image optimization
- **AWS CDK**: Infrastructure as code
- **Static Export**: Pre-rendered static site generation

## Development Commands

### Local Development
```bash
npm run dev          # Start development server on port 3000
npm run home         # Start with custom host (192.168.1.102:3000)
```

### Production Build
```bash
npm run build        # Build and export static site
npm run start        # Start production server
npm run export       # Generate static export
```

### Code Quality
```bash
npm run lint         # Run ESLint checks
```

## Configuration Files

### Next.js Configuration
- **Static Export**: Configured for static site generation
- **Image Optimization**: Disabled for static export compatibility
- **Trailing Slash**: Enabled for consistent routing

### Tailwind Configuration
- **Dark Mode**: Class-based dark mode support
- **Content Paths**: Configured for pages, components, and app directories
- **Custom Plugins**: Hover state media query handling
- **Font Extensions**: Custom font family variables

### TypeScript Configuration
- Standard Next.js TypeScript setup
- Type definitions for Leaflet and related libraries

## Package Management
- **Primary**: npm with package-lock.json
- **Alternative**: pnpm with pnpm-lock.yaml
- **Node.js**: Latest LTS version recommended

## Infrastructure
- **AWS CDK Stack**: Infrastructure deployment automation
- **Static Hosting**: Optimized for CDN deployment
- **Asset Management**: Organized public asset structure