import React, { Component } from "react";
import {
	View,
	TextInput,
	TouchableHighlight,
	Image,
	ScrollView,
} from "react-native";

import { CocktailText as Text } from "../components/CocktailText";
import { NAVIGATOR_SETTINGS } from "../util/consts";
import { login } from "../util/web";
import Storage from "../util/storage";

import styles from "./Login.css.js";

const fields = [
	{
		title: "Username",
		name: "username",
	},
	{
		title: "Password",
		name: "password",
	},
];

class Login extends Component {
	static navigatorStyle = NAVIGATOR_SETTINGS;

	constructor(props) {
		super(props);

		this.state = {
			[fields[0].name]: "",
			[fields[1].name]: "",
		};
	}

	_handlers = {
		[fields[0].name]: (val) => {
			this._handleChange(fields[0].name, val);
		},
		[fields[1].name]: (val) => {
			this._handleChange(fields[1].name, val);
		},
	}

	_handleChange = (name, val) => {
		this.setState({ [name]: val });
	}

	_handleSubmit = async () => {
		const { username, password, isSubmitting } = this.state;

		// short circuit on blank
		if (username === "" || password === "") {
			this.setState({
				error: "Your username or password was blank.",
			});

			return;
		}

		// short circuit if already submitting
		if (isSubmitting) {
			return;
		}

		this.setState({
			isSubmitting: true,
		});

		const res = await login({ username, password });

		if (res.error) {
			this.setState({
				isSubmitting: false,
				error: "Your username or password was incorrect.",
			});
		} else {
			if (res.session_key) {
				await Storage.setSessionKey(res.session_key);
			}

			// reset the information that could change when authenticated
			await Storage.setRecipes([]);
			await Storage.setIngredients([]);
			await Storage.setSources([]);
			await Storage.clearSearch();
			await Storage.clearRecipes();

			const checkStorage = await Storage.getSources();

			this.props.navigator.switchToTab({
				tabIndex: 0,
			});
		}
	}

	render() {
		const { isSubmitting, error } = this.state;

		return (
			<ScrollView style={styles.wrapper} scrollEnabled={false}>
				<Text style={styles.title}>
					Log In
				</Text>
				{error &&
					<View style={styles.error}>
						<Text>
							{error}
						</Text>
					</View>
				}
				{fields.map((field, i) =>
					<View key={i}>
						<Text style={styles.label}>
							{field.title}
						</Text>
						<TextInput
							name={field.name}
							value={this.state[field.name]}
							onChangeText={this._handlers[field.name]}
							style={styles.input}
							keyboardType={field.name === "username" ? "email-address" : "default"}
							returnKeyType="go"
							secureTextEntry={field.name === "password"}
							onSubmitEditing={this._handleSubmit}
						/>
					</View>
				)}

				<View style={styles.submitRow}>
					<TouchableHighlight
						onPress={this._handleSubmit}
						style={styles.submitWrapper}
					>
						<View style={styles.submit}>
							<Text style={styles.submitText}>
								Log in
							</Text>
						</View>
					</TouchableHighlight>
					{isSubmitting &&
						<Image
							style={styles.spinner}
							source={require("../images/spinner.gif")}
						/>
					}
				</View>
			</ScrollView>
		);
	}
}

export default Login;
