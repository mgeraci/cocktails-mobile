import { AsyncStorage } from "react-native";

import { STORAGE_KEY } from "./consts";

export function capitalize(s) {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

export const getData = async (key) => {
	try {
		const data = await AsyncStorage.getItem(STORAGE_KEY) || {};
		return data[key];
	} catch (e) {
		return { error: true };
	}
}
