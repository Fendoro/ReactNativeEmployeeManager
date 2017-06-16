import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
	pressRow() {
		const { employee } = this.props;
		Actions.employeeEdit({ employee });
	}

	render() {
		const { name } = this.props.employee;
		const { titleStyle } = styles;
		return (
			<TouchableWithoutFeedback onPress={this.pressRow.bind(this)}>
				<View>
					<CardSection>
						<Text style={titleStyle}>
							{name}
						</Text>
					</CardSection>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
};

export default ListItem;
