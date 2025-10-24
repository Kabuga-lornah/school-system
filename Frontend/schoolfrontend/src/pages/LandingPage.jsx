import React from "react";
import { Link } from "react-router-dom";
import { featuredCourses } from "../courseData";
import SiteFooter from "../components/SiteFooter";

// import { FaChalkboardTeacher, FaClock, FaLaptopCode, FaCertificate, FaUserGraduate, FaBriefcase, FaComments } from 'react-icons/fa';

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="hero-section">
        <div className="section-container hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">
              Launch Your Tech Career with SomaTech
            </h1>
            <p className="hero-subtitle">
              Expert-led courses in Software Engineering, Data Science, AI, and
              more. Flexible, career-focused learning designed for you.
            </p>
            <div className="hero-buttons">
              <Link to="/courses" className="hero-cta-button">
                Explore Our Courses
              </Link>
              <Link to="/signup" className="hero-secondary-button">
                Apply Now
              </Link>
            </div>
          </div>
          {/* <div className="hero-image-placeholder"> */}
          <div>
            <img
              src="/public/photo1.jpg"
              alt="Students learning at SomaTech"
              width="500px"
              height="450px"
              style={{ borderRadius: "20px" }}
            />
          </div>
        </div>
      </header>

      {/* 2. Featured Courses (Slightly enhanced card) */}
      <section id="courses" className="featured-courses-section">
        <div className="section-container">
          <h2 className="section-title">Popular Programs</h2>
          <div className="course-grid featured-grid">
            {featuredCourses.map((course) => (
              <Link
                to={`/courses/${course.slug}`}
                key={course.slug}
                className="course-card-link"
              >
                <div className="course-info-card card hover-lift">
                  {" "}
                  {/* Added hover-lift class */}
                  <span className="course-icon">{course.icon}</span>
                  <h4>{course.title}</h4>
                  <p className="course-card-description">
                    {course.description}
                  </p>
                  <div className="course-learn-more">
                    Learn More <span>&rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="all-courses-link-container">
            <Link to="/courses" className="hero-cta-button all-courses-button">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* 3. How It Works (NEW Section) */}
      <section className="how-it-works-section">
        <div className="section-container">
          <h2 className="section-title">Your Learning Journey</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Apply & Enroll</h3>
              <p>
                Choose your course and submit your application online. Our
                admissions team will guide you.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Learn & Build</h3>
              <p>
                Engage in hands-on lessons, collaborate with peers, and build
                real-world projects.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Graduate & Launch</h3>
              <p>
                Receive career support, polish your portfolio, and start
                applying for tech jobs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us / Platform Highlights (Enhanced) */}
      <section className="why-us-section">
        <div className="section-container">
          <h2 className="section-title">The SomaTech Advantage</h2>
          <div className="why-us-grid">
            {/* Added more descriptive text */}
            <div className="feature-item card hover-lift">
              {/* <FaChalkboardTeacher className="feature-icon-actual" /> */}
              <span className="feature-icon">📚</span>
              <h3>Expert Instructors</h3>
              <p>
                Benefit from personalized guidance from professionals actively
                working in the tech industry.
              </p>
            </div>
            <div className="feature-item card hover-lift">
              {/* <FaClock className="feature-icon-actual" /> */}
              <span className="feature-icon">⏰</span>
              <h3>Flexible Schedules</h3>
              <p>
                Balance learning with your life through our full-time immersive
                or part-time evening/weekend options.
              </p>
            </div>
            <div className="feature-item card hover-lift">
              {/* <FaLaptopCode className="feature-icon-actual" /> */}
              <span className="feature-icon">💻</span>
              <h3>Project-Based Learning</h3>
              <p>
                Graduate with a robust portfolio demonstrating your practical
                skills to potential employers.
              </p>
            </div>
            <div className="feature-item card hover-lift">
              {/* <FaBriefcase className="feature-icon-actual" /> */}
              <span className="feature-icon">🏆</span>
              <h3>Career Services</h3>
              <p>
                Access dedicated support including CV workshops, interview
                coaching, and hiring partner connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonials / Student Feedback (Enhanced Layout) */}
      <section className="testimonials-section">
        <div className="section-container">
          <h2 className="section-title">Hear From Our Graduates</h2>
          <div className="testimonial-grid">
            {/* Layout adjusted slightly */}
            <div className="testimonial-card card">
              <div className="testimonial-header">
                <div className="testimonial-image-placeholder"></div>
                <span className="testimonial-author">
                  — Fatima A.
                  <br />
                  <small>Software Engineer @ TechCorp</small>
                </span>
              </div>
              <p className="testimonial-quote">
                “SomaTech gave me the skills and confidence to switch careers.
                The instructors were amazing, and I landed a job before I even
                graduated!”
              </p>
            </div>
            <div className="testimonial-card card">
              <div className="testimonial-header">
                <div className="testimonial-image-placeholder"></div>
                <span className="testimonial-author">
                  — Ken O.
                  <br />
                  <small>Data Analyst @ Data Insights</small>
                </span>
              </div>
              <p className="testimonial-quote">
                “The Data Science program was intense but incredibly thorough.
                The project-based approach really helped solidify my
                understanding.”
              </p>
            </div>
            <div className="testimonial-card card">
              <div className="testimonial-header">
                <div className="testimonial-image-placeholder"></div>
                <span className="testimonial-author">
                  — Brenda W.
                  <br />
                  <small>AI Specialist @ Innovate AI</small>
                </span>
              </div>
              <p className="testimonial-quote">
                “I appreciated the flexibility of the part-time schedule. It
                allowed me to keep my job while learning valuable new skills in
                AI.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Call to Action (CTA) Section (Unchanged) */}
      <section className="cta-section">
        {/* ... (content is the same) ... */}
      </section>

      {/* 7. Partners / Achievements (Unchanged) */}
      <section className="partners-section">
        {/* ... (content is the same) ... */}
      </section>

      {/* 8. Footer (Unchanged Component) */}
      <SiteFooter />
    </div>
  );
}

export default LandingPage;
