# Claude Code Handoff Prompt

## Project

Eric Deloach Author Website

## Purpose of This Document

This document provides the full handoff prompt for Claude Code.

Use this prompt when moving from Claude Project planning into VS Code and Claude Code implementation.

Claude Code must follow this prompt exactly, preserve locked content, avoid invented facts, maintain static export compatibility, and generate the `/out` folder for Cloudflare Pages.

## Copy and Paste Prompt for Claude Code

```text
You are working inside the Eric Deloach author website project.

Project folder:
C:\Users\Welcome\Desktop\client-sites\eric-deloach-author-site

GitHub repository:
eric-deloach-author-site

Primary stack:
Next.js App Router
TypeScript
Static export
GitHub
Cloudflare Pages

Cloudflare Pages settings:
Build command: npm run build
Output directory: out
Production branch: main

Your job is to build the approved Eric Deloach author website from the project documentation and locked content.

You must not rewrite approved copy.
You must not invent facts.
You must not invent retailer links.
You must not invent video URLs.
You must not invent reviews.
You must not invent awards.
You must not invent events.
You must not invent book metadata.
You must not invent character details.
You must not alter approved slugs.
You must not use em dashes in visible website copy.

Use commas, periods, colons, semicolons, or parentheses instead of em dashes.
```

## Required First Step

```text
Before making changes, read these files if they exist:

README.md
CLAUDE.md
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

Treat the docs as the source of truth.
Do not delete or rewrite docs unless specifically instructed.
```

## Project Goal

```text
Build a polished static author website for Eric Deloach.

The site should present Eric Deloach as the author of the Rage of Angels universe and In Harm’s Way.

The brand is Myth and Mayhem.

Primary brand phrase:
Where mythology and mayhem collide.

The site must clearly guide readers into two main story lanes:

1. Epic mythological fantasy through the Rage of Angels universe
2. Grounded military action through In Harm’s Way
```

## Approved Author Positioning

```text
Eric Deloach writes dark fantasy, gritty action, and cinematic stories where power, loyalty, vengeance, redemption, and humanity collide.
```

## Canonical Author Name

```text
Eric Deloach
```

## Known Name Variants for Source Matching

```text
Eric DeLoach
Eric De’Loach
ERIC DELOACH
Eric Loko
```

Use the canonical name in visible copy unless the context is a social handle, platform identity, or source reference.

## Approved Core Routes

Create and build these routes:

```text
/
/about
/books
/books/rage-of-angels
/books/ascension-the-path-to-polaris
/books/sins-of-the-father
/books/in-harms-way
/series/rage-of-angels
/media
/reviews
/events
/contact
```

Do not create these optional pages unless specifically approved:

```text
/myth-and-mayhem
/characters
/lore
/newsletter
/blog
/press
/media-kit
```

## Approved Navigation

Use this primary navigation:

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

Footer copy:

```text
Eric Deloach writes dark fantasy, gritty action, and cinematic stories where mythology and mayhem collide.
```

Only include verified links.

## Static Export Requirements

Configure `next.config.ts` for static export.

Use:

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

The build must generate:

```text
out
```

Run:

```bash
npm run build
```

Confirm `/out` is generated.

Do not use:

```text
next export
API routes for MVP functionality
Server actions
Server-side rendering
Incremental Static Regeneration
Runtime CMS fetching
Runtime redirects
Runtime headers
Default image optimization that breaks static export
```

## Required Folder Structure

Use this structure:

```text
src/
├── app/
├── components/
├── data/
├── lib/
├── styles/
└── types/
```

