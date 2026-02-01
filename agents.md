# Agent Rules and Guidelines

## Architecture Overview

This project is a static documentation site built with [VitePress](https://vitepress.dev/) and integrated with [Scalar](https://scalar.com/) for API references.

- **Framework**: VitePress (Vue.js based)
- **Deployment**: GitHub Pages (via GitHub Actions)
- **API Docs**: Scalar (fetching dynamically from Federated Directory API)

### Project Structure

- `docs/`: Markdown source files for the documentation.
- `docs/.vitepress/`: VitePress configuration and theme customization.
- `docs/public/`: Static assets (images, icons, favicon).
- `scripts/`: Build-time scripts (e.g., Swagger sanitization).

## Build and Run Guidelines

### Running Locally

- **Install**: `npm install`
- **Start**: `npm run docs:dev` (Runs VitePress dev server at `http://localhost:5173`)
- **Build**: `npm run docs:build` (Generates static site in `docs/.vitepress/dist`)
- **Preview**: `npm run docs:preview` (Serves the build output locally)

## Code Style

- **Markdown**: Use GitHub-flavored Markdown.
- **Images**: Store images in `docs/public/images/` and reference them with absolute paths (e.g., `/images/logo.svg`).
- **Links**: Use "Clean URLs" (no `.html` or `.md` extension in internal links).
- **Frontmatter**: Keep frontmatter minimal. Navigation is controlled via `docs/.vitepress/config.mts`.

## Design & Styling

This project adheres to **Material Design 3 (M3)** principles to ensure a consistent user experience with the main Federated Directory application (`/fd/frontend`).

- **Typography**: Use **Roboto** as the primary font family.
- **Colors**: Adhere to the M3 color palette defined in `docs/.vitepress/theme/custom.css`. These tokens (e.g., `--vp-c-brand-1`) are synchronized with the frontend's primary blue and neutral tones.
- **Dark Mode**: Supports native dark mode. All custom styling (including API references) must be responsive to the `.dark` class.
- **Scalar Integration**: The API reference is styled via CSS variable mapping to match the documentation's Material theme exactly.

## Agent Operational Rules

### MANDATORY DEVELOPMENT WORKFLOW

To ensure safety and provide the user with full control, all agents MUST adhere to this strict multi-turn workflow for any modification:

1.  **STEP 1: Analysis & Planning**:
    - Explore the codebase, read relevant files, and research the task.
    - Present a concise plan to the user and wait for approval if the task is complex.

2.  **STEP 2: Implementation & Verification (The "No-Commit" Turn)**:
    - Apply file edits (`edit`, `write`).
    - Run all necessary verifications: `npm run docs:build`, check for broken links, and `git diff`.
    - **CRITICAL STOP**: You MUST end your response immediately after presenting the verification results. You are FORBIDDEN from running `git commit` or `git push` in this turn.

3.  **STEP 3: User Review**:
    - Summarize what was changed and show that the build passed.
    - Explicitly ask the user: "Shall I commit these changes?"

4.  **STEP 4: Commit & Push**:
    - ONLY after the user provides an explicit "Yes" or "Commit this", you may proceed to run `git add`, `git commit`, and `git push`.

### CRITICAL GIT SAFETY PROTOCOL

- **NO AUTO-COMMITS**: Never combine code edits and git commits in a single tool call sequence or response turn.
- **Read-Only Default**: You may run read-only git commands (`status`, `log`, `diff`) freely to understand the context.
- **Explicit Approval**: `git commit` and `git push` require a direct, specific request from the developer in the _current_ prompt.
- **Verification First**: Always verify changes (run build, check diffs) in Step 2 before moving to Step 3.
