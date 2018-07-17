/* eslint-disable
 react/sort-comp, import/first, react/no-unused-state
 */

/**
 * Created by suzanne on 5/19/18.
 */
import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './navigation/Navbar'
import Categories from './categories/Categories'
import Category from './categories/Category'
import Topics from './topics/Topics'
import Topic from './topics/Topic'
import About from './pages/About'
import NewReference from './new/NewResource'
import * as apiCalls from './api'
const log = require('./helpers/logger')('App')

// let payload = []
let allResources = []

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resources: [],
      blankResource: {
        name: '',
        friendly: '',
        description: '',
        type: 'calculator',
        field: '',
        condition: '',
        references: [
          {
            title: '',
            url: '',
            author: '',
            dateAccessed: '',
            additional: '',
          },
        ],
        questions: [
          {
            title: '',
            description: '',
            options: [{ value: '', description: '' }],
          },
        ],
        pagebody: ''
      },
      // this prop tracks any error codes from the server
      errorLoading: '',
    }

    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.searchResources = this.searchResources.bind(this)
  }

  componentDidMount() {
    this.loadResources()
  }

  async loadResources() {
    // allResources = payload
    // log.error('all my resources %o', { allResources })
    // this.setState({ resources: { allResources }.resources })
    // log.info(this.state)
    log.info('trying to load app resources...')
    let payload

    try {
      payload = await apiCalls.getResources()

      /**
       * if we have a bad response, use this loading state to
       * render a message to the user and exit early
       */
      if (!payload.ok) return this.setState({ errorLoading: payload.status })

      // otherwise we have a valid response
      if (this.state.errorLoading) {
        // reset the error var here if it's present
        return this.setState({ errorLoading: '', resources: [] })
      }
    } catch (e) {
      log.error('critical error fetching resources: ', e)
    }

    // move the final return here to make eslint happy
    allResources = payload.resources
    return this.setState({ resources: payload.resources })
  }

  handleSearchChange = (searchText) => {
    this.setState({
      resources: this.searchResources(searchText),
    })
  }

  searchResources(searchString) {
    return allResources.filter((resource) => {
      if (resource.name.toLowerCase().includes(searchString.toLowerCase())) {
        console.log(`${searchString} found in ${resource.name} in Name field `)
        return true
      }
      if (resource.pagebody && resource.pagebody.includes(searchString)) {
        console.log(`${searchString} found in ${resource.pagebody} Pagebody `)
        return true
      }
      if (resource.description && resource.description.includes(searchString)) {
        console.log(`${searchString} found in ${resource.description} Description `)
        return true
      }
      return false
    })
  }

  render() {

    return (
      <Container>
        <Navbar
          resources={this.state.resources}
          handleSearch={this.handleSearchChange}
        />
        <Switch>
          <Route exact path="/" component={About} />
          <Route
            path="/categories/:field"
            render={props => (
              <Category resources={this.state.resources} {...props} />
            )}
          />
          <Route
            path="/categories"
            render={props => (
              <Categories resources={this.state.resources} {...props} />
            )}
          />
          <Route path="/new" component={NewReference} />
          <Route
            path="/about"
            render={props => (
              <About resources={this.state.resources} {...props} />
            )}
          />
          <Route
            path="/topics/:friendly"
            render={props => (
              <Topic resources={this.state.resources} {...props} />
            )}
          />
          <Route
            path="/topics"
            render={props => (
              <Topics resources={this.state.resources} {...props} />
            )}
          />
        </Switch>
      </Container>
    )
  }
}

export default App
