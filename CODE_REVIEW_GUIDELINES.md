# Haevn App Code Review Guidelines

This document outlines the code review process and standards for the Haevn iOS application. Following these guidelines ensures consistent, high-quality code and knowledge sharing across the team.

## Code Review Principles

### Purpose of Code Reviews

Code reviews at Haevn serve multiple important purposes:

1. **Quality Assurance**: Identify bugs, edge cases, and potential issues early
2. **Knowledge Sharing**: Spread understanding of the codebase across the team
3. **Consistency**: Ensure code follows project standards and patterns
4. **Mentorship**: Help team members learn and improve their skills
5. **Collective Ownership**: Build shared responsibility for the codebase

### Core Values

- **Respect**: Be kind and respectful in all comments and interactions
- **Constructive Feedback**: Focus on the code, not the person
- **Timeliness**: Review PRs promptly to maintain development velocity
- **Collaboration**: Work together to find the best solutions
- **Learning**: Approach reviews as learning opportunities for everyone

## Review Process

### Before Creating a Pull Request

1. **Self-Review**: Review your own changes first
2. **Tests**: Ensure all tests pass locally
3. **Linting**: Run SwiftLint to catch style issues
4. **Documentation**: Update relevant documentation
5. **PR Description**: Prepare a clear description using the template

### Pull Request Template

```markdown
## Description
[Brief description of the changes]

## Related Issues
[Links to related JIRA tickets or GitHub issues]

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update
- [ ] Refactoring

## How Has This Been Tested?
- [ ] Unit tests
- [ ] UI tests
- [ ] Manual testing

## Screenshots (if applicable)
[Screenshots of UI changes]

## Checklist
- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
```

### Reviewer Responsibilities

1. **Timeliness**: Review PRs within 24 business hours
2. **Thoroughness**: Review all changes, not just a quick scan
3. **Testing**: Check out the branch and test the changes when appropriate
4. **Constructive Feedback**: Provide specific, actionable feedback
5. **Approval**: Only approve when all issues are addressed

### Author Responsibilities

1. **Responsiveness**: Address review comments promptly
2. **Clarification**: Ask questions if feedback is unclear
3. **Updates**: Make requested changes or explain why they shouldn't be made
4. **Follow-up**: Ensure all conversations are resolved before merging

## Technical Review Guidelines

### Architecture

- Does the code follow the MVVM architecture pattern?
- Are responsibilities properly separated between models, views, and view models?
- Is business logic kept out of the view layer?
- Are dependencies properly injected?
- Is the code modular and reusable?

### Swift Best Practices

- Is the code using Swift idioms appropriately?
- Are optionals handled safely?
- Is memory management appropriate (avoiding retain cycles)?
- Are value types (structs, enums) used when appropriate?
- Is mutability minimized?

### SwiftUI Guidelines

- Are views composed of smaller, reusable components?
- Is state management handled properly?
- Are views kept simple and focused on UI concerns?
- Is the view hierarchy logical and efficient?
- Are animations smooth and purposeful?

### Combine Usage

- Are publishers used appropriately?
- Are subscriptions properly managed and canceled?
- Is error handling implemented correctly?
- Are operators chosen efficiently?
- Is threading handled correctly (main thread for UI updates)?

### Performance Considerations

- Are there potential performance bottlenecks?
- Is memory usage optimized?
- Are expensive operations performed off the main thread?
- Are resources (network, disk, etc.) used efficiently?
- Is caching implemented where appropriate?

### Testing

- Do tests cover the main functionality?
- Are edge cases tested?
- Are tests independent and repeatable?
- Do tests use appropriate mocks and test doubles?
- Is test code clean and maintainable?

### Security

- Is user data handled securely?
- Are API keys and secrets properly protected?
- Is input validation implemented?
- Are permissions requested appropriately?
- Is secure storage used for sensitive data?

## Code Style Guidelines

### Naming Conventions

- Use descriptive, clear names that reveal intent
- Follow Swift naming conventions (camelCase for variables, PascalCase for types)
- Be consistent with the existing codebase
- Avoid abbreviations unless they are standard (e.g., URL, HTML)
- Use noun phrases for types and verb phrases for methods

### Formatting

- Follow the project's SwiftLint rules
- Use consistent indentation (4 spaces)
- Limit line length to 120 characters
- Group related code together
- Use blank lines to separate logical sections

### Comments and Documentation

- Write self-documenting code where possible
- Add comments for complex logic or non-obvious decisions
- Use documentation comments (`///`) for public APIs
- Include parameter and return value descriptions
- Document any assumptions or preconditions

