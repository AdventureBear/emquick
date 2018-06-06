/**
 * Created by suzanne on 5/19/18.
 */
import React, {Component} from 'react'
import { Container } from 'semantic-ui-react'
import Navbar from './navigation/Navbar'
import Home from './pages/Home'
import Categories from './categories/Categories'
import Topics from './topics/Topics'
// import Topic from './topics/Topic'
import About from './pages/About'
import NewReference from './new/NewResource'
import * as apiCalls from './api'


import {
  Route,
  Switch
} from 'react-router-dom'
// import FindArticle from './articles/FindArticle'

//test

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      resources: []
    }
  }

  componentWillMount () {
    this.loadResources()
  }

  async loadResources () {
    let resources = await apiCalls.getResources()
    this.setState(resources)
  }

  render () {
    // const FindTopic = (props) => {
    //   return (
    //     <Topic resources={this.state.resources}
    //            {...props}
    //     />
    //   )
    // }

    return (
      <Container >
        <Navbar />
        <Switch>
          <Route exact path='/' component={About}/>
          <Route path='/categories' component={Categories}/>
          <Route path='/new' component={NewReference}/>
          <Route path='/about'
                 render={(props) => <About resources={this.state.resources} {...props} />}/>
          <Route path='/topics'
                 render={(props) => <Topics resources={this.state.resources} {...props} />}
          >
            {/*<Route path='/topics/:friendly'*/}
                 {/*render={(props) => <Topic resources={this.state.resources} {...props} />}/>*/}
          </Route>
        </Switch>
      </Container>
    )
  }
}


export default App