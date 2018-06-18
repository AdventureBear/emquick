/* eslint-disable
no-unused-vars, no-shadow, prefer-destructuring
*/
import React, { Component } from 'react'
// import ReferencePage from '../articles/ReferencePage'
import { Container, Segment, Rail } from 'semantic-ui-react'
import ResourceDescription from './ResourceDescription'
import ResourceBody from './ResourceBody'
import ResourceControl from './ResourceControl'
import ResourceResult from './ResourceResult'
// import PropTypes from 'prop-types' //ES6

import './Resource.css'

class Resource extends Component {
  constructor(props) {
    super(props)
    const arr = Array(this.props.resource.questions.length).fill(0)
    this.state = {
      selectionMade: false,
      scores: arr,
      question: 0,
    }
    // console.log("Scores length: ", this.state.scores.length)
    this.handleNext = this.handleNext.bind(this)
    this.handlePrev = this.handlePrev.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.handleSelection = this.handleSelection.bind(this)
  }

  handleNext = (prevState) => {
    if (this.state.question < this.props.resource.questions.length - 1) {
      console.log('Next Question')
      this.setState(prevState => ({
        question: prevState.question + 1,
        selectionMade: false,
      }))
    } else {
      console.log('No more Questions!')
    }
  }

  handlePrev = (prevState) => {
    if (this.state.question < 1) {
      console.log('At Beginning')
    } else {
      console.log('Previous Question...')
      this.setState(prevState => ({ question: prevState.question - 1 }))
    }
  }

  handleReset = () => {
    const arr = Array(this.props.resource.questions.length).fill(0)
    this.setState({ question: 0, scores: arr })
  }

  handleSelection = (score) => {
    console.log(`Clicked Selection: ${score}`)
    const scores = this.state.scores
    scores[this.state.question] = Number.parseInt(score, 10)
    this.setState({ scores, selectionMade: true })
    console.log(`Question number: ${this.state.question}`)
  }

  render() {
    // const resourceType = this.props.resource.type
    const page = (
      <Segment className="component-resource">
        <ResourceBody
          question={this.props.resource.questions[this.state.question]}
          handleSelection={this.handleSelection}
        />
        <ResourceControl
          selectionMade={this.state.selectionMade}
          handleNext={this.handleNext}
          handlePrev={this.handlePrev}
          handleReset={this.handleReset}
        />
        <ResourceResult
          selectionMade={this.state.selectionMade}
          score={
            this.state.scores.length > 0
              ? this.state.scores.reduce((a, x) => a + x)
              : 0
          }
          references={this.props.resource.references}
        />
      </Segment>
    )

    return (
      <Container>
        <ResourceDescription name={this.props.resource.name} />
        {page}
      </Container>
    )
  }
}

// Resource.propTypes = {
//   references: PropTypes.object,
// }

export default Resource
