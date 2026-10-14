import Page from '../components/layout/Page'
import { Link } from 'react-router-dom'
import { useI18n } from '../context/I18nContext'

export default function Admissions() {
  const { t } = useI18n()
  return (
    <Page
      title="Admissions — OIAI | Fees, scholarships & process"
      description="OIAI admissions 2026: the five-step process, full fee structure, means-tested scholarships from 25% to 100%, and the 31 March 2026 deadline."
    >
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker rv">Admissions 2026 · Bhubaneswar</span>
          <h1 className="rv">Every number, <span className="accent">before</span> you fill a form</h1>
          <p className="lead rv">The whole cost, the whole process, and the scholarship bands — published here
            so your family can decide without a single phone call. <b>Applications close 31 March 2026.</b></p>
          <div className="hero-cta rv">
            <Link to="/apply" className="btn btn-red">{t('Start your application')} <span className="arr" aria-hidden="true">→</span></Link>
            <Link to="/contact" className="btn btn-white">Book a campus visit</Link>
          </div>
          <div className="chips rv">
            <span className="chip">Free application · ₹0</span>
            <span className="chip">Reply in one working day</span>
            <span className="chip">No obligation to enrol</span>
          </div>
        </div>
      </section>

      {/* DEADLINE BAND */}
      <section className="sec" style={{paddingTop: "14px"}}>
        <div className="wrap">
          <div className="event rv" style={{marginBottom: "8px"}}>
            <div className="event-vis">
              <span className="kicker">Applications close</span>
              <div className="event-date">31<span style={{opacity: ".35"}}>/</span>03</div>
              <div className="place">March 2026 · 11:59 pm</div>
            </div>
            <div className="event-body">
              <span className="kicker">Key dates</span>
              <h3>Batch of 2026 — the calendar</h3>
              <div className="event-meta" style={{marginTop: "18px"}}>
                <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg> 1 Nov 2025 — applications opened</div>
                <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg> Every Saturday — aptitude tests on campus</div>
                <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg> 31 Mar 2026 — applications close, 11:59 pm</div>
                <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg> 15 Jul 2026 — Batch of 2026 begins</div>
              </div>
              <div className="event-cta">
                <Link to="/apply" className="btn btn-red">Apply before 31 March <span className="arr" aria-hidden="true">→</span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sec" style={{paddingTop: "10px"}}>
        <div className="wrap">
          <div className="sec-head center rv">
            <span className="kicker">The process</span>
            <h2>Five steps. <span className="accent">No gatekeeping.</span></h2>
            <p>From form to offer in under three weeks for most applicants. No entrance exam, no
              coaching cutoffs — just the test, a conversation, and an answer.</p>
          </div>
          <div className="tl">
            <div className="tl-item rv">
              <h3>Apply online — free</h3>
              <p>Fifteen minutes: your details, your programme, your class 12 (or latest) marks. No fee, no documents to upload at this stage.</p>
              <span className="when">Day 0</span>
            </div>
            <div className="tl-item rv">
              <h3>Aptitude test</h3>
              <p>45 minutes of basic mathematics and logical reasoning on campus (every Saturday) or online. No negative marking. JEE/NEET scores are accepted for the B.Tech instead, if you have them.</p>
              <span className="when">Within 7 days of applying</span>
            </div>
            <div className="tl-item rv">
              <h3>A 10-minute conversation</h3>
              <p>A faculty member talks to you about what you want to build. This is not a viva — there are no marks to lose. Parents are welcome to sit in.</p>
              <span className="when">Same day as the test</span>
            </div>
            <div className="tl-item rv">
              <h3>Offer + aid decision together</h3>
              <p>Your seat offer and your scholarship decision arrive together, so you know the real number before you say yes. Aid is means-tested on family income, not marks.</p>
              <span className="when">Within 5 working days</span>
            </div>
            <div className="tl-item rv">
              <h3>Enrol and join</h3>
              <p>Accept online, choose your hostel block if you need one, and join the batch on 15 July. Fees can be paid yearly or by semester.</p>
              <span className="when">By 30 April 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEES */}
      <section className="sec" style={{paddingTop: "10px"}}>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="kicker">Fee structure</span>
            <h2>The full <span className="accent">cost</span></h2>
          </div>
          <div className="pagegrid c2" style={{alignItems: "start"}}>
            <div className="rv">
              <table className="bandtable">
                <thead><tr><th>Programme</th><th>Tuition / year</th></tr></thead>
                <tbody>
                  <tr><td>B.Tech CSE (AI &amp; ML)</td><td className="pct">₹2.4L</td></tr>
                  <tr><td>M.Tech AI</td><td className="pct">₹1.8L</td></tr>
                  <tr><td>B.Sc. Data Science</td><td className="pct">₹1.6L</td></tr>
                  <tr><td>Diploma in Applied AI</td><td className="pct">₹65k</td></tr>
                  <tr><td>Bootcamp (4 weeks)</td><td className="pct">₹14.9k</td></tr>
                  <tr><td>AI Olympiad school track</td><td className="pct">₹9.6k</td></tr>
                </tbody>
              </table>
              <p className="note">Tuition includes lab access, the computing cluster and all course materials.
                <b>There is no separate lab fee, library surcharge or examination charge.</b></p>
            </div>
            <div className="rv">
              <table className="bandtable">
                <thead><tr><th>Living costs (optional)</th><th>Per year</th></tr></thead>
                <tbody>
                  <tr><td>Hostel — shared block</td><td className="pct">₹48k</td></tr>
                  <tr><td>Hostel — twin-sharing block</td><td className="pct">₹72k</td></tr>
                  <tr><td>Transport, within Bhubaneswar</td><td className="pct">₹18k</td></tr>
                  <tr><td>Mess (est., paid monthly)</td><td className="pct">~₹3.5k/mo</td></tr>
                </tbody>
              </table>
              <p className="note">All hostels are within 2 km of campus with wardens on every floor. The
                Research Fellowship is paid to you — ₹12,000/month for the full 12 months.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AID */}
      <section className="sec" style={{paddingTop: "10px"}}>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="kicker">Scholarships &amp; aid</span>
            <h2>Means-tested on income, <span className="accent">not marks</span></h2>
            <p>Submit family income documents once; the award carries for the full duration of your
              programme. 31 students in the current batch are on full tuition aid.</p>
          </div>
          <div className="rv">
            <table className="bandtable" style={{maxWidth: "820px", marginInline: "auto"}}>
              <thead><tr><th>Annual family income</th><th>Tuition waiver</th><th>Example: B.Tech year</th></tr></thead>
              <tbody>
                <tr><td>Up to ₹2.5 lakh</td><td className="pct">100%</td><td>₹0</td></tr>
                <tr><td>Up to ₹4 lakh</td><td className="pct">75%</td><td>₹60,000</td></tr>
                <tr><td>Up to ₹6 lakh</td><td className="pct">50%</td><td>₹1,20,000</td></tr>
                <tr><td>Up to ₹9 lakh</td><td className="pct">25%</td><td>₹1,80,000</td></tr>
              </tbody>
            </table>
            <p className="note" style={{textAlign: "center"}}>The scheme is open to students from any state. Hostels
              fill faster from nearby districts — apply early if you need a room.</p>
          </div>
        </div>
      </section>

      {/* MINI FAQ */}
      <section className="sec" style={{paddingTop: "10px"}}>
        <div className="wrap">
          <div className="sec-head center rv">
            <span className="kicker">Before you apply</span>
            <h2>Admissions <span className="accent">{t('FAQ')}</span></h2>
          </div>
          <div className="faq rv">
            <details open>
              <summary>Can I apply after my class 12 results?</summary>
              <div className="ans">Yes — apply with your pre-board or predicted marks, and bring your final marksheet to enrolment. The B.Tech and B.Sc. both require class 12 with mathematics; the diploma and bootcamp have no formal prerequisites.</div>
            </details>
            <details>
              <summary>Is the aptitude test hard?</summary>
              <div className="ans">It is class 10 level mathematics and reasoning, and there is no negative marking. We publish a sample paper when you apply. Most applicants finish in under 30 minutes.</div>
            </details>
            <details>
              <summary>Can I switch programmes after joining?</summary>
              <div className="ans">Within the first two weeks, subject to seats. B.Sc. Data Science students can progress into the M.Tech AI after year three on merit; diploma students get credit toward a later degree.</div>
            </details>
          </div>
          <div className="hero-cta rv" style={{marginTop: "30px", justifyContent: "center"}}>
            <Link to="/apply" className="btn btn-red">{t('Start your application')} <span className="arr" aria-hidden="true">→</span></Link>
            <Link to="/#faq" className="btn btn-outline">All FAQs</Link>
          </div>
        </div>
      </section>
    </Page>
  )
}
