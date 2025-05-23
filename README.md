
# Distributed Sales Force Website

## Overview
This is a Next.js website for Distributed Sales Force, a virtual organization offering on-demand sales and marketing solutions. The website showcases the company's services, industry focus areas, team structure, and provides information for potential clients and job seekers.

## Project Structure

### Technology Stack
- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Maps**: Leaflet.js
- **Content**: Static content managed through TypeScript files

### Key Directories
- `/components`: Reusable UI components
- `/data`: Content organization and structure
  - `/pagesets`: Organized content by sections (AboutUs, Solutions, IndustryFocus, etc.)
  - `/posts`: Blog content in markdown format
- `/pages`: Next.js page routes
- `/public`: Static assets (images, SVGs, audio, video)
- `/styles`: Global CSS styles

### Main Features
- Responsive design with dark mode support
- Dynamic page generation based on content structure
- Blog functionality with markdown support
- Interactive map component
- Contact and interview request forms
- Testimonials section

## Content Structure
The website content is organized into several main sections:

1. **About Us**: Company history, mission, and values
2. **Solutions**: Sales prospecting, lead generation, and channel development solutions
3. **Industry Focus**: Specialized solutions for different industries
4. **Join Our Team**: Career opportunities and self-employment programs
5. **Leadership**: Information about company leadership
6. **Valuora Strategy**: Exit strategies and capital raising services
7. **Blog**: Articles and insights

## Getting Started

### Prerequisites
- Node.js (latest LTS version recommended)
- npm or pnpm

### Installation
```bash
# Clone the repository
git clone https://github.com/vberkoz/vogroup.git
cd vogroup

# Install dependencies
npm install
# or
pnpm install
```

### Development
```bash
# Start development server
npm run dev
# or
pnpm dev

# Start development server with specific host (for local network access)
npm run home
```

### Building for Production
```bash
# Build the project
npm run build
# or
pnpm build

# Export as static site
npm run export
# or
pnpm export
```

### Running in Production
```bash
# Start production server
npm run start
# or
pnpm start
```

## Project Customization

### Adding New Pages
1. Create a new TypeScript file in the appropriate `/data/pagesets/` directory
2. Follow the existing page structure pattern
3. Import and add the new page to the `Pages` array in `/data/data.ts`

### Modifying Components
The website uses a component-based architecture where each section type (Hero, Slides, etc.) is defined as a reusable component. Modify these components in the `/components` directory to change the appearance and behavior of the website.

### Styling
The project uses Tailwind CSS for styling. Modify the `tailwind.config.js` file to customize the theme, colors, and other design elements.

## License
Private - All rights reserved