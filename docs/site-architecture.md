# Site Architecture

## Project

Eric Deloach Author Website

## Purpose of This Document

This document defines the website architecture for the Eric Deloach author website.

It establishes the core pages, navigation structure, homepage flow, book page hierarchy, series structure, media strategy, conversion paths, and internal linking priorities.

Claude Code must follow this architecture unless the user explicitly approves a change.

## Primary Website Goal

The website must help readers quickly understand:

1. Who Eric Deloach is
2. What genres he writes
3. Which book or series they should start with
4. How the Rage of Angels universe is structured
5. How In Harm’s Way fits into the catalog
6. Where to watch trailers and shorts
7. Where to buy or listen to each book
8. How to follow or contact Eric

## Core Site Strategy

The site should be structured around two primary reader lanes.

## Lane 1: Epic Mythological Fantasy

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

Reader path:

```text
Homepage → Rage of Angels Universe → Rage of Angels → Ascension → Sins of the Father → Retail Links
```

## Lane 2: Grounded Action and Military Thrillers

Featured book:

```text
In Harm’s Way
```

Reader path:

```text
Homepage → In Harm’s Way → Charlie One Alpha → Trailer and Shorts → Retail Links
```

## Approved Core Pages

The initial website should include the following core pages:

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

## Optional Future Pages

The following pages may be added later if approved:

```text
/myth-and-mayhem
/characters
/lore
/newsletter
/blog
/press
/media-kit
```

Do not build optional pages unless they are included in the approved build scope.

## Primary Navigation

Recommended primary navigation:

```text
Home
Books
Rage of Angels
Media
About
Contact
```

## Expanded Navigation Option

If the design supports dropdowns, use this structure:

```text
Home

Books
- All Books
- Rage of Angels
- Ascension: The Path to Polaris
- Sins of the Father
- In Harm’s Way

Series
- Rage of Angels Universe

Media
- Trailers
- Shorts
- Social

About
Contact
```

## Recommended Final Navigation

Use the cleaner version for launch:

```text
Home
Books
Rage of Angels
Media
About
Contact
```

This keeps the site simple while still allowing readers to reach the most important content quickly.

## Primary CTA in Header

Recommended header CTA:

```text
Explore the Books
```

Alternate header CTAs:

```text
Start the Series
Watch Trailers
```

Preferred launch CTA:

```text
Explore the Books
```

## Footer Navigation

Recommended footer groups:

## Books

```text
All Books
Rage of Angels
Ascension: The Path to Polaris
Sins of the Father
In Harm’s Way
```

## Explore

```text
Rage of Angels Universe
Media
Reviews
Events
About Eric
Contact
```

## Follow

```text
Goodreads
YouTube
TikTok
Instagram
Facebook
Myth and Mayhem
```

## Retail

```text
Amazon
Apple Books
Google Play Books
Barnes & Noble
Goodreads
```

Only include retailer links that are verified and approved.

## Homepage Architecture

The homepage should be the main reader gateway.

Approved homepage flow:

```text
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
```

Do not reorder the homepage flow unless explicitly approved.

## Homepage Section Details

## 1. Hero

Purpose:

Introduce Eric Deloach and immediately communicate the author brand.

Approved direction:

```text
Eric Deloach
Gods, Soldiers, Sinners, and Survivors
Dark fantasy, gritty action, and stories where mythology and mayhem collide.
```

Primary CTAs:

```text
Explore the Books
Start the Rage of Angels Series
Watch Book Trailers
```

## 2. Choose Your World

Purpose:

Let readers self-select between Eric’s two creative lanes.

Primary section headline:

```text
Two Worlds. One Relentless Imagination.
```

Supporting brand line:

```text
Where Mythology and Mayhem Collide
```

Fantasy card:

```text
Epic Mythological Fantasy
The Rage of Angels Universe
Enter the Rage of Angels Universe
```

Action card:

```text
Grounded Action and Military Thrillers
In Harm’s Way
Explore In Harm’s Way
```

## 3. Featured Books

Purpose:

Show the key catalog titles and create direct paths to individual book pages.

Featured books:

```text
Rage of Angels
Ascension: The Path to Polaris
Sins of the Father
In Harm’s Way
```

Recommended card details:

```text
Book cover
Title
Series or standalone label
Genre label
Short hook
Format note
Primary CTA
Retail CTA
```

## 4. Rage of Angels Universe

Purpose:

Introduce the fantasy universe and reading path.

Link to:

```text
/series/rage-of-angels
/books/rage-of-angels
/books/ascension-the-path-to-polaris
/books/sins-of-the-father
```

Primary CTA:

```text
Enter the Rage of Angels Universe
```

Secondary CTA:

```text
Start with Rage of Angels
```

