import Storage from "./storage";

const API_ROOTS = {
	dev: "http://localhost:8000/",
	prod: "https://cocktails.michaelgeraci.com/",
};

const API_SUFFIX = "?api=1";

const getApiPath = (path) => {
	return `${API_ROOTS.dev}${path}${API_SUFFIX}`;
}

export const api = async (_path) => {
	const path = getApiPath(_path);
	const sessionKey = await Storage.getSessionKey();
	const headers = {};

	if (sessionKey) {
		headers.sessionid = sessionKey;
	}

	try {
		const response = await fetch(path, {
			method: "GET",
			headers,
		});
		const responseJson = await response.json();

		return responseJson;
	} catch (e) {
		return { error: true };
	}
}

export const login = async ({ username, password }) => {
	const path = getApiPath("api_login/");

	try {
		const response = await fetch(path, {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			body: JSON.stringify({ username, password }),
		});

		const responseJson = await response.json();

		return responseJson;
	} catch (e) {
		return { error: true };
	}
}
