/**
 * Created by suzanne on 5/31/18.
 */
import React, {Component} from 'react'
import {Segment, Item} from 'semantic-ui-react'

class ResourceInfo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isEditing: false
    }
  }

      render () {
      if (this.state.isEditing) {
        return this.renderEdit()
      } else {
        return this.renderDisplay()
      }
    }

  renderDisplay () {
    return (
      <Segment  attached='top'>
        <Item.Group>
          <Item>
            <Item.Content>
              <Item.Header>Name</Item.Header>
              <Item.Meta>{this.props.resource.name} </Item.Meta>
            </Item.Content>
          </Item>

          <Item >
            <Item.Content>
              <Item.Header>URL Friendly</Item.Header>
              <Item.Meta>{this.props.resource.friendly} </Item.Meta>
            </Item.Content>
          </Item>

          <Item >
            <Item.Content>
              <Item.Header>Type</Item.Header>
              <Item.Meta>{this.props.resource.type} </Item.Meta>
            </Item.Content>
          </Item>

          <Item >
            <Item.Content>
              <Item.Header>Field</Item.Header>
              <Item.Meta>{this.props.resource.field} </Item.Meta>
            </Item.Content>
          </Item>

          <Item >
            <Item.Content>
              <Item.Header>Disease or Condition</Item.Header>
              <Item.Meta>{this.props.resource.condition}</Item.Meta>
            </Item.Content>
          </Item>

          <Item >
            <Item.Content>
              <Item.Header>Brief Description</Item.Header>
              <Item.Description>{this.props.resource.description}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    )
  }


  renderEdit () {
    return (
      <div>

        <div >
          <label>Name</label>
          <input name="name" type="text" value={this.props.resource.name} size={80} onChange={this.props.handleChange} onBlur ={this.props.slugify} />
        </div>
        <p>{this.props.resource.friendly}</p>
        <div >
          <label>URL Friendly</label>
          <input name="friendly" type="text" value={this.props.resource.friendly} size={80} onChange={this.props.handleChange}/>
        </div>

        <div >
          <label>Type (Calculator or Reference)</label>
          <input name="type" type="text" value={this.props.resource.type} size={80} onChange={this.props.handleChange}/>
        </div>

        <div >
          <label>Field</label>
          <input name="field" type="text" value={this.props.resource.field} size={80} onChange={this.props.handleChange}/>
        </div>

        <div >
          <label>Disease or Condition</label>
          <input name="condition" type="text" value={this.props.resource.condition} size={80} onChange={this.props.handleChange}/>
        </div>

        <div>
          <label>Brief Description</label>
          <textarea
            name="description"
            rows="2"
            cols="80"
            value={this.props.resource.description}
            onChange={this.props.handleChange}
          />
        </div>
      </div>
    )
  }
}

export default ResourceInfo