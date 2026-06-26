# CLAUDE.md

This file provides mandatory instructions for Claude Code when working inside the **Eric Deloach Author Website** repository.

## Project Summary

This project is the official author website for **Eric Deloach**, author of the *Rage of Angels* universe and *In Harm’s Way*.

The website will highlight Eric’s author brand, book catalog, reader pathways, videos, social presence, and retailer links.

The site must be built as a static Next.js website and deployed to Cloudflare Pages.

## Technology Stack

Use the following stack:

* Next.js
* TypeScript
* React
* CSS or Tailwind, depending on scaffold decision
* GitHub
* Cloudflare Pages
* Static export with `/out` folder
* VS Code
* Claude Code

## Local Project Folder

```text
C:\Users\Welcome\Desktop\client-sites\eric-deloach-author-site
```

## GitHub Repository

```text
eric-deloach-author-site
```

## Primary Build Requirement

This site must support static export for Cloudflare Pages.

The production build must generate:

```text
/out
```

Expected Cloudflare Pages settings:

```text
Build command: npm run build
Output directory: out
```

Do not change the deployment target unless explicitly instructed.

## Core Website Purpose

The site must help readers quickly understand:

1. Who Eric Deloach is
2. What genres he writes
3. Where to start reading
4. Which books belong to the *Rage of Angels* universe
5. How *In Harm’s Way* fits into his grounded action and military thriller lane
6. Where to watch trailers and shorts
7. Where to buy or follow Eric’s work

## Author Brand Direction

The author brand should feel:

* Cinematic
* Dark
* Mythological
* Tactical
* Intense
* Professional
* Character-driven
* Reader-focused

Core language and themes:

```text
Myth and Mayhem
Where mythology and mayhem collide
Gods, soldiers, sinners, and survivors
Two worlds. One relentless imagination.
Dark fantasy
Gritty action
Celestial warfare
Military brotherhood
Moral ambiguity
Characters pushed to their limits
Heroism and humanity collide
```

## Two Main Reader Lanes

The website must clearly separate and connect two creative lanes.

### Lane 1: Epic Mythological Fantasy

Featured universe:

```text
The Rage of Angels Universe
```

Primary books:

```text
Rage of Angels
Ascension: The Path to Polaris
Sins of the Father
```

Themes to highlight:

* Victor Mason
* Astrius
* Celestial heritage
* Anunnaki Gods
* Hell-born power
* Divine conflict
* Ancient evil
* Moral ambiguity
* Savior versus destroyer
* Legacy, vengeance, redemption, and darkness

### Lane 2: Grounded Action / Military Thrillers

Featured book:

```text
In Harm’s Way
```

Themes to highlight:

* The boys of Charlie One Alpha
* US Navy personnel
* Navy SEALs
* Sniper roles
* Communications roles
* Tactical survival
* Military brotherhood
* Loyalty
* Consequences
* Grief, violence, revenge, and justice

## Content Lock Rule

Approved content is locked.

Claude Code must not rewrite, soften, summarize, expand, embellish, reorder, or replace approved copy unless explicitly instructed by the user.

Claude Code may improve:

* Layout
* Responsiveness
* Accessibility
* Component structure
* Visual hierarchy
* Technical SEO
* Metadata implementation
* Schema implementation
* Code quality

Claude Code must not alter approved:

* Headlines
* Subheadlines
* Book descriptions
* Author bio copy
* CTAs
* Retailer labels
* Character names
* Book metadata
* Source-backed facts
* Page slugs
* Navigation labels
* Schema facts

## Do Not Invent Rule

Do not invent any facts.

Never invent:

* Awards
* Reviews
* Bestseller status
* Sales numbers
* Press mentions
* Media appearances
* Book rankings
* Release dates
* ISBNs
* Page counts
* Audiobook runtimes
* Retailer availability
* Character names
* Character roles
* Biographical details
* Publisher details
* Personal stories
* Quotes from the author
* Reader testimonials
* Library availability

