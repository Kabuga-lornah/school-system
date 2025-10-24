import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // ... login logic ...
    alert('Login successful! Redirecting to dashboard...');
    navigate('/dashboard');
  };

  return (
    <div className="auth-page-container">
      <div className="auth-card card">
        <h2>Student Log In</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <button type="submit" className="auth-button">Log In</button>
        </form>
        {/* --- UPDATED: Link to Sign Up Page --- */}
        <p className="auth-toggle-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;