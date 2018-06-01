/**
 * Created by suzanne on 5/31/18.
 */
import React, {Component} from 'react'
import {Segment, Header, Accordion} from 'semantic-ui-react'

import QuestionItem from './QuestionItem'

class Question extends Component {
  constructor(props){
    super(props)
    this.state = { activeIndex: 0 }

  }

  handleClick = (e, titleProps) => {
    console.log("passed to parent")
    //console.log(e, titleProps)
    const { index } = titleProps
    const { activeIndex } = this.state
    console.log("Active Index: " + activeIndex, "Index: " + index)
    const newIndex = activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex })
  }

  render (){
    const  activeIndex  = this.state
    return (
      <Segment attached>
      <Header>Questions</Header>
        <Accordion styled>

        {this.props.questions.map((q, i) => (

            <QuestionItem
              activeIndex = {activeIndex}
              key = {i}
              QuestionNum = {i}
              question = {q}
              handleClick = {this.handleClick}
              handleQuestion={this.handleQuestionChange}
              // resource = {...this.state}
            />

          )
        )}
      </Accordion>
        <button style={{marginBottom: '15px' }}
                type="button"
                onClick={this.handleNewQuestion}
                className="btn green"
        >
          Add Question
        </button>
      </Segment>

    )

  }
}

export default Question