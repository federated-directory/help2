# Federated Directory Documentation

This project is a static documentation site built with [VitePress](https://vitepress.dev/) and integrated with [Scalar](https://scalar.com/) for API references.

## Architecture

- **Framework**: VitePress (Vue.js based)
- **API Docs**: Scalar (fetching dynamically from Federated Directory API)
- **Documentation Injection**: Local Markdown files (like `docs/developer/users-api.md` and `docs/developer/obtaining-a-token.md`) are injected into the OpenAPI specification during the build process to provide rich context within the API Reference.
- **Unified Search**: A hidden search index is generated from the OpenAPI spec during build, allowing VitePress search to index and link to specific API operations.

## Build Scripts

- `scripts/sanitize-spec.js`: Fetches the remote Swagger spec, sanitizes it for Scalar compatibility (fixing `$ref` issues), **injects documentation** from local Markdown files into OpenAPI tags, and **generates a search index** for VitePress integration.

## Link Checking

To ensure documentation quality, we verify both internal and external links.

### Internal Links
VitePress checks internal links during the build process (`npm run docs:build`).
Configuration can be found in `docs/.vitepress/config.mts`. We currently ignore `localhost` links to allow local development references.

```typescript
ignoreDeadLinks: [
  /^http:\/\/localhost/
]
```

### External Links
We have a dedicated script to verify external URLs (http/https).

```bash
npm run check:links
```

This script scans all Markdown files in `docs/` and reports broken links (404, DNS errors, etc.). Note that some sites (e.g., Microsoft AppSource) may return 403 Forbidden to bots; these should be manually verified.

## Running Locally

1. `npm install`
2. `npm run docs:dev` (Dev server)
3. `npm run docs:build` (Production build)
4. `npm run docs:preview` (Preview production build)
