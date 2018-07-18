/* eslint-disable import/first */
/**
 * setup environment variables for the front end
 */

// set environment variables
//import 'dotenv/config'
import enableDebugger from './helpers/enableDebugger'


if (process.env.NODE_ENV === 'development' && process.env.REACT_APP_DEBUG)
  enableDebugger()
// if (process.env.REACT_APP_DEBUG) enableDebugger()

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App'
import { withRouter } from 'react-router'
// import Root from './Root'
// import App from './App';
import registerServiceWorker from './registerServiceWorker'

const AppWithRouter = withRouter(App)

ReactDOM.render(
  <Router>
    <AppWithRouter />
  </Router>,
  document.getElementById('root'),
)
registerServiceWorker()



