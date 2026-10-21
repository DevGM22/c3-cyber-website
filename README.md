# C3 Cyber Operations website

Public marketing website for C3 Cyber Operations and the Cyber Security Maturity Model (CSMM).

## Local preview

Serve this directory with any static HTTP server, then open `index.html`.

## Boundaries

- The interactive walkthrough is illustrative and stores no data.
- The assessment CTA links to the existing secure platform at `portal.c3cyber.com.au`.
- The site does not duplicate or modify the platform application.

## Deployment

GitHub Pages publishes the repository root from the `main` branch at
`https://c3cyber.com.au`. The `CNAME` file binds the Pages site to the apex
domain, and `.nojekyll` ensures the static files are served without Jekyll
processing.

DNS is managed separately in VentraIP. The apex domain points to GitHub Pages,
while `portal.c3cyber.com.au` remains reserved for the dynamic CSMM platform.
