/**
 * Created by suzanne on 5/31/18.
 */
import React, {Component} from 'react'
import {Segment, Header, Accordion, Button} from 'semantic-ui-react'

import QuestionItem from './QuestionItem'

class Question extends Component {
  constructor(props){
    super(props)
    this.state = { activeIndex: 0 }

  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex })
  }

  render (){
    const  activeIndex  = this.state
    return (
      <Segment attached>
      <Header>Questions</Header>
        <Accordion styled exclusive={false} fluid >

        {this.props.questions.map((q, i) => (
          <div key={i}>
            <QuestionItem
              activeIndex = {activeIndex}
              key = {i}
              QuestionNum = {i}
              question = {q}
              handleClick = {this.handleClick}
              handleQuestion={this.props.handleQuestion}
            />
          </div>
          )
        )}
      </Accordion>
        <Button style={{marginTop: '15px' }}
                onClick={this.handleNewQuestion}
                className="btn green"
        >
          Add Question
        </Button>
      </Segment>

    )

  }
}

export default Question