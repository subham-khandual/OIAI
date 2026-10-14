import Page from '../components/layout/Page'
import { Link } from 'react-router-dom'
import useDemoForm from '../hooks/useDemoForm'

export default function Contact() {
  const form = useDemoForm({ prefix: 'OIAI-MSG' })
  return (
    <Page
      title="Contact & Campus Visits — OIAI, Bhubaneswar"
      description="Talk to OIAI: admissions counsellors, campus visits every week, and a reply within one working day. SCS Complex area, Bhubaneswar."
    >
      <section className="page-hero" style={{paddingBottom: "34px"}}>
        <div className="wrap">
          <span className="kicker rv">We answer. Usually the same day.</span>
          <h1 className="rv">Talk to a <span className="accent">human</span></h1>
          <p className="lead rv">Admissions questions, campus visits, event registrations or research
            collaborations — one form, one inbox, <b>a reply within one working day.</b></p>
        </div>
      </section>

      <section className="sec" style={{paddingTop: "6px"}}>
        <div className="wrap">
          <div className="contact-grid">

            {/* LEFT: info */}
            <div style={{display: "grid", gap: "16px", alignContent: "start"}}>
              <div className="info-card rv" style={{background: "var(--peach)", borderColor: "transparent"}}>
                <h3>Campus address</h3>
                <address>
                  Odisha Institute of Artificial Intelligence<br/>
                  (SCS Complex area), Infocity Road,<br/>
                  Bhubaneswar, Odisha 751024, India
                </address>
                <p style={{marginTop: "10px"}}><a className="mail" href="#" onClick={(e) => e.preventDefault()}>Get directions →</a></p>
              </div>

              <div className="info-card rv">
                <h3>Admissions office</h3>
                <div className="hours">
                  <div><b>Mon–Sat</b><span>9:00 am – 5:30 pm</span></div>
                  <div><b>Sunday</b><span>Closed (tests run Saturdays)</span></div>
                  <div><b>Phone</b><span>+91 674 ··· ····</span></div>
                  <div><b>WhatsApp</b><span>Same number, replies within hours</span></div>
                </div>
                <p style={{marginTop: "12px"}}><a className="mail" href="mailto:admissions@oiai.example">admissions@oiai.example</a></p>
              </div>

              <div className="info-card rv">
                <h3>Other departments</h3>
                <div className="hours">
                  <div><b>Research &amp; fellows</b><span>research@oiai.example</span></div>
                  <div><b>AI Build Week</b><span>buildweek@oiai.example</span></div>
                  <div><b>Media</b><span>press@oiai.example</span></div>
                  <div><b>Grievance office</b><span>grievance@oiai.example</span></div>
                </div>
              </div>

              <div className="map-mock rv" role="img" aria-label="Stylised map showing the OIAI campus in Bhubaneswar">
                <span className="pin">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  OIAI Campus · Infocity Road
                </span>
              </div>
            </div>

            {/* RIGHT: form */}
            <div>
              <form className="formcard rv" id="contactForm"  onSubmit={form.onSubmit} onInput={form.onInput} hidden={form.done} noValidate style={{marginInline: "0"}}>
                <h2 style={{fontSize: "24px", marginBottom: "6px"}}>Send a message</h2>
                <p style={{color: "var(--gray)", fontSize: "14px", marginBottom: "26px"}}>Tell us what you need.
                  If you want a campus visit, pick it below and we will confirm a slot.</p>

                <div className="frow">
                  <div className={`field${form.errors.includes('fullname') ? ' err' : ''}`}>
                    <label htmlFor="cfn">Your name <span className="req">*</span></label>
                    <input id="cfn" name="fullname" type="text" autoComplete="name" required/>
                    <span className="msg">Please enter your name.</span>
                  </div>
                  <div className={`field${form.errors.includes('phone') ? ' err' : ''}`}>
                    <label htmlFor="cph">Mobile <span className="req">*</span></label>
                    <input id="cph" name="phone" type="tel" inputMode="numeric" required placeholder="10-digit mobile"/>
                    <span className="msg">Enter a valid 10-digit Indian mobile number.</span>
                  </div>
                </div>

                <div className={`field${form.errors.includes('email') ? ' err' : ''}`}>
                  <label htmlFor="cem">Email <span className="req">*</span></label>
                  <input id="cem" name="email" type="email" autoComplete="email" required/>
                  <span className="msg">Enter a valid email address.</span>
                </div>

                <div className={`field${form.errors.includes('topic') ? ' err' : ''}`}>
                  <label htmlFor="ct">What is this about? <span className="req">*</span></label>
                  <select id="ct" name="topic" required>
                    <option value="">Choose…</option>
                    <option>Admissions question</option>
                    <option>Book a campus visit</option>
                    <option>Scholarships &amp; aid</option>
                    <option>AI Build Week 2026</option>
                    <option>Research collaboration</option>
                    <option>Something else</option>
                  </select>
                  <span className="msg">Please choose a topic.</span>
                </div>

                <div className={`field${form.errors.includes('message') ? ' err' : ''}`}>
                  <label htmlFor="cm">Your message <span className="req">*</span></label>
                  <textarea id="cm" name="message" required placeholder="A sentence or two is fine. If you're a parent, feel free to tell us what worries you — those are the questions we answer best."></textarea>
                  <span className="msg">Please write a short message.</span>
                </div>

                <div className="form-foot">
                  <button type="submit" className="btn btn-red" disabled={form.sending}>{form.sending ? 'Sending…' : (<>Send message <span className="arr" aria-hidden="true">→</span></>)}</button>
                  <small>Reply within one working day</small>
                </div>
              </form>

              <div className="success rv" id="contactSuccess" hidden={!form.done} style={{marginInline: "0"}}>
                <div className="big"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
                <h2>Message sent</h2>
                <p>Thanks — it's with the right desk now. Expect a reply within one working day.</p>
                <span className="ref">{form.ref || 'OIAI-MSG-····'}</span>
                <div className="hero-cta" style={{marginTop: "20px"}}>
                  <Link to="/admissions" className="btn btn-outline btn-sm">Browse fees &amp; aid meanwhile</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* VISIT BAND */}
      <section className="ctaband" style={{paddingTop: "0"}}>
        <div className="wrap">
          <div className="ctaband-inner rv">
            <h2>See the campus <br/>before you decide</h2>
            <p>Visits run every Wednesday and Saturday: a lab walkthrough, a live class observation, and
              time with current students — no counsellor in the room unless you ask for one.</p>
            <div className="hero-cta">
              <Link to="/apply" className="btn btn-red">Apply instead — it's free <span className="arr" aria-hidden="true">→</span></Link>
              <Link to="/programmes" className="btn btn-white">Browse programmes first</Link>
            </div>
          </div>
        </div>
      </section>
    </Page>
  )
}
