<!-- docs/Release-Strategy.md -->

# Release Strategy

## Philosophy
Ship fast without fear through trunk-based development and progressive delivery.

## Channels
| Channel | Audience | Typical Cadence |
|---------|----------|-----------------|
| **Nightly** | Internal QA | Daily 02:00 UTC |
| **Beta** | 1 % private cohort | Weekly |
| **Phased** | 5 % → 25 % → 100 % | Two-day ramps |
| **Hotfix** | All users | Immediate |

## Feature Flags
* Managed by `GrowthBook` SDK  
* Flags auto-expire after 30 days if unused  
* Kill-switch path documented for each flag

## Rollback Automation
* `pre-prod` tag retained for 30 days  
* Single click in Argo Rollouts to revert image SHA  
* Mobile: Fastlane `FASTLANE_SKIP_UPLOAD_METADATA` for re-sign and resubmit

## Forced Upgrades
* App hard-block if version < N-2  
* Grace period 7 days, banner shown in-app
