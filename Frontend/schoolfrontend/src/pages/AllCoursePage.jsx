import React from 'react';
import { Link } from 'react-router-dom';
// import { allCourses } from '../courseData';

function AllCoursesPage() {
  return (
    <div className="page-container all-courses-page">
      <h1 className="section-title">All Courses</h1>
      <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
        Explore our full catalog of expert-led courses. Find the perfect program 
        to launch your career in tech, from software engineering to UI/UX design.
      </p>

      <div className="course-grid">
        {allCourses.map((course) => (
          <Link to={`/courses/${course.slug}`} key={course.slug} className="course-card-link">
            <div className="course-info-card card">
              <span className="course-icon">{course.icon}</span>
              <h4>{course.title}</h4>
              <p>{course.description}</p>
              <div className="course-price">{course.price}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AllCoursesPage;