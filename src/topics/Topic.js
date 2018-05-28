/**
 * Created by suzanne on 5/19/18.
 */
import React, { Component } from 'react'
// import * as apiCalls from '../api'
// import Article from '../articles/Article'
import { Container } from 'semantic-ui-react'
import ReferencePage from '../articles/ReferencePage'
import Resource from '../calculators/Resource'


class Topic extends Component  {
  render () {
    const val = this.props.match.params.friendly
    console.log(val)
    const resource = this.props.resources.find(({ friendly}) => friendly === val)
    // const resource = this.props.resources.find(({ _id }) => _id === id)
    if (resource === undefined) {
      console.log("No match found for id: " + val)
    }

    const page = (resource.type==="Reference") ?
      <ReferencePage resource={resource}/>
      :
      <Resource resource={resource} />

    return (
      <Container>
        {page}
      </Container>
    )
  }
}

export default Topic

