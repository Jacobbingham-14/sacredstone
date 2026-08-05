# Sacred Stone — Launch Checklist

*Last updated August 2026. Internal reference — not part of the public website.*

**How to use this:** the stages are in the order things actually have to happen, and nothing appears twice. Stage 0 runs in the background from today; Stage 1 is the one that decides whether any of the rest works. Anything marked **[BLOCKER]** stops something else from being possible. `[~]` means applied for / in flight.

**The dependency that's easy to miss:** this list has always said *get insurance before the first paying job*. Advertising is how you get the first paying job — so the LLC-and-insurance chain is not a "later" item. It is the slowest thing here, and it needs to start first.

---

## Stage 0 — Start today, runs in the background (days to weeks)

Each step needs the one before it, so this can't be compressed at the end.

- [~] **File the LLC** with the Utah Division of Corporations — **applied Aug 2026, awaiting approval.** This is what separates your personal assets from business liability if a cleaning ever goes wrong.
- [ ] **Get an EIN** from the IRS the moment the LLC is approved. Free, takes minutes online, and you get the number immediately. Don't let this sit — the bank account is blocked on it, and the insurance application will usually want it.
- [ ] **Open a business bank account.** Mixing personal and business funds undermines the liability protection the LLC exists to give you. Point the Venmo business profile at this account.
- [ ] **Get general liability insurance quotes** and bind a policy. **[BLOCKER for advertising]** You don't have to wait for the LLC to be approved to start collecting quotes — most insurers will quote on the business description alone, and you only need the entity details to actually bind. **Start the quotes now**, in parallel, because this is the slowest remaining item and everything about advertising waits on it.
- [ ] **Provo City business license — you almost certainly need one.** Provo requires a license for anyone who "owns or operates a business in Provo City," including service businesses. For a home-based business there's a **Home Occupation Permit**, split into Minor and Major: **Minor is free**, Major charges a fee. Sacred Stone is very likely *Minor* — no customers coming to the house, no signage, no stock, all work performed off-site — but confirm, don't assume. Read Provo City Code **14.41.050** (Minor) and **14.41.060** (Major), then apply through Provo's CityView business licensing portal. **Allow ~2 weeks processing.**
  - **Call Provo 311 / (801) 852-6000** and ask the one question the website doesn't answer: *since all the actual work happens at cemeteries rather than at the house, is a Home Occupation Permit the right category?*
  - **Ask the same question of Orem, Springville, and American Fork.** Many Utah cities require a license to *do business in* the city, not just to be based there — and you advertise service in all four. This is the part most new service businesses miss. Worth one call each before you advertise into those cities.
- [x] **Utah sales tax** — confirmed: headstone cleaning services are not taxable in Utah.
- [x] **Venmo business profile** set up (Aug 2026). Venmo's user agreement bars personal accounts from taking payment for goods and services from people you don't personally know, and every customer here is a stranger by definition. Seller fee 1.9% + $0.10 — about $1.34 on a $65 cleaning.
- [x] **Cemetery outreach** — called/emailed all six (Provo, Orem, Springville, American Fork, Eastlawn Memorial Hills, Timpanogos Memorial Gardens).

---

## Stage 1 — The weekend that unblocks everything

- [ ] **Clean 3–5 real markers, free or discounted.** Friends' and family's graves are perfect. Photograph every one before and after. Then ask those people for honest Google reviews of the service they actually received. **[BLOCKER for photos, reviews, and honest pricing]**

This is the highest-leverage item on the entire list, because it resolves four separate problems in a single afternoon:

| It gets you | Why it matters |
|---|---|
| Real before/after photos | Your biggest gap — all four competitors have galleries, you have an illustration |
| Legitimate reviews | All four competitors show **zero**; three real ones puts you ahead of the market |
| Practice | Otherwise a paying stranger's family memorial is the first stone you've ever cleaned |
| Real timing data | Tells you what a cleaning actually takes, and whether $65 is the right number |

**Photo technique:** shoot before and after from the *same spot, same distance, same time of day*. Matched framing is the entire reason a before/after is convincing. Swap instructions are in the HTML comment above the slider in `index.html`.

**Do not use AI-generated images.** Presenting generated images as photographs of work you performed is false advertising, and it directly undercuts the "photo proof after every visit" promise the whole business rests on — if the gallery photos aren't real, why would anyone believe the report photos are?

**Review rules — read before asking anyone.** Google prohibits reviews from people who weren't actually customers, *including friends and family who didn't receive the service*. Violations get reviews stripped or the listing suspended, and a suspended Google Business Profile is very hard to recover — it'll also be your most valuable local-SEO asset. Doing the jobs for real is what makes these reviews legitimate. Never offer a discount in exchange for a review; incentivised reviews are also grounds for suspension.

