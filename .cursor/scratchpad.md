# Haevn App Development Scratchpad

## Background and Motivation

The Haevn app is a comprehensive mobile application designed for surf parks, wellness sessions, and related activities. It includes features for booking sessions, membership management, video replay (FlowState), community/crew management, retail/F&B, push notifications, account management, payments, offline functionality, analytics, and admin infrastructure.

The app is planned to be developed in phases, starting with core infrastructure (authentication, booking engine, membership) and progressing through engagement systems, monetization, offline capabilities, and finally admin and analytics features.

## Key Challenges and Analysis

1. **Complex Feature Set**: The app has a comprehensive set of features (~104 screens) across multiple modules.
2. **Integration Requirements**: Multiple third-party integrations are needed (WakeSys/Vivaticket, FlowState API, Stripe, OneSignal/Firebase, Mixpanel, CMS).
3. **Offline Functionality**: The app needs to work in offline mode for critical features like QR codes and video playback.
4. **Multi-module Coordination**: Features like crews, bookings, and replays need to work together seamlessly.
5. **Phased Development**: The development is planned in phases over 24 weeks.
6. **iOS Focus**: The app is being developed for iOS using SwiftUI + Combine, with a Node.js/Go backend.
7. **User Experience**: The app needs to provide a seamless experience across online and offline modes, with intuitive navigation between related features.

## High-level Task Breakdown

### Phase 0: Foundations (Weeks 0-2)

1. **Project Setup and Architecture**
   - Set up iOS project with SwiftUI and Combine
   - Define project structure and coding standards
   - Establish Git workflow and branching strategy
   - Success Criteria: Project repository is set up with proper structure and documentation

2. **Design System Foundation**
   - Create Figma component library
   - Define typography, colors, and brand assets
   - Establish UI motion guidelines and Lottie animation specs
   - Create master wireframe document linking all screens
   - Develop comprehensive user flow diagrams
   - Success Criteria: Design system documented and accessible to the team, master wireframe with all screens and user flows created

3. **Data Model Definition**
   - Define user model
   - Define booking model
   - Define session model
   - Define other required models
   - Success Criteria: Data models are defined with proper relationships and documentation, schema validation tests pass

4. **API Contract Development**
   - Define authentication endpoints
   - Define booking endpoints
   - Define session endpoints
   - Define other required endpoints
   - Success Criteria: API contracts are defined with proper documentation

5. **Integration Planning**
   - Establish vendor relationships (WakeSys/Vivaticket, FlowState, etc.)
   - Set up sandbox environments
   - Obtain API credentials
   - Success Criteria: All necessary API credentials obtained, sandbox environments accessible

6. **Testing Strategy & Accessibility**
   - Define unit testing approach for all modules
   - Establish integration testing framework
   - Create UI/UX testing plan
   - Develop accessibility guidelines and compliance checklist
   - Success Criteria: Testing frameworks set up, accessibility standards documented

### Phase 1: Core Infrastructure Implementation (Weeks 2-6)

1. **UI Design - Phase 1**
   - Design onboarding & authentication screens (10 screens)
   - Design home hub screens (4 screens)
   - Design notification system UI
   - Create wireframes and visual designs
   - Success Criteria: Approved designs for Phase 1 screens with all states (default, error, empty, loading)

2. **Authentication System**
   - Implement Apple SSO
   - Implement Google SSO
   - Implement Email/Password authentication
   - Create user profile management
   - Success Criteria: Users can sign up, log in, and manage their profiles using all authentication methods

3. **Booking Engine**
   - Develop calendar view with availability
   - Implement session booking flow
   - Create booking modification/cancellation
   - Generate and store QR codes
   - Success Criteria: Users can view available sessions, book, modify, and cancel sessions; QR codes are generated correctly

4. **Membership & Referral System**
   - Implement tier structure
   - Create referral code generation
   - Develop points accrual and redemption
   - Build wallet and perks display
   - Success Criteria: Users can view their membership tier, generate referral codes, and track points

### Phase 2: Engagement Systems (Weeks 6-12)

1. **UI Design - Phase 2**
   - Design booking flow screens (14 screens)
   - Design membership screens (6 screens)
   - Design profile screens (8 screens)
   - Create visuals and motion specifications
   - Success Criteria: Approved designs for Phase 2 screens with all states and motion prototypes

2. **FlowState Replay**
   - Integrate with FlowState API
   - Develop video player with overlays
   - Implement sharing functionality
   - Create session archive
   - Success Criteria: Users can view their surf session videos with performance stats and share them

3. **Crew & Community**
   - Implement crew creation and joining
   - Develop shared booking flows
   - Create crew calendar and history
   - Build crew invitation system
   - Success Criteria: Users can create crews, invite others, and book sessions together

