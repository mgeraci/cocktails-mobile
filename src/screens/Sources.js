import React from "react";
import PropTypes from "prop-types";
import {
	View,
	ListView,
} from "react-native";

import { NAVIGATOR_SETTINGS } from "../util/consts";
import Storage from "../util/storage";
import { api } from "../util/web";
import ListPage from "../components/ListPage";
import ListItem from "../components/ListItem";

const Sources = (props) => {
	const onPress = (source) => {
		props.navigator.push({
			screen: "cocktails.Source",
			passProps: {
				name: source.name,
				slug: source.slug,
			}
		});
	};

	const fetchData = async () => {
		let sources;
		const data = await api("sources");

		if (data.sources) {
			sources = data.sources;

			await Storage.setSources(sources);
			return sources;
		} else {
			return { error: true };
		}
	};

	return (
		<ListPage
			title="Sources"
			getStoredData={Storage.getSources}
			fetchData={fetchData}
			item={ListItem}
			onPress={onPress}
			navigator={props.navigator}
		/>
	);
};

Sources.navigatorStyle = NAVIGATOR_SETTINGS;

export default Sources;
