# Federated Directory Documentation

This is the source code for the Federated Directory documentation site.

## Development

**Prerequisites:**
- Node.js (v20 or higher)
- npm

**Install dependencies:**
```bash
npm install
```

**Start local development server:**
```bash
npm run docs:dev
```
Browse to [http://localhost:5173](http://localhost:5173)

**Build for production:**
```bash
npm run docs:build
```

**Preview production build:**
```bash
npm run docs:preview
```

## Architecture

This site is built with [VitePress](https://vitepress.dev/) and integrates [Scalar](https://scalar.com/) for interactive API documentation.

- `docs/`: Markdown source files
- `docs/.vitepress/`: VitePress configuration and theme customization
- `scripts/`: Build-time scripts (e.g., Swagger sanitization)
