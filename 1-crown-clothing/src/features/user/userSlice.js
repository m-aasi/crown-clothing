import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentUser: null,
  setCurrentUser: () => null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    checkUserSession() {},
    signInSuccess(state, action) {
      state.currentUser = action.payLoad;
    },

    signOutSuccess(state, action) {
      state.currentUser = null;
    },

    signUpSuccess(state, action) {
      state.currentUser = action.payLoad;
    },

    signInFailed(state, action) {
      state.error = action.payLoad;
    },

    signOutFailed(state, action) {
      state.error = action.payLoad;
    },
    signUpFailed(state, action) {
      state.error = action.payLoad;
    },
  },
});

export const {
  setCurrentUser,
  checkUserSession,
  signOutSuccess,
  signOutFailed,
  signInSuccess,
  signInFailed,
  signUpSuccess,
  signUpFailed,
} = userSlice.actions;
export default userSlice.reducer;

/*
export default function userReducer(state = initialState, action) {
  switch (action.type) {
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
*/
// export function setCurrentUser(user) {
//   return { type: "user/setCurrentUser", payLoad: user };
// }

// export function checkUserSession() {
//   return { type: "user/checkUserSession" };
// }

export function googleSignInStart() {
  return { type: "user/googleSignInStart" };
}
export function emailSignInStart(email, password) {
  return { type: "user/emailSignInStart", payLoad: { email, password } };
}
/*
export function signInSuccess(user) {
  return { type: "user/signInSuccess", payLoad: user };
}

export function signInFailed(error) {
  return { type: "user/signInFailed", payLoad: error };
}
*/
export function signUpStart(email, password, displayName) {
  return {
    type: "user/signUpStart",
    payLoad: { email, password, displayName },
  };
}

/*

export function signUpSuccess(user, additionalInfo) {
  return { type: "user/signUpSuccess", payLoad: { user, additionalInfo } };
}

export function signUpFailed(error) {
  return { type: "user/signUpFailed", payLoad: error };
}
*/

export function signOutStart() {
  return { type: "user/signOutStart" };
}

/*
export function signOutSuccess() {
  return { type: "user/signOutSuccess" };
}

export function signOutFailed(error) {
  return { type: "user/signOutStart", payLoad: error };
}

*/
