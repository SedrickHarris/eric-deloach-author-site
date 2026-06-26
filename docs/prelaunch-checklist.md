# Prelaunch Checklist

## Project

Eric Deloach Author Website

## Purpose of This Document

This checklist must be completed before launching the Eric Deloach author website.

It covers content accuracy, page structure, links, media, retailer buttons, metadata, schema, static export, Cloudflare Pages deployment, accessibility, performance, and final QA.

Claude Code must use this checklist before any launch handoff.

## Launch Goal

The website should launch as a trustworthy, polished, static author website that helps readers:

```text
Understand who Eric Deloach is
Explore his books
Choose between the Rage of Angels universe and In Harm’s Way
Watch verified trailers and Shorts
Follow verified social platforms
Use verified retailer links
Contact or connect through approved pathways
```

## Critical Launch Rule

Do not launch if the site contains:

```text
Invented book facts
Invented reviews
Invented awards
Invented events
Fake retailer links
Fake video embeds
Fake author images
Placeholder buttons
Visible TODO text
Broken internal links
Unverified prices
Unapproved contact details
```

## Project Setup Checklist

Confirm:

```text
Project folder is correct
Repository name is correct
README.md exists
CLAUDE.md exists
docs folder exists
Project docs are committed
Next.js app is configured
TypeScript is configured
Static export is configured
Cloudflare Pages output directory is out
```

Approved local folder:

```text
C:\Users\Welcome\Desktop\client-sites\eric-deloach-author-site
```

Approved repository:

```text
eric-deloach-author-site
```

## Static Export Checklist

Confirm:

```text
next.config.ts includes output: "export"
next.config.ts includes images.unoptimized: true
Build command is npm run build
npm run build succeeds locally
/out folder is generated
No static export errors appear
No server-only features are required
No API routes are required for MVP
No server actions are required
No ISR is used
No SSR is used
No runtime CMS fetch is required
```

Expected Cloudflare settings:

```text
Framework preset: Next.js Static HTML Export
Build command: npm run build
Output directory: out
Production branch: main
```

## Approved Route Checklist

Confirm every approved route exists and loads.

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

If `trailingSlash: true` is enabled, confirm the slash versions also work:

```text
/
/about/
/books/
/books/rage-of-angels/
/books/ascension-the-path-to-polaris/
/books/sins-of-the-father/
/books/in-harms-way/
/series/rage-of-angels/
/media/
/reviews/
/events/
/contact/
```

## Unapproved Route Checklist

Confirm the site does not publish unapproved optional pages unless approved.

Do not publish without approval:

```text
/myth-and-mayhem
/characters
/lore
/newsletter
/blog
/press
/media-kit
```

## Navigation Checklist

Header navigation should include:

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

Confirm:

```text
Header links work
Header CTA works
Mobile menu opens
Mobile menu closes
Mobile menu links work
Keyboard navigation works
Focus states are visible
No optional pages appear unless built
```

## Footer Checklist

Footer groups should include:

```text
Books
Explore
Follow
Retail
```

Confirm:

```text
Footer links work
Book links work
Explore links work
Social links work
Retail links work
No placeholder footer links appear
No href="#" appears
No empty href appears
```

Footer copy:

```text
Eric Deloach writes dark fantasy, gritty action, and cinematic stories where mythology and mayhem collide.
```

## Homepage Checklist

Confirm homepage sections appear in this order:

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

Confirm homepage hero includes:

```text
Myth and Mayhem
Eric Deloach
Gods, Soldiers, Sinners, and Survivors
Dark fantasy, gritty action, and stories where mythology and mayhem collide.
```

Confirm homepage CTAs work:

```text
Explore the Books
Start the Rage of Angels Series
Watch Book Trailers
```

Confirm:

```text
Choose Your World copy is approved
Featured book cards link correctly
Rage of Angels section links correctly
In Harm’s Way section links correctly
About Eric copy is approved
Media section shows only verified media
Retail links are verified
No fake signup form appears
```

## About Page Checklist

Confirm:

```text
/about loads
H1 is correct
Approved bio copy is preserved
The Mind Behind the Mayhem section is present
Author portrait is approved or omitted
No fake author portrait appears
Read the Blog CTA works
Follow on Goodreads CTA works
Watch on YouTube CTA works
```

Approved About CTAs:

```text
Read the Blog
Follow on Goodreads
Watch on YouTube
```

## Books Page Checklist

Confirm:

```text
/books loads
All approved books appear
Book titles are spelled correctly
Book cards use approved covers
Book cards link to correct pages
Genre labels are accurate
Series labels are accurate
No fake badges appear
No fake reviews appear
No fake awards appear
```

