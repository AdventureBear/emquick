/**
 * Created by suzanne on 5/30/18.
 */

import React, {Component} from 'react'
import OptionItem from './OptionItem'
import {Item, Header, Accordion, Icon} from 'semantic-ui-react'



class QuestionItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isEditing: false
    }
  }

  getOptions(questionNum) {
    const resource = this.props
    let options =  resource.question.options.map((opt,j) => (
      <div
        key={`option-${j}`}
      >
        <OptionItem
          key= {`${questionNum+1}-${j}`}
          questionNum = {questionNum}
          option={opt}
          optionNum={j} />
      </div>
    ))
    return options
  }

  newOption(){

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
        {console.log(this.props.activeIndex.activeIndex, this.props.QuestionNum)}
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
        </Accordion.Content>
      </div>
    )
  }

  renderEdit(){
    return (
      <div key={this.props.QuestionNum}>
        <p>Question {this.props.QuestionNum + 1}
          <button type="button" className="btn right red"> Remove Question </button>
          <button type="button" className="btn right green"> Edit Question</button>
        </p>
        <div>
          <label>Title</label>
          <input
            className="right"
            type="text"
            placeholder={`Title #${this.props.QuestionNum + 1}`}
            name="title"
            defaultValue={this.props.question.title}
            onChange={this.props.handleQuestion(this.props.QuestionNum)}
          />
        </div>

        <div>
          <label>Description</label>
          <input
            type="text"
            placeholder={`Description #${this.props.QuestionNum + 1}`}
            name="description"
            width="80"
            defaultValue={this.props.question.description}
            onChange={this.props.handleQuestion}
          />
        </div>

        <h3>Options</h3>

        {this.getOptions(this.props.QuestionNum)}
      </div>
    )
  }



}

export default QuestionItem