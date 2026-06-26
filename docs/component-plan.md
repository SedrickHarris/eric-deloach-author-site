# Component Plan

## Project

Eric Deloach Author Website

## Purpose of This Document

This document defines the recommended component architecture for the Eric Deloach author website.

The goal is to build the site with reusable, clean, maintainable components that support the homepage, book pages, series hub, media page, about page, reviews page, events page, and contact page.

Claude Code must follow this component plan unless the user explicitly approves a different approach.

## Primary Component Goal

Components should help the site stay:

```text
Consistent
Reusable
Responsive
Accessible
Static-export friendly
Easy to maintain
Easy to expand
Book-focused
Reader-focused
```

## Component Strategy

The website should be built with reusable sections and data-driven components wherever practical.

This is especially important for:

```text
Book cards
Retail buttons
Video cards
Social links
FAQ sections
Character cards
CTA sections
Breadcrumbs
Metadata helpers
Schema helpers
```

Do not hard-code the same book facts, retailer links, or social links across multiple files.

## Recommended Component Folder Structure

```text
src/components/
src/components/layout/
src/components/sections/
src/components/cards/
src/components/media/
src/components/navigation/
src/components/seo/
src/components/ui/
```

## Recommended Data Folder Structure

```text
src/data/
src/data/site.ts
src/data/navigation.ts
src/data/books.ts
src/data/retailers.ts
src/data/socialLinks.ts
src/data/videos.ts
src/data/faqs.ts
```

## Recommended Utility Folder Structure

```text
src/lib/
src/lib/metadata.ts
src/lib/schema.ts
src/lib/urls.ts
src/lib/utils.ts
```

## Layout Components

## SiteLayout

Recommended path:

```text
src/components/layout/SiteLayout.tsx
```

Purpose:

Wrap all pages with shared layout.

Responsibilities:

```text
Render Header
Render main content
Render Footer
Support consistent page structure
Preserve accessibility landmarks
```

Rules:

```text
Use semantic main element
Do not duplicate header or footer in page files
Do not add page-specific content inside SiteLayout
```

## Header

Recommended path:

```text
src/components/layout/Header.tsx
```

Purpose:

Provide primary navigation and the main site CTA.

Recommended navigation:

```text
Home
Books
Rage of Angels
Media
About
Contact
```

Primary CTA:

```text
Explore the Books
```

Header requirements:

```text
Responsive desktop navigation
Mobile menu
Accessible menu button
Clear focus states
Verified internal links only
No crowded navigation
```

Do not add optional pages to navigation unless built and approved.

## Footer

Recommended path:

```text
src/components/layout/Footer.tsx
```

Purpose:

Provide persistent navigation, book links, social links, retailer links, and brand reinforcement.

Footer groups:

```text
Books
Explore
Follow
Retail
```

Footer brand copy:

```text
Eric Deloach writes dark fantasy, gritty action, and cinematic stories where mythology and mayhem collide.
```

Footer requirements:

```text
Use verified links only
Do not show placeholder links
Keep layout readable on mobile
Use accessible link labels
```

## Container

Recommended path:

```text
src/components/layout/Container.tsx
```

Purpose:

Provide consistent max width and horizontal padding.

Recommended variants:

```text
default
wide
narrow
full
```

Use narrow containers for long text.

Use wide containers for hero, books grid, media grids, and series layouts.

## Section Components

## HeroSection

Recommended path:

```text
src/components/sections/HeroSection.tsx
```

Purpose:

Render page hero sections consistently.

Potential props:

```text
eyebrow
title
subtitle
body
primaryCta
secondaryCta
tertiaryCta
image
imageAlt
variant
```

Recommended variants:

```text
home
book
series
media
about
simple
```

Used on:

```text
Homepage
About page
Books page
Book pages
Series page
Media page
Reviews page
Events page
Contact page
```

Rules:

```text
Use one H1 per page
Do not render fake images
Do not render empty CTA buttons
Keep CTAs accessible on mobile
```

## SectionHeader

Recommended path:

```text
src/components/sections/SectionHeader.tsx
```

Purpose:

Render consistent section headings, eyebrow labels, and supporting copy.

Potential props:

```text
eyebrow
title
description
align
maxWidth
```

Used across most pages.

Rules:

```text
Use proper heading levels
Do not use headings only for styling
Keep section copy readable
```

