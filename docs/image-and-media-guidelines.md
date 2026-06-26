# Image and Media Guidelines

## Project

Eric Deloach Author Website

## Purpose of This Document

This document defines the image, video, media, file naming, accessibility, performance, and verification guidelines for the Eric Deloach author website.

Claude Code must follow these guidelines when adding book covers, author photos, trailer thumbnails, video embeds, social links, and other media assets.

## Primary Media Goal

Images and media should support:

```text
Author credibility
Book discovery
Reader engagement
Genre atmosphere
Trailer discovery
Retail conversion
Fast page performance
Accessible browsing
```

Images and media should never create confusion, fake claims, or unverified story details.

## Core Visual Direction

The website should feel:

```text
Cinematic
Dark
Mythological
Tactical
Professional
Book-focused
Reader-focused
High contrast
Atmospheric
```

The design should support two story lanes:

```text
Epic mythological fantasy through the Rage of Angels universe
Grounded military action through In Harm’s Way
```

## Primary Visual Worlds

## Rage of Angels Universe

Visual tone:

```text
Dark fantasy
Celestial warfare
Fire and shadow
Ancient mythology
Stormy skies
Divine conflict
Cosmic scale
Moral ambiguity
```

Suggested visual cues:

```text
Celestial light
Burning horizon
Dark clouds
Ancient symbols
Subtle flame
Shadowed atmosphere
Gold or ember accents
Deep blue or black sky tones
```

Avoid:

```text
Fake character portraits
Invented gods
Invented symbols
Overly bright cartoon fantasy
Religious imagery used carelessly
AI art that misrepresents the books
Images that imply story details not approved
```

## In Harm’s Way

Visual tone:

```text
Grounded
Tactical
Gritty
Military action
Cinematic
Steel and smoke
Brotherhood under pressure
Survival-driven
```

Suggested visual cues:

```text
Low light
Tactical shadows
Steel textures
Smoke
Command-room atmosphere
Field gear
Military silhouettes
Mission intensity
```

Avoid:

```text
Official military logos
Real branch seals
Unit patches
Fake endorsements
Exploitative violence
Weapon glamorization
Cartoon military styling
Overly polished patriotic stock imagery
Misleading real-world operation imagery
```

## Book Covers

Book covers are primary conversion assets.

Use the approved cover images for:

```text
Homepage Featured Books
Books page
Individual book pages
Series page
Retail sections
Open Graph images
Book schema image fields
```

## Required Book Cover Files

Recommended file names:

```text
rage-of-angels-book-cover.webp
ascension-path-to-polaris-book-cover.webp
sins-of-the-father-book-cover.webp
in-harms-way-book-cover.webp
```

Use WebP when possible.

Keep original source files in a clearly organized asset folder if provided.

## Book Cover Rules

Claude Code must:

```text
Use approved cover files only
Keep book covers clear and undistorted
Use correct aspect ratio
Use descriptive alt text
Avoid cropping important title or author text
Optimize file size
Use responsive image sizing
```

Claude Code must not:

```text
Recreate book covers
Alter book cover art
Change book cover colors
Add fake stickers or badges
Add fake bestseller tags
Add fake review quotes
Stretch or distort covers
Use placeholder covers on live pages
```

## Book Cover Alt Text

Use this pattern:

```text
Book cover for [Book Title] by Eric Deloach
```

Recommended alt text:

```text
Book cover for Rage of Angels by Eric Deloach
Book cover for Ascension: The Path to Polaris by Eric Deloach
Book cover for Sins of the Father by Eric Deloach
Book cover for In Harm’s Way by Eric Deloach
```

Do not keyword-stuff alt text.

## Author Portrait

Use only a verified and approved author portrait.

Recommended file name:

```text
eric-deloach-author-portrait.webp
```

Recommended alt text:

```text
Eric Deloach author portrait
```

Do not use a fake portrait.

Do not use AI-generated author images unless the client explicitly approves that approach.

Do not use an image pulled from social media unless usage is approved.

## Hero Image Strategy

The homepage hero may use one of these approaches:

```text
Book cover collage
Author portrait with book covers
Abstract cinematic background
Split-world visual showing fantasy and tactical action
Dark branded atmosphere with approved book covers
```

Preferred MVP approach:

```text
Use approved book covers and atmospheric design rather than invented character art.
```

Why:

```text
Book covers are accurate
The author brand stays clear
The site avoids inventing visual story details
The design remains professional and conversion-focused
```

## Homepage Hero Visual Direction

Recommended composition:

```text
Dark cinematic background
Eric Deloach author name as focal text
Book covers displayed clearly
Subtle mythological atmosphere on one side
Subtle tactical atmosphere on the other side
Strong CTA visibility
```

Avoid:

