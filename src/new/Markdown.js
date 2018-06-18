/* eslint-disable
react/sort-comp
*/

/**
 * Created by suzanne on 5/31/18.
 */

import React, { Component } from 'react'
import { Segment, Button, Item } from 'semantic-ui-react'
// import ReactMarkdown from 'react-markdown'

// const input = '# This is a header\n\nAnd this is a paragraph'

class PageContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
    }
    this.handleSaveClick = this.handleSaveClick.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  toggleEdit() {
    console.log('Changing editing state to true')
    this.setState({ isEditing: true })
  }

  handleSaveClick() {
    console.log(`Save Button Clicked, ${this.props.pagebody}`)
    this.setState({ isEditing: false })
  }

  render() {
    if (this.state.isEditing) {
      return this.renderEdit()
    }
    return this.renderDisplay()
  }

  renderDisplay() {
    return (
      <Segment attached>
        <Item.Group>
          <Item>
            <Item.Content>
              <Item.Header>Resource Content</Item.Header>
              <Item.Description>{this.props.pagebody}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
        <Button className="ui basic button blue" onClick={this.toggleEdit}>
          Edit
        </Button>
      </Segment>
    )
  }

  renderEdit() {
    return (
      <Segment attached>
        <Item.Group>
          <Item>
            <Item.Content>
              <Item.Header>Resource Content</Item.Header>
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

          <Button
            onClick={this.handleSaveClick}
            className="ui basic button green"
          >
            Save
          </Button>
        </Item.Group>
      </Segment>
    )
  }
}

export default PageContent
