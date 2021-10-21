// LifeCycle Hook
import { useState } from "react";
// Apollo
import { useMutation } from "@apollo/client";
// Mutation
import { postContactDataMutation } from "../../utils";
// Redux Hook
import { useDispatch } from "react-redux";
// Actions
import { contactSendMailAction } from "../../redux/Actions";

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

  // Dispatching Mail Action
  const sendEmail = (data) => {
    dispatch(contactSendMailAction(data));
  };

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
