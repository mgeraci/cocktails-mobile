import React from "react";
import PropTypes from "prop-types";
import {
	TouchableHighlight,
	View,
} from 'react-native';

import { CocktailText as Text } from "./CocktailText";

import styles from "./ListItem.css.js";

const ListItem = (props) => {
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

ListItem.propTypes = {
	item: PropTypes.object.isRequired,
	onPress: PropTypes.func.isRequired,
};

export default ListItem;
