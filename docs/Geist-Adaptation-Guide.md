# Adapting Geist Design System for Haevn

## Introduction

This document outlines how to adapt Geist's design tokens and components to align with Haevn's brand identity while maintaining the structural benefits of the Geist Design System. This adaptation strategy allows us to leverage Geist's robust component architecture and accessibility features while ensuring our product maintains Haevn's unique visual identity.

## Design Token Migration Strategy

### 1. Color System Migration

#### Mapping Geist's Color Scales to Haevn's Palette

| Geist Scale | Haevn Equivalent | Implementation Notes |
|-------------|------------------|----------------------|
| `gray` | Haevn Neutral Palette | Map Geist's 12-step gray scale to Haevn's 11-step neutral palette |
| `blue` | Ocean Blue (`#0A5E8C`) | Primary brand color, use as the base for generating a 12-step scale |
| `red` | Coral (`#FF4D5E`) | Error states and alerts |
| `amber` | Sunshine (`#FFD166`) | Warnings and notifications |
| `green` | Seafoam (`#7FDBCA`) | Success states |
| `teal` | Custom teal scale based on Seafoam | Secondary accent color |
| `purple` | Lavender (`#9381FF`) | Selected states |
| `pink` | Sunset Orange (`#FF7D54`) | Accent color for highlights and CTAs |
| `brand` | Ocean Blue (`#0A5E8C`) | Primary brand color |

#### Color Token Implementation

```json
{
  "colors": {
    "background1": "var(--color-sand)",
    "background2": "var(--color-gray-100)",
    
    "foreground1": "var(--color-charcoal)",
    "foreground2": "var(--color-gray-700)",
    
    "accent1": "var(--color-ocean-blue-9)",
    "accent2": "var(--color-sunset-orange-9)",
    
    "success": "var(--color-seafoam-9)",
    "warning": "var(--color-sunshine-9)",
    "error": "var(--color-coral-9)",
    "info": "var(--color-ocean-blue-7)"
  }
}
```

### 2. Typography Migration

#### Font Family Mapping

| Geist | Haevn | Implementation |
|-------|-------|----------------|
| Geist Sans | Montserrat | Primary font for headings |
| Geist Mono | Roboto Mono | Monospace font for code and technical information |
| N/A | Open Sans | Secondary font for body text |

#### Typography Scale Mapping

| Geist Class | Haevn Equivalent | CSS Variables |
|-------------|------------------|--------------|
| `text-heading-72` | Display (48px/56px) | `--font-display` |
| `text-heading-40` | H1 (40px/48px) | `--font-h1` |
| N/A | H2 (32px/40px) | `--font-h2` |
| N/A | H3 (24px/32px) | `--font-h3` |
| N/A | H4 (20px/28px) | `--font-h4` |
| N/A | H5 (16px/24px) | `--font-h5` |
| `text-copy-16` | Body (16px/24px) | `--font-body` |
| N/A | Body Large (18px/28px) | `--font-body-large` |
| `text-label-14` | Body Small (14px/20px) | `--font-body-small` |
| N/A | Caption (12px/16px) | `--font-caption` |

### 3. Spacing & Sizing

Haevn's spacing system is already based on a 4px grid, which aligns well with Geist's approach.

| Geist Scale | Haevn Equivalent | CSS Variable |
|-------------|------------------|-------------|
| 1 (4px) | xs (4px) | `--space-xs` |
| 2 (8px) | sm (8px) | `--space-sm` |
| 4 (16px) | md (16px) | `--space-md` |
| 6 (24px) | lg (24px) | `--space-lg` |
| 8 (32px) | xl (32px) | `--space-xl` |
| 10 (40px) | 2xl (48px) | `--space-2xl` |
| N/A | 3xl (64px) | `--space-3xl` |
| N/A | 4xl (96px) | `--space-4xl` |
| N/A | 5xl (128px) | `--space-5xl` |

### 4. Border Radius

