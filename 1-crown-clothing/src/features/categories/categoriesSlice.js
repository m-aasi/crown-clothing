// import { createSlice } from "@reduxjs/toolkit";
import { getCategoriesAndDocuments } from "../../utils/firebase.utils";

const categoriesInitialState = {
  categoriesMap: {},
  isLoading: false,
  error: null,
};

export default function categoriesReducer(
  state = categoriesInitialState,
  action
) {
  switch (action.type) {
    case "categories/setCategoriesMap":
      return { ...state, categoriesMap: action.payLoad };
    case "categories/fetchCategoriesStart":
      return { ...state, isLoading: true };
    case "categories/fetchCategoriesSuccess":
      return { ...state, categoriesMap: action.payLoad, isLoading: false };
    case "categories/fetchCategoriesFailed":
      return { ...state, error: action.payLoad };
    default:
      return state;
  }
}

export function setCategoriesMap(categoryMap) {
  return { type: "categories/setCategoriesMap", payLoad: categoryMap };
}
export function fetchCategoriesStart() {
  return { type: "categories/fetchCategoriesStart" };
}
// export function fetchCategoriesSuccess() {
//   return async function (dispatch) {
//     dispatch({ type: "categories/fetchCategoriesStart" });
//     try {
//       const categoryMap = await getCategoriesAndDocuments();
//       console.log(categoryMap);
//       dispatch({
//         type: "categories/fetchCategoriesSuccess",
//         payLoad: categoryMap,
//       });
//     } catch (error) {
//       return { type: "categories/fetchCategoriesFailed", payLoad: error };
//     }
//   };
// }

export function fetchCategoriesSuccess(categoryMap) {
  return { type: "categories/fetchCategoriesSuccess", payLoad: categoryMap };
}
export function fetchCategoriesFailed(error) {
  return { type: "categories/fetchCategoriesFailed", payLoad: error };
}
