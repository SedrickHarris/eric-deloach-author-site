# Next.js Static Export

## Project

Eric Deloach Author Website

## Purpose of This Document

This document defines the Next.js static export requirements for the Eric Deloach author website.

The site will be built as a static Next.js website and deployed to Cloudflare Pages.

The build must generate an `/out` folder.

## Primary Requirement

The project must support:

```text
Next.js App Router
TypeScript
Static export
Cloudflare Pages
/out output directory
No server-required runtime features
```

## Cloudflare Pages Build Settings

Use these Cloudflare Pages settings:

```text
Framework preset: Next.js Static HTML Export
Build command: npm run build
Output directory: out
Production branch: main
```

Cloudflare’s static Next.js guide lists the Static HTML Export preset with build command `npx next build` and build directory `out`. This project should use `npm run build` so the repository controls the build script through `package.json`.

## Next.js Static Export Configuration

The project must configure Next.js for static export.

Recommended file:

```text
next.config.ts
```

Recommended configuration:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

## Why `output: "export"` Is Required

Next.js uses `output: "export"` to generate a fully static site during build.

When `next build` runs with static export enabled, Next.js generates static HTML, CSS, and JavaScript assets into the `out` folder.

## Why `images.unoptimized: true` Is Recommended

This site will be deployed as a static export.

Default Next.js image optimization requires server-side behavior that is not supported by static export unless a custom image loader is configured. The official Next.js static export guide lists default image optimization as unsupported for static export.

Recommended MVP approach:

```text
Use optimized local image files
Use WebP where possible
Use next/image with unoptimized: true
Avoid server-dependent image optimization
```

## Why `trailingSlash: true` Is Recommended

`trailingSlash: true` creates folder-style output that works cleanly on static hosts.

Example:

```text
/books/rage-of-angels/
```

Expected generated output:

```text
out/books/rage-of-angels/index.html
```

This is useful for Cloudflare Pages static hosting and keeps route behavior predictable.

## Approved Route Output

The build should generate static files for these approved routes:

```text
/
 /about/
 /books/
 /books/rage-of-angels/
 /books/ascension-the-path-to-polaris/
 /books/sins-of-the-father/
 /books/in-harms-way/
 /series/rage-of-angels/
 /media/
 /reviews/
 /events/
 /contact/
```

With `trailingSlash: true`, the expected output should resemble:

```text
out/index.html
out/about/index.html
out/books/index.html
out/books/rage-of-angels/index.html
out/books/ascension-the-path-to-polaris/index.html
out/books/sins-of-the-father/index.html
out/books/in-harms-way/index.html
out/series/rage-of-angels/index.html
out/media/index.html
out/reviews/index.html
out/events/index.html
out/contact/index.html
out/404.html
```

## Package Scripts

Recommended `package.json` scripts:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

If the project uses a newer lint setup where `next lint` is not available, use the configured ESLint command instead.

Do not change the build command away from `next build` unless the project intentionally changes deployment strategy.

## Static Export Build Command

Run locally:

```bash
npm run build
```

Expected result:

```text
The /out folder is generated.
The static HTML files are created.
The build completes without server runtime errors.
```

## Do Not Use `next export`

Do not use:

```bash
next export
```

Next.js removed `next export` in favor of `output: "export"` in configuration.

## Static Export Compatibility Rules

The site must avoid features that require a Node.js server or runtime computation that cannot be completed during build.

Do not use:

```text
API routes for required site functionality
Server actions
Runtime-only redirects
Runtime-only rewrites
Runtime-only headers
Middleware required for core page behavior
Server-side rendering
Incremental Static Regeneration
Default Next.js image optimization
Dynamic routes that are not generated statically
Draft mode
```

The official Next.js static export guide lists server-required features such as API routes, rewrites, redirects, headers, ISR, default image optimization, draft mode, and `getServerSideProps` as unsupported in static export.

## Allowed Static Site Features

The site may use:

```text
Static pages
Static data files
Local image assets
CSS and global styles
Client-side interactivity where needed
Responsive layouts
Metadata
JSON-LD schema
Static sitemap
Static robots.txt
External links
YouTube embeds
Retailer links
Social links
```

## App Router Requirements

The site should use the App Router structure:

```text
src/app/
```

Approved page files:

