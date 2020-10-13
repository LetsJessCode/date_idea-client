import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

 class NavBar extends Component {
    render() {
        return (
        <nav> 
            <NavLink to="/"> ❤️ Home</NavLink> <br/>
            <NavLink to="/ideas"> ❤️ Date Nights</NavLink> <br/>
            <NavLink to="/ideas/new"> ❤️ Create a Date</NavLink> 
        </nav>
        ) 
    }
}

export default NavBar
