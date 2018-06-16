/**
 * Created by suzanne on 5/19/18.
 */

import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'
import {
  Link
} from 'react-router-dom'



class Categories extends Component {

  groupBy = (objectArray, property) => {
    return objectArray.reduce(function (acc, obj) {
      var key = obj[property];
      if (!acc[key]) {
        acc[key] = 0;
      }
      acc[key] += 1;
      return acc;
    }, {});
  }

  render () {
    let groupedFields = this.groupBy(this.props.resources, 'field');
    const groupedCats = (Object.keys(groupedFields))
    console.log("Grouped Fields: " + groupedCats)

    const cats = groupedCats.map((cat, i) => {
      return (
        <li >
          <Link to={`${this.props.match.url}/${cat.toLowerCase()}`}>{cat} [{groupedFields[cat]}]</Link>
        </li>
      )
    })


    return (
      <Container text style={{marginTop: '7em'}}>
        <Header as='h1'>Categories</Header>
        <ul>
          {cats}
        </ul>
      </Container>
    )
  }
}
export default Categories