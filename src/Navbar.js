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
          {/*<Menu.Item href='/topics' as='a'>Topics</Menu.Item>*/}
          <Menu.Item href = "/about" as='a'>About</Menu.Item>
          <Menu.Item href = "/categories" as='a'>Categories</Menu.Item>
          <Menu.Item as={ Link }  to='/topics'>
            <Icon name='heartbeat' />
            Topics
          </Menu.Item>

          {/*<Dropdown item simple text='Dropdown'>*/}
            {/*<Dropdown.Menu>*/}
              {/*<Dropdown.Item>List Item</Dropdown.Item>*/}
              {/*<Dropdown.Item>List Item</Dropdown.Item>*/}
              {/*<Dropdown.Divider />*/}
              {/*<Dropdown.Header>Header Item</Dropdown.Header>*/}
              {/*<Dropdown.Item>*/}
                {/*<i className='dropdown icon' />*/}
                {/*<span className='text'>Submenu</span>*/}
                {/*<Dropdown.Menu>*/}
                  {/*<Dropdown.Item>List Item</Dropdown.Item>*/}
                  {/*<Dropdown.Item>List Item</Dropdown.Item>*/}
                {/*</Dropdown.Menu>*/}
              {/*</Dropdown.Item>*/}
              {/*<Dropdown.Item>List Item</Dropdown.Item>*/}
            {/*</Dropdown.Menu>*/}
          {/*</Dropdown>*/}
          <Menu.Item position='right' >
            <SearchBox />
          </Menu.Item>
        </Container>
      </Menu>
    </Container>


    )
  }


}

export default Navbar