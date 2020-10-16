import React, { Component } from 'react'
import { connect } from 'react-redux'

// --------------------------------------------------------------------------------------
export class CommentShow extends Component {

    render() {
        return  (
            this.props.comments.map(comment => {
                return (
                <div>
                    <h5>{comment.name}</h5>
                    <p>{comment.comment}</p>
                </div>
                )
            })    
        )            
    }
} 
 export default connect()(CommentShow)