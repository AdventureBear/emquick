/* eslint-disable prefer-destructuring */
import React, { Component } from 'react'
// import PropTypes from 'prop-types' //ES6
// import { Segment, Button } from 'semantic-ui-react'

import './ResourceControl.css'

class ResourceControl extends Component {
  handlePrevClick = () => {
    this.props.handlePrev()
  }

  handleNextClick = () => {
    this.props.handleNext()
  }

  handleResetClick = () => {
    this.props.handleReset()
  }

  render() {
    const selectionMade = this.props.selectionMade
    const controls = selectionMade ? (
      <div>
        <button type="button" onClick={this.handlePrevClick}>
          Prev
        </button>

        <button type="button" onClick={this.handleNextClick}>
          Next
        </button>
      </div>
    ) : (
      <div>
        <button type="button" onClick={this.handlePrevClick}>
          Prev
        </button>

        <button
          disabled
          className="disabled"
          type="button"
          onClick={this.handleNextClick}
        >
          Next
        </button>
      </div>
    )

    return (
      <div className="component-resourcecontrol">
        {controls}
        <button type="button" onClick={this.handleResetClick}>
          Reset
        </button>
      </div>
    )
  }
}

// ResourceControl.propTypes = {
//     handleNext: PropTypes.func,
//     handlePrev: PropTypes.func,
//     handleReset: PropTypes.func,
//     selectionMade: PropTypes.bool
// };

export default ResourceControl
