import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../../../actions/User/UserActions';
import { withAlert } from 'react-alert';

import FormBuilder from '../../../stateless/Ui/Forms/FormBuilder';

const Fields = [
	{ label: 'Username', name: 'username', type: 'text', errorMsg: 'TODO' },
	{ label: 'Password', name: 'password', type: 'text', errorMsg: 'TODO' },
];

class Login extends Component {
	onSubmit = values => {
		this.props.actions.login(values);
	};

	componentDidUpdate(prevProps) {
		if (prevProps.flashMessage !== this.props.flashMessage) {
			this.props.alert.show(this.props.flashMessage);
		}
	}

	render() {
		return (
			<Fragment>
				<FormBuilder fields={Fields} onSubmit={this.onSubmit} buttonText="Login" formTitle="Account Login" />
			</Fragment>
		);
	}
}

const mapStateToProps = ({ Flash }) => {
	return { flashMessage: Flash.message };
};

const mapDispatchToProps = dispatch => {
	return {
		actions: bindActionCreators(Object.assign(userActions), dispatch),
	};
};

Login = withAlert(Login);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);
