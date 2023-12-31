import { takeLatest, all, call, put } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase.utils";
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
  fetchCategoriesStart,
} from "./categoriesSlice";

export function* fetchCategories() {
  try {
    yield console.log("Fetching categories");
    const categoryMap = yield call(getCategoriesAndDocuments);
    yield console.log(categoryMap);

    yield put(fetchCategoriesSuccess(categoryMap));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest("categories/fetchCategoriesStart", fetchCategories);
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}

/*
export function fetchCategoriesSuccess() {
    return async function (dispatch) {
      dispatch({ type: "categories/fetchCategoriesStart" });
      try {
        const categoryMap = await getCategoriesAndDocuments();
        console.log(categoryMap);
        dispatch({
          type: "categories/fetchCategoriesSuccess",
          payLoad: categoryMap,
        });
      } catch (error) {
        return { type: "categories/fetchCategoriesFailed", payLoad: error };
      }
    };
  }

  */
