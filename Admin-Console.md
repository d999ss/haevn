<!-- docs/Admin-Console.md -->

# Admin Console Requirements

## Personas
* Support Agent  
* Venue Manager  
* Finance Ops  
* Super-Admin

## Core Screens
1. **Dashboard** – System health, today's bookings  
2. **Bookings** – Search, modify, refund  
3. **Memberships** – Tier upgrades, churn view  
4. **Audit Log** – Immutable event list, export CSV  
5. **RBAC Editor** – Assign roles, TTL-based invites

## Tech Notes
* Built with Next.js App Router, protected routes  
* Uses the same GraphQL endpoint as mobile with `x-admin=true` header  
* Feature parity tests with Playwright (admin tag)
