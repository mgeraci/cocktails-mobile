export const FONT_FAMILY = "AvenirLTStd-Roman";
export const FONT_FAMILY_LIGHT = "AvenirLTStd-Light";

export const COLORS = {
	purple: "#4a3d4c",
	purpleDark: "#362b38",

	brown: "#b57226",
	brownDark: "#90591b",

	pink: "#8a504d",
	tan: "#bf9f6b",
}

export const APP_PADDING = 20;

export const QUANTITY_BUTTON_SIZE = 50;

export const INPUT_HEIGHT = 36;
export const BR = 3;

export const STYLES = {
	TextStyle: {
		color: COLORS.tan,
		fontFamily: FONT_FAMILY,
	},

	TitleStyle: {
		fontSize: 28,
		fontFamily: FONT_FAMILY,
		marginBottom: 32,
	},

	InputStyle: {
		height: INPUT_HEIGHT,
		backgroundColor: "rgba(255, 255, 255, 0.9)",
		borderRadius: BR,
		paddingLeft: 8,
		paddingRight: 8,
	},

	ButtonStyle: {
		backgroundColor: COLORS.brown,
		borderRadius: BR,
		paddingTop: 10,
		alignItems: "center",
	},

	ButtonTextStyle: {
		color: COLORS.purple,
		fontSize: 16,
	},
};
