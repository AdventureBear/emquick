/**
 * Created by suzanne on 5/19/18.
 */

import React, { Component } from 'react'
import Category from './Category'
import { Container, Header } from 'semantic-ui-react'
import categories from '../data/categories.json'
import {
  Route,
  Link,
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
      console.log(cat, groupedFields[cat])

      // const articles = this.props.resources.filter(function (element) {
      //   console.log((element.field.toLowerCase()), (name.toLowerCase()))
      //   return element.field.toLowerCase() === name.toLowerCase()
      // })
      // console.log(articles.length)
      return (
        <li >
          <Link to={`${this.props.match.url}/${cat.toLowerCase()}`}>{cat} [{groupedFields[cat]}]</Link>
        </li>
      )
    })

    // const articles = resources.filter(function(element) {
    //   return element.field.toLowerCase() === match.params.category.toLowerCase()
    // })

    return (
      <Container text style={{marginTop: '7em'}}>
        <Header as='h1'>Categories</Header>
        <ul>
          {cats}
          {/*{categories.map(({name, id}) => (*/}
          {/*<li key={id}>*/}
          {/*<Link to={`${match.url}/${name.toLowerCase()}`}>{name}</Link>*/}
          {/*</li>*/}
          {/*))}*/}
        </ul>
        {/*<Route path={`${this.props.match.path}/:category`} component={Category}/>*/}
      </Container>
    )
  }
}
export default Categories