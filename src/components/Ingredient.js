import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import { CocktailText as Text } from "./CocktailText";

const Ingredient = (props) => {
	const { amount, unit, name } = props.ingredient;

	return (
		<View>
			<Text>
				{amount.numerator} / {amount.denominator}
				{" "}
				{unit.singular}
				{" "}
				{name}
			</Text>
		</View>
	);
};

export default Ingredient;