4. **Push Notification Infrastructure**
    - Set up OneSignal or Firebase integration
    - Implement notification triggers
    - Create notification preferences
    - Develop segmentation logic
    - Success Criteria: App can send and receive targeted push notifications based on user behavior and preferences

### Phase 3: Monetization Systems (Weeks 10-16)

1. **UI Design - Phase 3**
   - Design FlowState replay screens (10 screens)
   - Design referral system screens (6 screens)
   - Design crew screens (8 screens)
   - Create visuals and developer notes
   - Success Criteria: Approved designs for Phase 3 screens with all states and developer handoff documentation

2. **Retail & F&B**
    - Create product catalog
    - Implement drop countdown system
    - Develop checkout flow
    - Integrate with POS
    - Success Criteria: Users can browse products, participate in drops, and complete purchases

3. **Payments & Wallet**
    - Integrate Stripe
    - Implement credit card tokenization
    - Develop credit application logic
    - Create refund support
    - Success Criteria: Users can securely make payments, store payment methods, and receive refunds

### Phase 4: Offline & Edge (Weeks 14-18)

1. **UI Design - Phase 4**
   - Design retail & drops screens (10 screens)
   - Design F&B ordering screens (8 screens)
   - Design wallet & payments screens (10 screens)
   - Design offline state screens (4 screens)
   - Create full UI systems with all components
   - Success Criteria: Complete UI system with all screens, states, and components

2. **Offline-First UX**
    - Implement offline QR pass system
    - Create local caching strategy
    - Develop sync mechanism
    - Build offline indicators
    - Success Criteria: Critical app features work without an internet connection

### Phase 5: Admin & Analytics (Weeks 18-22)

1. **CMS & Staff Systems**
    - Integrate with headless CMS
    - Develop content management
    - Create admin dashboard
    - Build staff tools
    - Success Criteria: Content can be managed through CMS, staff can access necessary tools

2. **Analytics Implementation**
    - Set up Mixpanel integration
    - Implement key funnels (Book > Replay > Rebook)
    - Create referral performance tracking
    - Develop loyalty program analytics
    - Implement A/B test toggle tracking
    - Success Criteria: User behavior is tracked accurately, data is available for analysis

3. **Feature Flag System**
    - Implement remote configuration
    - Create feature toggles
    - Develop regional settings
    - Build beta testing framework
    - Success Criteria: Features can be toggled remotely, beta features can be enabled for specific users

### Final Phase: QA, Beta, Optimization (Weeks 22-24)

1. **Quality Assurance**
    - Conduct comprehensive testing with module-specific test plans:
      - Booking flow edge cases
      - Push reliability (foreground vs background)
      - Offline scenarios
      - Payment errors
      - Replay sync & performance
      - Loyalty accrual, redemption accuracy
    - Fix identified bugs
    - Optimize performance
    - Conduct security audit
    - Verify accessibility compliance
    - Success Criteria: App passes all test cases, performance meets benchmarks, accessibility standards met

2. **Beta Testing**
    - Deploy to TestFlight
    - Gather user feedback
    - Implement critical fixes
    - Prepare for App Store submission
    - Success Criteria: Beta testers can use the app without critical issues, feedback is addressed

## Project Status Board

### Phase 0: Initial Setup (Weeks 0-2)

- [ ] **Project Setup and Architecture**
  - [ ] Set up iOS project with SwiftUI and Combine
  - [ ] Define project structure and coding standards
  - [ ] Establish Git workflow and branching strategy

- [ ] **Design System Foundation**
  - [ ] Create Figma component library
  - [ ] Define typography, colors, and brand assets
  - [ ] Establish UI motion guidelines
  - [ ] Create Lottie animation specifications
  - [ ] Create master wireframe document linking all screens
  - [ ] Develop comprehensive user flow diagrams for all app modules

- [ ] **Data Model Definition**
  - [ ] Define core data models
  - [ ] Create database schema
  - [ ] Implement data persistence strategy

- [ ] **API Contract Definition**
  - [ ] Define RESTful API endpoints
  - [ ] Create API documentation
  - [ ] Set up mock API server

- [ ] **Integration Planning**
  - [ ] Establish vendor relationships
  - [ ] Set up sandbox environments
  - [ ] Obtain API credentials

- [ ] **Testing Strategy & Accessibility**
  - [ ] Define unit testing approach for all modules
  - [ ] Establish integration testing framework
  - [ ] Create UI/UX testing plan
  - [ ] Develop accessibility guidelines and compliance checklist

### Phase 1: Core Infrastructure Development (Weeks 2-6)

- [ ] **UI Design - Phase 1**
  - [ ] Design onboarding & authentication screens (10 screens)
  - [ ] Design home hub screens (4 screens)
  - [ ] Design notification system UI
  - [ ] Create wireframes and visual designs

