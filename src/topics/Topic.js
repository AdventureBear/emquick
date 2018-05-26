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
  constructor (props){
    super(props)
    this.state = {
      resource: {}
    }
  }
  componentWillMount () {
    this.loadResource()
    console.log("Hello from will mount")
    console.log(this.state.resource.name)
  }

  async loadResource () {
    let resource = await apiCalls.getOneResource(this.props.match.params.id)
    console.log("Loading resoruce: " + resource.name)
    this.setState({resource})

  }


  render () {

    console.log(this.state.resource.type)
    const page = (this.state.resource.type==="Reference") ?
      <ReferencePage resource={this.state.resource}/>
      :
      <Resource resource={this.state.resource} />

    return (
      <Container text style={{marginTop: '7em'}}>
        {page}
      </Container>
    )
  }
}

export default Topic

