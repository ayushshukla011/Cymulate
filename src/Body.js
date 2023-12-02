import React, { useState } from 'react';
import './Body.css';
import Sidebox from './components/Sidebox';
import Sidebar from './components/Sidebar';

const Body = () => {
  const [showSidebox, setShowSidebox] = useState(true);
  const [showLeftBox, setShowLeftBox] = useState(true);

  const toggleSidebox = () => {
    setShowSidebox(!showSidebox);
  };

  const toggleLeftMenu = () => {
    setShowLeftBox(true);
  };

  return (
    <div className='cymate-body'>
      {/* Concentric circles representing the solar system */}
      <div className='solar-system-background'>
        {/* Eight circles */}
        <div className='orbit orbit1'></div>
        <div className='orbit orbit2'></div>
        <div className='orbit orbit3'></div>
        <div className='orbit orbit4'></div>
        <div className='orbit orbit5'></div>
        <div className='orbit orbit6'></div>
        <div className='orbit orbit7'></div>
        <div className='orbit orbit8'></div>

        {/* Circles over specific orbits */}
        <div className='overlaid-circle1'><span>APT</span></div> 
        <div className='overlaid-circle2'>
        <div className='circle2-content'>
          <span className='circle-2-inner'>76<span>/100</span></span>
          <span className=''>LATERAL MOVEMENT</span>
        </div>
          </div> 
        <div className='overlaid-circle3'>
        <div className='circle2-content'>
          <span className='circle-2-inner'>76<span>/100</span></span>
          <span className=''>LATERAL MOVEMENT</span>
        </div>
          </div> 
        <div className='overlaid-circle4'>
        <div className='circle2-content'>
          <span className='circle-2-inner'>76<span>/100</span></span>
          <span className=''>LATERAL MOVEMENT</span>
        </div>
          </div> 
        <div className='overlaid-circle5'>
        <div className='circle2-content'>
          <span className='circle-2-inner'>76<span>/100</span></span>
          <span className=''>LATERAL MOVEMENT</span>
        </div>
          </div> 
        <div className='overlaid-circle6'>
        <div className='circle2-content'>
          <span className='circle-2-inner'>76<span>/100</span></span>
          <span className=''>LATERAL MOVEMENT</span>
        </div>
          </div> 
        <div className='overlaid-circle7'>
        <div className='circle2-content'>
          <span className='circle-2-inner'>76<span>/100</span></span>
          <span className=''>LATERAL MOVEMENT</span>
        </div>
          </div> 
        <div className='overlaid-circle8'>
        <div className='circle2-content'>
          <span className='circle-2-inner'>76<span>/100</span></span>
          <span className=''>LATERAL MOVEMENT</span>
        </div>
          </div> 
      </div>
      
      {/* Rest of your component */}
      <div className='cymate-body-sidebar' onClick={toggleLeftMenu}>
        <Sidebar/>
        </div>
      <div className='cymate-body-main'></div>
      <div className='cymate-body-right'>
        <button>Alerts</button>
        <button onClick={toggleSidebox}>Attack Trace</button>
        {showSidebox && <Sidebox />}
      </div>
    </div>
  );
};

export default Body;
