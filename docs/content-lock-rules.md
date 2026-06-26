# Content Lock Rules

## Project

Eric Deloach Author Website

## Purpose of This Document

This document defines how approved website content must be handled during planning, implementation, revisions, and future updates.

The purpose is to prevent Claude Code, automated tools, or future contributors from rewriting approved author copy, changing verified book facts, inventing details, or altering the approved content strategy.

## Primary Rule

Approved content is locked.

Once a piece of content has been approved, Claude Code must use it exactly as provided unless the user explicitly requests a revision.

## What Counts as Locked Content

Locked content includes:

```text
Author name
Author bio
Homepage hero copy
Section headlines
Subheadlines
Book titles
Book descriptions
Book metadata
Book page copy
Series descriptions
Character names
Character roles
CTA labels
Navigation labels
Retailer labels
FAQ questions
FAQ answers
Meta titles
Meta descriptions
Schema facts
URL slugs
Alt text
Social profile labels
Retailer link labels
```

## What Claude Code May Change

Claude Code may improve implementation quality without changing the meaning or wording of locked content.

Allowed changes include:

```text
Layout
Spacing
Responsive behavior
Component structure
Accessibility
Semantic HTML
Internal code organization
Performance
Image handling
CSS organization
Static export configuration
Metadata implementation
Schema implementation
Link wiring
Data file structure
```

## What Claude Code Must Not Change

Claude Code must not change approved copy or source-backed facts.

Do not change:

```text
Author positioning
Book descriptions
Character details
Release metadata
ISBNs
Retailer availability
Video descriptions
Author biography facts
Series order
Genre labels
CTAs
Headlines
Navigation labels
Page slugs
Approved SEO copy
Approved schema facts
```

## No Rewriting Rule

Do not rewrite locked content for style, tone, length, grammar, flow, or perceived improvement unless explicitly instructed.

Do not:

```text
Simplify approved copy
Expand approved copy
Shorten approved copy
Change dramatic wording
Change genre language
Change character descriptions
Change the order of approved sections
Replace approved CTAs
Swap approved headings
Rewrite page introductions
Rewrite FAQs
Rewrite metadata
```

If the content appears awkward, repetitive, or inconsistent, flag it in a project note and wait for approval.

## Approved Copy Must Stay Verbatim

When a document says content is locked, use it verbatim.

Example locked copy:

```text
Two Worlds. One Relentless Imagination.
```

Do not change it to:

```text
Two Worlds, One Powerful Imagination
```

Example locked copy:

```text
Where mythology and mayhem collide
```

Do not change it to:

```text
Where myth and chaos meet
```

## Author Name Consistency

Use the approved canonical author name consistently.

Current working canonical name:

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

Do not switch the display name across pages unless the source or context requires it.

Use alternate variants only in:

```text
SEO notes
Metadata variants
Social handle references
Source inventory
Retailer profile references
```

## Book Title Consistency

Use exact book titles.

Approved titles:

```text
Rage of Angels
Ascension: The Path to Polaris
Sins of the Father
In Harm’s Way
```

Do not alter punctuation, capitalization, apostrophes, subtitles, or spelling.

## URL Slug Locking

Once URL slugs are approved, do not change them.

Working slugs:

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

Do not rename pages without approval.

Do not create duplicate versions such as:

```text
/rage-of-angels
/book/rage-of-angels
/books/rage-of-angels-book
/rage-of-angels-series-book-one
```

unless explicitly requested.

## Homepage Flow Locking

The approved homepage flow is:

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

Do not reorder the homepage flow unless explicitly instructed.

Claude Code may improve layout within each section but must preserve the approved section sequence.

## Approved Homepage Positioning

Current approved homepage direction:

```text
Eric Deloach
Gods, Soldiers, Sinners, and Survivors
Dark fantasy, gritty action, and stories where mythology and mayhem collide.
```

Do not replace this with generic copy.

## Approved Section Headlines

Current approved section headline options include:

```text
Two Worlds. One Relentless Imagination.
Where Mythology and Mayhem Collide
The Mind Behind the Mayhem
Choose Your World
Enter the Rage of Angels Universe
Meet Charlie One Alpha
Watch Book Trailers
Join the Reader List
```

Use these as approved. Do not invent alternate section titles unless instructed.

## Approved CTAs

Use approved CTAs where assigned.

Approved CTA examples:

```text
Explore the Books
Start the Rage of Angels Series
Enter the Rage of Angels Universe
Read Rage of Angels
Explore In Harm’s Way
Meet Charlie One Alpha
Watch Book Trailers
Watch on YouTube
Follow on Goodreads
Read the Blog
Join the Reader List
Buy the Book
Listen to the Audiobook
View All Books
```

Avoid vague CTAs such as:

```text
Click Here
Learn More
More Info
Submit
Check It Out
```

Use “Learn More” only when no stronger approved CTA applies.

## No Em Dash Rule

Do not use em dashes in website copy.

Avoid:

```text
Eric Deloach — author of Rage of Angels
```

Use:

```text
Eric Deloach, author of Rage of Angels
```

or:

```text
Eric Deloach: author of Rage of Angels
```

This rule applies to:

```text
Homepage copy
Book pages
Author bio
Metadata
FAQ answers
Image alt text
Schema descriptions
Blog introductions
CTA copy
```

