function StudentComponent({ name, course, year }) {
  return (
    <div className="student-card">
      <h4>{name}</h4>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>Year:</strong> {year}</p>
    </div>
  );
}

export default StudentComponent;

