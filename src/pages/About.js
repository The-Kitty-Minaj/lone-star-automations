import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <span className="eyebrow">Our Mission</span>
          <h1>Streamline. Integrate. Elevate.</h1>
          <p>
            At Lone Star Automation we bridge the gap between complex software ecosystems and
            seamless operational flow. Our expertise in API architecture and custom integrations
            allows businesses to move faster and unlock the full potential of their digital tools.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section">
        <div className="container-sm">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Why Choose Us?</h2>
              <p>
                We bridge the gap between technical complexity and operational excellence, delivering
                reliable automation and API-driven solutions tailored for SMB growth.
              </p>
              <p>
                We are a small, dedicated team committed to delivering on our promises and creating
                real, measurable value for our clients. Our mission is simple: remove the obstacles
                that slow your business down so you and your team can focus on what matters most.
              </p>
              <p>
                We understand that manual, repetitive tasks don't just waste time — they impact
                productivity, increase the risk of errors, and take away from overall job
                satisfaction, especially during high-pressure moments when your attention is needed
                elsewhere.
              </p>
              <p>
                We're not here to change how you run your business or push new software onto your
                team. Instead, we focus on the tools you already use. Our approach is to connect
                your existing systems and automate the workflows between them, reducing manual
                effort and eliminating the inefficiencies that hold you back.
              </p>
              <p>
                We value honesty and transparency in everything we do. Before any work begins, we
                take the time to understand your current setup and map out a clear, visual
                representation of the proposed integration. We walk you through exactly how it
                works, what it solves, and the value it will deliver.
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
            <h2>Technical Mastery.</h2>
            <p>
              We architect resilient digital ecosystems by bridging the gap between disparate
              platforms through custom-built API solutions and intelligent workflow design.
            </p>
          </div>

          <div className="technical-grid">
            <div className="technical-card">
              <h3>API Architecture</h3>
              <p>
                Engineered for high-volume data exchange and seamless connectivity across SaaS
                platforms with zero latency.
              </p>
            </div>

            <div className="technical-card">
              <h3>Workflow Logic</h3>
              <p>
                Mapping complex business operations into automated sequences that eliminate human
                error and scale with your growth.
              </p>
            </div>

            <div className="technical-card">
              <h3>Data Ecosystem</h3>
              <p>
                Identifying inefficiencies in your stack to build a synchronized data layer that
                informs better business decisions.
              </p>
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
          <h2>ready to optimize? let's build your workflow ecosystem.</h2>
          <button className="cta-button">consult a specialist</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Lone Star Automation</h4>
              <p>Automation consulting and systems integration for businesses that want to connect the software they already rely on.</p>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Get in Touch</h4>
              <p className="contact-email">hello@lonestarautomation.com</p>
              <p>(972) 850-8623</p>
              <p>Headquarters: Building Zero<br />Mission Bay, San Francisco</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 Lone Star Automation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;
