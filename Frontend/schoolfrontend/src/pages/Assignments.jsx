import { useState } from 'react';

function Assignments() {
  // "Blank" data waiting for the backend
  const [assignments, setAssignments] = useState([]);

  return (
    <div>
      <h2>Assignments</h2>
      <div className="card">
        {assignments.length === 0 ? (
          <div>
            <p>You have no assignments.</p>
            <p>Backend will provide: `all_assignments`</p>
          </div>
        ) : (
          <table>
            {/* A table would be built here */}
          </table>
        )}
      </div>
    </div>
  );
}

export default Assignments;