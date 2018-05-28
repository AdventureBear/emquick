import React, { Component } from 'react'
// import PropTypes from 'prop-types' //ES6


import './ReferencePage.css'

class ReferencePage extends Component {
    render(){

        return (
            <div className='component-referencepage'>
                <div dangerouslySetInnerHTML={ { __html: this.props.resource.pagebody } }></div>
            </div>
        )
    }
}



export default ReferencePage