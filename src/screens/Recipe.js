import React, { Component } from "react";
import {
  StyleSheet,
  View,
	TouchableHighlight,
} from "react-native";

import { TestRecipe, NAVIGATOR_SETTINGS } from "../util/consts";
import {
	COLORS,
	STYLES,
	APP_PADDING,
} from "../util/style_consts";

import { CocktailText as Text } from "../components/CocktailText";
import Ingredient from "../components/Ingredient";
import RecipeQuantity from "../components/RecipeQuantity";

class Recipe extends Component {
	static navigatorStyle = NAVIGATOR_SETTINGS;

	constructor(props) {
		super(props);

		this.state = {
			quantity: 1,
		};
	}

	_increment = () => {
		const { quantity } = this.state;

		this.setState({ quantity: quantity + 1 });
	}

	_decrement = () => {
		const { quantity } = this.state;

		if (quantity <= 1) {
			this.setState({ quantity: 1 });
		} else {
			this.setState({ quantity: quantity - 1 });
		}
	}

	render() {
		const { quantity } = this.state;

		return (
			<View style={styles.wrapper}>
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

				<RecipeQuantity
					quantity={quantity}
					onDecrement={this._decrement}
					onIncrement={this._increment}
				/>
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
