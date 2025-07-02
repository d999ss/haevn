<!-- docs/Monitoring-Observability.md -->

# Monitoring and Observability

## Golden Signals
Latency, Traffic, Errors, Saturation (per USE/RED).

## Tooling Stack
* **Metrics** – Prometheus + Grafana Cloud
* **Tracing** – OpenTelemetry exporters, Tempo storage
* **Logs** – Loki + S3 long-term archive (365 days)
* **RUM / Mobile** – Datadog Mobile-SDK

## SLOs
| Service | Objective | Threshold | Alert |
|---------|-----------|-----------|-------|
| Public GraphQL API | 99.9 % "<300 ms" 95ᵗʰ | 99 % | PagerDuty P1 |
| Booking POST | ≤ 0.25 % error rate | ≥0.5 % | PagerDuty P1 |
| Push Notification Latency | P90 <1 s | >2 s | PagerDuty P2 |

## Dashboards
1. "Executive Health" – high-level KPIs for C-suite  
2. "Mobile QoS" – launch time, ANR, crash-free sessions  
3. "Infra Deep Dive" – node CPU, pod restarts, disk IO

## On-Call Rotation
* SRE primary (week on / week off)  
* Escalation ladder SRE → Backend lead → CTO
