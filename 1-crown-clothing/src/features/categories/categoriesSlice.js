// import { createSlice } from "@reduxjs/toolkit";

const categoriesInitialState = {
  categoriesMap: {},
};

export default function categoriesReducer(
  state = categoriesInitialState,
  action
) {
  switch (action.type) {
    case "categories/setCategoriesMap":
      return { ...state, categoriesMap: action.payLoad };

    default:
      return state;
  }
}

export function setCategoriesMap(categoryMap) {
  return { type: "categories/setCategoriesMap", payLoad: categoryMap };
}
