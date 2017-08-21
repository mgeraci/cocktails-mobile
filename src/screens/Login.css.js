import {
	COLORS,
	APP_PADDING,
	STYLES,
} from "../util/style_consts";

const buttonWidth = 100;
const buttonHeight = 40;
const br = 3;

export default {
	wrapper: {
		flex: 1,
		backgroundColor: COLORS.purple,
		padding: APP_PADDING,
	},

	title: {
		...STYLES.TitleStyle,
	},

	error: {
		height: buttonHeight,
		marginBottom: 20,
		backgroundColor: COLORS.pink,
		borderRadius: br,
		overflow: "hidden",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},

	label: {
		fontSize: 16,
	},

	input: {
		...STYLES.InputStyle,
		marginTop: 6,
		marginBottom: 22,
		maxWidth: 250,
	},

	submitRow: {
		marginTop: 10,
		flex: 1,
		flexDirection: "row",
	},

	submitWrapper: {
		width: buttonWidth,
		height: buttonHeight,
		borderRadius: br,
	},

	submit: {
		...STYLES.ButtonStyle,
		width: buttonWidth,
		height: buttonHeight,
	},

	submitText: {
		...STYLES.ButtonTextStyle,
	},

	spinner: {
		width: 20,
		height: 20,
		marginTop: 11,
		marginLeft: 10,
	},
};