```text
Overcrowded hero graphics
Hard-to-read text
Fake character illustrations
Fake awards or badges
Stock imagery that looks unrelated to the books
```

## Series Page Images

For `/series/rage-of-angels`, use imagery that supports the fantasy universe without inventing lore.

Recommended assets:

```text
Rage of Angels book cover
Ascension book cover
Sins of the Father book cover
Approved series collage
Abstract celestial background
Trailer thumbnail, if verified
```

Do not create unapproved character art for Victor Mason, Astrius, Damon, the Anunnaki Gods, or any other character.

## In Harm’s Way Page Images

For `/books/in-harms-way`, use imagery that supports grounded military action without implying real-world endorsement.

Recommended assets:

```text
In Harm’s Way book cover
Approved trailer thumbnail
Abstract tactical background
Dark steel texture
Command-room style background
Character short thumbnails, if verified and approved
```

Avoid:

```text
Real Navy seals or logos
Official military insignia
Specific real unit patches
Real combat photos without rights
Images that imply true story status
Images that imply endorsement by the Navy or military
```

## Trailer Thumbnails

Use verified trailer thumbnails only when available and approved.

Recommended file names:

```text
rage-of-angels-trailer-thumbnail.webp
in-harms-way-trailer-thumbnail.webp
charlie-one-alpha-greg-esposito-short-thumbnail.webp
charlie-one-alpha-denton-haas-short-thumbnail.webp
charlie-one-alpha-casey-carter-short-thumbnail.webp
charlie-one-alpha-malice-collissimo-short-thumbnail.webp
```

If thumbnails are pulled from YouTube embeds, do not download and host them unless approved.

Preferred MVP approach:

```text
Use YouTube embeds or linked video cards with verified URLs.
```

## Video Embed Rules

All video embeds must be:

```text
Verified
Responsive
Accessible
Non-autoplay
Performance-conscious
Mobile friendly
Clearly labeled
```

Do not embed videos until exact URLs are verified.

Do not publish broken embeds.

Do not publish placeholder video cards unless the user approves public coming-soon messaging.

## Video Accessibility

Every iframe should have a descriptive title.

Good iframe titles:

```text
Rage of Angels trailer by Eric Deloach
In Harm’s Way promotional trailer by Eric Deloach
Charlie One Alpha Greg Esposito short
```

Avoid:

```text
Video
YouTube
Embed
Trailer
```

## Video Performance

Video embeds can slow down pages.

Recommended approach:

```text
Limit homepage embeds
Use lazy loading when possible
Use thumbnail-first cards when appropriate
Place larger video grids on the Media page
Avoid embedding too many Shorts on one page
```

Homepage recommendation:

```text
Use 1 to 2 primary embeds or thumbnail cards linking to /media.
```

Media page recommendation:

```text
Use a verified video grid with clear categories.
```

Book page recommendation:

```text
Use only book-specific videos.
```

## Video Data Requirements

Each video item should include:

```text
Title
Related book
Video URL
Embed URL
Source platform
Status
Thumbnail, if verified
Duration, if verified
Upload date, if verified
```

Recommended data file:

```text
src/data/videos.ts
```

Only publicly render videos with:

```text
status: "verified"
```

## Social Media Images

Do not scrape social media images for the website unless usage is approved.

Use social platform links for:

```text
YouTube
TikTok
Instagram
Facebook
Goodreads
Myth and Mayhem
```

Do not embed social posts unless exact post URLs are verified and approved.

## Goodreads Images and Reviews

Do not copy Goodreads reviews, reviewer names, ratings, or user-generated content unless verified and approved.

The site may link to Goodreads using:

```text
Follow on Goodreads
View on Goodreads
```

Do not republish reader content without approval.

## Retailer Images and Logos

Do not download or display retailer logos unless usage is approved and compliant with retailer brand rules.

Preferred MVP approach:

```text
Use text-based retailer buttons with consistent site styling.
```

Avoid:

```text
Scraped retailer logos
Low-resolution retailer badges
Fake official badges
Unapproved marketplace branding
```

## Image File Naming Rules

File names should be:

```text
Lowercase
Hyphen-separated
Descriptive
Short
SEO-friendly
Stable
```

Good examples:

```text
eric-deloach-author-portrait.webp
rage-of-angels-book-cover.webp
in-harms-way-book-cover.webp
rage-of-angels-trailer-thumbnail.webp
```

Bad examples:

```text
IMG_0032.jpg
BookCoverFinalFinal.png
rage angels cover NEW.jpg
in_harms_way.PNG
```

## Image Folder Structure

Recommended public image structure:

```text
public/images/
public/images/books/
public/images/author/
public/images/media/
public/images/backgrounds/
public/images/social/
```

Recommended mapping:

```text
Book covers → public/images/books/
Author portrait → public/images/author/
Trailer thumbnails → public/images/media/
Hero backgrounds → public/images/backgrounds/
Open Graph images → public/images/social/
```

## Recommended Image Inventory

## Book Covers

```text
public/images/books/rage-of-angels-book-cover.webp
public/images/books/ascension-path-to-polaris-book-cover.webp
public/images/books/sins-of-the-father-book-cover.webp
public/images/books/in-harms-way-book-cover.webp
```

## Author

```text
public/images/author/eric-deloach-author-portrait.webp
```

## Media

```text
public/images/media/rage-of-angels-trailer-thumbnail.webp
public/images/media/in-harms-way-trailer-thumbnail.webp
```

## Social

```text
public/images/social/eric-deloach-social-card.webp
public/images/social/rage-of-angels-social-card.webp
public/images/social/in-harms-way-social-card.webp
```

Only create files that correspond to actual approved image assets.

## Image Formats

Preferred image format:

```text
WebP
```

Acceptable formats:

```text
WebP
PNG
JPG
SVG for simple icons or logos, if approved
```

Avoid:

```text
Large uncompressed PNGs
Massive JPGs
Animated GIFs
Unoptimized screenshots
```

## Image Size Guidance

General guidance:

```text
Book covers should remain crisp
Hero images should be large enough for desktop
Thumbnails should be optimized for fast loading
Social images should meet platform preview requirements
```

Recommended social image size:

```text
1200 x 630 pixels
```

Recommended hero image ratio:

```text
16:9 or wide cinematic ratio
```

Recommended book cover handling:

```text
Preserve original cover aspect ratio
```

## Performance Rules

Images should be optimized for:

```text
Fast loading
Mobile performance
Low layout shift
Clear rendering
Search visibility
Accessibility
```

Use:

```text
Responsive image sizes
Lazy loading for non-critical images
Priority loading only for key hero images
Width and height attributes where practical
Optimized formats
```

Do not load large unused images.

## Next.js Image Notes

Because the site uses static export for Cloudflare Pages, confirm compatibility before using features that depend on server-side image optimization.

Static export rule:

```text
Use unoptimized image configuration if required for Cloudflare Pages static export.
```

Recommended check:

```text
Confirm next.config supports static export and image behavior.
```

Do not introduce runtime image dependencies that break `/out`.

## Alt Text Rules

Alt text should describe the image accurately.

Good alt text:

```text
Book cover for Rage of Angels by Eric Deloach
Eric Deloach author portrait
Book cover collage featuring Eric Deloach titles
```

Bad alt text:

```text
Best dark fantasy book author novel thriller buy now
Image
Graphic
Book
```

Decorative background images may use empty alt text if they are not meaningful content.

## Accessibility Rules

All meaningful images and media should support accessibility.

Requirements:

```text
Book covers have descriptive alt text
Author portrait has descriptive alt text
Video embeds have descriptive titles
Buttons have clear labels
Image-only links have accessible names
Decorative images are handled properly
Text over images has enough contrast
```

Do not place important text inside images unless it also appears as real HTML text.

## Text Over Image Rules

If using text over hero images:

```text
Ensure strong contrast
Use overlay gradients if needed
Keep text selectable as HTML
Avoid placing text only in image files
Test on mobile
```

Do not use busy backgrounds behind important copy.

## Visual Consistency

Images should share a consistent treatment.

Recommended style:

```text
Dark backgrounds
Cinematic lighting
Subtle texture
High contrast
Book covers as focal points
Consistent border radius
Consistent shadow treatment
Consistent spacing
```

Avoid mixing unrelated visual styles, such as:

```text
Cartoon art
Bright stock photos
Random AI fantasy scenes
Corporate business imagery
Unrelated military stock photos
Low-quality screenshots
```

## AI-Generated Image Rules

AI-generated imagery may be used only if approved.

If AI-generated images are used, they must:

```text
Support the approved visual direction
Avoid fake characters unless approved
Avoid fake military insignia
Avoid fake book cover text
Avoid misleading realism
Avoid incorrect anatomy or artifacts
Avoid visual claims not in the story
```

Do not use AI-generated images to represent Eric Deloach unless explicitly approved.

Do not use AI-generated book covers unless the client approves replacement or supplemental art.

## Book Trailer and Shorts Strategy

Priority media:

```text
Rage of Angels trailer
In Harm’s Way promotional trailer
Charlie One Alpha character shorts
```

Placement:

```text
Homepage media section
Media page
Relevant book pages
Rage of Angels series page
```

Do not embed unverified videos.

## Character Shorts Strategy

Approved character short slots:

```text
Chief Petty Officer Greg Esposito
Petty Officer 1st Class Denton Haas
CTO1 Casey Carter
CTOCS Malice Collissimo
```

