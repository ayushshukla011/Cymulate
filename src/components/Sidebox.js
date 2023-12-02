import React from 'react';
import data from '../data/data';
import '../components/Sidebox.css'; // Import CSS file for styling

const Sidebox = () => {
  return (
    <div className='cymate-body-right-menu'>
       {
        data.map((item, index) => (
          <div className='data-item' key={index}>
            <p>VECTOR: {item.Vector}</p>
            <p>TARGET: {item.Target}</p>
            <p>TIME: {item.Time}</p>
          </div>
        ))
       }
    </div>
  );
}

export default Sidebox;
