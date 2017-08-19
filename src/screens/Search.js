import React, { Component } from "react";
import {
	View,
	ListView,
	TextInput,
	Image,
	TouchableHighlight,
} from "react-native";

import {
	NAVIGATOR_SETTINGS,
	SEARCH_SECTIONS,
	SEARCH_SECTION_TITLES,
} from "../util/consts";

import { CocktailText as Text } from "../components/CocktailText";
import ListItem from "../components/ListItem";
import Error from "../components/Error";
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
					data[key][data[key].length - 1].isLastChild = true;
					res[key] = data[key];
				} else {
					res[key] = [{
						empty: true,
						isLastChild: true,
					}];
				}
			}
		});

		return res;
	}

	_handleSubmit = async () => {
		let { query } = this.state;

		if (query === null || query === "") {
			return;
		}

		this.setState({
			isSearching: true,
			data: [],
			dataSource: this._generateDataSource(),
		});

		query = query.toLowerCase().replace(/^\s+|\s+$/g,'');

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
			isSearching: false,
		})
	}

	_onPress = (item, category) => {
		switch (category) {
			case (SEARCH_SECTIONS.recipe_titles_res): {
				return this.props.navigator.push({
					screen: "cocktails.Recipe",
					passProps: {
						name: item.name,
						slug: item.slug,
					}
				});

				break;
			}

			case (SEARCH_SECTIONS.recipe_ingredients_res): {
				return this.props.navigator.push({
					screen: "cocktails.Recipe",
					passProps: {
						name: item.name,
						slug: item.slug,
					}
				});

				break;
			}

			case (SEARCH_SECTIONS.ingredient_res): {
				return this.props.navigator.push({
					screen: "cocktails.Ingredient",
					passProps: {
						name: item.name,
						slug: item.slug,
					}
				});

				break;
			}

			default: {
				return () => {};
			}
		}
	}

	render() {
		const { data, query, isSearching } = this.state;
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
								placeholder="e.g., Gin or Manhattan"
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
						{isSearching &&
							<Image
								style={styles.spinner}
								source={require("../images/spinner.gif")}
							/>
						}
					</View>
				}

				renderSectionHeader={(sectionData, category) =>
					<View>
						<Text style={styles.listHeader}>
							{SEARCH_SECTION_TITLES[category]}
						</Text>
					</View>
				}

				renderRow={(row, category) =>
					<View>
						{!row.empty &&
							<ListItem
								item={row}
								onPress={() => {
									this._onPress(row, category)
								}}
							/>
						}
						{row.empty &&
							<Text style={styles.error}>
								No results
							</Text>
						}
						{row.isLastChild &&
							<View style={styles.lastChildSpacing} />
						}
					</View>
				}

				renderFooter={() => <View style={styles.footer} /> }
			/>
		);
	}
};

Search.navigatorStyle = NAVIGATOR_SETTINGS;

export default Search;
