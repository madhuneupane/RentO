import React from "react";

const SingUpReducer = (state, action) => {
  switch (action.type) {
    case "firstName":
      return { ...state, firstName: action.value };
    case "lastName":
      return { ...state, lastName: action.value };
    case "email":
      return { ...state, email: action.value };
    case "password":
      return { ...state, password: action.value };
    case "contactNumber":
      return { ...state, contactNumber: action.value };
    default:
      return state;
  }
};

export default SingUpReducer;
