# Sacred Stone — Launch Checklist

*Last updated July 2026. This is your internal reference — not meant for the public website.*

## Phase 1 — Foundation (do these first)

- [ ] **Register a business entity.** An LLC is worth setting up before you're publicly inviting paying customers — it's what actually separates your personal assets from business liability if a cleaning ever goes wrong. File with the Utah Division of Corporations.
- [ ] **Get an EIN** from the IRS (free, takes minutes online). You'll need it to open a business bank account and to set up Stripe as a business rather than an individual.
- [ ] **Open a separate business bank account.** Mixing personal and business funds undermines the liability protection an LLC is supposed to give you.
- [ ] **Check Provo City's business licensing requirements.** Many Utah cities require a license even for home-based or service-area businesses — worth a quick call to Provo City's business licensing division to confirm what applies to you.
- [x] **Check Utah sales tax obligations.** Confirmed: headstone cleaning services are not taxable in Utah.
- [ ] **Get general liability insurance.** Plan: get this in place before the first paying job, alongside the LLC — not before then. **Note:** the "Fully insured" claim has been *removed* from the live homepage, since it isn't true yet. Once the policy is bound, add it back to the "What you can count on" grid in `index.html` — and state the actual limit as a number ("$1M general liability"), not just the word "insured." None of your four Utah County competitors publishes a coverage figure, so a number is a differentiator on its own.
- [x] **Call/email each cemetery office** (Provo, Orem, Springville, American Fork, plus Eastlawn Memorial Hills and Timpanogos Memorial Gardens) — outreach sent to all six.

## Phase 2 — Get the website fully live

- [ ] **Buy a domain and set up hosting.**
- [x] **Payment: deliberately no Stripe for now.** `order.html` takes an order with no payment at all — you confirm by text, clean, send photos, and get paid by Venmo afterwards. This is set up as a *feature*, not a gap: "you don't pay until you've seen the photos" is something none of the four competitors offers, and it removes the biggest objection a brand-new business faces. Add Stripe later if you want, but keep the pay-after option when you do.
- [x] **Confirmation-page redirects: done, and nothing to configure.** Formspree's dashboard "redirect" setting is paid-plans-only, so both forms instead use the `_next` hidden field, which works on the free tier. A few lines of JS on `contact.html` and `order.html` build that value from whatever domain the page is being served from — so it already points at the right place on localhost, on Vercel preview URLs, and on your real domain, with nothing to edit at launch. Verified on both pages.
- [ ] **Create a second Formspree form, just for orders.** The free tier allows *unlimited* forms, so this costs nothing. Create it, copy the new form ID, and replace `xrenjolw` in the `<form action="...">` of `order.html` only (leave `contact.html` on the original). Orders and general questions then arrive in separate inboxes instead of one mixed pile — worth doing before you get busy.
- [ ] **Watch the Formspree free-tier limit: 50 submissions/month.** Right now orders and contact messages share one form, so they share one allowance. Splitting into two forms (above) gives each its own.
- [ ] **Replace every `yourdomain.com` placeholder** in `robots.txt`, `llms.txt`, and `sitemap.xml` with your real domain.
- [ ] **Submit your sitemap** to Google Search Console and Bing Webmaster Tools once live.

## Phase 2.5 — The two assets that beat every competitor (do these early)

Competitive research (Aug 2026) on Precious Stones, My Clean Headstone, Heritage Memorials, and Beesley Monument found that **none of the four publishes a price, shows a single testimonial, or states an insurance figure.** Your homepage now does the first of those. These two get you the other two — and they're the highest-leverage work left.

- [ ] **Get real before/after photos.** The `#work` section on the homepage currently shows a hand-drawn illustration, clearly labeled as one. It's honest, but a real photo pair beats it decisively — all four competitors have photo galleries and you don't.
  - **Do not use AI-generated images here.** Presenting generated images as photographs of work you performed is false advertising, and it's exactly the kind of thing a competitor or a reviewer eventually catches. It would also undercut the "photo proof after every visit" promise that the whole business is built on — if the gallery photos aren't real, why would a customer believe the report photos are?
  - The fast, legitimate path: clean 3–5 markers for real — family graves, friends' family graves, free or discounted is completely fine — and photograph each one. That's genuine completed work, and it solves the photo problem and the review problem in the same afternoon.
  - Shoot before and after from the **same spot, same distance, same time of day.** Matched framing is what makes a before/after convincing. Swap instructions are in the HTML comment above the slider in `index.html`.
