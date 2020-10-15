import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createComment } from '../../actions/comments'
// --------------------------------------------------------------
export class CommentForm extends Component {
    
    state = {
        name: "",
        comment: "",
        idea_id: this.props.id
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger;
        const comment = {
            comment: this.state
        }
        this.props.createComment(comment, this.props.history)
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div> 
                <form onSubmit={this.handleSubmit.bind(this)}>
                     <h5> Leave a Comment </h5>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input type="text " name="name" id="name" value={this.state.name} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <textarea cols="30" rows="5" name="comment" id="comment" value={this.state.comment} onChange={this.handleChange}/>
                    </div>
                    <input type="submit" value="Submit Comment" />
                </form>
            </div>
        )
    }
}

export default connect(null, {createComment})( CommentForm)
