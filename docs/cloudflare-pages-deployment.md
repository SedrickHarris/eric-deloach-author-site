# Cloudflare Pages Deployment

## Project

Eric Deloach Author Website

## Purpose of This Document

This document defines the Cloudflare Pages deployment plan for the Eric Deloach author website.

The site will be built with Next.js static export and deployed to Cloudflare Pages from GitHub.

Claude Code must preserve static export compatibility and ensure the project builds to the `/out` folder.

## Primary Deployment Goal

The deployment should be:

```text
Simple
Static
Reliable
Repeatable
GitHub-connected
Cloudflare Pages-ready
Easy to QA
Easy to launch
```

## Hosting Platform

Approved hosting platform:

```text
Cloudflare Pages
```

## Repository

Approved GitHub repository name:

```text
eric-deloach-author-site
```

## Local Project Folder

Approved local folder:

```text
C:\Users\Welcome\Desktop\client-sites\eric-deloach-author-site
```

## Deployment Type

Approved deployment type:

```text
Static Next.js export
```

The site must generate:

```text
out
```

as the final build output directory.

## Cloudflare Pages Build Settings

Use the following Cloudflare Pages settings:

```text
Framework preset: Next.js Static HTML Export
Build command: npm run build
Build output directory: out
Production branch: main
```

## Why These Settings Matter

Cloudflare Pages serves the contents of the configured build output directory.

For this project, Next.js must generate the static site into:

```text
out
```

Cloudflare Pages must then deploy that folder.

If the output directory is wrong, the deployment may build successfully but fail to publish the site.

## Next.js Static Export Requirement

The project must include this configuration:

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

Expected file:

```text
next.config.ts
```

## Package Build Script

The project should include:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

If the project uses a newer ESLint configuration where `next lint` is not supported, use the configured ESLint command.

Do not change the build command away from:

```text
npm run build
```

unless the deployment strategy changes.

## GitHub Deployment Flow

Recommended deployment flow:

```text
1. Build the project locally
2. Confirm /out is generated
3. Commit all source files
4. Push to GitHub
5. Connect GitHub repository to Cloudflare Pages
6. Configure build settings
7. Deploy preview
8. QA preview deployment
9. Add production domain when ready
10. Final launch QA
```

## Local Build Check

Before pushing to GitHub, run:

```bash
npm install
npm run build
```

Expected result:

```text
Build completes successfully
/out folder is generated
No TypeScript errors block the build
No missing image errors appear
No unsupported static export errors appear
```

## Expected Output Files

After `npm run build`, confirm these files exist:

```text
out/index.html
out/about/index.html
out/books/index.html
out/books/rage-of-angels/index.html
out/books/ascension-the-path-to-polaris/index.html
out/books/sins-of-the-father/index.html
out/books/in-harms-way/index.html
out/series/rage-of-angels/index.html
out/media/index.html
out/reviews/index.html
out/events/index.html
out/contact/index.html
out/404.html
```

Also confirm:

```text
out/robots.txt
out/sitemap.xml
out/favicon.ico
out/images/
```

## GitHub Push Requirements

Before deployment, confirm:

```text
Code is committed
README.md exists
CLAUDE.md exists
next.config.ts exists
package.json exists
All approved page routes exist
No required files are ignored accidentally
No .env files are committed
/out is not committed unless specifically required
```

## Recommended Git Commands

From the local project folder:

```bash
git status
git add -A
git commit -m "Prepare Eric Deloach author site for Cloudflare Pages"
git push origin main
```

Use a more specific commit message if the work is part of a larger build phase.

## Cloudflare Pages Project Setup

In Cloudflare:

```text
1. Go to Workers & Pages
2. Create a new Pages project
3. Connect to Git
4. Select the GitHub repository
5. Choose eric-deloach-author-site
6. Set production branch to main
7. Configure build settings
8. Deploy
```

## Cloudflare Build Configuration

Use:

