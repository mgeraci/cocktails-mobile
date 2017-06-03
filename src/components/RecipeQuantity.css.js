import { COLORS } from "../util/style_consts";

const buttonSize = 50;
const fontSize = 20;
const br = 3;

const styles = {
	wrapper: {
		flex: 1,
	},

	buttonWrapper: {
		width: buttonSize,
		height: buttonSize,
		backgroundColor: COLORS.brown,
		borderRadius: 100,
	},

	button: {
		width: buttonSize,
		height: buttonSize,

		textAlign: "center",
		fontSize,
		lineHeight: buttonSize,
		color: COLORS.purple,
	},

	buttonLeft: {
		borderTopLeftRadius: br,
		borderBottomLeftRadius: br,
	},

	buttonRight: {
		borderTopRightRadius: br,
		borderBottomRightRadius: br,
	},

	quantity: {
		width: buttonSize * 1.3,
		height: buttonSize,
		backgroundColor: COLORS.tan,

		textAlign: "center",
		fontSize,
		lineHeight: buttonSize,
		color: COLORS.purple,
	},
};

export default styles;
