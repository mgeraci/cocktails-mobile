import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
	View,
	StatusBar,
} from 'react-native';

import { COLORS } from "./src/util/style_consts";
import { CocktailText as Text } from "./src/CocktailText";

import Recipes from "./src/Recipes";
import Recipe from "./src/Recipe";

export default class CocktailsMobile extends Component {
	constructor(props) {
		super(props);

		this._pickRecipe = this._pickRecipe.bind(this);

		this.state = {
			activeRecipe: false,
		};
	}

	_pickRecipe() {
		this.setState({
			activeRecipe: true,
		});
	}

  render() {
		const { activeRecipe } = this.state;

    return (
      <View style={styles.container}>
				<StatusBar hidden />
				{activeRecipe &&
					<Recipe />
				}
				{!activeRecipe &&
					<Recipes
						onPickRecipe={this._pickRecipe}
					/>
				}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.purple,
  },
});

AppRegistry.registerComponent('CocktailsMobile', () => CocktailsMobile);
