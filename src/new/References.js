/**
 * Created by suzanne on 6/6/18.
 */
import React, { Component } from 'react'
import { Segment, Accordion, Button } from 'semantic-ui-react'
import ReferenceItem from './ReferenceItem'
const log = require('../helpers/logger')('References')

class References extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0,
    }
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    log.info("ActiveIndex: " + activeIndex, "Index: " + index)
    const newIndex = activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex })
  }

  async addReference() {
    await this.props.addReference()
    this.setState({
      activeIndex: this.props.reference.length,
    })
  }

  render() {
    const activeIndex = this.state
    return (
      <Segment attached>
        <h3>References</h3>
        <Accordion styled>
          {this.props.references.map((r, i) => (
            <div key={['reference', i].join('-')}>
              <ReferenceItem
                activeIndex={activeIndex}
                refNum={i}
                reference={r}
                handleClick={this.handleClick}
                handleReference={this.props.handleReference}
                removeReference ={this.props.removeReference}
              />
            </div>
          ))}
        </Accordion>

        <div>
          <Button
            type="button"
            style={{ marginTop: '15px' }}
            onClick={this.props.addReference}
            className="ui button basic green"
          >
            Add New Reference
          </Button>
        </div>
      </Segment>
    )
  }
}

export default References
