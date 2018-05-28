/**
 * Created by suzanne on 5/19/18.
 */
import React, {Component} from 'react'
import { Container,  Header } from 'semantic-ui-react'

class About extends Component {
  render() {
    return (
      <Container text style={{marginTop: '7em'}}>
        <Header as='h1'>About</Header>
      </Container>
    )
  }
}

export default About