```text
Framework preset: Next.js Static HTML Export
Build command: npm run build
Build output directory: out
Root directory: leave blank unless repo structure requires otherwise
Environment variables: none required for MVP
```

## Root Directory Rule

If the repository root contains the Next.js app, leave the root directory blank.

Only set a root directory if the Next.js app is inside a subfolder.

Expected repo structure:

```text
eric-deloach-author-site/
├── package.json
├── next.config.ts
├── src/
└── public/
```

For this structure, Cloudflare root directory should remain blank.

## Environment Variables

The MVP should not require environment variables.

Do not add secrets to Cloudflare Pages unless a future approved feature needs them.

Do not expose private values with:

```text
NEXT_PUBLIC_*
```

unless the value is safe for public browser access.

## Production Branch

Use:

```text
main
```

as the production branch.

Do not deploy from experimental branches unless intentionally testing.

## Preview Deployments

Cloudflare Pages can create preview deployments for branches and pull requests.

Use preview deployments to check:

```text
Design
Mobile layout
Book pages
Media page
Internal links
Image paths
Retail buttons
Social links
Metadata
Sitemap
Robots file
```

Do not treat a preview URL as the final production domain.

## Preview Deployment QA

After Cloudflare generates a preview URL, test:

```text
Homepage loads
About page loads
Books page loads
Each book page loads
Rage of Angels series page loads
Media page loads
Reviews page loads
Events page loads
Contact page loads
404 page works
Images load
Navigation works
Footer works
External links work
No placeholder content appears
No visible TODO text appears
```

## Approved Pages to Test

Test every approved route:

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

If trailing slashes are not used in final config, update this checklist to match the final route behavior.

## Custom Domain Setup

When the final domain is approved, add it through the Cloudflare Pages project.

Recommended steps:

```text
1. Open Cloudflare dashboard
2. Go to Workers & Pages
3. Select the Eric Deloach Pages project
4. Open Custom domains
5. Select Set up a domain
6. Enter the approved domain
7. Follow Cloudflare DNS instructions
8. Wait for validation
9. Confirm the site loads on the production domain
```

## Domain Status

Final production domain:

```text
Pending confirmation
```

Do not hard-code a final domain until it is confirmed.

## Domain Placeholder Rule

Use this placeholder in docs and planning files:

```text
https://[domain]
```

Before launch, replace `[domain]` in:

```text
sitemap.xml
robots.txt
metadata
Open Graph URLs
schema URLs
canonical URLs
social image URLs
```

## DNS Notes

If the domain is already managed in Cloudflare, Cloudflare Pages can usually configure the needed records through the custom domain setup flow.

If the domain is managed outside Cloudflare, follow the DNS instructions Cloudflare provides during custom domain setup.

Do not guess DNS records.

## WWW and Root Domain Strategy

Decide the preferred canonical domain before launch.

Options:

```text
https://example.com
https://www.example.com
```

Recommended approach:

```text
Choose one canonical domain
Redirect the alternate version to the canonical version when configured
Use the canonical domain consistently in metadata, schema, sitemap, and robots.txt
```

Do not publish mixed canonical URLs.

## Canonical URL Update

After final domain confirmation, update canonical URLs across the site.

Examples:

```text
https://[domain]/
https://[domain]/about/
https://[domain]/books/
https://[domain]/books/rage-of-angels/
https://[domain]/books/in-harms-way/
```

Use the final trailing slash behavior consistently.

## Sitemap Update

Before launch, update:

```text
public/sitemap.xml
```

with the final production domain.

Initial sitemap should include:

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

Do not include unbuilt optional pages.

## Robots Update

Before launch, update:

```text
public/robots.txt
```

Recommended production robots file:

```txt
User-agent: *
Allow: /

Sitemap: https://[domain]/sitemap.xml
```

Replace `[domain]` with the final domain.

## Favicon Check

Confirm:

```text
public/favicon.ico
```