## CTASection

Recommended path:

```text
src/components/sections/CTASection.tsx
```

Purpose:

Render final conversion sections.

Potential props:

```text
title
description
primaryCta
secondaryCta
variant
```

Recommended variants:

```text
fantasy
action
general
media
```

Used on:

```text
Homepage
Book pages
Series page
Media page
About page
Contact page
```

Rules:

```text
Only render verified links
Do not invent CTA copy
Do not use placeholder hrefs
```

## Homepage Components

## ChooseYourWorldSection

Recommended path:

```text
src/components/sections/ChooseYourWorldSection.tsx
```

Purpose:

Present the two main reader lanes.

Contains:

```text
Epic Mythological Fantasy card
Grounded Action and Military Thrillers card
```

Recommended internal component:

```text
GenreLaneCard
```

Rules:

```text
Fantasy lane appears first
Action lane appears second
Use approved copy verbatim
Use approved CTAs
Do not change the reader lane positioning
```

## FeaturedBooksSection

Recommended path:

```text
src/components/sections/FeaturedBooksSection.tsx
```

Purpose:

Show core catalog titles on the homepage.

Featured books:

```text
Rage of Angels
Ascension: The Path to Polaris
Sins of the Father
In Harm’s Way
```

Recommended internal component:

```text
BookCard
```

Rules:

```text
Pull book data from src/data/books.ts
Do not duplicate book facts manually
Do not render missing cover images
Do not render fake retailer links
```

## RageOfAngelsSection

Recommended path:

```text
src/components/sections/RageOfAngelsSection.tsx
```

Purpose:

Present the fantasy universe on the homepage.

Links to:

```text
/series/rage-of-angels
/books/rage-of-angels
/media
```

Rules:

```text
Use approved series copy
Preserve reading order
Do not invent lore
```

## InHarmsWaySection

Recommended path:

```text
src/components/sections/InHarmsWaySection.tsx
```

Purpose:

Present the grounded action lane on the homepage.

Links to:

```text
/books/in-harms-way
/media
/books
```

Rules:

```text
Use approved In Harm’s Way copy
Use approved Charlie One Alpha references only
Do not invent character details
Do not imply real military endorsement
```

## AuthorBioSection

Recommended path:

```text
src/components/sections/AuthorBioSection.tsx
```

Purpose:

Render the approved author bio section.

Headline:

```text
The Mind Behind the Mayhem
```

Approved CTAs:

```text
Read the Blog
Follow on Goodreads
Watch on YouTube
```

Rules:

```text
Use approved bio copy verbatim
Use verified author portrait only
Do not use fake author image
Use verified social links only
```

## MediaPreviewSection

Recommended path:

```text
src/components/sections/MediaPreviewSection.tsx
```

Purpose:

Show a concise homepage preview of trailers and Shorts.

Rules:

```text
Only show verified videos
Limit homepage embeds
Link to /media for more
Do not show placeholder video cards
```

## RetailLinksSection

Recommended path:

```text
src/components/sections/RetailLinksSection.tsx
```

Purpose:

Show verified retailer or platform links.

Potential use cases:

```text
Homepage platform links
Book-specific retailer links
Series page grouped retailer links
Footer retail links
```

Rules:

```text
Render only verified links
Do not render prices unless approved
Do not render missing URLs
Use accessible external link labels
```

## Card Components

## BookCard

Recommended path:

```text
src/components/cards/BookCard.tsx
```

Purpose:

Display a book in grids, featured sections, related book sections, and series reading order.

Potential props:

```text
title
slug
coverImage
coverAlt
seriesLabel
genreLabel
shortHook
primaryCta
secondaryCta
```

Rules:

```text
Use approved book data
Preserve book title spelling
Do not distort cover image
Do not render fake badges
Do not show fake review quotes
```

## GenreLaneCard

Recommended path:

```text
src/components/cards/GenreLaneCard.tsx
```

Purpose:

Display one of the two homepage reader lanes.

Potential props:

```text
eyebrow
title
description
body
cta
variant
```

Variants:

```text
fantasy
action
```

Rules:

```text
Fantasy variant should support Rage of Angels visual world
Action variant should support In Harm’s Way visual world
Do not mix the lanes
```

## CharacterCard

Recommended path:

```text
src/components/cards/CharacterCard.tsx
```

