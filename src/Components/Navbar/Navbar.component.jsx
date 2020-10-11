import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.styles.css';

function Navbar() {
	return (
		<>
			<div class="nav">
      <ul>
        <li class="home"><Link to="/">HOME</Link></li>
        <li class="tutorials"><Link to="/users">USERS</Link></li>
        <li class="about"><Link to="/about">ABOUT</Link></li>
      </ul>
    </div>
		</>
	);
}

export default Navbar;
