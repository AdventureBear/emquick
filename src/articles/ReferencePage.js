/* eslint-disable
react/prefer-stateless-function, react/no-array-index-key
*/
import React, { Component } from 'react'
import { Segment, Container } from 'semantic-ui-react'
// import PropTypes from 'prop-types' //ES6

import './ReferencePage.css'

class ReferencePage extends Component {
  render() {
    const references = this.props.resource.references.map((r, i) => (
      <Segment attached key={i}>
        <h4>Reference {i}</h4>
        <div>
          <em>Title:</em> {`${r.title}\n`}
          <em>Author(s)</em>: {`${r.author}\n`}
          <em>Additional Info:</em> {`${r.additional}\n`}
          <em>URL:</em> {`${r.url}\n`}
          <em>Accessed:</em> {`${r.dateAccessed}\n`}
        </div>
      </Segment>
    ))
    return (
      <Container className="component-referencepage">
        <Segment.Group>
          <Segment attached="top">
            <h3>{this.props.resource.name}</h3>
            <p>
              <strong>Description</strong>
            </p>
            <p>{this.props.resource.description}</p>
          </Segment>
          <Segment
            attached
            dangerouslySetInnerHTML={{ __html: this.props.resource.pagebody }}
          />
          <Segment.Group>{references}</Segment.Group>
        </Segment.Group>
      </Container>
    )
  }
}

export default ReferencePage
