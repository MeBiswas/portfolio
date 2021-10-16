// API URI
const api_uri = "http://localhost:4000/api";

// API Generator
export async function postRequest(endpoint, body) {
	const response = await fetch(api_uri + endpoint, {
		method: "POST",
		body: JSON.stringify(body),
		headers: {
			Accept: "application/json",
			"Access-Control-Allow-Origin": "*",
			"Content-Type": "application/json; charset=UTF-8",
		},
	})
		.then((response) => {
			return response;
		})
		.catch((err) => {
			throw err;
		});
	return response;
}
