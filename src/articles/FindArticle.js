/* eslint-disable
react/prefer-stateless-function, prefer-destructuring
*/

/**
 * Created by suzanne on 5/20/18.
 */
import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'
import Article from './Article'
import resources from '../data/resources.json'

class FindArticle extends Component {
  render() {
    const articleName = this.props.match.params.articleName
    console.log(this.props.match.params.articleName)
    const article = resources.find(resource => resource.friendly === articleName)

    const body = article ? (
      { article }
    ) : (
      <Container text style={{ marginTop: '7em' }}>
        <Header as="h1">404</Header>
        <div>
          <p>{`Whoa! There's no entry for ${articleName}`}.</p>
        </div>
      </Container>
    )

    return (
      <Container text style={{ marginTop: '7em' }}>
        <Article resource={body} />
      </Container>
    )
  }
}

export default FindArticle
