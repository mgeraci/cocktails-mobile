import React from "react";
import {
	View,
	Image,
} from "react-native";

import styles from "./ListFooter.css.js";

export default ListFooter = () => {
	return (
		<View style={styles.wrapper}>
			<Image
				style={styles.decoration}
				source={require("../images/witness.png")}
			/>
		</View>
	);
};
