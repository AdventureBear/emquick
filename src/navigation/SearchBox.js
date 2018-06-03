import React, { Component } from 'react'
// import PropTypes from 'prop-types' //ES6
import {Input, Form} from 'semantic-ui-react'

import './SearchBox.css'

class SearchBox extends Component {

    render(){
        return (
            <Form className='component-searchbox'>
                <Input
                  id="search"
                  placeholder="Search Topics"
                  type="text"
                  name="search-text"
                  icon='search'
                  autoComplete='off'
                  />
            </Form>
        )
    }
}

SearchBox.propTypes = {

};

export default SearchBox