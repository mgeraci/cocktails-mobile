import {
	COLORS,
	STYLES,
	APP_PADDING,
	FONT_FAMILY,
	FONT_FAMILY_LIGHT,
	QUANTITY_BUTTON_SIZE,
} from "../util/style_consts";

export default {
	wrapper: {
		flex: 1,
		padding: APP_PADDING,
		backgroundColor: COLORS.purple
	},

	title: {
		fontSize: 28,
		fontFamily: FONT_FAMILY,
		textAlign: "center",
	},

	source: {
		fontSize: 16,
		fontFamily: FONT_FAMILY_LIGHT,
		textAlign: "center",
	},

	decoration: {
		marginTop: 22,
		width: 70,
		height: 50,
		alignSelf: "center",
		backgroundColor: "lightgray",
	},

	ingredients: {
		marginTop: 22,
	},

	directions: {
		marginTop: 28,
		marginBottom: 28,
		fontFamily: FONT_FAMILY_LIGHT,
		fontSize: 18,
		lineHeight: 24,
	},

	bottomWrapper: {
		flex: 1,
	},

	bottomWrapperInner: {
		flexDirection: "column",
		width: QUANTITY_BUTTON_SIZE * 2 + QUANTITY_BUTTON_SIZE * 1.2,
		height: QUANTITY_BUTTON_SIZE * 1.75,
	},

	bottomLabel: {
		fontSize: 16,
		lineHeight: 26,
		fontFamily: FONT_FAMILY_LIGHT,
		alignSelf: "center",
	}
};
