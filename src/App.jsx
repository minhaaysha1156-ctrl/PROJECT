import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EmergencyButton from './components/EmergencyButton';
import Home from './pages/Home';
import Login from './pages/Login';
import Report from './pages/Report';
import Emergency from './pages/Emergency';
import Resources from './pages/Resources';
import Status from './pages/Status';
import './App.css'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/report" element={<Report />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/status" element={<Status />} />
          </Routes>
        </main>
        <Footer />
        <EmergencyButton />
      </div>
    </Router>
  )
}

export default App