## 5. In Harm’s Way

Purpose:

Introduce Eric’s grounded military action lane.

Link to:

```text
/books/in-harms-way
```

Primary CTA:

```text
Explore In Harm’s Way
```

Secondary CTA:

```text
Meet Charlie One Alpha
```

## 6. About Eric

Purpose:

Introduce Eric’s personal background, creative style, and author brand.

Section headline:

```text
The Mind Behind the Mayhem
```

Primary CTAs:

```text
Read the Blog
Follow on Goodreads
Watch on YouTube
```

Link to:

```text
/about
```

## 7. Book Trailers and YouTube Shorts

Purpose:

Use Eric’s video content to increase engagement and help readers understand each book visually.

Content may include:

```text
Rage of Angels trailer
In Harm’s Way trailer
Charlie One Alpha character shorts
Book promotional shorts
```

Link to:

```text
/media
```

Do not embed videos without exact verified URLs.

## 8. Join the Reader List

Purpose:

Capture reader interest and provide a path for future announcements.

Recommended CTA:

```text
Join the Reader List
```

Do not create a working signup form until a provider or workflow is approved.

If no provider is ready, use this as a planned section and do not publish a fake form.

## 9. Retail Links

Purpose:

Help readers quickly find Eric’s books on preferred platforms.

Possible retailer links:

```text
Amazon
Apple Books
Google Play Books
Barnes & Noble
Goodreads
Indigo / Kobo
Booktopia
ThriftBooks
Hoopla through participating libraries
```

Only show verified retailer links.

## 10. Footer

Purpose:

Provide persistent navigation, social links, retailer links, and copyright information.

Footer should reinforce:

```text
Eric Deloach
Myth and Mayhem
Books
Media
Follow
Contact
```

## Page: Home

Slug:

```text
/
```

Primary purpose:

Introduce the author brand, guide readers into the two main genre lanes, promote featured books, and drive visitors toward book pages, videos, and retailer links.

Primary CTAs:

```text
Explore the Books
Start the Rage of Angels Series
Watch Book Trailers
```

Internal links:

```text
/books
/series/rage-of-angels
/books/rage-of-angels
/books/in-harms-way
/about
/media
/contact
```

## Page: About

Slug:

```text
/about
```

Primary purpose:

Tell Eric’s author story, explain his creative philosophy, and connect his genre lanes through a unified author brand.

Primary content sections:

```text
Hero
Short Bio
The Mind Behind the Mayhem
Creative Origins
Writing Philosophy
Two Story Worlds
Social Links
CTA to Books
```

Primary CTAs:

```text
Explore the Books
Read the Blog
Follow on Goodreads
Watch on YouTube
```

Internal links:

```text
/books
/series/rage-of-angels
/books/in-harms-way
/media
/contact
```

## Page: Books

Slug:

```text
/books
```

Primary purpose:

Serve as the full book library and catalog hub.

Primary content sections:

```text
Hero
Featured Reading Paths
Rage of Angels Universe
Standalone Action and Military Thriller
All Books Grid
Retailer Note
FAQ
```

Book cards:

```text
Rage of Angels
Ascension: The Path to Polaris
Sins of the Father
In Harm’s Way
```

Primary CTAs:

```text
View Rage of Angels
View Ascension
View Sins of the Father
View In Harm’s Way
Start the Series
```

Internal links:

```text
/books/rage-of-angels
/books/ascension-the-path-to-polaris
/books/sins-of-the-father
/books/in-harms-way
/series/rage-of-angels
```

## Page: Rage of Angels

Slug:

```text
/books/rage-of-angels
```

Primary purpose:

Introduce Rage of Angels as the entry point into Eric Deloach’s epic mythological fantasy universe.

Primary content sections:

```text
Hero
Book Details
Story Hooks
Watch the Trailer
Series Path
Reader Fit
Retail Links
FAQ
```

Primary CTAs:

```text
Buy the Book
Listen to the Audiobook
Start the Rage of Angels Series
Watch the Trailer
```

Internal links:

```text
/series/rage-of-angels
/books/ascension-the-path-to-polaris
/books/sins-of-the-father
/media
/books
```

## Page: Ascension: The Path to Polaris

Slug:

```text
/books/ascension-the-path-to-polaris
```

Primary purpose:

Position Ascension as the sequel that expands Astrius’s journey, redemption arc, and cosmic conflict.

Primary content sections:

```text
Hero
Book Details
Story Overview
Continue the Saga
Connection to Rage of Angels
Reader Fit
Retail Links
FAQ
```

Primary CTAs:

```text
Buy the Book
Continue the Saga
Explore the Rage of Angels Universe
```

Internal links:

```text
/books/rage-of-angels
/books/sins-of-the-father
/series/rage-of-angels
/books
```

