<!-- docs/Infrastructure.md -->

# Infrastructure

## Purpose
Provide a single, source-of-truth narrative of how Haevn is hosted, scaled, secured and observed in production.

## Guiding Principles
* Everything is codified (Infrastructure as Code).
* Stateless when possible, durable when required.
* Safety first: every change must be revertible in < 10 minutes.
* Predictable costs and clear cost-allocation tags.

## Physical Topology
| Layer | Cloud Service | Notes |
|-------|--------------|-------|
| Edge  | Cloudflare (WAF, CDN, Rate Limiting) | 30 POPs minimum |
| Front Door | AWS ALB per region | Blue-green switch via weighted target groups |
| Runtime | EKS (Kubernetes) | 3 public subnets, 3 private, across 3 AZs |
| Data | RDS (PostgreSQL) + Aurora Serverless-V2 | Multi-AZ synchronous replication |
| File Objects | S3 + S3 Intelligent-Tiering | 90-day lifecycle policy |
| Cache | ElastiCache (Redis Cluster Mode) | Read replicas in each AZ |
| Async | SQS + SNS + EventBridge | Dead-letter queues set for 14 days |
| Observability | Grafana Cloud + Loki + Tempo | OTLP exporters baked into base images |
| Secrets | AWS Secrets Manager | Automatic rotation every 90 days |

## Environments
1. **Dev** – Ephemeral review apps spun from PRs  
2. **Staging** – Mirrors prod topology, seeded daily  
3. **Prod** – Two active regions (us-east-1, us-west-2) with 15-second RPO

## CI / CD Flow (GitHub Actions)
```
PR → build-and-test → image publish (ECR) → helm-lint → deploy-preview
main branch merge → staging deploy → smoke tests
tag v* → prod canary (10%) → 30-minute bake → 100% rollout
```

## Backup & DR
* **Snapshots** – Nightly RDS snapshots, retained 35 days  
* **Object Versioning** – S3 versioning + MFA-delete  
* **Chaos Testing** – Monthly "AZ-Gone" game day with synthetic load

## RPO / RTO Targets
| Asset | RPO | RTO |
|-------|-----|-----|
| Core DB | 15 s | 60 m |
| Object Storage | 60 s | 4 h |
| Redis | 5 s | 30 m |

## Change-Control Checklist
1. PR label `infra-change` required  
2. Approved by at least one SRE  
3. `terraform plan` diff attached to PR  
4. Post-merge verification in #infra-alerts

## Future Work
* Add secondary EU region (eu-central-1) once DAU>50 K.  
* Evaluate Nitro Enclaves for sensitive ML workloads.
