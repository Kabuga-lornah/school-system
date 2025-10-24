import React from 'react';
import { useParams, Link } from 'react-router-dom'; // <-- FIX IS HERE
import { getCourseBySlug } from '../courseData'; // Import our helper function
import { Navigate } from 'react-router-dom';

function CourseDetailPage() {
  // Get the "courseSlug" from the URL
  const { courseSlug } = useParams();
  
  // Find the matching course in our "database"
  const course = getCourseBySlug(courseSlug);

  // If no course is found, redirect to the all courses page
  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  return (
    <div className="course-detail-page">
      {/* --- 1. Course Header --- */}
      <header className="course-detail-header">
        <div className="section-container">
          <span className="course-detail-icon">{course.icon}</span>
          <h1 className="course-detail-title">{course.title}</h1>
          <p className="course-detail-overview">{course.overview}</p>
        </div>
      </header>

      <div className="section-container course-detail-body">
        {/* --- 2. Main Content (Plans & Curriculum) --- */}
        <div className="course-detail-main">
          {/* --- Pricing Plans --- */}
          <section className="pricing-plans-section">
            <h2 className="section-title-small">Choose Your Plan</h2>
            <div className="pricing-plans-grid">
              {/* Full-Time Plan Card */}
              <div className="plan-card card">
                <h3>Full-Time</h3>
                <div className="plan-price">{course.plans.fullTime.price}</div>
                <ul className="plan-details">
                  <li><strong>Duration:</strong> {course.plans.fullTime.duration}</li>
                  <li><strong>Hours:</strong> {course.plans.fullTime.hours}</li>
                </ul>
              </div>
              
              {/* Part-Time Plan Card */}
              <div className="plan-card card">
                <h3>Part-Time</h3>
                <div className="plan-price">{course.plans.partTime.price}</div>
                <ul className="plan-details">
                  <li><strong>Duration:</strong> {course.plans.partTime.duration}</li>
                  <li><strong>Hours:</strong> {course.plans.partTime.hours}</li>
                </ul>
              </div>
            </div>
          </section>

          {/* --- Curriculum Breakdown --- */}
          <section className="curriculum-section">
            <h2 className="section-title-small">What You'll Learn</h2>
            <div className="curriculum-breakdown">
              {course.curriculum.map((module, index) => (
                <div key={index} className="module-card">
                  <h4>{module.title}</h4>
                  <p>{module.content}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* --- 3. Sidebar (Structure & Enrollment) --- */}
        <aside className="course-detail-sidebar">
          <div className="sidebar-card card">
            <h3>Course Structure</h3>
            <p>{course.structure}</p>
            <Link to="/signup" className="hero-cta-button enroll-button">
              Enroll Now
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default CourseDetailPage;