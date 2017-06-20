import React, { Component } from "react";
import {
	View,
	TextInput,
	TouchableHighlight,
} from "react-native";

import { CocktailText as Text } from "../components/CocktailText";
import { NAVIGATOR_SETTINGS } from "../util/consts";

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
			[fields[0].name]: "foo",
			[fields[1].name]: "bar",
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

	_handleSubmit = () => {
		console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
		console.log(this.state);
	}

	render() {
		return (
			<View style={styles.wrapper}>
				<Text style={styles.title}>
					Log In
				</Text>
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
							returnKeyType={field.name === "password" ? "go" : "next"}
							secureTextEntry={field.name === "password"}
						/>
					</View>
				)}
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
			</View>
		);
	}
}

export default Login;
