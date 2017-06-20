import React, { Component } from "react";
import PropTypes from "prop-types";
import {
	View,
	ListView,
} from "react-native";

import { NAVIGATOR_SETTINGS } from "../util/consts";

import { api } from "../util/web";
import Storage from "../util/storage";
import { CocktailText as Text } from "../components/CocktailText";
import RecipesItem from "../components/RecipesItem";
import ListFooter from "../components/ListFooter";

import styles from "./Recipes.css.js";

class Recipes extends Component {
	static navigatorStyle = NAVIGATOR_SETTINGS;

	constructor(props) {
		super(props);

		this.state = {
			dataSource: false,
		};
	}

	componentDidMount() {
		this._loadInitialState();
	}

	async _loadInitialState() {
		const data = await Storage.getRecipes();

		if (typeof(data) === "undefined" || data === null || !data.length) {
			this._fetchData();
			return;
		}

		if (data.error) {
			console.log("set error state");
			return;
		}

		this._setDataSource(data);
	}

	async _fetchData() {
		let recipes;
		const data = await api("recipes");

		if (data.recipes) {
			recipes = data.recipes;

			await Storage.setRecipes(recipes);
			this._setDataSource(recipes);
		} else {
			console.log("set error state");
		}
	}

	_setDataSource(data) {
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

		this.setState({
			dataSource: ds.cloneWithRows(data),
		});
	}

	_onPickRecipe = (recipe) => {
		this.props.navigator.push({
			screen: "cocktails.Recipe",
			passProps: {
				name: recipe.name,
				slug: recipe.slug,
			}
		});
	}

	render() {
		const { onPickRecipe, navigator } = this.props;
		const { dataSource } = this.state;

		return (
			<View style={styles.wrapper}>
				{dataSource &&
					<ListView
						dataSource={dataSource}
						renderHeader={() =>
							<Text style={styles.title}>
								Recipes
							</Text>
						}
						renderRow={(rowData) =>
							<RecipesItem
								recipe={rowData}
								onPickRecipe={this._onPickRecipe}
							/>
						}
						renderFooter={() =>
							<ListFooter
								navigator={navigator}
							/>
						}
						style={styles.list}
					/>
				}
			</View>
		);
	}
}

export default Recipes;
