import React, { Component } from 'react'
import ReferencePage from './ReferencePage'
import ResourceDescription from './ResourceDescription'
import ResourceBody from './ResourceBody'
import ResourceControl from './ResourceControl'
import ResourceResult from './ResourceResult'
import PropTypes from 'prop-types' //ES6


import './Resource.css'

// let resource = {
//   name: "NIH Stroke Scale",
//   type: "Calculator",
//   field: "Neurology",
//   condition: "Stroke",
//   questions: [{
//     title: "1A: Level of Consciousness",
//     options: [
//       {
//         value: 0,
//         description: "Alert; keenly responsive."
//       },
//       {
//         value: 1,
//         description: "Not alert; but arousable by minor stimulation to obey, answer, or respond."
//       },
//       {
//         value: 2,
//         description: "Not alert; requires repeated stimulation to attend, or is obtunded and requires strong or painful stimulation to make movements (not stereotyped)."
//       },
//       {
//         value: 3,
//         description: "Responds only with reflex motor or autonomic effects, or totally unresponsive, flaccid, and areflexic."
//       }
//     ]
//   },
//     {
//       title: "1B: LOC Questions",
//       options: [
//         {
//           value: 0,
//           description: "Answers both questions correctly."
//         },
//         {
//           value: 1,
//           description: "Answers one question correctly."
//         },
//         {
//           value: 2,
//           description: "Answers neither question correctly."
//         }
//       ]
//     },
//     {
//       title: "1C: LOC Commands",
//       options: [
//         {
//           value: 0,
//           description: "Performs both tasks correctly."
//         },
//         {
//           value: 1,
//           description: "Performs one task correctly."
//         },
//         {
//           value: 2,
//           description: "Performs neither task correctly."
//         }
//       ]
//     }
//
//   ]
// }

class Resource extends Component {
  constructor(props){
    super(props)
    let arr = Array(this.props.resource.questions.length).fill(0)
    this.state = {
      selectionMade: false,
      scores: arr,
      question: 0
    }
    console.log("Scores length: ", this.state.scores.length)
    this.handleNext = this.handleNext.bind(this)
    this.handlePrev = this.handlePrev.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.handleSelection = this.handleSelection.bind(this)
  }


  handleNext = (prevState) => {
    if (this.state.question < this.props.resource.questions.length-1) {
      console.log("Next Question")
      this.setState((prevState) => {
        return {question: prevState.question + 1,
            selectionMade: false
        }
      })
    } else {
      console.log("No more Questions!")
    }
  }


  handlePrev = (prevState) => {
    if (this.state.question < 1 ) {
      console.log("At Beginning")

    } else {
      console.log("Previous Question...")
      this.setState((prevState) => {
        return {question: prevState.question - 1}
      })
    }
  }

  handleReset = () => {
    let arr = Array(this.props.resource.questions.length).fill(0)
    this.setState({ question: 0, scores: arr })
  }

  handleSelection= (score) => {

    console.log("Clicked Selection: " + score)
    let scores = this.state.scores
    scores[this.state.question] = Number.parseInt(score,10)
    this.setState({scores: scores, selectionMade: true})
    console.log("Question number: " + this.state.question)

  }

  render(){
    const resourceType = this.props.resource.type
    const page = (resourceType ==="Reference")  ?  (
      <ReferencePage
        name={this.props.resource.name}
        body={this.props.resource.pagebody}
      />

    ) : (
      <div className='component-resource'>
        <ResourceDescription
          name={this.props.resource.name}
        />
        <ResourceBody
          question={this.props.resource.questions[this.state.question]}
          handleSelection={this.handleSelection}
        />
        <ResourceControl
          selectionMade = {this.state.selectionMade}
          handleNext={this.handleNext}
          handlePrev={this.handlePrev}
          handleReset={this.handleReset}
        />
        <ResourceResult
          selectionMade = {this.state.selectionMade}
          score={((this.state.scores.length > 0) ? this.state.scores.reduce((a, x) => a + x) : 0) }
          references = {this.props.resource.references}
        />
      </div>
    )


    return (
      <div>
        {page}
      </div>
      )
  }
}

Resource.propTypes = {
  references: PropTypes.object
};

export default Resource