```text
src/app/page.tsx
src/app/about/page.tsx
src/app/books/page.tsx
src/app/books/rage-of-angels/page.tsx
src/app/books/ascension-the-path-to-polaris/page.tsx
src/app/books/sins-of-the-father/page.tsx
src/app/books/in-harms-way/page.tsx
src/app/series/rage-of-angels/page.tsx
src/app/media/page.tsx
src/app/reviews/page.tsx
src/app/events/page.tsx
src/app/contact/page.tsx
```

## Dynamic Routes Rule

Avoid dynamic routes for MVP unless they are fully statically generated.

Preferred MVP approach:

```text
Use explicit static route folders for every approved page.
```

Do not create:

```text
src/app/books/[slug]/page.tsx
```

unless the implementation also guarantees every route is statically generated at build time.

For this project, explicit routes are safer, clearer, and easier to QA.

## Data Strategy for Static Export

Use local static data files.

Recommended files:

```text
src/data/site.ts
src/data/navigation.ts
src/data/books.ts
src/data/retailers.ts
src/data/socialLinks.ts
src/data/videos.ts
src/data/faqs.ts
```

Data should be imported at build time.

Do not fetch required content from external APIs during runtime.

## Retailer Link Strategy

Retailer links should be static external URLs stored in:

```text
src/data/retailers.ts
```

Public rendering rule:

```text
Only render verified retailer links.
```

Do not depend on a server route to redirect retailer links.

## Video Strategy

Video embeds should use verified YouTube URLs stored in:

```text
src/data/videos.ts
```

Public rendering rule:

```text
Only render verified videos.
```

Do not use server-side video fetching.

Do not use placeholder embeds.

## Social Link Strategy

Social links should use verified URLs stored in:

```text
src/data/socialLinks.ts
```

Public rendering rule:

```text
Only render verified or approved client-provided links.
```

## Metadata Strategy for Static Export

Use static metadata in page files or metadata helpers.

Recommended helper file:

```text
src/lib/metadata.ts
```

Metadata must be available at build time.

Do not depend on runtime fetch calls for metadata.

## Schema Strategy for Static Export

Use JSON-LD generated from static data.

Recommended helper file:

```text
src/lib/schema.ts
```

Recommended component:

```text
src/components/seo/JsonLd.tsx
```

Schema must not include unverified facts.

## Sitemap Strategy

The site should include a static sitemap.

Recommended file:

```text
public/sitemap.xml
```

Initial sitemap targets:

```text
/
/about/
/books/
/books/rage-of-angels/
/books/ascension-the-path-to-polaris/
/books/sins-of-the-father/
/books/in-harms-way/
/series/rage-of-angels/
/media/
/reviews/
/events/
/contact/
```

If the final site does not use trailing slashes, update the sitemap to match the canonical URL behavior.

## Robots Strategy

The site should include:

```text
public/robots.txt
```

Recommended robots file:

```txt
User-agent: *
Allow: /

Sitemap: https://[domain]/sitemap.xml
```

Replace `[domain]` with the final production domain before launch.

Do not use localhost or preview URLs in the production robots file.

## Favicon Strategy

Place favicon in:

```text
public/favicon.ico
```

Do not reference a favicon that does not exist.

## 404 Page

Recommended file:

```text
src/app/not-found.tsx
```

The static export should produce:

```text
out/404.html
```

Recommended 404 CTAs:

```text
Return Home
Explore the Books
Start the Rage of Angels Series
```

## No Server Runtime Rule

This project should not require:

```text
Node.js server
API route execution
Database connection
Runtime CMS
Runtime authentication
Runtime image processing
Runtime form handling
```

If a future feature requires server logic, it should be handled separately and approved before implementation.

## Contact Form Rule

Do not build a server-dependent contact form in the static site unless the form provider supports static hosting.

Approved static-safe options may include:

```text
External form provider
mailto link, if approved
Cloudflare Pages Function, only if explicitly approved
Embedded third-party form, if approved
```

Do not add a fake form.

Do not add an API route form handler.

## Newsletter Rule

Do not build a server-dependent newsletter form unless the provider is approved.

Safe options may include:

```text
External newsletter form embed
Static link to signup page
Omit the section until provider is approved
```

Do not add a fake signup form.

## Redirect Rule

Next.js runtime redirects are not supported in static export.

