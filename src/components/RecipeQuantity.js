import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
	TouchableHighlight,
} from "react-native";

import { CocktailText as Text } from "./CocktailText";
import { COLORS } from "../util/style_consts";

import styles from "./RecipeQuantity.css.js";

const RecipeQuantity = (props) => {
	const { quantity, onDecrement, onIncrement } = props;

	return (
		<View style={styles.wrapper}>
			<TouchableHighlight
				onPress={onDecrement}
				underlayColor={COLORS.brownDark}
				style={[styles.buttonWrapper, styles.buttonWrapperLeft]}
			>
				<View>
					<Text style={[styles.button, styles.buttonLeft]}>
						-
					</Text>
				</View>
			</TouchableHighlight>

			<Text style={styles.quantity}>
				{quantity}
			</Text>

			<TouchableHighlight
				onPress={onIncrement}
				underlayColor={COLORS.brownDark}
				style={[styles.buttonWrapper, styles.buttonWrapperRight]}
			>
				<View>
					<Text style={styles.button}>
						+
					</Text>
				</View>
			</TouchableHighlight>
		</View>
	);
};

RecipeQuantity.propTypes = {
	quantity: PropTypes.number.isRequired,
	onDecrement: PropTypes.func.isRequired,
	onIncrement: PropTypes.func.isRequired,
};

export default RecipeQuantity;
