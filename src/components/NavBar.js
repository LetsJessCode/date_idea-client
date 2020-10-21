import React from 'react'
import { NavLink } from 'react-router-dom'

//-----------------------------------------------------------------
 const NavBar = () => {
        return (
            <nav className="nav">
              <NavLink to="/"> Home</NavLink>  <br />
              <NavLink to="/ideas"> Date Nights</NavLink>  <br />
              <NavLink to="/ideas/new"> Create a Date</NavLink>  
            </nav>
        ) 
    }
export default NavBar
