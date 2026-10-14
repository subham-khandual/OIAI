import { Link } from 'react-router-dom'
import Page from '../components/layout/Page'
import { useState } from 'react'

export default function Programmes() {
  const [filter, setFilter] = useState('all')
  const [tick, setTick] = useState(0)
  const pick = (f) => { setFilter(f); setTick((n) => n + 1) }
  const shows = (cats) => filter === 'all' || cats.split(' ').includes(filter)
  return (
    <Page
      title="Programmes — OIAI | 7 routes into AI in Bhubaneswar"
      description="B.Tech CSE (AI & ML), M.Tech AI, B.Sc. Data Science, an evening diploma, a paid research fellowship and two school programmes. Fees, intakes and durations for every OIAI programme."
    >
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker rv">Seven programmes · One faculty</span>
          <h1 className="rv">Seven routes into <span className="accent">artificial intelligence</span></h1>
          <p className="lead rv">Degrees, a diploma you can take alongside work, a paid fellowship and two
            programmes for school students. Every fee, duration and seat count is on this page —
            <b>the same numbers we publish in the admission office.</b></p>
          <div className="hero-cta rv">
            <Link to="/apply" className="btn btn-red">Apply to a programme <span className="arr" aria-hidden="true">→</span></Link>
            <Link to="/admissions" className="btn btn-white">See fees &amp; deadlines</Link>
          </div>
        </div>
      </section>

      <section className="sec" style={{paddingTop: "10px"}}>
        <div className="wrap">

          <div className="filters rv" id="filters" role="group" aria-label="Filter programmes">
            <button type="button" onClick={() => pick('all')} aria-pressed={filter === 'all'}>All 7</button>
            <button type="button" onClick={() => pick('degree')} aria-pressed={filter === 'degree'}>Degrees</button>
            <button type="button" onClick={() => pick('pg')} aria-pressed={filter === 'pg'}>Postgraduate</button>
            <button type="button" onClick={() => pick('diploma')} aria-pressed={filter === 'diploma'}>Diploma</button>
            <button type="button" onClick={() => pick('research')} aria-pressed={filter === 'research'}>Research</button>
            <button type="button" onClick={() => pick('short')} aria-pressed={filter === 'short'}>Short &amp; school</button>
          </div>

          <div className="prog-grid">

            <article className="prog-card t-lime rv" data-hide={shows('degree ug') ? undefined : 'true'} data-pop={tick === 0 ? undefined : tick % 2 ? 'a' : 'b'}>
              <span className="prog-hero">Flagship · UG</span>
              <h3>B.Tech CSE (AI &amp; Machine Learning)</h3>
              <div className="dur">4 years · full-time · Bhubaneswar campus</div>
              <p className="desc">The degree the institute is built around. AI track from semester two, a two-semester capstone with a partner company, and a guaranteed final-year internship.</p>
              <ul>
                <li>AI &amp; ML specialisation from sem 2 — no separate entry test</li>
                <li>Capstone shipped with a partner company, graded by them</li>
                <li>Two internships built into the degree structure</li>
              </ul>
              <div className="prog-foot">
                <span className="fee">₹2.4L<small>per year · all-inclusive</small></span>
                <span className="intake">Intake 240</span>
              </div>
              <div className="prog-cta"><Link to="/apply" className="btn btn-red btn-sm">Apply</Link><Link to="/admissions" className="btn btn-outline btn-sm">Fees &amp; aid</Link></div>
            </article>

            <article className="prog-card t-lav rv" data-hide={shows('degree pg') ? undefined : 'true'} data-pop={tick === 0 ? undefined : tick % 2 ? 'a' : 'b'}>
              <span className="prog-hero">Postgraduate</span>
              <h3>M.Tech in Artificial Intelligence</h3>
              <div className="dur">2 years · full-time · Bhubaneswar campus</div>
              <p className="desc">ML, computer vision and NLP specialisations with cluster time from week one. Most M.Tech students finish with a publication or a shipped product.</p>
              <ul>
                <li>Choose CV, NLP or ML systems track in sem 2</li>
                <li>Research assistantship option at ₹12,000/month</li>
                <li>Placed batch of 2025: 96% within six months</li>
              </ul>
              <div className="prog-foot">
                <span className="fee">₹1.8L<small>per year · all-inclusive</small></span>
                <span className="intake">Intake 60</span>
              </div>
              <div className="prog-cta"><Link to="/apply" className="btn btn-red btn-sm">Apply</Link><Link to="/about" className="btn btn-outline btn-sm">Meet the labs</Link></div>
            </article>

            <article className="prog-card t-peach rv" data-hide={shows('degree ug') ? undefined : 'true'} data-pop={tick === 0 ? undefined : tick % 2 ? 'a' : 'b'}>
              <span className="prog-hero">Undergraduate</span>
              <h3>B.Sc. Data Science</h3>
              <div className="dur">3 years · full-time · Bhubaneswar campus</div>
              <p className="desc">The undergraduate data science degree that feeds straight into the M.Tech — or into industry. Statistics first, code second, hype never.</p>
              <ul>
                <li>Statistics, SQL and Python from semester one</li>
                <li>Direct M.Tech AI progression for top performers</li>
                <li>Industry projects from second year onwards</li>
              </ul>
              <div className="prog-foot">
                <span className="fee">₹1.6L<small>per year · all-inclusive</small></span>
                <span className="intake">Intake 120</span>
              </div>
              <div className="prog-cta"><Link to="/apply" className="btn btn-red btn-sm">Apply</Link><Link to="/admissions" className="btn btn-outline btn-sm">Fees &amp; aid</Link></div>
            </article>

            <article className="prog-card t-salmon rv" data-hide={shows('diploma') ? undefined : 'true'} data-pop={tick === 0 ? undefined : tick % 2 ? 'a' : 'b'}>
              <span className="prog-hero">Working professionals</span>
              <h3>Diploma in Applied AI</h3>
              <div className="dur">6 months · evenings · Mon–Thu 7–9 pm + Sat lab</div>
              <p className="desc">For people with a job. Same labs, same faculty, same cluster — scheduled after working hours so you do not have to quit anything to learn.</p>
              <ul>
                <li>Two evenings a week, never a full day off work</li>
                <li>Saturday lab access on the A100 cluster</li>
                <li>Cohort of working engineers, analysts and teachers</li>
              </ul>
              <div className="prog-foot">
                <span className="fee">₹65,000<small>total · EMI available</small></span>
                <span className="intake">Intake 90</span>
              </div>
              <div className="prog-cta"><Link to="/apply" className="btn btn-red btn-sm">Apply</Link><Link to="/contact" className="btn btn-outline btn-sm">Ask a question</Link></div>
            </article>

            <article className="prog-card t-lav rv" data-hide={shows('research pg') ? undefined : 'true'} data-pop={tick === 0 ? undefined : tick % 2 ? 'a' : 'b'}>
              <span className="prog-hero">Paid position</span>
              <h3>Research Fellowship</h3>
              <div className="dur">12 months · full-time · lab-based</div>
              <p className="desc">A paid year in one of our research groups — Odia-language AI, agricultural ML or computer vision — with your own cluster allocation.</p>
              <ul>
                <li>₹12,000/month stipend for the full 12 months</li>
                <li>Own GPU time; publish with your lab group</li>
                <li>Strong route into the M.Tech or an industry research role</li>
              </ul>
              <div className="prog-foot">
                <span className="fee">₹12k/mo<small>stipend · paid to you</small></span>
                <span className="intake">Intake 20</span>
              </div>
              <div className="prog-cta"><Link to="/apply" className="btn btn-red btn-sm">Apply</Link><Link to="/about" className="btn btn-outline btn-sm">Current research</Link></div>
            </article>

            <article className="prog-card t-lime rv" data-hide={shows('short') ? undefined : 'true'} data-pop={tick === 0 ? undefined : tick % 2 ? 'a' : 'b'}>
              <span className="prog-hero">Summer · open to all</span>
              <h3>AI Foundations Bootcamp</h3>
              <div className="dur">4 weeks · June · full-time on campus</div>
              <p className="desc">Four weeks from zero to a working model. Python, data handling, and your first trained network — taught on real lab machines, not a video course.</p>
              <ul>
                <li>No coding background required to join</li>
                <li>Certificate + a project you can show an employer</li>
                <li>Fee adjusted against a later degree, if you enrol</li>
              </ul>
              <div className="prog-foot">
                <span className="fee">₹14,900<small>total · incl. materials</small></span>
                <span className="intake">Intake 80</span>
              </div>
              <div className="prog-cta"><Link to="/apply" className="btn btn-red btn-sm">Register</Link><Link to="/event" className="btn btn-outline btn-sm">Also see: Build Week</Link></div>
            </article>

            <article className="prog-card t-salmon rv" data-hide={shows('short') ? undefined : 'true'} data-pop={tick === 0 ? undefined : tick % 2 ? 'a' : 'b'}>
              <span className="prog-hero">Ages 11–17 · weekends</span>
              <h3>AI Olympiad — School Track</h3>
              <div className="dur">Saturdays · 10 sessions per term · campus</div>
              <p className="desc">The weekend track that feeds India's AI Olympiad teams. Build-first teaching for school students, with parents welcome in the opening session.</p>
              <ul>
                <li>Saturday mornings — never clashes with school</li>
                <li>Team projects, demo days, inter-school meets</li>
                <li>Alumni of the track get bootcamp fee waived</li>
              </ul>
              <div className="prog-foot">
                <span className="fee">₹9,600<small>per 10-session term</small></span>
                <span className="intake">Intake 150</span>
              </div>
              <div className="prog-cta"><Link to="/apply" className="btn btn-red btn-sm">Register</Link><Link to="/contact" className="btn btn-outline btn-sm">Ask a question</Link></div>
            </article>

          </div>
        </div>
      </section>

      <section className="sec" style={{paddingTop: "0"}}>
        <div className="wrap">
          <div className="sec-head center rv">
            <span className="kicker">Not sure which one?</span>
            <h2>Two questions, <span className="accent">one answer</span></h2>
          </div>
          <div className="pagegrid c2">
            <article className="b-card vis-white rv">
              <svg className="mi" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1 3 2.5 6 2.5s6-1.5 6-2.5v-5"/></svg>
              <h3>School student, or parent of one?</h3>
              <p>Start with the AI Olympiad school track on Saturdays. It needs no coding, runs through the school year, and students who finish it get the summer bootcamp fee waived.</p>
              <p className="foot">Ages 11–17 · Saturday mornings</p>
            </article>
            <article className="b-card t-lav rv">
              <svg className="mi" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              <h3>Working, and cannot take a year off?</h3>
              <p>The evening diploma is built for exactly this — two weeknights plus a Saturday lab, six months, and the same faculty who teach the degrees. EMI available on the fee.</p>
              <p className="foot">Next cohort starts July 2026</p>
            </article>
          </div>
          <div className="hero-cta rv" style={{marginTop: "30px", justifyContent: "center"}}>
            <Link to="/contact" className="btn btn-red">Talk to a counsellor first <span className="arr" aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
    </Page>
  )
}
