const STACK_ROWS = [
  { tag: 'MongoDB', desc: 'Schemas modeled for the app, not forced into tables', className: 'row-mongo' },
  { tag: 'Express', desc: 'REST APIs with auth, validation, error handling', className: 'row-express' },
  { tag: 'React', desc: 'Component-driven UI, state managed deliberately', className: 'row-react' },
  { tag: 'Node.js', desc: 'Runtime tying it together, deployed and monitored', className: 'row-node' },
];



export default function Hero() {
  return (
 <section className="hero">
   <div className="wrap">
    <div className="hero-top">
     <div className="hero-text">
      <div className="eyebrow">Available for work</div>
      <h1>Building full-stack products with MongoDB, Express, React &amp; Node.</h1>
      <p className="lede">
        I'm Bishal, a MERN stack developer who turns ideas into fast, reliable web apps —
        from database schema to the pixel on screen.
      </p>
      <div className="hero-cta">
        <a className="btn btn-solid" href="#work">View projects</a>
        <a className="btn btn-outline" href="/resume.pdf">Download resume</a>
      </div>
    </div>

    <div className="hero-photo">
      <img src="/profile.jpeg" alt="Bishal" />
    </div>
  </div>
        <div className="stack">
          <div className="stack-bar"><span></span><span></span><span></span>&nbsp;tech_stack.json</div>
          <div className="stack-rows">
            {STACK_ROWS.map((row) => (
              <div className="stack-row" key={row.tag}>
                <span className={`stack-tag ${row.className}`}>{row.tag}</span>
                <span className="stack-desc">{row.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
