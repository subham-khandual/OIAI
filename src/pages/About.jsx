import Page from '../components/layout/Page'
import { Link } from 'react-router-dom'
import CountUp from '../components/ui/CountUp'

export default function About() {
  
  return (
    <Page
      title="About — OIAI | Labs, faculty & campus in Bhubaneswar"
      description="Who runs OIAI: six research groups on Odisha's own problems, 42 faculty with a research or industry record, and a campus built around the lab."
    >
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker rv">Founded 2019 · Bhubaneswar</span>
          <h1 className="rv">Teaching AI by <span className="accent">doing AI</span></h1>
          <p className="lead rv">OIAI exists because Odisha's students were leaving the state to learn what
            can be taught here — <b>on problems that only exist here.</b> Six research groups, 42
            faculty, one campus built around the lab.</p>
          <div className="hero-cta rv">
            <Link to="/programmes" className="btn btn-red">See the programmes <span className="arr" aria-hidden="true">→</span></Link>
            <Link to="/contact" className="btn btn-white">Visit the campus</Link>
          </div>
        </div>
      </section>

      {/* STORY SPLIT */}
      <section className="sec" style={{paddingTop: "16px"}}>
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
                <div className="card">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  Odia corpus · 2.1M tokens · v3
                </div>
              </div>
              <div className="screen">
                <div className="row"><span className="bar w45"></span></div>
                <div className="row"><span className="bar w70"></span></div>
                <div className="row"><span className="bar" style={{width: "55%"}}></span></div>
              </div>
            </div>
            <div className="rv">
              <span className="kicker">Why we exist</span>
              <h2>Started by people who <span className="accent">refused to demo</span></h2>
              <p style={{color: "var(--gray)", fontSize: "16.5px", marginBottom: "18px"}}>
                OIAI opened in 2019 with two rooms, one GPU server and a conviction: an AI institute in
                Odisha should work on Odisha's problems — paddy disease, cyclone logistics, Odia-language
                computing — rather than repackaging Silicon Valley coursework.
              </p>
              <p style={{color: "var(--gray)", fontSize: "16.5px", marginBottom: "26px"}}>
                Seven years later the institute runs six research groups, publishes peer-reviewed work,
                and sends graduates into companies across eight sectors. The teaching model has not
                changed: <b style={{color: "var(--ink)"}}>a third of every programme is applied work, on real
                compute, with faculty who publish and mentors who ship.</b>
              </p>
              <div style={{display: "flex", gap: "11px", flexWrap: "wrap"}}>
                <Link to="/about#labs" className="btn btn-red">See the labs</Link>
                <Link to="/voices" className="btn btn-outline">Hear from students</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAMPUS NUMBERS */}
      <section className="stats" style={{paddingTop: "20px"}}>
        <div className="wrap">
          <div className="statgrid">
            <div className="stat-tile s-lime rv"><CountUp as="b" to={2019} group={false} /><span>Founded — first batch of 40 students</span></div>
            <div className="stat-tile s-lav rv"><CountUp as="b" to={42} /><span>Faculty with a research or industry record</span></div>
            <div className="stat-tile s-peach rv"><CountUp as="b" to={8} /><span>A100-class GPUs on the campus cluster</span></div>
            <div className="stat-tile s-salmon rv"><CountUp as="b" to={14} /><span>Peer-reviewed papers in the last two years</span></div>
          </div>
        </div>
      </section>

      {/* LABS (dark section) */}
      <section className="night sec" id="labs">
        <div className="wrap">
          <div className="sec-head rv" style={{maxWidth: "720px"}}>
            <span className="kicker">The labs</span>
            <h2>Six groups. Odisha's <span className="accent" style={{color: "#8B7BFF"}}>own problems.</span></h2>
            <p style={{color: "#A9AFC4"}}>Every group takes final-year students and paid fellows. Each one has
              a publication record or a deployed system — most have both.</p>
          </div>
          <div className="pagegrid c3">
            <article className="fcard rv">
              <span className="badge b-lime"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v1a7 7 0 0 1-14 0v-1M12 18v4"/></svg></span>
              <div>
                <h3>Odia Language AI</h3>
                <p>Speech and text for the state's own language — ASR, transliteration and a 2.1M-token corpus built in-house.</p>
                <p className="foot" style={{color: "#7C86A8"}}>3 publications · corpus open by request</p>
              </div>
            </article>
            <article className="fcard rv">
              <span className="badge b-lav"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg></span>
              <div>
                <h3>Agricultural ML</h3>
                <p>Crop-yield prediction and paddy disease detection with district-level data from five Odisha districts.</p>
                <p className="foot" style={{color: "#7C86A8"}}>r² 0.91 maize model · published Feb 2026</p>
              </div>
            </article>
            <article className="fcard rv">
              <span className="badge b-salmon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z"/><circle cx="12" cy="12" r="3"/></svg></span>
              <div>
                <h3>Computer Vision</h3>
                <p>Traffic, public-transport and infrastructure inspection models with two municipal deployments in trial.</p>
                <p className="foot" style={{color: "#7C86A8"}}>2 pilots live · Bhubaneswar municipal data</p>
              </div>
            </article>
            <article className="fcard rv">
              <span className="badge b-peach"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg></span>
              <div>
                <h3>Health AI</h3>
                <p>Screening-support models for district hospitals — triage and imaging, always with a clinician in the loop.</p>
                <p className="foot" style={{color: "#7C86A8"}}>1 hospital partnership · IRB-reviewed</p>
              </div>
            </article>
            <article className="fcard rv">
              <span className="badge b-lime"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg></span>
              <div>
                <h3>ML Systems</h3>
                <p>Training infrastructure, inference serving and the cluster tooling every other lab runs on.</p>
                <p className="foot" style={{color: "#7C86A8"}}>Runs the 8-GPU campus cluster</p>
              </div>
            </article>
            <article className="fcard rv">
              <span className="badge b-lav"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"/></svg></span>
              <div>
                <h3>AI Policy &amp; Society</h3>
                <p>Odisha-language datasets, skilling policy and the social questions the other five groups create.</p>
                <p className="foot" style={{color: "#7C86A8"}}>2 state-department consultations</p>
              </div>
            </article>
          </div>
          <div className="hero-cta rv" style={{marginTop: "34px"}}>
            <Link to="/apply" className="btn btn-white">Apply to the Fellowship <span className="arr" aria-hidden="true">→</span></Link>
            <Link to="/contact" className="btn btn-outline">Talk to a researcher</Link>
          </div>
        </div>
      </section>

      {/* FACULTY */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head center rv">
            <span className="kicker">The people</span>
            <h2>Faculty who <span className="accent">actually publish</span></h2>
            <p>A selection from the 42. Every one of them teaches undergraduates — no research-only
              appointments.</p>
          </div>
          <div className="pagegrid c3">
            <article className="fac rv">
              <span className="ava" style={{background: "var(--lime)"}}>SP</span>
              <div>
                <h3>Dr. Subhasmita Panda</h3>
                <div className="role">Head · Odia Language AI</div>
                <p>Built the 2.1M-token Odia corpus. Previously 6 years at an IIT language-tech lab.</p>
              </div>
            </article>
            <article className="fac rv">
              <span className="ava" style={{background: "var(--lav)"}}>RM</span>
              <div>
                <h3>Dr. Rajib Lochan Mohanty</h3>
                <div className="role">Lead · Agricultural ML</div>
                <p>Maize and paddy yield models with district agriculture offices. 5 publications.</p>
              </div>
            </article>
            <article className="fac rv">
              <span className="ava" style={{background: "var(--salmon)"}}>AR</span>
              <div>
                <h3>Prof. Ananya Rath</h3>
                <div className="role">Lead · Computer Vision</div>
                <p>Ran inspection CV systems in manufacturing before joining. Teaches the CV specialisation.</p>
              </div>
            </article>
            <article className="fac rv">
              <span className="ava" style={{background: "var(--peach)"}}>DJ</span>
              <div>
                <h3>Dr. Debasish Jena</h3>
                <div className="role">Lead · ML Systems</div>
                <p>Keeps the cluster honest. Distributed training, inference serving, and the systems course.</p>
              </div>
            </article>
            <article className="fac rv">
              <span className="ava" style={{background: "var(--salmon)"}}>SD</span>
              <div>
                <h3>Dr. Sipra Das</h3>
                <div className="role">Lead · Health AI</div>
                <p>Clinician-in-the-loop screening research with a district hospital partner.</p>
              </div>
            </article>
            <article className="fac rv">
              <span className="ava" style={{background: "var(--lime)"}}>AB</span>
              <div>
                <h3>Arun Kumar Behera</h3>
                <div className="role">Industry Mentor-in-Residence</div>
                <p>12 years shipping production ML. Runs the Friday code-review culture every student knows.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SECTORS MARQUEE */}
      <section className="sec" style={{paddingTop: "0"}}>
        <div className="wrap">
          <div className="sec-head center rv" style={{marginBottom: "26px"}}>
            <span className="kicker">Where the work goes</span>
            <h2>Interns placed across <span className="accent">eight sectors</span></h2>
            <p>18 partner companies send working engineers to campus every month. Company names and
              placement records are available on request during a campus visit — we do not put logos
              on a wall we cannot verify.</p>
          </div>
          <div className="marquee rv" aria-hidden="true">
            <div className="marq-track">
              <span>Fintech</span><span>Agritech</span><span>Health-tech</span><span>Ed-tech</span>
              <span>Retail &amp; e-commerce</span><span>Logistics</span><span>GovTech</span><span>Manufacturing</span>
              <span>Fintech</span><span>Agritech</span><span>Health-tech</span><span>Ed-tech</span>
              <span>Retail &amp; e-commerce</span><span>Logistics</span><span>GovTech</span><span>Manufacturing</span>
            </div>
          </div>
          <div className="hero-cta rv" style={{marginTop: "34px", justifyContent: "center"}}>
            <Link to="/voices" className="btn btn-red">See placement outcomes <span className="arr" aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
    </Page>
  )
}
