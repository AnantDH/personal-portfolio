import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import Projects from './Projects/Projects';
import Home from './Home/Home';
import { BrowserRouter as Router,  Routes, Route} from 'react-router-dom';

function App() {
  const [showNavbar, setshowNavbar] = useState(false);
  const [showMouse, setShowMouse] = useState(true);

  useEffect(() => {
    let timeoutId = null; // Timeout ID for debouncing

    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      // Debounce the scroll behavior
      timeoutId = setTimeout(() => {
        if (window.scrollY > 20) {
          setshowNavbar(true); // Show navbar after scrolling 20px
          setShowMouse(false);
        } else {
          setshowNavbar(false); // Hide navbar when near the top
          setShowMouse(true);
        }
      }, 100); // Adjust debounce time as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId); // Cleanup the timeout
    };
  }, []);

  return (
    <>
    <Router>
      <Header showNavbar={showNavbar}/>
      <Routes>
        <Route path="/" element={<Home showMouse={ showMouse }/>} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
