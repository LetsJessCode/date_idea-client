import React, { Component } from 'react'
import IdeaCard from './IdeaNav'
import {connect} from 'react-redux'
export class IdeaList extends Component {    
        render() {
            if(this.props.loading) {
                return <div>Romance Loading...</div>
            } else{ 
                const ideas = this.props.ideas.map((idea) => {
                    return <IdeaCard key={idea.id} idea={idea} />
                })
                return (
                <div className="ideaDiv">
                <h3>List of Date Nights</h3>
                    <ul className="ideaList">
                            { ideas }
                    </ul>
                   
                </div>
            )
        }
    }
}      
const mapStateToProps = state => {
    // debugger;
    return {
        ideas: state.ideaReducer.ideas,
        loading: state.ideaReducer.loading
    }
}

export default connect(mapStateToProps)(IdeaList)

