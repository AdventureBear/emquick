/**
 * Created by suzanne on 5/19/18.
 */
import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import ReferencePage from '../articles/ReferencePage'
import Resource from '../calculators/Resource'

const log = require('../helpers/logger')('Topic')

class Topic extends Component {
  componentDidMount() {
    log.info('component mounted with these props:', this.props)
  }

  componentWillReceiveProps() {
    // console.log('Hi from will load')
    // console.log(this.props)
  }

  render() {
    log.info('component will try to render with these props:', this.props)
    const val = this.props.match.params.friendly

    /**
     * In react, it's better if we ALWAYS return something.
     * Even if it's just an empty object,
     * This way you always have something to render.
     */
    const resource =
      this.props.resources.find(({ friendly }) => friendly === val) || {}

    /**
     * You can then check if it's available for logging
     * or displaying a message to the user
     */
    if (!resource.type) {
      log.info(
        `No match found for id: ${val} with these resources:`,
        this.props.resources,
      )
    }

    const page =
      resource.type === 'Reference' ? (
        <ReferencePage resource={resource} />
      ) : (
        <Resource resource={resource} />
      )

    return (
      <Container text style={{ marginTop: '7em' }}>
        {page}
        <div className="ui right rail">
          <div className="ui segment">Right Rail Content</div>
        </div>
      </Container>
    )
  }
}

export default Topic
