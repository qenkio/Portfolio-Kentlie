import { useEffect, useRef } from 'react'
import './about.css'
import me from '../../assets/skills/me.png'

function About() {
  const sectionRef = useRef(null)




  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-container">
        {/* Header */}
        <div className="about-header">
          <div className="about-title-wrapper">
            <span className="about-icon">✦</span>
            <h2 className="about-title">About Me</h2>
          </div>
          <div className="about-divider"></div>
        </div>

        {/* Main Content Grid */}
        <div className="about-content">
          {/* Left Side - Image/Visual Box */}
          <div className="about-visual">
            <div className="about-box">
              <div className="about-box-inner">
                <img src={me} alt="Kentlie" className="about-image" />
              </div>
            </div>
            <div className="about-box-shadow"></div>
          </div>

          {/* Right Side - Text Content */}
          <div className="about-text-content">
            <div className="about-intro">
              <h3 className="about-subtitle">Creative Frontend Developer</h3>
              <p className="about-description">
                I'm a Creative Frontend Developer with 2 years of experience crafting engaging and user-friendly digital interfaces. With a strong passion for design and functionality, I specialize in transforming ideas into interactive web experiences that are both visually appealing and highly responsive.
              </p>
              <p className="about-description">
                My goal is to create seamless user journeys while keeping up with modern trends and best practices in frontend development.
              </p>
            </div>


          </div>
        </div>


      </div>
    </section>
  )
}

export default About
