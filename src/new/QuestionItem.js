/**
 * Created by suzanne on 5/30/18.
 */

import React, {Component} from 'react'
import Options from './Options'
import {Accordion, Icon, Button} from 'semantic-ui-react'
import './QuestionItem.css'



class QuestionItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isEditing: false
    }
    this.toggleEdit = this.toggleEdit.bind(this)
    this.handleSaveClick = this.handleSaveClick.bind(this)
    this.handleOptionClick = this.handleOptionClick.bind(this)
  }

  async handleOptionClick () {
    await this.props.addOption(this.props.questionNum)
  }

  toggleEdit(){
    console.log("Changing question items editing state to true")
    this.setState({isEditing: true})
  }

  handleSaveClick(){
    console.log('Save Button Clicked, ' + this.props.question.name)
    this.setState({isEditing: false})
  }


  handleClick = (e, titleProps) =>{
    console.log("clicked title")
    this.props.handleClick(e,titleProps)
  }

  render () {
        if (this.state.isEditing || this.props.question.edit) {
          return this.renderEdit()
        } else {
          return this.renderDisplay()
        }
    }


  renderDisplay () {
    return(
      <div>
        <Accordion.Title
          active={this.props.activeIndex.activeIndex  === this.props.questionNum}
          index={this.props.questionNum}
          onClick={this.handleClick}>
          <Icon name='dropdown' />
          Question {this.props.questionNum + 1} {this.props.question.title}
        </Accordion.Title>

        <Accordion.Content active={this.props.activeIndex.activeIndex === this.props.questionNum}>
          <p>{this.props.question.description}</p>

          <h3 className="inline">Options</h3> <span onClick={this.handleOptionClick} className="new">New Option</span>
              <div  className = "options">
              <Options
                isEditing = {this.state.isEditing}
                question = {this.props.question}
                questionNum = {this.props.questionNum}
                handleOption = {this.props.handleOption}
              />
              </div>

          <Button className="ui basic button blue" onClick={this.toggleEdit}>Edit</Button>
          <Button className="ui basic button red">Delete</Button>
        </Accordion.Content>
      </div>
    )
  }

  renderEdit(){
    return (
      <div key={this.props.questionNum}>
        <Accordion.Title
          active={this.props.activeIndex.activeIndex  === this.props.questionNum}
          index={this.props.questionNum}
          onClick={this.handleClick}>
          <Icon name='dropdown' />
          Question {this.props.questionNum + 1}: {this.props.question.title}

        </Accordion.Title>


        <Accordion.Content active={this.props.activeIndex.activeIndex === this.props.questionNum}>
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

          <h3>Options</h3>
          <Options
            isEditing = {this.state.isEditing}
            question = {this.props.question}
            questionNum = {this.props.questionNum}
            handleOption = {this.props.handleOption}
          />

          <Button className="ui basic green button" onClick={this.handleSaveClick}>Save</Button>
        </Accordion.Content>

      </div>
    )
  }



}

export default QuestionItem