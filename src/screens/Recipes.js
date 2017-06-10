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

import { getRecipes, setRecipes } from "../util/helpers";
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
		const data = await getRecipes();
		console.log("in initial state", data);

		if (typeof(data) === "undefined" || data === null || !data.length) {
			console.log("no data found; start request");
			this._getData();
			return;
		}

		if (data.error) {
			console.log("set error state");
			return;
		}

		console.log("proceed with render", data);
		this._setDataSource(data);
	}

	async _getData() {
    // this will be the api request's location
		const recipes = [
			{ name: "foo", slug: "boo" },
			{ name: "bar", slug: "dar" },
		];

		await setRecipes(recipes);

		this._setDataSource(recipes);
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
			title: recipe.title,
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
