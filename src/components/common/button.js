import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Button = ({ onPress, children, textStyle, buttonStyle }) => {
	const { iniButtonStyle, initTextStyle } = styles;
	return (
		<TouchableOpacity
			style={[iniButtonStyle, buttonStyle]}
			onPress={onPress}
		>
			<View>
				<Text style={[initTextStyle, textStyle]}>{children}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = {
	initTextStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	},
	iniButtonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
	}
};

export { Button };
