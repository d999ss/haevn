# Membership & Referrals

## Overview

The Membership & Referrals system is a core business driver for Haevn, providing a tiered subscription model that enhances guest loyalty while creating predictable recurring revenue. The integrated referral program leverages existing customers as growth engines, reducing customer acquisition costs and strengthening community bonds.

## Business Rationale

### Membership Program

* **Predictable Revenue**: Monthly/annual subscription fees create stable cash flow
* **Increased Lifetime Value**: Members spend 2.7x more than non-members annually
* **Visit Frequency**: Members visit 3.2x more often than non-members
* **Reduced Price Sensitivity**: Members focus on value over individual transaction costs
* **Data Collection**: Deeper insights into customer preferences and behaviors

### Referral Program

* **Lower Acquisition Cost**: Referred customers cost 61% less to acquire than through paid channels
* **Higher Conversion Rate**: Referred prospects convert at 3-5x the rate of cold prospects
* **Increased Trust**: Social proof from friends/family overcomes initial hesitation
* **Community Building**: Strengthens social connections within the Haevn ecosystem
* **Brand Advocacy**: Transforms satisfied customers into active promoters

## Membership Structure

### Tier System

#### Blue (Free)
* **Cost**: Free
* **Benefits**:
  * Basic app access
  * Standard booking capabilities
  * FlowState Replay access (24-hour retention)
  * Public crew participation

#### Silver
* **Cost**: $29/month or $299/year
* **Benefits**: All Blue benefits, plus:
  * 10% discount on all bookings
  * Priority booking window (24 hours)
  * FlowState Replay extended retention (90 days)
  * 5 guest passes annually
  * Exclusive retail drops access

#### Gold
* **Cost**: $79/month or $799/year
* **Benefits**: All Silver benefits, plus:
  * 15% discount on all bookings
  * Priority booking window (72 hours)
  * FlowState Replay extended retention (1 year)
  * 12 guest passes annually
  * Free equipment rentals
  * Quarterly exclusive events

#### Platinum
* **Cost**: $149/month or $1,499/year
* **Benefits**: All Gold benefits, plus:
  * 20% discount on all bookings
  * Priority booking window (7 days)
  * FlowState Replay permanent retention
  * Unlimited guest passes (max 2 per visit)
  * Dedicated concierge service
  * Complimentary refreshments
  * Access to private lounge areas

### Membership Mechanics

* **Signup Flow**: Streamlined process with clear benefit communication
* **Billing Cycles**: Monthly or annual with appropriate discounts
* **Proration**: Fair adjustment when upgrading/downgrading mid-cycle
* **Grace Period**: 7-day window after failed payment before benefit suspension
* **Cancellation**: Simple one-click process with feedback collection
* **Winback**: Targeted offers for lapsed members
* **Gifting**: Option to purchase memberships for others

## Referral Program

### Referral Mechanics

* **Invitation Methods**:
  * Personal referral link
  * Email/SMS invitations
  * QR code sharing
  * In-app social sharing

* **Reward Structure**:
  * Referrer: $50 credit + 500 loyalty points per successful referral
  * Referee: $25 first-visit discount + free equipment rental

* **Qualification Criteria**:
  * Referee must be new to Haevn
  * Referee must complete first paid booking
  * 30-day attribution window from click to conversion

* **Limits & Controls**:
  * Maximum 10 successful referrals per month for reward eligibility
  * Anti-fraud measures for self-referrals
  * Compliance with regional referral marketing regulations

### Referral Experience

* **Referrer Journey**:
  * Access referral hub in app
  * Select sharing method
  * Track pending and successful referrals
  * Receive notifications on milestone achievements
  * Redeem and manage earned rewards

* **Referee Journey**:
  * Receive invitation via chosen channel
  * Click unique tracking link
  * Special onboarding experience acknowledging referral
  * Clear display of available welcome offer
  * Simplified conversion path to first booking

## Technical Implementation

### Data Models

* **Membership**:
  * `id`, `user_id`, `tier`, `status`, `start_date`, `renewal_date`, `payment_method_id`, `price`

* **MembershipBenefit**:
  * `id`, `tier`, `benefit_type`, `benefit_value`, `description`

* **MembershipTransaction**:
  * `id`, `membership_id`, `amount`, `type`, `status`, `processed_at`

