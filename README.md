# Sacred Stone Headstone Cleaning — Website

Static site for Sacred Stone Headstone Cleaning, serving Utah County, UT.

## Structure

```
index.html                              Homepage
provo-headstone-cleaning.html           Provo location page
orem-headstone-cleaning.html            Orem location page
springville-headstone-cleaning.html     Springville location page
american-fork-headstone-cleaning.html   American Fork location page
resources/                              15 headstone care articles + hub page
  index.html                            Resources hub
  assets.css                            Shared stylesheet for resources + location pages
  *.html                                Individual articles
robots.txt                              AI crawler + search engine crawl rules
llms.txt                                AI-engine content index (llms.txt spec)
sitemap.xml                             Full site sitemap
vercel.json                             Clean URLs config for Vercel
launch-checklist.md                     Internal launch/pre-advertising checklist (not part of the live site)
homepage-copy.md                        Early homepage copy draft (reference only, not live)
```

## Before going live

1. ~~Buy a domain and point it at this Vercel project.~~ Done — `sacredheadstonecare.com` (GoDaddy), attached to the `sacredstone` Vercel project. DNS records still need to be added at the registrar; see `launch-checklist.md`.
2. ~~Find-and-replace every `yourdomain.com` placeholder.~~ Done — all 52 replaced with `sacredheadstonecare.com`.
3. There is no Stripe integration, by design — customers approve the work from before/after photos and pay afterward. That pay-after flow is a competitive advantage, not a gap; see the note at the top of `order.html`.
4. See `launch-checklist.md` for the full pre-launch and pre-advertising checklist.

## Local preview

Any static file server works, e.g.:

```
npx serve .
```

## Deploying

This is a zero-config static site — no build step. Push to GitHub and import the repo in Vercel, or run `vercel` from this folder with the Vercel CLI.
