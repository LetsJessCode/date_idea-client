import React, { Component } from 'react'
import { connect } from 'react-redux'

// --------------------------------------------------------------------------------------
export class CommentShow extends Component {

    render() {
        return  (
            this.props.comments.map(comment => {
                return (
                <div className="comments">
                  <p className="comment">{comment.comment}
                    <br/ >
                  - {comment.name}</p>
                <hr />
                </div>
                )
            })    
        )            
    }
} 
 export default connect()(CommentShow)