If a detail is not in the approved source documents, verified source inventory, or user-approved content, do not include it.

When uncertain, omit the detail or mark it as needing verification in a project note.

## No Fake Reviews

Do not create fake reader praise, fake testimonials, fake Goodreads reviews, fake Amazon reviews, or fake critic quotes.

Only use review language if it is provided by the user or verified from an approved source and cleared for use.

## No Fake Retail Claims

Do not claim a book is available from a retailer unless the retailer is confirmed in the source inventory or provided by the user.

Do not hard-code prices unless the user explicitly requests it.

Retail prices can change. Prefer stable retailer buttons over static price claims.

## Canonical Author Name

Use the name selected in the project docs.

Current working name:

```text
Eric Deloach
```

Known platform variants may include:

```text
Eric DeLoach
Eric De’Loach
ERIC DELOACH
Eric Loko
```

Use variants only when needed for SEO, metadata, social links, or source references.

Do not randomly switch the display name across pages.

## Current Core Pages

Build or plan for these core pages:

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

Optional future pages:

```text
/myth-and-mayhem
/characters
/lore
/newsletter
/blog
```

Do not add new primary pages without project approval.

## Homepage Flow

The homepage should follow this approved structure:

1. Hero
2. Choose Your World
3. Featured Books
4. Rage of Angels Universe
5. In Harm’s Way
6. About Eric
7. Book Trailers and YouTube Shorts
8. Join the Reader List
9. Retail Links
10. Footer

## Approved Homepage Headline Direction

Use this direction unless updated in the content plan:

```text
Eric Deloach
Gods, Soldiers, Sinners, and Survivors
Dark fantasy, gritty action, and stories where mythology and mayhem collide.
```

## Approved Section Concepts

Use these section concepts:

```text
Two Worlds. One Relentless Imagination.
Where Mythology and Mayhem Collide
The Mind Behind the Mayhem
Choose Your World
Enter the Rage of Angels Universe
Meet Charlie One Alpha
```

## Book Metadata Handling

Book facts must match the verified source inventory and approved content plans.

Known primary books:

```text
Rage of Angels
Ascension: The Path to Polaris
Sins of the Father
In Harm’s Way
```

Use careful wording when metadata differs by retailer.

Example:

```text
Page count varies by format and retailer.
```

Do not force one retailer’s page count into all contexts.

## Retail Link Handling

Book pages should support retailer buttons for verified retailers, including:

```text
Amazon
Apple Books
Apple Books Audiobook
Google Play Books
Barnes & Noble
Goodreads
Indigo / Kobo
Booktopia
ThriftBooks
Hoopla through participating libraries
```

Only display retailers confirmed for that specific title.

Do not display broken or placeholder links on the live site.

If a retailer link is missing, use a temporary data note in the code or content file, not visible live copy.

## Media Handling

The site should support:

* Author portrait
* Book covers
* YouTube trailer embeds
* YouTube Shorts embeds
* Social media links
* Goodreads links
* Retailer buttons

Video embeds should be responsive, accessible, and not break mobile layouts.

If exact video URLs are missing, leave a clear developer note in the data file and do not invent URLs.

## Image Rules

Use descriptive file names.

Preferred examples:

```text
eric-deloach-author-portrait.webp
rage-of-angels-book-cover.webp
ascension-path-to-polaris-book-cover.webp
sins-of-the-father-book-cover.webp
in-harms-way-book-cover.webp
rage-of-angels-trailer-thumbnail.webp
in-harms-way-trailer-thumbnail.webp
```

All meaningful images must include alt text.

Do not use random stock imagery that misrepresents the author, book covers, military uniforms, or characters.

## Design Direction

The design should balance both story lanes:

### Fantasy Lane

Visual tone:

* Dark fantasy
* Celestial light
* Shadow
* Fire
* Ancient conflict
* Mythological scale
* Divine tension

