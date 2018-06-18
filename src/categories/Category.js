/* eslint-disable
react/prefer-stateless-function, prefer-destructuring,
react/no-array-index-key, jsx-a11y/anchor-is-valid
*/

/**
 * Created by suzanne on 5/20/18.
 */
import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'

import { Link } from 'react-router-dom'

class Category extends Component {
  render() {
    const field = this.props.match.params.field
    console.log(field)
    const articles = this.props.resources.filter(element => element.field.toLowerCase() === field.toLowerCase())

    const articleList = articles.map((article, i) => (
      <li key={i}>
        <Link to={`../topics/${article.friendly}`}>{article.name}</Link>
      </li>
    ))
    return (
      <Container text style={{ marginTop: '7em' }}>
        <h2>{articleList.length} Articles</h2>
        <ul>{articleList}</ul>
      </Container>
    )
  }
}

export default Category