Use this app route structure:

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
src/app/not-found.tsx
```

Use this component structure:

```text
src/components/layout/
src/components/navigation/
src/components/sections/
src/components/cards/
src/components/media/
src/components/seo/
src/components/ui/
```

Use these data files:

```text
src/data/site.ts
src/data/navigation.ts
src/data/books.ts
src/data/retailers.ts
src/data/socialLinks.ts
src/data/videos.ts
src/data/faqs.ts
```

Use these helper files:

```text
src/lib/metadata.ts
src/lib/schema.ts
src/lib/urls.ts
src/lib/utils.ts
```

## Required Public Asset Structure

Use:

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

Recommended book cover file names:

```text
rage-of-angels-book-cover.webp
ascension-path-to-polaris-book-cover.webp
sins-of-the-father-book-cover.webp
in-harms-way-book-cover.webp
```

Do not create fake book covers.

Do not alter book cover art.

Do not use fake author portraits.

Do not use unapproved military logos or insignia.

## Design Direction

Build the design to feel:

```text
Cinematic
Dark
Intense
Mythological
Tactical
Professional
Reader-focused
Book-focused
Modern
Atmospheric
```

The design should support two visual worlds.

Rage of Angels visual world:

```text
Dark fantasy
Celestial light
Fire and shadow
Ancient mythology
Cosmic scale
Gold or ember accents
Deep black and midnight blue
```

In Harm’s Way visual world:

```text
Grounded
Tactical
Gritty
Steel
Smoke
Low light
Gunmetal and charcoal
Brotherhood under pressure
```

Do not make the site look generic, corporate, cartoonish, cluttered, or overly bright.

## Required Components

Create reusable components where practical.

Recommended components:

```text
SiteLayout
Header
Footer
Container
MainNav
MobileNav
Breadcrumbs
SocialLinks
HeroSection
SectionHeader
CTASection
ChooseYourWorldSection
FeaturedBooksSection
RageOfAngelsSection
InHarmsWaySection
AuthorBioSection
MediaPreviewSection
RetailLinksSection
FAQSection
BookDetailsSection
CharacterGridSection
SeriesPathSection
ContactSection
BookCard
GenreLaneCard
CharacterCard
VideoCard
RetailButton
VideoEmbed
VideoGrid
JsonLd
Button
Card
Badge
ExternalLink
FAQItem
```

Use central data files to avoid duplicating facts.

## Homepage Requirements

Build the homepage in this order:

```text
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
```

Do not reorder the homepage sections.

## Homepage Hero Content

Use this content exactly:

```text
Myth and Mayhem

Eric Deloach

Gods, Soldiers, Sinners, and Survivors

Dark fantasy, gritty action, and stories where mythology and mayhem collide.
```

Expanded hero copy:

```text
Enter the worlds of Eric Deloach, author of the Rage of Angels universe and In Harm’s Way. From celestial warfare and ancient gods to tactical danger and military brotherhood, Eric writes cinematic stories where power always comes with a price.
```

Hero CTAs:

```text
Explore the Books
Start the Rage of Angels Series
Watch Book Trailers
```

## Choose Your World Content

Use the approved direction from `docs/homepage-content-plan.md`.

Section headline:

```text
Two Worlds. One Relentless Imagination.
```

Supporting line:

```text
Where Mythology and Mayhem Collide
```

Intro copy:

```text
Eric Deloach writes stories where power comes at a cost, whether that power is celestial, supernatural, tactical, or deeply human. His books move through two powerful lanes: epic mythological fantasy and grounded military action, both driven by characters pushed to their physical, emotional, and moral limits.
```

Fantasy lane:

```text
Epic Mythological Fantasy
The Rage of Angels Universe
```

Action lane:

```text
Grounded Action and Military Thrillers
In Harm’s Way
```

Use approved copy from the homepage content plan.

## Featured Books

Feature these books:

```text
Rage of Angels
Ascension: The Path to Polaris
Sins of the Father
In Harm’s Way
```

Each book card should include:

```text
Book cover
Title
Series or standalone label
Genre label
Short hook
CTA to book page
Verified retailer CTA only if available
```

Do not add fake badges, reviews, awards, or prices.

## Approved About Section Copy

Use this copy exactly:

```text
Born in Cleveland, Ohio, Eric Deloach, known as “Loko” to his friends, is a storyteller whose imagination was first sparked by the colorful, larger-than-life pages of comic books and the action-packed drama of superhero movies.

Today, Eric writes across fantasy, crime, science fiction, thrillers, and gritty action drama. Whether he is building epic mythological fantasy or grounded military stories, his goal remains the same: to craft intense, captivating worlds that push characters to their physical, emotional, and moral limits.

Eric is drawn to impossible choices. His stories explore what happens when ordinary people, extraordinary warriors, gods, soldiers, sinners, and survivors are forced to confront power, loyalty, vengeance, redemption, and the darkness inside themselves.