exists and loads after deployment.

Do not reference a missing favicon.

## Image Path Check

All public images should live under:

```text
public/images/
```

Expected image categories:

```text
public/images/books/
public/images/author/
public/images/backgrounds/
public/images/media/
public/images/social/
```

After deployment, confirm book covers and author images load from the production site.

## External Link Check

Verify all external links after deployment.

Priority links:

```text
Amazon
Apple Books
Google Play Books
Barnes & Noble
Goodreads
YouTube
TikTok
Instagram
Facebook
Myth and Mayhem
Booktopia
Indigo / Kobo
ThriftBooks
BookScouter
```

Only publish links that are verified and approved.

## Retail Button Check

Retail buttons must not use:

```text
href="#"
href=""
href="/"
```

Every visible retailer button must point to a verified URL.

## Video Embed Check

Video embeds must use verified URLs only.

Confirm:

```text
Rage of Angels trailer loads, if verified
In Harm’s Way trailer loads, if verified
Charlie One Alpha Shorts load, if verified
No placeholder embeds appear
No broken iframe appears
```

If a video URL is not verified, do not render it.

## Contact Form Check

Do not deploy a fake contact form.

Approved static-safe options:

```text
External form provider
Approved mailto link
Approved embedded form
No form until workflow is approved
```

Do not use an API route contact form for this static MVP.

## Newsletter Check

Do not deploy a fake newsletter signup.

Approved static-safe options:

```text
External newsletter provider
Approved embedded signup form
Approved external signup link
Omit newsletter section until provider is approved
```

## Cloudflare Pages Functions Rule

Do not add Cloudflare Pages Functions unless explicitly approved.

The MVP should remain a simple static site.

If a future contact form or newsletter feature needs server logic, create a separate plan.

## Redirects

Do not add redirect behavior unless approved.

If redirects are needed, create a separate redirect plan for:

```text
Old site URLs
Myth and Mayhem paths
Non-www to www
www to non-www
HTTP to HTTPS
Legacy book URLs
```

Do not guess redirect requirements.

## Headers

Do not add custom security headers unless approved.

If custom headers are needed, document them separately and implement with Cloudflare-compatible methods.

## Analytics

Do not add analytics unless approved.

Possible future analytics tools:

```text
Google Analytics 4
Google Tag Manager
Cloudflare Web Analytics
Google Search Console
Bing Webmaster Tools
```

Do not add tracking scripts without approval.

## Search Console and Webmaster Setup

After the final domain is live, recommended future setup:

```text
Google Search Console
Bing Webmaster Tools
Sitemap submission
Indexing inspection
Performance monitoring
```

Do this only after the production domain is confirmed.

## Deployment Rollback

If a deployment fails or introduces issues:

```text
Use Cloudflare Pages deployment history to review prior deployments
Roll back to the last known good deployment if needed
Fix the source issue in GitHub
Push a new corrected commit
Run QA again
```

Do not patch live output manually.

## Common Deployment Issues

## Issue: Output Directory Not Found

Likely causes:

```text
next.config.ts missing output: "export"
Build command failed before generating /out
Cloudflare output directory is set incorrectly
Project root directory is set incorrectly
```

Fix:

```text
Confirm next.config.ts
Run npm run build locally
Confirm /out exists
Set Cloudflare output directory to out
Confirm root directory setting
```

## Issue: Images Missing

Likely causes:

```text
Wrong image path
Image file not committed
Case mismatch in file name
Image stored outside public
Book cover referenced before asset exists
```

Fix:

```text
Confirm image exists in public/images
Confirm exact file name casing
Confirm src path starts from /images/
Rebuild and redeploy
```

## Issue: Page 404s

Likely causes:

```text
Route folder missing
Slug mismatch
Link points to unapproved path
Trailing slash mismatch
Build did not generate route
```

Fix:

```text
Confirm route exists in src/app
Confirm approved slug
Confirm output file exists in /out
Update broken internal link
Rebuild and redeploy
```