## Book Metadata Locking

Book metadata must not be changed unless a verified source or client approval updates it.

Metadata may include:

```text
Release dates
Page counts
ISBNs
Formats
Audiobook availability
Audiobook runtime
Edition counts
Retailer availability
Series placement
Genre labels
```

If metadata varies by source, use cautious language.

Preferred:

```text
Page count varies by format and retailer.
```

Do not force one source’s number onto every format.

## Retail Link Locking

Retailer labels and links must match approved data.

Do not publish retailer buttons unless the exact book-specific link is confirmed.

Do not create placeholder visible links.

Approved visible retailer labels may include:

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

Do not change retailer labels to casual or unsupported wording such as:

```text
Buy Everywhere
Get It Cheap
Best Deal
All Stores
```

## Price Locking

Do not publish prices unless explicitly approved.

If prices are approved, verify immediately before launch.

Retail prices can change.

Preferred stable copy:

```text
Choose your format and start reading today.
```

Avoid static price copy unless specifically requested.

## Video and Media Locking

Video content must use exact verified or client-provided URLs.

Do not invent:

```text
Trailer URLs
Trailer titles
Trailer durations
YouTube Shorts URLs
Video descriptions
Video publish dates
Character short details
```

If a video URL is missing, use an internal TODO.

Do not display broken or placeholder embeds on the live website.

## Schema Content Locking

Schema facts must match visible content and verified source data.

Do not add schema values that are not verified.

Do not include:

```text
aggregateRating
review
award
offers with price
publisher
narrator
datePublished
numberOfPages
isbn
sameAs links
```

unless each value is verified and approved.

Schema must not make stronger claims than visible page copy.

## Metadata Locking

Metadata must follow approved page strategy.

Do not add fake marketing claims to titles or descriptions.

Avoid:

```text
Award-winning author Eric Deloach
Bestselling Rage of Angels series
Critically acclaimed fantasy thriller
International sensation
```

Preferred:

```text
Explore books by Eric Deloach, author of the Rage of Angels universe and In Harm’s Way. Discover dark fantasy, gritty action, trailers, and retailer links.
```

## FAQ Locking

FAQ questions and answers should be based on approved page content.

Do not use FAQ sections to introduce unverified claims.

Do not invent questions about awards, bestseller status, adaptation rights, publishing deals, or film interest.

Safe FAQ topics include:

```text
What is Rage of Angels about?
Is Rage of Angels the first book in the series?
Who is Victor Mason?
Who is Astrius?
Who are the Anunnaki Gods?
What is In Harm’s Way about?
Who are the boys of Charlie One Alpha?
Is In Harm’s Way part of the Rage of Angels series?
Where can I buy Eric Deloach’s books?
Are audiobook editions available?
```

## Internal Linking Rules

Internal links should support the approved site architecture.

Core internal links:

```text
/books
/books/rage-of-angels
/books/ascension-the-path-to-polaris
/books/sins-of-the-father
/books/in-harms-way
/series/rage-of-angels
/about
/media
/contact
```

Do not add internal links to pages that do not exist unless the page is included in the approved build phase.

## Placeholder Rule

No visible placeholders may be shipped.

Do not publish visible text such as:

```text
Lorem ipsum
Coming soon
TODO
Insert link here
Add bio here
Video placeholder
Retail link pending
Image needed
```

Use internal developer comments or data notes only.

Acceptable internal code comment:

```text
// TODO: Add verified YouTube URL for the Rage of Angels trailer.
```

Not acceptable visible copy:

```text
Trailer coming soon.
```

unless the client approves that public message.

## Future Update Rule

Future contributors must treat existing approved copy as locked.

Before changing content, they must confirm:

1. What content is being changed
2. Why it needs to change
3. Whether the new version is source-backed or client-approved
4. Whether the change affects metadata, schema, links, or related page content

## Difference Between Layout and Content

Claude Code may redesign how content appears.

Claude Code may not rewrite what the content says.

Allowed:

```text
Move a CTA button from left to right within the same section
Make a book card responsive
Improve spacing around a headline
Create reusable data-driven components
Add accessible labels to video embeds
```

Not allowed:

```text
Change the CTA text
Rewrite the headline
Shorten the book description
Change the author bio
Change the reading order
Change the release date
Add a new retailer claim
```

## Conflict Resolution

If two documents conflict, follow this order:

1. Most recent explicit user instruction
2. Most recent locked content document
3. Verified source inventory
4. Content-lock-rules.md
5. do-not-invent.md
6. CLAUDE.md
7. README.md

When unsure, do not guess. Add an internal note and ask for review.

## Final Content QA Checklist

Before launch, confirm:

```text
Approved copy is preserved
No locked content was rewritten
No author name inconsistency appears
No book titles were altered
No unapproved page slugs were created
No fake facts were added
No fake reviews were added
No fake awards were added
No fake retailer links appear
No placeholder links appear
No visible TODO copy appears
No metadata contains fake claims
No schema contains unverified facts
No em dashes appear in website copy
No page order was changed without approval
```

## Most Important Instruction

Claude Code is responsible for implementation, not creative rewriting.

Build the approved content exactly.

Improve the site around the content, not by changing the content.
