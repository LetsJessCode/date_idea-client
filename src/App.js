import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import IdeaForm from './containers/ideas/IdeaForm'
import IdeaList from './containers/ideas/IdeaList'
import IdeaShow from './containers/ideas/IdeaShow'
import NavBar from './components/NavBar'
class App extends Component {
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
            <Route render={ () => <p>Uh Oh 💔 ! you seem to have lost your way! Click home! </p> } />
         </Switch>
      </div>
    </Router>
    )
  }
}
export default App;
