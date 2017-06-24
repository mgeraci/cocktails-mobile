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

	_handleSubmit = () => {
		const { query } = this.state;
		console.log("submitting", query);
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
