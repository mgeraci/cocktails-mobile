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
import { getData } from "../util/helpers";
import { CocktailText as Text } from "../components/CocktailText";
import RecipesItem from "../components/RecipesItem";

class Recipes extends Component {
	static navigatorStyle = NAVIGATOR_SETTINGS;

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds.cloneWithRows(RECIPES),
    };
  }

	componentDidMount() {
		this._loadInitialState();
	}

	async _loadInitialState() {
		const data = await getData("recipes");
		console.log("in initial state", data);

		if (typeof(data) === "undefined" || data === null) {
			console.log("no data found; start request");
			return;
		}

		if (data.error) {
			console.log("set error state");
			return;
		}

		console.log("proceed with render", data);
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
			</View>
    );
  }
}

const headerStyles = {
	paddingTop: APP_PADDING,
};

const viewStyles = {
	backgroundColor: COLORS.purple,
};

const listStyles = {
	paddingLeft: APP_PADDING,
	paddingRight: APP_PADDING,
};

export default Recipes;
