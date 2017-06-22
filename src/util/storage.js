import { AsyncStorage } from "react-native";

import { STORAGE_KEY } from "./consts";
const error = { error: true };

const storageKeys = {
	sessionKey: "sessionKey",
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

async function getItem(key) {
	if (!storageKeys[key]) {
		return error;
	}

	try {
		let data = await AsyncStorage.getItem(getKey(key));

		if (typeof data !== "string") {
			return error;
		}

		data = JSON.parse(data);

		return data;
	} catch (e) {
		return error;
	}
};

async function setItem(key, _value) {
	if (!storageKeys[key]) {
		return error;
	}

	if (_value === null || typeof _value === "undefined") {
		return error;
	}

	const value = JSON.stringify(_value);

	try {
		await AsyncStorage.setItem(
			getKey(storageKeys[key]),
			value,
		);
	} catch (e) {
		return error;
	}
};

export default {
	setSessionKey: async (sessionKey) => {
		try {
			await AsyncStorage.setItem(
				getKey(storageKeys.sessionKey),
				sessionKey,
			);
		} catch (e) {
			return error;
		}
	},

	getSessionKey: async () => {
		try {
			let data = await AsyncStorage.getItem(getKey(storageKeys.sessionKey));

			if (typeof data !== "string") {
				return error;
			}

			return data;
		} catch (e) {
			return error;
		}
	},

	getRecipes: async () => {
		return await getItem(storageKeys.recipes);
	},

	setRecipes: async (value) => {
		setItem(storageKeys.recipes, value);
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

	getIngredients: async () => {
		return await getItem(storageKeys.ingredients);
	},

	setIngredients: async (value) => {
		setItem(storageKeys.ingredients, value);
	},
};
