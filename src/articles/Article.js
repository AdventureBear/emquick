/* eslint-disable
import/no-extraneous-dependencies, react/prefer-stateless-function,
react/forbid-prop-types, react/require-default-props
*/

import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import PropTypes from 'prop-types' // ES6
import Resource from '../calculators/Resource'
import './Article.css'

import ReferencePage from './ReferencePage'

class Article extends Component {
  render() {
    console.log(this.props.resource.name)
    const page =
      this.props.resource.type === 'Reference' ? (
        <ReferencePage resource={this.props.resource} />
      ) : (
        <Resource resource={this.props.resource} />
      )
    console.log(page)
    return <Container text>{page}</Container>
  }
}

Article.propTypes = {
  resource: PropTypes.object,
}

export default Article
