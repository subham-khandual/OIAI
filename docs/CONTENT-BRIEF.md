> **Note:** this brief was written for the original static HTML build. In the React project the pages
> live in `src/pages/*.jsx` (`index.html` → `Home.jsx`, `programmes.html` → `Programmes.jsx`, …), the shared
> behaviour from `main.js` lives in `src/hooks/` and `src/components/`, and the CSS in `src/styles/`.
> The design-reference files are in `docs/design-reference/`. Everything else — strategy, copy rules and the
> fact-check checklist — still applies unchanged.

# OIAI Website — Content Brief

Companion to the full site: [index.html](index.html), [programmes.html](programmes.html),
[admissions.html](admissions.html), [about.html](about.html), [voices.html](voices.html),
[event.html](event.html), [apply.html](apply.html), [contact.html](contact.html),
[styles.css](styles.css) (design system), [pages.css](pages.css) (page extensions) and
[main.js](main.js) (shared behaviour). The landing-page section map below still matches
index.html 1:1, so copy can be swapped section by section without touching layout.

## Site architecture (multi-page build)

| Page | Job | Key modules |
|---|---|---|
| `index.html` | Convert from the story | hero + chips, trio, trust strip, programmes split, bento, dark labs, stats, voices, event, FAQ, CTA band |
| `programmes.html` | All 7 programmes with fee/intake on every card | filter bar (All/Degrees/PG/Diploma/Research/Short), 7 colour-coded cards, "which one?" helper, counsellor CTA |
| `admissions.html` | Kill the cost/deadline objection | 31 Mar deadline card, 5-step timeline, tuition + living-cost tables, aid-band table, 3-question FAQ |
| `about.html` | Credibility: labs + faculty | story split, campus numbers, **dark labs section** (6 groups), 6 faculty cards, sector marquee |
| `voices.html` | Social proof + outcomes | 6 quote cards (2 parents), outcome cards with the "placed" definition, internship/mentor explainer |
| `event.html` | AI Build Week 2026 | meta card, 3-day schedule accordion, tracks, prizes, eligibility |
| `apply.html` | The conversion endpoint | demo application form (validation + success state + reference number), "what happens next" aside |
| `contact.html` | Low-commitment contact | address/hours/dept cards, stylised map, demo message form, campus-visit band |

**Shared plumbing** — `main.js` powers every page: sticky-nav shadow, burger menu, scroll
reveals (`.rv`), stat count-up, EN/ଓଡ଼ିଆ demo toggle, back-to-top button, programme filter,
and demo form handling (`form[data-demo]` → success card with generated reference). Nav links
are real pages; the active page gets the red `on` pill. `pages.css` adds page-enter animation,
page heroes, filters, timeline, tables, faculty grid, marquee, schedule, forms and back-to-top.
Cross-page anchors in use: `index.html#faq`, `about.html#labs`, `event.html#rules`.

**Demo-only behaviour to replace before launch:** the two forms fake submission client-side
(`data-demo` in main.js) and the language toggle is a dictionary swap. Wire the forms to a real
endpoint and a real i18n layer.

