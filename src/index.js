import React, { Component } from "react";
import { Navigation } from "react-native-navigation";
import {
	AppRegistry,
	StyleSheet,
	View,
	StatusBar,
} from 'react-native';

import registerScreens from "./screens";

import { COLORS } from "./util/style_consts";

registerScreens();

const tabs = [
	{
		label: "Recipes",
		title: "Recipes",
		screen: "cocktails.Recipes",
		// icon: require("./images/recipes.png"),
		// selectedIcon: "",
	},
	{
		label: "Ingredients",
		title: "Ingredients",
		screen: "cocktails.Recipes",
		// icon: require("./images/ingredients.svg"),
		// selectedIcon: "",
	},
	{
		label: "Sources",
		title: "Sources",
		screen: "cocktails.Recipes",
		// icon: require("./images/sources.svg"),
		// selectedIcon: "",
	},
	{
		label: "Search",
		title: "Search",
		screen: "cocktails.Recipes",
		// icon: require("./images/search.svg"),
		// selectedIcon: "",
	},
];

Navigation.startTabBasedApp({
	tabs,
	tabsStyle: {
		tabBarBackgroundColor: COLORS.purple,
		tabBarButtonColor: COLORS.tan,
		tabBarSelectedButtonColor: COLORS.brown,
		// tabFontFamily: "BioRhyme-Bold",
	},
});
