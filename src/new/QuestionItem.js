/**
 * Created by suzanne on 5/30/18.
 */

import React, {Component} from 'react'
import OptionItem from './OptionItem'
import {Accordion, Icon, Button} from 'semantic-ui-react'



class QuestionItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isEditing: false
    }
    this.toggleEdit = this.toggleEdit.bind(this)
    this.handleSaveClick = this.toggleEdit.bind(this)
  }

  getOptions(questionNum) {
    const resource = this.props
    let options =  resource.question.options.map((opt,j) => (
      <div
        key={`option-${j}`}
      >
        <OptionItem
          isEditing = {this.state.isEditing}
          key= {`${questionNum+1}-${j}`}
          questionNum = {questionNum}
          option={opt}
          optionNum={j} />

      </div>
    ))
    return options
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
        if (this.state.isEditing) {
          return this.renderEdit()
        } else {
          return this.renderDisplay()
        }
    }


  renderDisplay () {
    return(
      <div>
        <Accordion.Title
          active={this.props.activeIndex.activeIndex  === this.props.QuestionNum}
          index={this.props.QuestionNum}
          onClick={this.handleClick}>
          <Icon name='dropdown' />
          Question {this.props.QuestionNum + 1} {this.props.question.title}
        </Accordion.Title>

        <Accordion.Content active={this.props.activeIndex.activeIndex === this.props.QuestionNum}>
          <p>{this.props.question.description}</p>

          <h3>Options</h3>
          {this.getOptions(this.props.QuestionNum)}

          <Button className="blue" onClick={this.toggleEdit}>Edit</Button>
          <Button className="red">Delete</Button>
        </Accordion.Content>
      </div>
    )
  }

  renderEdit(){
    return (
      <div key={this.props.QuestionNum}>
        <Accordion.Title
          active={this.props.activeIndex.activeIndex  === this.props.QuestionNum}
          index={this.props.QuestionNum}
          onClick={this.handleClick}>
          <Icon name='dropdown' />
          Question {this.props.QuestionNum + 1}: {this.props.question.title}

        </Accordion.Title>


        <Accordion.Content active={this.props.activeIndex.activeIndex === this.props.QuestionNum}>
          <h3>Title</h3>
          <input
            className=""
            type="text"
            placeholder={`Title #${this.props.QuestionNum + 1}`}
            name="title"
            defaultValue={this.props.question.title}
            onChange={this.props.handleQuestion(this.props.QuestionNum)}
          />

          <h3>Description</h3>
          <input
            type="text"
            placeholder={`Description #${this.props.QuestionNum + 1}`}
            name="description"
            width="80"
            defaultValue={this.props.question.description}
            onChange={this.props.handleQuestion}
          />

          <h3>Options</h3>
          {this.getOptions(this.props.QuestionNum)}

          <Button className="green" onClick={this.handleSaveClick}>Save</Button>
        </Accordion.Content>

      </div>
    )
  }



}

export default QuestionItem