## Issue: Metadata Uses Preview Domain

Likely causes:

```text
Final domain not configured in site data
Canonical helper still uses preview URL
Sitemap still uses placeholder
Robots still uses placeholder
```

Fix:

```text
Update siteUrl in src/data/site.ts
Update sitemap.xml
Update robots.txt
Rebuild and redeploy
Retest source output
```

## Issue: Video Embeds Broken

Likely causes:

```text
Unverified YouTube URL
Wrong embed URL format
Private or unavailable video
Placeholder video ID
```

Fix:

```text
Verify exact public video URL
Convert to valid embed URL
Update src/data/videos.ts
Render only status: verified
Rebuild and redeploy
```

## Deployment QA Checklist

Before first Cloudflare deployment, confirm:

```text
next.config.ts uses output: "export"
images.unoptimized is true
npm run build succeeds locally
/out is generated locally
All approved routes generate output
No unapproved routes are built
No visible TODO text appears
No placeholder media appears
No fake forms appear
No fake retailer links appear
No broken internal links appear
```

## Preview Deployment QA Checklist

After preview deployment, confirm:

```text
Preview URL loads
Homepage loads
Navigation works
Mobile menu works
Footer links work
Book pages load
Series page loads
Media page loads
Reviews page loads
Events page loads
Contact page loads
404 page works
Images load
Videos load only if verified
Retail links work
Social links work
Metadata appears in page source
Schema appears in page source
Sitemap loads
Robots file loads
```

## Production Launch QA Checklist

Before final launch, confirm:

```text
Final domain is connected
SSL is active
Homepage loads on final domain
All approved routes load on final domain
Canonical URLs use final domain
Open Graph URLs use final domain
Schema URLs use final domain
Sitemap uses final domain
Robots.txt uses final domain
No preview URLs remain
No placeholder domain remains
All external links work
All images load
All videos work, if verified
No fake reviews appear
No fake events appear
No fake awards appear
No fake pricing appears
No em dashes appear in visible website copy
```

## Post-Launch Checks

After launch:

```text
Submit sitemap to Google Search Console
Submit sitemap to Bing Webmaster Tools
Inspect homepage URL
Inspect key book URLs
Check Cloudflare deployment status
Check mobile rendering
Check social preview cards
Check 404 behavior
Check performance
```

Only complete Search Console and Bing setup after the final domain is confirmed.

## Deployment Rules for Claude Code

Claude Code must:

```text
Preserve static export setup
Preserve /out output requirement
Use approved routes only
Use verified links only
Avoid server-required functionality
Avoid fake forms
Avoid placeholder content
Keep metadata domain configurable
Keep sitemap and robots ready for final domain
```

Claude Code must not:

```text
Change hosting target without approval
Remove output: "export"
Use API routes for MVP
Use server actions
Use runtime redirects
Use runtime headers
Use unverified custom domain values
Hard-code preview URLs as final URLs
Publish broken links
Publish visible TODO text
Use em dashes in visible copy
```

## Most Important Instruction

Cloudflare Pages must deploy the static output from:

```text
out
```

The build must be repeatable from GitHub using:

```text
npm run build
```

If the project does not generate `/out`, it is not ready for Cloudflare Pages deployment.

## Addition: The Forsaken Son: Trials of Grace Route

Classification:

```text
Early Standalone Work
```

Do not add to primary navigation. Do not connect to Rage of Angels or In Harm’s Way.

Add to the expected output files:

```text
out/books/the-forsaken-son-trials-of-grace/index.html
```

Add to the approved pages to test:

```text
/books/the-forsaken-son-trials-of-grace/
```

Add to the sitemap:

```text
https://[domain]/books/the-forsaken-son-trials-of-grace/
```

Deployment QA: confirm the page loads on the preview and production deployments, appears in the sitemap, has no placeholder retailer links, and shows no fake series connection.
