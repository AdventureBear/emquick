/**
 * Created by suzanne on 5/19/18.
 */
import React, {Component} from 'react'
import Topic from './Topic'

import { Container, Header } from 'semantic-ui-react'
import {
  Route,
  Link,
} from 'react-router-dom'



class Topics extends Component  {

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps in Topics', this.props.resources);
  }

  render () {
    const ThisTopic = (props) => {
      return (
        <Topic resources={this.props.resources}
          {...props}
        />
      )
    }

    const resourceListing = this.props.resources.map(({name, friendly, _id}) => (
      <li key={_id}>
        <Link to={`${this.props.match.url}/${friendly}`}>{name}</Link>
      </li>
    ))

    return (
      <Container text style={{marginTop: '7em'}}>
        <Header as='h1'>Topics</Header>
        <ul>
          {resourceListing}
        </ul>

          <Route path={`${this.props.match.path}/:friendly`}  render={ThisTopic} />

      </Container>
    )
  }
}



export default Topics
