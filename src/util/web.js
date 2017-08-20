const API_ROOTS = {
	dev: "http://localhost:8000/",
	prod: "https://cocktails.michaelgeraci.com/",
};

const API_SUFFIX = "api=1";

const getApiPath = (path) => {
	let suffix;

	if (path.indexOf("?") < 0) {
		suffix = `?${API_SUFFIX}`;
	} else {
		suffix = `&${API_SUFFIX}`;
	}

	return `${API_ROOTS.prod}${path}${suffix}`;
}

export const api = async (_path) => {
	const path = getApiPath(_path);

	try {
		const response = await fetch(path, {
			method: "GET",
		});
		const responseJson = await response.json();

		return responseJson;
	} catch (e) {
		return { error: true };
	}
}
