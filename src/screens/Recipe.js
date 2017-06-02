import React, { Component } from "react";
import {
  StyleSheet,
  View
} from "react-native";

import { TestRecipe, NAVIGATOR_SETTINGS } from "../util/consts";
import {
	COLORS,
	STYLES,
	APP_PADDING,
} from "../util/style_consts";
import { CocktailText as Text } from "../components/CocktailText";
import Ingredient from "../components/Ingredient";

import { FONT_ICON_MAP } from "../util/consts";
import { createIconSet } from "react-native-vector-icons";

class Recipe extends Component {
	static navigatorStyle = NAVIGATOR_SETTINGS;

	constructor(props) {
		super(props);
	}

	render() {
		const Icon = createIconSet(FONT_ICON_MAP, "cocktails-icons");

		return (
			<View style={styles.wrapper}>
				<Icon name="recipes" size={30} color="#f00" />
				<Text style={[STYLES.TextStyle, styles.title]}>
					{TestRecipe.title}
				</Text>
				<Text style={[STYLES.TextStyle, styles.byline]}>
					by {TestRecipe.source.name}
				</Text>

				<View style={styles.decoration} />

				<View style={styles.ingredients}>
					{TestRecipe.ingredients.map((ingredient, i) =>
						<Ingredient key={i} ingredient={ingredient} />
					)}
				</View>

				<Text style={styles.directions}>
					{TestRecipe.directions}
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		padding: APP_PADDING,
		backgroundColor: COLORS.purple
	},
	title: {
		fontSize: 20,
		textAlign: "center",
	},
	byline: {
		textAlign: "center",
	},
	decoration: {
		marginTop: 20,
		width: 40,
		height: 40,
		backgroundColor: "lightgray",
	},
	ingredients: {
		marginTop: 20,
	},
	directions: {
		marginTop: 20,
	}
});

export default Recipe;
