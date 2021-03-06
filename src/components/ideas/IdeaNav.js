import React from 'react'
import { NavLink } from 'react-router-dom'

export default ({ idea: {title, id} }) => 
    <li className="listIdea">
        <NavLink to={`/ideas/${id}`}> { title }</NavLink>
    </li>
