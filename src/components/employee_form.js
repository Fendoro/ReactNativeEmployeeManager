import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text, View } from 'react-native';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';
import { styles as inputStyles } from './common/input';

class EmployeeFrom extends Component {
	render() {
		const { name, phone, shift } = this.props;
		const { labelStyle, containerStyle } = inputStyles;
		return (
			<View>
				<CardSection>
					<Input
						label="Name"
						placeholder="Jane"
						value={name}
						onChangeText={value =>
							this.props.employeeUpdate({
								prop: 'name',
								value
							})}
					/>
				</CardSection>
				<CardSection>
					<Input
						label="Phone"
						placeholder="555-555-5555"
						value={phone}
						onChangeText={value =>
							this.props.employeeUpdate({
								prop: 'phone',
								value
							})}
					/>
				</CardSection>
				<CardSection>
					<View style={containerStyle}>
						<Text style={labelStyle}>Shift</Text>
						<Picker
							style={{ flex: 2 }}
							selectedValue={shift}
							onValueChange={value =>
								this.props.employeeUpdate({
									prop: 'shift',
									value
								})}
						>
							{DAYS.map(day =>
								<Picker.Item
									key={day}
									label={day}
									value={day}
								/>
							)}
						</Picker>
					</View>
				</CardSection>
			</View>
		);
	}
}

export const DAYS = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday'
];

const mapStateToProps = state => {
	const { name, phone, shift } = state.employeeForm;
	return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(
	EmployeeFrom
);
