/* eslint-disable
react/sort-comp, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
*/

/**
 * Created by suzanne on 5/30/18.
 */
import React, { Component } from 'react'
import './OptionItem.css'

class OptionItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editingOption: true,
    }
    this.editOption = this.editOption.bind(this)
    this.saveOption = this.saveOption.bind(this)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
    // this.handleChange = this.handleChange.bind(this)
  }

  render() {
    if (
      // this.props.isEditing ||
      this.state.editingOption //||
      // this.props.option.edit
    ) {
      return this.renderEdit()
    }
    return this.renderDisplay()
  }

  editOption() {
    console.log(`edit icon pressed for option ${this.props.optionNum}`)
    this.setState({
      editingOption: true,
    })
  }

  handleDeleteClick() {
    console.log(`Delete icon pressed for option ${this.props.optionNum}`)
    this.props.deleteOption(this.props.questionNum, this.props.optionNum)
  }
  // handleChange(){
  //   console.log("Option edited")
  //   this.props.handleOption(this.props.questionNum, this.props.optionNum)
  // }

  saveOption() {
    console.log(`Save icon pressed for option ${this.props.optionNum}`)
    this.setState({
      editingOption: false,
    })
  }

  renderEdit() {
    return (
      <tr>
        <td width="20%">
          <input
            type="text"
            name={`value-${this.props.optionNum}`}
            defaultValue={this.props.option.value}
            size={45}
            placeholder="Value"
            onChange={this.props.handleOption(
              this.props.questionNum,
              this.props.optionNum,
            )}
          />
        </td>
        <td>
          <input
            type="text"
            name={`description-${this.props.optionNum}`}
            defaultValue={this.props.option.description}
            size={45}
            placeholder="Description"
            onChange={this.props.handleOption(
              this.props.questionNum,
              this.props.optionNum,
            )}
          />
        </td>
        <td>
          <div onClick={this.saveOption}>
            <i className="large  save icon" />
          </div>
        </td>
        <td>
          <div onClick={this.handleDeleteClick}>
            <i className="large  delete icon" />
          </div>
        </td>
      </tr>
    )
  }

  renderDisplay() {
    return (
      <tr>
        <td width="20%">{this.props.option.value}</td>
        <td width="80%">{this.props.option.description}</td>
        <td>
          <div onClick={this.editOption}>
            {' '}
            <i className="large  edit icon" />
          </div>
        </td>
        <td>
          <div onClick={this.handleDeleteClick}>
            <i className="large  delete icon" />
          </div>
        </td>
      </tr>
    )
  }
}

export default OptionItem
