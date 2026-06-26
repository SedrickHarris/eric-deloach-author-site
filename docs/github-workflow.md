# GitHub Workflow

## Project

Eric Deloach Author Website

## Purpose of This Document

This document defines the GitHub workflow for the Eric Deloach author website.

The workflow is designed for a static Next.js site built locally in VS Code, assisted by Claude Code, committed to GitHub, and deployed through Cloudflare Pages.

Claude Code must follow this workflow unless the user explicitly approves a different process.

## Primary Workflow Goal

The GitHub workflow should keep the project:

```text
Organized
Version controlled
Easy to deploy
Easy to review
Easy to roll back
Safe for content lock
Safe for static export
Cloudflare Pages-ready
```

## Repository Name

Approved GitHub repository name:

```text
eric-deloach-author-site
```

## Local Project Folder

Approved local folder:

```text
C:\Users\Welcome\Desktop\client-sites\eric-deloach-author-site
```

## Production Branch

Use:

```text
main
```

as the production branch.

Cloudflare Pages should deploy from:

```text
main
```

## Recommended Workflow Overview

Use this workflow:

```text
1. Work locally in VS Code
2. Use Claude Project for research, content planning, and locked build prompts
3. Use Claude Code for implementation
4. Build locally with npm run build
5. Confirm /out is generated
6. Review changed files
7. Commit to Git
8. Push to GitHub
9. Let Cloudflare Pages deploy from GitHub
10. QA the Cloudflare preview or production deployment
```

## Claude Project Role

Claude Project is responsible for:

```text
Research
Source review
Content planning
Content lock
Build prompts
Page strategy
SEO and AEO planning
Schema planning
Metadata planning
Do-not-invent rules
```

Claude Project should not directly build the site.

## Claude Code Role

Claude Code is responsible for:

```text
Implementing approved build prompts
Creating files
Editing code
Creating components
Building pages
Applying design direction
Maintaining static export compatibility
Running local checks
Preparing commits
```

Claude Code must not change approved content unless explicitly instructed.

## Content Lock Rule

Approved copy, slugs, metadata, schema, book facts, retailer rules, media rules, and page structure must be treated as locked.

Claude Code may adjust:

```text
Layout
Spacing
Component organization
Responsive behavior
Accessibility
Performance
Static export compatibility
```

Claude Code must not adjust:

```text
Approved copy
Approved headlines
Approved CTAs
Approved page slugs
Approved metadata
Approved schema facts
Approved book facts
Approved character details
Approved retailer rules
Approved media rules
```

## Recommended Branch Strategy

For MVP, keep the workflow simple.

Recommended approach:

```text
main for approved work
feature branches only when needed
```

Optional feature branch pattern:

```text
feature/homepage
feature/book-pages
feature/media-page
feature/static-export
feature/design-polish
```

For simple solo builds, direct commits to `main` are acceptable if local build checks pass before push.

## When to Use a Feature Branch

Use a feature branch when:

```text
The change is large
The change affects many files
The change needs review before production
The build may be unstable
The work is experimental
```

Example:

```bash
git checkout -b feature/homepage-build
```

## When Direct Commits to Main Are Acceptable

Direct commits to `main` are acceptable when:

```text
The scope is clear
The work follows an approved build prompt
The local build passes
The change does not include experimental work
The user wants fast progress
```

## Initial Repository Setup

From the approved local folder:

```bash
cd C:\Users\Welcome\Desktop\client-sites\eric-deloach-author-site
git init
git branch -M main
```

Add the GitHub remote:

```bash
git remote add origin https://github.com/SedrickHarris/eric-deloach-author-site.git
```

If the repository already exists locally, confirm remote:

```bash
git remote -v
```

## Recommended First Commit

After the scaffold, docs, and configuration are ready:

```bash
git status
git add -A
git commit -m "Initial Eric Deloach author site scaffold"
git push -u origin main
```

## Recommended Commit Flow

Before every commit:

```bash
git status
npm run build
```

If the build passes:

```bash
git add -A
git commit -m "Describe the completed change"
git push origin main
```

## Commit Message Style

Use clear commit messages.

Good examples:

```text
Add project documentation and content rules
Configure Next.js static export for Cloudflare Pages
Build homepage sections
Add book pages and retailer data structure
Add Rage of Angels series page
Add media page and social links
Add metadata and schema helpers
Polish responsive layout and accessibility
```

Bad examples:

```text
update
fix stuff
changes
final
new
work
```

## Commit Message Pattern

Recommended pattern:

```text
Verb + specific work completed
```

Examples:

```text
Add homepage content sections
Create book data and BookCard component
Configure Cloudflare Pages static export
Fix mobile navigation spacing
```

## Build Before Commit Rule

Before pushing to GitHub, run:

```bash
npm run build
```

Required result:

```text
Build succeeds
/out folder is generated
No TypeScript errors block build
No static export errors appear
No missing image errors appear
```

