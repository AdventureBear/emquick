/**
 * Created by suzanne on 5/30/18.
 */
import React, {Component} from 'react'
import './OptionItem.css'

class OptionItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      editingOption: false
    }
    this.editOption = this.editOption.bind(this)
    this.saveOption = this.saveOption.bind(this)
    // this.handleChange = this.handleChange.bind(this)
  }

  render() {
    if (this.props.isEditing || this.state.editingOption || this.props.option.edit) {
      return this.renderEdit()
    } else {
      return this.renderDisplay()
    }
  }

  editOption(){
    console.log("edit icon pressed for option" + this.props.optionNum )
    this.setState({
      editingOption: true
    })
  }

  // handleChange(){
  //   console.log("Option edited")
  //   this.props.handleOption(this.props.questionNum, this.props.optionNum)
  // }

  saveOption(){
    console.log("save icon pressed for option: " )
    this.setState({
      editingOption: false
    })
  }

  renderEdit () {
    return (
        <tr>
          <td width="20%">
            <input
              type="text"
              name = {`value-${this.props.optionNum}`}
              defaultValue = {this.props.option.value}
              size = {45}
              placeholder = "Value"
              onChange = {this.props.handleOption(this.props.questionNum, this.props.optionNum)}
            />
          </td>
          <td>
            <input
              type="text"
              name = {`description-${this.props.optionNum}`}
              defaultValue = {this.props.option.description}
              size = {45}
              placeholder = "Description"
              onChange = {this.props.handleOption(this.props.questionNum, this.props.optionNum)}
            />
          </td>
          <td>
            <div onClick={this.saveOption}><i className="large  save icon"></i></div>
          </td>
          <td>
            <i className="large  delete icon"></i>
          </td>
        </tr>
    )
  }

  renderDisplay() {
    return (

          <tr>
           <td width="20%">
              {this.props.option.value}
            </td>
            <td width="80%">
              {this.props.option.description}
            </td>
            <td>
              <div onClick={this.editOption}> <i className="large  edit icon"></i></div>
            </td>
            <td>
              <i className="large  delete icon"></i>
            </td>
          </tr>

    )
  }

}


export default OptionItem

