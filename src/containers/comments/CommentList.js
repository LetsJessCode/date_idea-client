import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentCard from '../../components/comments/CommentCard'
// import { fetchComments } from '../../actions/comments'
export class CommentList extends Component {
   
    render() {
        if(this.props.loading) {
            return <div>Comments Loading...</div>
         } else { 
            const comments = this.props.comments.map((comment, i) => {
                return <CommentCard key={i} comment= { comment } />
            })
                return (
            <div>
                <h3> List of Date Nights </h3>
                    <ul className="comments_section">
                        { comments }
                    </ul>
            </div>
        )
        }
    }
}
const mapStateToProps = state => {
    return {
        comments: state.ideaReducer.idea.comments
    }
}
export default connect()(CommentList)
