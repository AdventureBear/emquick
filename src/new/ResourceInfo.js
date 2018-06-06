/**
 * Created by suzanne on 5/31/18.
 */
import React, {Component} from 'react'
import {Segment, Item,Button, Accordion, Icon, Radio, Form } from 'semantic-ui-react'

class ResourceInfo extends Component {


  constructor (props) {
    super(props)
    this.state = {
      isEditing: false,
      activeIndex: 0
    }
    this.handleSaveClick = this.handleSaveClick.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
  }


  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }


  toggleEdit(){
    console.log("Changing editing state to true")
    this.setState({isEditing: true})
  }

  handleSaveClick(){
    console.log('Save Button Clicked, ' + this.props.resource.name)
    console.log(this.props.resource.type)
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
    const { activeIndex } = this.state
    return (
      <Segment  attached='top'>
        <h3>Resource Info</h3>
        <Accordion styled>
          <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
            <Icon name='dropdown' />
            {this.props.resource.name}
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <Item.Group>
              <Item>
                <Item.Content>
                  <Item.Header>Name</Item.Header>
                  <Item.Meta>{this.props.resource.name} </Item.Meta>
                  <Item.Meta>slug: {this.props.resource.friendly}</Item.Meta>
                </Item.Content>
              </Item>

              {/*<Item >*/}
                {/*<Item.Content>*/}
                  {/*<Item.Header>URL Friendly</Item.Header>*/}
                  {/*<Item.Meta>{this.props.resource.friendly} </Item.Meta>*/}
                {/*</Item.Content>*/}
              {/*</Item>*/}

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
          </Accordion.Content>
        </Accordion>
        <Button
          type="button"
          style={{marginTop: '15px' }}
          className="ui basic button blue"
          onClick={this.toggleEdit}>Edit</Button>
      </Segment>
    )
  }


  renderEdit () {
    const { activeIndex } = this.state
    return (
      <Segment  attached='top'>
        <h3>Resource Info</h3>
        <Accordion styled>
          <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
            <Icon name='dropdown' />
            {this.props.resource.name}
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <Item.Group>
              <Item>
                <Item.Content>
                  <Item.Header>Name</Item.Header>
                  <Item.Meta>
                    <input name="name" type="text" value={this.props.resource.name} size={80} onChange={this.props.handleChange} onBlur ={this.props.slugify} />
                    {this.props.resource.friendly}
                  </Item.Meta>
                </Item.Content>
              </Item>

              {/*<Item>*/}
                {/*<Item.Content>*/}
                  {/*<Item.Header>URL Friendly</Item.Header>*/}
                  {/*<Item.Meta>*/}
                    {/*{this.props.resource.friendly}*/}
                  {/*</Item.Meta>*/}
                {/*</Item.Content>*/}
              {/*</Item>*/}


              <Item>
                <Item.Content>
                  <Item.Header>Type (Calculator or Reference)</Item.Header>
                  <Item.Meta>

                        <Radio
                          label='Calculator'
                          name='radioGroup'
                          value='Calculator'
                          checked={this.props.resource.type === 'Calculator'}
                          onChange={this.props.handleType}
                        />

                        <Radio
                          label='Reference'
                          name='radioGroup'
                          value='Reference'
                          checked={this.props.resource.type === 'Reference'}
                          onChange={this.props.handleType}
                        />

                    {/*<input name="type" type="text" value={this.props.resource.type} size={80} onChange={this.props.handleChange}/>*/}
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

            </Item.Group>
          </Accordion.Content>
          </Accordion>
        <Button
          type="button"
          style={{marginTop: '15px' }}
          className="ui basic button green"
          onClick={this.handleSaveClick}>Update</Button>
      </Segment>
    )
  }
}

export default ResourceInfo