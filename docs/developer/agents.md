# Agent Rules and Guidelines

## Architecture Overview

This project is a REST API built with Node.js, utilizing the Hapi.js framework. It follows a modular architecture separating configuration, controllers, models, and schemas.

- **Framework**: Hapi.js (v21+)
- **Database**: MySQL (accessed via Sequelize ORM v6)
- **Authentication**: `hapi-auth-jwt2` (JWT) and `@hapi/bell` (OAuth)
- **Validation**: `joi` (v17)
- **Platform**: Google App Engine (Standard Environment, Node.js 22 runtime)

### Project Structure

- `server/config/`: Configuration files (routes, database configs, environments).
- `server/controllers/`: Business logic and route handlers. **All logic must reside here.**
- `server/models/`: Sequelize models defining database schema.
- `server/schemas/`: Joi schemas for validation and SCIM structures.
- `server/index.js`: Server entry point, plugin registration, and lifecycle hooks.
- `migrations/`: Database schema migrations.

## Build and Run Guidelines

### Running Locally

- **Start**: `npm start` (Runs `node ./server.js`)
- **Debug**: `npm run debug` (Runs with `nodemon` and inspector)
- **Lint**: `npm run lint` (ESLint on server/ and migrations/)

### Database & Migrations

- **ORM**: Sequelize
- **Migrations**: Managed via `sequelize-cli` wrapped in `run.js`.
  - Run: `npm run migrate:run`
  - Undo: `npm run migrate:undo`
  - Status: `npm run migrate:status`
  - Create: `npm run migration:create --name <name>`

### Testing

- **Method**: Postman Collections run via Newman.
- **CI Integration**: Validated in Google Cloud Build using `newman`.
- **Test Maintenance**: When adding, modifying, or removing API endpoints, you MUST update the corresponding tests in `test/runner.json` to reflect the changes. This includes:
  - Adding tests for new endpoints
  - Updating tests when endpoint behavior changes
  - Removing or updating tests when endpoints are deprecated
  - Ensuring all endpoint parameters and response formats are validated

## Architectural Rules

### Route Handlers

- **Do NOT** place inline handlers in `server/config/routes.js`.
- Always move handlers to the respective controller (component) file (e.g., `server/controllers/mcp.js`).
- This ensures better maintainability, separation of concerns, and easier testing.
- Use the `config` property in `routes.js` to reference the exported controller configuration/handler.

### Attribute Visibility

- **Strict Attribute Sharing**: Users should only be able to retrieve attributes that are shared with them in a group.
- **NEVER** add optional attributes like `division`, `department`, or `costCenter` to the `mandatoryAttributes` list in `server/schemas/user.js`.
- If an attribute is missing in a response, verify that the attribute is correctly added to the `sharedAttributes` definition of the user's groups.

### SCIM 2.0 Compliance

- **Users and Groups Endpoints**: The `/v2/Users` and `/v2/Groups` endpoints MUST remain fully compliant with the SCIM 2.0 specification (RFC 7643 and RFC 7644).
- **Schema Requirements**:
  - All responses must include proper SCIM schemas in the `schemas` array
  - Core schemas: `urn:ietf:params:scim:schemas:core:2.0:User` and `urn:ietf:params:scim:schemas:core:2.0:Group`
  - Extension schemas: `urn:ietf:params:scim:schemas:extension:fd:2.0:User` and `urn:ietf:params:scim:schemas:extension:fd:2.0:Group`
  - List responses: `urn:ietf:params:scim:api:messages:2.0:ListResponse`
  - Patch operations: `urn:ietf:params:scim:api:messages:2.0:PatchOp`
- **Response Structure**: Follow SCIM conventions for resource representation, pagination, filtering, and error handling.
- **Extensions**: Custom attributes must be properly namespaced under FD-specific extension schemas.
- **Breaking Changes**: Any modification to SCIM-compliant endpoints requires careful review to maintain backward compatibility with SCIM clients.

### Logging

- Do not use `console.log`. Use the `core.log` utility provided in `server/controllers/core.js`.
  - `core.log.info(message, data)`
  - ``core.log.error(message, error)`

### API Stability

- **NEVER** implement breaking API changes without explicit user approval and migration plan.
- A breaking change is any modification that could cause existing clients to fail, including:
  - Removing or renaming endpoints
  - Removing or renaming required parameters
  - Changing response data structures in incompatible ways
  - Changing authentication or authorization requirements
  - Modifying error response formats
- When breaking changes are unavoidable:
  - Document the breaking change clearly
  - Provide a migration path for existing clients
  - Consider versioning (e.g., `/v3/` endpoints) instead of modifying existing endpoints
  - Get explicit user approval before implementation

### Code Style

- Follow strict ESLint and Prettier rules.
- Pre-commit hooks (`husky`) enforce linting and formatting.
- **Imports**: Always place `require` statements at the top of the file. Do not scatter them throughout the code.

### Database Standards

#### Naming Conventions (Models and Tables)

- **CamelCase**: All new models and database tables must be named using `camelCase`.
  - ✅ `apiKeyMember`
  - ✅ `userProfile`
  - ❌ `api_key_member`
  - ❌ `user_profile`

#### Timestamps

- **Column Names**: Always use `created` and `lastModified` (NOT `createdAt` or `updatedAt`).
- **Sequelize Behavior**:
  - **Models**: Sequelize is globally configured to automatically map `createdAt` to `created` and `updatedAt` to `lastModified`. You do not need to define these in the model unless disabling them.
  - **Migrations**: You **MUST** explicitly define `created` and `lastModified` columns in `createTable`. Sequelize does **NOT** add these automatically in migrations.

## Agent Operational Rules

### MANDATORY DEVELOPMENT WORKFLOW

To ensure safety and provide the user with full control, all agents MUST adhere to this strict multi-turn workflow for any code modification:

1.  **STEP 1: Analysis & Planning**:

    - Explore the codebase, read relevant files, and research the task.
    - Present a concise plan to the user and wait for approval if the task is complex.

2.  **STEP 2: Implementation & Verification (The "No-Commit" Turn)**:

    - Apply file edits (`edit`, `write`).
    - Run all necessary verifications: unit tests, Postman tests (`newman`), linting (`npm run lint`), and `git diff`.
    - **CRITICAL STOP**: You MUST end your response immediately after presenting the verification results. You are FORBIDDEN from running `git commit` or `git push` in this turn.

3.  **STEP 3: User Review**:

    - Summarize what was changed and show that tests passed.
    - Explicitly ask the user: "Shall I commit these changes?"

4.  **STEP 4: Commit & Push**:
    - ONLY after the user provides an explicit "Yes" or "Commit this", you may proceed to run `git add`, `git commit`, and `git push`.

### CRITICAL GIT SAFETY PROTOCOL

- **NO AUTO-COMMITS**: Never combine code edits and git commits in a single tool call sequence or response turn.
- **Read-Only Default**: You may run read-only git commands (`status`, `log`, `diff`) freely to understand the context.
- **Explicit Approval**: `git commit` and `git push` require a direct, specific request from the developer in the _current_ prompt.
- **Verification First**: Always verify changes (run tests, check diffs, verify server status) in Step 2 before moving to Step 3.