Approved books:

```text
Rage of Angels
Ascension: The Path to Polaris
Sins of the Father
In Harm’s Way
```

## Rage of Angels Book Page Checklist

Confirm:

```text
/books/rage-of-angels loads
H1 is Rage of Angels
Approved hero copy is preserved
Victor Mason copy is approved
Astrius copy is approved
Anunnaki Gods reference is approved
Book details use verified facts only
Retail links are verified
Trailer appears only if verified
FAQ copy is approved
FAQ schema matches visible FAQ
Related links work
```

Do not publish if the page includes unverified:

```text
Awards
Reviews
Prices
Retail availability
Publisher details
Page count
ISBNs
Audiobook runtime
```

unless specifically verified and approved.

## Ascension Book Page Checklist

Confirm:

```text
/books/ascension-the-path-to-polaris loads
H1 is Ascension: The Path to Polaris
Approved hero copy is preserved
Book 2 status is verified before publishing as fact
Release date is verified before publishing as exact date
Page count is verified before publishing
Retail links are verified
Related links work
FAQ copy is approved
```

Do not publish unverified exact metadata.

## Sins of the Father Book Page Checklist

Confirm:

```text
/books/sins-of-the-father loads
H1 is Sins of the Father
Approved hero copy is preserved
Series placement is verified or cautiously worded
Damon reference is approved
Astrius backstory reference is approved
Retail links are verified
Related links work
FAQ copy is approved
```

Do not publish unverified exact release date, page count, ISBN, or reading order.

## In Harm’s Way Book Page Checklist

Confirm:

```text
/books/in-harms-way loads
H1 is In Harm’s Way
Approved hero copy is preserved
Charlie One Alpha section is present
Character names are correct
Character roles are correct
Retail links are verified
Trailer appears only if verified
Shorts appear only if verified
FAQ copy is approved
FAQ schema matches visible FAQ
Related links work
No fake military endorsement appears
```

Approved characters:

```text
Chief Petty Officer Greg Esposito: US Navy SEAL
Petty Officer 1st Class Denton Haas: US Navy sniper
CTO1 Casey Carter: US Navy information and communications officer
CTOCS Malice Collissimo: Senior member of the US Navy
```

Do not add unapproved mission details, character backstories, or military claims.

## Rage of Angels Series Page Checklist

Confirm:

```text
/series/rage-of-angels loads
H1 is The Rage of Angels Universe
Approved series copy is preserved
Reading order is approved
Sins of the Father placement is confirmed or cautiously worded
Victor Mason and Astrius section is accurate
Anunnaki Gods section is accurate
Moral ambiguity section is accurate
Trailer appears only if verified
Retail links are verified
FAQ copy is approved
FAQ schema matches visible FAQ
```

Do not invent lore.

## Media Page Checklist

Confirm:

```text
/media loads
YouTube link works
TikTok link works
Instagram link works
Facebook link works or is omitted if not public
Goodreads link works
Myth and Mayhem link works
Only verified videos appear
No placeholder embeds appear
No fake video cards appear
No fake video durations appear
No fake upload dates appear
All iframe titles are descriptive
Videos are responsive
```

Priority media:

```text
Rage of Angels trailer
In Harm’s Way trailer
Charlie One Alpha Shorts
```

Only publish media with verified URLs.

## Reviews Page Checklist

Confirm:

```text
/reviews loads
No fake reviews appear
No fake ratings appear
No fake testimonials appear
Goodreads CTA works
Book links work
Schema does not include Review or AggregateRating unless verified
```

Safe copy if no approved reviews exist:

```text
Reader reviews and approved praise will be shared here as they become available.
```

## Events Page Checklist

Confirm:

```text
/events loads
No fake events appear
No fake dates appear
No fake locations appear
No Event schema appears unless a verified event exists
Contact CTA works
Book links work
```

Safe copy if no approved events exist:

```text
Upcoming events and appearances will be shared here when available.
```

## Contact Page Checklist

Confirm:

```text
/contact loads
Contact method is approved
No fake form appears
No API route form handler is required
No personal contact information appears unless approved
Social links work
Book links work
```

Static-safe contact options:

```text
Approved external form provider
Approved embedded form
Approved mailto link
No form until contact workflow is approved
```

## Content Accuracy Checklist

Confirm:

```text
Author name is consistent
Book titles are spelled correctly
Series names are consistent
Known name variants are not overused
No fake awards appear
No bestseller claims appear unless verified
No fake reviews appear
No invented lore appears
No invented character details appear
No unverified personal biography appears
No unverified events appear
No unverified prices appear
No em dashes appear in visible website copy
```

Canonical author name:

