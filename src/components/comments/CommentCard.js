import React from 'react'
import {NavLink} from 'react-router-dom'

const CommentCard = ({comments: {idea, id, name, comment}}) => {
    return (
       <NavLink to={`ideas/${id}/comments`}>
            <ul>
                <li>
                    { name } 
                    { comment }
                </li>
            </ul>
        </NavLink>
    )
}
export default CommentCard
