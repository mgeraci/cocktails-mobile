import React, { Component } from 'react';
import { Text } from 'react-native';

import { STYLES } from "../util/style_consts";

export const CocktailText = (props) => {
	const inheritedStyles = props.style || {};

	return (
		<Text style={[STYLES.TextStyle, inheritedStyles]}>
			{props.children}
		</Text>
	);
};
