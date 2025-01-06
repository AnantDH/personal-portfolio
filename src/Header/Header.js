import './Header.css';
import { Link } from 'react-router-dom';

const Header = ({ showNavbar }) => {
  return (
    <header className={`header ${showNavbar ? 'show' : 'hide'}`}>
    {showNavbar && (
      <nav className="navbar">
        <Link to="/" href="#home" className="nav-link">Home</Link>
        <Link to="/projects" href="#projects" className="nav-link">Projects</Link>
        <Link to="/" href="#about" className="nav-link">About</Link>
        <Link to="/" href="#contact" className="nav-link">Contact</Link>
      </nav>
    )}
    </header>
  );
};

export default Header;
