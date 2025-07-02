# Haevn App Style Guide

This document outlines the coding standards, UI component usage guidelines, accessibility requirements, and localization practices for the Haevn app. Haevn's design system is built on the foundation of Geist, Vercel's design system, adapted to reflect our unique brand identity.

## Swift & SwiftUI Coding Standards

### Code Formatting

We use SwiftFormat and SwiftLint to enforce consistent code style. Key formatting rules include:

- 4 spaces for indentation (no tabs)
- 120 character line length limit
- Opening braces on the same line
- One blank line between methods
- Two blank lines between type definitions

### Naming Conventions

Follow Apple's [API Design Guidelines](https://swift.org/documentation/api-design-guidelines/):

- Use camel case for variable and function names (`myVariable`, `calculateTotal()`)
- Use Pascal case for type names (`BookingViewController`, `SessionModel`)
- Use descriptive names that clarify intent
- Avoid abbreviations unless they're well-known (`URL`, `ID`)
- Boolean properties should read as assertions (`isEnabled`, `hasVideos`)

```swift
// Good
func fetchAvailableSessions(for date: Date, at parkId: String) -> [Session]

// Avoid
func getSess(d: Date, p: String) -> [Session]
```

### SwiftUI Patterns

#### View Structure

- Limit view files to 300 lines
- Extract reusable components into separate views
- Use `@ViewBuilder` for complex conditional views
- Follow a consistent order for view modifiers

```swift
struct ContentView: View {
    // 1. Properties
    @State private var isLoading = false
    
    // 2. Body
    var body: some View {
        VStack {
            headerView
            contentView
            footerView
        }
    }
    
    // 3. Extracted views
    private var headerView: some View {
        Text("Header")
    }
    
    private var contentView: some View {
        Text("Content")
    }
    
    private var footerView: some View {
        Text("Footer")
    }
}
```

#### State Management

- Use `@State` for simple view-local state
- Use `@StateObject` for creating observed objects
- Use `@ObservedObject` for passing observed objects
- Use `@EnvironmentObject` for deeply shared objects
- Use `@Published` for properties that trigger view updates

### Architecture

- Follow MVVM architecture
- ViewModels should be testable and independent of UI
- Use Combine for reactive data flow
- Use dependency injection for services

```swift
class BookingViewModel: ObservableObject {
    @Published var sessions: [Session] = []
    @Published var isLoading = false
    @Published var errorMessage: String?
    
    private let bookingService: BookingServiceProtocol
    
    init(bookingService: BookingServiceProtocol) {
        self.bookingService = bookingService
    }
    
    func loadSessions(for date: Date) {
        isLoading = true
        bookingService.fetchSessions(date: date)
            .receive(on: DispatchQueue.main)
            .sink(
                receiveCompletion: { [weak self] completion in
                    self?.isLoading = false
                    if case .failure(let error) = completion {
                        self?.errorMessage = error.localizedDescription
                    }
                },
                receiveValue: { [weak self] sessions in
                    self?.sessions = sessions
                }
            )
            .store(in: &cancellables)
    }
}
```

## UI Component Guidelines

> **Note**: All UI components must be implemented according to specifications provided by the Bttr. Design Team. Any deviations must be approved through the design review process outlined in [DESIGN_COLLABORATION.md](DESIGN_COLLABORATION.md).

### Design System

All UI components should adhere to the Haevn Design System created and maintained by the Bttr. Design Team. The design system is built on Geist, Vercel's design system, adapted to reflect Haevn's brand identity. The design system includes:

- Typography
- Color palette
- Spacing system
- Component library
- Motion principles
- Material surfaces

Refer to [DESIGN_COLLABORATION.md](DESIGN_COLLABORATION.md) for detailed information on working with the Bttr. Design Team and accessing the latest design assets.

#### Geist Adaptation

Haevn's design system is built on Geist, with adaptations to reflect our brand identity. See the following documents for detailed information:

- [Geist-Adaptation-Guide.md](docs/Geist-Adaptation-Guide.md): Overview of how Geist has been adapted for Haevn
- [Design-Token-Reference.md](docs/Design-Token-Reference.md): Complete reference of Haevn's design tokens
- [Component-Adaptation-Guide.md](docs/Component-Adaptation-Guide.md): Guide for adapting Geist components
- [Accessibility-Implementation-Guide.md](docs/Accessibility-Implementation-Guide.md): Accessibility guidelines
- [Design-System-Migration-Guide.md](docs/Design-System-Migration-Guide.md): Migration roadmap

### Typography

Haevn uses Geist's typography system with our brand fonts. Use the predefined text styles:

```swift
Text("Heading")
    .font(.haevn(.heading))

Text("Body text")
    .font(.haevn(.body))
```

