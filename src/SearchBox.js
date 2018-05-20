import React, { Component } from 'react'
// import PropTypes from 'prop-types' //ES6


import './SearchBox.css'

class SearchBox extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //
    //     }
    // }

    render(){
        return (
            <form className='component-searchbox'>
                <input
                  placeholder="Enter Search..."
                  type="text"
                  name="search-text"
                  />
                <button>Search</button>
            </form>
        )
    }
}

SearchBox.propTypes = {

};

export default SearchBox