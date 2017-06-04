import React, { Component } from "react";
import {
	ScrollView,
  View,
	TouchableHighlight,
} from "react-native";

import { TestRecipe, NAVIGATOR_SETTINGS } from "../util/consts";
import { capitalize } from "../util/helpers";

import { CocktailText as Text } from "../components/CocktailText";
import Ingredient from "../components/Ingredient";
import RecipeQuantity from "../components/RecipeQuantity";

import styles from "./Recipe.css.js";

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
			<ScrollView style={styles.wrapper}>
				<Text style={styles.title}>
					{TestRecipe.title}
				</Text>
				<Text style={styles.source}>
					by {TestRecipe.source.name}
				</Text>

				<View style={styles.decoration} />

				<View style={styles.ingredients}>
					{TestRecipe.ingredients.map((ingredient, i) =>
						<Ingredient
							key={i}
							ingredient={ingredient}
							quantity={quantity}
						/>
					)}
				</View>

				<Text style={styles.directions}>
					{TestRecipe.directions}
				</Text>

				<View style={styles.bottomWrapper}>
					<View style={styles.bottomWrapperInner}>
						<RecipeQuantity
							quantity={quantity}
							onDecrement={this._decrement}
							onIncrement={this._increment}
						/>
						<Text style={styles.bottomLabel}>
							Quantity
						</Text>
					</View>

					<View style={[styles.bottomWrapperInner, styles.glassWrapper]}>
						<View style={styles.glass} />
						<Text style={styles.bottomLabel}>
							{capitalize(`${TestRecipe.glass} glass`)}
						</Text>
					</View>
				</View>

				<View style={{ width: 100, height: 30, }} />
			</ScrollView>
		);
	}
}

export default Recipe;
