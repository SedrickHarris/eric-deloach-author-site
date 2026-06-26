# Folder Structure

## Project

Eric Deloach Author Website

## Purpose of This Document

This document defines the recommended folder structure for the Eric Deloach author website.

The structure is designed for:

```text
Next.js App Router
TypeScript
Static export
Cloudflare Pages
Reusable components
Centralized content data
Centralized metadata
Centralized schema
Clean media organization
Claude Code implementation
```

Claude Code must follow this folder structure unless the user explicitly approves a different structure.

## Primary Folder Structure Goal

The project should be easy to:

```text
Navigate
Build
Maintain
Expand
Audit
Deploy
Hand off
```

The structure should support future books, future videos, future blog content, future media assets, and future site improvements without creating a messy codebase.

## Recommended Root Structure

```text
eric-deloach-author-site/
├── public/
├── src/
├── docs/
├── package.json
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── postcss.config.mjs
├── README.md
├── CLAUDE.md
└── .gitignore
```

## Root Folder Rules

The root folder should contain only project-level configuration, documentation, and top-level folders.

Do not clutter the root with random images, loose notes, screenshots, or duplicate files.

## Public Folder

Recommended structure:

```text
public/
├── favicon.ico
├── robots.txt
├── sitemap.xml
└── images/
    ├── author/
    ├── books/
    ├── backgrounds/
    ├── media/
    └── social/
```

## Public Folder Purpose

The `public` folder should contain static assets that need to be served directly.

This includes:

```text
Book covers
Author portrait
Hero backgrounds
Trailer thumbnails
Social preview images
Favicon
Robots file
Sitemap file
```

## Public Folder Rules

Claude Code must:

```text
Use clean file names
Use lowercase file names
Use hyphen-separated file names
Use optimized image files
Preserve book cover aspect ratios
Avoid broken image paths
```

Claude Code must not:

```text
Store source design files in public
Store unused screenshots in public
Store giant unoptimized images in public
Store placeholder images for live pages
Store random downloaded retailer logos
Store unapproved social images
```

## Image Folder Structure

Recommended structure:

```text
public/images/
├── author/
│   └── eric-deloach-author-portrait.webp
├── books/
│   ├── rage-of-angels-book-cover.webp
│   ├── ascension-path-to-polaris-book-cover.webp
│   ├── sins-of-the-father-book-cover.webp
│   └── in-harms-way-book-cover.webp
├── backgrounds/
│   ├── myth-and-mayhem-hero-background.webp
│   ├── rage-of-angels-series-background.webp
│   └── in-harms-way-tactical-background.webp
├── media/
│   ├── rage-of-angels-trailer-thumbnail.webp
│   ├── in-harms-way-trailer-thumbnail.webp
│   ├── charlie-one-alpha-greg-esposito-short-thumbnail.webp
│   ├── charlie-one-alpha-denton-haas-short-thumbnail.webp
│   ├── charlie-one-alpha-casey-carter-short-thumbnail.webp
│   └── charlie-one-alpha-malice-collissimo-short-thumbnail.webp
└── social/
    ├── eric-deloach-social-card.webp
    ├── rage-of-angels-social-card.webp
    └── in-harms-way-social-card.webp
```

Only create files that correspond to approved assets.

Do not create fake images to satisfy this structure.

## Source Folder

Recommended structure:

```text
src/
├── app/
├── components/
├── data/
├── lib/
├── styles/
└── types/
```

## Source Folder Purpose

The `src` folder should contain all application code, page routes, reusable components, data files, utilities, styles, and shared TypeScript types.

## App Folder

Recommended structure:

```text
src/app/
├── layout.tsx
├── page.tsx
├── globals.css
├── not-found.tsx
├── about/
│   └── page.tsx
├── books/
│   ├── page.tsx
│   ├── rage-of-angels/
│   │   └── page.tsx
│   ├── ascension-the-path-to-polaris/
│   │   └── page.tsx
│   ├── sins-of-the-father/
│   │   └── page.tsx
│   └── in-harms-way/
│       └── page.tsx
├── series/
│   └── rage-of-angels/
│       └── page.tsx
├── media/
│   └── page.tsx
├── reviews/
│   └── page.tsx
├── events/
│   └── page.tsx
└── contact/
    └── page.tsx
```

