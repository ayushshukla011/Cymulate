import React from 'react';
import data from '../data/data';
import '../components/Sidebox.css'; // Import CSS file for styling
import { MdDataExploration } from "react-icons/md";

const Sidebox = () => {
  return (
    <div className='cymate-body-right-menu'>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <div className='right-side-menu-items'>
            <div className='data-item'>
              <p>VECTOR: {item.Vector}</p>
              <p>TARGET: {item.Target}</p>
              <p>TIME: {item.Time}</p>
            </div>
            <div className='document-icon'>
              <MdDataExploration size={40} />
            </div>
          </div>
          {index !== data.length - 1 && (
            <div className='slope-separator'></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Sidebox;
