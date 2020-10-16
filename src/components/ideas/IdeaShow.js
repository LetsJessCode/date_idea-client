import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentForm from '../../containers/comments/CommentForm'
import CommentShow from '../../components/comments/CommentShow'

export class IdeaShow extends Component { 
    render() {
        if (this.props.idea) {
        console.log(this.props.idea)
        // 
        return (
        <div>
            <h3>{ this.props.idea.title}</h3>
            <h6>Category | {this.props.idea.category} </h6>
            <hr />
            <p>Items Needed: <br/> {this.props.idea.items}</p>
            <p>Setting Up: <br/> {this.props.idea.how_to}</p>
            <hr />
            <h3>Comments</h3>
            <hr />
                <CommentShow  comments={this.props.idea.comments}/>
                <CommentForm id={this.props.idea.id}/> 
             </div>        
       
            )}else {
                return <h4>Loading</h4>
            }
        }
    } 
    
    const mapStateToProps = (state, props) => {
        return {
            idea: state.ideaReducer.ideas.find(idea => idea.id === parseInt(props.match.params.id, 10))
        }
    }

    

 export default connect(mapStateToProps)( IdeaShow)
