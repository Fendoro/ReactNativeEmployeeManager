import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { text } from 'react-native-communications';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm, Spinner } from './common';
import EmployeeForm from './employee_form';

class EmployeeEdit extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false
		};
	}

	componentWillMount() {
		_.each(this.props.employee, (value, prop) => {
			this.props.employeeUpdate({ prop, value });
		});
	}

	componentWillUnmount() {
		_.each(this.props.employee, (value, prop) => {
			this.props.employeeUpdate({ prop, value: '' });
		});
	}

	pressButton() {
		const { name, phone, shift, employee } = this.props;
		this.props.employeeSave({ name, phone, shift, uid: employee.uid });
	}

	pressTextButton() {
		const { phone, shift } = this.props;
		text(phone, `Your upcoming shift is on ${shift}`);
	}

	pressFireButton() {
		this.setState({
			showModal: !this.state.showModal
		});
	}

	acceptFire() {
		const { uid } = this.props.employee;
		this.props.employeeDelete({ uid });
	}

	declineFire() {
		this.setState({
			showModal: false
		});
	}

	renderButtons() {
		if (this.props.loading) {
			return (
				<CardSection>
					<Spinner size="large" />
				</CardSection>
			);
		}
		return [
			<CardSection key="update">
				<Button onPress={this.pressButton.bind(this)}>
					Update
				</Button>
			</CardSection>,
			<CardSection key="text">
				<Button onPress={this.pressTextButton.bind(this)}>
					Text Schedule
				</Button>
			</CardSection>,
			<CardSection key="fire">
				<Button
					onPress={this.pressFireButton.bind(this)}
					buttonStyle={{ borderColor: 'red' }}
					textStyle={{ color: 'red' }}
				>
					Fire Employee
				</Button>
			</CardSection>
		];
	}

	render() {
		return (
			<Card>
				<EmployeeForm />
				{this.renderButtons()}
				<Confirm
					visible={this.state.showModal}
					onAccept={this.acceptFire.bind(this)}
					onDecline={this.declineFire.bind(this)}
				>
					Are you sure you want to delete this?
				</Confirm>
			</Card>
		);
	}
}

const mapStateToProps = state => {
	const { name, phone, shift, loading } = state.employeeForm;
	return { name, phone, shift, loading };
};

export default connect(mapStateToProps, {
	employeeUpdate,
	employeeSave,
	employeeDelete
})(EmployeeEdit);
