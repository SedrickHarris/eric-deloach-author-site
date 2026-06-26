# Schema Plan

## Project

Eric Deloach Author Website

## Purpose of This Document

This document defines the structured data strategy for the Eric Deloach author website.

The goal is to help search engines, AI systems, and rich-result tools clearly understand the website, the author, the books, the series, media content, FAQs, breadcrumbs, and contact pathways.

Claude Code must follow this schema plan and must not add unverified facts to structured data.

## Primary Schema Goal

Structured data should reinforce accurate information about:

```text
Eric Deloach
The Eric Deloach author website
The Rage of Angels universe
Rage of Angels
Ascension: The Path to Polaris
Sins of the Father
In Harm’s Way
Book trailers and videos
FAQs
Breadcrumbs
```

## Most Important Schema Rule

Do not include schema facts that are not verified.

Schema must never make stronger claims than visible page copy.

If a fact is not verified or approved, omit it from schema.

## Schema Types to Use

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

Use only the schema types that fit the page and verified content.

## Schema Types to Avoid Unless Verified

Do not use these unless explicitly approved and supported by verified data:

```text
Review
AggregateRating
Offer
Event
Organization
LocalBusiness
Product pricing schema
Course
Article
NewsArticle
```

## Do Not Invent Schema Fields

Never invent schema values for:

```text
awards
reviews
ratings
aggregateRating
offers
prices
availability
publisher
narrator
datePublished
numberOfPages
isbn
bookFormat
uploadDate
duration
thumbnailUrl
event dates
event locations
media appearances
sameAs links
```

Use these fields only when verified and approved.

## Domain Placeholder

Until the final domain is confirmed, use a placeholder in planning documents:

```text
https://[domain]
```

Claude Code should replace this with the final production domain only after it is confirmed.

Do not use localhost or Cloudflare preview URLs as final canonical schema URLs unless explicitly instructed.

## Site-Level Schema

## WebSite Schema

Use on the homepage.

Purpose:

```text
Identify the site as the official author website for Eric Deloach.
```

Recommended safe fields:

```text
@context
@type: WebSite
name
url
description
inLanguage
publisher or author, only if safely represented
```

Example planning shape:

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Eric Deloach Author Website",
  "url": "https://[domain]",
  "description": "Official author website for Eric Deloach, author of the Rage of Angels universe and In Harm’s Way.",
  "inLanguage": "en"
}
```

Do not add a SearchAction unless there is a working site search feature.

## Person Schema

Use on:

```text
Homepage
About page
```

Purpose:

```text
Identify Eric Deloach as the author entity.
```

Recommended safe fields:

```text
@context
@type: Person
name
alternateName
url
description
sameAs, only verified links
knowsAbout, if based on approved genre positioning
```

Safe `name`:

```text
Eric Deloach
```

Potential alternateName values:

```text
Eric DeLoach
Eric De’Loach
ERIC DELOACH
Eric Loko
```

Use alternateName only if approved in implementation.

Potential sameAs links after verification:

```text
Goodreads author profile
YouTube channel
TikTok profile
Instagram profile
Facebook profile
Apple Books author profile
Google Play author profile
Amazon author store
Myth and Mayhem website
```

Example planning shape:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Eric Deloach",
  "alternateName": ["Eric DeLoach", "Eric Loko"],
  "url": "https://[domain]/about",
  "description": "Eric Deloach is the author of the Rage of Angels universe and In Harm’s Way, writing dark fantasy, gritty action, crime, science fiction, and thrillers.",
  "sameAs": []
}
```

Do not add birth date, residence, education, family details, awards, or credentials unless verified and approved.

## Book Schema

Use on individual book pages only.

Pages:

```text
/books/rage-of-angels
/books/ascension-the-path-to-polaris
/books/sins-of-the-father
/books/in-harms-way
```

Purpose:

```text
Identify each title as a book by Eric Deloach.
```

Safe fields for all book pages:

```text
@context
@type: Book
name
author
description
url
image, if verified
inLanguage
isPartOf, when series relationship is verified
sameAs, if verified retailer or Goodreads links are approved
```

Fields requiring verification before use:

```text
isbn
datePublished
numberOfPages
bookFormat
publisher
workExample
audio
abridged
unabridged
```

Fields to avoid unless explicitly verified and approved:

```text
offers
price
priceCurrency
availability
aggregateRating
review
award
```

## Book Schema: Rage of Angels

Safe planning fields:

```text
name: Rage of Angels
author: Eric Deloach
url: https://[domain]/books/rage-of-angels
description: Approved Rage of Angels page description
inLanguage: en
```

