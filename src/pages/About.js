import React from 'react';
import './About.css';

const howWeWork = [
  {
    number: '1',
    title: 'Discovery (Free)',
    description: "One to two complimentary discovery calls. We dig into your systems, your current pain points, and what an ideal workflow would look like for your business. Zero commitment, zero cost — this is about making sure we understand what you actually need."
  },
  {
    number: '2',
    title: 'Research & Design (Free)',
    description: 'We go behind the scenes and research your setup in detail. We map out a custom workflow diagram showing exactly how the automation will work. We identify any obstacles and verify that the solution is actually possible. We present the plan back to you — still free, still no obligation.'
  },
  {
    number: '3',
    title: 'Quote & Build (Paid)',
    description: 'Once you approve the design, we present a transparent quote. 20% deposit to get started, remainder due on completion. We handle the entire build and setup — completely hands-off for you.'
  },
  {
    number: '4',
    title: 'Implementation & Warranty (6 Months)',
    description: "We implement the workflow in your live environment. We guarantee it works as designed for 6 months. If anything breaks or needs tweaking, we fix it at no additional cost. Your satisfaction is the only success metric that matters."
  }
];

const focusAreas = [
  {
    title: 'Custom Integration',
    description: 'We connect your systems using APIs, webhooks, and custom workflows. Shopify to accounting. E-commerce platforms to inventory management. CRM to fulfillment. Whatever needs to talk to whatever — we build the bridge and make the data flow automatically.'
  },
  {
    title: 'Workflow Automation',
    description: "We eliminate manual work. Manual data entry, manual calculations, manual status updates — all of it can be automated. We identify the pain points in your process and build workflows that handle them automatically, accurately, and without you having to lift a finger."
  },
  {
    title: 'Scalable Solutions',
    description: "Your automation grows with you. We don't build quick fixes. We build systems that handle your current volume and scale when you do. From 10 orders a day to 10,000 — your workflow stays rock solid."
  }
];

const commitments = [
  {
    title: 'Risk-Free Engagement',
    description: "No payment until your workflow is approved and working. The discovery calls are free. The research is free. The workflow diagram is free. You only pay when you've seen the plan and decided to move forward. That means zero risk on your part for finding out if we can help."
  },
  {
    title: 'Hands-Off Implementation',
    description: "You don't have to understand the technical details. We handle the research, the build, the testing, and the deployment. You approve the plan, we handle the rest. When it's ready, we implement it in your live environment and make sure it works."
  },
  {
    title: '6-Month Guarantee',
    description: "After launch, we stand behind our work with a 6-month warranty. If the workflow breaks, gets outdated, or doesn't meet your expectations, we fix it at no additional cost. Your satisfaction isn't a goal — it's a guarantee."
  }
];

function About() {
  return (
    <div className="about-page">
      {/* Hero / Intro Section */}
      <section className="about-hero">
        <div className="container-sm">
          <h1>About Lone Star Automation</h1>
          <div className="about-intro-text">
            <p>
              Your business runs on multiple systems. Your e-commerce platform talks to one place.
              Your accounting software lives somewhere else. Your inventory system is in another.
              And somewhere in between, you or your team is manually pulling data, entering it by
              hand, and crossing your fingers that nothing gets lost in translation. That's the
              problem we solve.
            </p>
            <p>
              Lone Star Automation specializes in custom API integrations and workflow automation.
              We connect your disconnected systems, eliminate manual data entry, and build
              workflows that run without you. No generic templates. No off-the-shelf solutions
              that almost fit. We build exactly what your business needs — custom integrations
              that sync your systems, reduce errors, and free up your team to focus on what
              actually matters.
            </p>
            <p>
              We're a small, focused team. We've spent years in hospitality and e-commerce. We
              know the chaos of systems that don't talk to each other. And we don't move forward
              until you're satisfied. No payment until your workflow is approved and running. No
              surprises. Just straight-forward, honest work and a 6-month guarantee that backs it up.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <h2>How We Work</h2>
            <p>
              Every integration is unique. Every client has different systems, different pain
              points, and different goals. That's why we start with discovery, not assumptions.
            </p>
          </div>

          <div className="process-grid">
            {howWeWork.map((step) => (
              <div key={step.number} className="process-card">
                <span className="card-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built on Specialization Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Built on Specialization</h2>
            <p>We don't do everything. We do this one thing really well.</p>
          </div>

          <div className="technical-grid">
            {focusAreas.map((area, index) => (
              <div key={index} className="technical-card">
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <h2>Our Commitment</h2>
            <p>Here's what sets us apart.</p>
          </div>

          <div className="technical-grid">
            {commitments.map((item, index) => (
              <div key={index} className="technical-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container-sm">
          <h2>ready to connect your systems?</h2>
          <p>Start with a free discovery call. No commitment. No risk. Let's talk about what's possible.</p>
          <button className="cta-button">schedule your free discovery call</button>
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
