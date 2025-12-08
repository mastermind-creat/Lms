import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AllCourses from './pages/AllCourses';
import CourseDetails from './pages/CourseDetails';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Loader from './components/Loader';
import { ThemeProvider } from './context/ThemeContext';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <ThemeProvider storageKey="elimutech-theme">
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-x-hidden selection:bg-brand-100 selection:text-brand-900 transition-colors duration-300">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/courses" element={<AllCourses />} />
              <Route path="/courses/:id" element={<CourseDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </main>
          <Chatbot />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;