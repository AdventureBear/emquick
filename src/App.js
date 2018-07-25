/* eslint-disable
 react/sort-comp, import/first, react/no-unused-state
 */

/**
 * Created by suzanne on 5/19/18.
 */
import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom'
import slugify from 'slugify'
import Navbar from './navigation/Navbar'
import Categories from './categories/Categories'
import Category from './categories/Category'
import Topics from './topics/Topics'
import Topic from './topics/Topic'
import About from './pages/About'
import NewReference from './new/NewResource'
import * as apiCalls from './api'

const log = require('./helpers/logger')('App')
let redirectURL

// let payload = []
let allResources = []

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirectNew: false,
      resources: [],
      resource: {
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
    this.handleChange = this.handleChange.bind(this)
    this.handleTypeChange = this.handleTypeChange.bind(this)
    this.handleReferenceChange = this.handleReferenceChange.bind(this)

    // this.handleNewOption = this.handleNewOption(this)
    // this.handleOptionChange = this.handleOptionChange(this)
    this.addNewQuestion = this.addNewQuestion.bind(this)
    this.addNewReference = this.addNewReference.bind(this)
    this.removeReference = this.removeReference.bind(this)
    this.addNewOption = this.addNewOption.bind(this)
    this.addResource = this.addResource.bind(this)
    this.deleteOption = this.deleteOption.bind(this)
    this.deleteQuestion = this.deleteQuestion.bind(this)
  }

  componentDidMount() {
    this.loadResources()
  }

  componentDidUpdate() {
    this.state.redirectNew ?
    this.props.history.push(redirectURL)
      : null
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

  addResource() {
  console.log(this.state.resource)
  const slug = this.state.resource.friendly
  redirectURL = `/topics/${slug}`
  const newResource = apiCalls.createResource(this.state.resource)
  const makeRedirect = async () => {
    await this.setState({
    resources: [...this.state.resources, newResource],
    redirectNew: true
    })
      // this.props.history.push('/topics')
      return "done"
  }

  makeRedirect()
}


  handleChange(e) {
  let resource = this.state.resource
  const name = e.target.name
  const value = e.target.value
  log.info("Updating state: " + name + ": " + value)
  resource[name] = value
  this.setState({ resource })
}

  handleTypeChange = (e, { value }) => {
  let resource = this.state.resource
  console.log(value)
  resource.type = value
  this.setState({ resource })
}

  handleReferenceChange = i => (e) => {
  const name = e.target.name
  const references = this.state.resource.references.map((reference, j) => {
    if (j === i) {
      reference[name] = e.target.value
      log.info("Updating Reference: " + name + ": " + e.target.value)
    }

    return reference
  })
  this.setState({ references })
}

  handleQuestionChange = i => (e) => {
  const name = e.target.name
  const questions = this.state.resource.questions.map((question, j) => {
    if (j === i) question[name] = e.target.value
    log.info("Updating Question " + name + ": " + e.target.value)
    return question
  })
  this.setState({ questions })
}

  handleOptionChange = (qIndex, optIndex) => (e) => {
  const index = Number(e.target.name.split('-')[1])
  const name = e.target.name.split('-')[0]
  const options = this.state.resource.questions[qIndex].options.map((option, j) => {
    if (j === index) option[name] = e.target.value
    log.info("Updating Option " + index + ", " + name + ": " + e.target.value)
    return option
  })
  this.setState({ options })
}

  slugifyTitle = (e) => {
  const slug = slugify(e.target.value).toLowerCase()
  log.info("Updating slug: " + slug)
  const newState = {...this.state.resource, friendly: slug}
  this.setState({ ...this.state, resource: newState })
}

  addNewReference() {
  const newReference = {
    title: '',
    author: '',
    url: '',
    additional: '',
    dateAccessed: '',
  }

  let references = [...this.state.resource.references, newReference]
  log.info("Adding references number " + references.length )

  const newState = {...this.state.resource, references: references}
  this.setState({ ...this.state, resource: newState })
  log.info(this.state.resource)
}

  removeReference(refNum) {
  log.info("Removing reference: " + refNum)
  const newReferences = this.state.resource.references
  newReferences.splice(refNum, 1)
  log.info(this.state.resource.references, newReferences)
  const newState = {...this.state.resource, references: newReferences}
  this.setState({ ...this.state, resource: newState })
}

  addNewQuestion() {
  const newQuestion = {
    title: '',
    description: '',
    options: [
      {
        value: '',
        description: '',
      },
    ],
    edit: true,
  }
  let questions = [...this.state.resource.questions, newQuestion]
  log.info("Adding question number " + questions.length )

  const newState = {...this.state.resource, questions: questions}
  this.setState({ ...this.state, resource: newState })
  log.info(this.state.resource)

  // this.setState(prevState => ({
  //   questions: [...prevState.questions, newQuestion],
  // }))
}

  addNewOption(questionNum) {
  const newOption = {
    value: 'Value',
    description: 'Description',
    edit: true,
  }

  const questions = this.state.resource.questions.map((question, i) => {
    if (i === questionNum) {
      question.options = [
        ...this.state.resource.questions[questionNum].options,
        newOption,
      ]
    }
    return question
  })
  this.setState({ questions })
}

  handleNewOption(j) {
  const stateCopy = Object.assign({}, this.state.resource)
  stateCopy.resource.questions[j].options = [...stateCopy.resource.questions[j].options, '']
  this.setState({ stateCopy })
}

  deleteOption(questionNum, optionNum) {
    log.info(`Deleting option ${optionNum} for question ${questionNum}`)
    let questionsCopy = this.state.resource.questions
  // const questionCopy = this.state.resource.questions[questionNum]
    questionsCopy[questionNum].options.splice(optionNum, 1)
    console.log(questionsCopy)
    this.setState({...this.state.resource, questions: questionsCopy })
  }

  deleteQuestion(questionNum){
  log.info(`Deleting question ${questionNum}`)
  let questionsCopy = this.state.resource.questions
  questionsCopy.splice(questionNum, 1)
  console.log(questionsCopy)
  this.setState({...this.state.resource, questions: questionsCopy })
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
              <Category
                resources={this.state.resources}
                {...props} />
            )}
          />

          <Route
            path="/categories"
            render={props => (
              <Categories
                resources={this.state.resources}
                {...props} />
            )}
          />

          <Route
            path="/new"
            render={(props) => (
              <NewReference
                resource = {this.state.resource}
                handleChange={this.handleChange}
                slugifyTitle={this.slugifyTitle}
                handleQuestionChange={this.handleQuestionChange}
                deleteQuestion={this.deleteQuestion}
                deleteOption={this.deleteOption}
                handleOptionChange={this.handleOptionChange}
                addNewQuestion={this.addNewQuestion}
                addNewOption={this.addNewOption}
                handleReferenceChange={this.handleReferenceChange}
                handleTypeChange={this.handleTypeChange}
                addNewReference={this.addNewReference}
                removeReference ={this.removeReference}
                addResource={this.addResource}
                {...props}
              />
            )}
          />

          <Route
            path="/about"
            render={props => (
              <About
                resources={this.state.resources}
                {...props} />
            )}
          />

          <Route
            path="/topics/:friendly"
            render={props => (
              <Topic
                resources={this.state.resources}
                {...props} />
            )}
          />

          <Route
            path="/topics"
            render={props => (
              <Topics
                resources={this.state.resources}
                {...props} />
            )}
          />

        </Switch>
      </Container>
    )
  }
}

export default App
