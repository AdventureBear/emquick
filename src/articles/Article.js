import React, { Component } from 'react';
import Resource from '../calculators/Resource'
import PropTypes from 'prop-types' //ES6
import './Article.css';
import { Container } from 'semantic-ui-react'


import ReferencePage from './ReferencePage'

class Article extends Component {

  render() {
    console.log(this.props.resource.name)
    const page = (this.props.resource.type==="Reference") ?
      <ReferencePage resource={this.props.resource}/>
      :
      <Resource resource={this.props.resource} />
    console.log(page)
    return (
      <Container text >
        {page}

      </Container>
    );
  }
}

Article.propTypes = {
  resource: PropTypes.object
};
export default Article;
