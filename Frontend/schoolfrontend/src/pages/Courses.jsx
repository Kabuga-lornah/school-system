import { useState } from 'react';

function Courses() {
  // "Blank" data waiting for the backend
  const [courses, setCourses] = useState([]);

  return (
    <div>
      <h2>My Courses</h2>
      {courses.length === 0 ? (
        <div className="card">
          <p>You are not enrolled in any courses yet.</p>
          <p>Backend will provide: `enrolled_courses`</p>
        </div>
      ) : (
        <div className="course-grid">
          {/* This will be populated by the backend */}
        </div>
      )}
    </div>
  );
}

export default Courses;