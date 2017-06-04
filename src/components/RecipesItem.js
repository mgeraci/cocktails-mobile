import React from "react";
import PropTypes from "prop-types";
import {
	TouchableHighlight,
	View,
} from 'react-native';

import { COLORS } from "../util/style_consts";
import { CocktailText as Text } from "./CocktailText";

import styles from "./RecipesItem.css.js";

const RecipesItem = (props) => {
	const { recipe, onPickRecipe } = props;

	function _handlePress() {
		onPickRecipe(recipe);
	}

	return (
		<TouchableHighlight
			onPress={_handlePress}
		>
			<View>
				<Text style={styles.button}>
					{recipe.name}
				</Text>
			</View>
		</TouchableHighlight>
	);
};

RecipesItem.propTypes = {
	recipe: PropTypes.object.isRequired,
	onPickRecipe: PropTypes.func.isRequired,
};

export default RecipesItem;
