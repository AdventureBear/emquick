/**
 * Created by suzanne on 5/19/18.
 */
import React, {Component} from 'react'
import Topic from './Topic'
import Article from '../articles/Article'
//import topics from '../data/resources.json'
import { Container, Header } from 'semantic-ui-react'
import {
  Route,
  Link,
} from 'react-router-dom'
import * as apiCalls from '../api'





class Topics extends Component  {
  constructor (props) {
    super(props)
    this.state = {
      resources: []
    }
  }

  componentWillMount () {
    this.loadResources()
  }

  async loadResources () {
    let resources = await apiCalls.getResources()
    this.setState(resources)
  }



  render () {
    const resources = this.state.resources
    const resourceListing = resources.map(({name, friendly, _id}) => (
      <li key={_id}>
        <Link to={`${this.props.match.url}/${_id}`}>{name}</Link>
      </li>
    ))

    return (
      <Container text style={{marginTop: '7em'}}>
        <Header as='h1'>Topics</Header>
        <ul>
          {resourceListing}
        </ul>

          <Route path={`${this.props.match.path}/:id`}  component={Topic}/>

      </Container>
    )
  }
}



export default Topics
