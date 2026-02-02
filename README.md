# Federated Directory Documentation

This project is a static documentation site built with [VitePress](https://vitepress.dev/) and integrated with [Scalar](https://scalar.com/) for API references.

## Architecture

- **Framework**: VitePress (Vue.js based)
- **API Docs**: Scalar (fetching dynamically from Federated Directory API)
- **Documentation Injection**: Local Markdown files (like `docs/developer/users-api.md` and `docs/developer/obtaining-a-token.md`) are injected into the OpenAPI specification during the build process to provide rich context within the API Reference.
- **Unified Search**: A hidden search index is generated from the OpenAPI spec during build, allowing VitePress search to index and link to specific API operations.

## Build Scripts

- `scripts/sanitize-spec.js`: Fetches the remote Swagger spec, sanitizes it for Scalar compatibility (fixing `$ref` issues), **injects documentation** from local Markdown files into OpenAPI tags, and **generates a search index** for VitePress integration.

## Running Locally

1. `npm install`
2. `npm run docs:dev` (Dev server)
3. `npm run docs:build` (Production build)
4. `npm run docs:preview` (Preview production build)