Potential verified fields, pending final verification:

```text
isbn: 9798991054409, 9798991054416, or 9798991054423 depending on edition handling
datePublished: June 30, 2024 or early July 2024 depending on edition
numberOfPages: 243 or 248 depending on format
bookFormat: eBook, Paperback, Hardcover, Audiobook
sameAs: verified retailer or Goodreads links
```

Schema caution:

If multiple editions have different ISBNs and dates, do not collapse all edition-specific facts into one inaccurate Book schema. Either use the most relevant primary edition or omit edition-specific fields.

## Book Schema: Ascension: The Path to Polaris

Safe planning fields:

```text
name: Ascension: The Path to Polaris
author: Eric Deloach
url: https://[domain]/books/ascension-the-path-to-polaris
description: Approved Ascension page description
inLanguage: en
```

Potential verified fields, pending final verification:

```text
datePublished
numberOfPages
isbn
bookFormat
sameAs
```

Do not publish March 2025 exact date or 372 pages in schema until verified.

## Book Schema: Sins of the Father

Safe planning fields:

```text
name: Sins of the Father
author: Eric Deloach
url: https://[domain]/books/sins-of-the-father
description: Approved Sins of the Father page description
inLanguage: en
```

Potential verified fields, pending final verification:

```text
datePublished
numberOfPages
isbn
bookFormat
sameAs
```

Do not publish March 2026, 342 pages, or ISBN in schema until verified.

## Book Schema: In Harm’s Way

Safe planning fields:

```text
name: In Harm’s Way
author: Eric Deloach
url: https://[domain]/books/in-harms-way
description: Approved In Harm’s Way page description
inLanguage: en
```

Potential verified fields, pending final verification:

```text
datePublished
numberOfPages
isbn
bookFormat
audiobook availability
sameAs
```

Do not publish audiobook availability, edition count, page count, ISBN, or date in schema until verified.

## Series or Collection Schema

Schema.org does not have a perfect generic “BookSeries” type that is universally used for rich results.

For the Rage of Angels series page, use:

```text
CollectionPage
```

Optional supporting structure:

```text
about
hasPart, only if book page URLs are verified and built
mainEntity, if carefully structured
```

Use on:

```text
/series/rage-of-angels
```

Safe planning shape:

```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Rage of Angels Universe",
  "url": "https://[domain]/series/rage-of-angels",
  "description": "Explore Eric Deloach’s Rage of Angels universe, a dark fantasy saga of celestial bloodlines, ancient gods, hell-born power, Astrius, and the Anunnaki Gods.",
  "inLanguage": "en",
  "hasPart": [
    {
      "@type": "Book",
      "name": "Rage of Angels",
      "url": "https://[domain]/books/rage-of-angels"
    },
    {
      "@type": "Book",
      "name": "Ascension: The Path to Polaris",
      "url": "https://[domain]/books/ascension-the-path-to-polaris"
    },
    {
      "@type": "Book",
      "name": "Sins of the Father",
      "url": "https://[domain]/books/sins-of-the-father"
    }
  ]
}
```

Use `hasPart` only if the listed pages exist.

## Books Page Schema

Use:

```text
CollectionPage
BreadcrumbList
```

Page:

```text
/books
```

Purpose:

```text
Represent the catalog of Eric Deloach books.
```

Safe fields:

```text
name
url
description
inLanguage
hasPart, if book pages exist
```

Do not add ratings, reviews, or offers.

## BreadcrumbList Schema

Use on every major page except possibly the homepage.

Breadcrumbs should match visible or logical page hierarchy.

## Book Page Breadcrumb Example

For `/books/rage-of-angels`:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://[domain]/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Books",
      "item": "https://[domain]/books"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Rage of Angels",
      "item": "https://[domain]/books/rage-of-angels"
    }
  ]
}
```

## Series Page Breadcrumb Example

For `/series/rage-of-angels`:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://[domain]/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Series",
      "item": "https://[domain]/series/rage-of-angels"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Rage of Angels",
      "item": "https://[domain]/series/rage-of-angels"
    }
  ]
}
```

If there is no `/series` index page, do not link to an unbuilt `/series` route.

## FAQPage Schema

Use FAQPage schema only when the visible FAQ content is final and approved.

Potential pages:

```text
/books/rage-of-angels
/books/ascension-the-path-to-polaris
/books/sins-of-the-father
/books/in-harms-way
/series/rage-of-angels
/books
```

Rules:

```text
FAQ schema must match visible FAQs exactly
Do not create hidden FAQ schema
Do not include unverified claims
Do not include fake reviews or awards
Do not include promotional hype
```

