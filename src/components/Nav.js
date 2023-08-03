import "./Nav.css";
import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav id='main-nav'>
      <ul>
        <li className='nav-link'><Link to='/home'>Home</Link></li>
        <li className='nav-link'><Link to='/experience'>Experience</Link></li>
        <li className='nav-link'><Link to='/projects'>Projects</Link></li>
      </ul>
      <h1>Rolin Blake</h1>
    </nav>
  );
}

export default Nav;