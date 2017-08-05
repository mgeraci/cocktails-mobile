import {
	COLORS,
	APP_PADDING,
	STYLES,
	INPUT_HEIGHT,
	BR,
} from "../util/style_consts";

export default {
	wrapper: {
		flex: 1,
		padding: APP_PADDING,
		backgroundColor: COLORS.purple,
	},

	title: {
		...STYLES.TitleStyle,
	},

	searchRow: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		maxWidth: 400,
	},

	input: {
		...STYLES.InputStyle,
		flex: 1,
	},

	buttonWrapper: {
		overflow: "hidden",
		borderRadius: BR,
		height: INPUT_HEIGHT,
		marginLeft: 15,
		display: "flex",
	},

	button: {
		...STYLES.ButtonStyle,
		width: 100,
		height: INPUT_HEIGHT,
	},

	buttonText: {
		...STYLES.ButtonTextStyle,
	},

	footer: {
		flex: 1,
		height: 40,
	}
}
