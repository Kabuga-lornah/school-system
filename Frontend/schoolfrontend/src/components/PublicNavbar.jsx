import { NavLink } from 'react-router-dom';

function PublicNavbar() {
  return (
    <nav className="public-navbar">
      <div className="public-navbar-container">
        <NavLink to="/" className="public-navbar-brand">
          SomaTech
        </NavLink>
        <ul className="public-navbar-nav">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            {/* --- UPDATED LINK --- */}
            <NavLink to="/courses">Courses</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <div className="public-navbar-auth">
          <NavLink to="/login" className="nav-button login">
            Log In
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default PublicNavbar;