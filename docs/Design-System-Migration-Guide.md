# Design System Migration Guide: Integrating Geist with Haevn

This guide provides a comprehensive roadmap for migrating Haevn's current design system to incorporate Geist's component architecture while maintaining Haevn's unique brand identity and visual language.

## Table of Contents

1. [Introduction](#introduction)
2. [Migration Strategy Overview](#migration-strategy-overview)
3. [Phase 1: Design Token Migration](#phase-1-design-token-migration)
4. [Phase 2: Component Migration](#phase-2-component-migration)
5. [Phase 3: Documentation and Testing](#phase-3-documentation-and-testing)
6. [Phase 4: Rollout and Adoption](#phase-4-rollout-and-adoption)
7. [Appendix: Migration Checklist](#appendix-migration-checklist)

## Introduction

This migration plan outlines how to integrate Geist's robust component architecture with Haevn's established design language. The goal is to leverage Geist's accessibility features, component patterns, and engineering excellence while preserving Haevn's unique visual identity and brand experience.

### Benefits of Migration

- **Improved Accessibility**: Leverage Geist's built-in accessibility features
- **Reduced Development Time**: Use pre-built components with proven patterns
- **Consistent Behavior**: Standardized component APIs and interactions
- **Better Documentation**: Comprehensive component documentation
- **Enhanced Testing**: Robust testing infrastructure for UI components

### Current State Assessment

Haevn's current design system includes:
- Design tokens (colors, typography, spacing, etc.)
- Core components (buttons, inputs, navigation, etc.)
- Composite components (booking calendar, session card, etc.)
- Documentation and guidelines

## Migration Strategy Overview

The migration will follow a phased approach:

1. **Design Token Migration**: Map Haevn's design tokens to Geist's token structure
2. **Component Migration**: Adapt Geist components to use Haevn's visual styling
3. **Documentation and Testing**: Create comprehensive documentation and test suite
4. **Rollout and Adoption**: Implement the new design system across all products

## Phase 1: Design Token Migration

### Step 1: Audit Existing Design Tokens

```bash
# Create a directory for the token migration
mkdir -p /Users/donnysmith/Desktop/haevn/design-system/tokens
```

Create a JSON file that maps Haevn's current tokens to Geist's token structure:

```json
// haevn-tokens-map.json
{
  "colors": {
    "haevn": {
      "oceanBlue": "#0A5E8C",
      "sunsetOrange": "#FF7D54",
      "sand": "#F2E9D8",
      "charcoal": "#2C3E50",
      "seafoam": "#7FDBCA",
      "coral": "#FF4D5E",
      "sunshine": "#FFD166",
      "lavender": "#9381FF"
    },
    "geist": {
      "primary": "var(--color-oceanBlue9)",
      "secondary": "var(--color-sunsetOrange9)",
      "success": "var(--color-seafoam9)",
      "warning": "var(--color-sunshine9)",
      "error": "var(--color-coral9)",
      "background": "var(--color-sand)",
      "foreground": "var(--color-charcoal)"
    }
  }
}
```

### Step 2: Generate Color Scales

For each of Haevn's primary colors, generate a 12-step scale following Geist's pattern:

```typescript
// color-scale-generator.ts
import chroma from 'chroma-js';

const generateColorScale = (baseColor: string, steps = 12) => {
  // Generate a scale from light to dark
  const lightScale = chroma.scale(['white', baseColor]).mode('lab').colors(steps/2);
  const darkScale = chroma.scale([baseColor, 'black']).mode('lab').colors(steps/2 + 1).slice(1);
  
  return [...lightScale, ...darkScale];
};

// Generate scales for each Haevn color
const oceanBlueScale = generateColorScale('#0A5E8C');
const sunsetOrangeScale = generateColorScale('#FF7D54');
// ... generate scales for other colors
```

### Step 3: Create CSS Variables

Create a CSS file that defines all the design tokens as CSS variables:

```css
/* haevn-design-tokens.css */
:root {
  /* Ocean Blue Scale */
  --color-oceanBlue1: #F0FAFF;
  --color-oceanBlue2: #D0F0FF;
  --color-oceanBlue3: #B0E0FF;
  --color-oceanBlue4: #90D0FF;
  --color-oceanBlue5: #70C0FF;
  --color-oceanBlue6: #50B0FF;
  --color-oceanBlue7: #30A0FF;
  --color-oceanBlue8: #1090FF;
  --color-oceanBlue9: #0A5E8C;
  --color-oceanBlue10: #084D73;
  --color-oceanBlue11: #063C5A;
  --color-oceanBlue12: #042B41;
  
  /* Sunset Orange Scale */
  --color-sunsetOrange1: #FFF5F0;
  --color-sunsetOrange2: #FFE5D0;
  /* ... other color scales ... */
  
  /* Typography */
  --font-family-primary: Montserrat, sans-serif;
  --font-family-secondary: Open Sans, sans-serif;
  --font-family-monospace: Roboto Mono, monospace;
  
  /* ... other design tokens ... */
}

/* Dark mode overrides */
@media (prefers-color-scheme: dark) {
  :root {
    --color-background1: var(--color-gray12);
    --color-background2: var(--color-gray11);
    --color-foreground1: var(--color-gray1);
    --color-foreground2: var(--color-gray3);
    /* ... other dark mode overrides ... */
  }
}
```

### Step 4: Create TypeScript Types

Create TypeScript types for the design tokens:

```typescript
// haevn-design-tokens.ts
export type ColorScale = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type ColorToken = 
  | `oceanBlue${ColorScale}`
  | `sunsetOrange${ColorScale}`
  | `seafoam${ColorScale}`
  | `coral${ColorScale}`
  | `sunshine${ColorScale}`
  | `lavender${ColorScale}`
  | `gray${ColorScale}`;

export type SpacingToken = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';

export type RadiusToken = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

export type ShadowToken = 'sm' | 'md' | 'lg' | 'xl';

export type FontSizeToken = 
  | 'display' 
  | 'h1' 
  | 'h2' 
  | 'h3' 
  | 'h4' 
  | 'h5' 
  | 'bodyLarge' 
  | 'body' 
  | 'bodySmall' 
  | 'caption';

export type FontWeightToken = 'light' | 'regular' | 'medium' | 'semiBold' | 'bold';

export const tokens = {
  colors: {
    oceanBlue: {
      oceanBlue1: '#F0FAFF',
      // ... other colors
    },
    // ... other color scales
  },
  // ... other token categories
};
```

## Phase 2: Component Migration

### Step 1: Install Dependencies

```bash
# Install Geist UI and related dependencies
npm install @geist-ui/core @geist-ui/icons
```

### Step 2: Create Theme Provider

Create a theme provider that overrides Geist's default theme with Haevn's design tokens:

```tsx
// haevn-theme.tsx
import { GeistProvider, CssBaseline } from '@geist-ui/core';
import { createTheme } from '@geist-ui/core';

// Import our CSS variables
import './haevn-design-tokens.css';

// Create a custom theme based on Haevn's design tokens
const haevnTheme = createTheme({
  type: 'custom',
  palette: {
    // Map Geist palette to Haevn colors
    primary: 'var(--color-oceanBlue9)',
    secondary: 'var(--color-gray7)',
    success: 'var(--color-seafoam9)',
    warning: 'var(--color-sunshine9)',
    error: 'var(--color-coral9)',
    background: 'var(--color-sand)',
    foreground: 'var(--color-charcoal)',
    // ... other palette mappings
  },
  // ... other theme overrides
});

export const HaevnThemeProvider = ({ children }) => (
  <GeistProvider theme={haevnTheme}>
    <CssBaseline />
    {children}
  </GeistProvider>
);
```

### Step 3: Create Component Wrappers

Create wrapper components that adapt Geist components to Haevn's design language:

```tsx
// components/Button.tsx
import { Button as GeistButton } from '@geist-ui/core';
import styles from './Button.module.css';

export interface ButtonProps extends React.ComponentProps<typeof GeistButton> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'text' | 'destructive';
}

export const Button = ({ variant = 'primary', ...props }: ButtonProps) => {
  return (
    <GeistButton
      className={`${styles.button} ${styles[`button-${variant}`]}`}
      {...props}
    />
  );
};
```

```css
/* Button.module.css */
.button {
  font-family: var(--font-family-primary);
  border-radius: var(--radius-md);
  transition: var(--motion-standard);
}

.button-primary {
  background-color: var(--color-oceanBlue9);
  color: white;
}

.button-primary:hover {
  background-color: var(--color-oceanBlue10);
}

/* ... other button variants ... */
```

### Step 4: Create Composite Components

Build Haevn-specific composite components using the adapted Geist components:

```tsx
// components/BookingCalendar.tsx
import { Card } from './Card';
import { Button } from './Button';
import { Select } from './Select';
import styles from './BookingCalendar.module.css';

export interface BookingCalendarProps {
  // ... props definition
}

export const BookingCalendar = (props: BookingCalendarProps) => {
  // ... component implementation
  
  return (
    <Card className={styles.calendar}>
      {/* Calendar implementation using adapted Geist components */}
    </Card>
  );
};
```

### Step 5: Create Component Inventory

Document all components and their status in the migration:

| Component | Status | Notes |
|-----------|--------|-------|
| Button | Migrated | All variants implemented |
| Input | In Progress | Need to add validation states |
| Select | Not Started | Scheduled for Sprint 3 |
| ... | ... | ... |

## Phase 3: Documentation and Testing

### Step 1: Set Up Storybook

```bash
# Install Storybook
npx storybook init
```

Create stories for each component:

```tsx
// Button.stories.tsx
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select', options: ['primary', 'secondary', 'tertiary', 'text', 'destructive'] },
    },
  },
};

export const Primary = () => <Button variant="primary">Primary Button</Button>;
export const Secondary = () => <Button variant="secondary">Secondary Button</Button>;
export const Tertiary = () => <Button variant="tertiary">Tertiary Button</Button>;
export const Text = () => <Button variant="text">Text Button</Button>;
export const Destructive = () => <Button variant="destructive">Destructive Button</Button>;
```

### Step 2: Implement Accessibility Testing

Add accessibility testing to the component library:

```tsx
// Button.test.tsx
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Button } from './Button';

expect.extend(toHaveNoViolations);

describe('Button', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Button>Test Button</Button>);
    expect(getByText('Test Button')).toBeInTheDocument();
  });
  
  it('should have no accessibility violations', async () => {
    const { container } = render(<Button>Accessible Button</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

### Step 3: Create Usage Documentation

Create comprehensive documentation for each component:

```markdown
# Button Component

The Button component is used to trigger actions or events.

## Usage

```tsx
import { Button } from '@haevn/design-system';

const MyComponent = () => (
  <Button variant="primary">Click Me</Button>
);
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'primary' \| 'secondary' \| 'tertiary' \| 'text' \| 'destructive' | 'primary' | The visual style of the button |
| size | 'small' \| 'medium' \| 'large' | 'medium' | The size of the button |
| disabled | boolean | false | Whether the button is disabled |
| loading | boolean | false | Whether the button is in a loading state |
| onClick | () => void | - | Function called when the button is clicked |

## Examples

### Primary Button

```tsx
<Button variant="primary">Primary Button</Button>
```

### Secondary Button

```tsx
<Button variant="secondary">Secondary Button</Button>
```
```

## Phase 4: Rollout and Adoption

### Step 1: Create Migration Scripts

Create scripts to help migrate from old components to new ones:

```bash
# Install codemod
npm install -g jscodeshift

# Create a codemod script
touch transform-buttons.js
```

```javascript
// transform-buttons.js
export default function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);
  
  // Find old button components
  return root
    .find(j.JSXElement, {
      openingElement: { name: { name: 'OldButton' } }
    })
    .replaceWith(path => {
      const { node } = path;
      // Transform to new Button component
      return j.jsxElement(
        j.jsxOpeningElement(j.jsxIdentifier('Button'), node.openingElement.attributes),
        j.jsxClosingElement(j.jsxIdentifier('Button')),
        node.children
      );
    })
    .toSource();
}
```

### Step 2: Create Adoption Plan

Create a phased adoption plan for teams:

1. **Phase 1**: Core components (Button, Input, Select)
2. **Phase 2**: Layout components (Grid, Card, Table)
3. **Phase 3**: Feedback components (Modal, Toast, Alert)
4. **Phase 4**: Navigation components (Tabs, Pagination, Breadcrumbs)

### Step 3: Update CI/CD Pipeline

Update the CI/CD pipeline to include design system checks:

```yaml
# .github/workflows/design-system.yml
name: Design System Checks

on:
  pull_request:
    paths:
      - 'src/components/**'
      - 'src/design-tokens/**'

jobs:
  design-system-checks:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '16'
      - run: npm ci
      - run: npm run lint:design-system
      - run: npm run test:design-system
      - run: npm run build-storybook
      - run: npm run chromatic
```

### Step 4: Monitor Adoption and Gather Feedback

Create a dashboard to track adoption across products:

| Product | Components Migrated | Progress |
|---------|---------------------|----------|
| Web App | 12/20 | 60% |
| Mobile App | 8/20 | 40% |
| Admin Portal | 4/20 | 20% |

## Appendix: Migration Checklist

### Design Token Migration
- [ ] Audit existing design tokens
- [ ] Generate color scales
- [ ] Create CSS variables
- [ ] Create TypeScript types
- [ ] Test token implementation

### Component Migration
- [ ] Install dependencies
- [ ] Create theme provider
- [ ] Migrate core components
- [ ] Migrate composite components
- [ ] Create component inventory

### Documentation and Testing
- [ ] Set up Storybook
- [ ] Implement accessibility testing
- [ ] Create usage documentation
- [ ] Add visual regression tests
- [ ] Document component APIs

### Rollout and Adoption
- [ ] Create migration scripts
- [ ] Create adoption plan
- [ ] Update CI/CD pipeline
- [ ] Monitor adoption and gather feedback
- [ ] Provide training and support