## Page: Sins of the Father

Slug:

```text
/books/sins-of-the-father
```

Primary purpose:

Position Sins of the Father as a deeper expansion of the Rage of Angels universe.

Primary content sections:

```text
Hero
Book Details
Story Overview
Expanded Lore
Connection to Astrius
Reader Fit
Retail Links
FAQ
```

Primary CTAs:

```text
Buy the Book
Explore the Universe
Start with Rage of Angels
```

Internal links:

```text
/books/rage-of-angels
/books/ascension-the-path-to-polaris
/series/rage-of-angels
/books
```

## Page: In Harm’s Way

Slug:

```text
/books/in-harms-way
```

Primary purpose:

Introduce In Harm’s Way as Eric Deloach’s grounded action and military thriller lane.

Primary content sections:

```text
Hero
Book Details
The Boys of Charlie One Alpha
Character Feature Section
Themes
Watch the Trailer
Watch the Character Shorts
Reader Fit
Retail Links
FAQ
```

Primary CTAs:

```text
Buy the Book
Watch the Trailer
Meet Charlie One Alpha
Listen to the Audiobook
```

Internal links:

```text
/books
/media
/about
/contact
```

## Page: Rage of Angels Universe

Slug:

```text
/series/rage-of-angels
```

Primary purpose:

Serve as the series hub for the Rage of Angels universe.

Primary content sections:

```text
Hero
Series Overview
The Origin
Victor Mason and Astrius
The Central Conflict
Moral Ambiguity
Reading Order
Book Trailer
The World and Lore
Retail Links
FAQ
```

Primary CTAs:

```text
Start with Rage of Angels
Continue to Ascension
Discover Sins of the Father
Watch the Trailer
```

Internal links:

```text
/books/rage-of-angels
/books/ascension-the-path-to-polaris
/books/sins-of-the-father
/media
/books
```

## Page: Media

Slug:

```text
/media
```

Primary purpose:

Collect trailers, YouTube Shorts, character videos, and social media pathways.

Primary content sections:

```text
Hero
Featured Book Trailers
Rage of Angels Trailer
In Harm’s Way Trailer
Charlie One Alpha Shorts
YouTube Channel CTA
Social Links
```

Primary CTAs:

```text
Watch on YouTube
View YouTube Shorts
Explore the Books
```

Do not embed unverified video URLs.

## Page: Reviews

Slug:

```text
/reviews
```

Primary purpose:

Provide a place for approved reader praise, Goodreads links, or review pathways.

If no approved reviews are available, keep this page simple and avoid fake testimonials.

Safe content sections:

```text
Hero
Follow on Goodreads
Review Links
Reader Note
CTA to Books
```

Safe copy:

```text
Reader reviews and approved praise will be shared here as they become available.
```

Do not invent reviews.

## Page: Events

Slug:

```text
/events
```

Primary purpose:

Provide a future home for book signings, readings, appearances, and launch events.

If no events are verified, use neutral copy.

Safe content sections:

```text
Hero
Upcoming Events
Past Events, if verified
Book Signing Notes, if verified
Contact for Events
```

Safe copy:

```text
Upcoming events and appearances will be shared here when available.
```

Do not invent events.

## Page: Contact

Slug:

```text
/contact
```

Primary purpose:

Provide a clear way for readers, media, event hosts, or collaborators to contact Eric.

Primary content sections:

```text
Hero
Contact Form or Contact Instructions
Media and Event Inquiries
Social Links
Book Links
```

Do not publish personal contact information unless approved.

If no contact workflow is approved, use a planned placeholder in project docs only, not visible live content.

## Internal Linking Strategy

The site should use strong internal linking to guide readers.

## Homepage Internal Links

```text
Home → Books
Home → Rage of Angels Universe
Home → Rage of Angels
Home → In Harm’s Way
Home → About
Home → Media
```

## Book Page Internal Links

Each book page should link to:

```text
/books
Relevant series page
Related books
/media
/about
```

## Series Page Internal Links

The Rage of Angels series page should link to:

```text
/books/rage-of-angels
/books/ascension-the-path-to-polaris
/books/sins-of-the-father
/media
/books
```

## Media Page Internal Links

The media page should link to:

```text
/books
/books/rage-of-angels
/books/in-harms-way
/series/rage-of-angels
```

## Conversion Paths

## Fantasy Reader Path

```text
Homepage
→ Choose Your World
→ Rage of Angels Universe
→ Rage of Angels book page
→ Trailer
→ Retail buttons
```

## Military Thriller Reader Path

```text
Homepage
→ Choose Your World
→ In Harm’s Way
→ Meet Charlie One Alpha
→ Trailer or Shorts
→ Retail buttons
```

