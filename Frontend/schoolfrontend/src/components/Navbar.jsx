import { NavLink } from 'react-router-dom';

// Note: We don't import any CSS here because
// all styles will be in src/App.css

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-brand">
          SomaTech
        </NavLink>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" end className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/courses" className="nav-link">
              My Courses
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/assignments" className="nav-link">
              Assignments
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/resources" className="nav-link">
              Resources
            </NavLink>
          </li>
        </ul>
        <div className="navbar-profile">
          <span>Profile (Soon)</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;