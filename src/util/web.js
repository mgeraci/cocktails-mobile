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

	try {
		const response = await fetch(path, {
			method: "GET",
			// headers: {
			// },
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
		console.log("trying");
		const response = await fetch(path, {
			method: "POST",
		});

		const responseJson = await response.json();

		return responseJson;
	} catch (e) {
		return { error: true };
	}
}