When he is not writing, Eric is dreaming up new ways to pull readers into worlds where heroism and humanity collide.
```

About CTAs:

```text
Read the Blog
Follow on Goodreads
Watch on YouTube
```

Use verified links only.

## Rage of Angels Book Page

Route:

```text
/books/rage-of-angels
```

H1:

```text
Rage of Angels
```

Subheadline:

```text
The debut fantasy novel that begins Eric Deloach’s mythological saga of gods, darkness, vengeance, and redemption.
```

Hero copy:

```text
Victor Mason is a dedicated policeman who believes he understands the line between right and wrong, until he discovers that his life is tied to something far older, darker, and more powerful than the world he knows.

Descended from celestial deities and bound by blood to darkness, Victor must become Astrius, a powerful deity forced into war against the formidable Anunnaki Gods. But to survive the coming celestial conflict, Astrius must journey into hell and wield a seductive, corrupting power that threatens to consume him.

As he becomes the embodiment of the rage of angels, one question remains: is Astrius humanity’s savior, its destroyer, or something far more dangerous?
```

CTAs:

```text
Buy the Book
Listen to the Audiobook
Start the Rage of Angels Series
Watch the Trailer
```

Only render CTAs with verified links or valid internal routes.

## Ascension Book Page

Route:

```text
/books/ascension-the-path-to-polaris
```

H1:

```text
Ascension: The Path to Polaris
```

Subheadline:

```text
The sequel that expands Astrius’s journey, redemption arc, and place among the stars.
```

Hero copy:

```text
The Rage of Angels saga continues as Astrius faces greater challenges, deeper consequences, and a destiny that reaches toward Polaris.

After the events that reshaped his path, Astrius must confront the cost of power, the burden of redemption, and the forces that stand between him and his place among the stars. Ascension: The Path to Polaris expands Eric Deloach’s mythological universe with higher stakes, cosmic conflict, and a hero still fighting to understand what he is becoming.
```

CTAs:

```text
Buy the Book
Continue the Saga
Explore the Rage of Angels Universe
```

Do not publish exact date, page count, ISBN, or audiobook status unless verified.

## Sins of the Father Book Page

Route:

```text
/books/sins-of-the-father
```

H1:

```text
Sins of the Father
```

Subheadline:

```text
A deeper expansion of the Rage of Angels universe, where legacy, ancient evil, and hidden truths come to the surface.
```

Hero copy:

```text
Sins of the Father expands the Rage of Angels universe with a darker look at legacy, power, ancient evil, and the forces that shaped Astrius long before the war reached its current form.

This related work deepens the lore around immortal gods, humans endowed with extraordinary power, Damon, the god of hell, and Astrius’s hidden backstory, including his long history on Earth. It is a story about consequences, bloodlines, and the past refusing to stay buried.
```

CTAs:

```text
Buy the Book
Explore the Universe
Start with Rage of Angels
```

Do not publish exact release date, page count, ISBN, or reading order unless verified.

## In Harm’s Way Book Page

Route:

```text
/books/in-harms-way
```

H1:

```text
In Harm’s Way
```

Subheadline:

```text
A gritty military action drama about brotherhood, survival, betrayal, and the cost of violence.
```

Hero copy:

```text
Step out of the heavens and into the battlefield with In Harm’s Way, a grounded action drama centered on the boys of Charlie One Alpha.

Built around tactical danger, military brotherhood, and characters forced into impossible situations, In Harm’s Way delivers a hard-edged shift from Eric Deloach’s mythological fantasy universe into a world of Navy operators, survival, loyalty, revenge, and consequences.

Where the Rage of Angels saga explores gods, darkness, and destiny, In Harm’s Way brings the fight down to earth.
```

CTAs:

```text
Buy the Book
Watch the Trailer
Meet Charlie One Alpha
Listen to the Audiobook
```

Only render CTAs with verified links or valid internal routes.

Approved characters and roles:

```text
Chief Petty Officer Greg Esposito: US Navy SEAL
Petty Officer 1st Class Denton Haas: US Navy sniper
CTO1 Casey Carter: US Navy information and communications officer
CTOCS Malice Collissimo: Senior member of the US Navy
```

Approved character copy:

```text
Chief Petty Officer Greg Esposito:
A US Navy SEAL and one of the key tactical forces within Charlie One Alpha. His presence brings elite operator intensity, discipline, and battlefield experience to the story.

