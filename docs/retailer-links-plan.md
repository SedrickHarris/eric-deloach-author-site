# Retailer Links Plan

## Project

Eric Deloach Author Website

## Purpose of This Document

This document defines the retailer link strategy for the Eric Deloach author website.

It explains how book purchase links, audiobook links, Goodreads links, library access links, international retailer links, and format CTAs should be handled across the homepage, book pages, footer, and data files.

Claude Code must follow this plan when implementing retailer buttons and external book links.

## Primary Retail Goal

The website should make it easy for readers to choose their preferred format and retailer for Eric Deloach’s books.

Retail links should support:

```text
Book discovery
Reader trust
Purchase conversion
Audiobook discovery
Goodreads follows and shelving
International reader access
Library access, when verified
```

## Primary Rule

Do not publish a retailer button unless the exact book-specific retailer URL is verified.

Do not use placeholder retailer links.

Do not publish links with:

```text
href="#"
href=""
href="/"
```

## Retailer Link Source Rule

Retailer links may be used only when they come from:

```text
Client-provided URLs
Verified retailer product pages
Verified author store pages
Verified platform book pages
Approved source inventory
Approved project documents
```

Do not invent or guess product URLs.

## Price Rule

Do not hard-code retailer prices unless the client explicitly requests prices and they are verified immediately before launch.

Retail prices can change by:

```text
Retailer
Region
Currency
Format
Promotion
Availability
Time
```

Preferred copy:

```text
Choose your preferred format and retailer. Availability may vary by title, format, and platform.
```

Avoid:

```text
Buy now for $14.99
Available everywhere for only $13.99
Best deal on Booktopia
```

unless explicitly requested and verified.

## Availability Rule

Do not claim broad availability unless verified.

Avoid:

```text
Available everywhere
Available on all major platforms
Available in every format
```

Preferred:

```text
Available formats may vary by retailer.
```

or:

```text
Choose from verified retailer links below.
```

## Format Rule

Do not list a format unless verified for that specific title.

Potential formats include:

```text
eBook
Paperback
Hardcover
Audiobook
Retailer-supported formats
```

If a title’s format support is not fully verified, use cautious copy:

```text
Available in multiple retailer-supported formats.
```

## Core Retailers

