const SKILLS = {
  Frontend: ['React', 'Zustand', 'Tailwind', ],
  Backend: ['Node.js', 'Express', 'REST', ],
  'Data & infra': ['MongoDB', 'Mongoose', ],
};

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="sec-head"><h2>About</h2></div>
        <div className="about-grid">
          <div>
            <p>
              Right now I'm looking for opportunities to work on production applications — whether that's a full-time role, freelance projects, or collaborating with other developers on something ambitious. If you're building something and need someone who can move across the whole stack, I'd like to hear about it.
            </p>

            <div className=" about-links">
              <a href="tel:+9779704168051">WhatsApp: +977 9704168051</a>
              <a href="https://www.linkedin.com/in/bishal-magar-22a19535a/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/bisumagar" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
          <div>
            {Object.entries(SKILLS).map(([group, items]) => (
              <div className="skill-group" key={group}>
                <h4>{group}</h4>
                <div className="skill-list">
                  {items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
