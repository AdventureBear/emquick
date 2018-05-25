/**
 * Created by suzanne on 5/18/18.
 */
import React, { Component } from 'react'
import SearchBox from './SearchBox'
import {
  Link,
} from 'react-router-dom'
import { Icon, Container, Menu } from 'semantic-ui-react'


class Navbar extends Component {
  render () {
    return (
      <Container>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' header>
            EM Quick
          </Menu.Item>
          <Menu.Item href = "/" as='a'>Home</Menu.Item>
          <Menu.Item href = "/about" as='a'>About</Menu.Item>
          <Menu.Item href = "/categories" as='a'>Categories</Menu.Item>
          <Menu.Item as={ Link }  to='/topics'>
            <Icon name='heartbeat' />
            Topics
          </Menu.Item>

          <Menu.Item position="right" href="/" >Login</Menu.Item>
          <Menu.Item href="/" >Signup</Menu.Item>
        </Container>

      </Menu>

        <Container text>
            <SearchBox />
        </Container>
      </Container>

    )
  }


}

export default Navbar