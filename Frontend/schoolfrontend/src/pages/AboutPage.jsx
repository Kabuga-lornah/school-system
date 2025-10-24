import React from 'react';

function AboutPage() {
  return (
    <div className="page-container">
      {/* --- Section 1: Hero --- */}
      <div className="about-hero">
        <div className="about-hero-content">
          <h1 className="section-title">Our Mission</h1>
          <p className="hero-subtitle">
            To bridge the gap between ambition and opportunity by providing
            world-class, accessible technology education for everyone.
          </p>
        </div>
      </div>

      {/* --- Section 2: Story --- */}
      <section className="about-content">
        <h2>What is SomaTech?</h2>
        <p>
          SomaTech was founded on a simple belief: talent is everywhere, but
          opportunity is not. We are a premier learning institution dedicated
          to providing cutting-edge skills in the technology field. We bridge
          the gap between ambition and expertise, offering hands-on,
          project-based courses led by industry veterans. Our mission is to
          empower the next generation of innovators, problem-solvers, and tech
          leaders in Africa and beyond.
        </p>

        {/* --- NEW: Image Placeholder --- */}
        <div className="image-placeholder-container">
          <div className="image-placeholder">
            <span>Image of students collaborating</span>
          </div>
        </div>
      </section>

      {/* --- Section 3: Team --- */}
      <section className="team-section">
        <h2 className="section-title">Meet Our Team</h2>
        <p>Our instructors are not just teachers; they are industry leaders.</p>
        <div className="team-grid">
          {/* These are placeholders. They would be populated from your backend. */}
          <div className="team-member-card">
            <div className="team-image-placeholder"></div>
            <h3>Jane Doe</h3>
            <p>Lead Instructor, AI</p>
          </div>
          <div className="team-member-card">
            <div className="team-image-placeholder"></div>
            <h3>John Smith</h3>
            <p>Head of Software Engineering</p>
          </div>
          <div className="team-member-card">
            <div className="team-image-placeholder"></div>
            <h3>Alice Johnson</h3>
            <p>Senior Data Scientist</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;