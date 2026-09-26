import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import StudentList from './components/StudentList/StudentList';
import AddStudentForm from './components/AddStudentForm/AddStudentForm';

// Dummy data for students
const initialStudents = [
  {
    name: "Aritra Ghosh",
    rollNumber: "CS2023001",
    department: "Computer Science",
    semester: "4th",
    cgpa: 8.9
  },
  {
    name: "Sourav Banerjee",
    rollNumber: "EE2023015",
    department: "Electrical Eng.",
    semester: "4th",
    cgpa: 9.2
  },
  {
    name: "Ananya Chatterjee",
    rollNumber: "ME2023042",
    department: "Mechanical Eng.",
    semester: "4th",
    cgpa: 7.8
  },
  {
    name: "Riya Sen",
    rollNumber: "CS2023088",
    department: "Computer Science",
    semester: "4th",
    cgpa: 9.5
  },
  {
    name: "Debangshu Mukherjee",
    rollNumber: "CE2023102",
    department: "Civil Eng.",
    semester: "4th",
    cgpa: 8.1
  },
  {
    name: "Ishita Das",
    rollNumber: "IT2023055",
    department: "Information Tech.",
    semester: "4th",
    cgpa: 8.6
  }
];

function App() {
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem('studentsDataV2');
    if (savedStudents) {
      return JSON.parse(savedStudents);
    }
    return initialStudents;
  });
  const [sortOrder, setSortOrder] = useState('desc'); // 'desc' or 'asc'

  useEffect(() => {
    localStorage.setItem('studentsDataV2', JSON.stringify(students));
  }, [students]);

  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  const handleSort = () => {
    const newOrder = sortOrder === 'desc' ? 'asc' : 'desc';
    const sorted = [...students].sort((a, b) => {
      if (newOrder === 'desc') {
        return b.cgpa - a.cgpa;
      } else {
        return a.cgpa - b.cgpa;
      }
    });
    
    setStudents(sorted);
    setSortOrder(newOrder);
  };

  return (
    <div className="app-container">
      <Header />
      
      <main className="main-content">
        <div className="controls-container">
          <h2>Student Directory</h2>
          <button onClick={handleSort} className="sort-btn">
            Sort by CGPA
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: sortOrder === 'desc' ? 'rotate(180deg)' : 'rotate(0)' }}>
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </button>
        </div>
        
        <AddStudentForm onAddStudent={handleAddStudent} />
        <StudentList students={students} />
      </main>

      <Footer />
    </div>
  )
}

export default App