Available text styles (based on Geist's typography scale):
- `.largeTitle`: 34pt, bold (maps to Geist's `text-heading-34`)
- `.title`: 28pt, bold (maps to Geist's `text-heading-28`)
- `.heading`: 22pt, bold (maps to Geist's `text-heading-22`)
- `.subheading`: 17pt, semibold (maps to Geist's `text-heading-17`)
- `.body`: 17pt, regular (maps to Geist's `text-copy-17`)
- `.callout`: 16pt, regular (maps to Geist's `text-copy-16`)
- `.caption`: 12pt, regular (maps to Geist's `text-label-12`)
- `.code`: 13pt, monospace (maps to Geist's `text-mono-13`)

### Color System

Haevn's color system is based on Geist's 12-step perceptually linear color scales, adapted to our brand palette. Use semantic color names from the design system:

```swift
Text("Important")
    .foregroundColor(.haevn(.primary))

Button(action: {}) {
    Text("Book Now")
}
.background(Color.haevn(.accent))
```

Core colors (mapped to Geist's color scales):
- `.primary`: Main text color (maps to Geist's `color10`)
- `.secondary`: Secondary text color (maps to Geist's `color9`)
- `.accent`: Primary accent color (maps to Geist's `blue9`)
- `.background`: Background color (maps to Geist's `background1`)
- `.surface`: Surface/card color (maps to Geist's `background2`)
- `.error`: Error state color (maps to Geist's `red9`)
- `.success`: Success state color (maps to Geist's `green9`)
- `.warning`: Warning state color (maps to Geist's `amber9`)

Each color has a 12-step scale (e.g., `.oceanBlue1` through `.oceanBlue12`) for fine-grained control of contrast and emphasis.

### Spacing

Haevn's spacing system follows Geist's 4px modular scale. Use the spacing system for consistent layout:

```swift
VStack(spacing: .haevn(.medium)) {
    // Content
}
.padding(.haevn(.large))
```

Spacing values (aligned with Geist's scale):
- `.xsmall`: 4pt (maps to Geist's `1`)
- `.small`: 8pt (maps to Geist's `2`)
- `.medium`: 16pt (maps to Geist's `4`)
- `.large`: 24pt (maps to Geist's `6`)
- `.xlarge`: 32pt (maps to Geist's `8`)
- `.xxlarge`: 48pt (maps to Geist's `12`)

Following Geist's recommendation, use powers of two (`1,2,4,8`) for layout and primes (`3,5,7`) for internal breathing room.

### Component Library

Haevn's component library is built on Geist's component architecture, adapted to our brand styling. Use the shared component library for consistent UI:

```swift
HaevnButton("Book Session", style: .primary) {
    // Action
}

HaevnCard {
    // Card content
}
```

Core components (mapped to Geist components):
- `HaevnButton`: Standard buttons with various styles (based on Geist's Button)
- `HaevnCard`: Card container with standard styling (based on Geist's Material)
- `HaevnTextField`: Text input with consistent styling (based on Geist's Input)
- `HaevnToggle`: Custom toggle switch (based on Geist's Switch)
- `HaevnTabBar`: Standard tab bar (based on Geist's Tabs)
- `HaevnLoadingIndicator`: Loading spinner (based on Geist's Spinner)
- `HaevnEmptyState`: Empty state placeholder (based on Geist's Empty State)
- `HaevnModal`: Dialog component (based on Geist's Modal)
- `HaevnToast`: Notification component (based on Geist's Toast)
- `HaevnTooltip`: Tooltip component (based on Geist's Tooltip)

All components inherit Geist's accessibility features, keyboard navigation, and responsive behavior.

## Accessibility Guidelines

### Text Size Adaptation

- Support Dynamic Type for all text
- Test with accessibility text sizes

```swift
Text("Adaptable text")
    .font(.haevn(.body))
    .dynamicTypeSize(.large ... .accessibility3)
```

### VoiceOver Support

- Provide meaningful accessibility labels
- Group related elements
- Use accessibility traits appropriately

```swift
Image("surfIcon")
    .accessibilityLabel("Surf session")

Button(action: {}) {
    Text("Book")
}
.accessibilityHint("Books a surf session for the selected time")
```

### Color and Contrast

- Maintain minimum contrast ratio of 4.5:1 for normal text
- Don't rely solely on color to convey information
- Test with color blindness simulation

### Navigation and Interaction

- Ensure minimum tap target size of 44×44 points
- Support keyboard navigation on iPadOS
- Implement proper focus management

## Localization Practices

### String Localization

Use SwiftUI's built-in localization:

```swift
Text("booking.confirmation.title")
    .font(.haevn(.heading))
```

In Localizable.strings:
```
"booking.confirmation.title" = "Booking Confirmed";
```

### String Interpolation

Use string interpolation with localized format strings:

```swift
Text(String(format: NSLocalizedString("profile.points.count", comment: ""), points))
```

In Localizable.strings:
```
"profile.points.count" = "You have %d points";
```

### Date and Number Formatting

Use locale-aware formatters:

```swift
// Date formatting
let dateFormatter = DateFormatter()
dateFormatter.dateStyle = .medium
dateFormatter.timeStyle = .short
let localizedDate = dateFormatter.string(from: date)

// Number formatting
let numberFormatter = NumberFormatter()
numberFormatter.numberStyle = .currency
numberFormatter.locale = Locale.current
let localizedPrice = numberFormatter.string(from: NSNumber(value: price))
```

### Right-to-Left Support

- Test layouts with right-to-left languages
- Use leading/trailing instead of left/right
- Use the `.environment(\.layoutDirection, .rightToLeft)` modifier for testing

### Pluralization

Use stringsdict files for proper pluralization:

```swift
Text(String.localizedStringWithFormat(
    NSLocalizedString("booking.participant.count", comment: ""),
    participantCount
))
```

In Localizable.stringsdict:
```xml
<dict>
    <key>booking.participant.count</key>
    <dict>
        <key>NSStringLocalizedFormatKey</key>
        <string>%#@participants@</string>
        <key>participants</key>
        <dict>
            <key>NSStringFormatSpecTypeKey</key>
            <string>NSStringPluralRuleType</string>
            <key>NSStringFormatValueTypeKey</key>
            <string>d</string>
            <key>one</key>
            <string>%d participant</string>
            <key>other</key>
            <string>%d participants</string>
        </dict>
    </dict>
</dict>
```

## Asset Management

### Image Assets

- Use PDF vector assets when possible
- Provide @1x, @2x, and @3x resolutions for bitmap assets
- Use asset catalogs with appropriate rendering modes
- Use SF Symbols for common icons

### Dark Mode Support

- Provide light and dark variants in asset catalogs
- Use semantic colors that adapt automatically
- Test all screens in both light and dark mode

```swift
Image("logo")
    .renderingMode(.template)
    .foregroundColor(.haevn(.primary))
```

## Animation Guidelines

Haevn's animation guidelines follow Geist's motion principles:

| Purpose | Duration | Easing |
|---------|----------|--------|
| Micro interaction (hover, press) | 120 ms | `cubic-bezier(.4,0,.2,1)` |
| UI reveal (dropdown, modal) | 200 ms | `cubic-bezier(.16,1,.3,1)` |
| Large transition (page) | 320 ms | `cubic-bezier(.2,.8,.2,1)` |

```swift
// Micro interaction
Button("Book") {
    withAnimation(.timingCurve(0.4, 0, 0.2, 1, duration: 0.12)) {
        isPressed.toggle()
    }
}

// UI reveal
.transition(.opacity.combined(with: .move(edge: .bottom)))
.animation(.timingCurve(0.16, 1, 0.3, 1, duration: 0.2))

// Large transition
.transition(.asymmetric(insertion: .opacity, removal: .opacity))
.animation(.timingCurve(0.2, 0.8, 0.2, 1, duration: 0.32))
```

Always respect reduced motion accessibility setting:

```swift
@Environment(\.accessibilityReduceMotion) var reduceMotion

let animation = reduceMotion ? .none : .timingCurve(0.4, 0, 0.2, 1, duration: 0.12)
```

## Code Documentation

- Document public interfaces with Swift DocC syntax
- Include parameter descriptions and return values
- Document complex algorithms and business logic
- Add code examples for reusable components

```swift
/// Fetches available booking sessions for a specific date and park.
/// 
/// Use this method to retrieve sessions that can be booked by the user.
/// Results are filtered based on the user's membership tier and availability.
///
/// - Parameters:
///   - date: The date to fetch sessions for
///   - parkId: The identifier of the park
///   - completion: A closure called with the result
/// - Returns: A cancellable task
@discardableResult
func fetchSessions(
    for date: Date,
    at parkId: String,
    completion: @escaping (Result<[Session], Error>) -> Void
) -> Cancellable {
    // Implementation
}
```

## Performance Considerations

- Avoid expensive operations on the main thread
- Use lazy loading for images and data
- Implement pagination for large data sets
- Profile and optimize render performance
- Cache expensive calculations
- Follow Geist's performance guidelines for component rendering

## Materials (Surfaces)

Following Geist's material system, Haevn defines preset surface recipes that bundle radius, background, and shadow:

| Token | Radius | Shadow | Typical context |
|-------|--------|--------|------------------|
| `material-base` | 6 px | None | Page body |
| `material-small` | 6 px | Subtle shadow | Sub-card |
| `material-medium` | 12 px | Medium shadow | Modal sheet / picker |
| `material-large` | 12 px | Pronounced shadow | Elevated hero |
| `material-tooltip` | 6 px | Small shadow | Tooltip / coachmark |
| `material-menu` | 12 px | Medium shadow | Context menu |
| `material-modal` | 12 px | Large shadow | Dialog modal |
| `material-fullscreen` | 16 px | Extra large shadow | Fullscreen drawer |

```swift
HaevnCard(material: .medium) {
    // Content with medium elevation
}
```

## Security Best Practices

- Store sensitive data in the Keychain
- Use the App Transport Security settings
- Implement certificate pinning for API requests
- Sanitize user input
- Support biometric authentication where appropriate