Purpose:

Display approved Charlie One Alpha character information.

Approved character cards:

```text
Chief Petty Officer Greg Esposito
Petty Officer 1st Class Denton Haas
CTO1 Casey Carter
CTOCS Malice Collissimo
```

Potential props:

```text
name
role
description
```

Rules:

```text
Use approved names and roles only
Do not invent backstories
Do not add unverified ranks
Do not add images unless approved
```

## VideoCard

Recommended path:

```text
src/components/cards/VideoCard.tsx
```

Purpose:

Display a verified video or link to a video.

Potential props:

```text
title
description
thumbnail
thumbnailAlt
url
embedUrl
relatedBook
duration
status
```

Rules:

```text
Render only verified videos
Do not show missing video cards
Do not invent duration
Do not invent upload date
```

## RetailButton

Recommended path:

```text
src/components/ui/RetailButton.tsx
```

Purpose:

Render a single retailer link.

Potential props:

```text
label
url
retailerName
format
ariaLabel
priority
```

Rules:

```text
Do not render if URL is missing
Use safe external link attributes
Use descriptive accessible labels
Do not show prices unless approved
```

## FAQItem

Recommended path:

```text
src/components/ui/FAQItem.tsx
```

Purpose:

Render one FAQ question and answer.

Potential props:

```text
question
answer
```

Rules:

```text
Use approved FAQ copy only
Do not add hidden FAQ text
Do not invent answers
```

## FAQSection

Recommended path:

```text
src/components/sections/FAQSection.tsx
```

Purpose:

Render FAQ groups and support FAQ schema alignment.

Potential props:

```text
title
description
items
```

Rules:

```text
Visible FAQs must match FAQ schema
Use approved content only
Do not render empty FAQ sections
```

## Media Components

## VideoEmbed

Recommended path:

```text
src/components/media/VideoEmbed.tsx
```

Purpose:

Render responsive embedded videos.

Potential props:

```text
title
embedUrl
source
aspectRatio
```

Rules:

```text
Use verified embed URLs only
Use descriptive iframe title
Do not autoplay
Keep responsive
Avoid layout shift
```

Do not render if `embedUrl` is missing.

## VideoGrid

Recommended path:

```text
src/components/media/VideoGrid.tsx
```

Purpose:

Render a collection of verified videos on the Media page.

Potential props:

```text
videos
category
layout
```

Rules:

```text
Filter only verified videos
Do not show placeholders
Separate trailers from Shorts where useful
```

## SocialLinks

Recommended path:

```text
src/components/navigation/SocialLinks.tsx
```

Purpose:

Render verified social links.

Potential props:

```text
links
variant
showLabels
```

Social platforms:

```text
YouTube
TikTok
Instagram
Facebook
Goodreads
Myth and Mayhem
```

Rules:

```text
Use verified URLs only
Use accessible labels
Do not render missing links
Do not add unverified social platforms
```

## Navigation Components

## MainNav

Recommended path:

```text
src/components/navigation/MainNav.tsx
```

Purpose:

Render desktop navigation.

Data source:

```text
src/data/navigation.ts
```

Rules:

```text
Use approved nav labels
Use approved slugs
Do not show optional pages unless built
```

## MobileNav

Recommended path:

```text
src/components/navigation/MobileNav.tsx
```

Purpose:

Render mobile navigation.

Requirements:

```text
Accessible menu button
Keyboard navigable
Clear close behavior
Readable links
No horizontal overflow
```

Rules:

```text
Use same links as desktop nav
Do not add extra unapproved pages
```

## Breadcrumbs

Recommended path:

```text
src/components/navigation/Breadcrumbs.tsx
```

Purpose:

Render visible breadcrumbs where appropriate.

Used on:

```text
About page
Books page
Book pages
Series page
Media page
Reviews page
Events page
Contact page
```

Rules:

```text
Match BreadcrumbList schema
Do not link to unbuilt routes
Use approved slugs only
```

## UI Components

## Button

Recommended path:

```text
src/components/ui/Button.tsx
```

Purpose:

Provide consistent button styling.

Variants:

```text
primary
secondary
ghost
outline
link
```

Rules:

```text
Use accessible labels
Support internal and external links
Use consistent hover and focus states
Do not render empty hrefs
```

## Card

Recommended path:

```text
src/components/ui/Card.tsx
```