| Geist | Haevn | CSS Variable |
|-------|-------|-------------|
| sm (6px) | sm (4px) | `--radius-sm` |
| md (12px) | md (8px) | `--radius-md` |
| lg (16px) | lg (16px) | `--radius-lg` |
| N/A | xl (24px) | `--radius-xl` |
| N/A | full (9999px) | `--radius-full` |

### 5. Shadows

| Geist | Haevn | CSS Variable |
|-------|-------|-------------|
| sm | sm | `--shadow-sm` |
| md | md | `--shadow-md` |
| lg | lg | `--shadow-lg` |
| N/A | xl | `--shadow-xl` |

### 6. Motion

| Geist | Haevn | CSS Variable |
|-------|-------|-------------|
| micro (120ms) | Standard (300ms) | `--motion-standard` |
| uiReveal (200ms) | Entrance (250ms) | `--motion-entrance` |
| page (320ms) | Exit (200ms) | `--motion-exit` |
| N/A | Emphasis (350ms) | `--motion-emphasis` |

## Component Adaptation Strategy

### 1. Core Component Mapping

| Geist Component | Haevn Equivalent | Adaptation Notes |
|-----------------|------------------|-----------------|
| Button | Button | Adapt styling to use Haevn's color tokens and border radius |
| Modal | Modal | Use Haevn's shadow and motion values |
| Select | Select | Apply Haevn's form styling guidelines |
| Tabs | Tab Bar | Maintain Geist's accessibility features with Haevn's visual styling |
| Badge | Badge | Use Haevn's color system for status indicators |
| Tooltip | Tooltip | Apply Haevn's shadow and border radius values |
| Input | Text Input | Maintain Geist's validation states with Haevn's styling |
| Grid | Layout Grid | Adapt to Haevn's responsive breakpoints |

### 2. Implementation Approach

#### CSS Variables Strategy

Create a CSS variables bridge file that maps Geist variables to Haevn variables:

```css
:root {
  /* Map Geist color variables to Haevn colors */
  --geist-background: var(--haevn-sand);
  --geist-foreground: var(--haevn-charcoal);
  --geist-primary: var(--haevn-ocean-blue);
  --geist-secondary: var(--haevn-sunset-orange);
  --geist-success: var(--haevn-seafoam);
  --geist-error: var(--haevn-coral);
  --geist-warning: var(--haevn-sunshine);
  
  /* Map Geist radius to Haevn radius */
  --geist-radius-sm: var(--haevn-radius-sm);
  --geist-radius-md: var(--haevn-radius-md);
  --geist-radius-lg: var(--haevn-radius-lg);
  
  /* Map Geist typography to Haevn typography */
  --geist-font-sans: var(--haevn-font-primary);
  --geist-font-mono: var(--haevn-font-monospace);
}
```

#### Component Theming Strategy

1. **Extend Geist Components**: Create Haevn-themed versions that wrap Geist components
2. **Theme Provider**: Use a theme provider to override Geist's default theme
3. **CSS Module Approach**: Create CSS modules that target Geist component classes

Example of extending a Geist Button component:

```tsx
import { Button as GeistButton } from '@geist-ui/core';
import styles from './HaevnButton.module.css';

export const Button = (props) => {
  return <GeistButton className={styles.haevnButton} {...props} />;
};
```

## Accessibility Preservation

When adapting Geist components, maintain their built-in accessibility features:

1. **Preserve ARIA attributes**: Ensure all ARIA roles, states, and properties are maintained
2. **Keep keyboard navigation**: Maintain tab order and keyboard interaction patterns
3. **Respect focus states**: Ensure focus indicators meet WCAG contrast requirements
4. **Maintain reduced motion settings**: Honor user preferences for reduced motion

## Design Token JSON Structure

Create a design token JSON file that follows Geist's structure but uses Haevn's values:

```json
{
  "colors": {
    "oceanBlue": {
      "oceanBlue1": "#F0FAFF",
      "oceanBlue2": "#D0F0FF",
      "oceanBlue3": "#B0E0FF",
      "oceanBlue4": "#90D0FF",
      "oceanBlue5": "#70C0FF",
      "oceanBlue6": "#50B0FF",
      "oceanBlue7": "#30A0FF",
      "oceanBlue8": "#1090FF",
      "oceanBlue9": "#0A5E8C",
      "oceanBlue10": "#084D73",
      "oceanBlue11": "#063C5A",
      "oceanBlue12": "#042B41"
    },
    "sunsetOrange": {
      "sunsetOrange1": "#FFF5F0",
      "sunsetOrange2": "#FFE5D0",
      "sunsetOrange3": "#FFD5B0",
      "sunsetOrange4": "#FFC590",
      "sunsetOrange5": "#FFB570",
      "sunsetOrange6": "#FFA550",
      "sunsetOrange7": "#FF9530",
      "sunsetOrange8": "#FF8510",
      "sunsetOrange9": "#FF7D54",
      "sunsetOrange10": "#E66B42",
      "sunsetOrange11": "#CC5930",
      "sunsetOrange12": "#B3471E"
    }
    // Additional color scales would be defined here
  },
  "radii": {
    "sm": 4,
    "md": 8,
    "lg": 16,
    "xl": 24,
    "full": 9999
  },
  "shadows": {
    "sm": "0 1px 2px rgba(0, 0, 0, 0.05)",
    "md": "0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)",
    "lg": "0 10px 15px rgba(0, 0, 0, 0.05), 0 4px 6px rgba(0, 0, 0, 0.05)",
    "xl": "0 20px 25px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.04)"
  },
  "typography": {
    "fontFamilies": {
      "primary": "Montserrat, sans-serif",
      "secondary": "Open Sans, sans-serif",
      "monospace": "Roboto Mono, monospace"
    },
    "fontSizes": {
      "display": ["48px", "56px"],
      "h1": ["40px", "48px"],
      "h2": ["32px", "40px"],
      "h3": ["24px", "32px"],
      "h4": ["20px", "28px"],
      "h5": ["16px", "24px"],
      "bodyLarge": ["18px", "28px"],
      "body": ["16px", "24px"],
      "bodySmall": ["14px", "20px"],
      "caption": ["12px", "16px"]
    },
    "fontWeights": {
      "light": 300,
      "regular": 400,
      "medium": 500,
      "semiBold": 600,
      "bold": 700
    }
  },
  "motion": {
    "standard": { "duration": 300, "ease": "0.4,0.0,0.2,1" },
    "entrance": { "duration": 250, "ease": "0.0,0.0,0.2,1" },
    "exit": { "duration": 200, "ease": "0.4,0.0,1,1" },
    "emphasis": { "duration": 350, "ease": "0.0,0.0,0.2,1.4" }
  }
}
```

## Implementation Roadmap

### Phase 1: Design Token Migration
1. Create Haevn-specific color scales based on Geist's structure
2. Map typography values to Haevn's font system
3. Align spacing, radius, and shadow values
4. Create CSS variable bridge file

### Phase 2: Core Component Adaptation
1. Button, Input, and Form controls
2. Navigation components (Tabs, Menu)
3. Feedback components (Toast, Modal)
4. Content components (Card, Table)

### Phase 3: Composite Component Development
1. Build Haevn-specific composite components on top of adapted Geist primitives
2. Implement specialized components like Booking Calendar and FlowState Video Player

### Phase 4: Documentation and Governance
1. Document component usage guidelines
2. Create Storybook examples
3. Establish contribution and review process

## Conclusion

By adapting Geist's design tokens to Haevn's brand identity, we can leverage the robust component architecture and accessibility features of Geist while maintaining Haevn's unique visual identity. This approach allows us to benefit from Geist's engineering excellence while preserving our brand consistency across all touchpoints.