Petty Officer 1st Class Denton Haas:
A US Navy sniper whose role adds precision, patience, and lethal focus to the team dynamic.

CTO1 Casey Carter:
A US Navy information and communications officer who brings technical skill, situational awareness, and communications expertise to the mission.

CTOCS Malice Collissimo:
A senior US Navy figure whose role adds experience, command presence, emotional weight, and hard-earned intensity to the world of Charlie One Alpha.
```

Do not add character backstories, mission details, casualties, romantic relationships, or unapproved military claims.

## Rage of Angels Series Page

Route:

```text
/series/rage-of-angels
```

H1:

```text
The Rage of Angels Universe
```

Hero subheadline:

```text
Where celestial bloodlines, ancient gods, hell-born power, and moral judgment collide.
```

Hero body copy:

```text
The Rage of Angels universe begins with Victor Mason, a dedicated policeman whose life is shattered when he discovers that his bloodline is tied to celestial power and darkness. Forced to become Astrius, he is pulled into a war against the formidable Anunnaki Gods and must decide how far into the darkness he is willing to descend to protect humanity.
```

Reading path:

```text
1. Rage of Angels
2. Ascension: The Path to Polaris
3. Sins of the Father
```

If Sins of the Father placement is not verified as Book 3, use cautious language from the docs and do not state it as confirmed Book 3.

## Media Page

Route:

```text
/media
```

H1:

```text
Media
```

Subheadline:

```text
Watch trailers, shorts, and story-driven videos from Eric Deloach’s worlds of myth, mayhem, and grounded action.
```

Body copy:

```text
Explore book trailers, character-focused shorts, and promotional videos from Eric Loko’s YouTube presence. From the dark fantasy energy of Rage of Angels to the tactical intensity of In Harm’s Way, these videos give readers another way to enter Eric Deloach’s stories.
```

Only render verified videos.

Do not render placeholder embeds.

## Reviews Page

Route:

```text
/reviews
```

Do not invent reviews.

Safe copy:

```text
Reader reviews and approved praise will be shared here as they become available.
```

Include Goodreads CTA if verified.

Do not add Review schema or AggregateRating schema unless verified and approved.

## Events Page

Route:

```text
/events
```

Do not invent events.

Safe copy:

```text
Upcoming events and appearances will be shared here when available.
```

Do not add Event schema unless a specific event is verified and approved.

## Contact Page

Route:

```text
/contact
```

Do not publish personal contact information unless approved.

Do not build a fake form.

Do not use an API route for contact form handling.

If no approved contact method exists, keep the page simple and use approved social or contact guidance only.

## Approved Social Links

Use verified or client-provided links.

```text
TikTok:
https://www.tiktok.com/@ericloko424

YouTube Shorts:
https://www.youtube.com/@ericloko702/shorts

YouTube Featured:
https://www.youtube.com/@ericloko702/featured

Instagram:
https://www.instagram.com/eric_loko702/

Facebook:
https://www.facebook.com/eric.deloach

Goodreads:
https://www.goodreads.com/author/show/50787512.ERIC_DELOACH

Goodreads Book List:
https://www.goodreads.com/author/list/50787512.ERIC_DELOACH

Myth and Mayhem:
https://www.ericdeloachmythandmayhem.com/
```

Verify public accessibility where possible.

## Approved Retail Source Links

Use verified or client-provided links.

```text
Amazon Author Store:
https://www.amazon.com/stores/Eric-DeLoach/author/B0DBYP7SM6?ref=ap_rdr&shoppingPortalEnabled=true&ccs_id=c7640faf-69f7-4aca-b353-e5d9799d5d56

Apple Books Author:
https://books.apple.com/se/author/eric-deloach/id508714465

Google Play Author:
https://play.google.com/store/info/name/ERIC_DELOACH?id=11mw753sr&pli=1

Barnes and Noble Author Search:
https://www.barnesandnoble.com/search?attributes.contributorId=31578214&contributorName=ERIC%20DELOACH

Booktopia Author Search:
https://www.booktopia.com.au/search?author=ERIC+DELOACH&productType=917505

ThriftBooks Author:
https://www.thriftbooks.com/a/eric-deloach/13707301/

BookScouter Author:
https://bookscouter.com/author/deloach-eric

