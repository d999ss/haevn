# Haevn App Style Guide

This document outlines the coding standards, UI component usage guidelines, accessibility requirements, and localization practices for the Haevn iOS app.

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

### Design System

All UI components should adhere to the Haevn Design System, which includes:

- Typography
- Color palette
- Spacing system
- Component library

### Typography

Use the predefined text styles:

```swift
Text("Heading")
    .font(.haevn(.heading))

Text("Body text")
    .font(.haevn(.body))
```

Available text styles:
- `.largeTitle`: 34pt, bold
- `.title`: 28pt, bold
- `.heading`: 22pt, bold
- `.subheading`: 17pt, semibold
- `.body`: 17pt, regular
- `.callout`: 16pt, regular
- `.caption`: 12pt, regular

### Color System

Use semantic color names from the design system:

```swift
Text("Important")
    .foregroundColor(.haevn(.primary))

Button(action: {}) {
    Text("Book Now")
}
.background(Color.haevn(.accent))
```

Core colors:
- `.primary`: Main text color
- `.secondary`: Secondary text color
- `.accent`: Primary accent color
- `.background`: Background color
- `.surface`: Surface/card color
- `.error`: Error state color
- `.success`: Success state color

### Spacing

Use the spacing system for consistent layout:

```swift
VStack(spacing: .haevn(.medium)) {
    // Content
}
.padding(.haevn(.large))
```

Spacing values:
- `.xsmall`: 4pt
- `.small`: 8pt
- `.medium`: 16pt
- `.large`: 24pt
- `.xlarge`: 32pt
- `.xxlarge`: 48pt

### Component Library

Use the shared component library for consistent UI:

```swift
HaevnButton("Book Session", style: .primary) {
    // Action
}

HaevnCard {
    // Card content
}
```

Core components:
- `HaevnButton`: Standard buttons with various styles
- `HaevnCard`: Card container with standard styling
- `HaevnTextField`: Text input with consistent styling
- `HaevnToggle`: Custom toggle switch
- `HaevnTabBar`: Standard tab bar
- `HaevnLoadingIndicator`: Loading spinner
- `HaevnEmptyState`: Empty state placeholder

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

- Keep animations short (0.2-0.3 seconds)
- Use standard easing curves
- Respect reduced motion accessibility setting

```swift
Button("Book") {
    withAnimation(.easeInOut(duration: 0.2)) {
        isBooked.toggle()
    }
}
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

## Security Best Practices

- Store sensitive data in the Keychain
- Use the App Transport Security settings
- Implement certificate pinning for API requests
- Sanitize user input
- Support biometric authentication where appropriate