Potential retailers and book discovery platforms include:

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
BookScouter
Hoopla through participating libraries
```

Only display retailers verified for each specific book.

## Retailer Role Definitions

## Amazon

Purpose:

```text
Primary retail conversion and author store link.
```

Use when:

```text
A specific book product link is verified
The author store link is approved
```

Client-provided author store:

```text
https://www.amazon.com/stores/Eric-DeLoach/author/B0DBYP7SM6?ref=ap_rdr&shoppingPortalEnabled=true&ccs_id=c7640faf-69f7-4aca-b353-e5d9799d5d56
```

Preferred label:

```text
Amazon
```

Do not link all book-specific buttons to the author store unless the client approves that behavior.

## Apple Books

Purpose:

```text
eBook and audiobook discovery.
```

Client-provided author page:

```text
https://books.apple.com/se/author/eric-deloach/id508714465
```

Preferred labels:

```text
Apple Books
Apple Books Audiobook
```

Use separate links for standard book and audiobook when both are verified.

Do not send audiobook CTAs to the standard eBook page unless the audiobook link is not available and the client approves.

## Google Play Books

Purpose:

```text
eBook discovery and Android ecosystem access.
```

Client-provided author page:

```text
https://play.google.com/store/info/name/ERIC_DELOACH?id=11mw753sr&pli=1
```

Preferred label:

```text
Google Play Books
```

Use book-specific product links when possible.

## Barnes & Noble

Purpose:

```text
Retail conversion for print and eBook readers.
```

Client-provided author search:

```text
https://www.barnesandnoble.com/search?attributes.contributorId=31578214&contributorName=ERIC%20DELOACH
```

Preferred label:

```text
Barnes & Noble
```

Use book-specific product links when verified.

## Goodreads

Purpose:

```text
Reader discovery, shelving, reviews pathway, edition cross-checking, and author follow.
```

Client-provided author page:

```text
https://www.goodreads.com/author/show/50787512.ERIC_DELOACH
```

Client-provided book list:

```text
https://www.goodreads.com/author/list/50787512.ERIC_DELOACH
```

Preferred labels:

```text
Goodreads
Follow on Goodreads
View on Goodreads
```

Goodreads is not a direct sales retailer. Treat it as a reader discovery and follow platform.

Do not quote reviews unless verified and approved.

## Indigo / Kobo

Purpose:

```text
Canadian and Kobo ecosystem discovery.
```

Client-provided Indigo product link:

```text
https://www.indigo.ca/products/rage-of-angels-1
```

Preferred label:

```text
Indigo / Kobo
```

Use only when the product link is verified and book-specific.

## Booktopia

Purpose:

```text
International and Australian reader access.
```

Client-provided author search:

```text
https://www.booktopia.com.au/search?author=ERIC+DELOACH&productType=917505
```

Preferred label:

```text
Booktopia
```

Use book-specific product links when verified.

Do not publish Booktopia prices unless explicitly requested and verified before launch.

## ThriftBooks

Purpose:

```text
Used book and book discovery source.
```

Client-provided author page:

```text
https://www.thriftbooks.com/a/eric-deloach/13707301/
```

Preferred label:

```text
ThriftBooks
```

Use book-specific links when verified.

## BookScouter

Purpose:

```text
ISBN and edition cross-checking, resale discovery, or book comparison.
```

Client-provided author page:

```text
https://bookscouter.com/author/deloach-eric
```

Preferred label:

```text
BookScouter
```

BookScouter may be useful for source checking, but it should not necessarily be a primary retail CTA unless the client wants it visible.

## Hoopla

Purpose:

```text
Digital library access through participating libraries.
```

Preferred label:

```text
Hoopla through participating libraries
```

Use only when a specific title listing is verified.

Preferred wording when verified:

```text
Readers with access to participating libraries may be able to borrow this title digitally through Hoopla.
```

Avoid:

```text
Borrow this book for free from every library.
```

## Retail Link Placement

Retail links may appear in:

```text
Homepage Retail Links section
Featured Books cards, when verified
Individual book pages
Series page
Footer
Reviews page, if appropriate
Media page, if connected to videos
```

## Homepage Retail Section

## Section Headline

```text
Find Eric Deloach’s Books
```

## Section Copy

```text
Choose your preferred format and retailer. Availability may vary by title, format, and platform.
```

## Homepage Retail Link Rule

The homepage may use author-level links if book-specific links are not appropriate.

Potential homepage links:

```text
Amazon author store
Apple Books author page
Google Play Books author page
Barnes & Noble author search
Goodreads author profile
Booktopia author search
```

Do not label author-level links as book-specific purchase links.

Good homepage label examples:

```text
View on Amazon
View on Apple Books
View on Google Play Books
Follow on Goodreads
```

## Individual Book Page Retail Sections

Each book page should include only verified links for that specific title.

Recommended section headline pattern:

```text
Find [Book Title]
```

Recommended section copy:

```text
Choose your preferred format and retailer. Availability may vary by format, platform, and region.
```

Recommended CTA label pattern:

```text
Buy on Amazon
Read on Apple Books
Listen on Apple Books
View on Goodreads
```

Use shorter labels if the design requires:

```text
Amazon
Apple Books
Audiobook
Goodreads
```

## Rage of Angels Retail Plan

Page:

```text
/books/rage-of-angels
```

Potential retailer buttons:

```text
Amazon
Apple Books eBook
Apple Books Audiobook
Google Play Books
Barnes & Noble
Indigo / Kobo
Goodreads
Hoopla through participating libraries
Booktopia, pending direct product link confirmation
ThriftBooks, if verified
```

Known source notes:

```text
Apple Books eBook listing exists, exact final URL needed for build data.
Apple Books audiobook listing exists, exact final URL needed for build data.
Indigo product link provided by user.
Goodreads author and list links provided by user.
Amazon author store provided by user.
```

Before publishing, verify direct book-specific links.

## Ascension Retail Plan

Page:

```text
/books/ascension-the-path-to-polaris
```

Potential retailer buttons:

```text
Amazon
Apple Books
Apple Books Audiobook, if verified
Google Play Books
Barnes & Noble
Goodreads
Indigo / Kobo
Booktopia
Additional supported retailers
```

Before publishing, verify direct book-specific links.

## Sins of the Father Retail Plan

Page:

```text
/books/sins-of-the-father
```

Potential retailer buttons:

```text
Amazon
Apple Books, if verified
Google Play Books, if verified
Barnes & Noble
Goodreads
ThriftBooks
BookScouter
Additional supported retailers
```

Before publishing, verify direct book-specific links.

## In Harm’s Way Retail Plan

Page:

```text
/books/in-harms-way
```

Potential retailer buttons:

```text
Amazon
Apple Books standard edition
Apple Books Audiobook
Barnes & Noble
Booktopia
Goodreads
Additional supported retailers
```

Known source notes:

```text
Client reports that the official YouTube trailer description directs readers to Amazon, iTunes or Apple Books, and Barnes & Noble.
Client reports that Apple Books catalogs an audiobook edition.
Client reports that Booktopia lists the eBook.
Client reports that Goodreads shows 3 editions.
```

Before publishing, verify direct book-specific links.

## Series Page Retail Plan

Page:

```text
/series/rage-of-angels
```

The series page may include grouped links by book instead of one large retailer grid.

Recommended structure:

```text
Rage of Angels
- Amazon
- Apple Books
- Audiobook
- Goodreads

