import React from "react";
import PropTypes from "prop-types";
import {
  View,
	Image,
} from "react-native";

export default Glass = (props) => {
	const { style, glass } = props;

	const cocktail = require("../images/glass-cocktail.png");
	const collins = require("../images/glass-collins.png");
	const flute = require("../images/glass-flute.png");
	const martini = require("../images/glass-martini.png");
	const rocks = require("../images/glass-rocks.png");
	const snifter = require("../images/glass-snifter.png");

	let src;

	switch (glass) {
		case "cocktail": {
			src = cocktail;
			break;
		}

		case "collins": {
			src = collins;
			break;
		}

		case "flute": {
			src = flute;
			break;
		}

		case "martini": {
			src = martini;
			break;
		}

		case "rocks": {
			src = rocks;
			break;
		}

		case "snifter": {
			src = snifter;
			break;
		}

		default: {
			src = false;
			break;
		}
	}

	if (!src) {
		return null;
	}

	return (
		<Image
			style={style}
			source={src}
		/>
	);
};

Glass.propTypes = {
	style: PropTypes.object.isRequired,
	glass: PropTypes.string,
};
