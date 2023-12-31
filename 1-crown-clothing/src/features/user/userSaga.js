import { takeLatest, call, all, put, take } from "redux-saga/effects";

import {
  signInSuccess,
  signInFailed,
  signUpSuccess,
  signUpFailed,
  signOutFailed,
  signOutSuccess,
} from "../user/userSlice";

import {
  getCurrentUser,
  createUserDocumentFromAuth,
  userAuthWithGooglePopup,
  signInUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutUser,
} from "../../utils/firebase.utils";

export function* getSnapShotFromUserAuth(userAuth, additionalInfo) {
  try {
    const userSnapShot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalInfo
    );

    yield put(signInSuccess(userSnapShot));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInWithGoogle() {
  //   console.log("Running signInWithGoogle");
  try {
    const { user } = yield call(userAuthWithGooglePopup);
    yield console.log(user);
    yield call(createUserDocumentFromAuth, user);
    yield put(signInSuccess(user));
  } catch (error) {
    yield put(signInFailed(error));
  }
}
export function* signInWithEmail({ payLoad: { email, password } }) {
  yield console.log(email, password);
  try {
    const { user } = yield call(
      signInUserWithEmailAndPassword,
      email,
      password
    );
    yield console.log(user);

    yield call(getSnapShotFromUserAuth, user);
    yield put(signInSuccess(user));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signUp({ payLoad: { email, password, displayName } }) {
  try {
    // console.log(email, password);
    // console.log("Hit");
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    // console.log(user);
    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    yield put(signUpFailed(error));
  }
}
export function* signInAfterSignUp({ payLoad: { user, additionalInfo } }) {
  yield call(getSnapShotFromUserAuth, user, additionalInfo);
}
export function* isUserAuthenticated() {
  // console.log("hittin isuserauthenticated");
  try {
    const userAuth = yield call(getCurrentUser);

    if (!userAuth) return;
    yield call(getSnapShotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}
export function* signOut() {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailed(error));
  }
}
export function* onSignOutStart() {
  yield takeLatest("user/signOutStart", signOut);
}
export function* onSignUpSuccess() {
  yield takeLatest("user/signUpSuccess", signInAfterSignUp);
}
export function* onSignUpStart() {
  yield takeLatest("user/signUpStart", signUp);
}
export function* onEmailSignInStart() {
  yield takeLatest("user/emailSignInStart", signInWithEmail);
}
export function* ongoogleSignInStart() {
  yield takeLatest("user/googleSignInStart", signInWithGoogle);
}

export function* onCheckUserSession() {
  yield takeLatest("user/checkUserSession", isUserAuthenticated);
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(ongoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
