import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const location = useLocation();

  return (
    <aside className="sidebar" aria-label="Main sidebar">
      <div className="brand">
        <div className="logo">🎓</div>
        <div className="brand-text">Student Info</div>
      </div>

      <nav className="sidebar-nav" role="navigation" aria-label="Primary">
        <Link aria-current={location.pathname === "/" ? "page" : undefined} className={location.pathname === "/" ? "nav-item active" : "nav-item"} to="/">
          <span className="nav-ico">🏠</span>
          <span className="nav-text">Home</span>
        </Link>
        <Link aria-current={location.pathname === "/students" ? "page" : undefined} className={location.pathname === "/students" ? "nav-item active" : "nav-item"} to="/students">
          <span className="nav-ico">👥</span>
          <span className="nav-text">Students</span>
        </Link>
      </nav>

      <div className="sidebar-footer">v1.0</div>
    </aside>
  );
}

export default Sidebar;
