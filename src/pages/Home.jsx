import Page from '../components/layout/Page'
import { Link } from 'react-router-dom'
import CountUp from '../components/ui/CountUp'
import { useI18n } from '../context/I18nContext'

export default function Home() {
  const { t } = useI18n()
  return (
    <Page
      title="OIAI — Odisha Institute of Artificial Intelligence"
      description="OIAI is Odisha's institute for Artificial Intelligence. Degree programmes, research labs and industry-graded AI training in Bhubaneswar."
    >
      {/* ============================== HERO ============================== */}
      <section className="hero">
        <div className="wrap">
          <span className="kicker rv">{t('Admissions open · Batch 2026')}</span>

          <svg className="doodle d1" viewBox="0 0 120 60" fill="none" aria-hidden="true">
            <path d="M4 40 C 24 4, 44 58, 62 28 S 96 4, 116 34" stroke="currentColor" strokeWidth="7" strokeLinecap="round"/>
          </svg>
          <svg className="doodle d2" viewBox="0 0 80 80" fill="none" aria-hidden="true">
            <path d="M40 8 L46 30 L68 24 L52 40 L68 56 L46 50 L40 72 L34 50 L12 56 L28 40 L12 24 L34 30 Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
          </svg>
          <svg className="doodle d3" viewBox="0 0 80 80" fill="none" aria-hidden="true">
            <circle cx="40" cy="40" r="26" stroke="currentColor" strokeWidth="5" strokeDasharray="8 8"/>
          </svg>

          <h1 className="rv">Odisha's institute for <span className="accent">Artificial Intelligence</span></h1>

          <p className="sub rv">
            Degree programmes, working research labs and industry-graded AI training — taught in
            <b>Bhubaneswar</b> by faculty who publish and mentors who ship. Applications are free,
            and no entrance exam stands between a student and a seat.
          </p>

          <div className="hero-cta rv">
            <Link to="/apply" className="btn btn-red">{t('Start your application')} <span className="arr" aria-hidden="true">→</span></Link>
            <Link to="/programmes" className="btn btn-white">{t('Explore programmes')}</Link>
          </div>

          <div className="chips rv">
            <span className="chip">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              No entrance exam
            </span>
            <span className="chip">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Scholarships 25% – 100%
            </span>
            <span className="chip">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Hostel within 2 km
            </span>
            <span className="chip">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Two internships before you graduate
            </span>
          </div>
        </div>
      </section>

      {/* ============================== TRIO ============================== */}
      <section className="sec" style={{paddingTop: "26px"}}>
        <div className="wrap">
          <div className="trio">

            <article className="tile t-lime rv">
              <Link to="/admissions" className="pill-white">Admissions 2026 <span aria-hidden="true">→</span></Link>
              <svg viewBox="0 0 200 60" fill="none" aria-hidden="true" style={{position: "absolute", left: "26px", top: "96px", width: "62%", color: "var(--lav-dk)", opacity: ".85"}}>
                <path d="M4 42 C 34 4, 62 56, 92 26 S 150 2, 196 38" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
              </svg>
              <div className="bottom">
                <h3>Exceptional faculty fuel every OIAI student's success</h3>
                <p>42 faculty with an active research or industry record — not just full-time lecturers.</p>
              </div>
            </article>

            <article className="tile t-salmon rv">
              <span className="kicker">Join our community</span>
              <h3 style={{marginBottom: "14px"}}>2,400 students across the state</h3>
              <div className="bottom">
                <div className="avatars" aria-hidden="true">
                  <i style={{background: "var(--lime)"}}>S</i>
                  <i style={{background: "var(--lav)"}}>R</i>
                  <i style={{background: "var(--peach)"}}>A</i>
                  <i style={{background: "var(--salmon-dk)", color: "#fff"}}>K</i>
                </div>
                <p style={{marginTop: "12px", fontSize: "14px"}}><b style={{color: "var(--ink)"}}>58% come from outside Bhubaneswar</b> — from twelve districts.</p>
              </div>
            </article>

            <article className="tile t-lav rv">
              <Link to="/programmes" className="pill-white pill-lime">{t('Explore programmes')} <span aria-hidden="true">→</span></Link>
              <div className="panel" style={{marginTop: "14px"}}>
                <h4>OIAI Academy</h4>
                <div className="chipgrid">
                  <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>B.Tech AI</span>
                  <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>M.Tech</span>
                  <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Data Sci</span>
                  <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Diploma</span>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* ============================== TRUST STRIP ============================== */}
      <div className="strip">
        <div className="wrap">
          <p>Students join us from institutions across Odisha</p>
          <div className="strip-row">
            <span>NIT Rourkela</span><span>KIIT</span><span>IIT Bhubaneswar</span>
            <span>Sri Sri University</span><span>Utkal University</span><span>NISER</span>
          </div>
        </div>
      </div>

      {/* ============================== PROGRAMMES ============================== */}
      <section className="sec" id="programmes">
        <div className="wrap">
          <div className="split">
            <div className="split-vis vis-tint rv">
              <div className="screen">
                <div className="row">
                  <span className="dot" style={{background: "var(--lime)"}}></span>
                  <span className="dot" style={{background: "var(--salmon)"}}></span>
                  <span className="dot" style={{background: "var(--lav)"}}></span>
                  <span className="bar w45" style={{marginLeft: "6px"}}></span>
                </div>
                <div className="row"><span className="bar w70"></span></div>
              </div>
              <div className="screen">
                <div className="card">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  B.Tech CSE (AI &amp; ML) — 4 years
                </div>
                <div className="card">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  M.Tech AI — 2 years
                </div>
                <div className="card">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  B.Sc. Data Science — 3 years
                </div>
              </div>
            </div>

            <div className="rv">
              <span className="kicker">Programmes</span>
              <h2>Seven routes into <span className="accent">artificial intelligence</span></h2>
              <p style={{color: "var(--gray)", fontSize: "16.5px", marginBottom: "30px"}}>
                Undergraduate degrees, postgraduate specialisations, an evening diploma you can take
                alongside work, a paid research fellowship, and two short programmes for school students.
              </p>

              <div className="feat-list">
                <article className="fcard">
                  <span className="badge b-lime"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1 3 2.5 6 2.5s6-1.5 6-2.5v-5"/></svg></span>
                  <div>
                    <h3>B.Tech in CSE with AI &amp; Machine Learning</h3>
                    <p>The flagship. AI track from semester two, a two-semester capstone with a partner company, and a guaranteed final-year internship. Intake 240.</p>
                  </div>
                </article>

                <article className="fcard">
                  <span className="badge b-lav"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></span>
                  <div>
                    <h3>M.Tech AI &amp; B.Sc. Data Science</h3>
                    <p>Postgraduate specialisations in ML, computer vision and NLP, plus an undergraduate data science degree that feeds straight into it. Intakes 60 and 120.</p>
                  </div>
                </article>

                <article className="fcard">
                  <span className="badge b-salmon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></span>
                  <div>
                    <h3>Diploma, Fellowship &amp; short programmes</h3>
                    <p>A six-month evening diploma for working professionals, a ₹12,000/month research fellowship, a four-week summer bootcamp, and a weekend school track for ages 11–17.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== BENTO ============================== */}
      <section className="sec" style={{paddingTop: "20px"}}>
        <div className="wrap">
          <div className="sec-head center rv">
            <h2>Why learn <span className="accent">with us?</span></h2>
            <p>Three things you will not get from a generic online course — each one provable, each one
              you can check before you enrol.</p>
          </div>

          <div className="bento">
            <article className="b-card t-lime rv">
              <svg className="mi" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
              <h3>You work in a lab, not a lecture hall</h3>
              <p>At least a third of every programme is applied work, running on our own GPU cluster.</p>
              <p className="foot">8 A100-class GPUs · 14 papers in two years</p>
            </article>

            <article className="b-card t-salmon rv">
              <svg className="mi" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg>
              <h3>Industry mentors who actually show up</h3>
              <p>18 partner companies send working engineers every month — not recorded career webinars.</p>
              <p className="foot">340+ internships awarded · ₹12.4 L median</p>
            </article>

            <article className="b-card t-lav rv">
              <svg className="mi" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/></svg>
              <h3>Built for families who need the number up front</h3>
              <p>Fees, deadlines and scholarship criteria published before you fill in a single form.</p>
              <p className="foot">31 students on full tuition aid · ₹0 to apply</p>
            </article>

            <article className="b-card t-peach rv">
              <svg className="mi" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20"/></svg>
              <h3>Research on Odisha's own problems</h3>
              <p>Odia-language speech and text, agricultural AI for local crop patterns, and low-resource NLP.</p>
              <p className="foot">2.1M token Odia corpus · 3 publications</p>
            </article>

            <article className="b-card t-lime rv">
              <svg className="mi" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <h3>Nobody gets left behind</h3>
              <p>A named faculty mentor and industry mentor from year two, a week-nine checkpoint, and a recovery plan.</p>
              <p className="foot">1 in 9 students use it · not on the transcript</p>
            </article>

            <article className="b-card t-salmon rv">
              <svg className="mi" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
              <h3>Outcomes you can verify</h3>
              <p>96% of graduates placed or in higher study, with the definition of "placed" published alongside the number.</p>
              <p className="foot">Record available on request</p>
            </article>
          </div>
        </div>
      </section>

      {/* ============================== NIGHT / RESEARCH ============================== */}
      <section className="night sec" id="why">
        <div className="wrap">
          <div className="split">
            <div className="rv">
              <span className="kicker">The labs</span>
              <h2>Real compute.<br/>Real publication.</h2>
              <p style={{color: "#A9AFC4", fontSize: "16.5px", marginBottom: "26px"}}>
                Our research groups publish rather than demo. Students in the final year and fellows get
                their own time on the cluster, and the datasets are Odisha's own — agriculture, health
                and public services.
              </p>
              <div style={{display: "flex", gap: "11px", flexWrap: "wrap"}}>
                <Link to="/about#labs" className="btn btn-white">See the lab list</Link>
                <Link to="/contact" className="btn btn-outline">Talk to a researcher</Link>
              </div>
            </div>

            <div className="rv">
              <div className="codeblock">
                <div><span className="cm"># oiai-lab · gpu-a100-03</span></div>
                <div><span className="kw">from</span> oiai <span className="kw">import</span> dataset</div>
                <div>&nbsp;</div>
                <div>ds = <span className="fn">load</span>(<span className="st">"odia_crop_yield_v3"</span>)</div>
                <div>model = <span className="fn">train</span>(ds, epochs=<span className="st">40</span>)</div>
                <div>&nbsp;</div>
                <div><span className="ok">→ r² 0.91</span> · maize, Puri district</div>
                <div><span className="ok">→ published</span> · reviewed, Feb 2026</div>
              </div>
              <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "14px"}}>
                <div className="statcard"><b>8</b><span>A100-class GPUs</span></div>
                <div className="statcard"><b>14</b><span>Peer-reviewed papers, 2 yrs</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== STATS ============================== */}
      <section className="stats">
        <div className="wrap">
          <div className="sec-head center rv">
            <span className="kicker">The institute in numbers</span>
            <h2>Small enough to teach you.<br/><span className="accent">Built to be taken seriously.</span></h2>
          </div>
          <div className="statgrid">
            <div className="stat-tile s-lime rv"><CountUp as="b" to={2400} suffix="+" /><span>Students across seven AI programmes</span></div>
            <div className="stat-tile s-lav rv"><CountUp as="b" to={42} /><span>Faculty with a research or industry record</span></div>
            <div className="stat-tile s-peach rv"><CountUp as="b" to={18} /><span>Partner companies for internship and hiring</span></div>
            <div className="stat-tile s-salmon rv"><CountUp as="b" to={96} suffix="%" /><span>Graduates placed or in higher study</span></div>
          </div>
        </div>
      </section>

      {/* ============================== VOICES ============================== */}
      <section className="sec" id="voices" style={{paddingTop: "20px"}}>
        <div className="wrap">
          <div className="sec-head center rv">
            <span className="kicker">Student &amp; parent voices</span>
            <h2>What it is <span className="accent">actually like</span> here</h2>
          </div>

          <div className="bento" style={{gridTemplateColumns: "repeat(3,1fr)"}}>
            <article className="b-card vis-white rv" style={{minHeight: "250px"}}>
              <div style={{color: "#F0A400", fontSize: "15px", letterSpacing: "2px", marginBottom: "14px"}} aria-label="5 out of 5">★★★★★</div>
              <p style={{fontSize: "15px", color: "var(--ink-2)", opacity: "1"}}>"I came in from Cuttack with no coding background at all. By second semester I was building models for paddy disease detection, and my mentor was reviewing my code every Friday."</p>
              <p className="foot" style={{color: "var(--gray)"}}>Swagatika Mohanty · B.Tech AI, '27</p>
            </article>

            <article className="b-card t-peach rv" style={{minHeight: "250px"}}>
              <div style={{color: "#F0A400", fontSize: "15px", letterSpacing: "2px", marginBottom: "14px"}} aria-label="5 out of 5">★★★★★</div>
              <p style={{fontSize: "15px", color: "var(--ink-2)", opacity: "1"}}>"The fee page told us everything before we visited. We applied for the aid, got 75% covered, and did not have to make ten phone calls."</p>
              <p className="foot">Rashmi Ranjan Das · Parent, Berhampur</p>
            </article>

            <article className="b-card vis-white rv" style={{minHeight: "250px"}}>
              <div style={{color: "#F0A400", fontSize: "15px", letterSpacing: "2px", marginBottom: "14px"}} aria-label="5 out of 5">★★★★★</div>
              <p style={{fontSize: "15px", color: "var(--ink-2)", opacity: "1"}}>"The internship was real work on a real model. Neither company asked me to whiteboard fizzbuzz — we had already shipped something."</p>
              <p className="foot" style={{color: "var(--gray)"}}>Abhishek Kar · M.Tech AI, '25, placed</p>
            </article>
          </div>
        </div>
      </section>

      {/* ============================== EVENT ============================== */}
      <section className="sec" style={{paddingTop: "20px"}}>
        <div className="wrap">
          <div className="event rv">
            <div className="event-vis">
              <span className="kicker">Upcoming event</span>
              <div className="event-date">28<span style={{opacity: ".35"}}>/</span>03</div>
              <div className="place">Bhubaneswar · 2026</div>
            </div>
            <div className="event-body">
              <span className="kicker">Open to all colleges in Odisha</span>
              <h3>AI Build Week 2026<br/>Odisha State Finals</h3>
              <p>Three days on campus where student teams build a working AI product against a brief, get it
                judged by partner-company engineers, and compete for funding. You do not have to be an OIAI
                student to enter.</p>
              <div className="event-meta">
                <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg> 28–30 March 2026</div>
                <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg> OIAI campus, Bhubaneswar</div>
                <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg> 200+ teams last year</div>
              </div>
              <div className="event-cta">
                <Link to="/apply" className="btn btn-red">Register your team <span className="arr" aria-hidden="true">→</span></Link>
                <Link to="/event" className="btn btn-outline">Event rules</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== FAQ ============================== */}
      <section className="sec" id="faq">
        <div className="wrap">
          <div className="sec-head center rv">
            <span className="kicker">Questions parents ask us</span>
            <h2>Straight <span className="accent">answers</span></h2>
          </div>
          <div className="faq rv">
            <details open>
              <summary>Is there an entrance exam?</summary>
              <div className="ans">No. Admission is through a 45-minute aptitude test in basic mathematics and logical reasoning, plus a 10-minute conversation. There is no negative marking and no cost to the test. JEE and NEET scores are accepted for the B.Tech if you have them, but they are not required.</div>
            </details>
            <details>
              <summary>What does the total cost actually work out to?</summary>
              <div className="ans">B.Tech CSE (AI &amp; ML) is ₹2,40,000 per year, which includes lab access, the computing cluster and all course materials. Hostel is ₹48,000 to ₹72,000 per year depending on the block. Transport within Bhubaneswar is ₹18,000 per year. There is no separate lab fee, library surcharge or examination charge.</div>
            </details>
            <details>
              <summary>How does the scholarship scheme work?</summary>
              <div className="ans">It is means-tested on annual family income, not on marks. Income up to ₹2.5 lakh receives 100% tuition waiver, up to ₹4 lakh receives 75%, up to ₹6 lakh receives 50%, and up to ₹9 lakh receives 25%. You submit income documents once and the award carries for the full duration of the programme.</div>
            </details>
            <details>
              <summary>Is aid available for students outside Odisha?</summary>
              <div className="ans">Yes. 31 students in the current batch are on full tuition aid and 58% of the institute is from outside Bhubaneswar, from across twelve districts. The aid scheme is not restricted by state, though the hostels fill faster from nearby districts.</div>
            </details>
            <details>
              <summary>Do students get internships, and is one guaranteed?</summary>
              <div className="ans">Two internships before graduation are built into the B.Tech and M.Tech structures. Students who prefer the research route can substitute a research assistantship for one, which is stipended at ₹12,000 a month. In the last graduating batch, 96% were placed or had entered higher study.</div>
            </details>
            <details>
              <summary>What happens to students who are struggling?</summary>
              <div className="ans">Every student is assigned a faculty mentor and a named industry mentor from second year. We run a checkpoint at week nine, and if someone is behind, the adviser builds a recovery plan with them rather than waiting for the end of term. Roughly one student in nine uses this each semester, and it is not recorded on the transcript.</div>
            </details>
          </div>
        </div>
      </section>

      {/* ============================== CTA BAND ============================== */}
      <section className="ctaband" id="apply">
        <div className="wrap">
          <div className="ctaband-inner rv">
            <h2>Take your next step into<br/>artificial intelligence</h2>
            <p>Your application costs nothing, so there is no reason to wait. Take the aptitude test, or
              talk to a counsellor first if you are still deciding — either way you get a real answer.</p>
            <div className="hero-cta">
              <Link to="/apply" className="btn btn-red">{t('Start your application')} <span className="arr" aria-hidden="true">→</span></Link>
              <Link to="/contact" className="btn btn-white">Book a campus visit</Link>
            </div>
            <div style={{display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", marginTop: "26px"}}>
              <span className="chip">Free application</span>
              <span className="chip">Reply in one working day</span>
              <span className="chip">No obligation to enrol</span>
            </div>
          </div>
        </div>
      </section>
    </Page>
  )
}
