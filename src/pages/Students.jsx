import { useEffect, useState } from "react";
import "./students.css";

function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [show, setShow] = useState(true); // ✅ KEEP HIDE FUNCTION

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => {
        // Transform API output to Option A shape
        const transformed = data.map((u) => ({
          studentId: u.id,
          fullName: u.name,
          username: u.username,
          contact: { email: u.email },
          academic: { course: "BS Information Technology", year: "3rd Year" },
        }));
        setStudents(transformed);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch student data.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="card students-card">
      <div className="card-header">
        <h3>Student List</h3>
        <div className="table-actions">
          <button className="toggle-btn" onClick={() => setShow(!show)}>
            {show ? "Hide Students" : "Show Students"}
          </button>
        </div>
      </div>

      {loading && <p className="loading">Loading students...</p>}
      {error && <p className="error">{error}</p>}

      {show && !loading && !error && (
        <div className="table-wrapper">
          <div className="students-table">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Course</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.studentId}>
                    <td className="id-cell">{student.studentId}</td>
                    <td>
                      <div className="name-wrap">
                        <span className="avatar">{(student.fullName || "?").split(" ").map(n => n[0]).slice(0,2).join("").toUpperCase()}</span>
                        <div className="name-text">
                          <strong>{student.fullName}</strong>
                          <div className="muted">{student.username ? `@${student.username}` : ""}</div>
                        </div>
                      </div>
                    </td>
                    <td>{student.contact?.email}</td>
                    <td><span className="badge course-badge">{student.academic?.course}</span></td>
                    <td><span className="badge year-badge">{student.academic?.year}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Students;

