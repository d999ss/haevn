# Component Adaptation Guide: Geist to Haevn

This guide provides detailed instructions for adapting Geist UI components to match Haevn's design system while preserving accessibility features and component functionality.

## Table of Contents

1. [Introduction](#introduction)
2. [Component Adaptation Strategy](#component-adaptation-strategy)
3. [Core Components](#core-components)
   - [Button](#button)
   - [Input](#input)
   - [Select](#select)
   - [Modal](#modal)
   - [Tabs](#tabs)
   - [Card](#card)
4. [Accessibility Preservation](#accessibility-preservation)
5. [Implementation Examples](#implementation-examples)
6. [Testing Guidelines](#testing-guidelines)

## Introduction

This guide outlines how to adapt Geist UI components to match Haevn's design language while maintaining the robust accessibility and functionality of the original components. The approach focuses on:

- Using Haevn's design tokens for visual styling
- Preserving Geist's component architecture and accessibility features
- Ensuring consistent behavior across all components
- Maintaining type safety and proper prop interfaces

## Component Adaptation Strategy

There are three primary strategies for adapting Geist components to Haevn's design system:

### 1. Theme Provider Approach

Use Geist's theme provider to override default styles with Haevn's design tokens:

```tsx
import { GeistProvider, CssBaseline } from '@geist-ui/core';
import { haevnTheme } from './haevn-theme';

const App = () => (
  <GeistProvider theme={haevnTheme}>
    <CssBaseline />
    <YourApp />
  </GeistProvider>
);
```

### 2. Component Wrapper Approach

Create Haevn-specific wrappers around Geist components:

```tsx
import { Button as GeistButton } from '@geist-ui/core';
import styles from './HaevnButton.module.css';

export interface ButtonProps extends React.ComponentProps<typeof GeistButton> {
  // Add any Haevn-specific props here
}

export const Button = (props: ButtonProps) => {
  return <GeistButton className={styles.haevnButton} {...props} />;
};
```

### 3. CSS Module Approach

Use CSS modules to override Geist component styles:

```css
/* HaevnButton.module.css */
.haevnButton {
  background-color: var(--color-ocean-blue-9);
  border-radius: var(--radius-md);
  font-family: var(--font-family-primary);
}

.haevnButton:hover {
  background-color: var(--color-ocean-blue-10);
}
```

## Core Components

### Button

#### Original Geist Button Features

- Types: `default`, `secondary`, `success`, `warning`, `error`, `ghost`
- States: `loading`, `disabled`, `shadow`
- Sizes: `mini`, `small`, `medium`, `large`

#### Haevn Button Adaptation

```tsx
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
  font-weight: var(--font-weight-semiBold);
  border-radius: var(--radius-md);
  transition: var(--motion-standard);
}

.button-primary {
  background-color: var(--color-ocean-blue-9);
  color: white;
}

.button-primary:hover {
  background-color: var(--color-ocean-blue-10);
}

.button-secondary {
  background-color: transparent;
  color: var(--color-ocean-blue-9);
  border: 1px solid var(--color-ocean-blue-9);
}

.button-secondary:hover {
  background-color: var(--color-ocean-blue-1);
}

.button-tertiary {
  background-color: var(--color-gray-2);
  color: var(--color-charcoal);
}

.button-text {
  background-color: transparent;
  color: var(--color-ocean-blue-9);
  padding: 0;
}

.button-destructive {
  background-color: var(--color-coral-9);
  color: white;
}
```

### Input

#### Original Geist Input Features

- Types: `default`, `secondary`, `success`, `warning`, `error`
- States: `disabled`, `readOnly`
- Variants: `text`, `password`, `search`

#### Haevn Input Adaptation

```tsx
import { Input as GeistInput } from '@geist-ui/core';
import styles from './Input.module.css';

export interface InputProps extends React.ComponentProps<typeof GeistInput> {
  status?: 'default' | 'error' | 'success';
}

export const Input = ({ status = 'default', ...props }: InputProps) => {
  return (
    <GeistInput
      className={`${styles.input} ${styles[`input-${status}`]}`}
      {...props}
    />
  );
};
```

```css
/* Input.module.css */
.input {
  font-family: var(--font-family-secondary);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-gray-3);
  transition: var(--motion-standard);
}

.input:focus {
  border-color: var(--color-ocean-blue-9);
  box-shadow: 0 0 0 2px var(--color-ocean-blue-3);
}

.input-error {
  border-color: var(--color-coral-9);
}

.input-error:focus {
  border-color: var(--color-coral-9);
  box-shadow: 0 0 0 2px var(--color-coral-3);
}

.input-success {
  border-color: var(--color-seafoam-9);
}

.input-success:focus {
  border-color: var(--color-seafoam-9);
  box-shadow: 0 0 0 2px var(--color-seafoam-3);
}
```

### Select

#### Original Geist Select Features

- Multiple selection
- Disabled state
- Clearable option
- Custom dropdown rendering

#### Haevn Select Adaptation

```tsx
import { Select as GeistSelect } from '@geist-ui/core';
import styles from './Select.module.css';

export interface SelectProps extends React.ComponentProps<typeof GeistSelect> {
  // Add any Haevn-specific props here
}

export const Select = (props: SelectProps) => {
  return <GeistSelect className={styles.select} {...props} />;
};

// Also export the Option component
export const Option = GeistSelect.Option;
```

```css
/* Select.module.css */
.select {
  font-family: var(--font-family-secondary);
  border-radius: var(--radius-md);
}

.select :global(.select-dropdown) {
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
}

.select :global(.select-option) {
  font-family: var(--font-family-secondary);
}

.select :global(.select-option-active) {
  background-color: var(--color-ocean-blue-2);
  color: var(--color-ocean-blue-9);
}
```

### Modal

#### Original Geist Modal Features

- Visibility control
- Width customization
- Action buttons
- Close handler

#### Haevn Modal Adaptation

```tsx
import { Modal as GeistModal } from '@geist-ui/core';
import styles from './Modal.module.css';

export interface ModalProps extends React.ComponentProps<typeof GeistModal> {
  // Add any Haevn-specific props here
}

export const Modal = (props: ModalProps) => {
  return <GeistModal className={styles.modal} {...props} />;
};

// Export sub-components
export const ModalTitle = GeistModal.Title;
export const ModalSubtitle = GeistModal.Subtitle;
export const ModalContent = GeistModal.Content;
export const ModalAction = GeistModal.Action;
```

```css
/* Modal.module.css */
.modal {
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
}

.modal :global(.modal-title) {
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-semiBold);
}

.modal :global(.modal-content) {
  font-family: var(--font-family-secondary);
}
```

### Tabs

#### Original Geist Tabs Features

- Active tab control
- Hide divider option
- Hide border option
- Disabled state

#### Haevn Tabs Adaptation

```tsx
import { Tabs as GeistTabs } from '@geist-ui/core';
import styles from './Tabs.module.css';

export interface TabsProps extends React.ComponentProps<typeof GeistTabs> {
  // Add any Haevn-specific props here
}

export const Tabs = (props: TabsProps) => {
  return <GeistTabs className={styles.tabs} {...props} />;
};

// Export Tab component
export const Tab = GeistTabs.Tab;
```

```css
/* Tabs.module.css */
.tabs {
  font-family: var(--font-family-primary);
}

.tabs :global(.tabs-header) {
  border-bottom-color: var(--color-gray-3);
}

.tabs :global(.tabs-tab) {
  color: var(--color-gray-7);
  transition: var(--motion-standard);
}

.tabs :global(.tabs-tab-active) {
  color: var(--color-ocean-blue-9);
}

.tabs :global(.tabs-highlight) {
  background-color: var(--color-ocean-blue-9);
}
```

### Card

#### Original Geist Card Features

- Shadow option
- Hoverable state
- Custom width

#### Haevn Card Adaptation

```tsx
import { Card as GeistCard } from '@geist-ui/core';
import styles from './Card.module.css';

export interface CardProps extends React.ComponentProps<typeof GeistCard> {
  elevation?: 'small' | 'medium' | 'large';
}

export const Card = ({ elevation = 'small', ...props }: CardProps) => {
  return (
    <GeistCard
      className={`${styles.card} ${styles[`card-${elevation}`]}`}
      {...props}
    />
  );
};
```

```css
/* Card.module.css */
.card {
  font-family: var(--font-family-secondary);
  border-radius: var(--radius-lg);
  border: none;
  transition: var(--motion-standard);
}

.card-small {
  box-shadow: var(--shadow-sm);
}

.card-medium {
  box-shadow: var(--shadow-md);
}

.card-large {
  box-shadow: var(--shadow-lg);
}
```

## Accessibility Preservation

When adapting Geist components, it's crucial to maintain their built-in accessibility features:

### ARIA Attributes

Preserve all ARIA roles, states, and properties:

```tsx
// Preserve aria-* attributes when extending components
export const Button = (props: ButtonProps) => {
  // Ensure all aria-* props are passed through
  return <GeistButton {...props} />;
};
```

### Keyboard Navigation

Maintain keyboard navigation patterns:

```tsx
// For custom interactive components, ensure keyboard handling is preserved
export const CustomTabs = (props: CustomTabsProps) => {
  // Preserve keyboard event handlers
  return <GeistTabs onKeyDown={handleKeyDown} {...props} />;
};
```

### Focus States

Ensure focus indicators meet WCAG contrast requirements:

```css
/* Focus styles for interactive elements */
.button:focus-visible {
  outline: 2px solid var(--color-ocean-blue-9);
  outline-offset: 2px;
}
```

### Reduced Motion

Honor user preferences for reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  .button {
    transition: none;
  }
}
```

## Implementation Examples

### Theme Provider Implementation

```tsx
// haevn-theme.ts
import { Themes } from '@geist-ui/core';

export const haevnTheme = Themes.createFromLight({
  type: 'haevn',
  font: {
    sans: 'var(--font-family-primary)',
    mono: 'var(--font-family-monospace)',
  },
  palette: {
    accents_1: 'var(--color-gray-1)',
    accents_2: 'var(--color-gray-2)',
    accents_3: 'var(--color-gray-3)',
    accents_4: 'var(--color-gray-4)',
    accents_5: 'var(--color-gray-5)',
    accents_6: 'var(--color-gray-6)',
    accents_7: 'var(--color-gray-7)',
    accents_8: 'var(--color-gray-8)',
    background: 'var(--color-sand)',
    foreground: 'var(--color-charcoal)',
    selection: 'var(--color-ocean-blue-3)',
    secondary: 'var(--color-gray-7)',
    success: 'var(--color-seafoam-9)',
    warning: 'var(--color-sunshine-9)',
    error: 'var(--color-coral-9)',
    primary: 'var(--color-ocean-blue-9)',
  },
  expressiveness: {
    dropdownBoxShadow: 'var(--shadow-md)',
    shadowSmall: 'var(--shadow-sm)',
    shadowMedium: 'var(--shadow-md)',
    shadowLarge: 'var(--shadow-lg)',
    portalOpacity: 0.75,
  },
  layout: {
    gap: 'var(--space-md)',
    gapNegative: 'calc(var(--space-md) * -1)',
    gapHalf: 'calc(var(--space-md) / 2)',
    gapHalfNegative: 'calc(var(--space-md) / -2)',
    gapQuarter: 'calc(var(--space-md) / 4)',
    gapQuarterNegative: 'calc(var(--space-md) / -4)',
    pageMargin: 'var(--space-lg)',
    pageWidth: '750pt',
    pageWidthWithMargin: 'calc(750pt + var(--space-lg) * 2)',
    breakpointMobile: 'var(--breakpoint-sm)',
    breakpointTablet: 'var(--breakpoint-md)',
    radius: 'var(--radius-md)',
  },
});
```

### Composite Component Example

```tsx
// BookingCalendar.tsx
import { Card } from './Card';
import { Button } from './Button';
import { Select } from './Select';
import styles from './BookingCalendar.module.css';

export interface BookingCalendarProps {
  availableDates: Date[];
  onDateSelect: (date: Date) => void;
  selectedDate?: Date;
}

export const BookingCalendar = ({
  availableDates,
  onDateSelect,
  selectedDate,
}: BookingCalendarProps) => {
  // Implementation details...
  
  return (
    <Card className={styles.calendar}>
      <div className={styles.header}>
        <h3 className={styles.title}>Book a Session</h3>
        <div className={styles.navigation}>
          <Button 
            icon={<ChevronLeft />} 
            auto 
            aria-label="Previous month"
            onClick={handlePrevMonth}
          />
          <span className={styles.monthYear}>{formatMonthYear(currentMonth)}</span>
          <Button 
            icon={<ChevronRight />} 
            auto 
            aria-label="Next month"
            onClick={handleNextMonth}
          />
        </div>
      </div>
      
      <div className={styles.days}>
        {/* Calendar days implementation */}
      </div>
      
      <div className={styles.timeSlots}>
        <Select placeholder="Select time" onChange={handleTimeSelect}>
          {availableTimeSlots.map(slot => (
            <Select.Option key={slot.value} value={slot.value}>
              {slot.label}
            </Select.Option>
          ))}
        </Select>
      </div>
      
      <Button onClick={handleBooking} disabled={!selectedDate}>
        Confirm Booking
      </Button>
    </Card>
  );
};
```

## Testing Guidelines

### Accessibility Testing

Test all adapted components for accessibility compliance:

1. **Screen Reader Testing**: Verify that all components work with VoiceOver, NVDA, and JAWS
2. **Keyboard Navigation**: Ensure all interactive elements are keyboard accessible
3. **Color Contrast**: Verify that all text and interactive elements meet WCAG AA contrast requirements
4. **ARIA Validation**: Use tools like axe-core to validate ARIA attributes

### Visual Regression Testing

Implement visual regression tests to ensure consistent styling:

```tsx
// Example using Storybook and Chromatic
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Primary = () => <Button>Primary Button</Button>;
export const Secondary = () => <Button variant="secondary">Secondary Button</Button>;
export const Disabled = () => <Button disabled>Disabled Button</Button>;
```

### Component API Testing

Test that all component props work as expected:

```tsx
// Example using Jest and React Testing Library
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

test('Button triggers onClick when clicked', async () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click Me</Button>);
  
  await userEvent.click(screen.getByText('Click Me'));
  
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

### Dark Mode Testing

Test components in both light and dark modes:

```tsx
// Example using theme provider
import { render } from '@testing-library/react';
import { GeistProvider } from '@geist-ui/core';
import { haevnLightTheme, haevnDarkTheme } from './themes';
import { Button } from './Button';

test('Button renders correctly in dark mode', () => {
  const { container } = render(
    <GeistProvider theme={haevnDarkTheme}>
      <Button>Dark Mode Button</Button>
    </GeistProvider>
  );
  
  expect(container).toMatchSnapshot();
});
```
