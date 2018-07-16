/* eslint-disable
react/prefer-stateless-function, react/no-array-index-key
*/
import React, { Component } from 'react'
// import moment from 'moment'
// import { Segment, Container } from 'semantic-ui-react'
// import PropTypes from 'prop-types' //ES6
import './ReferencePage.css'

const log = require('../helpers/logger')('ReferencePage')
class ReferencePage extends Component {



  render() {
    console.log(new Date(this.props.resource.references[0].accessed).toDateString())

    const references =
            this.props.resource.references.map((r, i) =>
      (
        <div className='reference-list' key={i} style={{ marginTop: '1em' }}>
        <table>
          <tbody>
          <tr><th colSpan="2"><strong><em>Reference #{i+1}</em></strong></th></tr>
            {(r.url && r.url !== 'NA') ?
              <tr><td width="30%"><strong>Title:</strong></td><td width="70%"><a href={r.url} target='_blank'>{`${r.title}\n`}</a></td></tr>
              :
              <tr><td><strong>Title</strong>:</td><td>{`${r.title}\n`}</td></tr>
              }
          <tr><td><strong>Author(s)</strong>:</td><td>{`${r.author}\n`}</td></tr>
          {r.additional ?
            (<tr>
              <td><strong>Additional Info:</strong></td>
              <td>{`${r.additional}\n`}</td>
            </tr>)
              :
            <tr><td><strong>Accessed:</strong></td><td>{new Date(r.accessed).toDateString()}</td></tr>
          }
              </tbody>
            </table>
          </div>
    ))
    return (
      <div  className="component-referencepage">
            <h2>{this.props.resource.name}</h2>
            <p>
              <strong>Description</strong>
            </p>
            <p>{this.props.resource.description}</p>

        {/*<Segment.Group>*/}
          {/*<Segment*/}
            {/*attached = "top"*/}
            {/*dangerouslySetInnerHTML={{ __html: this.props.resource.pagebody }}*/}
          {/*/>*/}
          {/*<Segment.Group>{references}</Segment.Group>*/}
        {/*</Segment.Group>*/}


          <div
            dangerouslySetInnerHTML={{ __html: this.props.resource.pagebody }}
          ></div>
          <div style={{ marginTop: '2em' }}>
            <h3>References</h3>
                 {references}
            </div>
      </div>


    )
  }
}

export default ReferencePage
