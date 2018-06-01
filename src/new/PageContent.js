/**
 * Created by suzanne on 5/31/18.
 */

import React, {Component} from 'react'
import {Segment} from 'semantic-ui-react'

class PageContent extends Component {
  render () {
    return (
      <Segment attached>
        <label><h3>Resource Content</h3></label>
        <hr></hr>
        <textarea
          name="pagebody"
          rows="15"
          cols="50"
          value={this.props.pagebody}
          onChange={this.props.handleChange}
        />
      </Segment>
    )
  }
}

export default PageContent