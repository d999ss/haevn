# Haevn Design Token Reference

This document provides a comprehensive reference for all design tokens in the Haevn design system, adapted from the Geist design system structure. These tokens serve as the foundation for all visual elements across Haevn's digital products.

## Color Tokens

### Primary Brand Colors

```json
{
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
}
```

### Semantic Colors

```json
{
  "semantic": {
    "success": "#06D6A0",
    "warning": "#FFD166",
    "error": "#EF476F",
    "info": "#118AB2"
  }
}
```

### Neutral Colors

```json
{
  "neutral": {
    "white": "#FFFFFF",
    "gray1": "#F7F9FA",
    "gray2": "#E1E5EA",
    "gray3": "#CBD2D9",
    "gray4": "#9AA5B1",
    "gray5": "#7B8794",
    "gray6": "#616E7C",
    "gray7": "#52606D",
    "gray8": "#3E4C59",
    "gray9": "#1F2933",
    "black": "#121212"
  }
}
```

### Secondary Colors

```json
{
  "seafoam": {
    "seafoam1": "#F0FFFA",
    "seafoam2": "#D0FFF0",
    "seafoam3": "#B0FFE6",
    "seafoam4": "#90FFDC",
    "seafoam5": "#70FFD2",
    "seafoam6": "#50FFC8",
    "seafoam7": "#30FFBE",
    "seafoam8": "#10FFB4",
    "seafoam9": "#7FDBCA",
    "seafoam10": "#66B3A3",
    "seafoam11": "#4D8A7C",
    "seafoam12": "#336255"
  },
  "coral": {
    "coral1": "#FFF0F2",
    "coral2": "#FFD0D6",
    "coral3": "#FFB0BA",
    "coral4": "#FF909E",
    "coral5": "#FF7082",
    "coral6": "#FF5066",
    "coral7": "#FF304A",
    "coral8": "#FF102E",
    "coral9": "#FF4D5E",
    "coral10": "#E63E4D",
    "coral11": "#CC2F3C",
    "coral12": "#B3202B"
  },
  "sunshine": {
    "sunshine1": "#FFFDF0",
    "sunshine2": "#FFF9D0",
    "sunshine3": "#FFF5B0",
    "sunshine4": "#FFF190",
    "sunshine5": "#FFED70",
    "sunshine6": "#FFE950",
    "sunshine7": "#FFE530",
    "sunshine8": "#FFE110",
    "sunshine9": "#FFD166",
    "sunshine10": "#E6BC5C",
    "sunshine11": "#CCA752",
    "sunshine12": "#B39247"
  },
  "lavender": {
    "lavender1": "#F9F7FF",
    "lavender2": "#EAE4FF",
    "lavender3": "#DBD1FF",
    "lavender4": "#CCBEFF",
    "lavender5": "#BDABFF",
    "lavender6": "#AE98FF",
    "lavender7": "#9F85FF",
    "lavender8": "#9072FF",
    "lavender9": "#9381FF",
    "lavender10": "#7A6BD6",
    "lavender11": "#6155AD",
    "lavender12": "#483F85"
  }
}
```

### Functional Color Mapping

```json
{
  "functional": {
    "background1": "var(--color-sand)",
    "background2": "var(--color-gray1)",
    "foreground1": "var(--color-charcoal)",
    "foreground2": "var(--color-gray7)",
    "accent1": "var(--color-oceanBlue9)",
    "accent2": "var(--color-sunsetOrange9)",
    "border1": "var(--color-gray3)",
    "border2": "var(--color-gray4)",
    "focus": "var(--color-oceanBlue8)"
  }
}
```

## Typography Tokens

### Font Families

```json
{
  "fontFamilies": {
    "primary": "Montserrat, sans-serif",
    "secondary": "Open Sans, sans-serif",
    "monospace": "Roboto Mono, monospace"
  }
}
```

### Font Sizes

```json
{
  "fontSizes": {
    "display": "48px",
    "h1": "40px",
    "h2": "32px",
    "h3": "24px",
    "h4": "20px",
    "h5": "16px",
    "bodyLarge": "18px",
    "body": "16px",
    "bodySmall": "14px",
    "caption": "12px"
  }
}
```

### Line Heights

```json
{
  "lineHeights": {
    "display": "56px",
    "h1": "48px",
    "h2": "40px",
    "h3": "32px",
    "h4": "28px",
    "h5": "24px",
    "bodyLarge": "28px",
    "body": "24px",
    "bodySmall": "20px",
    "caption": "16px"
  }
}
```

### Font Weights

```json
{
  "fontWeights": {
    "light": 300,
    "regular": 400,
    "medium": 500,
    "semiBold": 600,
    "bold": 700
  }
}
```

### Typography Scale

```json
{
  "typography": {
    "display": ["48px", "56px", 0, 600],
    "h1": ["40px", "48px", 0, 600],
    "h2": ["32px", "40px", 0, 600],
    "h3": ["24px", "32px", 0, 600],
    "h4": ["20px", "28px", 0, 600],
    "h5": ["16px", "24px", 0, 600],
    "bodyLarge": ["18px", "28px", 0, 400],
    "body": ["16px", "24px", 0, 400],
    "bodySmall": ["14px", "20px", 0, 400],
    "caption": ["12px", "16px", 0, 400]
  }
}
```