* **Referral**:
  * `id`, `referrer_id`, `referee_email`, `status`, `created_at`, `converted_at`, `reward_status`

### API Endpoints

* `GET /memberships/current` - Get current user's membership details
* `POST /memberships` - Create or upgrade membership
* `PUT /memberships/cancel` - Cancel membership
* `GET /memberships/benefits` - List benefits by tier
* `GET /referrals` - List user's sent referrals
* `POST /referrals` - Create new referral
* `GET /referrals/rewards` - View earned referral rewards
* `POST /referrals/redeem` - Redeem referral reward

### Integration Points

* **Payment Processing**: Recurring billing through Stripe
* **CRM System**: Membership status synced to customer profiles
* **Email/SMS Gateway**: Automated communications for referrals
* **Analytics Platform**: Conversion tracking and attribution
* **Booking System**: Tier-based discounts and priority windows
* **Wallet**: Reward credits and redemption

## User Experience Considerations

### Membership UX

* **Transparent Value Communication**: Clear display of savings and benefits
* **Tier Comparison**: Side-by-side comparison of membership options
* **Progress Indicators**: Visual tracking of benefit usage
* **Renewal Reminders**: Timely notifications before billing
* **Upgrade Pathing**: Contextual prompts for tier upgrades when appropriate
* **Account Management**: Self-service tools for payment methods and preferences

### Referral UX

* **Prominent Placement**: Easily accessible referral option in main navigation
* **Success Celebration**: Engaging animations/notifications for successful referrals
* **Status Clarity**: Clear tracking of pending and completed referrals
* **Sharing Optimization**: Platform-appropriate sharing templates
* **Reward Visibility**: Prominent display of earned and available rewards
* **Gamification Elements**: Progress bars, milestones, and achievement badges

## Edge Cases & Error Handling

### Membership Edge Cases

* **Failed Payments**: Retry logic, notification system, grace period implementation
* **Mid-cycle Changes**: Proration calculations for upgrades/downgrades
* **Benefit Overuse**: Systems to prevent exceeding benefit limits
* **Account Merging**: Process for combining membership history across accounts
* **Refund Scenarios**: Policies for various cancellation circumstances

### Referral Edge Cases

* **Self-Referrals**: Detection and prevention mechanisms
* **Multiple Referrers**: First-touch attribution model with timestamp logging
* **Expired Referrals**: 30-day expiration with optional extension
* **Reversed Transactions**: Reward reversal if qualifying purchase is refunded
* **Fraudulent Patterns**: Monitoring system for suspicious referral activity

## Analytics & Reporting

### Membership Metrics

* **Conversion Rate**: Percentage of free users converting to paid tiers
* **Churn Rate**: Monthly/annual membership cancellation percentage
* **Upgrade Rate**: Percentage of members moving to higher tiers
* **Lifetime Value**: Average revenue per member over customer lifetime
* **Benefit Utilization**: Usage patterns of various membership benefits

### Referral Metrics

* **Referral Rate**: Percentage of users who refer at least one person
* **Conversion Rate**: Percentage of referrals that convert to customers
* **CAC Savings**: Acquisition cost comparison vs. traditional channels
* **Viral Coefficient**: Average number of new customers generated per customer
* **ROI**: Total value generated relative to referral reward costs

## Future Enhancements

### Membership Roadmap

* **Family Plans**: Multi-person memberships at discounted rates
* **Corporate Packages**: B2B membership offerings for companies
* **Membership Pausing**: Temporary suspension option for travelers
* **Loyalty Tiers**: Additional recognition based on tenure
* **Custom Benefits**: Personalized perks based on usage patterns

### Referral Roadmap

* **Multi-level Rewards**: Benefits for extended referral chains
* **Ambassador Program**: Enhanced tools for super-referrers
* **Targeted Campaigns**: Special referral incentives for specific segments
* **Referral Challenges**: Time-limited increased rewards
* **Partner Referrals**: Cross-promotion with complementary brands

## Stakeholder Impact

* **Guests**: Enhanced value, priority access, and social connection
* **Staff**: Clearer customer segmentation and service prioritization
* **Marketing**: Reduced acquisition costs and organic growth channels
* **Finance**: Predictable revenue streams and improved cash flow
* **Product Team**: Deeper user insights and engagement metrics
