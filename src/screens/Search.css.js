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
		paddingLeft: APP_PADDING,
		paddingRight: APP_PADDING,
		backgroundColor: COLORS.purple,
	},

	title: {
		marginTop: APP_PADDING,
		...STYLES.TitleStyle,
	},

	searchRow: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		marginBottom: 30,
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
		width: 80,
		height: INPUT_HEIGHT,
	},

	buttonText: {
		...STYLES.ButtonTextStyle,
	},

	spinner: {
		width: 20,
		height: 20,
		marginTop: 190,
		alignSelf: "center",
	},

	listHeader: {
		paddingTop: 14,
		paddingBottom: 10,
		fontSize: 22,
		backgroundColor: COLORS.purple,
	},

	lastChildSpacing: {
		marginBottom: 20,
	},

	error: {
		color: COLORS.pink,
		fontSize: 18,
	},

	footer: {
		flex: 1,
		height: 10,
	}
}
