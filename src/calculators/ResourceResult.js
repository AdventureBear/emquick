import React, { Component } from 'react'
import PropTypes from 'prop-types' //ES6


import './ResourceResult.css'

class ResourceResult extends Component {

    render(){
        const references = this.props.references.map((ref, i) => {
            return (<li key={i}>{ref.name}</li>)
        })
        return (
            <div className='component-resourceresult'>
                <h2>Result</h2>
                <h3>Score: {this.props.score}</h3>
                <p>Interpretation: </p>
                 <p className="small">References:</p>
                    <ul>
                      {references}
                    </ul>

            </div>
        )
    }
}

ResourceResult.propTypes = {
    score: PropTypes.number,
    references: PropTypes.array
};

export default ResourceResult