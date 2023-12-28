// import { createSlice } from "@reduxjs/toolkit";
const userInitialState = {
  currentUser: null,
  setCurrentUser: () => null,
};

export default function userReducer(state = userInitialState, action) {
  switch (action.type) {
    case "user/setCurrentUser":
      return { ...state, currentUser: action.payLoad };

    default:
      return state;
  }
}

export function setCurrentUser(user) {
  return { type: "user/setCurrentUser", payLoad: user };
}
