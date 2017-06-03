import { COLORS } from "../util/style_consts";
import { FONT_FAMILY_LIGHT } from "../util/consts";

const buttonSize = 50;
const fontSize = 26;
const lineHeight = buttonSize * 1.1;
const br = 5;

const styles = {
	wrapper: {
		flex: 1,
		flexDirection: "row",
	},

	buttonWrapper: {
		width: buttonSize,
		height: buttonSize,

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
		width: buttonSize,
		height: buttonSize,

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
		width: buttonSize * 1.2,
		height: buttonSize,
		backgroundColor: COLORS.tan,

		textAlign: "center",
		fontSize,
		fontFamily: FONT_FAMILY_LIGHT,
		lineHeight,
		color: COLORS.purple,
	},
};

export default styles;
