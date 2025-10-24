import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';

// --- Public Page Imports ---
import PublicNavbar from './components/PublicNavbar';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import AllCoursesPage from './pages/AllCoursePage'; // <-- NEW
import CourseDetailPage from './pages/CourseDetailPage'; // <-- NEW


// Public layout remains the same
function PublicLayout() {
  return (
    <div>
      <PublicNavbar />
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      {/* 1. Public Routes */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="courses" element={<AllCoursesPage />} /> {/* <-- NEW */}
        <Route path="courses/:courseSlug" element={<CourseDetailPage />} /> {/* <-- NEW DYNAMIC ROUTE */}
      </Route>

      
    </Routes>
  );
}

export default App;