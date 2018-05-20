/**
 * Created by suzanne on 5/19/18.
 */
import React from 'react'
import Article from './Article'
import resources from './data/resources.json'
import { Container } from 'semantic-ui-react'

const Topic =({match})=> {
  console.log(match.params.friendlyId)

  const resource = resources.find(({ friendly }) => friendly === match.params.friendlyId)

    console.log(resource)
  return (
    <Container text style={{ marginTop: '7em' }}>
      <Article resource={resource} />
    </Container>
  )
}

export default Topic

