import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Recipe from "./src/Recipe";

export default class CocktailsMobile extends Component {
  render() {
    return (
      <View style={styles.container}>
				<Recipe />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('CocktailsMobile', () => CocktailsMobile);