If redirects are needed on Cloudflare Pages, handle them using Cloudflare-compatible static redirect methods or dashboard rules in a separate deployment plan.

Do not create redirect behavior inside `next.config.ts` for static export unless verified compatible with the deployment path.

## Headers Rule

Next.js runtime headers are not supported in static export.

If security headers or cache headers are needed, handle them through Cloudflare Pages settings or Cloudflare-supported configuration in a separate deployment plan.

## Environment Variables

The MVP should not require private environment variables.

If environment variables are used for public values, they must be safe to expose.

Do not put secrets in:

```text
NEXT_PUBLIC_*
```

Do not commit:

```text
.env
.env.local
```

## Gitignore Requirements

Recommended `.gitignore` entries:

```gitignore
node_modules
.next
out
.env
.env.local
.DS_Store
```

Do not commit the `/out` folder unless the deployment process explicitly requires it.

Cloudflare Pages should build from source and deploy the generated output directory.

## Local Build QA

Before pushing to GitHub, run:

```bash
npm install
npm run build
```

Confirm:

```text
Build succeeds
/out folder is generated
No unsupported static export errors appear
No broken image path errors appear
No missing module errors appear
No TypeScript errors appear
No lint errors block the build
```

## Local Output Inspection

After build, inspect:

```text
out/index.html
out/about/index.html
out/books/index.html
out/books/rage-of-angels/index.html
out/books/in-harms-way/index.html
out/404.html
```

Confirm important assets exist:

```text
out/favicon.ico
out/robots.txt
out/sitemap.xml
out/images/
```

## Static Export QA Checklist

Before deployment, confirm:

```text
next.config.ts includes output: export
next.config.ts includes images.unoptimized: true
Build command is npm run build
Cloudflare output directory is out
npm run build succeeds
/out folder is generated
All approved routes produce static files
No API routes are required
No server actions are required
No runtime redirects are required
No runtime headers are required
No ISR is used
No server-side rendering is used
No default image optimization dependency breaks export
No placeholder pages are published
No broken internal links appear
No href="#" buttons appear
No visible TODO text appears
```

## Cloudflare Pages QA Checklist

In Cloudflare Pages, confirm:

```text
Repository is connected
Production branch is main
Build command is npm run build
Output directory is out
Environment variables are not required for MVP
Deployment succeeds
Preview URL loads
Homepage loads
Book pages load
Media page loads
Robots file loads
Sitemap file loads
404 page works
```

## Common Static Export Mistakes

Avoid these issues:

```text
Forgetting output: export
Using next/image without static-compatible image behavior
Adding API routes for contact forms
Adding runtime redirects in Next config
Using dynamic routes without static generation
Depending on runtime environment variables
Publishing pages with missing images
Publishing buttons with empty hrefs
Forgetting to generate sitemap.xml
Forgetting to update robots.txt with final domain
```

## Build Rules for Claude Code

Claude Code must:

```text
Configure static export
Generate /out with npm run build
Use approved routes only
Use static data files
Avoid server-required features
Use static-safe images
Use verified external links
Preserve content lock rules
Preserve no em dash rule in visible copy
```

Claude Code must not:

```text
Use next export
Use API routes for MVP functionality
Use server actions
Use runtime CMS fetching
Use server-side rendering
Use ISR
Use default image optimization that breaks export
Create unapproved dynamic routes
Publish placeholder pages
Use em dashes in visible copy
```

## Most Important Instruction

The site must build cleanly as a static Next.js export and produce the `/out` folder for Cloudflare Pages.

If a feature requires a server, do not add it to the MVP without explicit approval.

## Addition: The Forsaken Son: Trials of Grace Route

Classification:

```text
Early Standalone Work
```

Do not add to primary navigation. Do not connect to Rage of Angels or In Harm’s Way.

Add to the approved route output:

```text
/books/the-forsaken-son-trials-of-grace/
```

Add to the expected static export output:

```text
out/books/the-forsaken-son-trials-of-grace/index.html
```

Add to the App Router approved page files:

```text
src/app/books/the-forsaken-son-trials-of-grace/page.tsx
```

Add to the sitemap targets:

```text
/books/the-forsaken-son-trials-of-grace/
```

Static export QA: confirm the route builds, generates its static `index.html`, and appears in the sitemap.
