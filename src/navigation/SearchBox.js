import React, { Component } from 'react'
// import PropTypes from 'prop-types' //ES6
import {Input, Button, Form} from 'semantic-ui-react'

import './SearchBox.css'

class SearchBox extends Component {

    render(){
        return (
            <Form className='component-searchbox'>
                <Input
                  placeholder="Enter Topic..."
                  type="text"
                  name="search-text"
                  icon='search'
                  />
                <Button>Search</Button>
            </Form>
        )
    }
}

SearchBox.propTypes = {

};

export default SearchBox