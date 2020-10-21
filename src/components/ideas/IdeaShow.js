import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentForm from '../../containers/comments/CommentForm'
import CommentShow from '../comments/CommentShow'
export class IdeaShow extends Component { 

    render() {
        // debugger;
        if (this.props.idea) {
        console.log(this.props.idea)
        // 
        return (
        <div>
            <div className="date_list" > 
                <h3>{ this.props.idea.title}</h3>
                <h6>Category | {this.props.idea.category} </h6>
                <hr />
                <p className="setup">Setting Up: <br/> {this.props.idea.how_to}</p>
                <p className="item">Items Needed: <br/> {this.props.idea.items}</p>
                
        </div>
        <div className="commentSec">       
            <h3>Comments</h3>
                <CommentShow  comments={this.props.idea.comments}/>
                <hr />
                <CommentForm id={this.props.idea.id} history={this.props.history}/> 
            </div>
          </div>        
        )}else {
                return <h4>Loading</h4>
            }
        }
    } 
    const mapStateToProps = (state, props) => {
        return {
            idea: state.ideaReducer.ideas.find
            (idea => idea.id === parseInt(props.match.params.id, 10)),
            name: ""
        }
    }

    

 export default connect(mapStateToProps)( IdeaShow)
