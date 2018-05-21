import React, { Component } from 'react'
// import PropTypes from 'prop-types' //ES6


import './ReferencePage.css'

class ReferencePage extends Component {
    constructor(props){
        super(props) 
        this.state = {
        
        }
    }

    render(){

        return (
            <div className='component-referencepage'>
                <div dangerouslySetInnerHTML={ { __html: this.props.resource.pagebody } }></div>
            </div>
        )
    }
}

// ReferencePage.propTypes = {
//     resource: PropTypes.Types.object
// };

export default ReferencePage