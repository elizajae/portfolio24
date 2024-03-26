import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <h1>eliza<span id ="period">.</span>christopher</h1>
      <ul>
        <li><span id ="one">01.</span> about me</li>
        <li><span id ="two">02.</span> projects</li>
        <li><span id ="three">03.</span> experience</li>
        <li><span id ="four">04.</span> contact me</li>
      </ul>
    </nav>
  );
}
export default NavBar;