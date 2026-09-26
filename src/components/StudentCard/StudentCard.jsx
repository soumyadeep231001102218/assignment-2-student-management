export default function StudentCard({ student }) {
  const { name, rollNumber, department, semester, cgpa, photo } = student;

  return (
    <div className="student-card">
      <div className="card-header">
        <div className="student-photo-wrapper">
          <img src={photo} alt={`${name}'s photo`} className="student-photo" />
        </div>
      </div>
      <div className="card-body">
        <h3 className="student-name">{name}</h3>
        <p className="student-roll">Roll No: {rollNumber}</p>
        
        <div className="student-details">
          <div className="detail-row">
            <span className="detail-label">Department</span>
            <span className="detail-value">{department}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Semester</span>
            <span className="detail-value">{semester}</span>
          </div>
        </div>
        
        <div className="cgpa-container">
          <span className="cgpa-icon">★</span>
          <span>{cgpa.toFixed(2)} CGPA</span>
        </div>
      </div>
    </div>
  )
}
