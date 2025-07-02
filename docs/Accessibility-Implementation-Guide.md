# Accessibility Implementation Guide: Geist to Haevn

This guide outlines how to preserve and enhance accessibility features when adapting Geist UI components to Haevn's design system. Accessibility is a core principle of both design systems, and this document provides specific techniques to ensure all users can effectively interact with Haevn's interfaces.

## Table of Contents

1. [Introduction](#introduction)
2. [WCAG Compliance Targets](#wcag-compliance-targets)
3. [Component-Specific Accessibility Guidelines](#component-specific-accessibility-guidelines)
4. [Testing and Validation](#testing-and-validation)
5. [Implementation Examples](#implementation-examples)
6. [Resources](#resources)

## Introduction

Geist UI components come with robust accessibility features built-in. When adapting these components to Haevn's design system, it's crucial to preserve these features while implementing Haevn's visual styling. This guide provides specific techniques and best practices for maintaining accessibility throughout the adaptation process.

## WCAG Compliance Targets

Haevn targets WCAG 2.2 AA compliance for all interfaces. Key requirements include:

### 1. Perceivable

- **Text Contrast**: Minimum 4.5:1 for normal text, 3:1 for large text
- **Non-text Contrast**: Minimum 3:1 for UI components and graphical objects
- **Responsive Design**: Content adapts to different viewport sizes without loss of information
- **Text Alternatives**: All non-text content has text alternatives

### 2. Operable

- **Keyboard Accessibility**: All functionality available via keyboard
- **Focus Management**: Visible focus indicators with minimum 3:1 contrast ratio
- **Sufficient Time**: Users can control time limits or extend them
- **Touch Targets**: Minimum size of 44×44 pixels for touch targets

### 3. Understandable

- **Consistent Navigation**: Navigation mechanisms appear in the same order
- **Input Assistance**: Error identification, prevention, and suggestions
- **Predictable**: Components operate in predictable ways

### 4. Robust

- **Compatible**: Content is compatible with current and future user tools
- **Valid Markup**: Clean, valid HTML with proper ARIA implementation

## Component-Specific Accessibility Guidelines

### Buttons

```tsx
// Preserve accessibility features when adapting Button component
export const Button = ({ variant = 'primary', ...props }: ButtonProps) => {
  return (
    <GeistButton
      className={`${styles.button} ${styles[`button-${variant}`]}`}
      // Ensure aria attributes are preserved
      aria-disabled={props.disabled}
      {...props}
    />
  );
};
```

**Key Accessibility Features to Preserve:**
- Proper button role (use native `<button>` element)
- Focus states with sufficient contrast
- Disabled state properly communicated to assistive technology
- Loading state announced to screen readers

**CSS Considerations:**
```css
.button:focus-visible {
  /* Ensure focus indicator meets 3:1 contrast ratio */
  outline: 2px solid var(--color-ocean-blue-9);
  outline-offset: 2px;
}

/* Ensure disabled state has sufficient contrast */
.button[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}
```

### Form Controls (Inputs, Select)

```tsx
export const Input = ({ status = 'default', label, id, ...props }: InputProps) => {
  const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;
  
  return (
    <div className={styles.inputWrapper}>
      {label && <label htmlFor={inputId} className={styles.label}>{label}</label>}
      <GeistInput
        id={inputId}
        className={`${styles.input} ${styles[`input-${status}`]}`}
        aria-invalid={status === 'error'}
        {...props}
      />
      {props.helperText && (
        <div 
          className={styles.helperText}
          id={`${inputId}-helper`}
          aria-live={status === 'error' ? 'assertive' : 'polite'}
        >
          {props.helperText}
        </div>
      )}
    </div>
  );
};
```

**Key Accessibility Features to Preserve:**
- Explicit label association with form controls
- Error states communicated via `aria-invalid` and live regions
- Sufficient color contrast for input borders and text
- Focus states clearly visible

### Modal Dialogs

```tsx
export const Modal = ({ ariaLabelledBy, ariaDescribedBy, ...props }: ModalProps) => {
  const titleId = ariaLabelledBy || `modal-title-${Math.random().toString(36).substring(2, 9)}`;
  const descId = ariaDescribedBy || `modal-desc-${Math.random().toString(36).substring(2, 9)}`;
  
  return (
    <GeistModal
      className={styles.modal}
      aria-labelledby={titleId}
      aria-describedby={descId}
      role="dialog"
      aria-modal="true"
      {...props}
    >
      {props.children}
    </GeistModal>
  );
};

export const ModalTitle = ({ id, ...props }: ModalTitleProps) => {
  return <GeistModal.Title id={id} {...props} />;
};

export const ModalContent = ({ id, ...props }: ModalContentProps) => {
  return <GeistModal.Content id={id} {...props} />;
};
```

**Key Accessibility Features to Preserve:**
- Proper ARIA roles and attributes (`role="dialog"`, `aria-modal="true"`)
- Focus management (trap focus within modal when open)
- Escape key closes modal
- Modal is properly labeled with `aria-labelledby` and `aria-describedby`

### Tabs

```tsx
export const Tabs = ({ ariaLabel, ...props }: TabsProps) => {
  return (
    <GeistTabs
      className={styles.tabs}
      aria-label={ariaLabel || "Content tabs"}
      {...props}
    />
  );
};

export const Tab = ({ id, ariaControls, ...props }: TabProps) => {
  return (
    <GeistTabs.Tab
      id={id}
      aria-controls={ariaControls}
      {...props}
    />
  );
};
```

**Key Accessibility Features to Preserve:**
- Proper ARIA roles (`role="tablist"`, `role="tab"`, `role="tabpanel"`)
- Keyboard navigation (arrow keys to navigate between tabs)
- Tab panels associated with tabs via `aria-controls` and `id`
- Active tab indicated with `aria-selected="true"`

### Toast Notifications

```tsx
export const useToasts = () => {
  const geistToasts = GeistUI.useToasts();
  
  return {
    ...geistToasts,
    setToast: (text: string, type?: ToastTypes) => {
      geistToasts.setToast({
        text,
        type,
        delay: 5000,
        // Ensure proper ARIA attributes
        "aria-live": type === "error" ? "assertive" : "polite",
      });
    }
  };
};
```

**Key Accessibility Features to Preserve:**
- Appropriate `aria-live` regions based on toast importance
- Sufficient time to read notifications
- Visual styling that meets contrast requirements
- Non-modal (doesn't interrupt user flow)

## Testing and Validation

### Automated Testing

Implement automated accessibility tests using tools like axe-core:

```tsx
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Button } from './Button';

expect.extend(toHaveNoViolations);

test('Button has no accessibility violations', async () => {
  const { container } = render(<Button>Accessible Button</Button>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

### Manual Testing

Perform manual testing with assistive technologies:

1. **Screen Reader Testing**:
   - Test with VoiceOver on macOS/iOS
   - Test with NVDA or JAWS on Windows
   - Verify all content and status changes are announced appropriately

2. **Keyboard Navigation Testing**:
   - Verify all interactive elements are keyboard accessible
   - Check that focus order is logical
   - Ensure focus is visible at all times
   - Test keyboard shortcuts and navigation patterns

3. **Color Contrast Testing**:
   - Use tools like Contrast Checker to verify text contrast
   - Test UI components against their backgrounds
   - Verify focus indicators have sufficient contrast

## Implementation Examples

### Accessible Button Implementation

```tsx
import { Button as GeistButton } from '@geist-ui/core';
import styles from './Button.module.css';
import React from 'react';

export interface ButtonProps extends React.ComponentProps<typeof GeistButton> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'text' | 'destructive';
  iconPosition?: 'left' | 'right';
  icon?: React.ReactNode;
}

export const Button = ({ 
  variant = 'primary', 
  iconPosition = 'left',
  icon,
  children,
  ...props 
}: ButtonProps) => {
  // Generate a unique ID for ARIA attributes if needed
  const buttonId = React.useId();
  
  // If button has only an icon and no text, ensure it has an aria-label
  const accessibilityProps = !children && icon ? {
    'aria-label': props['aria-label'] || 'Button',
  } : {};
  
  return (
    <GeistButton
      id={buttonId}
      className={`${styles.button} ${styles[`button-${variant}`]}`}
      {...accessibilityProps}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className={styles.iconLeft}>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className={styles.iconRight}>{icon}</span>}
    </GeistButton>
  );
};
```

### Accessible Form Field Implementation

```tsx
import { Input as GeistInput } from '@geist-ui/core';
import styles from './Input.module.css';
import React from 'react';

export interface InputProps extends React.ComponentProps<typeof GeistInput> {
  label: string;
  status?: 'default' | 'error' | 'success';
  helperText?: string;
  required?: boolean;
}

export const Input = ({ 
  label, 
  status = 'default', 
  helperText,
  required = false,
  ...props 
}: InputProps) => {
  const id = React.useId();
  const helperId = `${id}-helper`;
  
  return (
    <div className={styles.formGroup}>
      <label 
        htmlFor={id} 
        className={styles.label}
      >
        {label}
        {required && <span className={styles.required} aria-hidden="true"> *</span>}
      </label>
      
      <GeistInput
        id={id}
        className={`${styles.input} ${styles[`input-${status}`]}`}
        aria-describedby={helperText ? helperId : undefined}
        aria-invalid={status === 'error'}
        aria-required={required}
        {...props}
      />
      
      {helperText && (
        <div 
          id={helperId}
          className={`${styles.helperText} ${status === 'error' ? styles.errorText : ''}`}
          aria-live={status === 'error' ? 'assertive' : 'polite'}
        >
          {helperText}
        </div>
      )}
    </div>
  );
};
```

### Accessible Modal Implementation

```tsx
import { Modal as GeistModal } from '@geist-ui/core';
import { useEffect, useRef } from 'react';
import styles from './Modal.module.css';

export interface ModalProps extends React.ComponentProps<typeof GeistModal> {
  title: string;
  description?: string;
}

export const Modal = ({ 
  title, 
  description,
  children,
  visible,
  onClose,
  ...props 
}: ModalProps) => {
  const titleId = useRef(`modal-title-${Math.random().toString(36).substring(2, 9)}`);
  const descId = useRef(`modal-desc-${Math.random().toString(36).substring(2, 9)}`);
  
  // Return focus to trigger element when modal closes
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement;
    
    return () => {
      if (!visible && previouslyFocused) {
        previouslyFocused.focus();
      }
    };
  }, [visible]);
  
  return (
    <GeistModal
      className={styles.modal}
      visible={visible}
      onClose={onClose}
      aria-labelledby={titleId.current}
      aria-describedby={description ? descId.current : undefined}
      {...props}
    >
      <GeistModal.Title id={titleId.current}>{title}</GeistModal.Title>
      
      {description && (
        <GeistModal.Subtitle id={descId.current}>{description}</GeistModal.Subtitle>
      )}
      
      <GeistModal.Content>
        {children}
      </GeistModal.Content>
      
      <GeistModal.Action passive onClick={onClose}>
        Cancel
      </GeistModal.Action>
      <GeistModal.Action>Submit</GeistModal.Action>
    </GeistModal>
  );
};
```

## Resources

### Accessibility Guidelines and Standards
- [WCAG 2.2 Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [Inclusive Components](https://inclusive-components.design/)

### Testing Tools
- [axe-core](https://github.com/dequelabs/axe-core)
- [jest-axe](https://github.com/nickcolley/jest-axe)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/)

### Screen Readers
- [VoiceOver User Guide](https://support.apple.com/guide/voiceover/welcome/mac)
- [NVDA User Guide](https://www.nvaccess.org/files/nvda/documentation/userGuide.html)
- [JAWS Screen Reader](https://www.freedomscientific.com/products/software/jaws/)

### Color Contrast Tools
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Contrast Ratio](https://contrast-ratio.com/)
- [Colorable](https://colorable.jxnblk.com/)
