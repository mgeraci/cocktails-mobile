import React, { Component } from 'react';
import { Text } from 'react-native';

import { TextStyle } from "./util/style_consts";

export const CocktailText = (props) => {
	const inheritedStyles = props.style || {};

	return (
		<Text style={[TextStyle.TextStyle, inheritedStyles]}>
			{props.children}
		</Text>
	);
};
