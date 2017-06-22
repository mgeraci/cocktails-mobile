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

function getPrefixKey(key, value) {
	return `${STORAGE_KEY}.${key}.${value}`;
};

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

	clearRecipes: async () => {
		try {
			await AsyncStorage.removeItem(getKey(storageKeys.recipes));
		} catch (e) {
			return e;
		}
	},

	getRecipe: async (recipe) => {
		const key = getPrefixKey(storageKeys.recipe, recipe);

		try {
			let data = await AsyncStorage.getItem(key);

			if (typeof data !== "string") {
				return error;
			}

			data = JSON.parse(data);

			return data;
		} catch (e) {
			return error;
		}
	},

	setRecipe: async (recipe, _value) => {
		if (_value === null || typeof _value === "undefined") {
			return error;
		}

		const key = getPrefixKey(storageKeys.recipe, recipe);
		const value = JSON.stringify(_value);

		try {
			await AsyncStorage.setItem(
				key,
				value,
			);
		} catch (e) {
			return error;
		}
	},
};
