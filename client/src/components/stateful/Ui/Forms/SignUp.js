import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../../../actions/User/UserActions';

import FormBuilder from '../../../stateless/Ui/Forms/FormBuilder';

const Fields = [
  { label: 'Username', name: 'username', type: 'text', errorMsg: 'TODO' },
  { label: 'Password', name: 'password', type: 'text', errorMsg: 'TODO' }
]
class SignUp extends Component {
	onSubmit = values => {
		this.props.actions.signUp(values);
	};

	render() {
		return (
			<Fragment>
				<FormBuilder fields={Fields} onSubmit={this.onSubmit} buttonText="SignUp" />
			</Fragment>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		actions: bindActionCreators(Object.assign(userActions), dispatch),
	};
};

export default connect(
	null, 
	mapDispatchToProps
)(SignUp); 
