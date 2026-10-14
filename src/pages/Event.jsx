import Page from '../components/layout/Page'
import { Link } from 'react-router-dom'

export default function Event() {
  
  return (
    <Page
      title="AI Build Week 2026 — OIAI, Bhubaneswar"
      description="Three days, 200+ teams, open to every college in Odisha. Build a working AI product against a real brief, get judged by partner-company engineers, compete for funding. 28–30 March 2026."
    >
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker rv">Open to all colleges in Odisha</span>
          <h1 className="rv">AI Build Week <span className="accent">2026</span></h1>
          <p className="lead rv">Three days on campus. Student teams build a working AI product against a
            real brief, get it judged by partner-company engineers, and compete for funding.
            <b>You do not have to be an OIAI student to enter.</b></p>
          <div className="hero-cta rv">
            <Link to="/apply" className="btn btn-red">Register your team <span className="arr" aria-hidden="true">→</span></Link>
            <a href="#rules" className="btn btn-white">Who can enter</a>
          </div>
          <div className="chips rv">
            <span className="chip">28–30 March 2026</span>
            <span className="chip">OIAI campus, Bhubaneswar</span>
            <span className="chip">200+ teams last year</span>
            <span className="chip">Entry free · meals included</span>
          </div>
        </div>
      </section>

      {/* META CARD */}
      <section className="sec" style={{paddingTop: "14px"}}>
        <div className="wrap">
          <div className="event rv">
            <div className="event-vis">
              <span className="kicker">Mark the dates</span>
              <div className="event-date">28<span style={{opacity: ".35"}}>/</span>03</div>
              <div className="place">→ 30 March · 2026</div>
            </div>
            <div className="event-body">
              <span className="kicker">The format</span>
              <h3>Build, demo, get judged by people who ship</h3>
              <p>Teams pick one of three briefs on Friday night, build through the weekend on provided
                compute, and demo to a jury of partner-company engineers on Sunday. Top teams get
                seed funding and a fast-track interview with the partner companies.</p>
              <div className="event-meta">
                <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg> Teams of 2–4 · any Odisha college, any year</div>
                <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg> Lab + cluster access for every team</div>
                <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg> On-campus stay available for outstation teams</div>
              </div>
              <div className="event-cta">
                <Link to="/apply" className="btn btn-red">Register your team <span className="arr" aria-hidden="true">→</span></Link>
                <Link to="/contact" className="btn btn-outline">Ask about stay &amp; travel</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="sec" style={{paddingTop: "10px"}}>
        <div className="wrap">
          <div className="sec-head center rv">
            <span className="kicker">The weekend</span>
            <h2>Three days, <span className="accent">hour by hour</span></h2>
          </div>
          <div className="sched rv">
            <details className="sched-day" open>
              <summary>Friday, 28 March — briefs, teams, setup</summary>
              <div className="day-body">
                <div className="slot"><time>4:00 pm</time><div><b>Check-in &amp; kit pickup</b><p>ID cards, cluster accounts, hostel allotment for outstation teams.</p></div></div>
                <div className="slot"><time>5:30 pm</time><div><b>Opening keynote</b><p>Why Odisha needs its own AI builders — and what the jury is looking for.</p></div></div>
                <div className="slot"><time>6:30 pm</time><div><b>The three briefs are released</b><p>Agriculture, public services, and Odia-language tech. Teams pick one.</p></div></div>
                <div className="slot"><time>8:00 pm</time><div><b>Dinner + team formation desk</b><p>Solo participants get matched into teams here.</p></div></div>
              </div>
            </details>
            <details className="sched-day">
              <summary>Saturday, 29 March — build day</summary>
              <div className="day-body">
                <div className="slot"><time>8:00 am</time><div><b>Labs open · breakfast</b><p>Cluster allocation goes live for all teams.</p></div></div>
                <div className="slot"><time>11:00 am</time><div><b>Mentor rounds</b><p>Partner-company engineers walk the floor; each team gets two reviews.</p></div></div>
                <div className="slot"><time>3:00 pm</time><div><b>Mid-point checkpoint</b><p>Not graded — a nudge. Teams behind on data get priority help.</p></div></div>
                <div className="slot"><time>9:00 pm</time><div><b>Night build + late mess</b><p>Labs stay open till 1 am for teams that work after dark.</p></div></div>
              </div>
            </details>
            <details className="sched-day">
              <summary>Sunday, 30 March — demos &amp; awards</summary>
              <div className="day-body">
                <div className="slot"><time>9:00 am</time><div><b>Code freeze · demo prep</b><p>Final builds submitted; demo slots assigned by lottery.</p></div></div>
                <div className="slot"><time>11:00 am</time><div><b>Live demos to the jury</b><p>7 minutes per team: 5 to demo, 2 for questions.</p></div></div>
                <div className="slot"><time>2:30 pm</time><div><b>Awards &amp; seed funding</b><p>Winners announced; fast-track interviews scheduled on the spot.</p></div></div>
                <div className="slot"><time>4:00 pm</time><div><b>Closing high tea</b><p>Every team keeps its cluster account for two weeks after the event.</p></div></div>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* TRACKS + PRIZES */}
      <section className="sec" style={{paddingTop: "0"}}>
        <div className="wrap">
          <div className="sec-head center rv">
            <span className="kicker">What you build for</span>
            <h2>Prizes &amp; <span className="accent">tracks</span></h2>
          </div>
          <div className="prize">
            <div className="out-card t-lime rv"><b>₹1,00,000</b><span>Grand prize — seed funding for the winning team's product</span></div>
            <div className="out-card t-lav rv"><b>₹50,000 × 2</b><span>Track prizes — agriculture and Odia-language tech</span></div>
            <div className="out-card t-peach rv"><b>Fast-track</b><span>Internship interviews with all 18 partner companies</span></div>
          </div>
          <div className="chips rv" style={{marginTop: "22px"}}>
            <span className="chip">Track 1 · Agriculture &amp; rural economy</span>
            <span className="chip">Track 2 · Public services &amp; civic tech</span>
            <span className="chip">Track 3 · Odia language &amp; culture</span>
          </div>
        </div>
      </section>

      {/* RULES */}
      <section className="sec" id="rules" style={{paddingTop: "0"}}>
        <div className="wrap">
          <div className="split">
            <div className="rv">
              <span className="kicker">Eligibility</span>
              <h2>Who can <span className="accent">enter</span></h2>
              <div className="feat-list" style={{marginTop: "22px"}}>
                <article className="fcard">
                  <span className="badge b-lime"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1 3 2.5 6 2.5s6-1.5 6-2.5v-5"/></svg></span>
                  <div>
                    <h3>Any college in Odisha</h3>
                    <p>Engineering, science, commerce or design — any degree, any year. Cross-college teams are welcome and last year's winners were one.</p>
                  </div>
                </article>
                <article className="fcard">
                  <span className="badge b-lav"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></span>
                  <div>
                    <h3>Teams of 2–4 students</h3>
                    <p>Register once as a team with a name and a college. Solo participants get matched at the Friday team-formation desk.</p>
                  </div>
                </article>
                <article className="fcard">
                  <span className="badge b-salmon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></span>
                  <div>
                    <h3>Free entry, meals included</h3>
                    <p>No registration fee. On-campus stay is available for outstation teams — request it in the registration form and we confirm within two working days.</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="split-vis vis-lime rv">
              <div className="screen">
                <div className="row">
                  <span className="dot" style={{background: "var(--lav)"}}></span>
                  <span className="dot" style={{background: "var(--salmon)"}}></span>
                  <span className="dot" style={{background: "var(--peach)"}}></span>
                  <span className="bar w45" style={{marginLeft: "6px"}}></span>
                </div>
                <div className="card">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  214 teams · 2025 edition
                </div>
                <div className="card">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  37 colleges represented
                </div>
              </div>
              <div className="screen">
                <div className="row"><span className="bar w70"></span></div>
                <div className="row"><span className="bar w45"></span></div>
                <div className="row"><span className="bar" style={{width: "58%"}}></span></div>
              </div>
            </div>
          </div>
          <div className="hero-cta rv" style={{marginTop: "36px", justifyContent: "center"}}>
            <Link to="/apply" className="btn btn-red">Register your team — it's free <span className="arr" aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
    </Page>
  )
}
