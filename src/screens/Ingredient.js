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

const Ingredient = (props) => {
	const { name, slug } = props;

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
		const data = await api(`ingredient/${slug}`);

		if (data.recipes) {
			return data.recipes;
		} else {
			return { error: true };
		}
	};

	return (
		<ListPage
			title={`Recipes with ${name}`}
			getStoredData={() => { return []; }}
			fetchData={fetchData}
			item={ListItem}
			onPress={onPress}
			navigator={props.navigator}
		/>
	);
};

Ingredient.navigatorStyle = NAVIGATOR_SETTINGS;

export default Ingredient;
