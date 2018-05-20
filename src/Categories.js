/**
 * Created by suzanne on 5/19/18.
 */

import React from 'react'
import Category from './Category'
import { Container, Header } from 'semantic-ui-react'
import categories from './data/categories.json'
import resources from './data/resources.json'
import {
  Route,
  Link,
} from 'react-router-dom'

const Categories =({match})=> {



  const cats = categories.map(({name, id}) => {

    const articles = resources.filter(function(element) {
      console.log((element.field.toLowerCase()), (name.toLowerCase()))
      return element.field.toLowerCase() === name.toLowerCase()
    })

    console.log(articles.length)


    return (
      <li key={id}>
        <Link to={`${match.url}/${name.toLowerCase()}`}>{name} [{articles.length}]</Link>
      </li>
    )
  })



  // const articles = resources.filter(function(element) {
  //   return element.field.toLowerCase() === match.params.category.toLowerCase()
  // })

  return (
      <Container text style={{ marginTop: '7em' }}>
        <Header as='h1'>Categories</Header>
        <ul>
          {cats}
          {/*{categories.map(({name, id}) => (*/}
            {/*<li key={id}>*/}
              {/*<Link to={`${match.url}/${name.toLowerCase()}`}>{name}</Link>*/}
            {/*</li>*/}
          {/*))}*/}
        </ul>
        <Route path={`${match.path}/:category`} component={Category}/>
      </Container>
  )
}

export default Categories