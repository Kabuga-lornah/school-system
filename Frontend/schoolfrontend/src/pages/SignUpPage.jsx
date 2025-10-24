import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function SignUpPage() {
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    // ... sign up logic ...
    alert('Sign up successful! Please log in.');
    navigate('/login');
  };

  return (
    <div className="auth-page-container">
      <div className="auth-card card">
        <h2>Create Account</h2>
        <form onSubmit={handleSignUp}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <button type="submit" className="auth-button">Create Account</button>
        </form>
        {/* --- UPDATED: Link back to Log In Page --- */}
        <p className="auth-toggle-link">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;