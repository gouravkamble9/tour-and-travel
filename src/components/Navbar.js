import './NavbarStyle.css'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { MenuItem } from './MenuItem'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [clicked,setClicked]=useState(MenuItem[0].title)

    const handleclicked=(name)=>{
      setClicked(name);
    }


    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    
  return (
    <nav className='navbar-items'>
        <h1 className='navbar-logo'>KOP</h1>


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
                    <Link to={`${item.url}`} className={`${item.cName} ${item.title === clicked ? "menu-clicked" :""}`} onClick={()=>(setIsOpen(false),window.scrollTo(0,0),handleclicked(item.title))}> 
                    <i className={`${item.icon}`}></i>
                    {item.title}
                    </Link>
                </li>
            ))}
            <button className='signUp'>Sign Up</button>
        </ul>
    </nav>
  )
}

export default Navbar