# Omaha Off-Site SEO Checklist (Tasks 2, 4, 5)

These items **cannot be done in code** — they require real business data
(address, phone) and account access. This file tracks the off-site work needed
to move the Omaha city page from ~position 10 toward positions 3–5 for
**"parking lot striping omaha"**.

> ⚠️ Do not publish any NAP (Name / Address / Phone) until the real values below
> are filled in. Inconsistent NAP across listings actively hurts local ranking.

---

## 0. NAP Consistency Reference (use this EXACT string everywhere)

Every directory, citation, and profile must use **byte-for-byte identical** NAP.
Pick one canonical format and never vary it (no "St." vs "Street" drift, no
abbreviation changes, no formatting differences).

```
Name:    PrecisionLine Striping – Omaha
Address: [REPLACE: street address], Omaha, NE [REPLACE: ZIP]
Phone:   [REPLACE: real Omaha CallRail / Google Voice number]
Email:   omaha@precisionline.com
Website: https://www.striping.site/parking-lot-striping-omaha
Hours:   Mon–Fri 7am–6pm · Sat 8am–2pm
```

> The same phone must also be set in `lib/config.ts` (`OMAHA_PHONE` /
> `OMAHA_PHONE_TEL`) so the website matches the citations exactly.

---

## 1. Google Business Profile (Task 2 — highest impact)

- [ ] Create / claim the Google Business Profile for the Omaha location
- [ ] Use the canonical NAP above (requires a real address + phone)
- [ ] Complete verification (postcard / phone / video, per Google's requirement)
- [ ] Set primary category (e.g. "Paving contractor" — [REPLACE: confirm best fit])
- [ ] Add services: line striping, ADA striping, fire lane, re-striping, stenciling
- [ ] Add service areas: Omaha, Bellevue, Papillion, La Vista, Elkhorn, Council Bluffs
- [ ] Upload real photos of completed Omaha work
- [ ] Set website link to https://www.striping.site/parking-lot-striping-omaha
- [ ] Set hours to match the website

## 2. Directory Citations (Task 4)

Create a listing with **identical NAP** on each. Check the box once it is live
**and** verified.

- [ ] BBB (Better Business Bureau)
- [ ] Yelp
- [ ] Angi
- [ ] HomeAdvisor
- [ ] Houzz
- [ ] Manta
- [ ] Yellow Pages (YP.com)
- [ ] Nextdoor

> NAP must be **identical** across every directory above and match the website
> and the Google Business Profile.

## 3. Review Collection Plan (Task 5)

- [ ] Target: **10 reviews within 90 days**
- [ ] Target: **25 reviews within 6 months**
- [ ] Send a Google review request to every completed Omaha customer
- [ ] Add a QR code / short review link to invoices and vehicle signage
- [ ] Do **not** incentivize or fabricate reviews (Google ToS + project guardrails)

---

## Manual placeholders still to fill before going live

- [ ] Real Omaha phone number (also update `lib/config.ts`)
- [ ] Real street address + ZIP (used in NAP everywhere)
- [ ] Confirm Google Business Profile primary category
- [ ] Real case-study metrics in `app/projects/omaha-commercial-restripe/page.tsx`
      (search for `[REPLACE: ...]`)
