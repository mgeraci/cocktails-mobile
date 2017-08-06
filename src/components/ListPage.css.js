import {
	APP_PADDING,
	COLORS,
	STYLES,
} from "../util/style_consts";

export default { 
	wrapper: {
		flex: 1,
		backgroundColor: COLORS.purple,
	},

	title: {
		...STYLES.TitleStyle,
		paddingTop: APP_PADDING,
	},

	list: {
		paddingLeft: APP_PADDING,
		paddingRight: APP_PADDING,
	},

	errorWrapper: {
		marginTop: APP_PADDING * 3,
		paddingLeft: APP_PADDING,
		paddingRight: APP_PADDING,
		alignSelf: "center",
	}
};
