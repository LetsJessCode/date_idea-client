import React from 'react'
import { NavLink } from 'react-router-dom'

export default ({ comments: {ideas, id} }) => <li><NavLink to={`/ideas/${id}`}> { title }</NavLink></li>