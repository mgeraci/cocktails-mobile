import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import { TestRecipe } from "./util/consts";
import { COLORS, TextStyle } from "./util/style_consts";
import { CocktailText as Text } from "./CocktailText";
import Ingredient from "./Ingredient";

class Recipe extends Component {
	render() {
		return (
			<View style={styles.wrapper}>
				<Text style={[TextStyle.TextStyle, styles.title]}>
					{TestRecipe.title}
				</Text>
				<Text style={[TextStyle.TextStyle, styles.byline]}>
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
