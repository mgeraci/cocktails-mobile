import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

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
