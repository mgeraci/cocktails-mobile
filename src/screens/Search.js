import React, { Component } from "react";
import {
	View,
} from "react-native";

import { NAVIGATOR_SETTINGS } from "../util/consts";
import { CocktailText as Text } from "../components/CocktailText";
import Storage from "../util/storage";
import { api } from "../util/web";

import styles from "./Search.css.js";

class Search extends Component {
	render() {
		return (
			<View style={styles.wrapper}>
				<Text>
					hey
				</Text>
			</View>
		);
	}
};

Search.navigatorStyle = NAVIGATOR_SETTINGS;

export default Search;
