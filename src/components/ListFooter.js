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

	return (
		<View style={styles.wrapper}>
			<Image
				style={styles.decoration}
				source={require("../images/witness.png")}
			/>
		</View>
	);
};
