# Haevn App Project Documentation
## Table of Contents

### Part 1: Feature List
- [Absolute Master List of Haevn App Features](#part-1-absolute-master-list-of-haevn-app-features)
- [Booking Features](#1-booking-features)
- [Membership & Referral](#2-membership--referral)
- [FlowState Replay](#3-flowstate-replay)
- [Crews & Community](#4-crews--community)
- [Retail & Drops](#5-retail--drops)
- [F&B Ordering](#6-fb-ordering)
- [Push Notifications](#7-push-notifications)
- [Account & Profile](#8-account--profile)
- [Payments & Wallet](#9-payments--wallet)
- [Offline UX](#10-offline-ux)
- [Analytics](#11-analytics)
- [Admin & Staff](#12-admin--staff)

### Part 2: Technical Order of Operations
- [Technical Order of Operations](#part-2-technical-order-of-operations)
- [Design System](#design-system)
- [API Spec](#api-spec)
- [Integration Plan](#integration-plan)
- [Offline Strategy](#offline-strategy)
- [Push Notification Plan](#push-notification-plan)
- [Release Plan](#release-plan)
- [QA Checklist](#qa-checklist)
- [Analytics & Event Plan](#analytics--event-plan)
- [Feature Flag System](#feature-flag-system)

### Part 3: Development Plan
- [Background and Motivation](#background-and-motivation)
- [Key Challenges and Analysis](#key-challenges-and-analysis)
- [High-level Task Breakdown](#high-level-task-breakdown)
- [Project Status Board](#project-status-board)
- [Phase Documentation](#phase-documentation)
- [Risk Assessment & Mitigation](#risk-assessment--mitigation)
- [Dependency Mapping](#dependency-mapping)
- [Resource Allocation](#resource-allocation)
- [Milestone Reviews](#milestone-reviews)
---
## Part 1: Absolute Master List of Haevn App Features

This is a granular, un-grouped breakdown of every feature across all modules of the Haevn app.
### 1. Booking Features
- Surf session booking
- Wellness session booking
- Event booking (solo or group)
- Real-time session availability view
- Date/time filters for sessions
- Crew booking with invite flow
- Session confirmation screen
- Booking modification (edit/cancel)
- QR code issued per booking
- Offline-capable QR session pass
- Booking reminders via push
- Rebooking prompt based on history
- Time zone auto-adjustment by park
- Dynamic capacity lockout
- Multiple park calendar views
### 2. Membership & Referrals
- Membership tier assignment
- Tier-specific benefit display
- Referral link generation
- Referral performance tracking
- Referral reward trigger
- Points system for spend, referrals, check-ins
- Points wallet balance display
- Points redemption interface
- CRM data sync (HubSpot, Salesforce)
- Upcoming perk unlock view
### 3. FlowState Replay
- Auto-import of surf videos
- Embedded session video player
- Video timeline view
- Performance stat overlays
- Session detail card (location, time, wave count)
- Offline playback for saved sessions
- Share session via link or in-app
- Archive/history of all sessions
- Replay access from profile
- Multi-angle replay support (if provided by FlowState)
### 4. Community / Crews
- Create new crew
- Join existing crew via code
- Crew invite via SMS or link
- Shared crew bookings
- View crew booking history
- Crew profile with members
- Crew calendar view
- Push notifications for crew invites
- Shared crew video access
- Future scope: private crew chat
### 5. Retail, Drops & F\&B
- In-app retail Browse
- Product detail pages
- In-app retail checkout
- Exclusive drop schedule
- Drop countdown timers
- Drop participation confirmation
- In-app food ordering
- F\&B menu display by park
- Credit-based checkout
- Order pickup instructions
- POS integration for fulfillment
- Retail/F\&B order history
- Dynamic inventory sync
### 6. Push Notification System
- Surf condition alerts
- Weather pings per park
- Video replay alerts
- Booking reminders
- Drop announcements
- Crew activity notifications
- Points or perk unlock alerts
- Referral success notifications
- Localized/regional push content
- Behavior-based push triggers
- Segment-based push targeting
### 7. Account & Identity
- Apple SSO
- Google SSO
- Email/password login
- Forgot password flow
- First-time onboarding
- Park preference selection
- Guest profile page
- Surf history timeline
- Booking history
- Purchase history
- Loyalty point history
- Session share settings
  - Region-based content filters
### 8. Payments & Wallet
  - Stripe integration
  - Embedded payment UI
  - Credit card tokenization
  - Stored payment method management
  - Apply credits to checkout
  - Loyalty redemption at checkout
  - Order confirmation screens
  - Payment failure fallback flow
  - POS sync with in-app orders
  - Refund flow (initiated by admin)
### 9. Offline Functionality
  - QR code available offline
  - Previously watched video playback offline
  - Session history cache
  - Booked session cache
  - App usability in airplane mode
  - Local push scheduling (if no connection)
### 10. Analytics & Optimization

- Event tracking (Mixpanel)
- Funnel tracking (bookings, drops, replays)
- Push open/click tracking
- Referral conversion analytics
- Booking abandonment cohorts
- Loyalty program usage tracking
- A/B test targeting
- UX test event hooks
- Real-time guest behavior logging
### 11. Admin & Integration Infrastructure

- Headless CMS for content control
- Park-specific content blocks
- Drop scheduling module
- Staff LMS integration
- Staff check-in panel (future scope)
- Booking engine connection (WakeSys/Vivaticket)
- FlowState video API sync
- CRM bidirectional sync
- Loyalty system connection (external or Stripe-based)
- Notification routing layer (OneSignal/Firebase)
- Feature flag system per module
- Remote config toggles for beta features
---
### Part 2: Technical Order of Operations for Haevn iOS App Development
This outlines a structured, phased approach for building the Haevn iOS app, prioritizing velocity and minimizing refactoring. It assumes a seasoned team and early architectural buy-in.
#### Phase 0: Foundations (Week 0–2)
- **Product & Engineering Setup:** Define system architecture, finalize data model, define API contracts, set up version control/CI/CD, choose tech stack (SwiftUI + Combine, Node.js/Go backend, Firebase/OneSignal, Stripe).
- **Integrations:** Confirm vendors (WakeSys/Vivaticket, FlowState API, Stripe, OneSignal/Firebase, Mixpanel, CMS), set up sandboxes and test credentials.
#### Phase 1: Core Infrastructure (Week 2–6)
1.  **Authentication & User Management:** Apple, Google, Email login; region + park preference logic; guest profile system; session, booking, and loyalty history linked to user ID.
2.  **Booking Engine (Back + Front):** Surf + wellness booking UI; crew booking flow; session modification, QR issuance, lockouts; timezone + calendar logic; dynamic capacity logic; session caching for offline.
3.  **Membership + Referral System:** Tier structure, referral code generation; points logic (accrual + redemption); display wallet, perks, referral tracking.
#### Phase 2: Engagement Systems (Week 6–12)
4\.  **FlowState Replay:** Video import via FlowState API; player with stats overlays, multi-angle support; shareable replay links, session archive; offline playback system.
5\.  **Crew & Community:** Crew creation/joining logic; shared booking flows; crew calendar + video history; push invites to join crew.
6\.  **Push Notification Infrastructure:** Setup routing layer (OneSignal or Firebase); behavior triggers (e.g., missed booking, referral unlocked); regional & park-based segmentation.
#### Phase 3: Monetization Systems (Week 10–16)
7\.  **Retail & F\&B:** In-app catalog + drop module; drop countdown system; checkout (Stripe + credit logic); POS integration + pickup instructions; menu per park, order history.
8\.  **Payments & Wallet:** Credit card tokenization; credit app logic; refund support; POS backend bridge.
#### Phase 4: Offline & Edge (Week 14–18)
9\.  **Offline-First UX:** Offline QR pass system; local cache of session, replay, profile; local push reminder logic.
#### Phase 5: Admin & Analytics (Week 18–22)
10\. **CMS & Staff Systems:** Headless CMS for content, promos, drops; booking backend bridge (WakeSys/Vivaticket); FlowState sync system; loyalty CRM integration; LMS hook (if in scope).
11\. **Analytics:** Mixpanel event hooks; funnel tracking for booking, drop, replay; referral + push metrics; real-time user journey logging; A/B test layer.
12\. **Config & Flags:** Feature flag system for beta testing; remote config for regional tweaks.
#### Final Weeks: QA, Beta, Optimization (Week 22–24)
13\. **Polish & QA:** Full regression testing; UX polish round; video loading speed, cache tuning; real-time bug analytics.
14\. **Beta Test + Launch Readiness:** Internal beta (TestFlight); soft launch in one park; analytics dashboard live; ready for App Store submission.
#### Optional Enhancements (Post-Launch)
- Private crew chat
- Personalized surf tips from AI overlay
- Leaderboards for most active crews
---
### Part 3: Design Architecture Plan & Screen Mockup Specification
This section details the design architecture plan, breaking down all app screens into modules, outlining the mocking format, and specifying each screen's UI elements and behavior. The estimated total screens are \~104, with 120+ including edge/error/loading states.
#### STEP 1: Define Screen Groups (Top-Level UX Map)
| Module                   | Approx. Screens | Notes                                   |
| :--------------- | :---------- | :------------------------ |
| 01. Onboarding & Auth    | 10              | Welcome, SSO, reset, preferences        |
| 02. Home Hub             | 4               | Dashboard, nav, park selector           |
| 03. Booking Flow         | 14              | Book, filter, modify, confirm, crew     |
| 04. Replay/FlowState     | 10              | Player, overlays, archive, sharing      |
| 05. Membership           | 6               | Tier display, perks, point balance      |
| 06. Referral System      | 6               | Invite, track, confirm, reward          |
| 07. Crews                | 8               | Create, join, history, calendar         |
| 08. Drops & Retail       | 10              | Shop, drops, countdowns, checkout       |
| 09. F\&B Ordering         | 8               | Menu, cart, checkout, status            |
| 10. Profile & History    | 8               | Bookings, surf history, video           |
| 11. Wallet & Payments    | 10              | Credit card, credits, errors            |
| 12. Notifications        | 6               | Inbox, settings, states                 |
| 13. Offline States       | 4               | Offline QR, replay, alerts              |
| **Total (Initial Estimate)** | **\~104** | **Final count with edge/error/loading: 120+** |
#### STEP 2: Format
Each screen will be mocked in Figma (preferred) or Framer (if motion prototypes are requested). Each mock will include:
- Desktop-annotated flow chart per module
- Mobile UI (iOS 390×844pt artboards)
- All states (default, success, error, empty, offline)
- Lottie-ready animation placeholder callouts
#### STEP 3: Execution Phases
Mockups delivered in phased sprints, ready for handoff.
| Phase | Modules Covered                                    | Deliverable Type          |
| :---- | :------------------------------- | :---------------- |
| 1     | Onboarding, Auth, Home, Notifications              | Wireframes + Visuals      |
| 2     | Booking Flow, Membership, Profile                  | Visuals + Motion Specs    |
| 3     | Replay, Referrals, Crews                           | Visuals + Dev Notes       |
| 4     | Drops, F\&B, Wallet, Offline                        | Full UI Systems           |
---
### Part 4: Detailed Screen Mockup Specifications (Module by Module)
This section provides a granular breakdown of each screen, including its purpose, UI elements, layout, and specific behaviors.
#### Module 1: Onboarding & Auth (10 screens)
1.  **Welcome Screen:** Haevn logo, "Continue with Apple/Google/Email" CTAs, "Already have an account? Log in" link, soft wave background.
2.  **Email Sign Up:** "Create your account" header, Name, Email, Password inputs with validation, "Sign Up" CTA, Terms/Privacy checkbox, Back button.
3.  **Email Login:** "Welcome Back" header, Email, Password inputs, "Log In" CTA, "Forgot Password?" link, error states, Back button.
4.  **Forgot Password:** "Reset Your Password" header, Email input, "Send Reset Link" CTA, success state, "Back to Login" link.
5.  **Password Reset Flow:** New password, Confirm password inputs with validation, "Reset Password" CTA, success message.
6.  **Park Preference Selection:** "Choose Your Home Park" header, Carousel/List of park cards (logo, name, location, image, select state), "Continue" CTA.
7.  **Notification Opt-In:** "Stay in the Loop" header, description, "Enable Notifications" / "Skip for Now" buttons.
8.  **First-Time Tutorial:** Swipeable cards ("Book surf sessions," "Replay and improve," "Earn rewards"), "Get Started" / "Skip" buttons.
9.  **Region Lock Message:** Message "Haevn isn’t live in your region yet," actions ("Set a preferred park," "Notify me"), visual.
10. **Legal Agreements:** Scrollable text, "I Agree" CTA.
#### Module 2: Home Hub (4 screens)
1.  **Home Dashboard:** Header (Haevn logo, park selector, notification bell), Hero Banner (rotating surf image, dynamic text, "Book Now" CTA), Action Tiles (Replay Session, Join Your Crew, Earn Rewards, Retail Drop), Activity Carousel (last session, reward, referral, replay), Footer Nav.
2.  **Park Switcher Modal:** "Switch Park" header, List of Available Parks (card with name, location, photo, selected check), "Confirm" CTA.
3.  **Notification Drawer:** "Notifications" header, Grouped List by Type (Booking, Drop, Replay, Loyalty), Icons, Mark all as read, Empty State.
4.  **Home Loading / Skeleton State:** Wave animation loader, gray box placeholders for UI elements, Timeout Fallback message.
**Module 3: Booking Flow (14 screens)**
1.  **Booking Type Selector:** "What do you want to book?" header, Segmented Control Tabs (Surf / Wellness / Event), "Continue" CTA.
2.  **Session Calendar:** Top Nav, Date Selector (horizontal scroll), Time Slots Grid (color-coded availability, session metadata), Filter Drawer Button, "Next" CTA.
3.  **Session Detail View:** Session Title, Time, Date, Park, Availability Count, Crew Toggle, Price + Points Info, "Confirm Session" CTA.
4.  **Booking Confirmation:** Checkmark icon, "You’re booked\!" text, Session summary, QR Code, "View in My Sessions" / "Share with Crew" CTAs.
5.  **Booking Modification (Edit/Cancel):** "Modify Booking" header, Booking Card, "Edit Date/Time" / "Cancel Booking" buttons, Cancel Confirmation Modal.
6.  **QR Code View:** Fullscreen QR Code, Session name, time, park, "Show to staff on arrival," "Add to Wallet" button, Offline status bar.
7.  **Offline QR Backup:** Low-bandwidth fallback UI, cached QR image + text confirmation.
8.  **Booking Reminders via Push:** Notification UX with deep link to QR code.
9.  **Rebooking Prompt:** Card "Book your next ride?", pre-filled time options, "Rebook" CTA.
10. **Time Zone Auto-Adjust Alert:** Conditional banner "You’re viewing session times in Park’s local time zone (PST)."
11. **Dynamic Capacity Lockout:** Modal "This session is fully booked," suggested next time slots, "Try Another Time" CTA.
12. **Multi-Park Calendar View:** Optional Mode Toggle, Dropdown to switch parks, overlay icons, map view.
13. **Booking History:** Tabs (Upcoming / Past), Session Cards, "Rebook" CTA, Empty State.
14. **Booking Flow – Error/Fallback:** States for unavailable sessions, network timeout, payment issues, generic errors.
**Module 4: FlowState Replay (10 screens)**
1.  **Replay Landing:** "FlowState Replay" header, Carousel/Grid of Session cards (thumbnail, date, time, location, wave count, "View Replay" CTA).
2.  **Video Player View:** Top (session name, location, date), Main Area (embedded video player, controls, speed), Bottom Overlay Panel (wave count, ride duration, score).
3.  **Timeline Scrubber:** Timeline bar with wave peaks highlighted, hover tooltips, tap interaction.
4.  **Overlay Toggle Panel:** Expandable drawer with Toggle Chips (Show Wave Count, Session Stats, Time Codes).
5.  **Session Detail View:** Scrollable area below player with Session Summary (Park, Time, Date, Surf Type), Stats Summary, Notes section.
6.  **Share Replay Modal:** "Share This Session" header, Share Options (Copy link, Messages, Email, Instagram), "Make this replay public" toggle.
7.  **Replay Archive Filter:** Filters (Park, Date range, Wave count), Sort Options (Newest, Most waves, Longest rides).
8.  **Replay Empty State:** Message "No replays yet. Book a session to start tracking," "Book Now" CTA, illustration.
9.  **Offline Playback Mode:** Banner "Playing Offline – FlowState," Limitations Message, Offline icon.
10. **Replay Entry from Profile:** Mini card (thumbnail, date, wave count, "Watch Replay" / "Share Replay" CTAs).
**Module 5: Membership (6 screens)**
1.  **Membership Overview:** "Your Membership" header, Tier Badge Display, Benefit Highlights, "View Perks" CTA.
2.  **Perks Breakdown:** Tier Tabs (Bronze / Silver / Gold / Platinum), Benefits Grid, "Compare All Tiers" Toggle.
3.  **Points Timeline:** "Your Points" header, Total Balance, Points Activity List (date, action, points +/-), Filter Options.
4.  **Upcoming Perk Unlock:** Progress Ring UI, Next Perk Details (description, unlock date/requirement), "See More Ways to Earn" CTA.
5.  **Status Expiration Warning:** Banner "Your Gold status expires in 5 days," "Book Now to Maintain Tier" CTA, Timer Clock Graphic.
6.  **Empty State – Not Yet a Member:** "Join Haevn Rewards" header, description, illustration, "Activate Membership" CTA.
**Module 6: Referrals (6 screens)**
1.  **Referral Landing:** "Refer & Earn" header, graphic, Your Code, "Invite Friends" CTA, Tracker Preview.
2.  **Invite Modal:** "Send an Invite" header, Options (Copy link, Share via), Preview Text, Permission Toggle.
3.  **Referral Performance Dashboard:** Total Referred, Successful Conversions, Points Earned, Leaderboard Card (optional), "View Referral History" CTA.
4.  **Referral History:** List of Invites (Name/Email, date sent, status, points earned), Empty State.
5.  **Reward Confirmation Modal:** Confetti animation, "Congrats\! You earned X points," breakdown, "Refer Another Friend" CTA.
6.  **Referral Conversion Failure State:** Banner "Referral Not Tracked," explanation, Support Link, Tip.
**Module 7: Crews (8 screens)**
1.  **Crew Hub Landing:** "Your Crew" header, Crew Name + Icon, Member Avatars Row, Next Booking Card, "View Calendar" / "Share Replay" CTAs.
2.  **Create New Crew Flow:** Step 1 (Name Your Crew), Step 2 (Choose Crew Icon), Step 3 (Add Friends), "Create Crew" CTA.
3.  **Join Crew via Code:** "Join a Crew" header, "Enter Crew Code" input, "Join" CTA, success/failure modals.
4.  **Invite Modal (SMS / Link):** "Invite to Crew" header, custom join link, Options (Copy, Send via), Status Tracker.
5.  **Crew Booking Calendar:** Top Nav, Day View (icons per member, color coding), tap to show attendance.
6.  **Crew Booking History:** Session Cards, "Replay Session" CTA, Filter, Sort.
7.  **Crew Profile & Members:** Crew Name & Icon, Member List (name, join date, role, remove option), Crew Code, "Leave Crew" CTA.
8.  **Push Notification Invite:** Text "Donny invited you to join 'Wave Riders'," "Join Crew" CTA, fail state.
**Module 8: Drops & Retail (10 screens)**
1.  **Retail Home:** "Shop Haevn" header, Categories Carousel, Featured Product Banner, List/Grid View of products, "View All Drops" CTA.
2.  **Product Detail Page:** Product Image Carousel, Title, Price, Size Selector, Inventory Notice, Quantity Stepper, "Add to Cart" CTA, Description Toggle, Drop Info.
3.  **Drop Schedule:** "Drops" header, Drop Cards (image, name, release date, status, CTA).
4.  **Drop Countdown Page:** Header, Countdown Timer, Description, disabled "Add to Cart" CTA, "Remind Me" option.
5.  **Drop Live Participation:** Product Image, enabled "Add to Cart," Status bar "Now live," Quick Checkout CTA, FOMO Indicator.
6.  **Cart View:** Item list (image, name, price, qty, remove), Subtotal, Apply Credit toggle, "Checkout" / "Continue Shopping" CTAs, drop product hold note.
7.  **Checkout Page:** Shipping Info, Payment Method options, Apply Points toggle, Order Summary, "Place Order" CTA, Terms Link.
8.  **Order Confirmation:** "Order Placed" header, Summary Card, "Track Order" / "Shop More" CTAs, Confetti Animation.
9.  **Order History:** List of Orders, Order Cards (product name, date, status, "View Details" CTA).
10. **Dynamic Inventory Sync:** Out of Stock Overlay, Inventory Auto-refresh, Status Pill "Almost Gone," Error Modal.
**Module 9: F\&B Ordering (8 screens)**
1.  **F\&B Menu by Park:** "Order Food & Drinks" header, Park Selector, Category Tabs, Menu Item Cards (image, name, price, "+", "View Cart" CTA).
2.  **Menu Item Detail:** Full Image View, Item Name, Description, Nutrition, Price, Quantity Selector, "Add to Cart" CTA, Close icon.
3.  **Cart Summary:** "Your Cart" header, Items List (edit/delete), Subtotal, Note Field, "Checkout" / "Continue Shopping" CTAs.
4.  **F\&B Checkout:** Pickup Location Selector, Pickup Time Selector, Payment Method options, "Place Order" CTA, Error Handling.
5.  **Order Confirmation:** "Order Confirmed" header, Order Summary Card, "Track Order" CTA, Subtext.
6.  **Order Status Tracking:** Progress Bar (Received, In Preparation, Ready), Estimated Time Remaining, Visual, "Cancel Order" CTA.
7.  **Order Ready Push Notification:** Push Message "Your order is ready...", Tap-to-open deep link.
8.  **Order History:** Order Cards (thumbnails, total price, pickup park/location, date/time), "Reorder" CTA, Filter.
**Module 10: Profile & History (8 screens)**
1.  **Profile Home:** "Your Profile" header, Avatar + Name, Quick Stats, Quick Links Grid (My Sessions, My Replays, Purchase History, Loyalty Wallet), "Edit Profile" CTA.
2.  **Edit Profile:** Avatar Edit, Fields (Full Name, Email, Phone Number), "Save Changes" CTA, Validation.
3.  **Booking History:** Tabs (Upcoming / Past), Session Cards, "Rebook" CTA, Empty State.
4.  **Surf History Timeline:** Vertical Scroll Layout, Each Entry (Date, Session type, Replay indicator, Points earned), Milestone Flags.
5.  **Replay Access (Mini View):** Session Summary Card (thumbnail, wave count, time), "Watch Replay" / "Share Replay" CTAs.
6.  **Purchase History:** List View, Each Entry (Item name(s), Total spent, Purchase method, Park), "View Receipt" CTA.
7.  **Loyalty Point History:** Grouped by date, Icons for action type, +/- balance, Filter.
8.  **Session Share Settings:** Toggle Switches (Make replays shareable, Show surf stats to crew, Include me in leaderboards), "Save Preferences" CTA, Legal Link.
**Module 11: Wallet & Payments (10 screens)**
1.  **Wallet Overview:** "Your Wallet" header, Balance Cards (Credits, Points), Payment Methods Preview, "Add Payment Method" / "Redeem Points" CTAs.
2.  **Add Payment Method:** Form Fields (Card Number, Expiry, CVV, Zip), "Save Card" CTA, Apple Pay Option.
3.  **Manage Payment Methods:** List View (saved cards, edit/remove, default toggle), Add new card button.
4.  **Redeem Credits:** Toggle in Booking/Checkout, Label "Apply available credits," Behavior (deducts), Fallback Message.
5.  **Points Redemption UX:** Toggle/Slider input for points, real-time total update, Limit Warning, "Apply" CTA.
6.  **Checkout Summary with Wallet Options:** Sections (Item list, Subtotal, Credits/Points applied, Total due, Payment method dropdown), "Place Order" CTA.
7.  **Payment Success Screen:** "Payment Successful" header, Order summary card, Line Items (paid with), "Return to Home" / "Track Order" CTAs.
8.  **Payment Failure State:** Banner "Payment failed," Reason Message, "Try Again" / "Use Different Payment Method" CTAs.
9.  **POS Sync Feedback:** Status Label "Syncing...", Success Check, Failure State.
10. **Refund Status Page:** Order Card Summary, Refund Info (amount, method, date), Status Banner, Support CTA.
**Module 12: Notifications (6 Screens)**
1.  **Notification Center:** "Notifications" header, Grouped by Type (Booking, Replay, Drops, Crew), Notification Cards, "Mark All as Read" CTA, Empty State.
2.  **Push Preferences:** Toggle List (Surf, Replay, Retail, Loyalty, Crew), Master Toggle "Enable All Notifications," "Save Changes" CTA.
3.  **Localized Content Notifications:** Description "Receive content for your current park...", Toggle "Enable local updates," Disclosure.
4.  **Segment-Based Push UX:** Example Message "You haven’t booked in 10 days...", Tap-to-book CTA, Branded tone.
5.  **Drop Alert Notification:** Message "New drop: Haevn x Futures now available," "Shop Now" CTA, Image Preview.
6.  **Replay Notification:** Message "Your FlowState video from today’s session is live," "Watch Replay" CTA.
**Module 13: Offline States (4 Screens)**
1.  **Offline QR Code:** Static QR Display, Session Details, Banner "This QR is valid offline," "Add to Apple Wallet" CTA, Timestamp of last sync.
2.  **Cached Replay Playback:** Banner "Offline Mode," Limitations Message, Playback Controls, Visual cue (greyed-out stats).
3.  **Cached Booking History:** Session Cards (local data only), CTAs Disabled, Visual cue "Offline – Last synced X hrs ago."
4.  **Offline Push & Local Alerts:** Banner Alert "Your session is in 30 minutes (cached)," Notification shown in airplane mode, Settings Message.
---
### Part 5: Notion Import-Ready Product Specification
This section provides the comprehensive Haevn App Master Product Spec formatted for direct import into Notion, including databases, linked elements, and detailed sections for design, API, data models, integrations, and more.
```
# 🏄 Haevn App – Master Product Spec
Welcome to the centralized hub for all Haevn product documentation, design, engineering, and launch planning.
## 📁 Quick Links
* [Figma: Haevn UI Design File](YOUR_FIGMA_LINK_HERE)
* [GitHub Repo – Haevn App](YOUR_GITHUB_LINK_HERE)
* Slack Channel – #haevn-app-dev
* [Launch Timeline & Phases](YOUR_TIMELINE_LINK_HERE)
* [Offline Strategy](YOUR_OFFLINE_STRATEGY_LINK_HERE)
* [Push Notification Plan](YOUR_PUSH_PLAN_LINK_HERE)
## ✅ Feature Matrix (Linked DB)
This is a complete feature database. You can paste this into a Notion database and it will create all the necessary columns.
| Module                    | Feature Name                                     | Feature Description                                                          | Status          | Assigned To | Screens Required | Backend Required | Notes                                                                   |
| :---------------- | :----------------------------- | :--------------------------------------------- | :---------- | :------ | :--------- | :--------- | :------------------------------------------ |
| **Booking Features** | Surf session booking                             | Allows users to book surf sessions.                                          | Backlog         |             | Y                | Y                |                                                                         |
| Booking Features          | Wellness session booking                         | Allows users to book wellness sessions.                                      | Backlog         |             | Y                | Y                |                                                                         |
| Booking Features          | Event booking (solo or group)                    | Allows users to book events individually or as a group.                      | Backlog         |             | Y                | Y                |                                                                         |
| Booking Features          | Real-time session availability view              | Displays current availability for sessions.                                  | Backlog         |             | Y                | Y                |                                                                         |
| Booking Features          | Date/time filters for sessions                   | Filters for finding sessions by date and time.                               | Backlog         |             | Y                | N                | UI filter, data from backend.                                           |
| Booking Features          | Crew booking with invite flow                    | Enables booking sessions with a crew and inviting members.                   | Backlog         |             | Y                | Y                |                                                                         |
| Booking Features          | Session confirmation screen                      | Screen confirming a successful booking.                                      | Backlog         |             | Y                | Y                |                                                                         |
| Booking Features          | Booking modification (edit/cancel)               | Allows users to edit or cancel existing bookings.                            | Backlog         |             | Y                | Y                |                                                                         |
| Booking Features          | QR code issued per booking                       | Generates a unique QR code for each booking.                                 | Backlog         |             | Y                | Y                |                                                                         |
| Booking Features          | Offline-capable QR session pass                  | Ensures QR code is accessible even without internet.                         | Backlog         |             | Y                | Y                |                                                                         |
| Booking Features          | Booking reminders via push                       | Sends push notifications for upcoming bookings.                              | Backlog         |             | N                | Y                | Requires push notification system.                                      |
| Booking Features          | Rebooking prompt based on history                | Suggests rebooking based on past session history.                            | Backlog         |             | Y                | Y                |                                                                         |
| Booking Features          | Time zone auto-adjustment by park                | Automatically adjusts session times to the park's local time zone.           | Backlog         |             | Y                | Y                |                                                                         |
| Booking Features          | Dynamic capacity lockout                         | Prevents booking sessions that are at full capacity.                         | Backlog         |             | Y                | Y                |                                                                         |
| Booking Features          | Multiple park calendar views                     | Allows users to view calendars across different parks.                       | Backlog         |             | Y                | Y                |                                                                         |
| **Membership & Referrals**| Membership tier assignment                       | Assigns users to different membership tiers based on criteria.               | Backlog         |             | Y                | Y                |                                                                         |
| Membership & Referrals    | Tier-specific benefit display                    | Shows benefits specific to the user's current membership tier.               | Backlog         |             | Y                | N                | Data from backend.                                                      |
| Membership & Referrals    | Referral link generation                         | Generates unique referral links for users.                                   | Backlog         |             | Y                | Y                |                                                                         |
| Membership & Referrals    | Referral performance tracking                    | Tracks the success of user referrals.                                        | Backlog         |             | Y                | Y                |                                                                         |
| Membership & Referrals    | Referral reward trigger                          | Automatically triggers rewards upon successful referrals.                    | Backlog         |             | N                | Y                |                                                                         |
| Membership & Referrals    | Points system for spend, referrals, check-ins    | Implements a points system for various user actions.                         | Backlog         |             | Y                | Y                |                                                                         |
| Membership & Referrals    | Points wallet balance display                    | Displays the user's current points balance.                                  | Backlog         |             | Y                | N                | Data from backend.                                                      |
| Membership & Referrals    | Points redemption interface                      | Allows users to redeem their points.                                         | Backlog         |             | Y                | Y                |                                                                         |
| Membership & Referrals    | CRM data sync (HubSpot, Salesforce)              | Synchronizes customer data with CRM systems.                                 | Backlog         |             | N                | Y                | Backend integration.                                                    |
| Membership & Referrals    | Upcoming perk unlock view                        | Shows users upcoming perks they are close to unlocking.                      | Backlog         |             | Y                | Y                |                                                                         |
| **FlowState Replay** | Auto-import of surf videos                       | Automatically imports surf videos from FlowState.                            | Backlog         |             | N                | Y                | Requires FlowState API integration.                                     |
| FlowState Replay          | Embedded session video player                    | Plays surf session videos within the app.                                    | Backlog         |             | Y                | Y                |                                                                         |
| FlowState Replay          | Video timeline view                              | Displays a timeline of the video with key events.                            | Backlog         |             | Y                | N                | Data from backend/FlowState.                                            |
| FlowState Replay          | Performance stat overlays                        | Overlays performance statistics onto the video.                              | Backlog         |             | Y                | N                | Data from backend/FlowState.                                            |
| FlowState Replay          | Session detail card (location, time, wave count) | Card displaying key details of a session.                                    | Backlog         |             | Y                | N                | Data from backend.                                                      |
| FlowState Replay          | Offline playback for saved sessions              | Allows users to watch saved videos without internet.                         | Backlog         |             | Y                | N                | Requires local storage.                                                 |
| FlowState Replay          | Share session via link or in-app                 | Enables sharing of session replays.                                          | Backlog         |             | Y                | Y                |                                                                         |
| FlowState Replay          | Archive/history of all sessions                  | Stores and displays a history of all user sessions.                          | Backlog         |             | Y                | Y                |                                                                         |
| FlowState Replay          | Replay access from profile                       | Allows users to access replays directly from their profile.                  | Backlog         |             | Y                | N                | Navigation/UI.                                                          |
| FlowState Replay          | Multi-angle replay support (if provided by FlowState) | Supports viewing replays from multiple camera angles.                        | Backlog         |             | Y                | Y                | Dependent on FlowState API.                                             |
| **Community / Crews** | Create new crew                                  | Allows users to create their own crews.                                      | Backlog         |             | Y                | Y                |                                                                         |
| Community / Crews         | Join existing crew via code                      | Allows users to join a crew using a unique code.                             | Backlog         |             | Y                | Y                |                                                                         |
| Community / Crews         | Crew invite via SMS or link                      | Enables inviting members to a crew via SMS or a link.                        | Backlog         |             | Y                | N                | Uses native sharing.                                                    |
| Community / Crews         | Shared crew bookings                             | Allows crew members to book sessions together.                               | Backlog         |             | Y                | Y                |                                                                         |
| Community / Crews         | View crew booking history                        | Displays a history of bookings made by the crew.                             | Backlog         |             | Y                | Y                |                                                                         |
| Community / Crews         | Crew profile with members                        | Displays the crew's profile and its members.                                 | Backlog         |             | Y                | Y                |                                                                         |
| Community / Crews         | Crew calendar view                               | Shows a calendar view of crew activities.                                    | Backlog         |             | Y                | Y                |                                                                         |
| Community / Crews         | Push notifications for crew invites              | Sends push notifications when a user is invited to a crew.                   | Backlog         |             | N                | Y                | Requires push notification system.                                      |
| Community / Crews         | Shared crew video access                         | Allows crew members to access shared videos.                                 | Backlog         |             | Y                | Y                |                                                                         |
| Community / Crews         | Future scope: private crew chat                  | Enables private chat functionality within crews. (Future Scope)              | Backlog         |             | Y                | Y                |                                                                         |
| **Retail, Drops & F&B** | In-app retail Browse                           | Allows users to browse retail products within the app.                       | Backlog         |             | Y                | Y                |                                                                         |
| Retail, Drops & F&B       | Product detail pages                             | Displays detailed information for each product.                              | Backlog         |             | Y                | Y                |                                                                         |
| Retail, Drops & F&B       | In-app retail checkout                           | Enables completing retail purchases within the app.                          | Backlog         |             | Y                | Y                |                                                                         |
| Retail, Drops & F&B       | Exclusive drop schedule                          | Displays a schedule of exclusive product drops.                              | Backlog         |             | Y                | Y                |                                                                         |
| Retail, Drops & F&B       | Drop countdown timers                            | Shows countdown timers for upcoming product drops.                           | Backlog         |             | Y                | N                | UI driven by backend data.                                              |
| Retail, Drops & F&B       | Drop participation confirmation                  | Confirms a user's participation in a drop (e.g., entered lottery).           | Backlog         |             | Y                | Y                |                                                                         |
| Retail, Drops & F&B       | In-app food ordering                             | Allows users to order food within the app.                                   | Backlog         |             | Y                | Y                |                                                                         |
| Retail, Drops & F&B       | F&B menu display by park                         | Displays food and beverage menus specific to each park.                      | Backlog         |             | Y                | Y                |                                                                         |
| Retail, Drops & F&B       | Credit-based checkout                            | Allows users to use credits for F&B purchases.                               | Backlog         |             | Y                | Y                |                                                                         |
| Retail, Drops & F&B       | Order pickup instructions                        | Provides instructions for picking up orders.                                 | Backlog         |             | Y                | Y                |                                                                         |
| Retail, Drops & F&B       | POS integration for fulfillment                  | Integrates with Point of Sale systems for order fulfillment.                 | Backlog         |             | N                | Y                | Backend integration.                                                    |
| Retail, Drops & F&B       | Retail/F&B order history                         | Displays a history of retail and F&B orders.                                 | Backlog         |             | Y                | Y                |                                                                         |
| Retail, Drops & F&B       | Dynamic inventory sync                           | Synchronizes inventory levels in real-time.                                  | Backlog         |             | Y                | Y                |                                                                         |
| **Push Notification System**| Surf condition alerts                            | Sends alerts for surf conditions.                                            | Backlog         |             | N                | Y                |                                                                         |
| Push Notification System  | Weather pings per park                           | Sends weather-related notifications per park.                                | Backlog         |             | N                | Y                |                                                                         |
| Push Notification System  | Video replay alerts                              | Alerts users when a new video replay is available.                           | Backlog         |             | N                | Y                |                                                                         |
| Push Notification System  | Booking reminders                                | Sends reminders for upcoming bookings.                                       | Backlog         |             | N                | Y                |                                                                         |
| Push Notification System  | Drop announcements                               | Announces new product drops.                                                 | Backlog         |             | N                | Y                |                                                                         |
| Push Notification System  | Crew activity notifications                      | Notifies users about crew-related activities.                                | Backlog         |             | N                | Y                |                                                                         |
| Push Notification System  | Points or perk unlock alerts                     | Alerts users when points are earned or perks are unlocked.                   | Backlog         |             | N                | Y                |                                                                         |
| Push Notification System  | Referral success notifications                   | Notifies users about successful referrals.                                   | Backlog         |             | N                | Y                |                                                                         |
| Push Notification System  | Localized/regional push content                  | Delivers push content relevant to the user's location.                       | Backlog         |             | N                | Y                |                                                                         |
| Push Notification System  | Behavior-based push triggers                     | Triggers pushes based on user behavior (e.g., abandonment).                  | Backlog         |             | N                | Y                |                                                                         |
| Push Notification System  | Segment-based push targeting                     | Targets pushes to specific user segments.                                    | Backlog         |             | N                | Y                |                                                                         |
| **Account & Identity** | Apple SSO                                        | Enables single sign-on using Apple ID.                                       | Backlog         |             | Y                | Y                |                                                                         |
| Account & Identity        | Google SSO                                       | Enables single sign-on using Google account.                                 | Backlog         |             | Y                | Y                |                                                                         |
| Account & Identity        | Email/password login                             | Traditional email and password login.                                        | Backlog         |             | Y                | Y                |                                                                         |
| Account & Identity        | Forgot password flow                             | Allows users to reset their forgotten password.                              | Backlog         |             | Y                | Y                |                                                                         |
| Account & Identity        | First-time onboarding                            | Guides new users through the app setup.                                      | Backlog         |             | Y                | N                | UI/UX.                                                                  |
| Account & Identity        | Park preference selection                        | Allows users to select their preferred park.                                 | Backlog         |             | Y                | Y                |                                                                         |
| Account & Identity        | Guest profile page                               | Displays the user's profile information.                                     | Backlog         |             | Y                | Y                |                                                                         |
| Account & Identity        | Surf history timeline                            | Visual timeline of user's surf sessions.                                     | Backlog         |             | Y                | Y                |                                                                         |
| Account & Identity        | Booking history                                  | Displays a history of user bookings.                                         | Backlog         |             | Y                | Y                |                                                                         |
| Account & Identity        | Purchase history                                 | Displays a history of user purchases.                                        | Backlog         |             | Y                | Y                |                                                                         |
| Account & Identity        | Loyalty point history                            | Displays a history of earned and spent loyalty points.                       | Backlog         |             | Y                | Y                |                                                                         |
| Account & Identity        | Session share settings                           | Manages privacy settings for sharing sessions.                               | Backlog         |             | Y                | Y                |                                                                         |
| Account & Identity        | Region-based content filters                     | Filters content displayed based on user's selected region.                   | Backlog         |             | N                | Y                | Backend filtering.                                                      |
| **Payments & Wallet** | Stripe integration                               | Integrates with Stripe for payment processing.                               | Backlog         |             | N                | Y                | Backend.                                                                |
| Payments & Wallet         | Embedded payment UI                              | Provides a seamless payment interface within the app.                        | Backlog         |             | Y                | Y                |                                                                         |
| Payments & Wallet         | Credit card tokenization                         | Securely tokenizes credit card information.                                  | Backlog         |             | N                | Y                | Backend/Stripe.                                                         |
| Payments & Wallet         | Stored payment method management                 | Allows users to manage their saved payment methods.                          | Backlog         |             | Y                | Y                |                                                                         |
| Payments & Wallet         | Apply credits to checkout                        | Allows users to use credits during checkout.                                 | Backlog         |             | Y                | Y                |                                                                         |
| Payments & Wallet         | Loyalty redemption at checkout                   | Allows users to redeem loyalty points at checkout.                           | Backlog         |             | Y                | Y                |                                                                         |
| Payments & Wallet         | Order confirmation screens                       | Displays confirmation after successful orders.                               | Backlog         |             | Y                | N                | UI.                                                                     |
| Payments & Wallet         | Payment failure fallback flow                    | Handles scenarios where payments fail.                                       | Backlog         |             | Y                | Y                |                                                                         |
| Payments & Wallet         | POS sync with in-app orders                      | Synchronizes in-app orders with Point of Sale systems.                       | Backlog         |             | N                | Y                | Backend integration.                                                    |
| Payments & Wallet         | Refund flow (initiated by admin)                 | Enables administrators to initiate refunds.                                  | Backlog         |             | Y                | Y                | Admin-facing UI/Backend.                                                |
| **Offline Functionality** | QR code available offline                        | Ensures QR codes are accessible without an internet connection.              | Backlog         |             | Y                | N                | Local storage.                                                          |
| Offline Functionality     | Previously watched video playback offline        | Allows playback of downloaded videos when offline.                           | Backlog         |             | Y                | N                | Local storage.                                                          |
| Offline Functionality     | Session history cache                            | Caches user's session history for offline access.                            | Backlog         |             | Y                | N                | Local storage.                                                          |
| Offline Functionality     | Booked session cache                             | Caches details of booked sessions for offline access.                        | Backlog         |             | Y                | N                | Local storage.                                                          |
| Offline Functionality     | App usability in airplane mode                   | Ensures basic app functions are available in airplane mode.                  | Backlog         |             | N                | N                | Overall app architecture.                                               |
| Offline Functionality     | Local push scheduling (if no connection)         | Schedules local push notifications if no internet connection is available.    | Backlog         |             | N                | N                | Client-side logic.                                                      |
| **Analytics & Optimization**| Event tracking (Mixpanel)                        | Tracks user events using Mixpanel.                                           | Backlog         |             | N                | Y                | Integration.                                                            |
| Analytics & Optimization  | Funnel tracking (bookings, drops, replays)       | Tracks user progress through key funnels.                                    | Backlog         |             | N                | Y                | Integration.                                                            |
| Analytics & Optimization  | Push open/click tracking                         | Tracks opens and clicks on push notifications.                               | Backlog         |             | N                | Y                | Integration.                                                            |
| Analytics & Optimization  | Referral conversion analytics                    | Analyzes the conversion rates of referrals.                                  | Backlog         |             | N                | Y                | Integration.                                                            |
| Analytics & Optimization  | Booking abandonment cohorts                      | Identifies and tracks users who abandon the booking process.                 | Backlog         |             | N                | Y                | Integration.                                                            |
| Analytics & Optimization  | Loyalty program usage tracking                   | Tracks how users engage with the loyalty program.                            | Backlog         |             | N                | Y                | Integration.                                                            |
| Analytics & Optimization  | A/B test targeting                               | Supports A/B testing for various features.                                   | Backlog         |             | N                | Y                | Integration/Backend.                                                    |
| Analytics & Optimization  | UX test event hooks                              | Provides hooks for conducting UX tests.                                      | Backlog         |             | N                | N                | Frontend instrumentation.                                               |
| Analytics & Optimization  | Real-time guest behavior logging                 | Logs real-time user behavior for analysis.                                   | Backlog         |             | N                | Y                | Backend/Integration.                                                    |
| **Admin & Integration Infrastructure**| Headless CMS for content control           | Uses a headless CMS for managing app content.                                | Backlog         |             | N                | Y                | Backend/Integration.                                                    |
| Admin & Integration Infrastructure| Park-specific content blocks                 | Allows content to be managed specifically for each park.                     | Backlog         |             | N                | Y                | Backend/CMS.                                                            |
| Admin & Integration Infrastructure| Drop scheduling module                       | Module for scheduling product drops.                                         | Backlog         |             | N                | Y                | Backend/Admin.                                                          |
| Admin & Integration Infrastructure| Staff LMS integration                        | Integrates with Staff Learning Management System.                            | Backlog         |             | N                | Y                | Backend.                                                                |
| Admin & Integration Infrastructure| Staff check-in panel (future scope)          | Panel for staff to check in users. (Future Scope)                            | Backlog         |             | Y                | Y                |                                                                         |
| Admin & Integration Infrastructure| Booking engine connection (WakeSys/Vivaticket) | Connects to external booking engines.                                        | Backlog         |             | N                | Y                | Backend.                                                                |
| Admin & Integration Infrastructure| FlowState video API sync                     | Synchronizes video data with FlowState API.                                  | Backlog         |             | N                | Y                | Backend.                                                                |
| Admin & Integration Infrastructure| CRM bidirectional sync                       | Enables two-way synchronization with CRM systems.                            | Backlog         |             | N                | Y                | Backend.                                                                |
| Admin & Integration Infrastructure| Loyalty system connection (external or Stripe-based) | Connects to an external or Stripe-based loyalty system.                      | Backlog         |             | N                | Y                | Backend.                                                                |
| Admin & Integration Infrastructure| Notification routing layer (OneSignal/Firebase) | Manages routing of notifications.                                            | Backlog         |             | N                | Y                | Backend.                                                                |
| Admin & Integration Infrastructure| Feature flag system per module               | Implements feature flags for granular control.                               | Backlog         |             | N                | Y                | Backend/Config.                                                         |
| Admin & Integration Infrastructure| Remote config toggles for beta features      | Allows remote toggling of beta features.                                     | Backlog         |             | N                | Y                | Backend/Config.                                                         |
```
## 🎨 Design System
* Figma component library
* Typography & colors
* Brand assets
* UI motion references
* Lottie animations
## 🔌 API Spec
* Auth (Apple, Google, Email)
  * Booking system (Surf, Wellness, Events)
  * Replay (FlowState API integration)
  * Membership & Referral
  * Retail / Drop inventory
  * Wallet / Stripe integration
  * POS Sync
  * Notification (OneSignal/Firebase)
  * CRM (HubSpot/Salesforce)
  * Example requests & responses
## 🧩 Data Models
JSON schemas and structure for:
  * Users
  * Bookings
  * Sessions
  * Replay metadata
  * Crews
  * Orders (F\&B, Drops)
  * Payments
  * Points/Perks
## 🔗 Integrations
| Integration | Service              | Link                               | Notes                                  |
| :------ | :------------- | :--------------------- | :----------------------- |
| Auth        | Apple, Google        | OAuth Config                       | SSO ready                              |
| Booking     | WakeSys / Vivaticket | Docs                               | Confirm vendor                         |
| Video       | FlowState API        | Docs                               | For Replay                             |
| Payments    | Stripe               | Stripe Docs                        | Credit & wallet                        |
| CMS         | Sanity / Contentful  | Docs                               | Park content                           |
| Push        | OneSignal / Firebase | Docs                               | Real-time alerts                       |
| Analytics   | Mixpanel             | Setup                              | Funnels, events                        |
| CRM         | HubSpot / Salesforce | Docs                               | Referral sync                          |
## 📡 Offline Strategy
  * Cached QR codes
  * Local session & video cache
  * Offline push scheduling
  * Booking fallback UX
  * Airplane mode friendly
## 📬 Push Notification Plan
  * **Triggers:** Bookings, replays, drops, referral success
  * **Segmenting:** Park-based, behavior-based, crew-based
  * **Tools:** OneSignal, Firebase
  * **Templates:** Title + body + deep link + icon
## 🚦 Release Plan
| Phase      | Weeks | Description                                      |
| :------- | :---- | :----------------------------- |
| Phase 0    | 0–2   | Setup, architecture, vendor integration          |
| Phase 1    | 2–6   | Auth, booking, referrals                         |
| Phase 2    | 6–12  | Replay, crew, push                               |
| Phase 3    | 10–16 | Retail, F\&B, wallet                              |
| Phase 4    | 14–18 | Offline UX                                       |
| Phase 5    | 18–22 | CMS, analytics, admin tools                      |
| QA & Beta  | 22–24 | Final polish, testing, TestFlight                |
## 🧪 QA Checklist
Per-module test plans:
* Booking flow edge cases
* Push reliability (foreground vs background)
* Offline scenarios
* Payment errors
* Replay sync & performance
* Loyalty accrual, redemption accuracy
## 📊 Analytics & Event Plan
* Mixpanel setup
* Key funnels: Book \> Replay \> Rebook
* Referral performance tracking
* Loyalty program analytics
* A/B test toggle tracking
## 🧰 Feature Flag System
* Remote config per region/park
* Beta toggle support
* Emergency kill switches
---
# Haevn App Development Plan
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
### Phase 4 Documentation: Offline & Edge (Weeks 14-18)
**Overview:**  
This phase ensures the app works reliably in offline scenarios and edge cases. It also includes the design of retail & drops, F&B ordering, wallet & payments, and offline state screens.
**Key Deliverables:**
- UI designs for retail & drops (10 screens), F&B ordering (8 screens), wallet & payments (10 screens), and offline states (4 screens)
- Offline-first UX with offline QR pass system, local caching, sync mechanism, and indicators
**Success Metrics:**
- Critical app features work without an internet connection
- Users can access their QR passes, view cached content, and receive notifications about sync status
### Phase 5 Documentation: Admin & Analytics (Weeks 18-22)
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
### Final Phase Documentation: QA, Beta, Optimization (Weeks 22-24)
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
-