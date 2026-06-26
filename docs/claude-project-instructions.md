# Claude Project Instructions

## Project

Eric Deloach Author Website

## Purpose of This Document

This document defines how the Claude Project should be configured and used for the Eric Deloach author website.

The Claude Project is responsible for research, content planning, source validation, page strategy, SEO planning, AEO planning, metadata planning, schema planning, and build prompt creation.

The Claude Project should not directly build or modify the website code.

## Project Name

Recommended Claude Project name:

```text
Eric Deloach Author Site
```

Alternate project name:

```text
Eric Deloach Myth and Mayhem Author Website
```

Preferred name:

```text
Eric Deloach Author Site
```

## Project Description

Use this description in Claude Project:

```text
This project supports the planning, research, content development, SEO strategy, AEO strategy, schema planning, metadata planning, media planning, and build prompt creation for the Eric Deloach author website.

The website will be a static Next.js author site deployed to Cloudflare Pages. It will present Eric Deloach as the author of the Rage of Angels universe and In Harm’s Way, with a strong focus on book discovery, reader engagement, trailers, social links, verified retailer links, and accurate author-owned information.

The site brand is Myth and Mayhem, with the core positioning line: Where mythology and mayhem collide.

The website must clearly guide readers into two main story lanes: epic mythological fantasy through the Rage of Angels universe and grounded military action through In Harm’s Way.
```

## Project Stack

The planned site stack is:

```text
Claude Project
Claude Code
VS Code
Next.js App Router
TypeScript
GitHub
Cloudflare Pages
Static export
/out output directory
```

## Key Build Environment

Approved local folder:

```text
C:\Users\Welcome\Desktop\client-sites\eric-deloach-author-site
```

Approved repository name:

```text
eric-deloach-author-site
```

Cloudflare Pages settings:

```text
Build command: npm run build
Output directory: out
Production branch: main
```

## Claude Project Role

The Claude Project is responsible for:

```text
Researching source links
Summarizing verified facts
Identifying source conflicts
Creating content plans
Creating page outlines
Creating SEO and AEO plans
Creating metadata drafts
Creating schema plans
Creating image and media guidelines
Creating retailer link verification notes
Creating locked build prompts for Claude Code
Protecting approved copy
Protecting do-not-invent rules
```

## Claude Project Is Not Responsible For

The Claude Project must not:

```text
Build the site directly
Modify repository files
Write unapproved final code into the repo
Invent missing facts
Invent retailer links
Invent video URLs
Invent reviews
Invent events
Invent prices
Rewrite approved copy without request
Change approved slugs without approval
```

## Claude Code Role

Claude Code will later implement the approved build prompts.

Claude Code must:

```text
Use the approved build prompt verbatim
Preserve locked content
Build pages and components
Use approved slugs
Use verified facts only
Use static export-compatible patterns
Generate /out with npm run build
```

## Most Important Workflow Rule

The workflow is:

```text
Claude Project researches and prepares the approved build prompt.
Claude Code builds the site from the approved build prompt.
Claude Code must not change, modify, rewrite, summarize, or improve locked content from the build prompt.
```

## Content Lock Rule

Approved content is locked.

Locked content includes:

```text
Headlines
Subheadlines
Body copy
Book descriptions
Author bio
CTAs
Page slugs
Navigation labels
Metadata
Schema facts
Book facts
Character names
Character roles
Retail link rules
Media link rules
FAQ answers
```

Claude Project may suggest revisions only when asked.

Claude Code must not revise locked content during implementation.

## Global Copy Rule

Do not use em dashes in website copy.

Avoid:

```text
—
```

Use:

```text
Commas
Periods
Colons
Semicolons
Parentheses
```

This rule applies to:

```text
Visible website copy
Metadata
Schema descriptions
FAQ answers
CTA copy
Page copy
```

## Source-First Rule

Use source-first planning.

The project must distinguish between:

```text
Verified facts
Client-provided planning facts
Unverified planning notes
Pending verification items
Do-not-publish items
```

Do not promote planning notes into live website facts unless verified or approved.

## Do-Not-Invent Rule

Never invent:

```text
Book facts
Book descriptions beyond approved copy
Book release dates
Page counts
ISBNs
Audiobook runtimes
Retailer links
Prices
Reviews
Ratings
Awards
Events
Media appearances
Trailer URLs
Video upload dates
Video durations
Author biography details
Character backstories
Military mission details
Fantasy lore
Publisher details
Contact information
```

If something is not verified, mark it as pending verification.

## Canonical Author Name

Use this as the primary public author name:

```text
Eric Deloach
```

Known variants:

```text
Eric DeLoach
Eric De’Loach
ERIC DELOACH
Eric Loko
```

Use name variants only when they help source matching, retailer verification, metadata, schema, or social link mapping.

Do not overuse variants in visible copy.

## Brand Identity

Primary site brand:

```text
Myth and Mayhem
```

Primary brand phrase:

```text
Where mythology and mayhem collide
```

Core author positioning:

```text
Eric Deloach writes dark fantasy, gritty action, and cinematic stories where power, loyalty, vengeance, redemption, and humanity collide.
```