## App Folder Rules

Claude Code must:

```text
Use approved routes
Use approved slugs
Use one page.tsx per route
Use layout.tsx for shared app shell
Use globals.css for global styles
Keep page files clean and readable
```

Claude Code must not:

```text
Create unapproved routes
Rename approved slugs
Create duplicate pages
Create placeholder pages
Create routes that are not linked or planned
Use server-only route handlers for static pages
```

## Approved Route Map

```text
src/app/page.tsx → /
src/app/about/page.tsx → /about
src/app/books/page.tsx → /books
src/app/books/rage-of-angels/page.tsx → /books/rage-of-angels
src/app/books/ascension-the-path-to-polaris/page.tsx → /books/ascension-the-path-to-polaris
src/app/books/sins-of-the-father/page.tsx → /books/sins-of-the-father
src/app/books/in-harms-way/page.tsx → /books/in-harms-way
src/app/series/rage-of-angels/page.tsx → /series/rage-of-angels
src/app/media/page.tsx → /media
src/app/reviews/page.tsx → /reviews
src/app/events/page.tsx → /events
src/app/contact/page.tsx → /contact
```

## Components Folder

Recommended structure:

```text
src/components/
├── layout/
├── navigation/
├── sections/
├── cards/
├── media/
├── seo/
└── ui/
```

## Components Folder Purpose

The `components` folder should contain reusable UI and content components.

It should keep page files clean and prevent duplicated layout patterns.

## Layout Components

Recommended structure:

```text
src/components/layout/
├── SiteLayout.tsx
├── Header.tsx
├── Footer.tsx
├── Container.tsx
└── PageShell.tsx
```

## Navigation Components

Recommended structure:

```text
src/components/navigation/
├── MainNav.tsx
├── MobileNav.tsx
├── Breadcrumbs.tsx
└── SocialLinks.tsx
```

## Section Components

Recommended structure:

```text
src/components/sections/
├── HeroSection.tsx
├── SectionHeader.tsx
├── CTASection.tsx
├── ChooseYourWorldSection.tsx
├── FeaturedBooksSection.tsx
├── RageOfAngelsSection.tsx
├── InHarmsWaySection.tsx
├── AuthorBioSection.tsx
├── MediaPreviewSection.tsx
├── RetailLinksSection.tsx
├── FAQSection.tsx
├── BookDetailsSection.tsx
├── CharacterGridSection.tsx
├── SeriesPathSection.tsx
└── ContactSection.tsx
```

## Card Components

Recommended structure:

```text
src/components/cards/
├── BookCard.tsx
├── GenreLaneCard.tsx
├── CharacterCard.tsx
├── VideoCard.tsx
├── RetailCard.tsx
└── FeatureCard.tsx
```

## Media Components

Recommended structure:

```text
src/components/media/
├── VideoEmbed.tsx
├── VideoGrid.tsx
└── MediaCard.tsx
```

## SEO Components

Recommended structure:

```text
src/components/seo/
└── JsonLd.tsx
```

## UI Components

Recommended structure:

```text
src/components/ui/
├── Button.tsx
├── Card.tsx
├── Badge.tsx
├── ExternalLink.tsx
├── FAQItem.tsx
└── VisuallyHidden.tsx
```

## Component Naming Rules

Component files should use PascalCase.

Good:

```text
BookCard.tsx
HeroSection.tsx
RetailLinksSection.tsx
```

Bad:

```text
book-card.tsx
hero_section.tsx
retailLinks.tsx
```

## Component Responsibility Rules

Each component should have a clear purpose.

Good:

```text
BookCard renders one book card.
VideoEmbed renders one verified video embed.
RetailLinksSection renders verified retailer links.
```

Bad:

```text
One giant homepage component that hard-codes every book, retailer, and video.
```

## Data Folder

Recommended structure:

```text
src/data/
├── site.ts
├── navigation.ts
├── books.ts
├── retailers.ts
├── socialLinks.ts
├── videos.ts
└── faqs.ts
```

## Data Folder Purpose

