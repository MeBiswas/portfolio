import React from "react";
// Custom Hook
import useContactHook from "./hooks";
// View
import ContactComponent from "./view";

const Contact = () => {
	// Destructuring Custom Hook
	const { 
		error, 
		contact, 
		loading, 
		sendEmail, 
		setContact, 
		contactMutation 
	} = useContactHook();

	// Input Change Handler Method
	const changeHandler = (e, key) => {
		setContact({ ...contact, [key]: e.target.value });
	};

	// Form Submit Handler Method
	const submitHandler = (e) => {
		if (
			contact.name !== "" &&
			contact.email !== "" &&
			contact.subject !== "" &&
			contact.message !== ""
		) {
			e.preventDefault();
			sendEmail(contact);
			contactMutation({
				variables: {
					name: contact.name,
					email: contact.email,
					subject: contact.subject,
					message: contact.message,
				},
			});
			setContact({
				name: "",
				email: "",
				subject: "",
				message: "",
			});
		} else {
			return false;
		}
	};

	if (!error && loading) {
		return null;
	}
	return (
		<>
			<ContactComponent
				{...contact}
				change={changeHandler}
				submit={submitHandler}
			/>
		</>
	);
};

export default Contact;
