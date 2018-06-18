/**
 * Created by suzanne on 5/19/18.
 */
import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import ReferencePage from '../articles/ReferencePage'
import Resource from '../calculators/Resource'

class Topic extends Component {
  componentWillLoad() {
    console.log('Hi from will load')
    console.log(this.props)
  }

  render() {
    const val = this.props.match.params.friendly
    console.log(val)
    console.log(this.props)
    const resource = this.props.resources.find(({ friendly }) => friendly === val)
    // const resource = this.props.resources.find(({ _id }) => _id === id)
    if (resource === undefined) {
      console.log(`No match found for id: ${val}`)
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
