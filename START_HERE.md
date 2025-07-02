---
id: start-here
title: "Start Here"
slug: /
sidebar_position: 0
---

# Welcome to **Haevn App** Wiki  

> **Purpose:** Give every newcomer—engineer, designer, or stakeholder—a clear, one‑page map of **what Haevn is, why it exists, and how to navigate this documentation set**.

---

## 1  |  Mission in a Sentence
Haevn is the **digital operating system for modern surf & adventure parks**—seamlessly uniting **booking, on‑site payments, FlowState video replays, membership rewards, retail drops, and crew‑based community features** into one friction‑free iOS experience, with a complementary web app for broader access.

Our north star: **"Own the entire guest journey—from first tap to last wave."**

---

## 2  |  How This Wiki Is Organized
| Section | Why You'd Go There |
|---------|--------------------|  
| **Project Overview** (`PRODUCT_OVERVIEW.md`) | Deep‑dive feature matrix, phased roadmap, risk log |
| **Architecture** (`docs/Mobile-App-Architecture.md`) | High‑level diagrams, service boundaries, data flow |
| **Web Strategy** (`docs/Web-App-Strategy.md`) | Web app architecture, tech stack, and implementation plan |
| **Design System** (`docs/Design-System.md`) | Tokens, components, patterns, and accessibility standards |
| **Feature Documentation** | Detailed specs for all major features |
| **Infrastructure** | Cloud architecture, CI/CD, deployment strategies |
| **Security** | Security protocols, encryption, compliance |
| **Data Models** | Entity relationships, validation, migration strategies |
| **Monitoring** | Logging, alerting, and performance tracking |
| **API Spec** (`API_SPEC.md`) | Every endpoint, payload, and auth flow |
| **Dev Onboarding** (`ONBOARDING.md`) | Local setup, branch naming, first‑week tasks |
| **Build & CI/CD** (`BUILD_PROCESS.md` + `CI_CD_PIPELINE.md`) | From commit → TestFlight → App Store |
| **Testing Strategy** (`TESTING_STRATEGY.md`) | Unit, integration, UI, performance, accessibility |
| **Feature Flags** (`FEATURE_FLAGS.md`) | How we toggle, roll out, and hot‑patch features |

---

## 3  |  Product Scope at a Glance
```
Core UX      → Booking ▸ Membership ▸ Wallet ▸ FlowState Replay
Engagement   → Crews ▸ Referrals ▸ Push Notifications
Commerce     → Retail Drops ▸ F&B Ordering ▸ POS Sync
Edge Cases   → Offline QR & Video ▸ Local Caching
Ops/Admin    → CMS ▸ Analytics ▸ Feature Flags
Platforms    → iOS (Primary) ▸ Web App (Responsive)
```
Full feature documentation for each module lives in the `docs/` directory:
* **Core Features**: Booking System, FlowState Replay, Membership & Referrals, Wallet & Payments
* **Social & Commerce**: Crews & Community, Retail & F&B
* **Technical & Operations**: Infrastructure, Security, Monitoring & Observability

---

## 4  |  Meet the **Bttr. Design Team**
Bttr. is the embedded design partner driving every pixel and interaction in Haevn. Their remit:  

* **Design System stewardship** – color, type, spacing, motion, component library  
* **Hi‑fi UI & prototypes** for all 13 modules  
* **User research & usability testing** to validate flows  
* **Design QA** during implementation, ensuring pixel‑perfect delivery  
* **Marketing & App Store creatives** aligned with in‑app experience  

Collaboration happens in Figma + Slack (`#haevn-design`), with a weekly design‑dev sync every **Wednesday @ 10 AM PST**. Detailed workflow and request process live in `DESIGN_COLLABORATION.md`.

---

## 5  |  What Each Team Owns

| Area | Primary Owner | Support |
|------|---------------|---------|
| Product vision & roadmap | Haevn PM | Bttr., Eng Lead |
| Visual & interaction design | **Bttr. Design** | iOS devs (feasibility) |
| iOS app (SwiftUI + Combine) | Mobile Eng Team | Bttr. (design QA) |
| Backend services & integrations | Platform Eng Team | Vendors (WakeSys, FlowState, Stripe) |
| CI/CD & DevOps | DevOps Engineer | Eng Leads |
| QA & Accessibility | QA Engineer | All teams |
| Analytics & Experimentation | Data Lead | PM, Eng |

---

## 6  |  First‑Timer Checklist
1. **Clone the repo** & run the onboarding script (see `Developer Onboarding Guide`).  
2. Open **`PRODUCT_OVERVIEW.md`** and scan the feature matrix to grasp scope.  
3. Review the web prototype in the `web-prototype` directory to understand the implementation.
4. Explore the `external-landscape` directory for information about industry partners like Aventuur.
6. Join the relevant Slack channels (`#haevn-ios-dev`, `#haevn-web-dev`, `#haevn-design`).  
7. If you're a developer, run the unit tests—they double as executable documentation.  
8. Review the project structure to understand the codebase organization.
9. Book a 30‑minute "Getting Started" walkthrough with a Bttr. designer or Eng mentor.

---

Welcome aboard—now let's get people from **tap → tube → replay** faster than ever.
