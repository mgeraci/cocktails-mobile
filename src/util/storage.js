import { AsyncStorage } from "react-native";

import { STORAGE_KEY } from "./consts";
const error = { error: true };

const storageKeys = {
	recipes: "recipes",
	recipe: "recipe",
	ingredients: "ingredients",
	sources: "sources",
	searches: "searches",
};

function getKey(key) {
	return `${STORAGE_KEY}.${key}`;
}

export default {
	getRecipes: async (key) => {
		try {
			let data = await AsyncStorage.getItem(getKey(storageKeys.recipes));

			if (typeof data !== "string") {
				return error;
			}

			data = JSON.parse(data);

			return data;
		} catch (e) {
			return error;
		}
	},

	setRecipes: async (_value) => {
		if (_value === null || typeof _value === "undefined") {
			return error;
		}

		const value = JSON.stringify(_value);

		try {
			await AsyncStorage.setItem(
				getKey(storageKeys.recipes),
				value,
			);
		} catch (e) {
			return error;
		}
	},
};
