import { useState } from 'react';
import './AddStudentForm.css';

export default function AddStudentForm({ onAddStudent }) {
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    department: '',
    semester: '',
    cgpa: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // basic validation
    if (!formData.name || !formData.rollNumber || !formData.department || !formData.cgpa) return;

    onAddStudent({
      ...formData,
      cgpa: parseFloat(formData.cgpa) || 0
    });

    setFormData({
      name: '',
      rollNumber: '',
      department: '',
      semester: '',
      cgpa: ''
    });
  };

  return (
    <div className="add-student-container">
      <h3>Add New Student</h3>
      <form onSubmit={handleSubmit} className="add-student-form">
        <div className="form-group">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required />
        </div>
        <div className="form-group">
          <input type="text" name="rollNumber" value={formData.rollNumber} onChange={handleChange} placeholder="Roll Number" required />
        </div>
        <div className="form-group">
          <input type="text" name="department" value={formData.department} onChange={handleChange} placeholder="Department" required />
        </div>
        <div className="form-group">
          <input type="text" name="semester" value={formData.semester} onChange={handleChange} placeholder="Semester" required />
        </div>
        <div className="form-group">
          <input type="number" step="0.1" max="10" name="cgpa" value={formData.cgpa} onChange={handleChange} placeholder="CGPA" required />
        </div>
        <button type="submit" className="submit-btn">Add Student</button>
      </form>
    </div>
  );
}
