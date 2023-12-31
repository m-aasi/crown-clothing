import { all, call } from "redux-saga/effects";
import { categoriesSaga } from "../features/categories/categoriesSaga";
import { userSagas } from "../features/user/userSaga";

export function* rootSaga() {
  yield console.log("running");
  yield all([call(categoriesSaga), call(userSagas)]);
}
