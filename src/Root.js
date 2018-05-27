/**
 * Created by suzanne on 5/18/18.
 */
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import App from './App'


class Root extends Component {
  render() {
    return (
      <Router>
          <Route component={App} />
      </Router>
    )
  }
}

export default Root