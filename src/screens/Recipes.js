import React from "react";
import PropTypes from "prop-types";
import {
	View,
	ListView,
} from "react-native";

import { NAVIGATOR_SETTINGS } from "../util/consts";
import Storage from "../util/storage";
import { api } from "../util/web";
import ListPage from "../components/ListPage";
import ListItem from "../components/ListItem";

const Recipes = (props) => {
	const onPress = (recipe) => {
		props.navigator.push({
			screen: "cocktails.Recipe",
			passProps: {
				name: recipe.name,
				slug: recipe.slug,
			}
		});
	};

	const fetchData = async () => {
		let recipes;
		const data = await api("recipes");

		if (data.recipes) {
			recipes = data.recipes;

			await Storage.setRecipes(recipes);
			return recipes;
		} else {
			return { error: true };
		}
	};

	return (
		<ListPage
			title="Recipes"
			getStoredData={Storage.getRecipes}
			fetchData={fetchData}
			item={ListItem}
			onPress={onPress}
			navigator={props.navigator}
		/>
	);
};

Recipes.navigatorStyle = NAVIGATOR_SETTINGS;

export default Recipes;
