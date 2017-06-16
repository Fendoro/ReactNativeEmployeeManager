import React from 'react';
import { View, Text } from 'react-native';

const Error = ({ error }) => {
	const { errorTextStyle, errorContainerStyle } = styles;
	if (error) {
		return (
			<View style={errorContainerStyle}>
				<Text style={errorTextStyle}>
					{error}
				</Text>
			</View>
		);
	}
	return null;
};

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	},
	errorContainerStyle: {
		flex: 1,
		alignSelf: 'stretch'
	}
};

export { Error };
