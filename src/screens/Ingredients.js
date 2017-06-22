import React, { Component } from "react";
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

const Ingredients = (props) => {
	const onPress = (ingredient) => {
		props.navigator.push({
			screen: "cocktails.Ingredients",
			passProps: {
				name: ingredient.name,
				slug: ingredient.slug,
			}
		});
	};

	const fetchData = async () => {
		let recipes;
		const data = await api("ingredients");

		if (data.ingredients) {
			ingredients = data.ingredients;

			await Storage.setIngredients(ingredients);
			return ingredients;
		} else {
			return { error: true };
		}
	};

	return (
		<ListPage
			title="Ingredients"
			getStoredData={Storage.getIngredients}
			fetchData={fetchData}
			item={ListItem}
			onPress={onPress}
			navigator={props.navigator}
		/>
	);
};

Ingredients.navigatorStyle = NAVIGATOR_SETTINGS;

export default Ingredients;
