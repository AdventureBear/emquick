/**
 * Created by suzanne on 5/18/18.
 */
import React, { Component } from 'react'
import {
  Link,
} from 'react-router-dom'
import { Icon, Container, Menu, Input } from 'semantic-ui-react'


class Navbar extends Component {
  constructor (props){
    super(props)
    this.searchChange = this.searchChange.bind(this)
  }

  searchChange = (e) => {
    console.log("Search String entered: " + e.target.value)
    this.props.handleSearch(e.target.value)
  }


  render () {
    return (
      <Container>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' href="/" header>
            EM Quick
          </Menu.Item>

          {/*<Menu.Item href = "/about" as='a'>About</Menu.Item>*/}
          <Menu.Item href = "/categories" as='a'>Categories</Menu.Item>
          <Menu.Item as={ Link }  to='/topics'>
            <Icon name='heartbeat' />
            Topics
          </Menu.Item>
          <Menu.Item href = "/new" as='a'>New</Menu.Item>


          <Menu.Menu position='right'>
            <Menu.Item>
              <Input
                icon={{ name: 'search', link: true }}
                placeholder='Search topics...'
                onChange={this.searchChange}
              />
            </Menu.Item>
          </Menu.Menu>

          <Menu.Item  href="/" >Login</Menu.Item>
          <Menu.Item href="/" >Signup</Menu.Item>
        </Container>

      </Menu>

        {/*<Container text>*/}
            {/*<SearchBox*/}
              {/*handleSearch = {this.testSearch}*/}
            {/*/>*/}
        {/*</Container>*/}
      </Container>

    )
  }


}

export default Navbar