/**
 * Created by suzanne on 5/31/18.
 */
import React, { Component } from 'react'
import { Segment, Header, Accordion, Button } from 'semantic-ui-react'

import QuestionItem from './QuestionItem'

class Question extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: -1,
    }
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex })
  }

  async addQuestion() {
    await this.props.addQuestion()
    this.setState({
      activeIndex: this.props.questions.length,
    })
  }

  render() {
    const activeIndex = this.state
    return (
      <Segment attached>
        <Header>Questions</Header>
        <Accordion styled exclusive={false} fluid>
          {this.props.questions.map((q, i) => (
            <div key={i}>
              <QuestionItem
                isEditing={this.props.isEditing}
                activeIndex={activeIndex}
                key={i}
                questionNum={i}
                question={q}
                handleClick={this.handleClick}
                handleQuestion={this.props.handleQuestion}
                handleOption={this.props.handleOption}
                addOption={this.props.addOption}
              />
            </div>
          ))}
        </Accordion>
        <div>
          <Button
            type="button"
            style={{ marginTop: '15px' }}
            onClick={this.props.addQuestion}
            className="ui button basic green"
          >
            Add Question
          </Button>
        </div>
      </Segment>
    )
  }
}

export default Question