```text
Eric Deloach
```

Known variants for source and search handling:

```text
Eric DeLoach
Eric De’Loach
ERIC DELOACH
Eric Loko
```

## No Em Dash Checklist

Search visible copy for em dashes.

Do not use:

```text
—
```

Use commas, periods, colons, semicolons, or parentheses instead.

## Retail Link Checklist

Confirm every visible retailer button has a verified URL.

Check these retailers only where verified:

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

Confirm:

```text
No href="#" appears
No href="" appears
No href="/" appears for external retailers
No fake retailer buttons appear
No prices appear unless approved
No broad availability claims appear
Goodreads is treated as discovery, not direct purchase
Hoopla wording does not guarantee access
```

## Social Link Checklist

Confirm:

```text
YouTube URL is correct
TikTok URL is correct
Instagram URL is correct
Facebook URL is public or omitted
Goodreads URL is correct
Myth and Mayhem URL is correct
All social links have accessible labels
No fake social profiles appear
```

## Video Checklist

Confirm:

```text
Every embedded video URL is verified
Every embed loads
No placeholder video embeds appear
No visible TODO text appears
No fake duration appears
No fake upload date appears
No fake transcript appears
No unapproved social embeds appear
Videos do not autoplay
Iframes have descriptive titles
Videos work on mobile
```

## Image Checklist

Confirm:

```text
Book covers are approved
Book covers are not distorted
Author portrait is approved or omitted
No fake author image appears
Hero images are approved
No fake character art appears
No unapproved military logos appear
No fake awards or badges appear
All meaningful images have alt text
Decorative images are handled properly
No broken image paths appear
Images are optimized
Social preview images exist if referenced
```

Approved book cover file names:

```text
rage-of-angels-book-cover.webp
ascension-path-to-polaris-book-cover.webp
sins-of-the-father-book-cover.webp
in-harms-way-book-cover.webp
```

## Accessibility Checklist

Confirm:

```text
One H1 per page
Headings are semantic
Navigation is keyboard accessible
Mobile menu is keyboard accessible
Focus states are visible
Text contrast is readable
Buttons have clear labels
External links have descriptive labels
Images have alt text
Iframes have descriptive titles
Touch targets are large enough
No important text is trapped inside images
Reduced motion is respected if animations exist
```

## Metadata Checklist

Confirm every page has:

```text
Unique SEO title
Unique meta description
Open Graph title
Open Graph description
Canonical URL
Approved social image if referenced
No fake claims
No em dashes
```

Confirm no metadata includes:

```text
Award-winning
Bestselling
Critically acclaimed
International sensation
Top-rated
Millions of readers
```

unless verified and approved.

## Canonical URL Checklist

Confirm canonical URLs:

```text
Use final production domain
Match approved slugs
Match trailing slash behavior
Do not use localhost
Do not use preview domain
Do not use placeholder [domain]
Do not include tracking parameters
```

## Schema Checklist

Confirm schema is valid and accurate.

Use only verified schema fields.

Confirm:

```text
WebSite schema is valid
Person schema uses verified sameAs links only
Book schema uses verified facts only
CollectionPage schema is accurate
BreadcrumbList schema matches page hierarchy
FAQPage schema matches visible FAQs
VideoObject schema uses verified videos only
ContactPage schema has approved contact information only
No fake Review schema appears
No fake AggregateRating schema appears
No fake Offer schema appears
No fake Event schema appears
```

Do not include unverified:

```text
ISBNs
Page counts
Publication dates
Publisher
Narrator
Prices
Availability
Ratings
Reviews
Awards
Events
Video durations
Upload dates
```

## Sitemap Checklist

Confirm:

```text
public/sitemap.xml exists
Sitemap uses final production domain
Sitemap includes only live approved pages
Sitemap excludes docs
Sitemap excludes unbuilt optional pages
Sitemap excludes placeholder pages
Sitemap matches trailing slash behavior
```

Initial sitemap pages:

```text
/
/about/
/books/
/books/rage-of-angels/
/books/ascension-the-path-to-polaris/
/books/sins-of-the-father/
/books/in-harms-way/
/series/rage-of-angels/
/media/
/reviews/
/events/
/contact/
```

## Robots Checklist

Confirm:

```text
public/robots.txt exists
Robots allows public crawling
Robots includes final sitemap URL
Robots does not use placeholder domain
Robots does not use preview domain
```

Recommended production file:

```txt
User-agent: *
Allow: /

Sitemap: https://[domain]/sitemap.xml
```

Replace `[domain]` before launch.

## 404 Checklist

Confirm:

```text
404 page exists
404 page renders in static export
404 page has clear navigation
404 page has useful CTAs
No joke copy conflicts with author brand
```

