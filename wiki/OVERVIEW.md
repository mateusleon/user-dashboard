# Script: Technical Test

- Role: Staff Software Engineer
- Context:
  -- HTML@latest
  -- CSS3@latest
  -- ECMAScript@latest
  -- TypeScript@latest
- Introduction steps
- @repo
  -- Creating Nx monorepo (fixed on Angular 15)
  -- Creating core, shared, features libraries
  -- Npm install
  --- Normalize.css
  --- @angular/material
  --- @ngrx/store
- @research
  -- Analyse users data
- @lastlink/core
  -- Making consts
  -- Making interfaces
  -- Making i18n
  -- Making types
  -- Making helpers
- @lastlink/shared
  -- Making CrudBaseService
  -- Making UserService from CrudBaseService
- @user-dashboard
  -- Making route: /users/list
- @lastlink/features
  -- Making module: user-cards
  -- Making module: user-cards-item
- @user-dashboard
  -- Making route: /users/details:id
- @lastlink/shared
- Testing CrudBaseService
- Testing module: user-cards-item
- @repo
  -- Refactor data access to NgRx Store
  -- Implement DevOps
  -- Implement Docs
- @stories (BONUS)
  -- Migrate to Nx@latest
  -- Migrate to Angular@latest
  -- Migrate to Module Federation (microfrontends)
  -- Implement ToDos in Vue 3+ (framework-agnostic PoC)
  -- Implement Authentication and Permissions / Roles
  -- Migrate api over Schema.org

## Research

### 1. Core Frameworks / Libraries (for SPA/PWA)

Correspondence:

- Tool,
- Latest Stable Version/Trend (as of late 2025),
- Key Recent Advancement

- React (Library),
- "Latest Major Version (e.g. 18.x or 19.x)",
- Server Components and Concurrent Mode/Suspense for better performance and data fetching management. Continued push toward functional components and Hooks.

- Angular (Framework),
- Angular 19.x or 20.x,
- "Standalone Components as the default, Zoneless Change Detection for performance, and improved Incremental Hydration."

- Vue.js (Framework),
- Vue 3.x,
- "Enhanced Composition API for better logic reuse, and an improved development experience with Vite integration."

- Svelte (Compiler),
- Svelte 5.x (or latest major),
- "Focus on zero-runtime overhead and compiling components into highly efficient vanilla JavaScript, leading to smaller bundle sizes."

- Ionic (Hybrid/PWA Framework),
- "Latest Major Version (e.g. 7.x or 8.x)",
- "Strong focus on integrating with the latest versions of Angular, React, and Vue, and leveraging Capacitor for native access in PWAs."

### 2. Build Tools / Bundlers

Correspondence:

- Tool,
- Focus/Alternative to,
- Key Recent Advancement

- Vite,
- Webpack/Vue CLI/Create React App,
- "Now the default choice for new projects across Vue, Svelte, and increasingly React, due to its instant start and lightning-fast Hot Module Replacement (HMR) via native ES Modules."

- Turbopack,
- Webpack/Vite (from Vercel/Next.js team),
- "A Rust-based successor to Webpack, claiming to be significantly faster than Vite, and tightly integrated into the Next.js framework."

- Rspack,
- Webpack,
- "Another Rust-based bundler focused on speed, but designed to be more compatible with the Webpack ecosystem and its plugins for easier migration of large projects."

### 3. Full-Stack & Meta-Frameworks

For production SPAs/PWAs that require Server-Side Rendering (SSR) or Static Site Generation (SSG) for performance and SEO, these tools are essential:

- **Next.js** (for **React**) - The industry leader, constantly pushing performance with `Turbopack`, `React Server Components`, and _advanced image/font optimization_.
- **Nuxt** (for **Vue**) - The comprehensive framework for **Vue**, offering _powerful SSR/SSG_ capabilities and a _structured approach_.
- **SvelteKit** (for **Svelte**) - The official application framework for **Svelte**, known for its _minimal JavaScript_ and _excellent performance_.
- **Astro** - A newer star focusing on shipping _zero JavaScript_ by default, making it ideal for _content-heavy sites_ and _PWAs_ that value _speed above all else_.
