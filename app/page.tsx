"use client";

import Image from "next/image";
import {
  ArrowRight,
  Atom,
  CalendarDays,
  Check,
  ChevronRight,
  CircleDot,
  Dna,
  FlaskConical,
  MapPin,
  Menu,
  Network,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

const tracks = [
  {
    number: "01",
    title: "Biology",
    icon: Dna,
    copy: "DNA information, molecular machines, irreducible complexity, and protein folding.",
  },
  {
    number: "02",
    title: "Physics & Cosmology",
    icon: Atom,
    copy: "Fine-tuning, cosmology, the origin of the universe, and mathematics in nature.",
  },
  {
    number: "03",
    title: "Philosophy of Science",
    icon: FlaskConical,
    copy: "What counts as science, scientific inference, and the detection of design.",
  },
  {
    number: "04",
    title: "Engineering & Technology",
    icon: Network,
    copy: "Systems engineering, artificial intelligence, information theory, and complex systems.",
  },
];

const speakers = [
  ["Stephen Meyer", "Philosophy of science · Origin of life"],
  ["Michael Behe", "Biochemistry"],
  ["Casey Luskin", "Biology · Law · Education"],
  ["Brian Miller", "Physics · Origin of life"],
  ["Douglas Axe", "Molecular biology"],
  ["Eric Hedin", "Physics · Cosmology"],
  ["Jay Richards", "Economics · Philosophy"],
  ["Hugh Ross", "Astronomy"],
  ["Fazale Rana", "Biochemistry"],
  ["Guillermo Gonzalez", "Astronomy"],
  ["Jonathan Wells", "Cell biology"],
  ["John Lennox", "Mathematics · Apologetics"],
];

const schedule = [
  ["8:00", "Registration", "Doors open · Coffee and conversation"],
  ["9:00", "Opening keynote", "The Information Enigma"],
  ["10:30", "Morning break", ""],
  ["11:00", "Concurrent sessions", "Biology · Physics · Philosophy"],
  ["12:15", "Lunch", ""],
  ["1:30", "Engineering panel", "Scientists from Oak Ridge"],
  ["2:45", "Afternoon break", ""],
  ["3:00", "Student questions", "A session built around the next generation"],
  ["4:30", "Panel discussion", "Can Science Detect Design?"],
  ["6:30", "Dinner break", ""],
  ["7:30", "Public keynote", "Featured keynote speaker"],
];

const nav = [
  ["About", "#about"],
  ["Themes", "#themes"],
  ["Program", "#program"],
  ["Speakers", "#speakers"],
  ["Oak Ridge", "#oak-ridge"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Conference home">
          <span className="brand-mark"><Sparkles size={18} /></span>
          <span>OR<span className="brand-thin">/</span>ID <small>2027</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="header-cta" href="#interest">Stay informed <ArrowRight size={15} /></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen && (
          <nav className="mobile-nav">
            {nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <a href="#interest" onClick={() => setMenuOpen(false)}>Stay informed</a>
          </nav>
        )}
      </header>

      <section id="top" className="hero">
        <Image src="/images/cosmic-cliffs.jpg" alt="The Cosmic Cliffs in the Carina Nebula, photographed by the James Webb Space Telescope" fill priority className="hero-image" />
        <div className="hero-wash" />
        <div className="hero-grid" />
        <div className="hero-content shell">
          <div className="eyebrow"><span /> Proposed scientific conference · Spring 2027</div>
          <h1>Where information,<br /><em>nature</em> and mind<br />converge.</h1>
          <p className="hero-copy">A new forum in Oak Ridge for rigorous scientific and philosophical dialogue on origins, complexity, and intelligent design.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#about">Explore the vision <ArrowRight size={17} /></a>
            <a className="button button-ghost" href="#program">View sample program</a>
          </div>
        </div>
        <div className="hero-meta shell">
          <div><CalendarDays /><span><small>WHEN</small>Spring 2027</span></div>
          <div><MapPin /><span><small>WHERE</small>Oak Ridge, Tennessee</span></div>
          <div><Users /><span><small>YEAR ONE</small>300–500 attendees</span></div>
          <p>CONCEPT STAGE · DETAILS SUBJECT TO CONFIRMATION</p>
        </div>
      </section>

      <section id="about" className="section mission shell">
        <div className="section-label"><span>01</span> The proposition</div>
        <div className="mission-grid">
          <h2>Serious questions deserve a <em>serious forum.</em></h2>
          <div className="mission-copy">
            <p>We envision a conference that presents current research and philosophical arguments related to intelligent design while encouraging respectful dialogue among scientists, students, educators, pastors, engineers, medical professionals, and the wider public.</p>
            <p>Positioned in one of America&apos;s most distinctive scientific communities, the event will examine evidence, test ideas, and bring disciplines into productive conversation.</p>
            <div className="principles">
              <span><Check /> Rigorous inquiry</span>
              <span><Check /> Respectful dialogue</span>
              <span><Check /> Public engagement</span>
            </div>
          </div>
        </div>
        <div className="theme-statement">
          <span>Proposed keynote theme</span>
          <p>The Information Revolution</p>
          <h3>What DNA, physics, and cosmology reveal about our universe.</h3>
        </div>
      </section>

      <section id="themes" className="section themes">
        <div className="shell">
          <div className="section-label light"><span>02</span> Research themes</div>
          <div className="section-heading-row">
            <h2>Four lenses.<br />One profound question.</h2>
            <p>From the molecular scale to the structure of the cosmos, the program is designed to cross disciplinary boundaries.</p>
          </div>
          <div className="tracks">
            {tracks.map(({ number, title, icon: Icon, copy }) => (
              <article className="track" key={title}>
                <div className="track-top"><span>{number}</span><Icon /></div>
                <h3>{title}</h3>
                <p>{copy}</p>
                <ChevronRight className="track-arrow" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="program" className="section program shell">
        <div className="section-label"><span>03</span> One-day program concept</div>
        <div className="program-grid">
          <div className="program-intro">
            <h2>A full day of ideas in motion.</h2>
            <p>A proposed first-year format balancing keynote presentations, focused sessions, engineering perspectives, student participation, and open discussion.</p>
            <div className="stat-row">
              <div><strong>4</strong><span>core tracks</span></div>
              <div><strong>11.5</strong><span>hours of programming</span></div>
            </div>
          </div>
          <div className="timeline">
            {schedule.map(([time, title, detail]) => (
              <div className="timeline-row" key={`${time}-${title}`}>
                <time>{time}</time>
                <CircleDot />
                <div><h3>{title}</h3>{detail && <p>{detail}</p>}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="speakers" className="section speakers">
        <div className="shell">
          <div className="section-label"><span>04</span> Potential contributors</div>
          <div className="section-heading-row dark">
            <h2>Voices across the scientific landscape.</h2>
            <p>Thought leaders under consideration represent a range of expertise in biology, physics, astronomy, philosophy, and mathematics.</p>
          </div>
          <div className="speaker-grid">
            {speakers.map(([name, specialty], i) => (
              <article className="speaker" key={name}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <div><h3>{name}</h3><p>{specialty}</p></div>
              </article>
            ))}
          </div>
          <p className="disclaimer">All speakers are prospective. No invitations or commitments have been made. The final program will depend on availability, support, and event scope.</p>
        </div>
      </section>

      <section id="oak-ridge" className="oak-ridge">
        <div className="oak-image-wrap">
          <Image src="/images/oak-ridge-lab.jpg" alt="Historic aerial view of Oak Ridge National Laboratory" fill className="oak-image" />
          <span className="image-credit">U.S. Department of Energy · Public domain</span>
        </div>
        <div className="oak-copy">
          <div className="section-label light"><span>05</span> Why Oak Ridge</div>
          <h2>A city shaped by science.</h2>
          <p>Oak Ridge has a longstanding association with scientific research, national laboratories, engineering, and STEM education. It offers a setting where technical excellence and enduring questions can meet.</p>
          <ul>
            <li><Check /> A strong regional community of scientists and engineers</li>
            <li><Check /> National identity in research and innovation</li>
            <li><Check /> A central venue concept at Oak Ridge High School</li>
            <li><Check /> Capacity for 1,300–1,400 in the auditorium</li>
          </ul>
          <div className="venue-note"><MapPin /><div><small>PROPOSED VENUE</small><strong>Oak Ridge High School</strong><span>Excellent AV · Central location · Ample parking</span></div></div>
        </div>
      </section>

      <section className="section growth shell">
        <div className="section-label"><span>06</span> A platform built to grow</div>
        <div className="growth-grid">
          <div>
            <h2>Begin focused.<br /><em>Build with purpose.</em></h2>
            <p>The first event is designed to establish a credible annual forum, with a path toward a three-day regional conference.</p>
          </div>
          <div className="growth-steps">
            <article><span>YEAR 1</span><strong>300–500</strong><p>attendees · focused one-day conference</p></article>
            <article><span>YEAR 3</span><strong>600–800</strong><p>attendees · expanded sessions and exhibits</p></article>
            <article><span>LONG TERM</span><strong>1,000+</strong><p>attendees · a three-day destination event</p></article>
          </div>
        </div>
        <div className="future-program">
          {[
            "Internationally recognized keynote",
            "12–15 breakout sessions",
            "Student STEM competition",
            "Publisher and ministry exhibits",
            "Regional science poster session",
          ].map((item, i) => <div key={item}><span>0{i + 1}</span>{item}</div>)}
        </div>
      </section>

      <section id="interest" className="interest">
        <Image src="/images/dna-helix.jpg" alt="A molecular representation of a DNA double helix" fill className="interest-image" />
        <div className="interest-overlay" />
        <div className="interest-content shell">
          <div className="eyebrow"><span /> Help shape the conversation</div>
          <h2>A conference worth<br />building together.</h2>
          <p>We&apos;re seeking visionary partners, scientific contributors, and community supporters to move this concept toward reality.</p>
          <a className="button button-primary" href="mailto:info@oakridgeidconference.org">Express interest <ArrowRight /></a>
          <small>Concept-stage inquiry · No registration is currently open</small>
        </div>
      </section>

      <footer>
        <div className="shell footer-grid">
          <div className="brand footer-brand"><span className="brand-mark"><Sparkles size={18} /></span><span>OR<span className="brand-thin">/</span>ID <small>2027</small></span></div>
          <p>Oak Ridge Conference on Science & Intelligent Design<br /><span>Exploring truth · Discovering design · Advancing science</span></p>
          <div className="footer-links">{nav.slice(0, 4).map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
        </div>
        <div className="shell footer-bottom">
          <span>© 2026 Conference Concept</span>
          <span>Images: NASA / ESA / CSA / STScI; NIH; U.S. DOE · Public domain or U.S. government works</span>
        </div>
      </footer>
    </main>
  );
}
