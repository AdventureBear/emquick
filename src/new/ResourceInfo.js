/**
 * Created by suzanne on 5/31/18.
 */
import React, {Component} from 'react'
import {Segment, Item,Button} from 'semantic-ui-react'

class ResourceInfo extends Component {


  constructor (props) {
    super(props)
    this.state = {
      isEditing: false
    }
    this.handleSaveClick = this.handleSaveClick.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  toggleEdit(){
    console.log("Changing editing state to true")
    this.setState({isEditing: true})
  }

  handleSaveClick(){
    console.log('Save Button Clicked, ' + this.props.resource.name)
    this.setState({isEditing: false})
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
        <Button className="ui basic button blue" onClick={this.toggleEdit}>Edit</Button>
      </Segment>
    )
  }


  renderEdit () {
    return (
      <Segment  attached='top'>

        <Item.Group>
          <Item>
            <Item.Content>
              <Item.Header>Name</Item.Header>
              <Item.Meta>
                <input name="name" type="text" value={this.props.resource.name} size={80} onChange={this.props.handleChange} onBlur ={this.props.slugify} />
              </Item.Meta>
            </Item.Content>
          </Item>

          <Item>
            <Item.Content>
              <Item.Header>URL Friendly</Item.Header>
              <Item.Meta>
                {this.props.resource.friendly}
              </Item.Meta>
            </Item.Content>
          </Item>


          <Item>
            <Item.Content>
              <Item.Header>Type (Calculator or Reference)</Item.Header>
              <Item.Meta>
                <input name="type" type="text" value={this.props.resource.type} size={80} onChange={this.props.handleChange}/>
              </Item.Meta>
            </Item.Content>
          </Item>

          <Item>
            <Item.Content>
              <Item.Header>Field</Item.Header>
              <Item.Meta>
                <input name="field" type="text" value={this.props.resource.field} size={80} onChange={this.props.handleChange}/>
              </Item.Meta>
            </Item.Content>
          </Item>

          <Item>
            <Item.Content>
              <Item.Header>Disease or Condition</Item.Header>
              <Item.Meta>
                <input name="condition" type="text" value={this.props.resource.condition} size={80} onChange={this.props.handleChange}/>
              </Item.Meta>
            </Item.Content>
          </Item>

          <Item >
            <Item.Content>
              <Item.Header>Brief Description</Item.Header>
              <Item.Description><textarea
                name="description"
                rows="2"
                cols="80"
                value={this.props.resource.description}
                onChange={this.props.handleChange}
              /></Item.Description>
            </Item.Content>
          </Item>

        <Button onClick={this.handleSaveClick} className="ui basic button green">Save</Button>
        </Item.Group>
      </Segment>
    )
  }
}

export default ResourceInfo