# Design System

## Overview

The Haevn Design System is a comprehensive collection of design standards, components, and patterns that ensure consistency, accessibility, and quality across all Haevn digital products. This living system serves as the single source of truth for both designers and developers, enabling efficient collaboration and scalable product development.

## Core Principles

* **Consistency**: Unified experience across all touchpoints and platforms
* **Accessibility**: Inclusive design that works for all users regardless of ability
* **Efficiency**: Reusable components that accelerate design and development
* **Flexibility**: Adaptable system that can evolve with product needs
* **Quality**: High standards for visual design, interaction, and technical implementation

## Design Tokens

### Color System

* **Primary Palette**
  * Ocean Blue (`#0A5E8C`): Primary brand color, used for key actions and navigation
  * Sunset Orange (`#FF7D54`): Accent color for highlights and calls to action
  * Sand (`#F2E9D8`): Background color for content areas
  * Charcoal (`#2C3E50`): Primary text color

* **Secondary Palette**
  * Seafoam (`#7FDBCA`): Secondary accent for success states
  * Coral (`#FF4D5E`): Used for errors and alerts
  * Sunshine (`#FFD166`): Used for warnings and notifications
  * Lavender (`#9381FF`): Used for selected states

* **Neutral Palette**
  * White (`#FFFFFF`)
  * Gray-100 (`#F7F9FA`)
  * Gray-200 (`#E1E5EA`)
  * Gray-300 (`#CBD2D9`)
  * Gray-400 (`#9AA5B1`)
  * Gray-500 (`#7B8794`)
  * Gray-600 (`#616E7C`)
  * Gray-700 (`#52606D`)
  * Gray-800 (`#3E4C59`)
  * Gray-900 (`#1F2933`)
  * Black (`#121212`)

* **Semantic Colors**
  * Success (`#06D6A0`)
  * Warning (`#FFD166`)
  * Error (`#EF476F`)
  * Info (`#118AB2`)

### Typography

* **Font Families**
  * Primary: Montserrat (Headings)
  * Secondary: Open Sans (Body text)
  * Monospace: Roboto Mono (Code, technical information)

* **Type Scale**
  * Display: 48px/56px
  * H1: 40px/48px
  * H2: 32px/40px
  * H3: 24px/32px
  * H4: 20px/28px
  * H5: 16px/24px
  * Body Large: 18px/28px
  * Body: 16px/24px
  * Body Small: 14px/20px
  * Caption: 12px/16px

* **Font Weights**
  * Light: 300
  * Regular: 400
  * Medium: 500
  * SemiBold: 600
  * Bold: 700

### Spacing

* **Base Unit**: 4px
* **Spacing Scale**
  * xs: 4px
  * sm: 8px
  * md: 16px
  * lg: 24px
  * xl: 32px
  * 2xl: 48px
  * 3xl: 64px
  * 4xl: 96px
  * 5xl: 128px

### Border Radius

* **Radius Scale**
  * none: 0px
  * sm: 4px
  * md: 8px
  * lg: 16px
  * xl: 24px
  * full: 9999px

### Shadows

* **Shadow Scale**
  * sm: `0 1px 2px rgba(0, 0, 0, 0.05)`
  * md: `0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)`
  * lg: `0 10px 15px rgba(0, 0, 0, 0.05), 0 4px 6px rgba(0, 0, 0, 0.05)`
  * xl: `0 20px 25px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.04)`

### Z-Index

* **Layer Scale**
  * base: 0
  * above: 10
  * below: -10
  * dropdown: 1000
  * sticky: 1100
  * fixed: 1200
  * modal: 1300
  * popover: 1400
  * toast: 1500

## Component Library

### Core Components

* **Buttons**
  * Primary
  * Secondary
  * Tertiary
  * Icon
  * Text
  * Destructive
  * States: Default, Hover, Active, Focused, Disabled, Loading

* **Inputs**
  * Text Input
  * Text Area
  * Select
  * Checkbox
  * Radio
  * Toggle
  * Date Picker
  * Time Picker
  * Search
  * States: Default, Focused, Filled, Error, Disabled

* **Navigation**
  * Tab Bar
  * Navigation Bar
  * Sidebar
  * Breadcrumbs
  * Pagination
  * Stepper

* **Feedback**
  * Toast
  * Alert
  * Modal
  * Dialog
  * Progress Bar
  * Spinner
  * Skeleton Loader

* **Content**
  * Card
  * List
  * Table
  * Avatar
  * Badge
  * Tag
  * Tooltip
  * Accordion
  * Carousel

### Composite Components

* **Booking Calendar**
* **Session Card**
* **Crew Member List**
* **FlowState Video Player**
* **Product Card**
* **Menu Item Card**
* **Membership Tier Comparison**
* **Referral Share Card**
* **Activity Feed Item**

## Patterns

### Navigation Patterns

* **Tab Navigation**: Primary navigation between main sections
* **Hierarchical Navigation**: Drill-down through content levels
* **Modal Navigation**: Temporary focused tasks
* **Search-driven Navigation**: Finding content across the app

