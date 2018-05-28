import React, { Component } from 'react'
import PropTypes from 'prop-types' //ES6


import './ResourceResult.css'

class ResourceResult extends Component {

    render(){
        const references = this.props.references.map((ref, i) => {
          return (<li key={i}><a href={ref.name}>{ref.name}</a></li>)
        })
        return (
            <div className="Container" >
              <div className='component-resourceresult'>

                <h3>Score: {this.props.score}</h3>
              </div>
              <div>
                 <h3>References:</h3>
                    <ul>
                      {references}
                    </ul>
              </div>

            </div>
        )
    }
}

ResourceResult.propTypes = {
    score: PropTypes.number,
    references: PropTypes.array
};

export default ResourceResult