> **Read this first — every number on the page is invented.**
> Fees, deadlines, intake counts, placement figures, publication counts, named partners and
> named students in this build are **placeholders written to make the layout realistic**.
> Nothing in here is a verified fact about a real institute. Before this page goes
> anywhere public, work through the [Fact-Check Checklist](#fact-check-checklist) at the
> bottom. Publishing unverified placement percentages or fees on an admissions page is
> the one genuinely damaging failure mode here — more than any design problem.

---

## Strategy in one page

| | |
|---|---|
| **Audience** | Two, in this order: a 16–22 year old in Odisha choosing a degree, and the parent paying for it. |
| **Primary job of the page** | Get a completed application, not a brochure download. |
| **Deciding factor** | Cost and deadline. Both must be visible above the fold. |
| **Emotional job** | Make Odisha proud. Say "Odisha" early, say it often, and be specific enough that it can't be another institute. |
| **Structural source** | [ref 2](ref%202.mp4) (Edukids) — enrollment-first, trust chips, stats band, event card, audience-split footer. |
| **Visual source** | [reference image.jpg](reference%20image.jpg) — pastel gradient page, black capsule nav, saturated colour cards, salmon CTA band, white inset footer. |
| **One accent section from** | [ref 3](ref%203.mp4) (eduwerks) — a single dark neon section for the research/labs content. |

### What was taken from each reference

**From the reference image — this is now the primary skin**
- Pastel gradient page (pale lime → lavender → cream) with a fine grid overlay. It is a
  fixed background layer so it never scrolls away or repaints.
- A **black floating capsule nav** with the active item as a red pill inside it, plus a
  price chip — the nav carries a fee anchor, which is exactly what an admissions audience wants.
- **Two-tone headings**: heavy Poppins in near-black, with one word flipped to red
  ("Seven routes into **artificial intelligence**").
- **Saturated flat cards** in chartreuse, salmon, lavender and peach, with white rounded
  "pill" buttons and white inner panels sitting on top of the colour.
- **White rounded feature cards** with circular colour icon badges — the "Our Feature"
  pattern, used here for the programme breakdown.
- The **logo/institution strip** as white pills on the gradient.
- The **salmon CTA band** with a wavy line texture.
- The **white inset footer card**, rounded, floating on the gradient with a legal row.

**From ref 2 — kept**
- Trust chips sitting immediately under the hero paragraph, above the CTA. This is the
  single highest-value element in the whole reference.
- An **upcoming event card** with a big split date. Real institutes run these; they give
  visitors a reason to come back and something concrete to share.
- A **footer split by audience** — For students / Admissions / Institute — rather than a
  generic link dump. A parent and a 17-year-old are looking for completely different things
  and should not have to guess which column is theirs.

**From ref 3 — one section only**
- A single dark navy section with soft neon blobs, carrying the research/labs content.
  This is the only dark band on the page, and it earns its place: it is where the "we
  publish and compute for real" claim lives, and the contrast is what stops a long light
  page from going flat.

**Deliberately dropped from all three**
- Gradient-filled headline text. The reference uses solid red on a single accent word, not
  a rainbow across the whole line.
- Geometric glyph icons (◉ ◈ ◇). The reference uses real outlined SVG icons in circular
  badges.
- A glow on every card. The reference cards are flat colour with a single soft shadow on hover.
- Invented client logo walls. Fake partner logos are a legal and credibility problem.
- The 3D laptop render and the floating tilted device nav. Both are marketing film devices,
  not shippable pages.
- `Log in` / `Sign up`. OIAI's audience is not signing up for a product.

**Where the references were deliberately *not* followed**
The reference image is a SaaS product page and uses photography throughout. This page uses
flat CSS colour panels and stylised "screen" mocks in place of stock photos. That is a
conscious trade: real photos of a real campus will outperform any placeholder, and the
slots are obvious — the `split-vis` block in Programmes and the three testimonial cards.

---

## Section-by-section

### 0. Capsule navigation
**Purpose** — always-visible path to Apply, plus a fee anchor in the nav itself.

- **Brand block**: "Odisha Institute of Artificial Intelligence" set in full on desktop,
  abbreviated on mobile. Never shorten it to just "OIAI" in the nav — a first-time visitor
  does not yet know what the letters mean.
- **Links**: Home · Programmes · Why OIAI · Student Voices · FAQ. Five is the ceiling. The
  active item is a red pill inside the black capsule, matching the reference.
- **Fee chip**: "Fees from ₹1.8L" sits in the nav permanently. Most institute sites hide the
  number behind a "Contact us" link; putting it in the nav tells a hesitant family that
  cost is not the thing being hidden.
- **Language toggle**: EN / ଓଡ଼ିଆ. Non-negotiable for an Odisha institute.
- **Primary CTA**: "Apply Now" — persistent, always in view while scrolling.

### 1. Hero — *the only section that really matters*
**Purpose** — establish what this is, in Odisha, for AI.

- **Kicker**: "Admissions open · Batch 2026". States the state of the world immediately.
- **Headline**: "Odisha's institute for **Artificial Intelligence**". "Odisha's" is a claim of
  ownership, not a location. The red accent word lands on the discipline, not the geography.
- **Sub-paragraph**: degree programmes + working research labs + industry training, taught
  in Bhubaneswar. The phrase **"taught in Bhubaneswar by faculty who publish and mentors who
  ship"** is the differentiator — it distinguishes OIAI from an online course in one clause.
- **CTAs**: "Start your application" (red) + "Explore programmes" (white). The secondary is
  deliberately low-commitment; a visitor who is not ready should have somewhere softer to go.
- **Trust chips**: No entrance exam · Scholarships 25–100% · Hostel within 2 km · Two
  internships before you graduate. All four attack an objecting parent's specific worry.
  Not decoration — objections answered.
- **Doodles**: three hand-drawn SVG marks in the side margins. They are set at 50% opacity and
  hidden below 1280px. In the reference these sit *inside* cards, not floating in the margins —
  see the lime card in section 2.

### 2. Three-card row
The reference's three-card band, repurposed. Each card is a different colour and a different
internal structure, which is what stops it reading as three of the same thing.

- **Chartreuse** — white pill ("Admissions 2026"), a hand-drawn squiggle in the middle, then
  the faculty claim anchored at the bottom. This mirrors the reference card exactly: badge top,
  doodle middle, copy bottom.
- **Salmon** — community framing, a stack of overlapping initial avatars, and the
  "58% from outside Bhubaneswar" stat. The avatars echo the reference's member-avatar stack.
- **Lavender** — a white inner panel containing a 2×2 chip grid of programme names. This is a
  direct lift of the reference's "Smart Academy" panel with its Playful/Dynamic/Engaging cards.

### 3. Trust strip
Institutions students have attended or come from, as white pills on the gradient.

Framed as **"Students join us from institutions across Odisha"** — an inbound claim, not an
outbound partnership claim. The distinction matters: "our students come from these
institutions" is verifiable and modest. "We partner with IIT Bhubaneswar" is a much bigger
claim and much more likely to be wrong.

### 4. Programmes — split with white feature cards
Left: a tinted visual panel holding a stylised "screen" mock. Right: three white rounded cards,
each with a circular colour icon badge — the reference's "Our Feature" pattern.

1. **B.Tech in CSE with AI & ML** — 4 yrs. AI track from semester 2, a two-semester capstone
   with a partner company, guaranteed final-year internship. Intake 240.
2. **M.Tech AI & B.Sc. Data Science** — 2 yrs and 3 yrs. ML/CV/NLP specialisations, plus the
   undergraduate data science degree that feeds into it. Intakes 60 and 120.
3. **Diploma, Fellowship & short programmes** — six-month evening diploma, ₹12,000/month
   research fellowship, four-week summer bootcamp, weekend school track for ages 11–17.

Three choices worth flagging:

- **The school track is deliberate.** It seeds the pipeline three to four years ahead and
  gives the AI Olympiad a reason to exist. It also serves Odisha's government skilling
  priorities, which can bring in grant funding.
- **The evening diploma is the revenue engine.** It monetises existing campus capacity after
  hours and gives working professionals a route in. It is the reason the fellowship is paid
  rather than unpaid "research experience".
- **Intake numbers appear on every card.** The intake is the second-most-convincing element
  on the page after the fee. Scarcity that is real.

### 5. "Why learn with us?" — bento
Six saturated cards, each with an outlined icon, a claim, supporting copy, and a small
footer stat. Not "why choose us" abstractions — six claims, each provable:

| Card | Claim | Footer stat |
|---|---|---|
| Lime | You work in a lab, not a lecture hall | 8 GPUs · 14 papers in 2 yrs |
| Salmon | Industry mentors who actually show up | 340+ internships · ₹12.4 L median |
| Lavender | Built for families who need the number up front | 31 on full aid · ₹0 to apply |
| Peach | Research on Odisha's own problems | 2.1M token Odia corpus · 3 publications |
| Lime | Nobody gets left behind | 1 in 9 students · not on the transcript |
| Salmon | Outcomes you can verify | Record available on request |

The mentors card carries the sub-line **"these are the people doing the work, not a recorded
career tips webinar"** in the long version of this page. Recorded career advice is the single
most common claim in Indian edtech and the least credible.

### 6. The dark section — research and labs
The one dark band on the page. Near-black navy with soft neon blobs, carrying a code panel
and two stat tiles.

This is where the "we publish and compute for real" claim lives. **The contrast is doing real
work**: a long pastel page goes flat without one interruption, and this is the only section
that justifies the word "AI" on the page in a way the other sections cannot.

> The code panel outputs "→ published · reviewed, Feb 2026" rather than a specific paper ID.
> This is deliberate. A fabricated `arXiv` citation on a page about research credibility is a
> self-inflicted wound. Either point it at a real paper or keep it generic.

### 7. Stats
Four tiles in alternating colours, each with a one-line explanation beneath.

| Stat | Reading |
|---|---|
| 2,400+ | Students across seven AI programmes → scale |
| 42 | Faculty with a research or industry record → credibility |
| 18 | Partner companies → industry reality |
| 96% | Graduates placed or in higher study → outcome |

Every stat pairs with a *qualifier*, because unqualified numbers invite suspicion. "42
faculty" alone means nothing; "42 faculty with a research or industry record" is a specific,
checkable claim. The numbers count up on scroll.

### 8. Student & parent voices
Three cards, and the colour mix is deliberate: white, peach, white.

- **A student** from Cuttack with no coding background, now doing applied ML.
- **A parent** from Berhampur whose aid application covered 75% and who did not have to
  make ten phone calls.
- **A placed graduate** whose internship was real work.

One in three is from a parent. Most institute sites show only students. A parent reading
testimonials from other parents is the highest-trust signal available on an admissions page.

The student quote ends on **"my mentor was reviewing my code every Friday"** — a specific,
small, checkable-feeling detail. Vague praise reads as fabricated; a Friday code review reads
as a memory.

### 9. Event card — *AI Build Week 2026*
28–30 March 2026 · OIAI campus · 200+ teams last year. Chartreuse date panel on the left,
white body on the right.

**Open to teams from any college in Odisha** — explicitly *not* restricted to OIAI students.
This is the cheapest reach mechanism the institute has: it puts the OIAI name in front of
every engineering student in the state at zero media spend, and it turns "we're the ones doing
AI in Odisha" from an assertion into a demonstration.

### 10. FAQ — six questions, parent-shaped
Ordered by how often they are actually asked.

1. **Is there an entrance exam?** No. 45-min aptitude test, 10-min conversation, no negative
   marking, no cost. JEE/NEET accepted but not required. — *Removes the #1 barrier fear.*
2. **What does the total cost actually work out to?** Full breakdown: ₹2,40,000/yr tuition,
   ₹48k–72k hostel, ₹18k transport. **"There is no separate lab fee, library surcharge or
   examination charge."** — *The sentence that closes the sale.*
3. **How does the scholarship scheme work?** Four income bands, 25–100%. Award carries for the
   full programme. — *Concrete thresholds convert better than "we offer scholarships."*
4. **Is aid available for students outside Odisha?** Yes. 31 students on full aid, 58% from
   outside Bhubaneswar, twelve districts. — *Reassures the regional audience.*
5. **Do students get internships, and is one guaranteed?** Two built into the degree; research
   assistantship available in place of one.
6. **What happens to students who are struggling?** Named faculty mentor + industry mentor
   from year 2, a week-nine checkpoint, a recovery plan. **"Roughly one student in nine uses
   this, and it is not recorded on the transcript."**

Question 6 is the one to keep. Almost no institute answers it, and for a parent whose child
might struggle it is worth more than every placement statistic combined. The "not recorded on
the transcript" clause does the real work — it signals the support is genuine, not punitive.

### 11. Salmon CTA band
"**Your application costs nothing, so there is no reason to wait.**"

Three trust chips: free application · reply in one working day · **no obligation to enrol.**

The third is the most important line on the entire page. It removes the fear of committing,
which is the actual reason a hesitant visitor does not apply. Say it where the decision is made.

### 12. White inset footer card
- Brand block, subscribe field with a red Join button, and social links.
- **Three link columns split by audience**: For students · Admissions · Institute.
- **A four-colour ikat stripe** in the red / lime / lavender / peach palette. A small regional
  signature that costs nothing and ties the footer back to the hero.
- Legal row: Privacy · Terms of Admission · **Anti-Ragging Policy** · **Grievance Redressal**.
  Both of the last two are statutory expectations under UGC and the 2009 Ragging Prohibition
  Act for any Indian institution. Include them.

---

## Content rules

1. **One idea per section.** If a section has two messages, split it.
2. **Every claim carries a number.** "Experienced faculty" is noise; "42 faculty with an
   active research record" is an argument.
3. **Numbers are qualified.** No bare percentages.
4. **Odisha appears in every major section** — hero, stats, features, event, footer.
5. **Parent-facing answers sit next to student-facing ones.** Never segregate them.
6. **English first, Odia available.** Lead in English, offer Odia.
7. **Fees and deadlines in the hero.** Not buried. Not "contact us for pricing."
8. **Never invent a partner, an accreditation, or an outcome figure.**

## The Odia question

The toggle is in place and wired to a demo dictionary in the page script — it swaps
headings and CTAs so you can see it work. **It is not a translation.**

Before launch, decide:

- **Machine-translate and human-review.** Fastest. Risk: a bad Odia translation on an
  admissions page damages institutional trust more than having no translation at all.
- **Hire a translator.** ₹15k–30k for the page. Non-negotiable for Odia, which has far
  fewer professional translators than Hindi, Tamil or Bengali.
- **Nav + key CTAs only.** A partial bilingual experience: language, deadlines, fees and
  apply buttons in Odia; body copy in English. A common and defensible real-world compromise.

Also settle the **script**: Odia (ଓଡ଼ିଆ, round) is standard for Odisha. The older Oriya
script exists but has almost disappeared from digital use. Use Odia.

---

## Fact-Check Checklist

Work through this before the page goes live. Everything below is currently **invented**.

- [ ] All six programme names — confirm official names, durations, and awarding body
- [ ] **Every fee figure** — tuition, hostel, transport, and confirmation that there is
      genuinely no separate lab or exam charge
- [ ] Scholarship income thresholds and percentages, and the financial criteria behind them
- [ ] Application deadline and batch year
- [ ] Seat intake per programme, and the current filled count
- [ ] **Placement figure** — must come from a verified institutional record, not a survey
- [ ] Median package, and how "placed" is defined (including whom it excludes)
- [ ] Faculty count, and whether "42" means full-time or includes visiting
- [ ] GPU count and model — do not overstate. "A100-class" is a hedge; use the real spec
- [ ] Publication count, and whether the institute is willing to be linked to them
- [ ] Every named partner company — **written permission required, or remove the name**
- [ ] Every named student and parent — **written consent required**, or use initials and a
      year only
- [ ] Institution names in the trust strip — confirm no implied partnership
- [ ] Event date, venue, and eligibility terms
- [ ] Full registered address, and which statutory bodies OIAI is registered with
- [ ] The red accent colour contrast — if any red text drops below 20px, darken to `#D9341F`
- [ ] Anti-Ragging and Grievance Redressal policy documents exist and are linked
- [ ] **Multi-page additions (all invented):** B.Sc. fee ₹1.6L, diploma fee ₹65,000 (EMI claim),
      bootcamp fee ₹14,900, school-track fee ₹9,600/term, founding year 2019 / first batch 40,
      8 hiring sectors, 214 teams & 37 colleges at the 2025 Build Week, event prizes ₹1L + ₹50k×2,
      the six named faculty members and their roles, "cluster account kept 2 weeks after Build Week",
      "bootcamp fee waived for school-track alumni", "top performers progress to M.Tech"
- [ ] Contact page placeholders: address, phone pattern, all `@oiai.example` email addresses,
      office hours, Wednesday/Saturday visit schedule
- [ ] Application form fields match what the admissions office actually collects; swap the demo
      submit handler (`main.js → form[data-demo]`) for a real endpoint

**On the fake `arXiv` ID specifically:** a fabricated citation on a page about research
credibility is a self-inflicted wound. Either point it at a real paper or change the terminal
to output something that makes no external claim.

---

## Accessibility and performance notes

Already handled in the build, worth keeping if the page is rebuilt:

- Semantic landmarks, one `h1`, `aria-pressed` on the language toggle, labelled form input.
- Visible `:focus-visible` rings on all interactive elements.
- Scroll animations respect `prefers-reduced-motion`.
- All visuals are CSS gradients and inline SVG — **no image requests anywhere on the page**,
  so LCP is text and paints in the first frame.
- Layout holds at 1020px, 820px and 620px breakpoints.
- The page gradient is a single fixed layer, so it does not repaint on scroll.
- Contrast: body copy `#71717A` on `#F8F7F3` (~4.9:1), headings `#17171A` (~16:1), red accent
  `#FF4A38` on the pastel base (~3.4:1 — **below AA for body text, fine at heading sizes only**).
  If any red text drops below 20px, darken it to `#D9341F`.
- Side-margin doodles are hidden below 1280px, where the content wrap fills the viewport and
  they would sit on top of the copy.

Still worth doing if this ships:

- Real form with server-side validation for the application flow.
- `hreflang` alternates once Odia content is genuinely translated.
- Analytics on the Apply button, and on scroll depth into the admission card.

---

## Open questions for OIAI

1. **Who actually decides?** If parents dominate, the fee and aid content should move up
   and the specialisations section can shrink. If students dominate, the reverse.
2. **Is the evening diploma real or aspirational?** It changes the revenue model section
   entirely, and it should not appear until it can take enrolments.
3. **Is there an entrance test?** The FAQ commits to a specific format. If that is not
   decided, that FAQ needs rewriting before launch.
4. **Government backing?** If OIAI has state government or R&D society affiliation, that is
   a far stronger trust signal than any statistic on this page, and it should be in the hero.