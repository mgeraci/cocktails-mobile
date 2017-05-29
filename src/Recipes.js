import React, { Component } from 'react';
import PropTypes from "prop-types";
import {
	View,
	ListView,
	Button,
} from 'react-native';

import { RECIPES } from "./util/consts";
import { STYLES, APP_PADDING } from "./util/style_consts";
import { CocktailText as Text } from "./CocktailText";
import RecipesItem from "./RecipesItem";

class Recipes extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds.cloneWithRows(RECIPES),
    };
  }

  render() {
		const { onPickRecipe } = this.props;
		const { dataSource } = this.state;

    return (
			<View>
				<ListView
					dataSource={dataSource}
					renderHeader={() =>
						<Text style={STYLES.TitleStyle}>
							Recipes
						</Text>
					}
					renderRow={(rowData) =>
						<RecipesItem
							onPickRecipe={onPickRecipe}
							recipe={rowData}
						/>
					}
					style={styles}
				/>
			</View>
    );
  }
}

Recipes.propTypes = {
	onPickRecipe: PropTypes.func.isRequired,
};

const styles = {
	paddingLeft: APP_PADDING,
	paddingRight: APP_PADDING,
};

export default Recipes;
