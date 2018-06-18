/* eslint-disable import/first */
/**
 * setup environment variables for the front end
 */

// set environment variables
import 'dotenv/config'
import enableDebugger from './helpers/enableDebugger'

if (process.env.REACT_APP_DEBUG) enableDebugger()

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App'
// import Root from './Root'
// import App from './App';
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
)
registerServiceWorker()
