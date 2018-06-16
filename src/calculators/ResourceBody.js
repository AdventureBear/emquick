import React, { Component } from 'react'
import PropTypes from 'prop-types' //ES6
// import {Container } from 'semantic-ui-react'


import './ResourceBody.css'

class ResourceBody extends Component {
  handleClick = (e) => {
    console.log(e.target.dataset.value)
    this.props.handleSelection(e.target.dataset.value)
  }
  render(){
    const questions = this.props.question.options.map((option, i) => {
        return (
          <li

            data-value={option.value}
            key={i}>
            <span className="val"  data-value={option.value} onClick = {this.handleClick}>{option.value}</span> <span data-value={option.value}  onClick = {this.handleClick} className="desc">{option.description}</span>
            </li>
        )
      }
    )
    return (
      <div className='component-resourcebody'>
       <h2>{this.props.question.title}</h2>
        <p>{this.props.question.description}</p>
        <ul>
          {questions}
         </ul>
      </div>
    )
  }
}

ResourceBody.propTypes = {
  question: PropTypes.object,
  handleSelection: PropTypes.func
};

export default ResourceBody