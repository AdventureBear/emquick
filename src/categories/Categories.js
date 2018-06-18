/* eslint-disable
jsx-a11y/anchor-is-valid
*/

/**
 * Created by suzanne on 5/19/18.
 */
import React, { Component } from 'react'
// import Category from './Category'
import { Container, Header } from 'semantic-ui-react'
// import categories from '../data/categories.json'
import { Link } from 'react-router-dom'

class Categories extends Component {
  groupBy = (objectArray, property) =>
    objectArray.reduce((acc, obj) => {
      const key = obj[property]
      if (!acc[key]) {
        acc[key] = 0
      }
      acc[key] += 1
      return acc
    }, {})

  render() {
    const groupedFields = this.groupBy(this.props.resources, 'field')
    const groupedCats = Object.keys(groupedFields)
    console.log(`Grouped Fields: ${groupedCats}`)

    const cats = groupedCats.map((cat) => {
      console.log(cat, groupedFields[cat])

      // const articles = this.props.resources.filter(function (element) {
      //   console.log((element.field.toLowerCase()), (name.toLowerCase()))
      //   return element.field.toLowerCase() === name.toLowerCase()
      // })
      // console.log(articles.length)
      return (
        <li>
          <Link to={`${this.props.match.url}/${cat.toLowerCase()}`}>
            {cat} [{groupedFields[cat]}]
          </Link>
        </li>
      )
    })


    return (
      <Container text style={{ marginTop: '7em' }}>
        <Header as="h1">Categories</Header>
        <ul>
          {cats}
          {/* {categories.map(({name, id}) => ( */}
          {/* <li key={id}> */}
          {/* <Link to={`${match.url}/${name.toLowerCase()}`}>{name}</Link> */}
          {/* </li> */}
          {/* ))} */}
        </ul>
        {/* <Route path={`${this.props.match.path}/:category`} component={Category}/> */}
      </Container>
    )
  }
}
export default Categories
