import { Routes, Route, Outlet } from 'react-router-dom'
import './App.css' // This one file will hold all our component styles
import Navbar from './components/Navbar' // Import new Navbar
import Dashboard from './pages/Dashboard'
import Courses from './pages/Courses'
import Assignments from './pages/Assignments'
import Resources from './pages/Resources'

function App() {
  return (
    <Routes>
      {/* This <AppLayout /> is our main template */}
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="courses" element={<Courses />} />
        <Route path="assignments" element={<Assignments />} />
        <Route path="resources" element={<Resources />} />
      </Route>
    </Routes>
  )
}

// This component now defines the layout with the Navbar on top
function AppLayout() {
  return (
    <div className="app-layout-navbar">
      <Navbar /> {/* Use Navbar instead of Sidebar */}
      <main className="main-content">
        {/* Pages will be rendered here */}
        <Outlet />
      </main>
    </div>
  )
}

export default App