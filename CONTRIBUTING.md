# Contributing to GoogleOAuthLib

Thank you for your interest in contributing to GoogleOAuthLib! This document provides guidelines for contributing to the project.

## Commit Message Guidelines

We follow the [Conventional Commits](https://conventionalcommits.org/) specification for commit messages. This helps us maintain a clear and consistent commit history.

### Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools and libraries

### Examples

```
feat: add OAuth2 token refresh functionality
fix: resolve issue with user profile parsing
docs: update README with API examples
style: format code with prettier
refactor: simplify OAuth flow logic
test: add unit tests for User class
chore: update TypeScript version
```

### Breaking Changes

If your commit introduces a breaking change, include `BREAKING CHANGE:` in the footer, followed by a description.

```
feat: change API interface

BREAKING CHANGE: The `config` parameter now requires `clientSecret`
```

### Why Conventional Commits?

- **Automated Versioning**: Tools like `standard-version` can automatically determine version bumps.
- **Clear History**: Makes it easier to understand what changed and why.
- **Changelogs**: Automatic generation of changelogs from commit messages.

## Development Setup

1. Fork the repository
2. Clone your fork: `git clone https://github.com/tanahiro2010/Google_OAuth_Lib`
3. Install dependencies: `npm install`
4. Create a feature branch: `git checkout -b feature/your-feature-name`
5. Make your changes
6. Run tests: `npm test`
7. Build: `npm run build`
8. Commit your changes following the guidelines above
9. Push to your branch: `git push origin feature/your-feature-name`
10. Create a Pull Request

## Code Style

- Use TypeScript for all new code
- Follow the existing code style
- Add JSDoc comments for public APIs
- Write tests for new features

## Issues

- Check existing issues before creating a new one
- Use issue templates when available
- Provide clear reproduction steps for bugs

Thank you for contributing!