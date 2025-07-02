<!-- docs/Analytics-BI.md -->

# Analytics and BI Warehouse

## Event Taxonomy
| Namespace | Sample Event | Properties |
|-----------|--------------|------------|
| `Booking` | `booking_created` | `venue_id`, `value`, `surface`, `kuon_uid` |
| `FlowState` | `fs_started` | `origin`, `duration_ms` |
| `Membership` | `membership_upgraded` | `from_tier`, `to_tier` |

## ETL
* Mixpanel export → Snowpipe→Snowflake  
* dbt transforms in `/analytics/dbt/`  
* Data freshness tests every hour

## Business Dashboards
1. Weekly Active Members (WAM)  
2. Booking Conversion Funnel  
3. Revenue per Active Member (RPAM)  
4. Churn Cohort Heatmap

## Data Governance
* PII columns encrypted at rest in Snowflake  
* Retain raw events 400 days then aggregate
