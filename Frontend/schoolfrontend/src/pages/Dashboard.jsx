import { useState } from 'react';

// This is the "blank" data waiting for the backend.
// We'll leave it as empty arrays.
function Dashboard() {
  const [upcomingAssignments, setUpcomingAssignments] = useState([]);
  const [recentGrades, setRecentGrades] = useState([]);
  const [announcements, setAnnouncements] = useState([]);

  // Later, a useEffect hook will fetch this data from your backend.
  // useEffect(() => {
  //   fetch('/api/dashboard-summary')
  //     .then(res => res.json())
  //     .then(data => {
  //       setUpcomingAssignments(data.upcoming_assignments);
  //       setRecentGrades(data.recent_grades);
  //       setAnnouncements(data.announcements);
  //     });
  // }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <div className="dashboard-grid">
        <section className="card">
          <h3>Upcoming Assignments</h3>
          {upcomingAssignments.length === 0 ? (
            <p>No upcoming assignments. Great job!</p>
          ) : (
            <ul>
              {/* This will be populated by the backend */}
            </ul>
          )}
        </section>

        <section className="card">
          <h3>Recent Grades</h3>
          {recentGrades.length === 0 ? (
            <p>No new grades.</p>
          ) : (
             <ul>
              {/* This will be populated by the backend */}
            </ul>
          )}
        </section>

        <section className="card full-width">
          <h3>Announcements</h3>
          {announcements.length === 0 ? (
            <p>No new announcements.</p>
          ) : (
             <ul>
              {/* This will be populated by the backend */}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}

export default Dashboard;