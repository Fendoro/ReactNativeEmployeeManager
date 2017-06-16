import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner, Error } from './common';

class LoginForm extends Component {
	emailChange(email) {
		this.props.emailChanged(email);
	}

	passwordChange(password) {
		this.props.passwordChanged(password);
	}

	pressButton() {
		const { email, password } = this.props;
		this.props.loginUser({ email, password });
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner size="small" />;
		}
		return (
			<Button onPress={this.pressButton.bind(this)}>
				Log In
			</Button>
		);
	}

	renderError() {
		const { error } = this.props;
		if (error) {
			return (
				<CardSection>
					<Error error={error} />
				</CardSection>
			);
		}
		return null;
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label="Email"
						placeholder="test@email.com"
						onChangeText={this.emailChange.bind(this)}
						value={this.props.email}
					/>
				</CardSection>
				<CardSection>
					<Input
						label="Password"
						placeholder="Qwerty1"
						secureTextEntry
						value={this.props.password}
						onChangeText={this.passwordChange.bind(this)}
					/>
				</CardSection>
				{this.renderError()}
				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = ({ auth }) => {
	const { email, password, error, loading } = auth;
	return { email, password, error, loading };
};

export default connect(mapStateToProps, {
	emailChanged,
	passwordChanged,
	loginUser
})(LoginForm);
