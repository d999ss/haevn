# Haevn iOS App – Product Documentation Overview

Welcome to the **Haevn iOS App** documentation suite. This collection of documents provides a comprehensive overview of the product, including the business rationale behind each major feature, how they impact various stakeholders, detailed functionality and design specs, technical implementations, and how all components work together to drive Haevn's business forward. The documentation is organized into multiple sections (each as a standalone Markdown file) for clarity. The sections are interlinked to highlight interactions between different parts of the system.

## Documentation Sections

* **[Booking](BOOKING.md)** – Surf/Wellness/Event session booking system
* **[Membership & Referrals](MEMBERSHIP_REFERRALS.md)** – Loyalty program and referral system
* **[FlowState Replay](FLOWSTATE_REPLAY.md)** – Surf session video replay and sharing
* **[Crews & Community](CREWS_COMMUNITY.md)** – Social features for group surf sessions
* **[Retail & Drops](RETAIL_DROPS.md)** – In-app merchandise store and limited-time drops
* **[Food & Beverage Ordering](FB_ORDERING.md)** – Mobile ordering for food and drinks at the park
* **[Push Notifications](PUSH_NOTIFICATIONS.md)** – Engagement and alert notification system
* **[Account & Profile](ACCOUNT_PROFILE.md)** – User authentication, onboarding, and profile management
* **[Payments & Wallet](PAYMENTS_WALLET.md)** – Payment processing, in-app wallet, and credits
* **[Offline Mode](OFFLINE_MODE.md)** – Offline-first functionality for key features
* **[Analytics & Optimization](ANALYTICS_OPTIMIZATION.md)** – User analytics, A/B testing, and performance tracking
* **[Admin & Integration Infrastructure](ADMIN_INTEGRATION.md)** – CMS, integrations with external systems, and feature toggles

Each section details the **business rationale**, **stakeholder impacts**, **product logic and UI/UX design**, **technical architecture & integrations**, **strategic design decisions by Bttr.** (Haevn's design partner), **development timeline** (which phase of the project the feature is implemented in), **competitive benchmarks** for context, **technology choices** and justifications, **inter-module linkages**, and **risks/assumptions** considered.

## Technology & Architecture Summary

Haevn's iOS app is built with a modern **SwiftUI** front-end using the **MVVM (Model-View-ViewModel)** architecture. This ensures a clear separation between Views, business logic, and network/service calls. The app communicates with Haevn's backend via a secure RESTful **API** (using JSON and JWT authentication) and integrates key third-party services:

* **WakeSys/Vivaticket** – Surf park booking engine integration (for session scheduling)
* **FlowState** – AI video capture system providing surf session videos
* **Stripe** – Payment processing and credit card tokenization
* **OneSignal** (or Firebase Cloud Messaging) – Push notification delivery and segmentation
* **Mixpanel** – User analytics and event tracking for data-driven optimizations
* **Headless CMS** – Content management system for dynamic content (promotions, drop info, etc.)
* **CRM (e.g. HubSpot)** – Customer relationship management integration to sync user data and loyalty activity

This layered architecture (UI, App Logic, Service, Persistence) with robust external integrations enables rapid development while leveraging proven systems. **Security** is built-in at every layer (encrypted API communication, token-based auth, Keychain for sensitive data storage, and PCI-compliant payment handling via Stripe).

## Development & Deployment Process

Haevn's development follows a **phased roadmap** (detailed in each section's timeline) to incrementally build and test features. The team employs a strong **CI/CD pipeline** using GitHub Actions and *fastlane* to automate quality assurance and releases. Every code commit triggers automated linting, builds, and test runs to maintain code quality. Continuous Integration ensures features are validated continuously, and successful builds on the `develop` branch are **deployed to TestFlight automatically** for internal testing. This allows frequent, stable releases and a rapid feedback loop while preparing for the final App Store launch (planned after a beta testing period in Phase 5).

The project uses a modified GitFlow strategy for source control (`develop`, `feature/*`, `release/*`, etc.). Feature flags and remote configuration are implemented to enable toggling or gradual rollout of features in production. This means new modules can be hidden or enabled for specific user segments as needed, providing flexibility in deployment and A/B testing.

## Design & Brand Collaboration

Product design is led by **Bttr.**, Haevn's design partner, ensuring a cohesive brand identity and high-quality user experience across all features. The design team has established a unified visual style (colors, typography, and motion guidelines) and component library, which developers adhere to for consistent UI implementation. Bttr.'s involvement spans creating pixel-perfect Figma designs, interactive prototypes, and even motion specs for dynamic elements. They maintain Haevn's surf-centric brand vibe – from using wave motifs in onboarding to celebratory animations (like confetti on achievements) – delivering an interface that resonates with the surf lifestyle. Every UI flow, from onboarding to replay, has been crafted for intuitiveness and delight, with accessibility and inclusivity in mind (e.g., readable typography, proper contrast, and support for VoiceOver where applicable).

Regular design-development syncs and an established design system ensure that the implementation matches the intended user experience. This partnership allows rapid iteration based on user feedback and analytics insights, guaranteeing that the final product is not only technically sound but also *aesthetic, engaging, and user-friendly*.

## Related Documentation

### Development & Setup

* [BUILD_INSTRUCTIONS.md](BUILD_INSTRUCTIONS.md) - How to build and run the app
* [ARCHITECTURE.md](ARCHITECTURE.md) - Technical architecture details
* [DEVELOPMENT_WORKFLOW.md](DEVELOPMENT_WORKFLOW.md) - Development process and guidelines
* [DESIGN_COLLABORATION.md](DESIGN_COLLABORATION.md) - Working with the Bttr. Design Team
* [CI_CD_PIPELINE.md](CI_CD_PIPELINE.md) - Continuous integration and deployment setup
* [CODE_REVIEW_GUIDELINES.md](CODE_REVIEW_GUIDELINES.md) - Code review principles and process
* [STYLE_GUIDE.md](STYLE_GUIDE.md) - Coding standards and style guidelines
* [ONBOARDING.md](ONBOARDING.md) - Developer onboarding process

### Technical Documentation

* **Infrastructure** - Hosting, scaling, security, and production infrastructure
* **Data Models** - Database schema and data relationships
* **Security** - Security practices, threat models, and incident response
* **Monitoring & Observability** - Monitoring tools and observability practices
* **Release Strategy** - Release channels, feature flags, and rollback procedures
* **Performance Budgets** - Performance targets and enforcement

### Product & User Experience

* **Accessibility Testing** - Accessibility standards and testing procedures
* **Localization Process** - Localization workflow and supported locales
* **Device Support** - Supported devices and OS versions

### Business & Operations

* **Legal Policies** - Legal documents and regulatory compliance
* **Support** - Customer support channels and procedures
* **Admin Console** - Admin interface requirements and capabilities
* **Analytics & BI** - Analytics event taxonomy and business intelligence
* **Growth Dashboard** - Growth metrics and experimentation framework

### Documentation Maintenance

* **Maintainers** - Documentation ownership and review cadence
