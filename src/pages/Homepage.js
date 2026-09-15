import React from 'react';
import { Link } from 'react-router-dom';
import heroGraphic from '../assets/hero-graphic.png';
import './Homepage.css';

function Homepage() {
  const processSteps = [
    {
      title: 'Discovery & Diagnosis',
      description: 'We start by understanding how your business operates today. During the discovery phase, we review your current workflows, identify manual processes, and evaluate the software tools your team relies on. This allows us to clearly define where automation can have the greatest impact.'
    },
    {
      title: 'Identify Pain Points',
      description: 'Next, we work with you to pinpoint the specific bottlenecks slowing your operations down. Whether it’s duplicate data entry, disconnected systems, reporting challenges, or inefficient processes, we map out where time is being lost and where integration can create immediate value.'
    },
    {
      title: 'Custom Integration Design',
      description: 'Once the opportunity is clear, we design a tailored automation solution based on your existing software stack. Instead of forcing new tools into your workflow, we build integrations that connect the systems you already use through APIs and automation platforms, creating a seamless flow of data between them.'
    },
    {
      title: 'Testing & Implementation',
      description: 'Before any payment is required, we implement and test the integration in a controlled environment using sample or test data. This allows you to review the workflow, confirm it solves the problem, and ensure everything functions as expected before moving into production use.'
    }
  ];

  const benefits = [
    {
      title: 'Reduce Manual Work',
      description: 'Minimise repetitive human tasks and liberate your team to focus on high-impact strategic initiatives.'
    },
    {
      title: 'Zero Error Rate',
      description: 'Eliminate data silos and manual entry errors with precise, reliable API-driven synchronization.'
    },
    {
      title: 'Total Visibility',
      description: 'Gain a single source of truth across all tools with synchronized real-time dashboards and reporting.'
    },
    {
      title: 'Scalable Architecture',
      description: 'Reliable low-code frameworks that integrate naturally and scale alongside your business growth.'
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
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="container hero-grid">
            <div className="hero-text">
              <h1 className="hero-title">bespoke consulting.<br />expert integration.</h1>
              <p className="hero-subtitle">
                Lone Star Automation is an automation consulting and systems integration firm
                that helps businesses connect the software they already rely on every day. We
                work directly with you to understand your workflow challenges, evaluate your
                current software stack, and design API-driven automations that eliminate manual
                work and improve operational efficiency.
              </p>
              <a href="#contact" className="hero-cta">consult a specialist</a>
            </div>
            <div className="hero-graphic-wrapper">
              <img src={heroGraphic} alt="Lone Star Automation network graphic" className="hero-graphic" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <h2>Our Process</h2>
          </div>

          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div key={index} className="process-card">
                <span className="card-number">{index + 1}</span>
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
            <h2>Why Choose Us?</h2>
            <p>We bridge the gap between technical complexity and operational excellence, delivering reliable automation and API-driven solutions tailored for SMB growth.</p>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
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

export default Homepage;
