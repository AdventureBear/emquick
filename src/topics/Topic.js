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
     * this is the issue here. You cannot use object destructuring
     * in an array callback. The first argument passed in will be the item
     * at the current index
     */
    // const resource = this.props.resources.find(({ friendly }) => friendly === val)
    const resource = this.props.resources.find(r => r.friendly === val) || []
    // const resource = this.props.resources.find(({ _id }) => _id === id)

    /**
     * here you check for undefined, but you don't validate it in the page component
     * in react, it's better if we ALWAYS return something. Even if it's just an empty
     * array, like I did in the resource const. This way you always have something to render
     */
    if (resource.length) {
      log.info(`No match found for id: ${val}`)
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
