/* eslint-disable
react/sort-comp
*/

/**
 * Created by suzanne on 6/6/18.
 */

import React, { Component } from 'react'
import { Accordion, Icon, Button } from 'semantic-ui-react'

class ReferenceItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
    }

    this.toggleEdit = this.toggleEdit.bind(this)
    this.handleSaveClick = this.handleSaveClick.bind(this)
  }

  handleClick = (e, titleProps) => {
    console.log('clicked title')
    this.props.handleClick(e, titleProps)
  }

  toggleEdit() {
    console.log('Changing editing state to true')
    this.setState({ isEditing: true })
  }

  handleSaveClick() {
    console.log('Save Button Clicked')
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
      <div>
        <Accordion.Title
          active={this.props.activeIndex.activeIndex === this.props.refNum}
          index={this.props.refNum}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Reference {this.props.refNum + 1}
        </Accordion.Title>

        <Accordion.Content
          active={this.props.activeIndex.activeIndex === this.props.refNum}
        >
          <p>
            Title:{' '}
            <a href={this.props.reference.url}>{this.props.reference.title}</a>
          </p>
          <p>Author(s): {this.props.reference.author} </p>
          <p>Additional Info: {this.props.reference.additional}</p>
          <p>Accessed: {this.props.reference.dateAccessed}</p>
          <Button
            type="button"
            style={{ marginTop: '15px' }}
            onClick={this.toggleEdit}
            className="ui button basic green"
          >
            Edit
          </Button>
        </Accordion.Content>
      </div>
    )
  }

  renderEdit() {
    return (
      <div>
        <Accordion.Title
          active={this.props.activeIndex.activeIndex === this.props.refNum}
          index={this.props.refNum}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Reference {this.props.refNum + 1}: {this.props.reference.title}
        </Accordion.Title>

        <Accordion.Content
          active={this.props.activeIndex.activeIndex === this.props.refNum}
        >
          <h3>Title</h3>
          <input
            className=""
            type="text"
            placeholder={`Title #${this.props.refNum + 1}`}
            name="title"
            defaultValue={this.props.reference.title}
            onChange={this.props.handleReference(this.props.refNum)}
          />

          <h3>URL</h3>
          <input
            className=""
            type="text"
            placeholder={`URL #${this.props.refNum + 1}`}
            name="url"
            defaultValue={this.props.reference.url}
            onChange={this.props.handleReference(this.props.refNum)}
          />

          <h3>Author</h3>
          <input
            className=""
            type="text"
            placeholder={`Author #${this.props.refNum + 1}`}
            name="author"
            defaultValue={this.props.reference.author}
            onChange={this.props.handleReference(this.props.refNum)}
          />

          <h3>Additional Info: </h3>
          <p>e.g. Journal Information or other source information</p>
          <input
            className=""
            type="text"
            placeholder={`Additional Info #${this.props.refNum + 1}`}
            name="additional"
            defaultValue={this.props.reference.additional}
            onChange={this.props.handleReference(this.props.refNum)}
          />

          <h3>Date Accessed</h3>
          <input
            className=""
            type="text"
            placeholder={`Title #${this.props.refNum + 1}`}
            name="dateAccessed"
            defaultValue={this.props.reference.dateAccessed}
            onChange={this.props.handleReference(this.props.refNum)}
          />
          <Button
            type="button"
            style={{ marginTop: '15px' }}
            onClick={this.handleSaveClick}
            className="ui button basic green"
          >
            Update
          </Button>
        </Accordion.Content>
      </div>
    )
  }
}

export default ReferenceItem
