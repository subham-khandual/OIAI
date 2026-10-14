import Page from '../components/layout/Page'
import { Link } from 'react-router-dom'
import useDemoForm from '../hooks/useDemoForm'

export default function Apply() {
  const form = useDemoForm({ prefix: 'OIAI-2026' })
  return (
    <Page
      title="Apply — OIAI | Free application, Batch of 2026"
      description="Apply to OIAI in about 15 minutes. Free application, aptitude test within 7 days, offer and scholarship decision together. Applications close 31 March 2026."
    >
      <section className="page-hero" style={{paddingBottom: "34px"}}>
        <div className="wrap">
          <span className="kicker rv">Free application · Batch of 2026</span>
          <h1 className="rv">Start your <span className="accent">application</span></h1>
          <p className="lead rv">Fifteen minutes, no fee, no documents to upload yet. You will hear from us
            within one working day, with a test slot. <b>Applications close 31 March 2026.</b></p>
          <div className="chips rv">
            <span className="chip">No application fee</span>
            <span className="chip">Reply in one working day</span>
            <span className="chip">No obligation to enrol</span>
          </div>
        </div>
      </section>

      <section className="sec" style={{paddingTop: "6px"}}>
        <div className="wrap">
          <div className="contact-grid" style={{gridTemplateColumns: "1.5fr 1fr"}}>

            <div>
              {/* FORM */}
              <form className="formcard rv" id="applyForm"  onSubmit={form.onSubmit} onInput={form.onInput} hidden={form.done} noValidate>
                <h2 style={{fontSize: "24px", marginBottom: "6px"}}>Application — Batch of 2026</h2>
                <p style={{color: "var(--gray)", fontSize: "14px", marginBottom: "26px"}}>Fields marked
                  <span style={{color: "var(--red)", fontWeight: "700"}}>*</span> are required. Everything else
                  can be completed later.</p>

                <div className="frow">
                  <div className={`field${form.errors.includes('fullname') ? ' err' : ''}`}>
                    <label htmlFor="afn">Full name <span className="req">*</span></label>
                    <input id="afn" name="fullname" type="text" autoComplete="name" required/>
                    <span className="msg">Please enter your full name.</span>
                  </div>
                  <div className={`field${form.errors.includes('phone') ? ' err' : ''}`}>
                    <label htmlFor="aph">Mobile number <span className="req">*</span></label>
                    <input id="aph" name="phone" type="tel" inputMode="numeric" autoComplete="tel" required placeholder="10-digit mobile"/>
                    <span className="msg">Enter a valid 10-digit Indian mobile number.</span>
                  </div>
                </div>

                <div className="frow">
                  <div className={`field${form.errors.includes('email') ? ' err' : ''}`}>
                    <label htmlFor="aem">Email <span className="req">*</span></label>
                    <input id="aem" name="email" type="email" autoComplete="email" required/>
                    <span className="msg">Enter a valid email address.</span>
                  </div>
                  <div className={`field${form.errors.includes('district') ? ' err' : ''}`}>
                    <label htmlFor="adis">District <span className="req">*</span></label>
                    <input id="adis" name="district" type="text" required placeholder="e.g. Cuttack"/>
                    <span className="msg">Please enter your home district.</span>
                  </div>
                </div>

                <div className="frow">
                  <div className={`field${form.errors.includes('programme') ? ' err' : ''}`}>
                    <label htmlFor="apg">Programme <span className="req">*</span></label>
                    <select id="apg" name="programme" required>
                      <option value="">Choose a programme…</option>
                      <option>B.Tech CSE (AI &amp; Machine Learning)</option>
                      <option>M.Tech in Artificial Intelligence</option>
                      <option>B.Sc. Data Science</option>
                      <option>Diploma in Applied AI (evening)</option>
                      <option>Research Fellowship</option>
                      <option>AI Foundations Bootcamp (June)</option>
                      <option>AI Olympiad — School Track (ages 11–17)</option>
                      <option>AI Build Week 2026 — team registration</option>
                    </select>
                    <span className="msg">Please choose a programme.</span>
                  </div>
                  <div className={`field${form.errors.includes('qualification') ? ' err' : ''}`}>
                    <label htmlFor="aq">Last qualification <span className="req">*</span></label>
                    <select id="aq" name="qualification" required>
                      <option value="">Select…</option>
                      <option>Class 12 (or appearing)</option>
                      <option>Diploma</option>
                      <option>Bachelor's degree</option>
                      <option>Master's degree</option>
                      <option>Currently in school (Class 6–12)</option>
                      <option>Working professional</option>
                    </select>
                    <span className="msg">Please select your last qualification.</span>
                  </div>
                </div>

                <div className={`field${form.errors.includes('aid') ? ' err' : ''}`}>
                  <label htmlFor="aid">Do you want to be considered for scholarship aid? <span className="req">*</span></label>
                  <select id="aid" name="aid" required>
                    <option value="">Select…</option>
                    <option>Yes — assess me for aid (income documents later)</option>
                    <option>No — applying at full fee</option>
                    <option>Not sure yet</option>
                  </select>
                  <span className="msg">Please choose an option.</span>
                </div>

                <div className={`field${form.errors.includes('why') ? ' err' : ''}`}>
                  <label htmlFor="awhy">What do you want to build? <span style={{color: "var(--gray-2)", fontWeight: "500"}}>(optional)</span></label>
                  <textarea id="awhy" name="why" placeholder="Two lines is plenty. What interests you, what have you tried, what do you want to work on?"></textarea>
                </div>

                <div className="form-foot">
                  <button type="submit" className="btn btn-red" disabled={form.sending}>{form.sending ? 'Sending…' : (<>Submit application <span className="arr" aria-hidden="true">→</span></>)}</button>
                  <small>Takes ~15 minutes · we reply within one working day</small>
                </div>
              </form>

              {/* SUCCESS */}
              <div className="success rv" id="applySuccess" hidden={!form.done}>
                <div className="big"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
                <h2>Application received</h2>
                <p>Thanks — your application for <b>{form.choice || 'your programme'}</b> is in. We reply within
                  one working day with your aptitude test slot (on campus every Saturday, or online).</p>
                <p>Your reference:</p>
                <span className="ref">{form.ref || 'OIAI-2026-····'}</span>
                <p style={{marginTop: "22px"}}>While you wait:</p>
                <div className="hero-cta" style={{marginTop: "10px"}}>
                  <Link to="/admissions" className="btn btn-outline btn-sm">See the full process</Link>
                  <Link to="/event" className="btn btn-outline btn-sm">AI Build Week 2026</Link>
                </div>
              </div>
            </div>

            {/* ASIDE */}
            <aside style={{display: "grid", gap: "16px", alignContent: "start"}}>
              <div className="info-card rv" style={{background: "var(--lime)", borderColor: "transparent"}}>
                <h3>What happens next</h3>
                <div className="hours">
                  <div><b>Day 0</b><span>Application received</span></div>
                  <div><b>Day 1</b><span>We call with a test slot</span></div>
                  <div><b>Within 7 days</b><span>45-min aptitude test + 10-min chat</span></div>
                  <div><b>+5 days</b><span>Offer &amp; aid decision, together</span></div>
                </div>
              </div>
              <div className="info-card rv">
                <h3>Applying with JEE / NEET?</h3>
                <p>Enter your score in "What do you want to build?" — or leave it out entirely. The
                  aptitude test is not an entrance exam, and a JEE score is an alternative, not an
                  advantage.</p>
              </div>
              <div className="info-card rv">
                <h3>Need help first?</h3>
                <p>Talk to a counsellor before applying — no sales script, just answers.</p>
                <p style={{marginTop: "10px"}}><Link to="/contact" className="mail">Book a conversation →</Link></p>
              </div>
              <div className="info-card rv" style={{background: "var(--lav)", borderColor: "transparent"}}>
                <h3>Deadline</h3>
                <p style={{color: "var(--ink)"}}>Applications close <b>31 March 2026, 11:59 pm</b>. Aid
                  documents can follow after the deadline, but the application cannot.</p>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </Page>
  )
}
