/**
 * Created by suzanne on 5/19/18.
 */
import React, { Component } from 'react'
import * as apiCalls from '../api'
// import Article from '../articles/Article'
import { Container } from 'semantic-ui-react'
import ReferencePage from '../articles/ReferencePage'
import Resource from '../calculators/Resource'


class Topic extends Component  {

  filterResources (id) {
    console.log(id)
    console.log(this.props.resources[0]['_id'])

    return this.props.resources.filter(_id => _id===id)
  }

  componentWillMount () {

  }

  componentDidMount() {
    // this.loadResource(this.props.match.params.id)
    // const API_URL = 'http://localhost:3001/api/resources/' + this.props.match.params.id
    // fetch(API_URL)
    //   .then(response => response.json())
    //   .then(data => this.setState({ resources: data.resources }));
  }


  render () {

    const id = this.props.match.params.id
    const resource = this.props.resources.find(({ _id }) => _id === id)


    console.log(resource.type)

    const page = (resource.type==="Reference") ?
      <ReferencePage resource={resource}/>
      :
      <Resource resource={resource} />

    return (
      <Container text style={{marginTop: '7em'}}>
        <h1>{resource.name}</h1>

        {page}
      </Container>
    )
  }
}

export default Topic

