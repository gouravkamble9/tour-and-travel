import './NavbarStyle.css'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { MenuItem } from './MenuItem'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    
  return (
    <nav className='navbar-items'>
        <h1 className='navbar-logo'>Kolhapur</h1>


        <div className='menu-icons'>
        {isOpen ? (
          <i className="fas fa-times" onClick={toggleMenu}></i>
        ) : (
          <i className="fas fa-bars" onClick={toggleMenu}></i>
        )}
        </div>

        
        <ul className={`${isOpen ? "nav-menu active" :"nav-menu"}`}>
            {MenuItem.map((item,index)=>(
                    <li key={index} >
                    <a href={`${item.url}`} className={`${item.cName}`}> 
                    <i className={`${item.icon}`}></i>
                    {item.title}
                    </a>
                </li>
            ))}
            <button className='signUp'>Sign Up</button>
        </ul>
    </nav>
  )
}

export default Navbar