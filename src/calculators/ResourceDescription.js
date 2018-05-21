import React, { Component } from 'react'
import PropTypes from 'prop-types' //ES6


import './ResourceDescription.css'

class ResourceDescription extends Component {
    constructor(props){
        super(props) 
        this.state = {
        
        }
    }

    render(){
        return (
            <div className='component-resourcedescription'>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

ResourceDescription.propTypes = {
    name: PropTypes.string
};

export default ResourceDescription