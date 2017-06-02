import React, { Component } from "react";
import { Navigation } from "react-native-navigation";
import { createIconSet } from "react-native-vector-icons";
import {
	AppRegistry,
	StyleSheet,
	View,
	StatusBar,
} from 'react-native';

import registerScreens from "./screens";

import { COLORS } from "./util/style_consts";
import { FONT_ICON_MAP } from "./util/consts";

// load each page as a navigable screen, using react-native-navigation
registerScreens();

// initialize the font icon for tab navigation
const Icon = createIconSet(FONT_ICON_MAP, "cocktails-icons");

const tabs = [
	{
		label: "Recipes",
		title: "Recipes",
		screen: "cocktails.Recipes",
		icon: <Icon name="recipes" size={30} color="#f00" />
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
