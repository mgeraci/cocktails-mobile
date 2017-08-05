import React, { Component } from "react";
import {
	View,
	ListView,
	TextInput,
	TouchableHighlight,
} from "react-native";

import {
	NAVIGATOR_SETTINGS,
	SEARCH_SECTIONS,
} from "../util/consts";
import { CocktailText as Text } from "../components/CocktailText";
import ListFooter from "../components/ListFooter";
import Storage from "../util/storage";
import { api } from "../util/web";

import styles from "./Search.css.js";

class Search extends Component {
	constructor(props) {
		super(props);

		const dataSource = this._generateDataSource();

		this.state = {
			query: "",
			dataSource: dataSource.cloneWithRowsAndSections({}),
		};
	}

	_handleChange = (query) => {
		this.setState({ query });
	}

	_generateDataSource = () => {
		return new ListView.DataSource({
			 rowHasChanged: (r1, r2) => r1 !== r2,
			 sectionHeaderHasChanged: (s1, s2) => s1 !== s2
		 });
	}

	_prepareDataForListview = (data) => {
		const res = {};

		Object.keys(data).forEach((key) => {
			if (SEARCH_SECTIONS[key]) {
				if (data[key].length) {
					res[key] = data[key];
				} else {
					res[key] = { empty: true };
				}
			}
		});

		return res;
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
			data = storedSearch;
		} else {
			data = await api(`search?query=${query}`);
			await Storage.setSearch(query, data);
		}

		const listViewData = this._prepareDataForListview(data);
		const dataSource = this._generateDataSource();

		this.setState({
			data,
			dataSource: dataSource.cloneWithRowsAndSections(listViewData),
		})
	}

	render() {
		const { data, query } = this.state;
		const hasResults = data && !data.no_results;
		const hasError = data && !!data.no_results;

		return (
			<ListView
				enableEmptySections
				style={styles.wrapper}
				dataSource={this.state.dataSource}

				renderHeader={() =>
					<View>
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
					</View>
				}

				renderSectionHeader={(sectionData, category) => {
					return (
						<Text>{SEARCH_SECTIONS[category]}</Text>
					);
				}}

				renderRow={(row, category) =>
					<Text>{row.name} {category}</Text>
				}

				renderFooter={() => <View style={styles.footer} /> }
			/>
		);
	}
};

Search.navigatorStyle = NAVIGATOR_SETTINGS;

export default Search;
