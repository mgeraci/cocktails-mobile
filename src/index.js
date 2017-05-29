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
		// icon: require("../img/list.png"),
	}, {
		label: "Ingredients",
		title: "Ingredients",
		screen: "cocktails.Recipes",
		// icon: require("../img/swap.png"),
	}
];

Navigation.startTabBasedApp({
	tabs,
	tabsStyle: {
		tabBarBackgroundColor: COLORS.purple,
		navBarButtonColor: "#ffffff",
		tabBarButtonColor: "#ffffff",
		navBarTextColor: "#ffffff",
		tabBarSelectedButtonColor: "#ff505c",
		navigationBarColor: "#003a66",
		navBarBackgroundColor: "#003a66",
		tabFontFamily: "BioRhyme-Bold",
	},
});