The `data` folder should be the central source for approved static content.

Use it for:

```text
Site settings
Navigation links
Book facts
Retailer links
Social links
Video links
FAQ content
```

Do not duplicate data across many page files.

## Site Data

Recommended file:

```text
src/data/site.ts
```

Purpose:

Central source for site-level values.

Recommended fields:

```text
siteName
authorName
siteUrl
tagline
description
defaultOgImage
brandPhrase
contactStatus
```

## Navigation Data

Recommended file:

```text
src/data/navigation.ts
```

Purpose:

Central source for header and footer links.

Recommended groups:

```text
primaryNav
footerBooks
footerExplore
footerFollow
footerRetail
```

Rules:

```text
Use approved slugs only
Do not include optional pages unless built
Do not include placeholder links
```

## Books Data

Recommended file:

```text
src/data/books.ts
```

Purpose:

Central source for book facts.

Recommended fields:

```text
id
title
slug
pageUrl
series
seriesSlug
readingOrder
genreLabels
shortHook
description
coverImage
coverAlt
formats
status
relatedBookIds
retailerIds
metadata
```

Rules:

```text
Use approved book facts only
Mark unverified facts internally
Do not render unverified facts publicly
Do not duplicate book facts in page files
```

## Retailers Data

Recommended file:

```text
src/data/retailers.ts
```

Purpose:

Central source for retailer links.

Recommended fields:

```text
id
bookId
retailerName
label
format
url
status
priority
type
```

Public rendering rule:

```text
Only render status: "verified"
```

## Social Links Data

Recommended file:

```text
src/data/socialLinks.ts
```

Purpose:

Central source for social and platform links.

Recommended fields:

```text
platform
label
url
handle
status
priority
```

Rules:

```text
Use verified or approved client-provided URLs only
Do not render missing social links
Do not create fake social profiles
```

## Videos Data

Recommended file:

```text
src/data/videos.ts
```

Purpose:

Central source for video links and embed data.

Recommended fields:

```text
id
title
description
bookId
category
source
url
embedUrl
thumbnail
thumbnailAlt
duration
status
```

Public rendering rule:

```text
Only render status: "verified"
```

## FAQ Data

Recommended file:

```text
src/data/faqs.ts
```

Purpose:

Central source for page-specific FAQs.

Recommended fields:

```text
pageId
question
answer
status
```

Rules:

```text
Use approved FAQ copy only
Match FAQ schema to visible FAQ content
Do not create hidden FAQ schema
```

## Lib Folder

Recommended structure:

```text
src/lib/
├── metadata.ts
├── schema.ts
├── urls.ts
└── utils.ts
```

## Lib Folder Purpose

The `lib` folder should contain shared helpers and utility functions.

## Metadata Helper

Recommended file:

```text
src/lib/metadata.ts
```

Purpose:

Generate consistent metadata.

Potential helper:

```text
createMetadata()
```

Responsibilities:

```text
Set page title
Set meta description
Set canonical URL
Set Open Graph metadata
Set social images
Use final domain when confirmed
```

## Schema Helper

Recommended file:

```text
src/lib/schema.ts
```

Purpose:

Generate JSON-LD schema from approved data.

Potential helpers:

```text
getWebsiteSchema
getPersonSchema
getBookSchema
getBreadcrumbSchema
getFAQSchema
getCollectionPageSchema
getVideoSchema
getContactPageSchema
```

Rules:

```text
Omit unverified fields
Do not add offers, reviews, ratings, or events unless verified
Match visible content
```

## URL Helper

Recommended file:

```text
src/lib/urls.ts
```

Purpose:

Centralize approved URLs and URL helpers.

Potential exports:

```text
siteUrl
routes
getCanonicalUrl
isExternalUrl
```

## Utils Helper

Recommended file:

```text
src/lib/utils.ts
```

Purpose:

Small shared utilities.

Examples:

```text
className helper
format list helper
filter verified links helper
```

Keep this file small.

Do not turn it into a dumping ground.

## Styles Folder

Recommended structure:

```text
src/styles/
├── tokens.css
└── utilities.css
```

## Global Styles

Global app styles may also live in:

```text
src/app/globals.css
```

Use `globals.css` for:

```text
Base styles
CSS variables
Typography defaults
Body background
Focus styles
Global reset
```

Use `tokens.css` if the design system becomes large.

## Style Rules

Claude Code must:

```text
Keep styles organized
Use consistent tokens
Avoid random one-off values
Preserve readable contrast
Support responsive behavior
```

Claude Code must not:

```text
Create messy duplicated CSS
Use inline styles everywhere
Create hard-to-maintain style overrides
Break mobile layouts
```

## Types Folder

Recommended structure:

```text
src/types/
├── book.ts
├── retailer.ts
├── video.ts
├── social.ts
└── faq.ts
```

## Types Folder Purpose

The `types` folder should define shared TypeScript types for structured data.

Recommended types:

```text
Book
RetailerLink
VideoItem
SocialLink
FAQItem
CTA
NavItem
```

Type definitions help prevent inconsistent data and broken components.

## Docs Folder

Recommended structure:

```text
docs/
├── project-overview.md
├── author-brand-guide.md
├── verified-source-inventory.md
├── do-not-invent.md
├── content-lock-rules.md
├── site-architecture.md
├── url-slug-strategy.md
├── homepage-content-plan.md
├── book-pages-content-plan.md
├── rage-of-angels-series-plan.md
├── in-harms-way-page-plan.md
├── the-forsaken-son-page-plan.md
├── media-and-social-plan.md
├── retailer-links-plan.md
├── seo-aeo-plan.md
├── schema-plan.md
├── metadata-plan.md
├── image-and-media-guidelines.md
├── design-direction.md
├── component-plan.md
├── folder-structure.md
├── nextjs-static-export.md
├── cloudflare-pages-deployment.md
├── github-workflow.md
├── prelaunch-checklist.md
├── claude-project-instructions.md
└── claude-code-handoff-prompt.md
```

## Docs Folder Purpose

The `docs` folder should store planning, content, build, QA, and handoff documents.

These docs should guide Claude Project research and Claude Code implementation.

## Docs Rules

Claude Code must:

```text
Preserve project docs
Use docs as implementation guidance
Update docs only when asked
Keep docs in markdown format
```

Claude Code must not:

```text
Delete docs
Rewrite docs without approval
Ignore content lock documents
Treat planning notes as live public content
```

## Config Files

Expected root config files:

```text
package.json
next.config.ts
tsconfig.json
eslint.config.mjs
postcss.config.mjs
.gitignore
README.md
CLAUDE.md
```

## Next Config

Recommended file:

```text
next.config.ts
```

Must support:

```text
Static export
Cloudflare Pages
/out output
Compatible image behavior
```

Static export requirements are detailed in:

```text
nextjs-static-export.md
```

## Gitignore

Recommended `.gitignore` should include:

```text
node_modules
.next
out
.env
.env.local
.DS_Store
```

Do not commit environment files or build output unless specifically required.

## Package Scripts

Recommended `package.json` scripts:

```text
dev
build
start
lint
```

For Cloudflare Pages:

```text
Build command: npm run build
Output directory: out
```

## Static Export Output

The `/out` folder is generated by the build.

It should not be used as the source of truth.

Rules:

```text
Do not manually edit /out
Do not commit /out unless explicitly required
Use npm run build to regenerate /out
```

## Content Duplication Rules

Do not duplicate the same facts across many files.

Use central data files for:

```text
Book titles
Book slugs
Book covers
Retail links
Social links
Video links
FAQs
Metadata
```

Page components should import data rather than redefining it repeatedly.

## Placeholder Rules

Do not create visible placeholder content.

Avoid live output such as:

```text
TODO
Coming soon
Image missing
Video needed
Retail link pending
Lorem ipsum
```

Internal code comments are acceptable.

## Recommended Full Structure

