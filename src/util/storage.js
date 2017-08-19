import { AsyncStorage } from "react-native";

import { STORAGE_KEY } from "./consts";
const error = { error: true };

const storageKeys = {
	sessionKey: "sessionKey",
	recipes: "recipes",
	recipe: "recipe",
	ingredients: "ingredients",
	sources: "sources",
	search: "search",
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

// e.g., key: "search", prefix: "gin", value: search results for "gin"
async function setPrefixedItem({ key, prefix, value }) {
	if (!storageKeys[key]) {
		return error;
	}

	if (value === null || typeof value === "undefined") {
		return error;
	}

	let data = await getItem(key);

	// if this is the first load, or if there's a problem with the async call,
	// default to an epty object
	if (data.error) {
		data = {};
	}

	data[prefix] = value;

	const _key = getKey(key);
	const _value = JSON.stringify(data);

	try {
		await AsyncStorage.setItem(
			_key,
			_value,
		);
	} catch (e) {
		return error;
	}
};

// e.g., key: "search", prefix: "gin"
async function getPrefixedItem({ key, prefix }) {
	if (!storageKeys[key]) {
		return error;
	}

	let data = await getItem(key);

	// if this is the first load, or if there's a problem with the async call,
	// default to an epty object
	if (data.error) {
		data = {};
	}

	data = data[prefix] || error;
	return data;
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

	getRecipe: async (recipeTitle) => {
		return await getPrefixedItem({
			key: storageKeys.recipe,
			prefix: recipeTitle,
		});
	},

	setRecipe: async (recipeTitle, recipeContents) => {
		return await setPrefixedItem({
			key: storageKeys.recipe,
			prefix: recipeTitle,
			value: recipeContents,
		});
	},

	getIngredients: async () => {
		return await getItem(storageKeys.ingredients);
	},

	setIngredients: async (value) => {
		setItem(storageKeys.ingredients, value);
	},

	getSources: async () => {
		return await getItem(storageKeys.sources);
	},

	setSources: async (value) => {
		setItem(storageKeys.sources, value);
	},

	setSearch: async (query, results) => {
		return await setPrefixedItem({
			key: storageKeys.search,
			prefix: query,
			value: results,
		});
	},

	getSearch: async (query) => {
		return await getPrefixedItem({
			key: storageKeys.search,
			prefix: query,
		});
	},
};
