import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createIdea } from '../../actions/ideas'
// -----------------------------------------------------------------------
    class IdeaForm extends Component {
        state = {
            title: "",
            how_to: "",
            category: "",
            items: "",
            comments: []
        }

         handleSubmit(e) {
             e.preventDefault();

            const idea = {
                idea: this.state
            }
            this.props.createIdea(idea, this.props.history)
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
                    <div>
                        <label htmlFor="title">Title: </label>
                        <input type="text" name="title" id="title" value={this.state.title} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="category">Category</label>
                        <select name="category" id="category" value={this.state.category} onChange={this.handleChange} >
                            <option value=""> </option>
                            <option value="romance">Romantic</option>
                            <option value="fun">Fun</option>
                            <option value="relax">Relaxing</option>
                            <option value="adventure">Adventurous</option>
                            <option value="sexy">Sexy</option>
                        </select> 
                    </div>  
                   <div>
                       <label htmlFor="how_to">Instructions:</label><br />
                        <textarea name="how_to" id="how_to" cols="30" rows="5" placeholder="Tell me about your idea" value={this.state.how_to} onChange={this.handleChange} />
                   </div>
                   <div>
                        <label htmlFor="items">Items Needed:</label><br />
                        <textarea name="items" id="items" cols="30" rows="5" value={this.state.items} onChange={this.handleChange}/>
                   </div>
                   <div>
                       <input type="submit" value="Create Date" />
                   </div> 
            </form>    
        </div>
        )
    }
}
export default connect(null, {createIdea})(IdeaForm)
