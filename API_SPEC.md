# Haevn API Specification

This document provides comprehensive documentation for the Haevn API, including endpoint definitions, request/response formats, authentication methods, and integration examples.

## API Overview

The Haevn API follows RESTful principles and uses JSON for data exchange. All API requests require authentication except where explicitly noted.

- **Base URL (Production)**: `https://api.haevn.com/v1`
- **Base URL (Staging)**: `https://api-staging.haevn.com/v1`
- **Base URL (Development)**: `https://api-dev.haevn.com/v1`

## Authentication

### JWT Authentication

The API uses JWT (JSON Web Tokens) for authentication.

#### Obtaining a Token

```
POST /auth/login
```

Request:
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```

Response:
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expires_in": 3600
}
```

#### Using a Token

Include the token in the Authorization header:

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

#### Refreshing a Token

```
POST /auth/refresh
```

Request:
```json
{
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### OAuth Authentication

For third-party authentication (Apple, Google):

```
POST /auth/oauth/{provider}
```

Where `provider` is one of: `apple`, `google`

Request:
```json
{
  "token": "oauth-token-from-provider",
  "device_id": "unique-device-identifier"
}
```

## Rate Limiting

API requests are rate-limited to prevent abuse:

- 100 requests per minute per user for most endpoints
- 10 requests per minute for authentication endpoints
- 1000 requests per day for video processing endpoints

Rate limit headers are included in all responses:

```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 99
X-RateLimit-Reset: 1625097600
```

## Core Endpoints

### User Management

#### Create User

```
POST /users
```

Request:
```json
{
  "email": "user@example.com",
  "password": "securepassword",
  "first_name": "John",
  "last_name": "Doe",
  "phone": "+15551234567"
}
```

#### Get User Profile

```
GET /users/me
```

Response:
```json
{
  "id": "usr_123456789",
  "email": "user@example.com",
  "first_name": "John",
  "last_name": "Doe",
  "phone": "+15551234567",
  "membership_tier": "premium",
  "points_balance": 500,
  "created_at": "2023-01-15T12:00:00Z",
  "preferences": {
    "notifications": {
      "email": true,
      "push": true,
      "sms": false
    }
  }
}
```

#### Update User Profile

```
PATCH /users/me
```

Request:
```json
{
  "first_name": "Johnny",
  "preferences": {
    "notifications": {
      "sms": true
    }
  }
}
```

### Booking Management

#### List Available Sessions

```
GET /sessions
```

Query Parameters:
- `park_id` (string): Filter by park
- `date` (string): Filter by date (YYYY-MM-DD)
- `activity_type` (string): Filter by activity type (surf, wellness, event)

Response:
```json
{
  "sessions": [
    {
      "id": "sess_123456789",
      "park_id": "park_123",
      "activity_type": "surf",
      "start_time": "2023-06-15T10:00:00Z",
      "end_time": "2023-06-15T11:00:00Z",
      "capacity": 8,
      "available_spots": 3,
      "price": {
        "amount": 120,
        "currency": "USD"
      }
    }
  ],
  "pagination": {
    "total": 24,
    "page": 1,
    "per_page": 10,
    "next_page": 2
  }
}
```

#### Create Booking

```
POST /bookings
```

Request:
```json
{
  "session_id": "sess_123456789",
  "participants": [
    {
      "user_id": "usr_123456789",
      "experience_level": "intermediate"
    }
  ],
  "payment_method_id": "pm_123456789"
}
```

Response:
```json
{
  "id": "book_123456789",
  "session_id": "sess_123456789",
  "status": "confirmed",
  "participants": [
    {
      "user_id": "usr_123456789",
      "experience_level": "intermediate"
    }
  ],
  "total_price": {
    "amount": 120,
    "currency": "USD"
  },
  "payment_status": "paid",
  "created_at": "2023-06-10T15:30:00Z",
  "qr_code": "data:image/png;base64,..."
}
```

### FlowState Integration

#### List User Videos

```
GET /videos
```

Response:
```json
{
  "videos": [
    {
      "id": "vid_123456789",
      "session_id": "sess_123456789",
      "title": "Morning Surf Session",
      "duration": 180,
      "thumbnail_url": "https://cdn.haevn.com/thumbnails/vid_123456789.jpg",
      "created_at": "2023-06-15T11:30:00Z",
      "status": "processed",
      "stats": {
        "wave_count": 12,
        "longest_ride": 45,
        "top_speed": 24.5
      }
    }
  ],
  "pagination": {
    "total": 5,
    "page": 1,
    "per_page": 10
  }
}
```

#### Get Video Details

```
GET /videos/{video_id}
```

Response:
```json
{
  "id": "vid_123456789",
  "session_id": "sess_123456789",
  "title": "Morning Surf Session",
  "description": "Great waves at the north bay",
  "duration": 180,
  "thumbnail_url": "https://cdn.haevn.com/thumbnails/vid_123456789.jpg",
  "stream_url": "https://stream.haevn.com/videos/vid_123456789.m3u8",
  "download_url": "https://cdn.haevn.com/videos/vid_123456789.mp4",
  "created_at": "2023-06-15T11:30:00Z",
  "status": "processed",
  "stats": {
    "wave_count": 12,
    "longest_ride": 45,
    "top_speed": 24.5,
    "wave_details": [
      {
        "start_time": 23,
        "end_time": 48,
        "duration": 25,
        "max_speed": 22.3
      }
    ]
  },
  "angles": [
    {
      "id": "ang_123456789",
      "label": "Main Camera",
      "stream_url": "https://stream.haevn.com/videos/vid_123456789/ang_123456789.m3u8"
    }
  ],
  "sharing": {
    "public": false,
    "share_url": "https://haevn.com/v/abc123"
  }
}
```

### Membership & Referrals

#### Get Membership Details

```
GET /memberships/me
```

Response:
```json
{
  "tier": "premium",
  "valid_until": "2024-06-15T00:00:00Z",
  "points_balance": 500,
  "benefits": [
    {
      "id": "ben_123",
      "name": "Priority Booking",
      "description": "Book sessions 7 days in advance"
    },
    {
      "id": "ben_124",
      "name": "Free Equipment",
      "description": "Complimentary board and wetsuit rental"
    }
  ],
  "referral_code": "JOHN123",
  "referral_url": "https://haevn.com/r/JOHN123",
  "referrals": {
    "count": 3,
    "pending": 1,
    "completed": 2,
    "points_earned": 300
  }
}
```

#### Create Referral

```
POST /referrals
```

Request:
```json
{
  "email": "friend@example.com",
  "name": "Jane Smith",
  "message": "Check out Haevn! It's amazing."
}
```

Response:
```json
{
  "id": "ref_123456789",
  "status": "sent",
  "recipient_email": "friend@example.com",
  "created_at": "2023-06-15T14:30:00Z"
}
```

### Retail & F&B

#### List Products

```
GET /products
```

Query Parameters:
- `category` (string): Filter by category (apparel, equipment, food, beverage)
- `park_id` (string): Filter by park availability

Response:
```json
{
  "products": [
    {
      "id": "prod_123456789",
      "name": "Haevn Logo T-Shirt",
      "description": "Organic cotton t-shirt with Haevn logo",
      "category": "apparel",
      "price": {
        "amount": 35,
        "currency": "USD"
      },
      "images": [
        "https://cdn.haevn.com/products/tshirt_front.jpg",
        "https://cdn.haevn.com/products/tshirt_back.jpg"
      ],
      "variants": [
        {
          "id": "var_123",
          "name": "Size",
          "options": ["S", "M", "L", "XL"]
        },
        {
          "id": "var_124",
          "name": "Color",
          "options": ["Blue", "Black"]
        }
      ],
      "inventory": {
        "in_stock": true,
        "quantity": 45
      }
    }
  ],
  "pagination": {
    "total": 24,
    "page": 1,
    "per_page": 10,
    "next_page": 2
  }
}
```

#### Create Order

```
POST /orders
```

Request:
```json
{
  "park_id": "park_123",
  "items": [
    {
      "product_id": "prod_123456789",
      "quantity": 1,
      "variant_selections": {
        "var_123": "M",
        "var_124": "Blue"
      }
    }
  ],
  "pickup_time": "2023-06-15T16:00:00Z",
  "payment_method_id": "pm_123456789"
}
```

Response:
```json
{
  "id": "ord_123456789",
  "status": "confirmed",
  "items": [
    {
      "product_id": "prod_123456789",
      "name": "Haevn Logo T-Shirt",
      "quantity": 1,
      "variant_selections": {
        "var_123": "M",
        "var_124": "Blue"
      },
      "unit_price": {
        "amount": 35,
        "currency": "USD"
      },
      "total_price": {
        "amount": 35,
        "currency": "USD"
      }
    }
  ],
  "subtotal": {
    "amount": 35,
    "currency": "USD"
  },
  "tax": {
    "amount": 2.80,
    "currency": "USD"
  },
  "total": {
    "amount": 37.80,
    "currency": "USD"
  },
  "pickup_time": "2023-06-15T16:00:00Z",
  "pickup_code": "H123",
  "payment_status": "paid",
  "created_at": "2023-06-15T14:45:00Z"
}
```

## Webhook Events

Haevn can send webhook notifications for various events:

```
POST https://your-webhook-url.com
```

Example payload:
```json
{
  "event_type": "booking.confirmed",
  "created_at": "2023-06-15T15:30:00Z",
  "data": {
    "booking_id": "book_123456789",
    "user_id": "usr_123456789",
    "session_id": "sess_123456789"
  }
}
```

Available event types:
- `booking.created`
- `booking.confirmed`
- `booking.canceled`
- `video.processing`
- `video.ready`
- `order.created`
- `order.fulfilled`
- `user.registered`
- `referral.completed`

## Error Handling

All API errors follow a consistent format:

```json
{
  "error": {
    "code": "validation_error",
    "message": "Invalid input data",
    "details": [
      {
        "field": "email",
        "message": "Must be a valid email address"
      }
    ]
  }
}
```

Common error codes:
- `authentication_error`: Invalid or missing authentication
- `authorization_error`: Insufficient permissions
- `validation_error`: Invalid input data
- `not_found`: Resource not found
- `rate_limit_exceeded`: Too many requests
- `server_error`: Internal server error

## Integration Examples

### Booking Flow Integration

```swift
// Swift example using URLSession
func bookSession(sessionId: String, completion: @escaping (Result<Booking, Error>) -> Void) {
    let url = URL(string: "https://api.haevn.com/v1/bookings")!
    var request = URLRequest(url: url)
    request.httpMethod = "POST"
    request.addValue("Bearer \(accessToken)", forHTTPHeaderField: "Authorization")
    request.addValue("application/json", forHTTPHeaderField: "Content-Type")
    
    let body: [String: Any] = [
        "session_id": sessionId,
        "participants": [
            ["user_id": currentUserId, "experience_level": "intermediate"]
        ],
        "payment_method_id": savedPaymentMethodId
    ]
    
    request.httpBody = try? JSONSerialization.data(withJSONObject: body)
    
    URLSession.shared.dataTask(with: request) { data, response, error in
        // Handle response
    }.resume()
}
```

### FlowState Video Integration

```swift
// Swift example for video playback
func loadVideoDetails(videoId: String, completion: @escaping (Result<Video, Error>) -> Void) {
    let url = URL(string: "https://api.haevn.com/v1/videos/\(videoId)")!
    var request = URLRequest(url: url)
    request.addValue("Bearer \(accessToken)", forHTTPHeaderField: "Authorization")
    
    URLSession.shared.dataTask(with: request) { data, response, error in
        // Parse video details and set up AVPlayer with stream_url
    }.resume()
}
```

## API Versioning

The API uses a versioning scheme in the URL path (`/v1/`). When breaking changes are introduced, a new version will be created (e.g., `/v2/`).

Deprecation notices will be provided at least 6 months before removing any API version.

## Security Considerations

- All API requests must use HTTPS
- JWT tokens expire after 1 hour
- Refresh tokens expire after 30 days
- Sensitive operations require additional verification
- PCI compliance for payment operations
- Regular security audits and penetration testing