- [ ] **Get a photo of the two of you** for the About section (`#about` in `index.html` — swap instructions are in the comment above the placeholder). Outdoors, work clothes, ideally at a cemetery. This is the cheapest credibility on the whole site: none of the four competitors puts a face on the business, and "two real people from here" is the entire positioning. A phone photo in good light is genuinely fine.
- [ ] **Get real reviews — carefully.** The testimonial section is built and commented out in `index.html`, ready to switch on.
  - Google's policies prohibit reviews from people who weren't actually customers, **including friends and family who didn't receive the service.** Violations get reviews stripped or the listing suspended, and a suspended Google Business Profile is very hard to recover. It'll also be your single most valuable local-SEO asset.
  - The safe version is the same as the photo plan above: do the free/discounted jobs **for real**, then ask those people to review the experience they actually had. Legitimate, and it produces photos and reviews together.
  - Three genuine reviews puts you ahead of all four competitors, who show zero.

## Phase 3 — Local visibility

- [ ] **Claim your Google Business Profile** as a service-area business (hide your address, list Provo/Orem/Springville/American Fork as service areas). Pick the closest matching category. Never keyword-stuff the business name.
- [ ] **Get listed** on Yelp and Nextdoor (free).
- [ ] *(Later, not prelaunch — revisit once revenue/reviews exist)* BBB accreditation (~$400-600+/yr) and Utah Valley Chamber of Commerce (~$1,500+/yr).
- [ ] **Reach out to local funeral homes** for referral partnerships — a natural source of both leads and a legitimate backlink to your site.
- [ ] **Build a review pipeline** — add a one-line review request to your after-visit photo email. Never offer a discount in exchange for a review; Google treats incentivized reviews as grounds for account suspension.
- [ ] **Keep resource article dates current** every few months, and add new ones as real customer questions come up.

## Phase 4 — Before you spend a dollar on ads

- [ ] **Confirm the site actually converts.** Submit `order.html` yourself once, end to end, and check the email that arrives actually contains the phone number and every marker's details in a form you can act on. Do this before spending a dollar on ads.
- [ ] **Have a Venmo handle ready** (and decide whether it's a personal or business account) before the first order lands — the site promises payment "after", so you need somewhere to send them.
- [ ] **Install conversion tracking** — a Google Ads tag and/or Meta Pixel, so you can actually measure what your ad spend is doing. (See note below — I've added ready-to-use placeholders to the homepage.)
- [ ] **Know the ad platform rules for this niche** before writing any ad copy:
  - **Google Ads:** Ordinary keyword-targeted search ads are fine ("headstone cleaning Provo," etc.). What's *not* allowed is using remarketing lists or Customer Match audiences built on bereavement or personal-hardship signals — don't build a "people who visited my grieving-family page" retargeting audience.
  - **Meta (Facebook/Instagram):** Ad copy can't assert or imply the viewer's personal state or hardship. Skip anything like "Are you grieving the loss of..." — lead with the service and its benefit instead ("Keep a family memorial cared for, wherever you live").
  - **Google Local Services Ads ("Google Screened")** is worth considering once you're more established — pay-per-lead, requires a background check, but carries real trust weight for exactly this kind of local service business.
- [ ] **Have at least a handful of real reviews live** before scaling spend — ad traffic landing on a review-less profile converts noticeably worse than one with even 5-10 reviews.
- [ ] **Confirm insurance and business registration are actually in place** (Phase 1) before actively inviting paid traffic and real commercial volume.

## Already done ✓
- [x] Homepage built and live-ready (pending domain)
- [x] 15 resource articles with schema markup
- [x] `robots.txt`, `llms.txt`, `sitemap.xml` scaffolded
- [x] LocalBusiness schema, Open Graph, and Twitter Card tags on homepage
- [x] 4 city landing pages (Provo, Orem, Springville, American Fork)
- [x] Contact/lead-capture form (`contact.html`) with confirmation page — pending Formspree form ID
