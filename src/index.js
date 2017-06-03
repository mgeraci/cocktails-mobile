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
import { FONT_ICON_MAP, FONT_FAMILY } from "./util/consts";


// init
// ----------------------------------------------------------------------------

// load each page as a navigable screen, using react-native-navigation
registerScreens();

// initialize the font icon for the navbar
const Icon = createIconSet(FONT_ICON_MAP, "cocktails-icons");

// load icons, then start app on success
_loadIcons().then(() => {
	_startApp();
}).catch((error) => {
	console.error(error);
});


// helpers
// ----------------------------------------------------------------------------

function _loadIcons() {
	const iconSize = 25;

	return new Promise(function (resolve, reject) {
		Promise.all(
			[
				Icon.getImageSource("recipes", iconSize),
				Icon.getImageSource("ingredients", iconSize),
				Icon.getImageSource("sources", iconSize),
				Icon.getImageSource("search", iconSize * 0.9),
			]
		).then((res) => {
			iconRecipes = res[0];
			iconIngredients = res[1];
			iconSources = res[2];
			iconSearch = res[3];

			resolve(true);
		}).catch((error) => {
			console.log(error);

			reject(error);
		}).done();
	});
};

function _startApp() {
	const tabs = [
		{
			label: "Recipes",
			title: "Recipes",
			screen: "cocktails.Recipes",
			icon: iconRecipes,
		},
		{
			label: "Ingredients",
			title: "Ingredients",
			screen: "cocktails.Recipes",
			icon: iconIngredients,
		},
		{
			label: "Sources",
			title: "Sources",
			screen: "cocktails.Recipes",
			icon: iconSources,
		},
		{
			label: "Search",
			title: "Search",
			screen: "cocktails.Recipes",
			icon: iconSearch,
		},
	];

	Navigation.startTabBasedApp({
		tabs,
		tabsStyle: {
			tabBarBackgroundColor: COLORS.purple,
			tabBarButtonColor: COLORS.tan,
			tabBarSelectedButtonColor: COLORS.brown,
			tabFontFamily: FONT_FAMILY,
		},
	});
}
