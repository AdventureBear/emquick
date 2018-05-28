/**
 * Created by suzanne on 5/20/18.
 */
import React from 'react'
import resources from '../data/resources.json'


import {
  Link,
} from 'react-router-dom'


const Category = ({match}) => {
  const articles = resources.filter(function(element) {
    return element.field.toLowerCase() === match.params.category.toLowerCase()
  })

  const articleList = articles.map((article, i) => {
      return <li key={i}>
        <Link to={`../topics/${article.friendly}`}>{article.name}</Link>
      </li>
    }
 )
  return (
    <div>
      <h2>{articleList.length}Articles</h2>
      <ul>
        {articleList}
      </ul>
    </div>
  )
}

export default Category