Purpose:

Base wrapper for card designs.

Use for:

```text
Book cards
Genre lane cards
Character cards
Video cards
Retail cards
CTA cards
```

Rules:

```text
Keep style consistent
Do not overuse glow
Use readable contrast
```

## Badge

Recommended path:

```text
src/components/ui/Badge.tsx
```

Purpose:

Render genre labels, series labels, and format labels.

Allowed uses:

```text
Dark Fantasy
Military Action Drama
Rage of Angels Universe
Book 1
Book 2
Standalone
```

Rules:

```text
Use verified labels only
Do not create fake bestseller or award badges
```

## ExternalLink

Recommended path:

```text
src/components/ui/ExternalLink.tsx
```

Purpose:

Standardize external link behavior.

Requirements:

```text
target="_blank" when appropriate
rel="noopener noreferrer"
Accessible label support
```

Use for:

```text
Retailer links
Social links
Goodreads links
YouTube links
Blog links
```

## Data Components and Helpers

## Book Data

Recommended path:

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
readingOrder
genreLabels
shortHook
description
coverImage
coverAlt
formats
retailerIds
relatedBookIds
status
```

Rules:

```text
Use verified facts only
Keep pending facts marked internally
Do not render unverified details publicly
```

## Retailer Data

Recommended path:

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
Only render status: verified
```

## Video Data

Recommended path:

```text
src/data/videos.ts
```

Purpose:

Central source for verified video links.

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
Only render status: verified
```

## Social Link Data

Recommended path:

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

Public rendering rule:

```text
Only render verified or approved client-provided links
```

## FAQ Data

Recommended path:

```text
src/data/faqs.ts
```

Purpose:

Central source for FAQ content.

Recommended fields:

```text
pageId
question
answer
status
```

Rules:

```text
Visible FAQ and FAQ schema must match
Use approved content only
```

## SEO Components and Helpers

## JsonLd

Recommended path:

```text
src/components/seo/JsonLd.tsx
```

Purpose:

Render JSON-LD schema safely.

Potential props:

```text
data
```

Rules:

```text
Render valid JSON-LD
Do not render empty schema
Do not include unverified fields
```

## Metadata Helper

Recommended path:

```text
src/lib/metadata.ts
```

Purpose:

Generate consistent metadata.

Potential helper:

```text
createMetadata()
```

Inputs:

```text
title
description
path
ogTitle
ogDescription
ogImage
```

Rules:

```text
Use approved metadata
Use final domain when confirmed
Do not use placeholder domain at launch
```

## Schema Helper

Recommended path:

```text
src/lib/schema.ts
```

Purpose:

Generate schema from approved data.

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
Match visible content
Do not add offers, ratings, or reviews unless approved
```

## Page-Level Component Mapping

## Homepage

Recommended components:

```text
SiteLayout
HeroSection
ChooseYourWorldSection
FeaturedBooksSection
RageOfAngelsSection
InHarmsWaySection
AuthorBioSection
MediaPreviewSection
RetailLinksSection
CTASection
JsonLd
```

## About Page

Recommended components:

```text
SiteLayout
HeroSection
Breadcrumbs
AuthorBioSection
CTASection
SocialLinks
JsonLd
```

## Books Page

Recommended components:

```text
SiteLayout
HeroSection
Breadcrumbs
BookGrid
BookCard
SeriesPath
FAQSection
CTASection
JsonLd
```

## Rage of Angels Book Page

Recommended components:

```text
SiteLayout
HeroSection
Breadcrumbs
BookDetails
VideoEmbed
SeriesPath
RetailLinksSection
FAQSection
CTASection
JsonLd
```

## Ascension Book Page

Recommended components:

```text
SiteLayout
HeroSection
Breadcrumbs
BookDetails
SeriesPath
RetailLinksSection
FAQSection
CTASection
JsonLd
```

## Sins of the Father Book Page

Recommended components:

```text
SiteLayout
HeroSection
Breadcrumbs
BookDetails
SeriesPath
RetailLinksSection
FAQSection
CTASection
JsonLd
```

## In Harm’s Way Book Page

Recommended components:

```text
SiteLayout
HeroSection
Breadcrumbs
BookDetails
CharacterCard
CharacterGrid
VideoEmbed
VideoGrid
RetailLinksSection
FAQSection
CTASection
JsonLd
```

