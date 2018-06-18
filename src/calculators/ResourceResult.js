/* eslint-disable
react/prefer-stateless-function, react/no-array-index-key
*/

import React, { Component } from 'react'
// import PropTypes from 'prop-types' //ES6
import { Rail, Segment } from 'semantic-ui-react'

import './ResourceResult.css'

class ResourceResult extends Component {
  render() {
    const references = this.props.references.map((ref, i) => (
      <li key={i}>
        <a href={ref.name}>{ref.name}</a>
      </li>
    ))
    return (
      <Rail close position="right">
        {/* <div className="Container" > */}

        {/* <Rail attached internal position='right'> */}

        <Segment>
          <p>
            Score:<b> {this.props.score}</b>
          </p>
        </Segment>

        <Segment>
          <h3>References:</h3>
          <ul>{references}</ul>
        </Segment>

        {/* </div> */}
      </Rail>
    )
  }
}

// ResourceResult.propTypes = {
//   score: PropTypes.number,
//   references: PropTypes.array,
// }

export default ResourceResult
