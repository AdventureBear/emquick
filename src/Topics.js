/**
 * Created by suzanne on 5/19/18.
 */
import React from 'react'
import Topic from './Topic'
import topics from './data/resources.json'
import { Container, Header } from 'semantic-ui-react'
import {
  Route,
  Link,
} from 'react-router-dom'

const Topics =({match})=> {
  return (
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Topics</Header>

      <ul>
        {topics.map(({ name, friendly, id }) => (
          <li key={id}>
            <Link to={`${match.url}/${friendly}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <Route path={`${match.path}/:friendlyId`} component={Topic}/>
    </Container>
  )
}

export default Topics
