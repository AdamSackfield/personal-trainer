import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../../../actions/User/UserActions';
import { withAlert } from 'react-alert'

import FormBuilder from '../../../stateless/Ui/Forms/FormBuilder';

const Fields = [
  { label: 'Username', name: 'username', type: 'text', errorMsg: 'TODO' },
  { label: 'Password', name: 'password', type: 'text', errorMsg: 'TODO' }
]
class SignUp extends Component {
	onSubmit = values => {
		this.props.actions.signUp(values);
  };
  
  componentDidUpdate(prevProps) {
		if(prevProps.flashMessage !== this.props.flashMessage){
			this.props.alert.show(this.props.flashMessage)
		}
	}

	render() {
		return (
			<Fragment>
				<FormBuilder fields={Fields} onSubmit={this.onSubmit} buttonText="SignUp" />
			</Fragment>
		);
	}
}

const mapStateToProps = ({ Flash }) => {
  return { flashMessage: Flash.message }
}

const mapDispatchToProps = dispatch => {
	return {
		actions: bindActionCreators(Object.assign(userActions), dispatch),
	};
};

SignUp = withAlert(SignUp)

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(SignUp); 
