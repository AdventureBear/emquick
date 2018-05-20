/**
 * Created by suzanne on 5/19/18.
 */
import React from 'react'
import { Container } from 'semantic-ui-react'
import Navbar from './Navbar'
import Home from './Home'
import Categories from './Categories'
import Topics from './Topics'
import About from './About'

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
      </Switch>
    </Container>
  )
}

export default App