import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createComment } from '../../actions/ideas'
// --------------------------------------------------------------
export class CommentForm extends Component {
    
    state = {
        name: this.props.name,
        comment: this.props.comment,
        idea_id: this.props.id
    }

    handleSubmit(e) {
        // debugger;
        e.preventDefault();
        this.props.createComment(this.state, this.props.id)
         console.log(this.state)
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="commentForm"> 
                <form onSubmit={this.handleSubmit.bind(this)}>
                     <h5> Leave a Comment </h5>
                    <div>
                        <input className="name" type="text" name="name" id="name" placeholder="Your Name" value={this.state.name} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <textarea className="textbox"  name="comment" id="comment" value={this.state.comment} onChange={this.handleChange}/>
                    </div>
                    <button type="submit" value="Submit Comment"> Submit Comment </button>
                </form>
            </div>
        )
    }
}

export default connect(null, {createComment})( CommentForm)
