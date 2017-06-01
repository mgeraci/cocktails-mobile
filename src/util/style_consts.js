import { StyleSheet } from 'react-native';

export const COLORS = {
	purple: "#4a3d4c",
	pink: "#8a504d",
	brown: "#b57226",
	tan: "#bf9f6b",
}

export const APP_PADDING = 18;

export const STYLES = StyleSheet.create({
	TextStyle: {
		color: COLORS.tan,
		fontFamily: "AvenirLTStd-Roman",
	},
	TitleStyle: {
		fontSize: 22,
		marginBottom: 30,
	},
});
