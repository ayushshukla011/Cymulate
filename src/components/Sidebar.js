import React from 'react';
import './Sidebar.css'; // Create a CSS file for your styles
import { BsFire } from "react-icons/bs";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { SiWebmoney } from "react-icons/si";
import { GiWireframeGlobe } from "react-icons/gi";
import { MdOutlinePhishing } from "react-icons/md";
import { SiSecurityscorecard } from "react-icons/si";
import { MdMoveUp } from "react-icons/md";
import { FaFilterCircleDollar } from "react-icons/fa6";
import { GiBreakingChain } from "react-icons/gi";
import { TfiAnnouncement } from "react-icons/tfi";
import { MdEventNote } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSpeedometerOutline } from "react-icons/io5";
const Sidebar = () => {
  return (
    <div className="sidebar">
        <h2 className='dashboard-heading'><IoSpeedometerOutline style={{ color: 'grey' }}/> Dashboard</h2>
      <ul>
        <li><BsFire/>IMMEDIATE THREATS INTELLIGENCE</li>
        <li><SiAmazonsimpleemailservice/>EMAIL GATEWAY<RiArrowDropDownLine/></li>
        <li><SiWebmoney />WEB GATEWAY</li>
        <li><GiWireframeGlobe />WEB APPLICATION FIREWALL</li>
        <li><MdOutlinePhishing />PHISING AWARENESS<RiArrowDropDownLine/></li>
        <li><SiSecurityscorecard />ENDPOINT SECURITY<RiArrowDropDownLine/></li>
        <li><MdMoveUp />LATERAL MOVEMENT</li>
        <li><FaFilterCircleDollar />DATA EXFILTRATION<RiArrowDropDownLine/></li>
        <li><GiBreakingChain />FULL-KILL CHAIN APT</li>
        <li><TfiAnnouncement />ACTIVITY CENTER</li>
        <li><MdEventNote />REPORTS</li>
      </ul>
    </div>
  );
};

export default Sidebar;
