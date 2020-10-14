import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getIdea } from '../../actions/ideas'
export class IdeaShow extends Component {
    
    render() {
        if (this.props.idea) {
        console.log(this.props.idea)
        // const id= this.props.match.params.id
        return (
        <div>
            <h3>{ this.props.idea.title}</h3>
            <h6>Category | {this.props.idea.category} </h6>
            <hr />
            <p>Items Needed: <br/> {this.props.idea.items}</p>
            <p>Setting Up: <br/> {this.props.idea.how_to}</p>
            <hr />
            <h3>Comments</h3>
                {/* <ReviewList />
                <ReviewForm /> */}    
        </div>
    )}else {
        return <h4>Loading</h4>
    }
    }
} 
    const mapStateToProps = (state, props) => {
        // this.props.ideas.find(idea => idea.id === parseInt(this.props.match.params.ideaId, 10)
        return {
            idea: state.ideaReducer.ideas.find(idea => idea.id === parseInt(props.match.params.id, 10))
        }
    }

    

 export default connect(mapStateToProps)( IdeaShow)
