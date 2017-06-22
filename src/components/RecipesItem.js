import React from "react";
import PropTypes from "prop-types";
import {
	TouchableHighlight,
	View,
} from 'react-native';

import { COLORS } from "../util/style_consts";
import { CocktailText as Text } from "./CocktailText";

import styles from "./RecipesItem.css.js";

const RecipesItem = (props) => {
	const { item, onPress } = props;

	function _handlePress() {
		onPress(item);
	}

	return (
		<TouchableHighlight
			onPress={_handlePress}
		>
			<View>
				<Text style={styles.button}>
					{item.name}
				</Text>
			</View>
		</TouchableHighlight>
	);
};

RecipesItem.propTypes = {
	item: PropTypes.object.isRequired,
	onPress: PropTypes.func.isRequired,
};

export default RecipesItem;