```text
eric-deloach-author-site/
├── docs/
│   ├── README.md
│   ├── project-overview.md
│   ├── author-brand-guide.md
│   ├── verified-source-inventory.md
│   ├── do-not-invent.md
│   ├── content-lock-rules.md
│   ├── site-architecture.md
│   ├── url-slug-strategy.md
│   ├── homepage-content-plan.md
│   ├── book-pages-content-plan.md
│   ├── rage-of-angels-series-plan.md
│   ├── in-harms-way-page-plan.md
│   ├── the-forsaken-son-page-plan.md
│   ├── media-and-social-plan.md
│   ├── retailer-links-plan.md
│   ├── seo-aeo-plan.md
│   ├── schema-plan.md
│   ├── metadata-plan.md
│   ├── image-and-media-guidelines.md
│   ├── design-direction.md
│   ├── component-plan.md
│   ├── folder-structure.md
│   ├── nextjs-static-export.md
│   ├── cloudflare-pages-deployment.md
│   ├── github-workflow.md
│   ├── prelaunch-checklist.md
│   ├── claude-project-instructions.md
│   └── claude-code-handoff-prompt.md
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   ├── sitemap.xml
│   └── images/
│       ├── author/
│       ├── books/
│       ├── backgrounds/
│       ├── media/
│       └── social/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── not-found.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── books/
│   │   │   ├── page.tsx
│   │   │   ├── rage-of-angels/
│   │   │   │   └── page.tsx
│   │   │   ├── ascension-the-path-to-polaris/
│   │   │   │   └── page.tsx
│   │   │   ├── sins-of-the-father/
│   │   │   │   └── page.tsx
│   │   │   └── in-harms-way/
│   │   │       └── page.tsx
│   │   ├── series/
│   │   │   └── rage-of-angels/
│   │   │       └── page.tsx
│   │   ├── media/
│   │   │   └── page.tsx
│   │   ├── reviews/
│   │   │   └── page.tsx
│   │   ├── events/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── sections/
│   │   ├── cards/
│   │   ├── media/
│   │   ├── seo/
│   │   └── ui/
│   ├── data/
│   │   ├── site.ts
│   │   ├── navigation.ts
│   │   ├── books.ts
│   │   ├── retailers.ts
│   │   ├── socialLinks.ts
│   │   ├── videos.ts
│   │   └── faqs.ts
│   ├── lib/
│   │   ├── metadata.ts
│   │   ├── schema.ts
│   │   ├── urls.ts
│   │   └── utils.ts
│   ├── styles/
│   │   ├── tokens.css
│   │   └── utilities.css
│   └── types/
│       ├── book.ts
│       ├── retailer.ts
│       ├── video.ts
│       ├── social.ts
│       └── faq.ts
├── .gitignore
├── CLAUDE.md
├── README.md
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

## Build Rules for Claude Code

Claude Code must:

```text
Use approved folder structure
Use approved route structure
Use centralized data files
Use reusable components
Avoid duplicated content
Avoid unapproved routes
Keep static export compatibility
Generate /out on build
```

Claude Code must not:

```text
Create random folders
Create duplicate route structures
Scatter content across many page files
Hard-code retailer links repeatedly
Hard-code social links repeatedly
Create visible placeholders
Commit build output unless instructed
Use em dashes in visible copy
```

## Folder Structure QA Checklist

Before launch, confirm:

```text
All approved routes exist
No unapproved routes exist
Components are organized
Data files are centralized
Book facts are not duplicated unnecessarily
Retail links are centralized
Video links are centralized
Social links are centralized
FAQ content is centralized
Images are organized
No random loose assets exist in root
No placeholder files are published
Sitemap exists
Robots file exists
Static export works
/out folder is generated
```

## Most Important Instruction

The folder structure should make the site easy to maintain and hard to break.

Use clean routes, reusable components, central data, approved assets, and static export compatibility from the start.

## Addition: The Forsaken Son: Trials of Grace Route

Classification:

```text
Early Standalone Work
```

Do not add to primary navigation. Do not connect to Rage of Angels or In Harm’s Way.

Add to the App folder route structure and the approved route map:

```text
src/app/books/the-forsaken-son-trials-of-grace/page.tsx → /books/the-forsaken-son-trials-of-grace
```

Add the approved book cover asset path under `public/images/books/` when an approved cover exists:

```text
public/images/books/the-forsaken-son-trials-of-grace-book-cover.webp
```

If no approved cover exists, use a text-first layout and omit the cover image.