- [ ] **Authentication System**
  - [ ] Implement Apple SSO
  - [ ] Implement Google SSO
  - [ ] Implement Email/Password authentication
  - [ ] Create user profile management

- [ ] **Booking Engine**
  - [ ] Develop calendar view with availability
  - [ ] Implement session booking flow
  - [ ] Create booking modification/cancellation
  - [ ] Generate and store QR codes

- [ ] **Membership & Referral System**
  - [ ] Implement tier structure
  - [ ] Create referral code generation
  - [ ] Develop points accrual and redemption
  - [ ] Build wallet and perks display

### Current Phase: Phase 0 - Initial Setup

## Current Status / Progress Tracking

No progress yet - awaiting execution phase

## Executor's Feedback or Assistance Requests

No progress yet - awaiting execution phase

## Phase Documentation

### Phase 0 Documentation: Foundations (Weeks 0-2)

**Overview:**  
This phase establishes the technical and design foundations for the entire project. It focuses on setting up the development environment, creating the design system, defining data models, establishing API contracts, planning integrations, and setting up testing strategies.

**Key Deliverables:**

- Complete project repository with proper structure and documentation
- Design system with component library, typography, colors, and motion guidelines
- Master wireframe document linking all ~104 screens across 13 modules
- Comprehensive user flow diagrams for all app modules
- Data models with proper relationships and documentation
- API contracts with proper documentation
- Integration plans with sandbox environments and API credentials
- Testing strategy and accessibility guidelines

**Success Metrics:**

- All team members can access and understand the project structure
- Designers can create consistent UI components using the design system
- Developers understand the data models and API contracts
- Integration partners are identified and relationships established
- Testing approach is documented and understood by the team

### Phase 1 Documentation: Core Infrastructure (Weeks 2-6)

**Overview:**  
This phase implements the core infrastructure of the app, including authentication, booking engine, and membership systems. It also includes the design of onboarding, authentication, home hub, and notification screens.

**Key Deliverables:**

- UI designs for onboarding & authentication (10 screens), home hub (4 screens), and notifications
- Authentication system with Apple SSO, Google SSO, and Email/Password
- Booking engine with calendar view, session booking, modification/cancellation, and QR codes
- Membership system with tier structure, referral code generation, points accrual/redemption

**Success Metrics:**

- Users can sign up, log in, and manage their profiles using all authentication methods
- Users can view available sessions, book, modify, and cancel sessions
- QR codes are generated correctly for booked sessions
- Users can view their membership tier, generate referral codes, and track points

### Phase 2 Documentation: Engagement Systems (Weeks 6-12)

**Overview:**  
This phase focuses on features that drive user engagement, including video replay (FlowState), crew & community features, and push notifications. It also includes the design of booking flow, membership, and profile screens.

**Key Deliverables:**

- UI designs for booking flow (14 screens), membership (6 screens), and profile (8 screens)
- FlowState replay integration with video player, overlays, sharing, and session archive
- Crew & community features with creation, joining, shared booking, calendar, and invitations
- Push notification infrastructure with OneSignal/Firebase, triggers, preferences, and segmentation

**Success Metrics:**

- Users can view their surf session videos with performance stats and share them
- Users can create crews, invite others, and book sessions together
- App can send and receive targeted push notifications based on user behavior and preferences

### Phase 3 Documentation: Monetization Systems (Weeks 10-16)

**Overview:**  
This phase implements features that generate revenue, including retail & F&B ordering and payments & wallet. It also includes the design of FlowState replay, referral system, and crew screens.

**Key Deliverables:**

- UI designs for FlowState replay (10 screens), referral system (6 screens), and crews (8 screens)
- Retail & F&B system with product catalog, drop countdown, checkout flow, and POS integration
- Payments & wallet with Stripe integration, credit card tokenization, credit application, and refunds

**Success Metrics:**

- Users can browse products, participate in drops, and complete purchases
- Users can securely make payments, store payment methods, and receive refunds

### Phase 4: Offline & Edge (Weeks 14-18)

**Overview:**  
This phase ensures the app works reliably in offline scenarios and edge cases. It also includes the design of retail & drops, F&B ordering, wallet & payments, and offline state screens.

**Key Deliverables:**

- UI designs for retail & drops (10 screens), F&B ordering (8 screens), wallet & payments (10 screens), and offline states (4 screens)
- Offline-first UX with offline QR pass system, local caching, sync mechanism, and indicators

**Success Metrics:**

- Critical app features work without an internet connection
- Users can access their QR passes, view cached content, and receive notifications about sync status

### Phase 5: Admin & Analytics (Weeks 18-22)

