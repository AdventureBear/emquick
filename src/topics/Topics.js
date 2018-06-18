/* eslint-disable
no-unused-vars, jsx-a11y/anchor-is-valid
*/
/**
 * Created by suzanne on 5/19/18.
 */
import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Topic from './Topic'
import './Topics.css'

class Topics extends Component {
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps in Topics', this.props.resources)
  }

  render() {
    const ThisTopic = props => (
      <Topic resources={this.props.resources} {...props} />
    )

    const resourceListing = this.props.resources.map(({
      name, type, friendly, _id,
    }) => (
      <li key={_id}>
        {type === 'Reference' ? (
          <i className="file alternate outline icon" />
          ) : (
            <i className="calculator icon" />
          )}
        <Link to={`${this.props.match.url}/${friendly}`}>{name}</Link>
      </li>
    ))

    return (
      <Container text style={{ marginTop: '7em' }}>
        <Header as="p">
          Choose a topic below, or search for your topic in the Navigation
          bar...
        </Header>
        <ul className="resource-listing">{resourceListing}</ul>

        {/* <Route path={`${this.props.match.path}/:friendly`}  render={ThisTopic} /> */}
      </Container>
    )
  }
}

export default Topics
