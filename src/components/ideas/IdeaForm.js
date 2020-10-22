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
            //  debugger;
             e.preventDefault();
            this.props.createIdea(this.state, this.props.history)
        }

        handleChange = e => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

        render() {
        return (
            <div className="ideaForm">
            <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label  htmlFor="title">Title: </label>
                        <input className="title" type="text" name="title" id="title" value={this.state.title} onChange={this.handleChange} />
                    
                        <label className="category" htmlFor="category">Category: </label>
                        <select className="dropdown" name="category" id="category" value={this.state.category} onChange={this.handleChange} >
                            <option value=""> </option>
                            <option value="romance">Romantic</option>
                            <option value="fun">Fun</option>
                            <option value="relax">Relaxing</option>
                            <option value="adventure">Adventurous</option>
                            <option value="sexy">Sexy</option>
                        </select> 
                    </div>  
                   <div className="row">
                       <label htmlFor="how_to">Instructions:</label><br />
                        <textarea className="textarea" name="how_to" id="how_to"  placeholder="Tell me about your idea" value={this.state.how_to} onChange={this.handleChange} />
                   
                        <label htmlFor="items">Items Needed:</label><br />
                        <textarea className="list_items" name="items" id="items" value={this.state.items} onChange={this.handleChange}/>
                   </div>
                   <div>
                       <button type="submit" >Create Date</button>
                   </div> 
            </form>    
        </div>
        )
    }
}
export default connect(null, {createIdea})(IdeaForm)
