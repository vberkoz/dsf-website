# UI Component Library

A reusable UI component library extracted from the DSF website project. These components follow consistent design patterns and can be easily copied into other projects.

## Components

### Form Components

#### Input
Basic text input with label and validation styling.
```tsx
<Input name="email" label="Email Address" type="email" required />
```

#### Button
Customizable button with variants and sizes.
```tsx
<Button variant="primary" size="md" onClick={handleClick}>
  Submit
</Button>
```

#### Select
Dropdown select with options.
```tsx
<Select 
  name="country" 
  label="Country" 
  options={[
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" }
  ]} 
/>
```

#### Textarea
Multi-line text input.
```tsx
<Textarea name="message" label="Message" rows={5} />
```

### Layout Components

#### Card
Container with consistent padding and styling.
```tsx
<Card padding="lg">
  <h2>Card Title</h2>
  <p>Card content</p>
</Card>
```

#### Grid
Responsive grid layout.
```tsx
<Grid cols={3} gap="md">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>
```

#### Banner
Notification banner with variants.
```tsx
<Banner variant="success">
  Operation completed successfully!
</Banner>
```

### Utility Components

#### Pictogram
SVG icons with consistent styling.
```tsx
<Pictogram name="email" size={24} />
```

#### DateFormatter
Formatted date display.
```tsx
<DateFormatter dateString="2023-12-01" format="long" />
```

## Design System

### Colors
- **Primary**: Green (light) / Yellow (dark)
- **Background**: Gray-100 (light) / Gray-900 (dark)
- **Text**: Gray-900 (light) / Gray-100 (dark)
- **Muted**: Gray-600 (light) / Gray-400 (dark)

### Spacing
- **Small**: 4px (p-1, m-1)
- **Medium**: 8px (p-2, m-2) 
- **Large**: 16px (p-4, m-4)
- **Extra Large**: 32px (p-8, m-8)

### Typography
- Uses system font stack
- Responsive text sizing
- Consistent line heights

## Usage

1. Copy the desired components from this folder
2. Ensure Tailwind CSS is configured in your project
3. Import and use components as needed

## Dependencies

- React 18+
- Tailwind CSS 3+
- TypeScript (optional but recommended)

## Customization

All components use Tailwind classes and can be customized by:
1. Modifying the className props
2. Extending the component variants
3. Overriding Tailwind configuration