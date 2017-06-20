import React from "react";
import PropTypes from "prop-types";
import {
	View,
	TouchableHighlight,
	Image,
} from "react-native";

import styles from "./ListFooter.css.js";

export default ListFooter = (props) => {
	const { navigator } = props;

	function _handlePress() {
		navigator.push({
			screen: "cocktails.Login",
		});
	}

	return (
		<View style={styles.wrapper}>
			<TouchableHighlight onPress={_handlePress}>
				<Image
					style={styles.decoration}
					source={require("../images/witness.png")}
				/>
			</TouchableHighlight>
		</View>
	);
};
