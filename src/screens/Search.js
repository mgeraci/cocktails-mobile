import React, { Component } from "react";
import {
	View,
	TextInput,
	TouchableHighlight,
} from "react-native";

import { NAVIGATOR_SETTINGS } from "../util/consts";
import { CocktailText as Text } from "../components/CocktailText";
import Storage from "../util/storage";
import { api } from "../util/web";

import styles from "./Search.css.js";

class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hasResults: false,
			query: "",
		};
	}

	_handleChange = (query) => {
		this.setState({ query });
	}

	_handleSubmit = async () => {
		const { query } = this.state;

		if (query === null || query === "") {
			return;
		}

		// try getting the search from storage
		const storedSearch = await Storage.getSearch(query);
		let data;

		if (storedSearch !== null && !storedSearch.error) {
			console.log("we gots a search");
			data = storedSearch;
		} else {
			console.log("hitting the api");
			data = await api(`search?query=${query}`);
			await Storage.setSearch(query, data);
		}

		console.log(data);
	}

	render() {
		const { hasResults, query } = this.state;

		return (
			<View style={styles.wrapper}>
				<Text style={styles.title}>
					Search
				</Text>
				<View style={styles.searchRow}>
					<TextInput
						name="query"
						value={query}
						style={styles.input}
						returnKeyType="go"
						onChangeText={this._handleChange}
						onSubmitEditing={this._handleSubmit}
					/>
					<TouchableHighlight
						style={styles.buttonWrapper}
						onPress={this._handleSubmit}
					>
						<View style={styles.button}>
							<Text style={styles.buttonText}>
								Search
							</Text>
						</View>
					</TouchableHighlight>
				</View>
				{hasResults &&
					<Text>
						show results
					</Text>
				}
			</View>
		);
	}
};

Search.navigatorStyle = NAVIGATOR_SETTINGS;

export default Search;
