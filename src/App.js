/**
 * Created by suzanne on 5/19/18.
 */
import React from 'react'
import { Container } from 'semantic-ui-react'
import resources from './data/resources.json'
import FindArticle from './articles/FindArticle'
import Navbar from './navigation/Navbar'
import Home from './pages/Home'
import Categories from './categories/Categories'
import Topics from './topics/Topics'
import About from './pages/About'
// import Article from './Article'

import {
  Route,
  Switch
} from 'react-router-dom'

const App =()=> {
  return (
    <Container >
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/categories' component={Categories} />
        <Route path='/topics' component={Topics} />
        <Route path='/about' component={About} />
        <Route path='/:articleName' resources={resources} component={FindArticle} />
      </Switch>
    </Container>
  )
}

export default App