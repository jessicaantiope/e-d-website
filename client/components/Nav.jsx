
import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Home from './Home'
import Acting from './Acting'
import Voice from './Voice'

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.mainMenu = this.mainMenu.bind(this)
  }

  mainMenu() {
    return (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to='/home' className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/acting' className="nav-link">Acting</Link>
        </li>
        <li className="nav-item">
          <Link to='/voice' className="nav-link">Voice</Link>
        </li>
      </ul>
    )
  }

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-md navbar-light bg-light navBar textColourNav">
            <Link to='/' className="navbar-brand"><i className="fas fa-home faFaFont"></i></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">{this.mainMenu()}
              <ul className="navbar-nav ml-auto">
              </ul>
            </div>
          </nav>

          <Route path='/home' component={Home} />
          <Route exact path='/acting' component={Acting} />
          <Route exact path='/voice' component={Voice} />
        </div>

      </Router>
    )
  }
}


export default Nav