# Project Structure & Architecture

## Directory Organization

### Core Application Structure
```
/components/          # Reusable UI components
├── Menu/            # Navigation components
├── PostListItem/    # Blog post display variants
├── Slides/          # Slideshow components
└── *.tsx           # Individual component files

/data/               # Content management system
├── pagesets/        # Organized content by business sections
│   ├── AboutUs/     # Company information pages
│   ├── IndustryFocus/ # Industry-specific content
│   ├── JoinOurTeam/ # Career and recruitment pages
│   └── Solutions/   # Service offering pages
├── posts/           # Blog articles in markdown
└── data.ts          # Central data aggregation

/pages/              # Next.js routing structure
├── api/             # Backend API endpoints
├── blog/            # Blog routing and templates
├── leadership/      # Leadership section
├── submit-gig/      # Gig submission functionality
└── [slug].tsx       # Dynamic page routing

/public/             # Static assets
├── about/           # About section images
├── audio/           # Audio files
├── avatars/         # Profile images
├── blog/            # Blog-related media
├── home/            # Homepage assets
├── industry_focus/  # Industry imagery
├── join_our_team/   # Recruitment visuals
├── solutions/       # Service-related media
└── video/           # Video content
```

### Configuration & Build
```
/cdk/                # AWS CDK infrastructure code
/hooks/              # React custom hooks
/lib/                # Utility libraries
/styles/             # Global CSS styles
/.next/              # Next.js build output
```

## Core Components & Relationships

### Content Architecture
- **Pagesets**: Modular content organization by business function
- **Dynamic Routing**: Single `[slug].tsx` handles all pageset routing
- **Component Mapping**: Each content type maps to specific UI components
- **Data Aggregation**: Central `data.ts` file imports and organizes all pagesets

### Component Hierarchy
- **Layout**: Root layout component with navigation and footer
- **Section Components**: Specialized components for different content types (Hero, Slides, FAQ, etc.)
- **Form Components**: Contact, interview request, and gig submission forms
- **Interactive Elements**: Map integration, testimonials, and media players

### API Structure
- **Contact Endpoints**: Handle form submissions and client communications
- **Interview System**: Manage recruitment and scheduling workflows
- **Project Submissions**: Process gig and project requests

## Architectural Patterns

### Static Site Generation
- Next.js configured for static export (`output: 'export'`)
- Pre-rendered pages for optimal performance
- Client-side routing for dynamic interactions

### Content-First Design
- TypeScript-based content management
- Structured data organization by business domain
- Markdown support for blog content with frontmatter

### Component-Based Architecture
- Reusable UI components with consistent interfaces
- Separation of content and presentation logic
- Modular design enabling easy content updates

### Responsive & Accessible Design
- Mobile-first responsive design approach
- Dark mode support with class-based toggling
- Tailwind CSS for consistent styling patterns