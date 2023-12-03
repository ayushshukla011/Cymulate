import React, { useState } from 'react';
import "./nav.css";
import logo from "../assets/logo.png";
import Body from '../Body';
import { FaCloudArrowDown } from "react-icons/fa6";
import { FaDownload,FaRegBell,FaCaretRight } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiGlobe } from "react-icons/ci";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className={`cymulate-nav ${menuOpen ? 'menu-open' : ''}`}>
        <div className='cymate-nav-icon'>
          <img className='cymate-nav-icon-logo-image' src={logo} alt="Logo" />
          <h1 className='cymate-nav-icon-logo-text'>Cymulate</h1>
        </div>
        <span className='cymulate-demo-text'>
          <span className='cymulate-demo-text-globe'><CiGlobe/></span>
          <span className='cymulate-demo'>Cymulate Demo</span>
          <FaCaretRight/>
        </span>
        <div className='hamburger-menu' onClick={toggleMenu}>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div>
        <ul className={`cymate-nav-right-lists ${menuOpen ? 'menu-open' : ''}`}>
          <li onClick={()=>{alert("Not available")}}><FaCloudArrowDown /></li>
          <li onClick={()=>{alert("Not available")}}>Agents  <FaDownload /></li>
          <li onClick={()=>{alert("Not available")}}><FaRegBell /></li>
          <li onClick={()=>{alert("Not available")}}>Hello Demo<RiArrowDropDownLine />
          </li>
        </ul>
      </nav>
      <div>
        {/* Other content */}
      </div>
    </div>
  );
};

export default Home;
