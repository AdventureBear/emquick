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
    // this.handleQuestionChange = this.handleQuestionChange(this)
    // this.handleNewQuestion = this.handleNewQuestion(this)
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleQuestionChange = (i) => (e) => {
    let stateCopy = Object.assign({}, this.state)
    const name = e.target.name

    const questions = stateCopy.questions.map((question, j) => {
      if (j === i ) question[name] = e.target.value;
      return question;
    })

    stateCopy.questions = questions
    this.setState({questions: stateCopy.questions})
  }

  slugifyTitle =(e) => {
    const slug = slugify(e.target.value).toLowerCase()
    this.setState({friendly: slug})
      console.log("Slugging: ", slug)
  }


  handleNewOption(j) {
    let stateCopy = Object.assign({}, this.state)
    stateCopy.questions[j].options = [...stateCopy.questions[j].options, '']
    this.setState({stateCopy})
  }

  // handleOptionChange = (j) =>  (e) => {
  //   let stateCopy = Object.assign({}, this.state)
  //   const index = Number(e.target.name.split('-')[1]);
  //   const options = this.state.questions[j].options.map((opt, i) => (
  //     i === index ? e.target.value : opt
  //   ));
  //   stateCopy.questions[j].options = options
  //   this.setState({stateCopy})
  // }






  render () {

    const resource = {...this.state}
    console.log(resource)

    return(
      <Container text style={{ marginTop: '7em' }}>
        <Header as='h1'>Add New Resource</Header>
        <form className="resource-form" autoComplete="off" onSubmit={()=>{}}>

          <ResourceInfo
            resource = {this.state}
            handleChange = {this.handleChange}
            slugify = {this.slugifyTitle}/>

          <Question
            questions = {this.state.questions}
            handleQuestion = {this.handleQuestionChange}
            />

          <PageContent
            pagebody = {this.state.pagebody}
            handleChange = {this.handleChange}
          />

          <Segment attached='bottom'>
          <button
            type="submit"
            className="btn green"
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