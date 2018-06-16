/**
 * Created by suzanne on 5/19/18.
 */
import React, {Component} from 'react'
// import Topic from './Topic'
import './Topics.css'
import PropTypes from 'prop-types'
import { Container, Header } from 'semantic-ui-react'
import {
  Link
} from 'react-router-dom'



class Topics extends Component  {

  render () {

    const resourceListing = this.props.resources.map(({name, type, friendly, _id}) => (
      <li key={_id}>
        {type==="Reference" ? <i className="file alternate outline icon"></i> :<i className="calculator icon"></i> }
        <Link to={`${this.props.match.url}/${friendly}`}>{name}</Link>
      </li>
    ))

    return (
      <Container text style={{marginTop: '7em'}}>
        <Header as='p'>Choose a topic below, or search for your topic in the Navigation bar...</Header>
        <ul className="resource-listing">
          {resourceListing}
        </ul>
      </Container>
    )
  }
}

Topics.propTypes = {
  resources: PropTypes.array
}

export default Topics
