import React, { Component } from 'react';
import PropTypes from "prop-types";
import {
	View,
	ListView,
	Button,
} from 'react-native';

import {
	RECIPES,
	NAVIGATOR_STYLES,
} from "../util/consts";
import {
	STYLES,
	APP_PADDING,
	COLORS,
} from "../util/style_consts";
import { CocktailText as Text } from "../components/CocktailText";
import RecipesItem from "../components/RecipesItem";

class Recipes extends Component {
	static navigatorStyle = NAVIGATOR_STYLES;

  constructor(props) {
    super(props);

		this._onPickRecipe = this._onPickRecipe.bind(this);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds.cloneWithRows(RECIPES),
    };
  }

	_onPickRecipe(recipe) {
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