### Military Thriller Lane

Visual tone:

* Tactical
* Grounded
* Gritty
* Steel and shadow
* Command-room intensity
* Brotherhood
* Survival

The overall site should feel professional and cinematic, not cartoonish or cluttered.

## Accessibility Requirements

Follow basic accessibility best practices:

* Use semantic HTML
* Use proper heading hierarchy
* Use descriptive alt text
* Ensure color contrast is readable
* Make buttons and links keyboard accessible
* Use focus-visible states
* Do not rely on color alone to communicate meaning
* Ensure embedded videos have meaningful labels or surrounding context

## SEO Requirements

Each major page should have:

* Unique title
* Unique meta description
* Open Graph title
* Open Graph description
* Clean slug
* One clear H1
* Logical headings
* Internal links
* Descriptive image alt text
* Schema where appropriate

Target search themes include:

```text
Eric Deloach author
Eric DeLoach books
Eric Deloach Rage of Angels
Rage of Angels book series
Ascension The Path to Polaris
Sins of the Father Eric Deloach
In Harm’s Way Eric Deloach
dark fantasy author
mythological fantasy books
celestial fantasy novels
Anunnaki fantasy book
military action thriller books
Navy SEAL action novel
```

## Schema Requirements

Implement structured data where appropriate:

```text
Person
Book
WebSite
BreadcrumbList
FAQPage
VideoObject
```

Do not include schema facts that are not verified.

Book schema must match approved metadata.

## Component Guidance

Use reusable components where practical.

Recommended components:

```text
Header
Footer
HeroSection
BookCard
BookGrid
BookDetails
RetailButtons
VideoEmbed
CTASection
AuthorBio
GenreLaneCard
SeriesPath
FAQSection
Breadcrumbs
SocialLinks
NewsletterCTA
```

Keep components clean, readable, and easy to update.

## Data Organization

When practical, keep reusable book, retailer, social, and media data in structured files.

Recommended data files:

```text
src/data/books.ts
src/data/retailers.ts
src/data/socialLinks.ts
src/data/videos.ts
src/data/navigation.ts
src/data/site.ts
```

Do not duplicate the same book facts across many files unless unavoidable.

## Code Quality Rules

Follow these rules:

* Keep code readable
* Use TypeScript types where helpful
* Avoid overengineering
* Avoid unnecessary dependencies
* Avoid dead code
* Avoid unused components
* Keep CSS organized
* Make mobile layouts first-class
* Test static export before final deployment

## Static Export Rules

The Next.js build must remain compatible with static export.

Do not add server-only features unless explicitly approved.

Avoid:

* Server actions
* Dynamic server routes that cannot export statically
* Runtime-only APIs
* Authentication flows
* Database dependencies
* Image optimization settings that break static export

If using Next.js image handling, ensure it is compatible with Cloudflare Pages static export.

## Cloudflare Pages Rules

Deployment target:

```text
Cloudflare Pages
```

Expected output:

```text
out
```

Do not change static export settings without approval.

## Commit Rules

Use clear commit messages.

Good examples:

```text
Add author website foundation docs
Create homepage content structure
Add book page data and components
Configure Next.js static export
Build Rage of Angels book page
Build In Harm’s Way book page
```

Avoid vague commits such as:

```text
updates
fix stuff
changes
final
```

## Final QA Checklist

Before final delivery, confirm:

* Site builds successfully
* `/out` folder is generated
* No broken internal links
* No broken visible retailer links
* No placeholder text appears live
* No fake facts were added
* Approved content was not rewritten
* Pages are responsive
* Metadata exists
* Schema is valid
* Images have alt text
* YouTube embeds are responsive
* Cloudflare Pages settings are documented

## Most Important Instruction

Build the site from the approved content and project docs.

Do not invent.

Do not rewrite locked content.

Do not change the author’s positioning, book facts, release metadata, retailer claims, character details, or approved page architecture without explicit user approval.
