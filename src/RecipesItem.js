import React from "react";
import PropTypes from "prop-types";
import { Button } from 'react-native';

const RecipesItem = (props) => {
	const { recipe, onPickRecipe } = props;

	return (
		<Button
			title={recipe.name}
			onPress={onPickRecipe}
		/>
	);
};

RecipesItem.propTypes = {
	onPickRecipe: PropTypes.func.isRequired,
	recipe: PropTypes.object.isRequired,
};

export default RecipesItem;
