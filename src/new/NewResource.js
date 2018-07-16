/**
 * Created by suzanne on 5/20/18.
 */
import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'
import slugify from 'slugify'
import './NewResource.css'
import Question from './Question'
import ResourceInfo from './ResourceInfo'
import PageContent from './PageContent'
import { Segment } from 'semantic-ui-react'
import References from './References'
import * as apiCalls from '../api'
const log = require('../helpers/logger')('NewResource')
// import Markdown from './Markdown'

class NewResourceForm extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   "name": "",
    //   "friendly": "",
    //   "description": "",
    //   "type": "",
    //   "field": "",
    //   "condition": "",
    //   "references": [
    //     {"name": ""},
    //     {"name": ""}
    //   ],
    //   "questions":[],
    //
    //   'pagebody': ''
    // }
    // this.state =   {
    //   "name": "HEART Score",
    //   "friendly": "heart-score",
    //   "description": "The HEART Score is a tool used by physicians to determine the future risk of adverse cardiac events based on five risk factors: History, EKG Findings, Age, Risk Factors and Troponin.",
    //   "type": "Calculator",
    //   "field": "Cardiology",
    //   "condition": "ACS",
    //   "references": [
    //     {"name": "http://annals.org/aim/article-abstract/2622872/effect-using-heart-score-patients-chest-pain-emergency-department-stepped"},
    //     {"name": "https://dspace.library.uu.nl/handle/1874/242266"}
    //   ],
    //   "questions": [
    //     {
    //       "title": "History",
    //       "description": "How Suspicious is the history?",
    //       "options": [
    //         {
    //           "value": 0,
    //           "description": "Slightly Suspicious"
    //         },
    //         {
    //           "value": 1,
    //           "description": "Moderately Suspicous"
    //         },
    //         {
    //           "value": 2,
    //           "description": "Highly Suspcious"
    //         }
    //       ]
    //     } ,
    //     {
    //       "title": "EKG Findings",
    //       "description": "Do EKG findings suggest ischemia?",
    //       "options": [
    //         {
    //           "value": 0,
    //           "description": "Normal"
    //         },
    //         {
    //           "value": 1,
    //           "description": "Non-specific repolarization disturbance / LBBB / PM"
    //         },
    //         {
    //           "value": 2,
    //           "description": "Significant ST deviation"
    //         }
    //       ]
    //     } ,
    //     {
    //       "title": "Age",
    //       "description": "Age increases risk",
    //       "options": [
    //         {
    //           "value": 0,
    //           "description": "= 45 years"
    //         },
    //         {
    //           "value": 1,
    //           "description": "45-65 years"
    //         },
    //         {
    //           "value": 2,
    //           "description": "&gt;= 65 years"
    //         }
    //       ]
    //     } ,
    //     {
    //       "title": "Risk Factors",
    //       "description": "Hypercholesterolemia, Hypertension, Diabetis Melitis, Cigarette Smoking, Positivec Family History, Obesity(BMI&gt;30)",
    //       "options": [
    //         {
    //           "value": 0,
    //           "description": "No Risk Factors Known"
    //         },
    //         {
    //           "value": 1,
    //           "description": "1 or 2 Risk Factors"
    //         },
    //         {
    //           "value": 2,
    //           "description": "&gt;=3 or history of atherosclerotic disease"
    //         }
    //       ]
    //     },
    //     {
    //       "title": "Troponin",
    //       "description": "Cardiac Enzyme Leak",
    //       "options": [
    //         {
    //           "value": 0,
    //           "description": "&lt;= normal limit"
    //         },
    //         {
    //           "value": 1,
    //           "description": "1-3x normal limit"
    //         },
    //         {
    //           "value": 2,
    //           "description": "&gt;= 3 times normal limit"
    //         }
    //       ]
    //     }
    //   ],
    //   'pagebody': ''
    // }
    // this.state=
    //   {
    //     "name":        "Glascow Coma Score",
    //     "friendly":    "glascow-coma-score",
    //     "description": "The Scale was described in 1974 by Graham Teasdale and Bryan Jennett (Assessment of coma and impaired consciousness. A practical scale. Lancet 1974; 2:81-4.) as a way to communicate about the level of consciousness of patients with an acute brain injury.\n\nThe findings using the scale guide initial decision making and monitor trends in responsiveness that are important in signaling the need for new actions.",
    //     "type":        "Calculator",
    //     "field":       "Trauma",
    //     "condition":   "TBI",
    //     "references":  [
    //       {
    //         "title": "Glasgow Coma Score",
    //         "url": "http://www.glasgowcomascale.org/",
    //         "author": "Graham Teasdale",
    //         "dateAccessed": "June 6, 2018",
    //         "additional": ""
    //       },
    //      ],
    //     "questions":   [{
    //       "title":       "Eyes",
    //       "description": "Eye Opening ",
    //       "options":     [
    //         {"value": "4", "description": "Spontaneous"},
    //         {"value": "3", "description": "To Sound"},
    //         {"value": "2", "description": "To Pressure"},
    //         {"value": "1", "description": "None"}
    //       ]
    //     },
    //       {
    //         "title":       "Verbal Response",
    //         "description": "",
    //         "options":     [
    //           {"value": "5", "description": "Oriented"},
    //           {"value": "4", "description": "Confused"},
    //           {"value": "3", "description": "Words"},
    //           {"value": "2", "description": "Sounds"},
    //           {"value": "1", "description": "None"}
    //         ]
    //       },
    //       {
    //         "title":       "Motor Response",
    //         "description": "",
    //         "options":     [
    //           {"value": "6", "description": "Obey Commands"},
    //           {"value": "5", "description": "Localising"},
    //           {"value": "4", "description": "Normal Flexion"},
    //           {"value": "3", "description": "Abnormal Flexion"},
    //           {"value": "2", "description": "Extension"},
    //           {"value": "1", "description": "None"}
    //         ]
    //       }
    //     ],
    //     "pagebody":    "",
    //     resources: ""
    //
    //
    //   }

    this.state = {
      resource: {
        name:        '',
        friendly:    '',
        description: '',
        type:        '',
        field:       '',
        condition:   '',
        references:  [
          {
            title:        '',
            url:          '',
            author:       '',
            dateAccessed: '',
            additional:   '',
          },
        ],
        questions:   [
          {
            title:       '',
            description: '',
            options:     [{value: '', description: ''}],
          },
        ],
        pagebody:    ''
      },
      resources:   ''
    }

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

  addResource() {
    console.log(Object.keys(this.state.resource))
    const newResource = apiCalls.createResource(this.state.resource)
    this.setState({ resources: [...this.state.resources, newResource] })
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
    // const resource = {...this.state}
    // console.log(resource)
    const resourceData =
      this.state.resource.type === 'Calculator' ? (
        <Question
          questions={this.state.resource.questions}
          handleQuestion={this.handleQuestionChange}
          deleteQuestion={this.deleteQuestion}
          deleteOption={this.deleteOption}
          handleOption={this.handleOptionChange}
          addQuestion={this.addNewQuestion}
          addOption={this.addNewOption}
        />
      ) : (
        <PageContent
          pagebody={this.state.resource.pagebody}
          handleChange={this.handleChange}
        />
      )

    return (
      <Container text style={{ marginTop: '5em' }}>
        <Header as="h1">Add New Resource</Header>
        <form className="resource-form" autoComplete="off">
          <ResourceInfo
            resource={this.state.resource}
            handleChange={this.handleChange}
            slugify={this.slugifyTitle}
            handleType={this.handleTypeChange}
          />

          {resourceData}

          <References
            references={this.state.resource.references}
            handleReference={this.handleReferenceChange}
            handleType={this.handleTypeChange}
            addReference={this.addNewReference}
            removeReference ={this.removeReference}
          />

          <Segment attached="bottom">
            <button
              type="button"
              className="ui basic button green"
              style={{ alignSelf: 'flex-end', marginRight: 0 }}
              onClick={this.addResource}
            >
              SAVE
            </button>
          </Segment>
        </form>
      </Container>
    )
  }
}

export default NewResourceForm
