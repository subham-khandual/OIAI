import Page from '../components/layout/Page'
import { Link } from 'react-router-dom'
import CountUp from '../components/ui/CountUp'
import { useI18n } from '../context/I18nContext'

export default function Voices() {
  const { t } = useI18n()
  return (
    <Page
      title="Student Voices & Outcomes — OIAI"
      description="What OIAI students, parents and graduates say — and the placement record behind it: 96% placed or in higher study, two internships built into the degree."
    >
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker rv">Students · Parents · Graduates</span>
          <h1 className="rv">What it is <span className="accent">actually like</span> here</h1>
          <p className="lead rv">Unedited quotes from people with names and batches — including a parent,
            because the person paying deserves to hear from other parents. <b>The placement record
            sits below, with its definition attached.</b></p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="sec" style={{paddingTop: "12px"}}>
        <div className="wrap">
          <div className="pagegrid c3">

            <article className="quote-card rv">
              <div className="stars" aria-label="5 out of 5">★★★★★</div>
              <p className="q">"I came in from Cuttack with no coding background at all. By second semester I was building models for paddy disease detection, and my mentor was reviewing my code every Friday."</p>
              <div className="who">
                <i style={{background: "var(--lime)"}}>SM</i>
                <div><b>Swagatika Mohanty</b><span>B.Tech AI, class of 2027 · Cuttack</span></div>
              </div>
            </article>

            <article className="quote-card rv" style={{background: "var(--peach)", borderColor: "transparent"}}>
              <div className="stars" aria-label="5 out of 5">★★★★★</div>
              <p className="q">"The fee page told us everything before we visited. We applied for the aid, got 75% covered, and did not have to make ten phone calls."</p>
              <div className="who">
                <i style={{background: "#fff"}}>RD</i>
                <div><b>Rashmi Ranjan Das</b><span>Parent of a B.Tech student · Berhampur</span></div>
              </div>
            </article>

            <article className="quote-card rv">
              <div className="stars" aria-label="5 out of 5">★★★★★</div>
              <p className="q">"The internship was real work on a real model. Neither company asked me to whiteboard fizzbuzz — we had already shipped something."</p>
              <div className="who">
                <i style={{background: "var(--lav)"}}>AK</i>
                <div><b>Abhishek Kar</b><span>M.Tech AI, class of 2025 · placed</span></div>
              </div>
            </article>

            <article className="quote-card rv">
              <div className="stars" aria-label="5 out of 5">★★★★★</div>
              <p className="q">"I took the evening diploma while teaching school full-time. Two weeknights and a Saturday lab — by month five I had a working model for my own students' assessments."</p>
              <div className="who">
                <i style={{background: "var(--salmon)"}}>PN</i>
                <div><b>Prangyan Nayak</b><span>Diploma in Applied AI · schoolteacher, Bhubaneswar</span></div>
              </div>
            </article>

            <article className="quote-card rv">
              <div className="stars" aria-label="5 out of 5">★★★★★</div>
              <p className="q">"The fellowship year gave me my own cluster allocation and my first publication. It is the reason I got into the M.Tech without a gap year."</p>
              <div className="who">
                <i style={{background: "var(--peach)"}}>LS</i>
                <div><b>Lipun Sahu</b><span>Research Fellow 2025 → M.Tech AI 2026</span></div>
              </div>
            </article>

            <article className="quote-card rv" style={{background: "var(--lav)", borderColor: "transparent"}}>
              <div className="stars" aria-label="5 out of 5">★★★★★</div>
              <p className="q">"My daughter was behind in week nine. The adviser built a recovery plan with her the same week. It never touched her transcript — and she topped the next project."</p>
              <div className="who">
                <i style={{background: "#fff"}}>JM</i>
                <div><b>Jyotirmayee Mahapatra</b><span>Parent of a B.Sc. Data Science student · Sambalpur</span></div>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="sec" style={{paddingTop: "10px"}}>
        <div className="wrap">
          <div className="sec-head center rv">
            <span className="kicker">Outcomes</span>
            <h2>The record, with its <span className="accent">definition attached</span></h2>
            <p>Unqualified percentages invite suspicion, so here is ours defined: <b>"placed" means a
              signed offer for full-time work or a documented admission to a higher programme, within
              six months of graduation.</b> The full record is available on request during a campus
              visit.</p>
          </div>
          <div className="pagegrid c4">
            <div className="out-card t-lime rv"><CountUp as="b" to={96} suffix="%" /><span>Placed or in higher study within six months (last batch)</span></div>
            <div className="out-card vis-white rv"><CountUp as="b" to={340} suffix="+" /><span>Internships awarded across programmes to date</span></div>
            <div className="out-card t-lav rv"><b>₹12.4L</b><span>Median CTC, last graduating batch</span></div>
            <div className="out-card t-peach rv"><CountUp as="b" to={18} /><span>Partner companies providing internships and hires</span></div>
          </div>
          <div className="pagegrid c2" style={{marginTop: "18px"}}>
            <article className="b-card vis-white rv">
              <svg className="mi" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1 3 2.5 6 2.5s6-1.5 6-2.5v-5"/></svg>
              <h3>Two internships, by design</h3>
              <p>One after second year, one after third — both built into the B.Tech and M.Tech structure, not left to chance. Students on the research route can substitute a ₹12,000/month assistantship for one.</p>
              <p className="foot">Internship grading counts toward the degree</p>
            </article>
            <article className="b-card t-salmon rv">
              <svg className="mi" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg>
              <h3>Mentors, not webinars</h3>
              <p>18 partner companies send working engineers to campus monthly. They review capstones, sit on project juries, and interview for their own internship slots — the same people, not a rotation of career-tip speakers.</p>
              <p className="foot">340+ internships awarded · ₹12.4L median</p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ctaband" style={{paddingTop: "10px"}}>
        <div className="wrap">
          <div className="ctaband-inner rv">
            <h2>Come see it <br/>before you believe it</h2>
            <p>Sit in on a Friday code review, walk the labs, and talk to current students without a
              counsellor in the room. Campus visits are free and run every week.</p>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-red">Book a campus visit <span className="arr" aria-hidden="true">→</span></Link>
              <Link to="/apply" className="btn btn-white">{t('Start your application')}</Link>
            </div>
          </div>
        </div>
      </section>
    </Page>
  )
}
