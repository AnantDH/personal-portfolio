import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import Projects from './Projects/Projects';
import Home from './Home/Home';
import { BrowserRouter as Router,  Routes, Route} from 'react-router-dom';

function App() {
  const [showNavbar, setshowNavbar] = useState(false);

    // Handle scroll behavior
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 10) {
          setshowNavbar(true); // Show navbar after scrolling 50px
        } else {
          setshowNavbar(false); // Hide navbar when near the top
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <>
    <Router>
      <Header showNavbar={showNavbar}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
