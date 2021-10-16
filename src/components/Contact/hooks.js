// LifeCycle Hook
import { useState } from "react";
// Apollo
import { useMutation } from "@apollo/client";
// Mutation
import { postContactDataMutation } from "../../utils";
// Redux Hook
import { useDispatch, useSelector } from "react-redux";
// Actions
import {
	contactSendMailAction,
} from "../../redux/Actions";

const useContactHook = () => {
	// Dispatcher
	const dispatch = useDispatch();

	// State
	const [contact, setContact] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	// Mutation Query
	const [contactMutation, { data, error, loading }] = useMutation(
		postContactDataMutation
	);

	const sendEmail = (data) => {
		dispatch(contactSendMailAction(data));
	};

	// Selector
	// const MailResponse = useSelector((state) => state.ContactReducer);

	return {
		data,
		error,
		contact,
		loading,
		sendEmail,
		setContact,
		contactMutation,
	};
};

export default useContactHook;
