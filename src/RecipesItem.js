import React from "react";
import PropTypes from "prop-types";
import {
	TouchableHighlight,
	View,
	StyleSheet,
} from 'react-native';

import { COLORS } from "./util/style_consts";
import { CocktailText as Text } from "./CocktailText";

const RecipesItem = (props) => {
	const { recipe, onPickRecipe } = props;

	return (
		<TouchableHighlight
			onPress={onPickRecipe}
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
	onPickRecipe: PropTypes.func.isRequired,
	recipe: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
	button: {
		paddingTop: 4,
		paddingBottom: 4,
	},
});

export default RecipesItem;
