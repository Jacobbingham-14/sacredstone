# Sacred Stone — Launch Checklist

*Last updated July 2026. This is your internal reference — not meant for the public website.*

## Phase 1 — Foundation (do these first)

- [ ] **Register a business entity.** An LLC is worth setting up before you're publicly inviting paying customers — it's what actually separates your personal assets from business liability if a cleaning ever goes wrong. File with the Utah Division of Corporations.
- [ ] **Get an EIN** from the IRS (free, takes minutes online). You'll need it to open a business bank account and to set up Stripe as a business rather than an individual.
- [ ] **Open a separate business bank account.** Mixing personal and business funds undermines the liability protection an LLC is supposed to give you.
- [ ] **Check Provo City's business licensing requirements.** Many Utah cities require a license even for home-based or service-area businesses — worth a quick call to Provo City's business licensing division to confirm what applies to you.
- [ ] **Check Utah sales tax obligations.** Whether cleaning services are taxable in Utah isn't something to guess at — a quick call to the Utah State Tax Commission (or a local accountant) will tell you definitively. I'm not a tax advisor, so don't take my word over theirs.
- [ ] **Get general liability insurance.** Covered in earlier planning — this matters more once you're actively advertising and inviting volume.
- [ ] **Call each cemetery office** (Provo, Orem, Springville, American Fork, plus Eastlawn Memorial Hills and Timpanogos Memorial Gardens) to confirm there's no permit or vendor-registration requirement, and confirm approved cleaning products.

## Phase 2 — Get the website fully live

- [ ] **Buy a domain and set up hosting.**
- [ ] **Set up Stripe** and paste your real Payment Links into the pricing card buttons (currently placeholders — see the HTML comments marking each one).
- [ ] **Replace every `yourdomain.com` placeholder** in `robots.txt`, `llms.txt`, and `sitemap.xml` with your real domain.
- [ ] **Submit your sitemap** to Google Search Console and Bing Webmaster Tools once live.

## Phase 3 — Local visibility

- [ ] **Claim your Google Business Profile** as a service-area business (hide your address, list Provo/Orem/Springville/American Fork as service areas). Pick the closest matching category. Never keyword-stuff the business name.
- [ ] **Get listed** on Yelp and Nextdoor (free).
- [ ] *(Later, not prelaunch — revisit once revenue/reviews exist)* BBB accreditation (~$400-600+/yr) and Utah Valley Chamber of Commerce (~$1,500+/yr).
- [ ] **Reach out to local funeral homes** for referral partnerships — a natural source of both leads and a legitimate backlink to your site.
- [ ] **Build a review pipeline** — add a one-line review request to your after-visit photo email. Never offer a discount in exchange for a review; Google treats incentivized reviews as grounds for account suspension.
- [ ] **Keep resource article dates current** every few months, and add new ones as real customer questions come up.

## Phase 4 — Before you spend a dollar on ads

- [ ] **Confirm the site actually converts.** Don't send paid traffic to placeholder buttons — Stripe needs to be live first (see Phase 2).
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