## Spacing Tokens

```json
{
  "spacing": {
    "xs": "4px",
    "sm": "8px",
    "md": "16px",
    "lg": "24px",
    "xl": "32px",
    "2xl": "48px",
    "3xl": "64px",
    "4xl": "96px",
    "5xl": "128px"
  }
}
```

## Border Radius Tokens

```json
{
  "radii": {
    "none": "0px",
    "sm": "4px",
    "md": "8px",
    "lg": "16px",
    "xl": "24px",
    "full": "9999px"
  }
}
```

## Shadow Tokens

```json
{
  "shadows": {
    "sm": "0 1px 2px rgba(0, 0, 0, 0.05)",
    "md": "0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)",
    "lg": "0 10px 15px rgba(0, 0, 0, 0.05), 0 4px 6px rgba(0, 0, 0, 0.05)",
    "xl": "0 20px 25px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.04)"
  }
}
```

## Z-Index Tokens

```json
{
  "zIndices": {
    "base": 0,
    "above": 10,
    "below": -10,
    "dropdown": 1000,
    "sticky": 1100,
    "fixed": 1200,
    "modal": 1300,
    "popover": 1400,
    "toast": 1500
  }
}
```

## Motion Tokens

```json
{
  "motion": {
    "standard": {
      "duration": 300,
      "ease": "cubic-bezier(0.4, 0.0, 0.2, 1)"
    },
    "entrance": {
      "duration": 250,
      "ease": "cubic-bezier(0.0, 0.0, 0.2, 1)"
    },
    "exit": {
      "duration": 200,
      "ease": "cubic-bezier(0.4, 0.0, 1, 1)"
    },
    "emphasis": {
      "duration": 350,
      "ease": "cubic-bezier(0.0, 0.0, 0.2, 1.4)"
    }
  }
}
```

## Breakpoint Tokens

```json
{
  "breakpoints": {
    "xs": "320px",
    "sm": "480px",
    "md": "768px",
    "lg": "1024px",
    "xl": "1280px",
    "2xl": "1440px"
  }
}
```

## Material (Surface) Tokens

```json
{
  "materials": {
    "base": {
      "radius": "var(--radius-md)",
      "bg": "var(--color-background1)",
      "shadow": "none"
    },
    "small": {
      "radius": "var(--radius-md)",
      "bg": "var(--color-background1)",
      "shadow": "var(--shadow-sm)"
    },
    "medium": {
      "radius": "var(--radius-lg)",
      "bg": "var(--color-background1)",
      "shadow": "var(--shadow-md)"
    },
    "large": {
      "radius": "var(--radius-lg)",
      "bg": "var(--color-background1)",
      "shadow": "var(--shadow-lg)"
    },
    "tooltip": {
      "radius": "var(--radius-md)",
      "bg": "var(--color-foreground1)",
      "shadow": "var(--shadow-md)"
    },
    "menu": {
      "radius": "var(--radius-lg)",
      "bg": "var(--color-background1)",
      "shadow": "var(--shadow-lg)"
    },
    "modal": {
      "radius": "var(--radius-lg)",
      "bg": "var(--color-background1)",
      "shadow": "var(--shadow-xl)"
    },
    "fullscreen": {
      "radius": "var(--radius-xl)",
      "bg": "var(--color-background1)",
      "shadow": "var(--shadow-xl)"
    }
  }
}
```

## Usage in CSS

These tokens are available as CSS variables:

```css
:root {
  /* Colors */
  --color-ocean-blue-9: #0A5E8C;
  --color-sunset-orange-9: #FF7D54;
  --color-sand: #F2E9D8;
  --color-charcoal: #2C3E50;
  
  /* Typography */
  --font-family-primary: Montserrat, sans-serif;
  --font-size-body: 16px;
  --line-height-body: 24px;
  --font-weight-regular: 400;
  
  /* Spacing */
  --space-md: 16px;
  
  /* Radius */
  --radius-md: 8px;
  
  /* Shadows */
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1);
  
  /* Motion */
  --motion-standard: 300ms cubic-bezier(0.4, 0.0, 0.2, 1);
}
```

## Usage in JavaScript/TypeScript

```typescript
import { tokens } from '@haevn/design-tokens';

// Access tokens in JavaScript
const primaryColor = tokens.colors.oceanBlue.oceanBlue9;
const bodyFontSize = tokens.fontSizes.body;
const mediumSpacing = tokens.spacing.md;
```

## Dark Mode Tokens

Dark mode tokens follow the same structure but with inverted lightness values while preserving hue and chroma:

```json
{
  "dark": {
    "background1": "#121212",
    "background2": "#1F2933",
    "foreground1": "#F7F9FA",
    "foreground2": "#CBD2D9"
  }
}
```

## Token Generation and Build Process

Design tokens are maintained in a central JSON file and processed through a build pipeline that:

1. Generates CSS variables
2. Creates TypeScript type definitions
3. Produces platform-specific formats (iOS, Android)
4. Syncs with Figma variables

The build process ensures consistency across all platforms and environments.
