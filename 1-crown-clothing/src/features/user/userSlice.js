// import { createSlice } from "@reduxjs/toolkit";
const userInitialState = {
  currentUser: null,
  setCurrentUser: () => null,
  isLoading: false,
  error: null,
};

export default function userReducer(state = userInitialState, action) {
  switch (action.type) {
    // case "user/setCurrentUser":
    //   return { ...state, currentUser: action.payLoad };

    // case "user/checkUserSession":
    //   return { ...state };
    // case "user/googleSignInStart":
    //   return { ...state };
    // case "user/emailSignInStart":
    //   return { ...state };
    case "user/signInSuccess":
      return { ...state, currentUser: action.payLoad };
    case "user/signOutSuccess":
      return { ...state, currentUser: null };
    case "user/signInFailed":
    case "user/signOutFailed":
    case "user/signUpFailed":
      return { ...state, error: action.payLoad };

    default:
      return state;
  }
}

export function setCurrentUser(user) {
  // console.log("user", user);
  return { type: "user/setCurrentUser", payLoad: user };
}

export function checkUserSession() {
  return { type: "user/checkUserSession" };
}

export function googleSignInStart() {
  return { type: "user/googleSignInStart" };
}
export function emailSignInStart(email, password) {
  return { type: "user/emailSignInStart", payLoad: { email, password } };
}
export function signInSuccess(user) {
  return { type: "user/signInSuccess", payLoad: user };
}

export function signInFailed(error) {
  return { type: "user/signInFailed", payLoad: error };
}
export function signUpStart(email, password, displayName) {
  return {
    type: "user/signUpStart",
    payLoad: { email, password, displayName },
  };
}

export function signUpSuccess(user, additionalInfo) {
  return { type: "user/signUpSuccess", payLoad: { user, additionalInfo } };
}

export function signUpFailed(error) {
  return { type: "user/signUpFailed", payLoad: error };
}

export function signOutStart() {
  return { type: "user/signOutStart" };
}

export function signOutSuccess() {
  return { type: "user/signOutSuccess" };
}

export function signOutFailed(error) {
  return { type: "user/signOutStart", payLoad: error };
}
