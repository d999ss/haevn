# Crews & Community

## Overview

The Crews & Community module is a social layer within the Haevn app that enables guests to form groups, coordinate activities, and build lasting connections around their shared passion for surfing and adventure. This feature transforms Haevn from a transactional booking platform into a vibrant community ecosystem.

## Business Rationale

* **Increased Retention**: Users with social connections have 3x higher retention rates
* **Group Bookings**: Crews drive larger group bookings and higher overall spend
* **Organic Growth**: Community features facilitate word-of-mouth acquisition
* **Brand Loyalty**: Social connections create emotional attachment to the Haevn brand
* **Content Generation**: User-generated content from crews enriches the platform

## Key Features

### Crew Creation & Management

* **Crew Formation**: Users can create named crews with custom avatars/banners
* **Invitation System**: Multiple methods to invite friends (contacts, QR code, link sharing)
* **Roles & Permissions**: Crew leaders, admins, and members with appropriate permissions
* **Crew Profiles**: Public or private crew profiles with activity history and stats
* **Size Limits**: Free crews limited to 10 members; premium crews up to 50 members

### Communication Tools

* **Crew Chat**: Dedicated in-app messaging for each crew
* **Event Planning**: Create and coordinate group sessions and meetups
* **Announcements**: Broadcast important updates to all crew members
* **Activity Feed**: Timeline of crew members' bookings, achievements, and shared content
* **Polls & Decisions**: Tools to facilitate group decision-making

### Social Features

* **Session Tagging**: Tag crew members in bookings and FlowState videos
* **Shared Media Gallery**: Collection of photos and videos from crew activities
* **Achievement Sharing**: Celebrate and share individual and group milestones
* **Leaderboards**: Friendly competition with stats like "most sessions" or "biggest improvement"
* **Mentions & Reactions**: Social engagement tools within crew communications

### Group Activities

* **Group Booking**: Streamlined process for booking sessions for multiple crew members
* **Crew Challenges**: Time-limited challenges for crews to complete together
* **Crew Events**: Special events and competitions exclusive to crews
* **Skill Matching**: Suggestions for compatible crew members based on skill level
* **Instructor Coordination**: Book group lessons with preferred instructors

## Technical Implementation

### Data Models

* **Crew**: Core entity representing a group
  * `id`, `name`, `description`, `avatar_url`, `banner_url`, `privacy_level`, `created_at`, `member_count`
* **CrewMembership**: Relationship between users and crews
  * `id`, `user_id`, `crew_id`, `role`, `joined_at`, `invited_by`, `status`
* **CrewActivity**: Events in the crew timeline
  * `id`, `crew_id`, `activity_type`, `actor_id`, `target_id`, `metadata`, `created_at`
* **CrewMessage**: Communications within a crew
  * `id`, `crew_id`, `sender_id`, `content`, `attachment_urls`, `sent_at`, `read_by`

### API Endpoints

* `GET /crews` - List crews (filtered by user membership)
* `POST /crews` - Create a new crew
* `GET /crews/{id}` - Get crew details
* `PUT /crews/{id}` - Update crew information
* `GET /crews/{id}/members` - List crew members
* `POST /crews/{id}/invites` - Send crew invitations
* `GET /crews/{id}/activities` - Get crew activity feed
* `POST /crews/{id}/messages` - Send a message to the crew
* `GET /crews/{id}/messages` - Get crew message history
* `POST /crews/{id}/bookings` - Create a group booking

### Real-time Features

* **WebSocket Connections**: For live chat and activity updates
* **Push Notifications**: For crew invites, messages, and activity alerts
* **Presence Indicators**: Show which crew members are currently active
* **Typing Indicators**: Display when someone is composing a message
* **Live Session Tracking**: See which crew members are currently in sessions

## Integration Points

* **Booking System**: Group booking capabilities and shared session visibility
* **FlowState Replay**: Crew access to shared videos and group highlights
* **Membership System**: Crew benefits tied to individual membership tiers
* **Notification System**: Crew-specific notification preferences
* **Calendar**: Shared crew events and session schedules

## Privacy & Moderation

* **Privacy Controls**: Options for public, discoverable, or private crews
* **Content Moderation**: Reporting system for inappropriate content or behavior
* **Blocking Capabilities**: Individual and crew-level blocking options
* **Data Visibility**: Clear controls over what information is shared with crew members
* **Parental Controls**: Special protections for crews with minor members

## User Experience Considerations

* **Onboarding Flow**: Guided process for creating or joining first crew
* **Empty States**: Engaging prompts when crews are new or inactive
* **Notification Management**: Granular control over crew-related notifications
* **Accessibility**: Inclusive design for all communication features
* **Offline Support**: Access to key crew information when connectivity is limited

## Performance Metrics

* **Crew Creation Rate**: Number of new crews formed per month
* **Crew Activity Level**: Messages, bookings, and interactions per crew
* **Group Booking Rate**: Percentage of bookings made as crew vs. individual
* **Crew Retention**: Longevity and activity sustainability of crews
* **Cross-Crew Interaction**: Connections formed between different crews

## Future Enhancements

* **Crew Challenges**: Structured competitions between crews
* **Crew Rewards**: Special perks and discounts for active crews
* **Crew Merchandise**: Custom crew-branded gear and apparel
* **Crew Progression**: Collective skill development tracking
* **Inter-Crew Tournaments**: Organized competitions between crews
* **Crew Recommendations**: AI-powered suggestions for new crews to join

## Stakeholder Impact

* **Guests**: Enhanced social experience and motivation to return
* **Crew Leaders**: Tools to organize and grow their communities
* **Staff**: Improved ability to manage and serve group experiences
* **Management**: Higher retention and increased group revenue
* **Marketing**: Authentic community stories for brand building
