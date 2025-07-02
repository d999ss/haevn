<!-- docs/Data-Models.md -->

# Data Models

## Philosophy
A human-readable, version-controlled contract between backend and client.

## Entity Catalogue
| Entity | Primary Keys | Relationships | Retention |
|--------|--------------|---------------|-----------|
| `User` | `id` (UUIDv7) | ↔ Membership, Booking | Never hard-delete |
| `Membership` | composite (`user_id`, `program_id`) | → Wallet | Keep 7 years post-cancel |
| `Booking` | `id` | → PaymentIntent | 10 years (regulations) |
| `FlowState` | `id` | → User | 2 years rolling window |

_(See `/schemas/ddl/2025-07-01-initial.sql` for field definitions.)_

## Migrations
* **Tool** – `golang-migrate` executed in CI.  
* All migrations are idempotent and forward-only; rollbacks use `DOWN` stubs plus DB snapshots.  
* Semantic version tag required in the commit message (`schema:1.3.0`).

## Source-of-Truth ERD
![ERD](../diagrams/erd-haevn-v1.png)  

## Validation Layer
* PostgreSQL `CHECK` constraints for bounded enums  
* Prisma schema mirrors the SQL definition and is re-generated each merge to `main`.

## Playbook for Breaking Changes
1. Ship additive columns behind feature flag.  
2. Backfill in background via Sidekiq workers.  
3. Cut clients over, then drop legacy field after two releases.