Indigo Rage of Angels:
https://www.indigo.ca/products/rage-of-angels-1
```

Do not guess book-specific retailer URLs.

Only render retailer buttons with verified URLs.

Do not publish prices.

## Retail Button Rules

Never render:

```text
href="#"
href=""
href="/"
```

Do not show a retailer button if the exact URL is missing.

Do not claim a book is available in a format unless verified.

Do not add Offer schema unless price, currency, availability, and URL are verified and approved.

## Video Rules

Priority media items:

```text
Rage of Angels trailer
In Harm’s Way promotional trailer
Charlie One Alpha character shorts
```

Only embed videos if the exact URL is verified.

If video URLs are missing, do not render embeds or public placeholder cards.

Internal comments are acceptable.

Visible TODO text is not acceptable.

## Metadata Requirements

Implement metadata for every page using approved metadata from `docs/metadata-plan.md`.

Use these core titles:

```text
Home:
Eric Deloach | Author of Rage of Angels and In Harm’s Way

About:
About Eric Deloach | Author Bio

Books:
Eric Deloach Books | Rage of Angels, In Harm’s Way, and More

Rage of Angels:
Rage of Angels by Eric Deloach

Ascension:
Ascension: The Path to Polaris by Eric Deloach

Sins of the Father:
Sins of the Father by Eric Deloach

In Harm’s Way:
In Harm’s Way by Eric Deloach

Rage of Angels Series:
Rage of Angels Universe by Eric Deloach

Media:
Media | Eric Deloach Trailers and Shorts

Reviews:
Reviews | Eric Deloach Books

Events:
Events | Eric Deloach

Contact:
Contact Eric Deloach
```

Use canonical URLs from the final domain when confirmed.

Until final domain is confirmed, keep domain configurable in `src/data/site.ts`.

Do not hard-code Cloudflare preview URLs as final canonical URLs.

## Schema Requirements

Implement JSON-LD using verified fields only.

Recommended schema:

```text
Home: WebSite, Person
About: Person, BreadcrumbList
Books: CollectionPage, BreadcrumbList
Book pages: Book, BreadcrumbList, FAQPage if approved
Rage of Angels series: CollectionPage, BreadcrumbList, FAQPage if approved
Media: CollectionPage, BreadcrumbList, VideoObject only if verified
Reviews: WebPage, BreadcrumbList
Events: WebPage, BreadcrumbList
Contact: ContactPage, BreadcrumbList
```

Do not include:

```text
Review
AggregateRating
Offer
Event
Price
Availability
Award
Publisher
Narrator
```

unless verified and approved.

## Sitemap and Robots

Create:

```text
public/sitemap.xml
public/robots.txt
```

Sitemap should include only approved live pages.

Robots should use final domain when confirmed.

Before final domain confirmation, use a clear placeholder that can be updated:

```text
https://[domain]
```

Do not leave `[domain]` in production launch files.

## 404 Page

Create:

```text
src/app/not-found.tsx
```

Recommended CTAs:

```text
Return Home
Explore the Books
Start the Rage of Angels Series
```

Do not use joke copy that conflicts with the author brand.

## Accessibility Requirements

Every page must include:

```text
One H1
Semantic headings
Readable contrast
Keyboard accessible navigation
Visible focus states
Accessible buttons
Descriptive alt text
Descriptive iframe titles
Responsive video embeds
Mobile-friendly layouts
No horizontal scrolling
```

Book cover alt text pattern:

```text
Book cover for [Book Title] by Eric Deloach
```

Author portrait alt text:

```text
Eric Deloach author portrait
```

## Performance Requirements

Do:

```text
Optimize images
Use WebP where possible
Avoid unnecessary dependencies
Limit homepage video embeds
Use static data
Keep pages fast
```

Do not:

```text
Add large background videos
Add heavy animation libraries without approval
Load unused images
Embed too many videos on the homepage
Use server-required image optimization
```

## Git Safety Rules

Before making major changes:

```text
Run git status
Review existing files
Do not delete docs
Do not delete approved assets
Do not run destructive git commands without approval
```

Do not run without approval:

```text
git reset --hard
git clean -fd
git push --force
```

## Build Tasks

Complete the implementation in this order:

```text
1. Confirm or create Next.js static export configuration
2. Confirm app route structure
3. Create central data files
4. Create reusable layout, navigation, UI, card, media, and SEO components
5. Build homepage
6. Build Books page
7. Build Rage of Angels book page
8. Build In Harm’s Way book page
9. Build Rage of Angels series page
10. Build Ascension page
11. Build Sins of the Father page
12. Build About page
13. Build Media page
14. Build Reviews page
15. Build Events page
16. Build Contact page
17. Add metadata helpers
18. Add schema helpers
19. Add sitemap and robots
20. Add 404 page
21. Run local QA
22. Run npm run build
23. Confirm /out is generated
```

## QA Before Final Response

After implementation, verify:

```text
All approved routes exist
All approved routes build
No unapproved routes are added
No visible TODO text appears
No placeholder links appear
No href="#" appears
No fake retailer buttons appear
No fake reviews appear
No fake awards appear
No fake events appear
No fake video embeds appear
No unverified prices appear
No unapproved character details appear
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
/out folder is generated
```

## Required Final Report From Claude Code

When finished, report:

```text
Files created
Files modified
Routes built
Components created
Data files created
Static export status
Whether npm run build passed
Whether /out was generated
Any missing assets
Any links intentionally omitted because they were not verified
Any media intentionally omitted because video URLs were not verified
Any contact or newsletter functionality omitted because no provider was approved
```

## Final Instruction

Build the site carefully.

Preserve the approved content.

Do not invent.

Do not overreach.

Do not add unverified facts.

Do not use em dashes.

The final site must be a static Next.js author website that builds cleanly to `/out` and is ready for Cloudflare Pages.

## Short Version for Follow-Up Claude Code Sessions

Use this shorter prompt only after the project is already scaffolded and the docs are already loaded.

```text
Continue work on the Eric Deloach author website.

