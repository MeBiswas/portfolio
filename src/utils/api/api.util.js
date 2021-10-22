import axios from "axios";

// Axios Post API
export async function axiosPostRequest(endpoint, body) {
  const response = await axios
    .post(process.env.REACT_APP_API_URI + endpoint, body)
    .then((res) => res)
    .catch((err) => {
      throw err;
    });
  return response;
}
