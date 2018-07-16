/* eslint-disable
react/sort-comp, jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
*/

/**
 * Created by suzanne on 5/30/18.
 */

import React, { Component } from 'react'
import { Accordion, Icon, Button } from 'semantic-ui-react'
import Options from './Options'
import './QuestionItem.css'

class QuestionItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: true,
    }
    this.toggleEdit = this.toggleEdit.bind(this)
    this.handleSaveClick = this.handleSaveClick.bind(this)
    this.handleOptionClick = this.handleOptionClick.bind(this)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
  }

  async handleOptionClick() {
    await this.props.addOption(this.props.questionNum)
  }

  toggleEdit() {
    console.log('Changing question items editing state to true')
    this.setState({ isEditing: true })
  }

  handleSaveClick() {
    console.log(`Save Button Clicked, ${this.props.questionNum}`)
    this.setState({ isEditing: false })
  }

  handleDeleteClick(){
    console.log(`Delete Button Clicked, ${this.props.questionNum}`)
    this.props.deleteQuestion(this.props.questionNum)
  }

  handleClick = (e, titleProps) => {
    console.log('clicked title')
    this.props.handleClick(e, titleProps)
  }

  render() {
    if (this.state.isEditing ) {
      return this.renderEdit()
    }
    return this.renderDisplay()
  }

  renderDisplay() {
    return (
      <div>
        <Accordion.Title
          active={this.props.activeIndex.activeIndex === this.props.questionNum}
          index={this.props.questionNum}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Question {this.props.questionNum + 1} {this.props.question.title}
        </Accordion.Title>

        <Accordion.Content
          active={this.props.activeIndex.activeIndex === this.props.questionNum}
        >
          <h3>Title</h3>
          <p>{this.props.question.title}</p>

          <h3>Description</h3>
          <p>{this.props.question.description}</p>

          <h3 className="inline">Options</h3>{' '}
          <span onClick={this.handleOptionClick} className="new">
            Add Option
          </span>
          <div className="options">
            <Options
              isEditing={this.state.isEditing}
              question={this.props.question}
              questionNum={this.props.questionNum}
              handleOption={this.props.handleOption}
              deleteOption={this.props.deleteOption}
            />
          </div>
          <Button
            type="button"
            className="ui basic button blue"
            onClick={this.toggleEdit}
          >
            Edit
          </Button>
          <Button
            type="button"
            className="ui basic button red"
            onClick={this.handleDeleteClick}
          >
            Delete
          </Button>
        </Accordion.Content>
      </div>
    )
  }

  renderEdit() {
    return (
      <div key={this.props.questionNum}>
        <Accordion.Title
          active={this.props.activeIndex.activeIndex === this.props.questionNum}
          index={this.props.questionNum}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Question {this.props.questionNum + 1}: {this.props.question.title}
        </Accordion.Title>

        <Accordion.Content
          active={this.props.activeIndex.activeIndex === this.props.questionNum}
        >
          <h3>Title</h3>
          <input
            className=""
            type="text"
            placeholder={`Title #${this.props.questionNum + 1}`}
            name="title"
            defaultValue={this.props.question.title}
            onChange={this.props.handleQuestion(this.props.questionNum)}
          />

          <h3>Description</h3>
          <input
            type="text"
            placeholder={`Description #${this.props.questionNum + 1}`}
            name="description"
            width="80"
            defaultValue={this.props.question.description}
            onChange={this.props.handleQuestion(this.props.questionNum)}
          />

          <h3 className="inline">Options</h3>{' '}
          <span onClick={this.handleOptionClick} className="new">
            Add Option
          </span>

          <Options
            isEditing={this.state.isEditing}
            question={this.props.question}
            questionNum={this.props.questionNum}
            handleOption={this.props.handleOption}
            deleteOption={this.props.deleteOption}
          />

          <Button
            type="button"
            style={{ marginTop: '15px' }}
            className="ui basic green button"
            onClick={this.handleSaveClick}
          >
            Update Question
          </Button>
        </Accordion.Content>
      </div>
    )
  }
}

export default QuestionItem