## Author Discovery Path

```text
Homepage
→ About Eric
→ Books
→ Media
→ Social links
```

## Retail Buyer Path

```text
Homepage
→ Featured Books
→ Individual book page
→ Retail buttons
```

## SEO Page Hierarchy

Recommended search hierarchy:

```text
Home:
Eric Deloach author

Books:
Eric Deloach books

Rage of Angels book:
Rage of Angels Eric Deloach

Rage of Angels series:
Rage of Angels series

Ascension page:
Ascension The Path to Polaris

Sins of the Father page:
Sins of the Father Eric Deloach

In Harm’s Way page:
In Harm’s Way Eric Deloach

About page:
About Eric Deloach

Media page:
Eric Loko YouTube trailers
```

## Schema Mapping

Recommended schema by page:

| Page                  | Schema                                                      |
| --------------------- | ----------------------------------------------------------- |
| Home                  | WebSite, Person                                             |
| About                 | Person, BreadcrumbList                                      |
| Books                 | CollectionPage, BreadcrumbList                              |
| Individual book pages | Book, BreadcrumbList, FAQPage when FAQs exist               |
| Rage of Angels series | CollectionPage, BreadcrumbList, FAQPage                     |
| Media                 | CollectionPage, VideoObject when verified video data exists |
| Reviews               | WebPage, BreadcrumbList                                     |
| Events                | WebPage, BreadcrumbList                                     |
| Contact               | ContactPage, BreadcrumbList                                 |

Do not include schema facts that are not verified.

## Component Architecture

Recommended reusable components:

```text
Header
Footer
HeroSection
GenreLaneCard
BookCard
BookGrid
BookDetails
RetailButtons
SeriesPath
VideoEmbed
VideoGrid
AuthorBio
CTASection
FAQSection
Breadcrumbs
SocialLinks
NewsletterCTA
SectionHeader
```

## Data Architecture

Recommended data files:

```text
src/data/site.ts
src/data/navigation.ts
src/data/books.ts
src/data/retailers.ts
src/data/socialLinks.ts
src/data/videos.ts
src/data/faqs.ts
```

Book facts should live in a central data file to avoid inconsistent metadata.

## Suggested App Folder Structure

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

## Content Priority

Build pages in this order:

```text
1. Home
2. Books
3. Rage of Angels
4. In Harm’s Way
5. Rage of Angels Universe
6. About
7. Ascension: The Path to Polaris
8. Sins of the Father
9. Media
10. Contact
11. Reviews
12. Events
```

## MVP Launch Scope

Recommended MVP pages:

```text
/
 /about
 /books
 /books/rage-of-angels
 /books/in-harms-way
 /series/rage-of-angels
 /media
 /contact
```

Recommended phase two pages:

```text
/books/ascension-the-path-to-polaris
/books/sins-of-the-father
/reviews
/events
```

If the user wants the full site built at once, build all core pages.

## Architecture Rules

Claude Code must:

```text
Use approved slugs
Preserve approved homepage flow
Preserve approved page hierarchy
Use verified book facts only
Use data-driven components where practical
Avoid duplicate content
Avoid fake retailer links
Avoid fake video embeds
Keep static export compatibility
Generate the /out folder on build
```

Claude Code must not:

```text
Invent pages
Change slugs
Rewrite approved copy
Invent reviews
Invent events
Invent retailer links
Add fake video URLs
Add unsupported schema facts
Create server-only routes
Break Cloudflare Pages static export
```

## Final Architecture QA Checklist

Before launch, confirm:

```text
All approved pages exist
Navigation links work
Footer links work
Book pages link to related books
Series page links to all Rage of Angels titles
Media page links to book pages
Retail buttons use verified links only
No placeholder pages are visible
No duplicate slugs exist
No dead internal links exist
No optional future pages are linked unless built
Schema matches page purpose
Static export still works
/out is generated
```

## Most Important Instruction

The website architecture must make it easy for readers to choose their path:

```text
Epic mythological fantasy through the Rage of Angels universe
Grounded action and military thrillers through In Harm’s Way
```

Every major page should support one or both of these reader journeys.

## Addition: Early Standalone Work

The catalog includes an early standalone work in addition to the two primary lanes.

Add the following page under Book Pages:

```text
/books/the-forsaken-son-trials-of-grace
```

Categorize it as:

```text
Early Standalone Work
```

Do not place it under:

```text
Rage of Angels Universe
In Harm’s Way
```

Updated Books hub description:

```text
The Books hub should include the primary Rage of Angels titles, In Harm’s Way, and early standalone work such as The Forsaken Son: Trials of Grace.
```

Do not add this page to primary navigation. See `the-forsaken-son-page-plan.md` for the full plan.
