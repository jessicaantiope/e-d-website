import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

const App = () => {
  return (
      <Router>
          <div id="app">
              <div className="title">
                  <h1>Hello World</h1>
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