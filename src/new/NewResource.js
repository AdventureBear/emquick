/**
 * Created by suzanne on 5/20/18.
 */
import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'
// import slugify from 'slugify'
import './NewResource.css'
import Question from './Question'
import ResourceInfo from './ResourceInfo'
import PageContent from './PageContent'
import { Segment } from 'semantic-ui-react'
import References from './References'
// import * as apiCalls from '../api'
// const log = require('../helpers/logger')('NewResource')
// import Markdown from './Markdown'

class NewResourceForm extends Component {

  render() {

    const resourceData =
      this.props.resource.type === 'Calculator' ? (
        <Question
          questions={this.props.resource.questions}
          handleQuestion={this.props.handleQuestionChange}
          deleteQuestion={this.props.deleteQuestion}
          deleteOption={this.props.deleteOption}
          handleOption={this.props.handleOptionChange}
          addQuestion={this.props.addNewQuestion}
          addOption={this.props.addNewOption}
        />
      ) : (
        <PageContent
          pagebody={this.props.resource.pagebody}
          handleChange={this.props.handleChange}
        />
      )

    return (
      <Container text style={{ marginTop: '5em' }}>
        <Header as="h1">Add New Resource</Header>
        <form className="resource-form" autoComplete="off">
          <ResourceInfo
            resource={this.props.resource}
            handleChange={this.props.handleChange}
            slugify={this.props.slugifyTitle}
            handleType={this.props.handleTypeChange}
          />

          {resourceData}

          <References
            references={this.props.resource.references}
            handleReference={this.props.handleReferenceChange}
            handleType={this.props.handleTypeChange}
            addReference={this.props.addNewReference}
            removeReference ={this.props.removeReference}
          />

          <Segment attached="bottom">
            <button
              type="button"
              className="ui basic button green"
              style={{ alignSelf: 'flex-end', marginRight: 0 }}
              onClick={this.props.addResource}
            >
              SAVE
            </button>
          </Segment>
        </form>
      </Container>
    )
  }
}

export default NewResourceForm