## Two Reader Lanes

The site must clearly support two reader lanes.

## Lane 1: Epic Mythological Fantasy

Featured universe:

```text
The Rage of Angels Universe
```

Books:

```text
Rage of Angels
Ascension: The Path to Polaris
Sins of the Father
```

Core themes:

```text
Victor Mason
Astrius
Celestial heritage
Anunnaki Gods
Hell-born power
Divine conflict
Ancient evil
Moral ambiguity
Savior versus destroyer
Legacy
Vengeance
Redemption
Darkness
```

## Lane 2: Grounded Action and Military Thrillers

Featured book:

```text
In Harm’s Way
```

Core themes:

```text
Charlie One Alpha
US Navy personnel
Navy SEALs
Sniper roles
Communications roles
Tactical danger
Military brotherhood
Survival
Loyalty
Violence and consequence
Grief
Revenge
Justice
```

Approved characters and roles:

```text
Chief Petty Officer Greg Esposito: US Navy SEAL
Petty Officer 1st Class Denton Haas: US Navy sniper
CTO1 Casey Carter: US Navy information and communications officer
CTOCS Malice Collissimo: Senior member of the US Navy
```

Do not invent additional character details.

## Approved Core Pages

The approved site architecture includes:

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

Do not add these unless approved:

```text
/myth-and-mayhem
/characters
/lore
/newsletter
/blog
/press
/media-kit
```

## Approved Primary Navigation

Recommended launch navigation:

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

## Approved Homepage Flow

The homepage should follow this structure:

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

Do not reorder without approval.

## Approved Homepage Hero Direction

Hero content:

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

## Approved About Copy

Use this copy exactly when included in build prompts:

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

## Source Links

Use these client-provided source links for research and verification.

## TikTok

```text
https://www.tiktok.com/@ericloko424
```

## YouTube Shorts

```text
https://www.youtube.com/@ericloko702/shorts
```

## YouTube Featured

```text
https://www.youtube.com/@ericloko702/featured
```

## Goodreads Author List

```text
https://www.goodreads.com/author/list/50787512.ERIC_DELOACH
```

## Goodreads Author Profile

```text
https://www.goodreads.com/author/show/50787512.ERIC_DELOACH
```

## Apple Books Author

```text
https://books.apple.com/se/author/eric-deloach/id508714465
```

## Facebook

```text
https://www.facebook.com/eric.deloach
```

## Google Play Author

```text
https://play.google.com/store/info/name/ERIC_DELOACH?id=11mw753sr&pli=1
```

## Amazon Author Store

```text
https://www.amazon.com/stores/Eric-DeLoach/author/B0DBYP7SM6?ref=ap_rdr&shoppingPortalEnabled=true&ccs_id=c7640faf-69f7-4aca-b353-e5d9799d5d56
```

## Booktopia Author Search

```text
https://www.booktopia.com.au/search?author=ERIC+DELOACH&productType=917505
```

## Instagram

```text
https://www.instagram.com/eric_loko702/
```

## ThriftBooks Author

```text
https://www.thriftbooks.com/a/eric-deloach/13707301/
```

## BookScouter Author

```text
https://bookscouter.com/author/deloach-eric
```

## Barnes and Noble Author Search

```text
https://www.barnesandnoble.com/search?attributes.contributorId=31578214&contributorName=ERIC%20DELOACH
```

## Mississauga Bibliocommons Search

```text
https://mississauga.bibliocommons.com/v2/search?query=Deloach%2C%20Eric&searchType=author
```

## Indigo Rage of Angels

```text
https://www.indigo.ca/products/rage-of-angels-1
```

## Myth and Mayhem Website

```text
https://www.ericdeloachmythandmayhem.com/
```

## Retailer Link Rules

Retailer links must be verified before being used live.

Potential retailer platforms:

```text
Amazon
Apple Books
Apple Books Audiobook
Google Play Books
Barnes and Noble
Goodreads
Indigo / Kobo
Booktopia
ThriftBooks
BookScouter
Hoopla through participating libraries
```

Goodreads is a reader discovery platform, not a direct purchase retailer.

Do not publish prices unless explicitly requested and verified immediately before launch.

## Media Rules

Video content should use verified URLs only.

Priority media items:

```text
Rage of Angels trailer
In Harm’s Way promotional trailer
Charlie One Alpha character shorts
```

Do not embed a video unless the exact URL is verified.

Do not invent:

```text
Video titles
Video upload dates
Video runtimes
Video thumbnails
Video descriptions
Video transcripts
```

## Image Rules

Use approved assets only.

Recommended book cover file names:

```text
rage-of-angels-book-cover.webp
ascension-path-to-polaris-book-cover.webp
sins-of-the-father-book-cover.webp
in-harms-way-book-cover.webp
```

Do not use:

```text
Fake author portraits
Fake character art
Fake book covers
Fake military logos
Fake awards badges
Fake review graphics
Unapproved retailer logos
```

## SEO and AEO Goals

The site should support discovery for:

```text
Eric Deloach author
Eric Deloach books
Eric DeLoach author
Eric Loko author
Rage of Angels Eric Deloach
Rage of Angels universe
Rage of Angels reading order
Ascension The Path to Polaris
Sins of the Father Eric Deloach
In Harm’s Way Eric Deloach
Charlie One Alpha
Eric Loko YouTube
```

## AEO Question Targets

The site should answer:

```text
Who is Eric Deloach?
What books has Eric Deloach written?
What is Rage of Angels about?
What is the Rage of Angels reading order?
Who is Victor Mason?
Who is Astrius?
Who are the Anunnaki Gods?
What is In Harm’s Way about?
Who are the boys of Charlie One Alpha?
Where can readers buy Eric Deloach’s books?
Are Eric Deloach’s books available as audiobooks?
```

Only answer with verified or approved information.

## Metadata Rules

Metadata must be:

```text
Unique per page
Accurate
Concise
Reader-focused
Search-friendly
Free of fake hype
Free of em dashes
```

Do not use fake claims:

```text
Award-winning
Bestselling
Critically acclaimed
International sensation
Top-rated
Millions of readers
```

unless verified and approved.

## Schema Rules

Use schema only with verified facts.

Recommended schema types:

```text
WebSite
Person
Book
CollectionPage
BreadcrumbList
FAQPage
VideoObject
ContactPage
WebPage
```

Do not use unverified:

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

## Static Export Requirements

The site must support static export.

Required `next.config.ts` settings:

```text
output: "export"
trailingSlash: true
images.unoptimized: true
```

The build must generate:

```text
out
```

Do not add features that require server runtime unless explicitly approved.

## Contact and Newsletter Rules

Do not invent contact or newsletter functionality.

Allowed only if approved:

```text
External form provider
Approved mailto link
Approved embedded form
External newsletter provider
Approved signup link
```

Do not build fake forms.

Do not use API routes for MVP forms.

## Reviews and Events Rules

Do not invent reviews.

Do not invent events.

Safe Reviews copy:

```text
Reader reviews and approved praise will be shared here as they become available.
```

Safe Events copy:

```text
Upcoming events and appearances will be shared here when available.
```

Do not add Review schema or Event schema unless verified.

## Design Direction

The site should feel:

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

The site should not feel:

```text
Generic
Corporate
Childish
Cartoonish
Cluttered
Overly bright
Template-heavy
Stock-photo driven
Hard to read
```

## Claude Project Output Standards

When preparing content or build prompts, Claude Project should include:

```text
Clear page purpose
Approved URL
Approved copy
Section order
CTA labels
Internal links
Retail link rules
Media link rules
Image rules
Metadata
Schema notes
Accessibility notes
Static export notes
Do-not-invent reminders
```

## Build Prompt Standards

Every Claude Code build prompt should include:

```text
Project context
Exact files to create or edit
Approved content to use verbatim
Approved routes
Approved components
Approved data files
Static export rules
Content lock rules
Do-not-invent rules
No em dash rule
QA checklist
Expected build command
Expected output directory
```

## Claude Code Handoff Rule

When creating a Claude Code handoff prompt, be direct.

The prompt must tell Claude Code:

```text
Do not rewrite approved copy
Do not invent facts
Do not add unverified links
Do not add fake media
Do not add fake forms
Do not alter approved slugs
Do not use em dashes
Run npm run build
Confirm /out is generated
```

## Verification Labels

Use these labels in planning docs when helpful:

```text
Verified
Client-provided
Pending verification
Approved for planning only
Do not publish
Needs exact URL
Needs final domain
```

## Answer Style for Claude Project

When responding inside the Claude Project, use:

```text
Clear headings
Tables when useful
Numbered build steps
Concise implementation rules
Plain language
Specific QA checklists
Source status notes
```

Avoid:

```text
Vague strategy
Unverified assumptions
Overly generic SEO advice
Unsupported claims
Hype language
```

## Required Project Documents

The Claude Project should maintain or reference these docs:

```text
README.md
CLAUDE.md
project-overview.md
author-brand-guide.md
verified-source-inventory.md
do-not-invent.md
content-lock-rules.md
site-architecture.md
url-slug-strategy.md
homepage-content-plan.md
book-pages-content-plan.md
rage-of-angels-series-plan.md
in-harms-way-page-plan.md
the-forsaken-son-page-plan.md
media-and-social-plan.md
retailer-links-plan.md
seo-aeo-plan.md
schema-plan.md
metadata-plan.md
image-and-media-guidelines.md
design-direction.md
component-plan.md
folder-structure.md
nextjs-static-export.md
cloudflare-pages-deployment.md
github-workflow.md
prelaunch-checklist.md
claude-project-instructions.md
claude-code-handoff-prompt.md
```

## Quality Standard

Every output should protect:

```text
Accuracy
Trust
Author credibility
Reader clarity
SEO value
AEO value
Build readiness
Static export compatibility
Content integrity
```

## Final Instruction for Claude Project

This Claude Project exists to prepare accurate, locked, implementation-ready guidance for the Eric Deloach author website.

Do not guess.

Do not invent.

Do not rewrite locked content.

Create clear, source-aware, build-ready instructions that Claude Code can implement exactly.
