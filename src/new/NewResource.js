/**
 * Created by suzanne on 5/20/18.
 */
import React, {Component} from 'react'
import {Container, Header} from 'semantic-ui-react'
import './NewResource.css'
import slugify from 'slugify'
import Question from './Question'
import ResourceInfo from './ResourceInfo'
import PageContent from './PageContent'
import {Segment} from 'semantic-ui-react'


class NewResourceForm extends Component {
  constructor(props) {
    super(props)
    this.state =   {
      "name": "HEART Score",
      "friendly": "heart-score",
      "description": "The HEART Score is a tool used by physicians to determine the future risk of adverse cardiac events based on five risk factors: History, EKG Findings, Age, Risk Factors and Troponin.",
      "type": "Calculator",
      "field": "Cardiology",
      "condition": "ACS",
      "references": [
        {"name": "http://annals.org/aim/article-abstract/2622872/effect-using-heart-score-patients-chest-pain-emergency-department-stepped"},
        {"name": "https://dspace.library.uu.nl/handle/1874/242266"}
      ],
      "questions": [
        {
          "title": "History",
          "description": "How Suspicious is the history?",
          "options": [
            {
              "value": 0,
              "description": "Slightly Suspicious"
            },
            {
              "value": 1,
              "description": "Moderately Suspicous"
            },
            {
              "value": 2,
              "description": "Highly Suspcious"
            }
          ]
        } ,
        {
          "title": "EKG Findings",
          "description": "Do EKG findings suggest ischemia?",
          "options": [
            {
              "value": 0,
              "description": "Normal"
            },
            {
              "value": 1,
              "description": "Non-specific repolarization disturbance / LBBB / PM"
            },
            {
              "value": 2,
              "description": "Significant ST deviation"
            }
          ]
        } ,
        {
          "title": "Age",
          "description": "Age increases risk",
          "options": [
            {
              "value": 0,
              "description": "= 45 years"
            },
            {
              "value": 1,
              "description": "45-65 years"
            },
            {
              "value": 2,
              "description": "&gt;= 65 years"
            }
          ]
        } ,
        {
          "title": "Risk Factors",
          "description": "Hypercholesterolemia, Hypertension, Diabetis Melitis, Cigarette Smoking, Positivec Family History, Obesity(BMI&gt;30)",
          "options": [
            {
              "value": 0,
              "description": "No Risk Factors Known"
            },
            {
              "value": 1,
              "description": "1 or 2 Risk Factors"
            },
            {
              "value": 2,
              "description": "&gt;=3 or history of atherosclerotic disease"
            }
          ]
        },
        {
          "title": "Troponin",
          "description": "Cardiac Enzyme Leak",
          "options": [
            {
              "value": 0,
              "description": "&lt;= normal limit"
            },
            {
              "value": 1,
              "description": "1-3x normal limit"
            },
            {
              "value": 2,
              "description": "&gt;= 3 times normal limit"
            }
          ]
        }
      ],
      'pagebody': '',
    }

    this.handleChange = this.handleChange.bind(this)

    // this.handleNewOption = this.handleNewOption(this)
    // this.handleOptionChange = this.handleOptionChange(this)
    this.addNewQuestion = this.addNewQuestion.bind(this)
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }



  handleQuestionChange = (i) => (e) => {
    const name = e.target.name
    const questions = this.state.questions.map((question, j) => {
      if (j === i ) question[name] = e.target.value;
      return question;
    })
    this.setState({questions})
  }

  handleOptionChange = (qIndex,optIndex) =>  (e) => {
    const index = Number(e.target.name.split('-')[1]);
    const name = e.target.name.split('-')[0];
    const options = this.state.questions[qIndex].options.map((option, j) => {
      if (j === index) option[name] = e.target.value
      return option
    })
    this.setState({options})
  }

  slugifyTitle =(e) => {
    const slug = slugify(e.target.value).toLowerCase()
    this.setState({friendly: slug})

  }

  addNewQuestion()  {
    const newQuestion =  {"title": "",
      "description": "",
      "options": [
      {
        "value": "",
        "description": ""
      }]}
    console.log([...this.state.questions, newQuestion])
    this.setState((prevState) => {
      return {questions: [...prevState.questions, newQuestion]};
    });

  }


  handleNewOption(j) {
    let stateCopy = Object.assign({}, this.state)
    stateCopy.questions[j].options = [...stateCopy.questions[j].options, '']
    this.setState({stateCopy})
  }

  render () {

    const resource = {...this.state}
    console.log(resource)

    return(
      <Container text style={{ marginTop: '5em' }}>
        <Header as='h1'>Add New Resource</Header>
        <form className="resource-form" autoComplete="off" >

          <ResourceInfo
            resource = {this.state}
            handleChange = {this.handleChange}
            slugify = {this.slugifyTitle}
          />

          <Question
            questions = {this.state.questions}
            handleQuestion = {this.handleQuestionChange}
            handleOption = {this.handleOptionChange}
            addQuestion = {this.addNewQuestion}
            />

          <PageContent
            pagebody = {this.state.pagebody}
            handleChange = {this.handleChange}
          />

          <Segment attached='bottom'>
          <button
            type="submit"
            className="ui basic button green"
            style={{alignSelf: 'flex-end', marginRight: 0}}
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