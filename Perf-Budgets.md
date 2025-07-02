<!-- docs/Perf-Budgets.md -->

# Performance Budgets

## Targets
| Area | Budget | Rationale |
|------|--------|-----------|
| App Launch Cold | < 2 s | Match top quartile apps |
| Frame Drops (scroll) | < 1 % | Maintain 60 fps feel |
| GraphQL P95 | < 150 ms | Keep below perceptible lag |
| APK/IPA Size | < 30 MB | Faster OTA updates |

## CI Enforcement
* Lighthouse CI for web landing pages (budget.json)  
* `xcodebuild-time-profiling` job fails if launch breaches budget  
* k6 load test in pipeline validates API latency drift
