import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

function Homepage() {
  const processSteps = [
    {
      title: 'Discovery & Diagnosis',
      description: 'We start with a deep dive into your current workflows. Understanding your pain points, data flows, and system constraints is essential to designing the right solution.',
      image: 'https://www.openart.ai/creation/hfFsD8bzh6su1kd0WKM2'
    },
    {
      title: 'Identify Pain Points',
      description: 'Through careful analysis, we pinpoint exactly where manual processes are costing you time and money. Every bottleneck is a candidate for automation.',
      image: 'https://www.openart.ai/creation/XD2jH5VlqinR9thLX0ZX'
    },
    {
      title: 'Custom Integration Design',
      description: 'We architect a tailored solution using Zapier, APIs, and custom logic. Every connection is built for reliability, security, and scalability from day one.',
      image: 'https://www.openart.ai/creation/khKkK7rKNmTB89DZ6KEx'
    },
    {
      title: 'Testing & Implementation',
      description: 'Rigorous testing ensures every automation runs flawlessly. We handle the full implementation, training, and optimization to make sure your team is set up for success.',
      image: 'https://www.openart.ai/creation/zUjkSeIwC48nht6TD5Lb'
    }
  ];

  const benefits = [
    {
      title: 'Reduce Manual Work',
      description: 'Eliminate repetitive tasks that drain your team\'s time and energy. Automate the work, focus on strategy.',
      image: 'https://www.openart.ai/creation/QsUvKRjovqiGtqJcoE94'
    },
    {
      title: 'Zero Error Rate',
      description: 'Machines don\'t get tired. Automated systems execute the same task perfectly, every single time, reducing costly mistakes.',
      image: 'https://www.openart.ai/creation/KgVf5w1PmFUQiBsHlDqe'
    },
    {
      title: 'Total Visibility',
      description: 'Real-time dashboards and reporting give you complete visibility into your operations. Data flows exactly where you need it.',
      image: 'https://www.openart.ai/creation/PHQu6phAl9Uu5u2bE9ZA'
    },
    {
      title: 'Scalable Architecture',
      description: 'Your automation grows with your business. As volume increases, the system scales seamlessly without breaking or slowing down.',
      image: 'https://www.openart.ai/creation/QxLah1bAp92IiaGIbrsI'
    }
  ];

  const automations = [
    {
      title: 'E-commerce Order Management',
      description: 'Sync orders across multiple channels. Auto-update inventory. Trigger fulfillment workflows instantly.'
    },
    {
      title: 'Hospitality Booking Integration',
      description: 'Connect reservations to operations. Auto-allocate resources. Trigger confirmations and updates in real-time.'
    },
    {
      title: 'Customer Data Synchronization',
      description: 'Keep customer records unified across all systems. Auto-sync contacts, history, and preferences everywhere.'
    },
    {
      title: 'Support Ticket Automation',
      description: 'Route tickets intelligently. Auto-categorize. Trigger responses. Track resolution seamlessly across systems.'
    }
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-video-wrapper">
          <video 
            className="hero-video"
            autoPlay 
            muted 
            loop
            playsInline
          >
            <source 
              src="https://www.openart.ai/creation/2OJENkEWxdR9cvDSCFwX" 
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <div className="container">
            <h1 className="hero-title">Stop Wasting Time on Manual Processes</h1>
            <p className="hero-subtitle">
              Custom API automation solutions that scale with your business
            </p>
            <a href="#contact" className="hero-cta">Schedule Free Discovery Call</a>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <h2>How We Work</h2>
            <p>A proven methodology designed to transform your workflows</p>
          </div>

          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div key={index} className="process-card">
                <div className="card-image-wrapper">
                  <img src={step.image} alt={step.title} className="card-image" />
                  <span className="card-number">{index + 1}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Lone Star?</h2>
            <p>What sets us apart from the rest</p>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="card-image-wrapper">
                  <img src={benefit.image} alt={benefit.title} className="card-image" />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Automations Section */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <h2>Common Automations We Build</h2>
            <p>Real solutions for real business challenges</p>
          </div>

          <div className="automations-grid">
            {automations.map((automation, index) => (
              <div key={index} className="automation-card">
                <h3>{automation.title}</h3>
                <p>{automation.description}</p>
                <span className="learn-more">Learn more →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section" id="contact">
        <div className="container-sm">
          <h2>Ready to Transform Your Workflow?</h2>
          <p>Schedule a free discovery call with our team and let's talk about your automation challenges.</p>
          <button className="cta-button">Schedule Your Free Discovery Call</button>
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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><a href="#services">Services</a></li>
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

export default Homepage;
