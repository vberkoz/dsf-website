# Development Guidelines & Standards

## Code Quality Standards

### TypeScript Usage Patterns
- **Strict Typing**: Use explicit type annotations for function parameters and return types
- **Interface Definitions**: Define clear interfaces for component props and data structures
- **Type Assertions**: Use `as` keyword for type casting (e.g., `event.target as HTMLFormElement`)
- **Optional Properties**: Mark optional fields with `?` in interfaces and form data

### File Extensions & Organization
- **TypeScript Components**: Use `.tsx` for React components with JSX
- **JavaScript Components**: Use `.jsx` for legacy components (Map.jsx pattern)
- **Data Files**: Use `.ts` for pure TypeScript data and configuration files
- **Consistent Naming**: Use PascalCase for component files and camelCase for utility files

### Import/Export Conventions
- **Default Exports**: Use default exports for React components
- **Named Exports**: Use named exports for data objects and utility functions
- **Path Aliases**: Use `@/` prefix for absolute imports from project root
- **Asset Imports**: Import static assets with explicit file extensions

## Component Architecture Patterns

### Component Structure Standards
- **Functional Components**: Use function declarations with explicit return types
- **Props Interface**: Define props interface above component when needed
- **Event Handlers**: Use async/await pattern for form submissions and API calls
- **Component Composition**: Break complex components into smaller, focused pieces

### Form Handling Patterns
```typescript
// Standard form submission pattern
const handleSubmit = async (event: FormEvent) => {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const data = {
    field: form.fieldName.value as string,
    // ... other fields
  };
  
  const response = await fetch("/api/endpoint", {
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  });
  
  const result = await response.json();
  alert(result.data);
};
```

### Dynamic Component Loading
- **SSR Disabled**: Use `dynamic` imports with `ssr: false` for client-only components
- **Map Components**: Leaflet components must be loaded dynamically to avoid SSR issues
- **Conditional Rendering**: Use dynamic imports for heavy or browser-specific components

## Styling & UI Standards

### Tailwind CSS Conventions
- **Responsive Design**: Use mobile-first approach with `sm:`, `md:`, `lg:`, `xl:` prefixes
- **Dark Mode**: Implement dual theming with `dark:` prefix for all color classes
- **Color Patterns**: 
  - Light mode: `bg-gray-100`, `text-gray-900`, `ring-green-600`
  - Dark mode: `dark:bg-gray-900`, `dark:text-gray-100`, `dark:ring-yellow-400`
- **Spacing**: Use consistent padding/margin patterns (`py-8`, `px-4`, `mb-8`)

### Component Styling Patterns
- **Grid Layouts**: Use CSS Grid for complex layouts (`grid grid-cols-1 lg:grid-cols-3`)
- **Flexbox**: Use Flexbox for simple alignments and spacing
- **Form Elements**: Consistent styling across inputs, selects, and textareas
- **Interactive States**: Include hover, focus, and active states for all interactive elements

### CSS Class Organization
- **Multi-line Classes**: Break long className strings across multiple lines
- **Logical Grouping**: Group related classes (layout, colors, spacing, states)
- **Consistent Indentation**: Use proper indentation for readability

## Data Management Patterns

### Content Structure
- **Pageset Organization**: Group related pages by business domain in `/data/pagesets/`
- **Central Aggregation**: Import all pagesets into central `data.ts` file
- **Structured Data**: Use consistent object structure across all pagesets
- **Default Values**: Provide default configurations (DefaultNextSteps pattern)

### Page Configuration Pattern
```typescript
export const PageName = {
  title: "Page Title",
  slug: "page-slug",
  pageset: "pageset-name",
  isPrimary: boolean,
  description1: ["Primary description"],
  description2: ["Secondary description"],
  image: imageSrc,
  sections: [
    {
      id: "ComponentType",
      // component-specific data
    }
  ]
};
```

### Static Asset Management
- **Image Imports**: Import images as modules for type safety and optimization
- **Asset Organization**: Organize assets by feature/section in `/public/` directory
- **WebP Format**: Prefer WebP format for images with fallbacks
- **Consistent Naming**: Use descriptive, kebab-case filenames

## API & Routing Standards

### Next.js Patterns
- **Dynamic Routing**: Use `[slug].tsx` for dynamic page generation
- **Static Generation**: Implement `getStaticPaths` and `getStaticProps` for SSG
- **API Routes**: Place API endpoints in `/pages/api/` directory
- **Component Mapping**: Use switch statements for section-to-component mapping

### Error Handling
- **Form Validation**: Implement client-side validation before submission
- **API Responses**: Handle both success and error responses consistently
- **User Feedback**: Provide immediate feedback through alerts or UI updates
- **Graceful Degradation**: Ensure functionality works without JavaScript when possible

## Performance & Optimization

### Code Splitting
- **Dynamic Imports**: Use dynamic imports for large or conditional components
- **Lazy Loading**: Implement lazy loading for non-critical components
- **Bundle Optimization**: Minimize bundle size through selective imports

### Asset Optimization
- **Image Optimization**: Use Next.js Image component where possible
- **Static Export**: Configure for static site generation when appropriate
- **CDN Ready**: Structure assets for CDN deployment

### Development Workflow
- **Consistent Formatting**: Use Prettier with Tailwind plugin for code formatting
- **Linting**: Follow ESLint rules for code quality
- **Type Checking**: Ensure TypeScript compilation without errors
- **Build Verification**: Test static export functionality before deployment