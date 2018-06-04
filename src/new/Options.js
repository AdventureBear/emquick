/**
 * Created by suzanne on 6/3/18.
 */
import React, {Component} from 'react'
import OptionItem from './OptionItem'
import {} from 'semantic-ui-react'


class Options extends Component {
  render(){
    return(
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

        {this.props.question.options.map((opt,j) => (
        <OptionItem
          isEditing = {this.props.isEditing}
          key= {`${this.props.questionNum}-${j}`}
          questionNum = {this.props.questionNum}
          option={opt}
          optionNum={j}
          handleOption = {this.props.handleOption}
        />
        ))}



        </tbody>
      </table>


    )
  }
}

export default Options