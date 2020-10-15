import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { connect } from 'react-redux'

import Home from './components/Home'
import IdeaForm from './containers/ideas/IdeaForm'
import IdeaList from './containers/ideas/IdeaList'
import IdeaShow from './components/ideas/IdeaShow'

import CommentForm from './containers/comments/CommentForm'
import NavBar from './components/NavBar'

import { fetchIdeas } from './actions/ideas'
import { fetchComments } from './actions/comments'
// ----------------------------------------------------------------
class App extends Component {
  
  componentDidMount() {
    this.props.fetchIdeas();
    
  }

  render() {
    return (
    <Router> 
        <div>
          <NavBar />
          <Switch> 
            <Route exact path="/" component= {Home} />
            <Route exact path="/ideas" component= {IdeaList} />
            <Route exact path="/ideas/new" component= {IdeaForm} />
            <Route exact path="/ideas/:id" component= {IdeaShow} />
            <Route exact path="/ideas/:id/comments/new" component= {CommentForm} />
            <Route render={ () => <p>Uh Oh 💔 ! you seem to have lost your way! Click home! </p> } />
         </Switch>
      </div>
    </Router>
    )
  }
}
export default connect(null, {fetchIdeas})(App);
