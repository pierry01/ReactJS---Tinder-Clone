import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Header from './Header'
import TinderCards from './TinderCards'

function App() {
  return (
    <div className="App">
      <Header />

      <Router>
        <Switch>
          <Route path="/chat">
            <h1>I am CHAT_PAGE</h1>
          </Route>

          <Route path="/">
            <TinderCards />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
