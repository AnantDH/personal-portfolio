import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = ({ showNavbar }) => {
  return (
    <header className={`header ${showNavbar ? 'show' : 'hide'}`}>
    {showNavbar && (
      <nav className="navbar">
        <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>Home</NavLink>
        <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>Projects</NavLink>
        <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>Contact</NavLink>
      </nav>
    )}
    </header>
  );
};

export default Header;
