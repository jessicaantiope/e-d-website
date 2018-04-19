import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import Nav from './Nav'

const App = () => {
  return (
      <Router>
          <div id="app">
              <div className="title">
                  <Nav />
              </div>
              <br/>
              <footer className="footer">
              <a href="/" >Home</a>
              </footer>
          </div>
      </Router>
  )
}

export default App