- [ ] **Get a photo of the two of you** for the About section. Outdoors, work clothes, ideally at a cemetery. None of the four competitors puts a face on the business, and "two real people from here" is your entire positioning. A phone photo in good light is genuinely fine. Swap instructions are in the comment above the placeholder in `#about`.

---

## Stage 2 — Make the site real

- [~] **Buy a domain** — **registered Aug 2026, propagating.** **[BLOCKER for ads, Google Business Profile, sitemap, and `og:url`]**
- [ ] **Point the domain at Vercel.** In the Vercel dashboard: project `sacredstone` → Settings → Domains → add it, then set the registrar's nameservers or DNS records as Vercel instructs. DNS can take anywhere from minutes to a few hours to propagate.
- [ ] **Decide www vs non-www** and make one redirect to the other. Vercel will serve both otherwise, which splits ranking signals. Pick one, set the other as a redirect in the Domains panel, and use the chosen form consistently in the placeholder replacement below.
- [ ] **Replace every `yourdomain.com` placeholder — 52 occurrences across four files.** Use the exact www/non-www form chosen above.

  | File | Occurrences |
  |---|---|
  | `llms.txt` | 25 |
  | `sitemap.xml` | 24 |
  | `robots.txt` | 2 |
  | `index.html` (`og:url`) | 1 |

  Easiest is a single find-and-replace across the repo — tell Claude the domain and it can do all 52 in one pass and verify none are left.
- [ ] **Add the real before/after photos** to `#work` in `index.html`, replacing the illustration, and delete the "Illustration." caption line beneath it.
- [ ] **Add the founder photo** to `#about`.
- [ ] **Switch on the testimonial section** in `index.html` — it's built and commented out, ready for real quotes.
- [ ] **Submit an order to yourself, end to end,** on the live domain. Confirm the email contains the phone number and every marker's details in a form you can actually act on, and that you land on `order-received.html` rather than Formspree's generic page.
- [ ] **Submit the sitemap** to Google Search Console and Bing Webmaster Tools.
- [ ] **Add canonical tags** (there are none anywhere right now). Low priority at this size, but cheap insurance against the www/non-www and trailing-slash duplicates Vercel will happily serve.

### Forms and inbox — mostly already handled

- [x] **Formspree wired up** (`xrenjolw`) on both `contact.html` and `order.html`.
- [x] **Confirmation redirects: done, nothing to configure.** Formspree's dashboard redirect setting is paid-plans-only, so both forms use the `_next` hidden field, which works free. JS builds that value from whatever domain the page is served from, so it already resolves correctly on localhost, Vercel previews, and the real domain, with nothing to edit at launch.
- [ ] **Create a second Formspree form just for orders.** Free tier allows unlimited forms. Create it, copy the ID, and replace `xrenjolw` in the `<form action="...">` of `order.html` only. Orders and general questions then land in separate inboxes, each with its own allowance.
- [ ] **Set up Gmail filters.** The forms already send distinct subjects: orders are `NEW ORDER — Sacred Stone`, questions are `New message from Sacred Stone website`.
- [ ] **Copy every order into a spreadsheet the day it arrives** — name, phone, email, cemetery, plot, marker details, plan, price, next visit due. **The Formspree free plan keeps only 30 days of submission history**, which is shorter than the gap between visits on every recurring plan you sell: someone signs up for quarterly care in March and by May their plot number is gone from the dashboard. The notification email is your durable copy — never delete those. The spreadsheet becomes your route list and renewal calendar.
- [ ] **Watch the 50 submissions/month free-tier limit.** Orders and questions currently share one form and therefore one allowance.

---

## Stage 3 — Before the first dollar of ad spend

- [ ] **Claim the Google Business Profile** as a service-area business (hide your address; list Provo, Orem, Springville, American Fork as service areas). Pick the closest matching category; never keyword-stuff the business name. For a local service business this matters more than the ads themselves.
- [ ] **Point your Stage 1 reviews at the profile.** Ad traffic landing on a review-less profile converts noticeably worse than one with even 5–10 reviews.
- [ ] **Turn on PostHog.** `analytics.js` is built and linked from all 25 pages, but **inert** until you paste a project key into `POSTHOG_KEY` at the top of that file. Sign up at posthog.com (generous free tier), take the Project API key from Settings — it starts with `phc_` and is safe to commit. It also skips localhost automatically, so your own testing won't pollute the numbers.
  - Tracks the funnel that actually matters: `$pageview` → `pricing_changed` → `order_started` → `order_submitted`, plus `phone_clicked` and `marker_added`.
  - **Session replay masks every form input.** People type dead relatives' names into the order form; you'll see *where* someone hesitated, never *what* they typed. Don't turn `maskAllInputs` off. To switch replay off entirely, set `DISABLE_SESSION_REPLAY = true` — the funnel events are the valuable part anyway.
  - PostHog replaces the need for GA4. It does **not** replace the Google Ads tag or Meta Pixel — those platforms need their own tags to optimise bidding.