**Overview:**  
This phase implements administrative features, analytics tracking, and feature flag system. It focuses on tools for content management, staff operations, and data analysis.

**Key Deliverables:**

- CMS & staff systems with headless CMS integration, content management, admin dashboard, and staff tools
- Analytics implementation with Mixpanel, key funnels, referral tracking, loyalty program analytics, and A/B testing
- Feature flag system with remote configuration, feature toggles, regional settings, and beta framework

**Success Metrics:**

- Content can be managed through CMS, staff can access necessary tools
- User behavior is tracked accurately, data is available for analysis
- Features can be toggled remotely, beta features can be enabled for specific users

### Final Phase: QA, Beta, Optimization (Weeks 22-24)

**Overview:**  
This phase ensures the app meets quality standards, gathers user feedback through beta testing, and optimizes performance before App Store submission.

**Key Deliverables:**

- Comprehensive testing with module-specific test plans
- Bug fixes and performance optimizations
- Security audit and accessibility compliance verification
- TestFlight deployment and user feedback collection
- App Store submission preparation

**Success Metrics:**

- App passes all test cases, performance meets benchmarks, accessibility standards met
- Beta testers can use the app without critical issues, feedback is addressed
- App is ready for App Store submission

## Risk Assessment & Mitigation

### Phase 0: Foundations

- **Risk**: Integration partners may delay providing API credentials
  - **Mitigation**: Start with mock APIs while waiting for credentials; establish vendor relationships early
- **Risk**: Design system may not cover all needed components
  - **Mitigation**: Conduct thorough review of all screens before finalizing design system

### Phase 1: Core Infrastructure

- **Risk**: Authentication system may have security vulnerabilities
  - **Mitigation**: Implement security testing early; follow Apple's security best practices
- **Risk**: Booking engine integration may be complex
  - **Mitigation**: Start with simplified booking flow; incrementally add complexity

### Phase 2: Engagement Systems

- **Risk**: FlowState API may have performance issues with video
  - **Mitigation**: Implement caching strategy; test with various network conditions
- **Risk**: Push notification delivery may be unreliable
  - **Mitigation**: Implement fallback notification system; monitor delivery rates

### Phase 3: Monetization Systems

- **Risk**: Payment processing may fail in certain scenarios
  - **Mitigation**: Implement comprehensive error handling; test edge cases
- **Risk**: Inventory sync may cause inconsistencies
  - **Mitigation**: Implement reconciliation process; add monitoring

### Phase 4: Offline & Edge

- **Risk**: Offline data may not sync correctly when connection is restored
  - **Mitigation**: Implement conflict resolution strategy; thorough testing

### Phase 5: Admin & Analytics

- **Risk**: Analytics may not capture all relevant user behaviors
  - **Mitigation**: Define comprehensive event tracking plan; validate data collection

## Dependency Mapping

### Critical Path Dependencies

1. Design System → UI Design Phases → Implementation
2. Data Model Definition → API Contract → Integration → Implementation
3. Authentication System → All User-Specific Features
4. Booking Engine → FlowState Replay (session association)
5. Offline Strategy → All Features (for offline support)

### Secondary Dependencies

1. Push Notifications ← Booking, FlowState, Crews, Retail
2. Analytics ← All User Interaction Points
3. Feature Flags ← All Toggleable Features

## Resource Allocation

### Design Resources

- UI/UX Designer: Full-time for design phases, part-time for implementation support
- Motion Designer: Part-time for animation specifications

### Development Resources

- iOS Developers (2-3): SwiftUI, Combine expertise
- Backend Developers (1-2): Node.js/Go expertise
- QA Engineer: Testing throughout development

### Specialized Resources

- Security Expert: Authentication, payment systems review
- Accessibility Specialist: Consultation throughout UI development
- DevOps Engineer: CI/CD pipeline, deployment automation

## Milestone Reviews

### Phase 0 Review (Week 2)

- Design system approval
- Architecture validation
- Data model review
- API contract finalization

### Phase 1 Review (Week 6)

- Authentication system security audit
- Booking engine functionality validation
- Membership system review

### Phase 2 Review (Week 12)

- FlowState integration performance review
- Crew functionality user testing
- Push notification delivery metrics

### Phase 3 Review (Week 16)

- Retail & F&B user flow testing
- Payment processing security audit
- Revenue metrics review

### Phase 4 Review (Week 18)

- Offline functionality testing
- Sync mechanism validation
- Performance benchmarking

### Phase 5 Review (Week 22)

- Analytics dashboard review
- Feature flag system validation
- Admin tools usability testing

### Final Review (Week 24)

- Comprehensive QA results
- Beta testing feedback analysis
- App Store submission readiness

## Lessons

No lessons recorded yet
