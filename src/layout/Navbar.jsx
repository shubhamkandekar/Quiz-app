import React from 'react';
import './styles/Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Quiz App</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/quizzes">Quizzes</a></li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
