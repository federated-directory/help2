# Federated Directory Documentation

This project is a static documentation site built with [VitePress](https://vitepress.dev/) and integrated with [Scalar](https://scalar.com/) for API references.

## Architecture

- **Framework**: VitePress (Vue.js based)
- **API Docs**: Scalar (fetching dynamically from Federated Directory API)
- **Documentation Injection**: Local Markdown files (like `docs/developer/users-api.md` and `docs/developer/obtaining-a-token.md`) are injected into the OpenAPI specification during the build process to provide rich context within the API Reference.

## Build Scripts

- `scripts/sanitize-spec.js`: Fetches the remote Swagger spec, sanitizes it for Scalar compatibility (fixing `$ref` issues), and **injects documentation** from local Markdown files directly into the OpenAPI tags. This allows us to maintain rich documentation in Markdown while delivering a unified API reference.

## Running Locally

1. `npm install`
2. `npm run docs:dev` (Dev server)
3. `npm run docs:build` (Production build)
4. `npm run docs:preview` (Preview production build)
