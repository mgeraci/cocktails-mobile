import React, { Component } from "react";
import PropTypes from "prop-types";
import { Fraction } from "fractional"
import {
  StyleSheet,
  View
} from 'react-native';

import { FRACTIONS } from "../util/consts";
import { CocktailText as Text } from "./CocktailText";

const fractionLookup = {
};

function formatAmount(fraction) {
	const numeratorLookup = fraction.numerator % fraction.denominator;
	const { numerator, denominator } = fraction;
	const int = Math.floor(numerator / denominator);
	let fractionCharacter;

	if (FRACTIONS[numeratorLookup] && FRACTIONS[numeratorLookup][denominator]) {
		fractionCharacter = FRACTIONS[numeratorLookup][denominator];
	}

	if (fractionCharacter) {
		if (int) {
			return `${int} ${fractionCharacter}`;
		} else {
			return fractionCharacter;
		}
	} else {
		return fraction.toString()
	}
}

const Ingredient = (props) => {
	const { quantity, ingredient } = props;
	const { amount, unit, name } = ingredient;

	let currentFraction = new Fraction(amount.numerator, amount.denominator)
		.multiply(quantity);

	let currentUnit = unit.singular;

	if (quantity > 1) {
		currentUnit = unit.plural;
	}

	return (
		<View>
			<Text>
				{formatAmount(currentFraction)}
				{" "}
				{currentUnit}
				{" "}
				{name}
			</Text>
		</View>
	);
};

Ingredient.propTypes = {
	ingredient: PropTypes.object.isRequired,
	quantity: PropTypes.number.isRequired,
};

export default Ingredient;
