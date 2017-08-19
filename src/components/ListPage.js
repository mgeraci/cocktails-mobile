import React, { Component } from "react";
import PropTypes from "prop-types";
import {
	View,
	ListView,
} from "react-native";

import { api } from "../util/web";
import Storage from "../util/storage";
import { CocktailText as Text } from "./CocktailText";
import ListFooter from "./ListFooter";
import Error from "./Error";

import styles from "./ListPage.css.js";

class ListPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dataSource: false,
		};
	}

	async componentDidMount() {
		const { getStoredData, fetchData } = this.props;

		let data = await getStoredData();

		if (
			(typeof(data) === "undefined" || data === null) ||
			(data.error || !data.length)
		) {
			data = await fetchData();
		}

		if (data.error) {
			this.setState({ error: true });
			return;
		}

		this._setDataSource(data);
	}

	_setDataSource(data) {
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

		this.setState({
			dataSource: ds.cloneWithRows(data),
		});
	}

	render() {
		const { title, onPress, navigator } = this.props;
		const { dataSource, error } = this.state;

		return (
			<View style={styles.wrapper}>
				{dataSource &&
					<ListView
						dataSource={dataSource}
						renderHeader={() =>
							<Text style={styles.title}>
								{title}
							</Text>
						}
						renderRow={(rowData) =>
							<this.props.item
								item={rowData}
								onPress={onPress}
							/>
						}
						renderFooter={() =>
							<ListFooter
								navigator={navigator}
							/>
						}
						style={styles.list}
					/>
				}
				{error &&
					<View style={styles.errorWrapper}>
						<Text>There was a problem loading {title.toLowerCase()}.</Text>
					</View>
				}
			</View>
		);
	}
}

ListPage.propTypes = {
	title: PropTypes.string.isRequired,
	getStoredData: PropTypes.func.isRequired,
	fetchData: PropTypes.func.isRequired,
	item: PropTypes.func.isRequired,
	onPress: PropTypes.func.isRequired,
	navigator: PropTypes.object.isRequired,
};

export default ListPage;