Ascension: The Path to Polaris
- Amazon
- Apple Books
- Goodreads

Sins of the Father
- Amazon
- Goodreads
- Other verified retailers
```

Only display verified links.

## Footer Retail Strategy

The footer may include platform-level links, not necessarily individual book links.

Footer retail group:

```text
Amazon
Apple Books
Google Play Books
Barnes & Noble
Goodreads
```

Only include verified public links.

Use author-level or search-level links in the footer only when book-specific footer linking would be too cluttered.

## Retail Link Labels

Preferred labels for individual book pages:

```text
Buy on Amazon
Read on Apple Books
Listen on Apple Books
Read on Google Play Books
Buy on Barnes & Noble
View on Goodreads
View on Indigo / Kobo
View on Booktopia
View on ThriftBooks
Borrow through Hoopla
```

Preferred labels for compact buttons:

```text
Amazon
Apple Books
Audiobook
Google Play
Barnes & Noble
Goodreads
Indigo / Kobo
Booktopia
ThriftBooks
Hoopla
```

## External Link Accessibility

Retail buttons should include accessible labels when needed.

Example:

```text
Buy Rage of Angels on Amazon
Listen to Rage of Angels on Apple Books
View In Harm’s Way on Goodreads
```

Do not use vague labels such as:

```text
Click here
Buy now
Link
More
```

unless paired with clear context.

## External Link Behavior

External retailer links should:

```text
Open in a new tab when appropriate
Use rel="noopener noreferrer"
Have descriptive labels
Avoid raw URLs as visible text
Use consistent button styling
```

## Retail Data File

Recommended file:

```text
src/data/retailers.ts
```

Suggested data fields:

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

Suggested status values:

```text
verified
needs-verification
client-provided
do-not-publish
```

Only render links with:

```text
status: "verified"
```

## Book Data Integration

Recommended book data file:

```text
src/data/books.ts
```

Each book entry may include:

```text
id
title
slug
series
genre
formats
retailerIds
goodreadsUrl
primaryCta
secondaryCta
```

Do not duplicate retailer URLs across many components.

## Missing Link Handling

If a link is missing, do not render the button.

Acceptable code behavior:

```text
Filter out retailers without verified URLs.
```

Acceptable internal note:

```text
// TODO: Add verified Apple Books Audiobook URL for In Harm’s Way.
```

Unacceptable visible page behavior:

```text
Button labeled Apple Books with href="#"
Button labeled Coming Soon
Visible text saying TODO
```

## Schema and Offer Rules

Do not include offer or price schema unless prices and availability are verified and approved.

Avoid:

```text
offers
price
priceCurrency
availability
aggregateRating
review
```

in Book schema unless explicitly verified.

Safe Book schema fields may include:

```text
name
author
description
url
image
isbn, only if verified
datePublished, only if verified
numberOfPages, only if verified
bookFormat, only if verified
sameAs, only if verified
```

## Retailer Logo Rules

Do not download or use retailer logos unless approved and compliant with brand guidelines.

Preferred approach:

```text
Text buttons with consistent site styling.
```

Avoid:

```text
Unapproved retailer logos
Low-resolution scraped logos
Misleading badges
Fake official badges
```

## Retail Copy Examples

## Good Copy

```text
Choose your preferred format and retailer. Availability may vary by title, format, and platform.
```

```text
Start the saga with Rage of Angels, then continue through the expanding Rage of Angels universe.
```

```text
Listen to the audiobook when available from verified retailers.
```

## Bad Copy

```text
Buy this bestseller now before it disappears.
```

```text
Available everywhere for the lowest price.
```

```text
Critics and readers agree this is a must-buy.
```

```text
Every format is available on every platform.
```

## Retail QA Checklist

Before launch, verify:

```text
Every visible retailer button has a real URL
Every URL is book-specific when used on book pages
No href="#" appears
No empty href appears
No placeholder retailer text appears
No prices appear unless approved and verified
No unverified format claims appear
No retailer button appears for unavailable books
External links open safely
Accessible labels are clear
Goodreads is treated as reader discovery, not direct purchase
Hoopla wording does not guarantee access
Footer links are verified
Book schema does not include unverified offers
```

## Link Verification Checklist by Book

## Rage of Angels

Verify:

```text
Amazon direct link
Apple Books eBook link
Apple Books Audiobook link
Google Play Books link
Barnes & Noble link
Goodreads book link
Indigo / Kobo link
Booktopia direct link, if used
Hoopla listing, if used
ThriftBooks link, if used
```

## Ascension: The Path to Polaris

Verify:

```text
Amazon direct link
Apple Books link
Apple Books Audiobook link, if used
Google Play Books link
Barnes & Noble link
Goodreads book link
Indigo / Kobo link, if used
Booktopia direct link, if used
```

## Sins of the Father

Verify:

```text
Amazon direct link
Apple Books link, if used
Google Play Books link, if used
Barnes & Noble link
Goodreads book link
ThriftBooks link, if used
BookScouter link, if used
```

## In Harm’s Way

Verify:

```text
Amazon direct link
Apple Books standard edition link
Apple Books Audiobook link
Barnes & Noble link
Booktopia link
Goodreads book link
Additional audiobook links, if used
```

## Retail Implementation Rules for Claude Code

Claude Code must:

```text
Use a data-driven retailer link system
Render only verified links
Preserve approved retailer labels
Avoid visible placeholders
Avoid hard-coded prices
Use safe external link attributes
Use accessible labels
Keep buttons responsive
```

Claude Code must not:

```text
Invent URLs
Guess product links
Use placeholder hrefs
Publish fake prices
Publish fake format claims
Publish fake availability claims
Use unverified retailer logos
Add offer schema without verified prices
Rewrite approved retail copy
Use em dashes in website copy
```

## Most Important Instruction

Retail links are conversion points.

They must be accurate, verified, and trustworthy.

If a retailer link is not verified, do not publish it.

## The Forsaken Son Retail Plan

Page:

```text
/books/the-forsaken-son-trials-of-grace
```

This early standalone work needs verified retailer and discovery links before any buttons render.

Potential links to verify:

```text
Amazon
ThriftBooks
Walmart
BookScouter
Goodreads, if listing exists
```

Button labels:

```text
View on Amazon
View on ThriftBooks
View on Walmart
Search on BookScouter
View on Goodreads
```

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