Do not add unapproved characters.

Do not invent dialogue, captions, or character details.

## Open Graph Image Strategy

Each major page should have a social preview image when possible.

Recommended mapping:

```text
Home → site-level author or book collage image
About → author portrait, if approved
Books → book cover grid
Rage of Angels → Rage of Angels cover
Ascension → Ascension cover
Sins of the Father → Sins of the Father cover
In Harm’s Way → In Harm’s Way cover
Rage of Angels Series → series collage or Rage of Angels cover
Media → trailer thumbnail or media collage
Reviews → site-level image
Events → site-level image
Contact → site-level image
```

Do not use missing image paths in metadata.

## Media Verification Checklist

Before publishing any media, verify:

```text
Asset exists
Asset has usage approval
File name is clean
File path is correct
Image is optimized
Alt text is written
Video URL is verified
Embed URL is correct
No placeholder media appears
No broken image appears
No distorted image appears
No fake logos appear
No fake claims appear
```

## Media Data Files

Recommended data files:

```text
src/data/books.ts
src/data/videos.ts
src/data/socialLinks.ts
src/data/media.ts
```

Book image fields may include:

```text
coverImage
coverAlt
ogImage
```

Video fields may include:

```text
title
description
url
embedUrl
thumbnail
thumbnailAlt
duration
status
relatedBook
```

Social fields may include:

```text
platform
label
url
handle
status
```

Only render verified public assets.

## Missing Asset Handling

If an asset is missing:

```text
Do not render broken images
Do not render fake placeholders on live pages
Do not publish visible TODO text
Use a safe layout fallback if approved
```

Acceptable internal code note:

```text
// TODO: Add approved book cover for Ascension.
```

Unacceptable live page output:

```text
Image coming soon
TODO add image
Missing cover
```

unless the client explicitly approves public placeholder copy.

## Image Credits

If an image requires credit, include credit only as required and approved.

Do not add random credits or fake credits.

Do not remove required credits from licensed media.

## Copyright and Rights Rules

Do not use images unless one of these is true:

```text
The image was provided by the client
The image is owned by the author or project
The image is properly licensed
The image is public and permitted for the intended use
The image is generated and approved for use
```

Do not use scraped images from retailers, social platforms, or websites unless permission and usage rights are clear.

## Media Page Image Rules

The `/media` page may use:

```text
Verified video embeds
Verified trailer thumbnails
Approved book covers
Approved author image
Approved social links
```

The media page must not use:

```text
Unverified video thumbnails
Fake video cards
Fake upload dates
Fake view counts
Fake platform badges
Unapproved social screenshots
```

## Social Link Icons

If using icons:

```text
Use a reliable icon library already included in the project
Keep icon styling consistent
Use accessible labels
Do not rely on icons alone
```

Do not add a new dependency just for icons unless approved.

Text labels are acceptable and preferred for MVP.

## Visual QA Checklist

Before launch, confirm:

```text
All book covers display correctly
No book cover is distorted
Author image is approved
No fake author image appears
All meaningful images have alt text
Decorative images are handled properly
Hero text is readable
Mobile image layouts work
No broken image paths exist
No placeholder images appear
Social images exist if referenced
Open Graph image paths work
No unapproved logos appear
No fake awards or badges appear
No unverified military imagery appears
```

## Video QA Checklist

Before launch, confirm:

```text
All video URLs are verified
All embeds load correctly
No placeholder embeds appear
No visible TODO text appears
Iframes have descriptive titles
Videos are responsive
Videos do not autoplay
Homepage is not overloaded with embeds
Media page links back to books
Book pages show only relevant videos
Video schema uses verified fields only
```

## Performance QA Checklist

Before launch, confirm:

```text
Images are optimized
Large images are not overused
Non-critical images lazy load
Hero image does not cause major layout shift
Video embeds do not slow the homepage unnecessarily
Static export works
/out folder is generated
No server-side image optimization dependency breaks export
```

## Build Rules for Claude Code

Claude Code must:

```text
Use approved assets only
Use clean file names
Use descriptive alt text
Optimize images
Use verified video URLs only
Keep embeds responsive
Use accessible iframe titles
Avoid placeholder media
Keep static export compatibility
Preserve no em dash rule in visible copy
```

Claude Code must not:

```text
Invent media assets
Invent video URLs
Invent trailer thumbnails
Invent social images
Invent author portraits
Alter book covers
Use fake badges
Use fake reviews on images
Use unapproved military logos
Use broken placeholder images
Publish visible TODO text
Use em dashes in website copy
```

## Most Important Instruction

Images and media must make the books easier to understand and trust.

Use approved book covers, verified videos, approved social links, and accurate visual direction.

Do not invent visual facts.
