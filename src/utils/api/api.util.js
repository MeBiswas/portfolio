import axios from "axios";

// API URI
const api_uri = "http://localhost:4000/api";

// Axios Post API
export async function axiosPostRequest(endpoint, body) {
  const response = await axios
    .post(api_uri + endpoint, body)
    .then((res) => res)
    .catch((err) => {
      throw err;
    });
  return response;
}
