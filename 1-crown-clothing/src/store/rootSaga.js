import { all, call } from "redux-saga/effects";
import { categoriesSaga } from "../features/categories/categoriesSaga";

export function* rootSaga() {
  yield console.log("running");
  yield all([call(categoriesSaga)]);
}
