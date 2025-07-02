<!-- docs/Security.md -->

# Security

## Threat Model
| Vector | Mitigation |
|--------|------------|
| Credential stuffing | Rate-limit + breached-password detection |
| Mobile MITM | TLS 1.3 + Cert-Pinning + ATS-strict |
| PII exfil via logs | Pino redaction plugin, log-scrubber CI |
| Insider-role abuse | RBAC + audit-trail immutable S3 logs |

## Baselines
* **OWASP ASVS v4 Level 2** target  
* SOC 2 Type II controls mapped in `/compliance/soc2/controls.xlsx`

## Encryption
* **At rest** – AES-256 for RDS, S3, EBS  
* **In transit** – TLS 1.3 mandatory, HSTS 2 years preload

## Secrets Management
* Secrets Manager + SSM Parameters  
* Automatic rotation via Lambda (90-day cadence)  
* No secrets in env vars for CI; use OIDC-based short-lived tokens

## Incident-Response Runbook
1. **Detect** – PagerDuty page from GuardDuty finding  
2. **Triage** – Severity matrix determines crew lead  
3. **Contain** – Rotate IAM keys, isolate pod  
4. **Eradicate** – Patch, redeploy, confirm log silence  
5. **Postmortem** – 72-hour RCA doc, company-wide readout