### Example: Good Code Comment

```swift
/// Fetches the user's surf sessions within the specified date range.
/// - Parameters:
///   - startDate: The beginning of the date range to fetch sessions for
///   - endDate: The end of the date range to fetch sessions for
///   - completion: Closure called with the result containing either sessions or an error
/// - Note: This method caches results for up to 5 minutes to reduce API calls
func fetchSurfSessions(
    from startDate: Date,
    to endDate: Date,
    completion: @escaping (Result<[SurfSession], Error>) -> Void
) {
    // Implementation
}
```

## Common Review Feedback

### Positive Feedback Examples

- "Great job breaking this complex task into smaller, manageable components."
- "I like how you've used Combine operators to simplify this data flow."
- "The test coverage here is excellent, especially the edge case handling."
- "This refactoring makes the code much more readable and maintainable."

### Constructive Feedback Examples

- "Consider using a more descriptive name for this variable to clarify its purpose."
- "This method is quite long. Could we break it down into smaller, focused methods?"
- "We might want to add error handling for this network call to improve user experience."
- "This might be more efficient using a dictionary lookup rather than filtering the array each time."

### Feedback to Avoid

- ❌ "This code is bad."
- ❌ "Why would you do it this way?"
- ❌ "Rewrite this completely."
- ❌ "You always make this mistake."

### Better Alternatives

- ✅ "This approach might lead to performance issues because [reason]. Consider [alternative] instead."
- ✅ "I'm curious about the reasoning behind this implementation. Have you considered [alternative]?"
- ✅ "This section might be clearer if we restructured it to [suggestion]."
- ✅ "I've noticed this pattern a few times. Let's discuss a consistent approach for handling this case."

## Special Review Considerations

### Accessibility

- Is VoiceOver support implemented?
- Are accessibility labels clear and descriptive?
- Does the UI support Dynamic Type?
- Are color contrasts sufficient?
- Are touch targets appropriately sized?

### Localization

- Are user-facing strings localized?
- Are date and number formatters using the user's locale?
- Is text layout flexible for different language lengths?
- Is right-to-left language support considered?

### Feature Flags

- Are new features properly wrapped in feature flags?
- Is there a fallback for when features are disabled?
- Is the feature flag configuration documented?
- Are there tests for both enabled and disabled states?

## Review Workflow Examples

### Example 1: Simple Bug Fix

1. **Author**: Creates PR with fix and test demonstrating the fix
2. **Reviewer**: Verifies the bug is fixed and the test is appropriate
3. **Reviewer**: Approves if the fix is minimal and focused
4. **Author**: Merges after approval

### Example 2: New Feature

1. **Author**: Creates PR with implementation, tests, and documentation
2. **Reviewer**: Provides feedback on architecture, edge cases, and tests
3. **Author**: Addresses feedback with updates
4. **Reviewer**: Re-reviews changes and approves if satisfactory
5. **Author**: Merges after approval

### Example 3: Refactoring

1. **Author**: Creates PR with refactoring and tests showing equivalent behavior
2. **Reviewer**: Focuses on ensuring behavior is preserved and code is improved
3. **Author**: Addresses any concerns about maintainability or performance
4. **Reviewer**: Approves if the refactoring achieves its goals without regressions
5. **Author**: Merges after approval

## Resolving Disagreements

1. **Clarify**: Ensure both parties understand each other's perspective
2. **Evidence**: Back up arguments with documentation, benchmarks, or examples
3. **Compromise**: Look for middle-ground solutions
4. **Consult**: Involve a third team member for another perspective
5. **Decide**: Tech lead makes the final decision if consensus can't be reached

## Code Review Metrics

We track the following metrics to improve our review process:

- Time to first review
- Time to resolution
- Number of review iterations
- Review coverage (% of changes with comments)
- Defects found in review vs. found later

## Continuous Improvement

- Regular retrospectives on the review process
- Sharing of review insights in team meetings
- Updating these guidelines based on team feedback
- Periodic review of automated tools and settings

## Related Documentation

- [DEVELOPMENT_WORKFLOW.md](DEVELOPMENT_WORKFLOW.md): Overall development process
- [STYLE_GUIDE.md](STYLE_GUIDE.md): Detailed coding standards
- [TESTING_STRATEGY.md](TESTING_STRATEGY.md): Testing approach and standards
- [ARCHITECTURE.md](ARCHITECTURE.md): System architecture and patterns
