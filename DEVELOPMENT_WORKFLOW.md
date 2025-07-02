# Haevn Development Workflow

This document outlines the development workflow, processes, and best practices for the Haevn iOS app project.

## Git Workflow

### Branching Strategy

We follow a modified GitFlow workflow:

- `main` - Production-ready code, always deployable
- `develop` - Integration branch for features
- `feature/*` - New features and non-emergency fixes
- `release/*` - Release preparation
- `hotfix/*` - Emergency production fixes

```
main        ─────────────────────────────────────────────────────────
              ▲                                       ▲
              │                                       │
develop     ──┼───────────────────────────────────────┼─────────────
              │                                       │
              │                                       │
feature     ──┼─►───────►───────                      │
              │                                       │
              │                                       │
release     ──┼───────────────────────────────────────┼─►───────────
              │                                       │
              │                                       │
hotfix      ──┼───────────────────────────────────────┼─►───────────
```

### Branch Naming Conventions

- `feature/HAEVN-[ticket-number]-short-description`
- `bugfix/HAEVN-[ticket-number]-short-description`
- `release/v[major].[minor].[patch]`
- `hotfix/v[major].[minor].[patch]`

### Commit Message Guidelines

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code changes that neither fix bugs nor add features
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Changes to the build process or auxiliary tools

Example:
```
feat(booking): implement session calendar view

- Add date selector component
- Implement time slot grid with availability indicators
- Connect to booking API service

Closes HAEVN-123
```

## Code Review Process

### Pull Request Guidelines

1. Create a pull request from your feature branch to `develop`
2. Fill out the PR template with:
   - Description of changes
   - Link to related tickets
   - Testing performed
   - Screenshots/videos for UI changes
   - Checklist of requirements

### Review Requirements

- At least one approval from a team member
- All automated checks passing (tests, linting, etc.)
- No unresolved comments
- PR size should be manageable (< 500 lines when possible)

### Review Focus Areas

- Code correctness and quality
- Test coverage
- UI/UX consistency
- Performance considerations
- Security implications
- Documentation

## CI/CD Pipeline

### Continuous Integration

We use GitHub Actions for CI with the following workflow:

1. **Build**: Compile the app for iOS
2. **Test**: Run unit and UI tests
3. **Lint**: Check code style and quality
4. **Static Analysis**: Run SwiftLint and other static analyzers

### Continuous Delivery

Our CD pipeline includes:

1. **TestFlight Deployment**: Automatic deployment to TestFlight for `develop` branch
2. **Internal Testing**: Distribution to internal testers
3. **External Beta**: Distribution to external beta testers
4. **App Store Submission**: Manual process for production releases

## Testing Requirements

### Test Types

- **Unit Tests**: For business logic and service layers
- **Integration Tests**: For API interactions and data flow
- **UI Tests**: For critical user flows
- **Snapshot Tests**: For UI component consistency

### Testing Standards

- Minimum 80% code coverage for business logic
- Critical paths must have UI tests
- All bug fixes must include regression tests

## Release Procedures

### Release Preparation

1. Create a `release/v[version]` branch from `develop`
2. Freeze features and focus on stabilization
3. Update version numbers and build configurations
4. Perform regression testing
5. Address critical bugs found during testing

### Release Execution

1. Merge `release/v[version]` into `main`
2. Tag the release in Git (`v[version]`)
3. Submit to App Store Review
4. Merge `release/v[version]` back into `develop`

### Hotfix Process

1. Create a `hotfix/v[version]` branch from `main`
2. Fix the critical issue
3. Test thoroughly
4. Merge into both `main` and `develop`
5. Create a new release if necessary

## Environment Management

### Development Environments

- **Development**: Connected to dev backend, used for feature development
- **Staging**: Connected to staging backend, used for integration testing
- **Production**: Connected to production backend, used for final verification

### Configuration Management

- Environment-specific settings in `Config/` directory
- API endpoints configured per environment
- Feature flags managed through remote configuration

## Documentation Standards

- Code should be self-documenting with clear naming
- Public APIs must have documentation comments
- Architecture changes require updating ARCHITECTURE.md
- User-facing features need documentation in user guides

## Team Communication

- Daily stand-ups at 10:00 AM
- Sprint planning every two weeks
- Retrospectives at the end of each sprint
- Technical discussions in dedicated Slack channels
- Design reviews for significant UI/UX changes

## Onboarding Process

1. Set up development environment using the onboarding guide
2. Complete the "First Task" checklist
3. Pair programming sessions with experienced team members
4. Code review shadowing

## Continuous Improvement

- Regular architecture reviews
- Technical debt tracking and scheduled refactoring
- Learning sessions for new technologies
- Contribution to internal libraries and tools
