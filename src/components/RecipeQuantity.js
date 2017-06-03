import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
	TouchableHighlight,
} from "react-native";

import { CocktailText as Text } from "../components/CocktailText";

const RecipeQuantity = (props) => {
	const { quantity, onDecrement, onIncrement } = props;

	return (
		<View>
			<TouchableHighlight onPress={onDecrement}>
				<View>
					<Text>
						-
					</Text>
				</View>
			</TouchableHighlight>
			<Text>
				{quantity}
			</Text>
			<TouchableHighlight onPress={onIncrement}>
				<View>
					<Text>
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
