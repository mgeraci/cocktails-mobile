import React, { Component } from "react";
import {
	ScrollView,
  View,
	TouchableHighlight,
	Image,
} from "react-native";

import { api } from "../util/web";
import { NAVIGATOR_SETTINGS } from "../util/consts";
import { capitalize } from "../util/helpers";
import Storage from "../util/storage";

import { CocktailText as Text } from "../components/CocktailText";
import Ingredient from "../components/Ingredient";
import RecipeQuantity from "../components/RecipeQuantity";
import Glass from "../components/Glass";
import Error from "../components/Error";

import styles from "./Recipe.css.js";

class Recipe extends Component {
	static navigatorStyle = NAVIGATOR_SETTINGS;

	constructor(props) {
		super(props);

		this.state = {
			quantity: 1,
		};
	}

	componentDidMount() {
		this._loadInitialState();
	}

	async _loadInitialState() {
		const { slug } = this.props;
		const data = await Storage.getRecipe(slug);

		if (typeof(data) === "undefined" || data === null || !data.ingredients) {
			this._fetchData();
			return;
		}

		if (data.error) {
			this.setState({
				isLoaded: false,
				error: true,
			});

			return;
		}

		this.setState({ recipe: data });
	}

	async _fetchData() {
		let recipes;
		const { slug } = this.props;
		const data = await api(`recipe/${slug}`);

		if (data.ingredients && data.ingredients.length) {
			await Storage.setRecipe(slug, data);
			this.setState({ recipe: data });
		} else {
			this.setState({
				isLoaded: false,
				error: true,
			});
		}
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
		const { name } = this.props;
		const { quantity, error } = this.state;
		let recipe = this.state.recipe || {};
		let {
			source,
			ingredients,
			directions,
			glass,
		} = recipe;
		const isLoaded = ingredients && ingredients.length;

		return (
			<ScrollView style={styles.wrapper}>
				<Text style={styles.name}>
					{name}
				</Text>

				{isLoaded &&
					<View>
						{source &&
							<Text style={styles.source}>
								by {source.name}
							</Text>
						}

						<Image
							style={styles.decoration}
							source={require("../images/witness.png")}
						/>

						<View style={styles.ingredients}>
							{ingredients.map((ingredient, i) =>
								<Ingredient
									key={i}
									ingredient={ingredient}
									quantity={quantity}
								/>
							)}
						</View>

						<Text style={[ styles.directions, styles.directionsFont ]}>
							{directions}
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

							{glass &&
								<View style={[ styles.bottomWrapperInner, styles.glassWrapper ]}>
									<Glass
										style={styles.glass}
										glass={glass.slug}
									/>
									<Text style={styles.bottomLabel}>
										{capitalize(`${glass.name} glass`)}
									</Text>
								</View>
							}
						</View>

						<View style={{ width: 100, height: 30, }} />
					</View>
				}

				{!isLoaded && !error &&
					<View>
						<Text style={[ styles.source, styles.placeholder, styles.sourcePlaceholder ]}>
							by
						</Text>

						<Image
							style={styles.decoration}
							source={require("../images/witness.png")}
						/>

						<View style={styles.ingredients}>
							{[...Array(5).keys()].map((i) =>
								<View
									key={i}
									style={{
										...styles.ingredientPlaceholder,
										...styles.placeholder,
										width: 80 + Math.random() * 80,
									}}
								/>
							)}
						</View>

						<View style={styles.directions}>
							{[...Array(2).keys()].map((i) =>
								<View
									key={i}
									style={{
										...styles.ingredientPlaceholder,
										...styles.placeholder,
										width: 300 + Math.random() * 20,
									}}
								/>
							)}
						</View>
					</View>
				}

				{error &&
					<View style={styles.errorWrapper}>
						<Error message="There was a problem loading this recipe." />
					</View>
				}
			</ScrollView>
		);
	}
}

export default Recipe;