## FAQ Schema Example

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Rage of Angels about?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rage of Angels is a dark fantasy novel by Eric Deloach about Victor Mason, a dedicated policeman who discovers his celestial heritage and must become Astrius to battle the Anunnaki Gods."
      }
    }
  ]
}
```

Use only approved FAQ copy.

## VideoObject Schema

Use VideoObject schema only when video data is verified.

Potential pages:

```text
/media
/books/rage-of-angels
/books/in-harms-way
/series/rage-of-angels
```

Required or strongly recommended fields:

```text
name
description
embedUrl or contentUrl
thumbnailUrl, if verified
uploadDate, if verified
duration, if verified
```

Do not invent:

```text
duration
uploadDate
thumbnailUrl
video title
description
transcript
```

## Safe VideoObject Planning Shape

```json
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Rage of Angels Trailer",
  "description": "A promotional trailer for Rage of Angels by Eric Deloach.",
  "embedUrl": "https://www.youtube.com/embed/[verified-video-id]"
}
```

Only use this once the exact URL is verified.

## Media Page Schema

Use:

```text
CollectionPage
BreadcrumbList
VideoObject, only for verified videos
```

Page:

```text
/media
```

Purpose:

```text
Represent a collection of trailers, Shorts, and author media links.
```

Do not include VideoObject for unverified videos.

## Contact Page Schema

Use:

```text
ContactPage
BreadcrumbList
```

Page:

```text
/contact
```

Do not add:

```text
email
phone
address
contactPoint
```

unless the contact information is approved.

Safe planning shape:

```json
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Eric Deloach",
  "url": "https://[domain]/contact",
  "description": "Contact Eric Deloach for book-related inquiries, media, events, or reader messages through the approved website contact path."
}
```

## Reviews Page Schema

Use:

```text
WebPage
BreadcrumbList
```

Do not use:

```text
Review
AggregateRating
```

unless verified reviews and ratings are approved for schema use.

Reviews page safe shape:

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Reviews",
  "url": "https://[domain]/reviews",
  "description": "Find reader review links and Goodreads information for books by Eric Deloach."
}
```

## Events Page Schema

Use:

```text
WebPage
BreadcrumbList
```

Do not use Event schema unless an event is verified.

