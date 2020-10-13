import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './containers/Home'

class App extends Component {
  render() {
    return (
    <Router> 
      <Switch> 
        <div>
          <Route exact path="/" component= {Home} />
        </div>
      </Switch>
    </Router>
    )
  }
}
export default App;