- [ ] **Install ad conversion tracking** — Google Ads tag and/or Meta Pixel, only once you're actually running ads. Ready-to-use placeholders are in the `<head>` of `index.html`.
- [ ] **Confirm the insurance and LLC actually landed** (Stage 0) before inviting paid traffic and real commercial volume.
- [ ] **Restore the insurance claim to the site** once the policy is bound — add it back to the "What you can count on" grid in `index.html`, and state the actual limit as a number ("$1M general liability"), not the word "insured." No Utah County competitor publishes a coverage figure, so the number is a differentiator by itself.

### Ad platform rules for this niche — know these before writing copy

- **Google Ads:** ordinary keyword-targeted search ads are fine ("headstone cleaning Provo"). What's *not* allowed is remarketing or Customer Match audiences built on bereavement or personal-hardship signals — don't build a "people who visited my grieving-family page" retargeting list.
- **Meta (Facebook/Instagram):** ad copy can't assert or imply the viewer's personal state or hardship. Skip "Are you grieving the loss of…". Lead with the service and its benefit instead — "Keep a family memorial cared for, wherever you live."
- **Google Local Services Ads ("Google Screened"):** worth considering once established. Pay-per-lead, requires a background check, carries real trust weight for exactly this kind of business.

---

## Stage 4 — Once you're running

- [ ] **Build a review pipeline** — add a one-line review request to your after-visit photo email. Never offer a discount in exchange.
- [ ] **Get listed** on Yelp and Nextdoor (free).
- [ ] **Work the referral list — see `referral-outreach.md`** for who to approach, in what order, and ready-to-send emails for each. Priority order is **cemetery sextons → monument companies (yes, including your competitors) → funeral homes → genealogy groups → estate attorneys**. Do this *after* the Stage 1 weekend: walking in with before-and-after photos on your phone is a completely different conversation than describing a service with no completed work behind it. Don't offer cash for referrals.
- [ ] **Get business cards** — about $20 for a hundred. Name, phone, website, one line: "Headstone cleaning · Utah County · Photos after every visit." You can't do the outreach above without them.
- [ ] **Ask every customer where they heard about you** and log it in the orders spreadsheet. Within a couple of months this is what tells you which referral partners actually produce and which are merely polite.
- [ ] **Keep resource article dates current** every few months; add new ones as real customer questions come up.
- [ ] *(Revisit once revenue and reviews exist)* BBB accreditation (~$400–600+/yr) and Utah Valley Chamber of Commerce (~$1,500+/yr).

---

## Explicitly NOT blocking

- **Stripe.** The pay-after-photos flow is deliberate and is a competitive advantage, not a gap. If you add Stripe later, keep the pay-after option.
- **`order.html` / `order-received.html` in the sitemap.** Both are deliberately `noindex` — they're form pages, and letting them compete with the homepage for pricing searches would split your ranking signals. Correctly absent; leave them out.
- **BBB, Chamber, Yelp, Nextdoor, funeral-home outreach.** All worth doing, none blocking.

---

## Competitive context (researched Aug 2026)

Competitors: Precious Stones Monuments & Restoration, My Clean Headstone, Heritage Memorials, Beesley Monument.

**None of the four publishes a price, shows a single testimonial, or states an insurance figure.** All four have before/after photo galleries. Beesley leads with 136 years and 5th-generation family ownership; Precious Stones and Heritage both claim 20+ years.

You can't out-tenure them, so the site is built to out-specify them: prices printed on the page, a 30-day written come-back guarantee, two named local founders, and payment only after the customer has seen the photos. The photo and review gaps in Stage 1 are the last places they're still ahead.

---

## Already done ✓

- [x] Homepage rebuilt around published pricing, a written 30-day guarantee, a comparison table, and an About section naming Jacob and Isaac
- [x] Interactive pricing — one-time vs recurring 1×/2×/4×, with multi-marker discounts
- [x] `order.html` order flow with per-marker details and no payment step, plus `order-received.html`
- [x] Form redirects wired via `_next`, built from the live origin
- [x] 15 resource articles with schema markup
- [x] `robots.txt`, `llms.txt`, `sitemap.xml` scaffolded
- [x] LocalBusiness schema (incl. founders and offer catalog), FAQPage schema, Open Graph and Twitter Card tags
- [x] 4 city landing pages (Provo, Orem, Springville, American Fork)
- [x] Contact form with confirmation page
- [x] False "Fully insured" claim removed from the live site
- [x] Mobile nav breakpoint bug fixed across all shared-CSS pages
