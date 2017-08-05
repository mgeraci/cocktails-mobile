import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { CocktailText as Text } from "../components/CocktailText";

import styles from "./Error.css.js";

const Error = (props) => {
	return (
		<View style={styles.wrapper}>
			<View style={styles.text}>
				<Text>{props.message}</Text>
			</View>
		</View>
	);
};

Error.propTypes = {
	message: PropTypes.string.isRequired,
}

export default Error;
