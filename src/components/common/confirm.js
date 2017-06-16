import React from 'react';
import { Text, Modal, View } from 'react-native';
import { CardSection } from './card_section';
import { Button } from './button';

const Confirm = ({ children, onAccept, onDecline, visible }) => {
	const { cardSectionStyle, containerStyle, textStyle } = styles;
	return (
		<Modal
			animationType="slide"
			onRequestClose={() => {}}
			transparent
			visible={visible}
		>
			<View style={containerStyle}>
				<CardSection style={cardSectionStyle}>
					<Text style={textStyle}>{children}</Text>
				</CardSection>
				<CardSection>
					<Button onPress={onAccept}>Yes</Button>
					<Button onPress={onDecline}>No</Button>
				</CardSection>
			</View>
		</Modal>
	);
};

const styles = {
	cardSectionStyle: {
		justifyContent: 'center'
	},
	textStyle: {
		flex: 1,
		fontSize: 18,
		textAlign: 'center',
		lineHeight: 40
	},
	containerStyle: {
		backgroundColor: 'rgba(0,0,0,0.75)',
		position: 'relative',
		flex: 1,
		justifyContent: 'center'
	}
};

export { Confirm };