Recommended CTAs:

```text
Return Home
Explore the Books
Start the Rage of Angels Series
```

## Design Checklist

Confirm:

```text
Design feels cinematic
Design feels professional
Two reader lanes are visually clear
Book covers are prominent
CTAs are easy to find
Dark backgrounds remain readable
Cards are consistent
Buttons are consistent
Footer is organized
Mobile design is clean
No cluttered sections appear
No random visual styles appear
```

## Mobile Checklist

Test on mobile widths.

Confirm:

```text
Header works
Mobile menu works
Hero text is readable
Book covers are visible
Cards stack cleanly
CTAs are easy to tap
Video embeds fit screen
No horizontal scrolling
Footer stacks cleanly
Forms, if any, are usable
```

## Performance Checklist

Confirm:

```text
Images are optimized
Homepage is not overloaded with video embeds
Unused assets are removed
No giant screenshots are loaded
No unnecessary dependencies are added
No large background videos are used
Static pages load quickly
No severe layout shift appears
```

## Security and Privacy Checklist

Confirm:

```text
No secrets are committed
No .env files are committed
No private contact information appears unless approved
External links use safe attributes where appropriate
No unnecessary tracking scripts are added
No analytics scripts are added without approval
```

## GitHub Checklist

Before push:

```text
git status reviewed
git diff reviewed
No unexpected file changes
No node_modules staged
No .next staged
No out staged unless explicitly approved
No .env staged
Commit message is clear
npm run build passes
```

Recommended commands:

```bash
git status
npm run build
git add -A
git commit -m "Prepare Eric Deloach author site for launch"
git push origin main
```

## Cloudflare Pages Checklist

Confirm Cloudflare settings:

```text
Repository connected
Production branch is main
Build command is npm run build
Output directory is out
Root directory is blank unless needed
Environment variables are not required for MVP
Deployment succeeds
```

## Cloudflare Preview QA

After deployment, confirm:

```text
Preview URL loads
Homepage loads
All approved pages load
Images load
Navigation works
Footer works
Retail links work
Social links work
Videos work, if verified
Sitemap loads
Robots loads
404 works
No placeholder content appears
```

## Production Domain Checklist

Before launch, confirm:

```text
Final domain is approved
Custom domain is connected in Cloudflare Pages
SSL is active
Canonical domain is selected
WWW or non-WWW strategy is clear
Alternate domain redirects are configured if needed
Metadata uses final domain
Schema uses final domain
Sitemap uses final domain
Robots uses final domain
No preview URLs remain
No placeholder [domain] remains
```

## Post-Launch Checklist

After launch, complete:

```text
Open homepage on final domain
Open every approved page on final domain
Check mobile layout
Check social sharing previews
Submit sitemap to Google Search Console
Submit sitemap to Bing Webmaster Tools
Inspect homepage URL
Inspect key book page URLs
Check Cloudflare Pages deployment status
Check for crawl or indexing issues
```

## Search Console Priority URLs

Inspect these first:

```text
/
/books
/books/rage-of-angels
/books/in-harms-way
/series/rage-of-angels
/about
/media
```

## Final Sign-Off Checklist

Do not launch until these are true:

```text
Content is approved
Book facts are verified or cautiously worded
Retail links are verified
Media links are verified
Author links are verified
No fake claims appear
No placeholder content appears
No broken links appear
Metadata is complete
Schema is valid
Sitemap is correct
Robots file is correct
Static export works
Cloudflare deployment works
Final domain works
```

## Most Important Instruction

Prelaunch QA protects the author’s credibility.

If a fact, link, image, video, review, event, price, or format is not verified, do not publish it as fact.

## Addition: The Forsaken Son: Trials of Grace Route

Classification:

```text
Early Standalone Work
```

Do not add to primary navigation. Do not feature in homepage priority sections. Do not connect to Rage of Angels or In Harm’s Way.

Add to the approved route checklist:

```text
/books/the-forsaken-son-trials-of-grace
```

Add to the trailing slash route checklist:

```text
/books/the-forsaken-son-trials-of-grace/
```

Add to the sitemap pages:

```text
/books/the-forsaken-son-trials-of-grace/
```

Page-specific QA checks:

```text
Book page loads
Book details are verified or omitted
No fake retailer links appear
No prices appear
No fake reviews appear
No fake ratings appear
No fake awards appear
No fake series relationship appears
No fake cover appears
No unverified audiobook, eBook, or hardcover claim appears
Books hub links to the page
Page links back to Books hub
Book schema uses verified fields only
FAQ schema matches visible FAQ
No em dashes appear in visible copy
```
