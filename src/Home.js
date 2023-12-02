import React from 'react'
import "./Home.css"
import logo from "./assets/logo.png"
const Home = () => {
  return (
    <div>
     <nav className='cymulate-nav'>
        <div className='cymate-nav-icon'>
            <img className='cymate-nav-icon-logo-image' src={logo}/>
            <h1 className='cymate-nav-icon-logo-text'>Cymulate</h1>
        </div>
        <div>Cymulate Demo</div>
        <div>
            <ul className='cymate-nav-right-lists'>
                <li>cloud</li>
                <li>Agents</li>
                <li>notifi</li>
                <li>Hello Demo</li>
            </ul>
        </div>
     </nav>
    </div>
  )
}

export default Home