Do not push broken builds unless the user explicitly asks to save work in progress.

## Lint Rule

If lint is configured, run:

```bash
npm run lint
```

If lint is not configured or the command differs, use the configured project command.

Do not block the entire workflow on a missing lint script. Fix the script or document that lint is not configured yet.

## Git Status Rule

Use:

```bash
git status
```

before committing.

Check for:

```text
Unexpected deleted files
Untracked assets
Accidental /out commit
Accidental .env files
Accidental screenshots
Accidental placeholder files
```

## Gitignore Requirements

Recommended `.gitignore` entries:

```gitignore
node_modules
.next
out
.env
.env.local
.DS_Store
```

Do not commit:

```text
node_modules
.next
out
.env
.env.local
Large unused screenshots
Unapproved media assets
```

## Out Folder Rule

The `/out` folder is generated by:

```bash
npm run build
```

Do not manually edit `/out`.

Do not treat `/out` as source code.

Do not commit `/out` unless the deployment strategy explicitly changes.

Cloudflare Pages should build the site and deploy the generated `out` folder.

## Documentation Workflow

Project docs should live in:

```text
docs/
```

Core root docs should include:

```text
README.md
CLAUDE.md
```

Docs may include:

```text
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

Do not delete docs without explicit approval.

## Asset Workflow

Approved assets should be stored under:

```text
public/images/
```

Recommended folders:

```text
public/images/books/
public/images/author/
public/images/backgrounds/
public/images/media/
public/images/social/
```

Before committing assets, confirm:

```text
File names are clean
Assets are approved
Images are optimized
Book covers are not distorted
No random screenshots are included
No unapproved retailer logos are included
No fake author images are included
```

## Book Cover Asset Rule

Approved book cover file names:

```text
rage-of-angels-book-cover.webp
ascension-path-to-polaris-book-cover.webp
sins-of-the-father-book-cover.webp
in-harms-way-book-cover.webp
```

Do not rename book cover assets after pages reference them unless all references are updated.

## Environment File Rule

Do not commit:

```text
.env
.env.local
```

The MVP should not require private environment variables.

If future public environment variables are needed, document them clearly and keep secrets out of public variables.

## Large File Rule

Do not commit unnecessary large files.

Avoid committing:

```text
Raw video files
Large PSD files
Large uncompressed images
Screen recordings
Unused downloads
Duplicate image exports
```

Use optimized assets for the website.

## Source of Truth Rule

Source files are the source of truth.

Primary source folders:

```text
src/
public/
docs/
```

Generated folders are not source of truth:

```text
.next
out
```

## Cloudflare Deployment Trigger

Cloudflare Pages should deploy when changes are pushed to:

```text
main
```

Every push to `main` may create a production deployment depending on Cloudflare settings.

Do not push unreviewed broken work to `main` if Cloudflare is connected to production.

## Preview Branch Workflow

If using branches:

```bash
git checkout -b feature/media-page
git add -A
git commit -m "Add media page structure"
git push origin feature/media-page
```

Cloudflare may create a preview deployment for the branch.

After review:

```bash
git checkout main
git merge feature/media-page
git push origin main
```

Use this approach for larger or riskier changes.

## Pull Request Workflow

If using pull requests:

```text
Create feature branch
Push branch to GitHub
Open pull request
Review files changed
Confirm build status
Merge to main
Verify Cloudflare deployment
```

Pull requests are optional for this solo workflow but helpful for review and rollback.

## File Review Before Commit

Before committing, review:

```bash
git diff
```

Check for:

```text
Unexpected content changes
Approved copy accidentally rewritten
Approved slugs changed
Metadata changed without approval
Schema facts added without verification
Retail links guessed or invented
Video URLs guessed or invented
Visible placeholder content
```

## Content Lock Review

Before committing any page build, confirm:

```text
Approved copy is preserved
Approved CTAs are preserved
Approved slugs are preserved
Approved book facts are preserved
Approved character details are preserved
No em dashes were added to visible copy
No invented facts were added
```

## Retail Link Review

Before committing retailer links, confirm:

```text
Every visible retailer button has a verified URL
No href="#" values exist
No empty href values exist
No fake prices appear
No unverified format claims appear
Goodreads is treated as discovery, not direct purchase
```

## Media Link Review

Before committing media sections, confirm:

```text
Every embedded video URL is verified
No placeholder video embeds appear
No fake upload dates appear
No fake durations appear
No broken thumbnails appear
No unapproved social embeds appear
```

## Schema Review

Before committing schema work, confirm:

```text
Schema uses verified fields only
No fake reviews appear
No fake ratings appear
No fake prices appear
No fake offers appear
No fake events appear
FAQ schema matches visible FAQs
Schema URLs use configurable final domain
```

## Metadata Review

Before committing metadata work, confirm:

```text
Each page has unique metadata
No fake claims appear
No em dashes appear
Canonical URLs match approved slugs
No preview domain is hard-coded as final domain
No placeholder domain remains for launch builds
```

## Recommended Build Phase Commits

Use phased commits to keep history clean.

## Phase 1: Scaffold and Config

Commit message:

```text
Configure Next.js static export scaffold
```

Includes:

```text
Next.js app setup
TypeScript
next.config.ts
package scripts
Base styles
Static export settings
```

## Phase 2: Project Docs

Commit message:

```text
Add Eric Deloach project documentation
```

Includes:

```text
README
CLAUDE
Project docs
Content lock rules
Do-not-invent rules
Architecture plans
```

## Phase 3: Data and Components

Commit message:

```text
Add core data files and reusable components
```

Includes:

```text
Book data
Navigation data
Social data
Retailer data
Layout components
Card components
CTA components
```

## Phase 4: Core Pages

Commit message:

```text
Build core author and book pages
```

Includes:

```text
Homepage
Books page
Rage of Angels page
In Harm’s Way page
About page
Series page
```

## Phase 5: Supporting Pages

Commit message:

```text
Add media reviews events and contact pages
```

Includes:

```text
Media page
Reviews page
Events page
Contact page
404 page
```

## Phase 6: SEO and Deployment

Commit message:

```text
Add metadata schema sitemap and deployment files
```

Includes:

```text
Metadata helpers
Schema helpers
Sitemap
Robots file
Favicon
Final static export QA
```

## Phase 7: Polish and QA

Commit message:

```text
Polish responsive layout and launch QA
```

Includes:

```text
Responsive fixes
Accessibility fixes
Image optimization
Link QA
Final build verification
```

## Rollback Workflow

If a commit causes issues, first inspect the history:

```bash
git log --oneline
```

To undo a commit safely with history preserved:

```bash
git revert <commit-hash>
```

Avoid destructive reset commands unless the user explicitly approves and understands the impact.

## Safe Recovery Commands

Check current state:

```bash
git status
```

View recent commits:

```bash
git log --oneline -5
```

Discard changes in one file only:

```bash
git checkout -- path/to/file
```

Use with caution.

## Do Not Use Without Approval

Do not use destructive commands without explicit approval:

```bash
git reset --hard
git clean -fd
git push --force
```

These can permanently remove work or rewrite history.

## GitHub Repository Settings

Recommended repository settings:

```text
Default branch: main
Repository visibility: as approved by user
Branch protection: optional for MVP
Issues: optional
Pull requests: optional
Actions: optional unless needed
```

## README Requirements

Root `README.md` should include:

```text
Project name
Purpose
Tech stack
Local setup
Build command
Cloudflare Pages settings
Approved routes
Content lock reminder
Do-not-invent reminder
```

## CLAUDE Requirements

Root `CLAUDE.md` should include:

```text
Project role
Content lock rules
Do-not-invent rules
Approved stack
Approved routes
Static export requirements
No em dash rule
Retailer verification rules
Media verification rules
Schema verification rules
```

Claude Code should read `CLAUDE.md` before implementation.

## GitHub and Cloudflare Connection

Cloudflare Pages should connect directly to the GitHub repository.

Deployment settings:

```text
Repository: eric-deloach-author-site
Branch: main
Build command: npm run build
Output directory: out
```

After connection, every pushed commit to `main` can trigger a deployment.

## Release Tagging

Optional release tags may be used after launch.

Example:

```bash
git tag v1.0.0
git push origin v1.0.0
```

Suggested tag:

```text
v1.0.0
```

Use after the first approved production launch.

## Launch Version Rule

Before tagging launch, confirm:

```text
Final domain works
All pages load
All metadata uses final domain
Sitemap uses final domain
Robots uses final domain
Retail links are verified
Media links are verified
No placeholder content appears
Static export works
```

## Issue Tracking

If using GitHub Issues, suggested labels:

```text
content
design
seo
schema
media
retailer-links
bug
enhancement
launch
```

Optional issues:

```text
Verify all retailer links
Confirm final production domain
Add final author portrait
Add verified book trailer URLs
Submit sitemap after launch
```

## GitHub Workflow QA Checklist

Before each push, confirm:

```text
git status reviewed
git diff reviewed
No unexpected file changes
No .env files staged
No /out folder staged
No node_modules staged
No unapproved assets staged
Approved copy preserved
No em dashes added to visible copy
npm run build passes
/out is generated locally
Commit message is clear
```

## Deployment Trigger QA Checklist

After push to GitHub, confirm:

```text
GitHub push succeeds
Cloudflare Pages build starts
Cloudflare Pages build succeeds
Preview or production URL loads
No deployment errors appear
Key pages load
No broken image paths appear
No broken internal links appear
```

## Most Important Instruction

GitHub is the source of truth for the deployed site.

Every change should be committed cleanly, pushed intentionally, and verified through Cloudflare Pages.

Do not push broken builds, invented content, fake links, or unapproved changes.
