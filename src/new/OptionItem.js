/**
 * Created by suzanne on 5/30/18.
 */
import React, {Component} from 'react'
import './OptionItem.css'

class OptionItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isEditing: false
    }
  }

  render() {
    if (this.state.isEditing) {
      return this.renderEdit()
    } else {
      return this.renderDisplay()
    }
  }

  renderEdit () {
    return (
      <table>
        <thead>
        <tr>
          <th>Value</th>
          <th>Description</th>
          <th></th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td width="20%">
            <input
              type="text"
              name = {`value-${this.props.optionNum + 1}`}
              defaultValue = {this.props.option.value}
              size = {45}
              placeholder = "Value"
            />
          </td>
          <td>
            <input
              type="text"
              name = {`description-${this.props.optionNum +1}`}
              defaultValue = {this.props.option.description}
              size = {45}
              placeholder = "Description"
            />
          </td>
          <td>
            <div onClick={this.editOption}> <i className="large  edit icon"></i></div>
          </td>
          <td>
            <i className="large  delete icon"></i>
          </td>
        </tr>
        </tbody>
      </table>
    )
  }

  renderDisplay() {
    return (
      <p>{this.props.option.value}: {this.props.option.description}</p>
    )
  }

}


export default OptionItem