Read CLAUDE.md and the docs folder before editing.

Follow the approved stack:
Next.js App Router, TypeScript, static export, Cloudflare Pages, /out output.

Preserve approved copy, approved slugs, approved metadata, approved schema facts, approved book facts, approved character details, and approved CTAs.

Do not rewrite locked content.
Do not invent facts.
Do not invent retailer links.
Do not invent video URLs.
Do not invent reviews.
Do not invent awards.
Do not invent events.
Do not use em dashes in visible copy.
Do not publish placeholder links, fake forms, fake media, or visible TODO text.

Use verified links only.
Use static export-compatible code only.
Run npm run build before final handoff.
Confirm /out is generated.
Report files changed, routes affected, build status, and any intentionally omitted unverified items.
```

## Most Important Instruction

Claude Code must implement the approved build prompt exactly.

Claude Project creates the locked content and build plan.

Claude Code builds from that plan without changing, improving, rewriting, or inventing content.

## Addition: The Forsaken Son: Trials of Grace (Early Standalone Work)

Add this title to the approved build scope. See `the-forsaken-son-page-plan.md` for the full plan.

Route:

```text
/books/the-forsaken-son-trials-of-grace
```

Page file:

```text
src/app/books/the-forsaken-son-trials-of-grace/page.tsx
```

Required data updates:

```text
src/data/books.ts
src/data/retailers.ts
src/data/faqs.ts
src/data/navigation.ts, only if Books hub or footer data requires it
src/lib/schema.ts
src/lib/metadata.ts
public/sitemap.xml
```

Approved classification:

```text
Early Standalone Work
```

Implementation rules:

```text
Do not add this page to primary navigation.
Add it to the Books hub under Early Standalone Work.
Do not connect it to Rage of Angels or In Harm’s Way.
Only render verified retailer links.
Do not render prices.
Do not render fake reviews, ratings, awards, or availability.
Do not render audiobook, eBook, or hardcover claims unless verified.
```

Image rule:

```text
Use approved cover image only.
Recommended file path:
public/images/books/the-forsaken-son-trials-of-grace-book-cover.webp

Recommended alt text:
Book cover for The Forsaken Son: Trials of Grace by Eric Deloach

If no approved cover exists, use a text-first layout and omit the cover image.
```

Build QA:

```text
Confirm /books/the-forsaken-son-trials-of-grace/ builds.
Confirm the page appears in sitemap.
Confirm Books hub links to the page.
Confirm no placeholder retailer links appear.
Confirm no fake series connection appears.
Confirm no em dashes appear in visible copy.
Run npm run build.
Confirm /out is generated.
```
