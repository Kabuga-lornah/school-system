import { useState } from 'react';
import './StudentList.css'; // We'll create this CSS file next

// Mock data to simulate fetching students
const mockStudents = [
  { id: 1, name: 'Alice Johnson', major: 'Computer Science', gpa: 3.8 },
  { id: 2, name: 'Bob Smith', major: 'Physics', gpa: 3.5 },
  { id: 3, name: 'Charlie Brown', major: 'Art History', gpa: 3.2 },
  { id: 4, name: 'David Lee', major: 'Business', gpa: 3.9 },
];

function StudentList() {
  const [students, setStudents] = useState(mockStudents);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleSelectStudent = (student) => {
    // Set to null if clicking the same student, otherwise set to the new student
    setSelectedStudent((prev) => (prev?.id === student.id ? null : student));
  };

  return (
    <div className="student-list-container">
      <div className="student-grid">
        {students.map((student) => (
          <div
            key={student.id}
            className={`student-card card ${selectedStudent?.id === student.id ? 'selected' : ''}`}
            onClick={() => handleSelectStudent(student)}
          >
            <h3>{student.name}</h3>
            <p>{student.major}</p>
          </div>
        ))}
      </div>

      {selectedStudent && (
        <div className="student-details card">
          <h3>Details for {selectedStudent.name}</h3>
          <p><strong>Major:</strong> {selectedStudent.major}</p>
          <p><strong>GPA:</strong> {selectedStudent.gpa.toFixed(1)}</p>
          <button onClick={() => alert(`Editing ${selectedStudent.name}...`)}>
            Edit Student
          </button>
        </div>
      )}
    </div>
  );
}

export default StudentList;