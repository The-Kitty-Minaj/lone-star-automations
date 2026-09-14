import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About Lone Star Automations</h1>
          <p>We transform businesses by automating what matters and freeing teams to focus on strategy.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container-sm">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                At Lone Star Automations, we believe that the best businesses are built on efficiency, not just hustle. 
                We help companies eliminate manual, repetitive work through custom automation solutions that scale.
              </p>
              <p>
                Our approach is consultative, transparent, and deeply technical. We don't believe in one-size-fits-all 
                solutions. Every business is unique, and so is every automation we build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="section section-light">
        <div className="container-sm">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Approach</h2>
          <div className="approach-grid">
            <div className="approach-item">
              <div className="approach-number">01</div>
              <h3>Discovery First</h3>
              <p>We spend time understanding your business, your challenges, and your goals. This isn't a check-the-box conversation.</p>
            </div>
            <div className="approach-item">
              <div className="approach-number">02</div>
              <h3>Transparent Quoting</h3>
              <p>No surprises, no hidden costs. You'll know exactly what you're getting and what it costs before we start building.</p>
            </div>
            <div className="approach-item">
              <div className="approach-number">03</div>
              <h3>Custom Design</h3>
              <p>Every automation is tailored to your specific workflows, systems, and requirements. Off-the-shelf doesn't cut it.</p>
            </div>
            <div className="approach-item">
              <div className="approach-number">04</div>
              <h3>Rigorous Testing</h3>
              <p>We test every automation thoroughly before implementation. Your data and your reputation are on the line—we take that seriously.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Mastery Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Technical Mastery</h2>
            <p>Deep expertise in the tools and platforms that power modern automation</p>
          </div>

          <div className="technical-grid">
            <div className="technical-card">
              <img 
                src="https://www.openart.ai/creation/gfMHBCsEAocEKCrn8Jkb" 
                alt="API Architecture"
                className="technical-image"
              />
              <div className="technical-text">
                <h3>API Architecture</h3>
                <p>
                  We design robust, scalable API integrations that connect your systems seamlessly. 
                  From REST to webhooks, we handle the complexity so your systems work together effortlessly.
                </p>
              </div>
            </div>

            <div className="technical-card">
              <img 
                src="https://www.openart.ai/creation/2ESf6jZRLZYR4L732LRN" 
                alt="Workflow Logic"
                className="technical-image"
              />
              <div className="technical-text">
                <h3>Workflow Logic</h3>
                <p>
                  Complex workflows require sophisticated logic. We build conditional automation, error handling, 
                  and optimization that ensures every process runs perfectly, every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section section-light">
        <div className="container-sm">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Commitment</h2>
          <div className="commitment-list">
            <div className="commitment-item">
              <span className="checkmark">✓</span>
              <div>
                <h3>Quality First</h3>
                <p>We don't cut corners. Your automation is built to last and scale with your business.</p>
              </div>
            </div>
            <div className="commitment-item">
              <span className="checkmark">✓</span>
              <div>
                <h3>Transparency Always</h3>
                <p>Clear communication, realistic timelines, and honest feedback. You'll always know where you stand.</p>
              </div>
            </div>
            <div className="commitment-item">
              <span className="checkmark">✓</span>
              <div>
                <h3>Your Success Matters</h3>
                <p>We're invested in your success. If your automation isn't working, we fix it.</p>
              </div>
            </div>
            <div className="commitment-item">
              <span className="checkmark">✓</span>
              <div>
                <h3>Continuous Improvement</h3>
                <p>Technology evolves, and so do we. We stay on the cutting edge so you don't have to.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container-sm">
          <h2>Ready to Work With Us?</h2>
          <p>Let's talk about what automation can do for your business.</p>
          <button className="cta-button">Schedule Your Discovery Call</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Lone Star Automations</h4>
              <p>Custom API automation and systems integration for e-commerce and hospitality businesses.</p>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/">Services</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Get in Touch</h4>
              <p>Have questions? We'd love to hear from you.</p>
              <p className="contact-email">hello@lonestarautomations.com</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 Lone Star Automations. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;
