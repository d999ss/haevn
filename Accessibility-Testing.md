<!-- docs/Accessibility-Testing.md -->

# Accessibility Testing

## Commitment
Meet WCAG 2.2 AA across mobile and web surfaces.

## Automated Checks
* **iOS** – `AccessibilitySnapshot` for element traits  
* **Web** – `axe-core` GitHub Action on every PR  
* **Color Tokens** – design-tokens lint rule for contrast ≥ 4.5:1

## Manual Audit
Quarterly sweep by external specialist including:
* Screen-reader navigation flow
* Dynamic Type scaling review
* Voice Control command set

## Scoring Rubric
| Score | Meaning | Action |
|-------|---------|--------|
| ≥ 90 | Passing | Badge added to release notes |
| 75-89 | Minor issues | Fix before next sprint |
| < 75 | Blocker | Ship-stopper until resolved |
