import './home.css'


function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        {/* Greeting */}
        <div className="greeting">

          <span className="greeting-text">Hey! It's me Ken,</span>
        </div>

        {/* Main Content Grid */}
        <div className="main-content">
          {/* Left Side - Headline */}
          <div className="headline-container">
            <h1 className="headline">
              Crafting <span className="highlight">purpose driven</span>
              <br />
              <span className="highlight">experience that inspire &</span>
              <br />
              engage.
            </h1>
          </div>
        </div>

        {/* Separator Line with Description */}
        <div className="separator-section">
          <div className="separator"></div>
          <div className="description-inline">
            <p className="description">
              I’m starting my journey as a front-end developer, building simple, responsive, and user-friendly websites while learning best practices in modern front-end development.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bottom-section">
          {/* Social Links */}
          <div className="social-links">
            <a href="https://www.linkedin.com/in/kentlie/" className="social-link">LINKEDIN ↗</a>
            <a href="https://www.instagram.com/straygeekin/?next=%2Fqenkio%2F" className="social-link">INSTAGRAM ↗</a>
            <a href="mailto:kenyourbae@gmail.com" className="social-link">GMAIL ↗</a>
          </div>
          {/* CTA Button */}
          <div className="cta-container">
            <button
              className="cta-button"
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
              Know me better
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home

