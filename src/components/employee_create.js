import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions/employee_actions';
import { Card, CardSection, Button, Spinner } from './common';
import EmployeeForm, { DAYS } from './employee_form';

class EmployeeCreate extends Component {
	pressButton() {
		const { name, phone, shift } = this.props;
		this.props.employeeCreate({ name, phone, shift: shift || DAYS[0] });
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner size="small" />;
		}
		return (
			<Button onPress={this.pressButton.bind(this)}>
				Save
			</Button>
		);
	}

	render() {
		return (
			<Card>
				<EmployeeForm {...this.props} />
				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = state => {
	const { name, phone, shift, loading } = state.employeeForm;
	return { name, phone, shift, loading };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(
	EmployeeCreate
);