## Rage of Angels Series Page

Recommended components:

```text
SiteLayout
HeroSection
Breadcrumbs
SeriesPath
BookCard
BookGrid
VideoEmbed
RetailLinksSection
FAQSection
CTASection
JsonLd
```

## Media Page

Recommended components:

```text
SiteLayout
HeroSection
Breadcrumbs
VideoGrid
VideoCard
VideoEmbed
SocialLinks
CTASection
JsonLd
```

## Reviews Page

Recommended components:

```text
SiteLayout
HeroSection
Breadcrumbs
SocialLinks
BookGrid
CTASection
JsonLd
```

Do not create fake testimonial components unless reviews are approved.

## Events Page

Recommended components:

```text
SiteLayout
HeroSection
Breadcrumbs
CTASection
BookGrid
JsonLd
```

Do not create fake event cards unless events are verified.

## Contact Page

Recommended components:

```text
SiteLayout
HeroSection
Breadcrumbs
ContactSection
SocialLinks
CTASection
JsonLd
```

Do not publish personal contact information unless approved.

## Component Accessibility Requirements

All components must support:

```text
Semantic HTML
Keyboard navigation
Visible focus states
Descriptive link labels
Accessible image alt text
Accessible iframe titles
Readable contrast
Responsive touch targets
Reduced motion where motion is used
```

## Component Performance Requirements

Components should:

```text
Avoid unnecessary client-side JavaScript
Avoid heavy dependencies
Avoid loading unused images
Avoid excessive embeds on homepage
Use static data where possible
Support static export
```

Do not use client components unless interactivity requires them.

## Client Component Rules

Use client components only for:

```text
Mobile menu toggle
Interactive accordions if needed
FAQ accordion if implemented interactively
Video modal if approved
```

Do not turn the full site into client components.

Prefer static server components where possible.

## Static Export Rules

Components must work with:

```text
Next.js static export
Cloudflare Pages
/out output directory
```

Do not use:

```text
Server-only runtime APIs
Dynamic runtime fetching
Unconfigured image optimization
API routes required for page rendering
Middleware required for core functionality
```

unless explicitly approved and compatible.

## Styling Rules

Components should use the approved design direction.

Style requirements:

```text
Consistent spacing
Consistent typography
Consistent button styles
Consistent card styles
Dark cinematic palette
Responsive behavior
Readable contrast
```

Do not create random one-off styles unless necessary.

## Content Lock Rules

Components must render approved content without rewriting it.

Claude Code may adjust:

```text
Layout
Spacing
Responsive stacking
Component composition
Button placement
Visual hierarchy
```

Claude Code must not adjust:

```text
Approved copy
Approved headlines
Approved CTAs
Approved slugs
Approved metadata
Approved schema facts
Approved book facts
Approved character copy
```

## Placeholder Rules

Components must not render visible placeholders on live pages.

Do not display:

```text
TODO
Coming soon
Link needed
Image missing
Video placeholder
Retail link pending
```

unless the user explicitly approves public placeholder copy.

Internal code comments are acceptable.

## Error and Missing Data Handling

If required data is missing:

```text
Do not render the broken component
Do not render empty cards
Do not render buttons without URLs
Do not render images without valid src
Use safe fallback layouts only if approved
```

## Build Priority

Build components in this order:

```text
1. Layout components
2. UI components
3. Data files
4. BookCard and BookGrid
5. HeroSection
6. CTASection
7. RetailLinksSection
8. FAQSection
9. Video components
10. SocialLinks
11. Page-specific sections
12. Schema and metadata helpers
```

## Component QA Checklist

Before launch, confirm:

```text
Header links work
Mobile navigation works
Footer links work
Book cards display correctly
Book covers are not distorted
Retail buttons use verified URLs only
No placeholder buttons appear
Video components render verified videos only
No broken embeds appear
FAQ schema matches FAQ components
Social links are verified
Breadcrumbs match page hierarchy
All CTAs work
All components are responsive
Focus states are visible
Text contrast is readable
No em dashes appear in visible copy
Static export works
/out folder is generated
```

## Most Important Instruction

Components must make the site easier to maintain without changing approved content.

Build reusable systems for books, retailers, videos, FAQs, and navigation so the site can grow cleanly as Eric Deloach adds more books, media, and reader pathways.
