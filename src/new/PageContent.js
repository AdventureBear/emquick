/* eslint-disable
react/sort-comp
*/

/**
 * Created by suzanne on 5/31/18.
 */

import React, { Component } from 'react'
import { Segment, Button, Item, Accordion, Icon } from 'semantic-ui-react'
const log = require('../helpers/logger')('PageContent')

class PageContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: true,
      activeIndex: 0
    }
    this.handleSaveClick = this.handleSaveClick.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  toggleEdit() {
   log.info('Changing editing state to true')
    this.setState({ isEditing: true, activeIndex: 0 })
  }


  handleSaveClick() {
    log.info(`Save Button Clicked, ${this.props.pagebody}`)
    this.setState({ isEditing: false })
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex })
  }

  render() {

    if (this.state.isEditing) {
      return this.renderEdit()
    }
    return this.renderDisplay()
  }

  renderDisplay() {
    const { activeIndex } = this.state
    return (
      <Segment attached>
        <h3>Page Content</h3>
        <Accordion styled>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            Page Content
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
        <Item.Group>
          <Item>
            <Item.Content>
              <Item.Description>{this.props.pagebody}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
          </Accordion.Content>
        </Accordion>
        <Button
          type="button"
          style={{ marginTop: '15px' }}
          className="ui basic button blue"
          onClick={this.toggleEdit}
        >
          Edit
        </Button>
      </Segment>
    )
  }

  renderEdit() {
    const { activeIndex } = this.state
    return (
      <Segment attached>
        <h3>Page Content</h3>
        <Accordion styled>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
                Page Content
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <Item.Group>
              <Item>
                <Item.Content>
                  {/*<Item.Header>Page Content </Item.Header>*/}
                  <p>Enter HTML</p>
                  <Item.Description>
                    <textarea
                      name="pagebody"
                      rows="15"
                      cols="50"
                      value={this.props.pagebody}
                      onChange={this.props.handleChange}
                    />
                  </Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
          </Accordion.Content>
        </Accordion>
        <Button
          type="button"
          style={{ marginTop: '15px' }}
          className="ui basic button green"
          onClick={this.handleSaveClick}
        >
          Update
        </Button>

      </Segment>
    )
  }
}

export default PageContent
