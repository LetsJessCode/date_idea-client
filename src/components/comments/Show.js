import React, { Component } from 'react'
// --------------------------------------------------------------------------------------
export class CommentShow extends Component {

    render() {
        return  (
            this.props.comments.map(comment => {
                return (
                <div key={comment.id} className="comments">
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
 export default CommentShow