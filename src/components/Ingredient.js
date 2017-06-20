import React, { Component } from "react";
import PropTypes from "prop-types";
import { Fraction } from "fractional"
import {
  StyleSheet,
  View
} from 'react-native';

import { FRACTIONS } from "../util/consts";
import { CocktailText as Text } from "./CocktailText";

import styles from "./Ingredient.css.js";

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
	const { amount_num, amount_den, unit } = ingredient;

	let currentFraction = new Fraction(amount_num, amount_den)
		.multiply(quantity);

	let currentUnit = "";

	if (unit) {
		currentUnit = unit.name;

		if (quantity > 1) {
			currentUnit = unit.plural;
		}
	}

	return (
		<View style={styles.wrapper}>
			<Text style={styles.text}>
				{amount_num > 0 &&
					<Text>
						{formatAmount(currentFraction)}
						{" "}
					</Text>
				}
				{unit && !unit.after_ingredient &&
					<Text>
						{currentUnit}
						{" "}
					</Text>
				}
				{ingredient.ingredient.name}
				{unit && unit.after_ingredient &&
					<Text>
						{" "}
						{currentUnit}
					</Text>
				}
			</Text>
		</View>
	);
};

Ingredient.propTypes = {
	ingredient: PropTypes.object.isRequired,
	quantity: PropTypes.number.isRequired,
};

export default Ingredient;
