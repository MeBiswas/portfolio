// LifeCycle Hook
import { useState } from "react";
// Apollo
import { useMutation } from "@apollo/client";
// Mutation
import { postContactDataMutation } from "../../utils";

const useContactHook = () => {
	const [contact, setContact] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

  const [contactMutation, { data, error, loading }] = useMutation(
		postContactDataMutation
	);

  return {
    data,
    error,
    contact,
    loading,
    setContact,
    contactMutation,
  }
};

export default useContactHook;
