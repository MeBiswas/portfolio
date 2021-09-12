// Axios
import axios from "axios";
// Action Types
import { actionTypes } from "../Constants";

export const fetchIntro = async (dispatch) => {
  await axios
  .get("https://jsonplaceholder.typicode.com/users?_limit=1")
  .then((res) => {
			dispatch({
        type: actionTypes.GET_INTRO,
        payload: res.data
      })
		})
		.catch((err) => {
			console.log("fetchIntro Action Error", err);
		});
};