Safe Events page shape:

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Events",
  "url": "https://[domain]/events",
  "description": "View upcoming events, appearances, and book-related updates for author Eric Deloach when available."
}
```

Only add Event schema for specific, verified events.

## About Page Schema

Use:

```text
Person
BreadcrumbList
```

Page:

```text
/about
```

Person schema should align with visible author bio and verified links.

Do not include private or sensitive personal details.

## Structured Data Placement

In Next.js, schema can be inserted as JSON-LD in page components or metadata utilities.

Recommended pattern:

```text
Create schema helper functions
Keep schema data near page data
Use JSON.stringify safely
Render one or more JSON-LD script tags per page
```

Recommended helper file:

```text
src/lib/schema.ts
```

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

## Schema Data Source

Schema must pull from approved central data where possible.

Recommended files:

```text
src/data/site.ts
src/data/books.ts
src/data/socialLinks.ts
src/data/videos.ts
src/data/faqs.ts
```

Avoid duplicating schema facts across many components.

## Schema and Visible Content Alignment

Schema must match visible page content.

If visible copy says:

```text
Available formats may vary by retailer.
```

Do not add schema claiming:

```text
bookFormat: Hardcover, Paperback, Audiobook, eBook
```

unless all formats are verified.

If visible page does not show ratings, do not add ratings in schema.

## SameAs Rules

Use `sameAs` only for verified public profiles.

Potential sameAs links:

```text
https://www.goodreads.com/author/show/50787512.ERIC_DELOACH
https://www.youtube.com/@ericloko702/featured
https://www.tiktok.com/@ericloko424
https://www.instagram.com/eric_loko702/
https://www.facebook.com/eric.deloach
https://books.apple.com/se/author/eric-deloach/id508714465
https://play.google.com/store/info/name/ERIC_DELOACH?id=11mw753sr&pli=1
https://www.amazon.com/stores/Eric-DeLoach/author/B0DBYP7SM6
https://www.ericdeloachmythandmayhem.com/
```

Use final cleaned URLs if available.

Do not include URLs that are not accessible or not approved.

## Offer Schema Rules

Do not use Offer schema for books unless all of the following are true:

```text
The client approves offer schema
The retailer URL is verified
The price is verified immediately before launch
The currency is verified
The availability is verified
The offer is stable enough to publish
```

Because book prices vary by retailer and region, the safer MVP approach is to omit Offer schema.

## Review Schema Rules

Do not use Review or AggregateRating schema unless:

```text
The review source is verified
The review text is approved for use
The rating is verified
The client approves publication
The visible page shows the same review
```

Do not create review schema from invented praise.

## Event Schema Rules

Do not use Event schema unless:

```text
The event name is verified
The event date is verified
The event location or online event URL is verified
The event status is verified
The event is visible on the page
```

Do not invent events for schema.

## Organization Schema Rule

This is an author website, not a business site.

Use Person schema for Eric Deloach.

Do not use LocalBusiness schema.

Do not use Organization schema unless a formal author brand organization or publisher entity is approved.

## Language Field

Use:

```text
inLanguage: en
```

unless the site includes multilingual pages later.

## Image Field Rules

Use image fields only when the image exists and is appropriate.

For Book schema:

```text
Use verified book cover image path.
```

For Person schema:

```text
Use verified author portrait only.
```

Do not use placeholder images in schema.

## Canonical URL Rules

Schema URLs should match canonical URLs.

Approved URL examples:

```text
https://[domain]/
https://[domain]/about
https://[domain]/books
https://[domain]/books/rage-of-angels
https://[domain]/books/in-harms-way
https://[domain]/series/rage-of-angels
```

Do not use trailing slash inconsistently. Match the site’s Next.js configuration.

## Static Export Compatibility

Schema implementation must work with static export.

Do not rely on server-only dynamic runtime logic.

Do not fetch schema data at runtime from external APIs.

Use static data files.

## Schema Validation

Before launch, validate structured data with:

```text
Google Rich Results Test
Schema.org validator
Manual JSON-LD inspection
```

## Schema QA Checklist

Before launch, confirm:

```text
JSON-LD is valid JSON
Schema appears on the correct pages
Schema URLs match canonical URLs
Person schema uses verified sameAs links only
Book schema uses verified fields only
No fake ISBNs appear
No fake page counts appear
No fake dates appear
No fake offers appear
No fake prices appear
No fake ratings appear
No fake reviews appear
No fake awards appear
No fake events appear
FAQ schema matches visible FAQ content
VideoObject schema uses verified videos only
Breadcrumb schema matches page hierarchy
No placeholder domain remains after final domain is confirmed
Static export works
/out folder is generated
```

## Recommended Schema by Page

| Page                  | URL                                    | Schema                                                  |
| --------------------- | -------------------------------------- | ------------------------------------------------------- |
| Home                  | `/`                                    | WebSite, Person                                         |
| About                 | `/about`                               | Person, BreadcrumbList                                  |
| Books                 | `/books`                               | CollectionPage, BreadcrumbList                          |
| Rage of Angels        | `/books/rage-of-angels`                | Book, BreadcrumbList, FAQPage if approved               |
| Ascension             | `/books/ascension-the-path-to-polaris` | Book, BreadcrumbList, FAQPage if approved               |
| Sins of the Father    | `/books/sins-of-the-father`            | Book, BreadcrumbList, FAQPage if approved               |
| In Harm’s Way         | `/books/in-harms-way`                  | Book, BreadcrumbList, FAQPage if approved               |
| Rage of Angels Series | `/series/rage-of-angels`               | CollectionPage, BreadcrumbList, FAQPage if approved     |
| Media                 | `/media`                               | CollectionPage, BreadcrumbList, VideoObject if verified |
| Reviews               | `/reviews`                             | WebPage, BreadcrumbList                                 |
| Events                | `/events`                              | WebPage, BreadcrumbList                                 |
| Contact               | `/contact`                             | ContactPage, BreadcrumbList                             |

## Most Important Instruction

Structured data must support trust.

Only include accurate, verified, and approved facts.

When in doubt, omit the schema field.

## Book Schema: The Forsaken Son: Trials of Grace

Page:

```text
/books/the-forsaken-son-trials-of-grace
```

Recommended schema types:

```text
Book
BreadcrumbList
FAQPage, if visible FAQs are included
WebPage
```

Book schema fields, only if verified:

```text
@type: Book
name: The Forsaken Son: Trials of Grace
author: Eric Deloach
bookFormat: Paperback
publisher: AuthorHouse
datePublished: 2005-02-17, only if exact date is verified
isbn: 9781420818840
numberOfPages: 424
inLanguage: en
url: https://[domain]/books/the-forsaken-son-trials-of-grace/
image: approved cover image only
```

If only month and year are verified, use cautious schema or omit exact `datePublished`.

Do not include:

```text
offers
aggregateRating
review
price
availability
award
```

unless verified and approved.

FAQ schema must match visible FAQ content exactly.
