/**
 * Created by suzanne on 5/19/18.
 */
import React, {Component} from 'react'
import { Container } from 'semantic-ui-react'
import Navbar from './navigation/Navbar'
// import Home from './pages/Home'
import Categories from './categories/Categories'
import Category from './categories/Category'
import Topics from './topics/Topics'
import Topic from './topics/Topic'
import About from './pages/About'
import NewReference from './new/NewResource'
import * as apiCalls from './api'


import { Route, Switch } from 'react-router-dom'
// import FindArticle from './articles/FindArticle'

let payload = [], allResources  = []

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      resources: []
    }

    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.searchResources = this.searchResources.bind(this)
  }


  componentWillMount () {
    this.loadResources()
  }

  async loadResources () {
    payload = await apiCalls.getResources()
    allResources = payload
    console.log(allResources)
    this.setState({resources: allResources.resources})
    console.log(this.state)
  }

  handleSearchChange = (searchText) => {
    console.log(searchText)
    this.setState({
      resources: this.searchResources(searchText)
    })
  }


  searchResources(searchString){
    return allResources.resources.filter((resource) => {
        if (resource.name.toLowerCase().includes(searchString.toLowerCase())) {
          console.log(searchString + " found in " + resource.name + " in Name field ")
          return true
        }
        if (resource.pagebody && resource.pagebody.includes(searchString)) {
          console.log(searchString + " found in " + resource.pagebody + " Pagebody ")

          return true
        }
        if ((resource.description) && resource.description.includes(searchString)){
          console.log(searchString + " found in " + resource.description + " Description ")

          return true
        }
        return false
      }
    )
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
        <Navbar
           resources = {this.state.resources}
           handleSearch = {this.handleSearchChange}
        />
        <Switch>
          <Route exact path='/' component={About}/>
          <Route path='/categories/:field'
                 render={(props) => <Category resources={this.state.resources} {...props} />}/>
          <Route path='/categories'
                 render={(props) => <Categories resources={this.state.resources} {...props} />}/>
          <Route path='/new' component={NewReference}/>
          <Route path='/about'
                 render={(props) => <About resources={this.state.resources} {...props} />}/>
          <Route path='/topics/:friendly'
                 render={(props) => <Topic resources={this.state.resources} {...props} />}/>
          <Route path='/topics'
               render={(props) => <Topics resources={this.state.resources} {...props} />}/>

        </Switch>
      </Container>
    )
  }
}


export default App