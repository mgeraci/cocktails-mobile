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

	name: {
		fontSize: 28,
		fontFamily: FONT_FAMILY,
		textAlign: "center",
	},

	source: {
		fontSize: 16,
		fontFamily: FONT_FAMILY_LIGHT,
		textAlign: "center",
	},

	sourcePlaceholder: {
		width: 100,
		alignSelf: "center",
	},

	decoration: {
		marginTop: 26,
		width: 70,
		height: 36,
		alignSelf: "center",
	},

	ingredients: {
		marginTop: 26,
	},

	directions: {
		marginTop: 28,
		marginBottom: 28,
	},

	directionsFont: {
		fontFamily: FONT_FAMILY_LIGHT,
		fontSize: 18,
		lineHeight: 24,
	},

	bottomWrapper: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
	},

	bottomWrapperInner: {
		flexDirection: "column",
		justifyContent: "space-between",
		width: QUANTITY_BUTTON_SIZE * 2 + QUANTITY_BUTTON_SIZE * 1.2,
		height: QUANTITY_BUTTON_SIZE * 1.75,
	},

	bottomLabel: {
		fontSize: 16,
		lineHeight: 26,
		fontFamily: FONT_FAMILY_LIGHT,
		alignSelf: "center",
	},

	glassWrapper: {
		width: QUANTITY_BUTTON_SIZE * 2,
		marginLeft: 45,
	},

	glass: {
		width: QUANTITY_BUTTON_SIZE,
		height: QUANTITY_BUTTON_SIZE,
		alignSelf: "center",
	},

	errorWrapper: {
		marginTop: 30,
	},

	placeholder: {
		backgroundColor: COLORS.tan,
		opacity: 0.1,
	},

	ingredientPlaceholder: {
		width: 200,
		height: 16,
		marginTop: 8,
		marginBottom: 6,
	},
};
