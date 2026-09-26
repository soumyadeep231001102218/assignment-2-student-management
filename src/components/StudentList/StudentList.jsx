import StudentCard from '../StudentCard/StudentCard';

export default function StudentList({ students }) {
  if (!students || students.length === 0) {
    return <p style={{textAlign: 'center', color: 'var(--text-secondary)'}}>No students found.</p>;
  }

  return (
    <div className="student-grid">
      {students.map((student) => (
        <StudentCard key={student.rollNumber} student={student} />
      ))}
    </div>
  )
}
