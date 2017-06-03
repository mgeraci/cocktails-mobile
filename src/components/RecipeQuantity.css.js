import {
	COLORS,
	FONT_FAMILY_LIGHT,
	QUANTITY_BUTTON_SIZE,
} from "../util/style_consts";

const fontSize = 26;
const lineHeight = QUANTITY_BUTTON_SIZE * 1.1;
const br = 5;

const styles = {
	wrapper: {
		flex: 1,
		flexDirection: "row",
	},

	buttonWrapper: {
		width: QUANTITY_BUTTON_SIZE,
		height: QUANTITY_BUTTON_SIZE,

		backgroundColor: COLORS.brown,
		overflow: "hidden",
	},

	buttonWrapperLeft: {
		borderTopLeftRadius: br,
		borderBottomLeftRadius: br,
	},

	buttonWrapperRight: {
		borderTopRightRadius: br,
		borderBottomRightRadius: br,
	},

	button: {
		width: QUANTITY_BUTTON_SIZE,
		height: QUANTITY_BUTTON_SIZE,

		textAlign: "center",
		fontSize,
		fontFamily: FONT_FAMILY_LIGHT,
		lineHeight,
		color: COLORS.purple,
	},

	buttonLeft: {
		lineHeight: lineHeight * 0.95,
	},

	quantity: {
		width: QUANTITY_BUTTON_SIZE * 1.2,
		height: QUANTITY_BUTTON_SIZE,
		backgroundColor: COLORS.tan,

		textAlign: "center",
		fontSize,
		fontFamily: FONT_FAMILY_LIGHT,
		lineHeight,
		color: COLORS.purple,
	},
};

export default styles;
