import React, { Component } from "react";
import PropTypes from "prop-types";
import {
	View,
	ListView,
} from "react-native";

import {
	RECIPES,
	NAVIGATOR_SETTINGS,
} from "../util/consts";

import {
	STYLES,
	APP_PADDING,
	COLORS,
} from "../util/style_consts";

import { api } from "../util/web";
import Storage from "../util/storage";
import { CocktailText as Text } from "../components/CocktailText";
import RecipesItem from "../components/RecipesItem";

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
		const { onPickRecipe } = this.props;
		const { dataSource } = this.state;

		return (
			<View style={viewStyles}>
				{dataSource &&
					<ListView
						dataSource={dataSource}
						renderHeader={() =>
							<Text style={[STYLES.TitleStyle, headerStyles]}>
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
							<View style={{ height: APP_PADDING }} />
						}
						style={listStyles}
					/>
				}
			</View>
		);
	}
}

const headerStyles = {
	paddingTop: APP_PADDING,
};

const viewStyles = {
	flex: 1,
	backgroundColor: COLORS.purple,
};

const listStyles = {
	paddingLeft: APP_PADDING,
	paddingRight: APP_PADDING,
};

export default Recipes;
