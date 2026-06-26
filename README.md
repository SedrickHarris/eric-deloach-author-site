# Eric Deloach Author Site

## Project Overview

This repository contains the static Next.js author website for **Eric Deloach**, built around the public-facing brand **Myth and Mayhem**.

Primary brand phrase:

```text
Where mythology and mayhem collide
```

Primary author positioning:

```text
Eric Deloach writes dark fantasy, gritty action, and cinematic stories where power, loyalty, vengeance, redemption, and humanity collide.
```

The site is designed to help readers:

* Learn who Eric Deloach is
* Explore his books
* Enter the Rage of Angels universe
* Discover In Harm’s Way and Charlie One Alpha
* Find The Forsaken Son: Trials of Grace as an early standalone work
* Watch verified trailers and media
* Follow verified social platforms
* Use verified retailer and discovery links
* Move from discovery to reader action

## Project Status

Current status:

```text
Planning documentation baseline pushed to GitHub.
Static export scaffold configured.
Next.js build verified.
Repository branch renamed to main.
Cloudflare Pages deployment pending.
Claude Code implementation phase pending.
```

Latest known baseline:

```text
Repository: SedrickHarris/eric-deloach-author-site
Branch: main
Static export output: out
Build command: npm run build
```

## Tech Stack

Approved stack:

* Claude Project for research, strategy, planning, and locked build prompts
* Claude Code for implementation
* VS Code for local development
* Next.js App Router
* TypeScript
* Static export
* GitHub
* Cloudflare Pages
* Local static data files
* Reusable components
* JSON-LD schema
* SEO and AEO-ready page structure

## Local Project Folder

Approved local folder:

```text
C:\Users\Welcome\Desktop\client-sites\eric-deloach-author-site
```

## GitHub Repository

Approved GitHub repository:

```text
https://github.com/SedrickHarris/eric-deloach-author-site.git
```

Production branch:

```text
main
```

## Cloudflare Pages Settings

Use these Cloudflare Pages settings:

```text
Framework preset: Next.js Static HTML Export
Build command: npm run build
Output directory: out
Production branch: main
```

The site must generate the `/out` folder during build.

## Static Export Requirement

This project must remain compatible with static export.

Required `next.config.ts` behavior:

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

Do not add server-required features unless explicitly approved.

Do not use:

* API routes for MVP functionality
* Server actions
* Server-side rendering
* Incremental Static Regeneration
* Runtime CMS fetching
* Runtime redirects required for core behavior
* Runtime headers required for core behavior
* Default image optimization that breaks static export

## Local Development

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Run production build:

```bash
npm run build
```

Expected build result:

```text
The /out folder is generated.
The static export succeeds.
No server-only runtime errors appear.
```

If lint is configured:

```bash
npm run lint
```

## Build Output

Expected output directory:

```text
out
```

Do not manually edit `/out`.

Do not commit `/out` unless the deployment strategy changes and that change is explicitly approved.

## Source of Truth

The main source folders are:

```text
src/
public/
docs/
```

Generated folders are not source of truth:

```text
.next/
out/
node_modules/
```

## Approved Routes

The approved public routes are:

```text
/
/about/
/books/
/books/rage-of-angels/
/books/ascension-the-path-to-polaris/
/books/sins-of-the-father/
/books/in-harms-way/
/books/the-forsaken-son-trials-of-grace/
/series/rage-of-angels/
/media/
/reviews/
/events/
/contact/
```

Do not add additional public routes without approval.

## Optional Future Routes

Do not build these unless approved:

```text
/myth-and-mayhem/
/characters/
/lore/
/newsletter/
/blog/
/press/
/media-kit/
```

## Approved Primary Navigation

Primary navigation:

```text
Home
Books
Rage of Angels
Media
About
Contact
```

Header CTA:

```text
Explore the Books
```

Footer groups:

```text
Books
Explore
Follow
Retail
```

Do not add The Forsaken Son: Trials of Grace to primary navigation.

## Site Content Lanes

The site has two primary reader lanes and one secondary catalog lane.

## Primary Lane 1: The Rage of Angels Universe

Books:

```text
Rage of Angels
Ascension: The Path to Polaris
Sins of the Father
```

Core themes:

* Victor Mason
* Astrius
* Celestial heritage
* The Anunnaki Gods
* Hell-born power
* Divine conflict
* Ancient evil
* Moral ambiguity
* Savior versus destroyer
* Legacy
* Vengeance
* Redemption
* Darkness

## Primary Lane 2: In Harm’s Way

Book:

```text
In Harm’s Way
```

Core themes:

* Charlie One Alpha
* US Navy personnel
* Navy SEALs
* Sniper roles
* Communications roles
* Tactical danger
* Military brotherhood
* Survival
* Loyalty
* Violence and consequence
* Grief
* Revenge
* Justice

Approved character references:

```text
Chief Petty Officer Greg Esposito: US Navy SEAL
Petty Officer 1st Class Denton Haas: US Navy sniper
CTO1 Casey Carter: US Navy information and communications officer
CTOCS Malice Collissimo: Senior member of the US Navy
```

Do not invent additional character details, missions, relationships, casualties, or military claims.

## Secondary Catalog Lane: Early Standalone Work

Book:

```text
The Forsaken Son: Trials of Grace
```

Classification:

```text
Early Standalone Work
```

Positioning:

```text
The Forsaken Son: Trials of Grace is an early standalone work from Eric Deloach that explores crime, justice, personal loss, public service, moral consequence, and the search for purpose.
```

Do not connect this book to:

```text
The Rage of Angels Universe
In Harm’s Way
Charlie One Alpha
```

unless Eric Deloach explicitly confirms that connection later.

Do not add it to homepage priority sections.

Do not add it to primary navigation.

## Approved Homepage Flow

Homepage sections should follow this order:

1. Hero
2. Choose Your World
3. Featured Books
4. Rage of Angels Universe
5. In Harm’s Way
6. About Eric
7. Book Trailers and YouTube Shorts
8. Join the Reader List, only if approved
9. Retail Links
10. Footer

Do not reorder without approval.

## Content Lock Rules

Approved content is locked.

Locked content includes:

* Headlines
* Subheadlines
* Body copy
* Book descriptions
* Author bio
* CTAs
* Page slugs
* Navigation labels
* Metadata
* Schema facts
* Book facts
* Character names
* Character roles
* Retail link rules
* Media link rules
* FAQ answers
* Do-not-invent instructions

Claude Code must not rewrite, summarize, improve, rephrase, or alter locked content unless explicitly instructed.

Claude Code may adjust:

* Layout
* Spacing
* Component organization
* Responsive behavior
* Accessibility
* Performance
* Static export compatibility

## No Em Dash Rule

Do not use em dashes in visible website copy, metadata, schema descriptions, FAQ answers, page copy, or build prompts.

Do not use this character:

```text
—
```

Use commas, periods, colons, semicolons, parentheses, or clean sentence breaks instead.

## Do-Not-Invent Rules

Never invent:

* Book facts
* Book release dates
* Page counts
* ISBNs
* Audiobook runtimes
* Publishers
* Narrators
* Retailer links
* Prices
* Ratings
* Reviews
* Awards
* Bestseller claims
* Events
* Media appearances
* Trailer URLs
* Video upload dates
* Video durations
* Video thumbnails
* Video descriptions
* Video transcripts
* Author biography details
* Character backstories
* Character relationships
* Military missions
* Military endorsements
* Fantasy lore
* Contact information
* Newsletter functionality
* Social profiles
* Press mentions

If the information is not verified, mark it as pending verification or omit it from public-facing output.

## Claims to Avoid Unless Verified

Do not use these claims unless verified and approved:

* Award-winning
* Bestselling
* Critically acclaimed
* International sensation
* Top-rated
* Millions of readers
* Viral
* Officially endorsed
* Navy-approved
* Featured in major media
* Available everywhere
* Number one
* Fan favorite

## Retailer Link Rules

Retailer links must be verified before public rendering.

Potential retailer and discovery sources include:

* Amazon
* Apple Books
* Apple Books Audiobook
* Google Play Books
* Barnes and Noble
* Goodreads
* Indigo / Kobo
* Booktopia
* ThriftBooks
* BookScouter
* Walmart, for The Forsaken Son if verified
* Hoopla through participating libraries, if verified

Public rendering rules:

```text
Only render verified links.
Do not render placeholder links.
Do not use href="#".
Do not use href="".
Do not show prices.
Do not claim availability unless verified.
Do not add Offer schema unless price, currency, availability, and URL are verified and approved.
```

Goodreads should be treated as a reader discovery platform, not a direct purchase retailer.

## Media Rules

Only use verified video URLs.

Priority media:

* Rage of Angels trailer
* In Harm’s Way promotional trailer
* Charlie One Alpha character shorts

Do not invent:

* Video titles
* Video upload dates
* Video runtimes
* Video thumbnails
* Video descriptions
* Video transcripts

Do not render placeholder video embeds.

## Image Rules

Use approved image assets only.

Recommended book cover file names:

```text
rage-of-angels-book-cover.webp
ascension-path-to-polaris-book-cover.webp
sins-of-the-father-book-cover.webp
in-harms-way-book-cover.webp
the-forsaken-son-trials-of-grace-book-cover.webp
```

Recommended book cover location:

```text
public/images/books/
```

Do not use:

* Fake author portraits
* Fake character art
* Fake book covers
* Fake military logos
* Fake awards badges
* Fake review graphics
* Unapproved retailer logos

If no approved cover exists, use a text-first layout and omit the cover image.

## Schema Rules

Use verified facts only.

Recommended schema types:

* WebSite
* Person
* Book
* CollectionPage
* BreadcrumbList
* FAQPage
* VideoObject, only if verified
* ContactPage
* WebPage

Do not include these unless verified and approved:

* Review
* AggregateRating
* Offer
* Event
* Price
* Availability
* Award
* Publisher
* Narrator

FAQ schema must match visible FAQ content exactly.

## Metadata Rules

Metadata must be:

* Unique per page
* Accurate
* Concise
* Reader-focused
* Search-friendly
* Free of fake hype
* Free of em dashes

Do not hard-code Cloudflare preview URLs as final canonical URLs.

Use the final production domain only after it is confirmed.

Placeholder domain format:

```text
https://[domain]
```

## Sitemap and Robots

The project should include:

```text
public/sitemap.xml
public/robots.txt
```

The sitemap must include only approved live pages.

The robots file should use the final domain before launch.

Recommended robots format:

```txt
User-agent: *
Allow: /

Sitemap: https://[domain]/sitemap.xml
```

Replace `[domain]` only after the production domain is confirmed.

## Documentation Inventory

Core root docs:

```text
README.md
CLAUDE.md
```

Planning docs:

```text
docs/project-overview.md
docs/author-brand-guide.md
docs/verified-source-inventory.md
docs/do-not-invent.md
docs/content-lock-rules.md
docs/site-architecture.md
docs/url-slug-strategy.md
docs/homepage-content-plan.md
docs/book-pages-content-plan.md
docs/rage-of-angels-series-plan.md
docs/in-harms-way-page-plan.md
docs/the-forsaken-son-page-plan.md
docs/media-and-social-plan.md
docs/retailer-links-plan.md
docs/seo-aeo-plan.md
docs/schema-plan.md
docs/metadata-plan.md
docs/image-and-media-guidelines.md
docs/design-direction.md
docs/component-plan.md
docs/folder-structure.md
docs/nextjs-static-export.md
docs/cloudflare-pages-deployment.md
docs/github-workflow.md
docs/prelaunch-checklist.md
docs/claude-project-instructions.md
docs/claude-code-handoff-prompt.md
```

## Recommended Build Phase Order

Build in controlled phases:

1. Confirm static export scaffold
2. Confirm app route structure
3. Create central data files
4. Create reusable layout, navigation, UI, card, media, and SEO components
5. Build homepage
6. Build Books page
7. Build Rage of Angels book page
8. Build In Harm’s Way book page
9. Build The Forsaken Son book page
10. Build Rage of Angels series page
11. Build Ascension page
12. Build Sins of the Father page
13. Build About page
14. Build Media page
15. Build Reviews page
16. Build Events page
17. Build Contact page
18. Add metadata helpers
19. Add schema helpers
20. Add sitemap and robots
21. Add 404 page
22. Run local QA
23. Run `npm run build`
24. Confirm `/out` is generated

## Build QA Checklist

Before pushing build work:

```text
npm run build passes
/out folder is generated
All approved routes build
No unapproved routes are added
No visible TODO text appears
No placeholder links appear
No href="#" appears
No fake retailer links appear
No fake reviews appear
No fake awards appear
No fake events appear
No fake video embeds appear
No unverified prices appear
No em dashes appear in visible copy
All internal links work
All external links are verified or omitted
Book covers are not distorted
Mobile layout works
Metadata exists
Schema uses verified facts only
Sitemap exists
Robots exists
Static export works
```

## Git Workflow

Before committing:

```bash
git status
npm run build
git diff
```

Commit and push:

```bash
git add -A
git commit -m "Describe the completed change"
git push origin main
```

Do not commit:

```text
node_modules
.next
out
.env
.env.local
Large unused screenshots
Unapproved media assets
```

## Deployment Workflow

Recommended deployment order:

1. Push clean source to GitHub main
2. Connect GitHub repo to Cloudflare Pages
3. Use build command `npm run build`
4. Use output directory `out`
5. Deploy preview
6. QA preview deployment
7. Connect production domain when approved
8. Update sitemap, robots, metadata, and schema URLs with final domain
9. Run final launch QA

## Cloudflare Preview QA

After Cloudflare deploys the preview URL, confirm:

```text
Homepage loads
About page loads
Books page loads
All book pages load
Rage of Angels series page loads
Media page loads
Reviews page loads
Events page loads
Contact page loads
404 page works
Images load
Navigation works
Footer works
Retail links work
Social links work
Videos work only if verified
Sitemap loads
Robots file loads
No placeholder content appears
No visible TODO text appears
```

## Important Implementation Reminder

This site is an author platform. Accuracy protects the author’s credibility.

If a fact, link, image, video, review, event, price, format, or metadata field is not verified, do not publish it as fact.

Build carefully.

Preserve locked content.

Do not invent.

Do not use em dashes.

Generate `/out`.

Keep the site ready for Cloudflare Pages.
