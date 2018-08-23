import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import FormBuilder from '../../../stateless/Ui/Forms/FormBuilder'

const Fields = [
  { label: 'Test', name: 'Test', type: 'Text', errorMsg: 'TODO'}
]
  class SignUp extends Component {
    onSubmit = values => {
      // this.props.actions.signUp(values)
    }

    render() {
      return (
        <Fragment>
          <FormBuilder fields={Fields} handleSubmit={this.onSubmit} buttonText='SignUp' />
        </Fragment>
      )
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(Object.assign(), dispatch)
    }
  }

export default connect(null, mapDispatchToProps) (SignUp)