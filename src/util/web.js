const API_ROOTS = {
	dev: "http://localhost:8000/",
	prod: "https://cocktails.michaelgeraci.com/",
};

const API_SUFFIX = "?api=1";

export const api = async (_path) => {
	const path = `${API_ROOTS.dev}${_path}${API_SUFFIX}`;

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