### Form Patterns

* **Progressive Disclosure**: Revealing form fields as needed
* **Inline Validation**: Real-time feedback on input
* **Smart Defaults**: Context-aware pre-filled values
* **Error Recovery**: Clear guidance on fixing input errors

### Loading Patterns

* **Skeleton Screens**: Content structure placeholders during loading
* **Progressive Loading**: Loading critical content first
* **Background Loading**: Non-blocking data fetching
* **Pull to Refresh**: User-initiated content updates

### Empty States

* **First Use**: Guidance for new users
* **Zero Data**: Friendly messaging when no content exists
* **Error States**: Helpful recovery options
* **Search No Results**: Suggestions for alternative searches

## Responsive Design

### Breakpoints

* **Mobile Small**: ≤ 320px
* **Mobile**: 321px - 480px
* **Tablet Small**: 481px - 767px
* **Tablet**: 768px - 1023px
* **Desktop Small**: 1024px - 1279px
* **Desktop**: 1280px - 1439px
* **Desktop Large**: ≥ 1440px

### Layout Grid

* **Base Grid**: 4-column mobile, 8-column tablet, 12-column desktop
* **Gutters**: 16px mobile, 24px tablet, 32px desktop
* **Margins**: 16px mobile, 32px tablet, 64px desktop

### Responsive Patterns

* **Stack to Grid**: Vertical on mobile, grid on larger screens
* **Priority Content**: Different content hierarchy by screen size
* **Progressive Disclosure**: Show/hide elements based on screen size
* **Touch Targets**: Minimum 44x44px for all interactive elements

## Accessibility Standards

### Compliance Targets

* **WCAG 2.2 AA**: Minimum compliance level for all interfaces
* **Screen Reader Support**: Full functionality with VoiceOver and NVDA
* **Keyboard Navigation**: Complete usability without mouse/touch

### Color Contrast

* **Text**: Minimum 4.5:1 for normal text, 3:1 for large text
* **UI Components**: Minimum 3:1 for interactive elements
* **Focus States**: High visibility focus indicators

### Semantic Markup

* **Heading Hierarchy**: Proper H1-H6 structure
* **ARIA Attributes**: Appropriate use of roles and states
* **Form Labels**: Explicit labeling of all form controls
* **Alt Text**: Descriptive alternatives for all images

## Motion & Animation

### Timing Functions

* **Standard**: Cubic-bezier(0.4, 0.0, 0.2, 1) - 300ms
* **Entrance**: Cubic-bezier(0.0, 0.0, 0.2, 1) - 250ms
* **Exit**: Cubic-bezier(0.4, 0.0, 1, 1) - 200ms
* **Emphasis**: Cubic-bezier(0.0, 0.0, 0.2, 1.4) - 350ms

### Motion Principles

* **Responsive**: Quick feedback to user interaction
* **Natural**: Physics-based motion that feels organic
* **Purposeful**: Animation that clarifies relationships
* **Attention-guiding**: Directing focus to important elements

### Animation Patterns

* **Page Transitions**: Smooth movement between screens
* **State Changes**: Clear indication of component state updates
* **Loading Indicators**: Engaging but unobtrusive loading states
* **Micro-interactions**: Subtle feedback for user actions

## Implementation

### Design Tools

* **Figma**: Primary design and prototyping tool
* **Component Library**: Maintained as Figma component library
* **Design Token Management**: Figma Variables + Tokens Studio

### Development Implementation

* **iOS**: SwiftUI component library with design token integration
* **Web**: React component library with Tailwind CSS and Radix UI
* **Token Pipeline**: Design tokens exported to platform-specific formats

### Documentation

* **Storybook**: Interactive component documentation for web
* **SwiftUI Previews**: Component previews for iOS
* **Usage Guidelines**: Context and best practices for each component
* **Accessibility Notes**: Specific considerations for inclusive implementation

## Governance

### Design Review Process

* **Component Proposals**: Process for suggesting new components
* **Design Reviews**: Regular reviews of new designs against system standards
* **Accessibility Audits**: Regular testing with assistive technologies
* **User Testing**: Validation of system components with real users

### Contribution Model

* **Core Team**: Dedicated design system maintainers
* **Contributors**: Product designers who propose changes
* **Review Board**: Decision-making body for system changes
* **Release Schedule**: Regular updates and versioning

### Version Control

* **Semantic Versioning**: Major.Minor.Patch format
* **Changelog**: Detailed documentation of all changes
* **Deprecation Policy**: Process for phasing out components
* **Migration Guides**: Instructions for updating to new versions

## Future Roadmap

* **Dark Mode**: Complete dark theme implementation
* **Animation Library**: Expanded motion patterns and components
* **Voice UI Guidelines**: Standards for voice interactions
* **Haptic Feedback Patterns**: Consistent tactile feedback
* **AR/VR Extensions**: Design standards for immersive experiences
* **Internationalization**: Enhanced support for global markets
