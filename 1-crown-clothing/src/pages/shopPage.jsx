import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCategoriesAndDocuments } from "../utils/firebase.utils";
// import { setCategoriesMap } from "../store/store";
import { fetchCategoriesSuccess } from "../features/categories/categoriesSlice";
import Category from "../components/category/category.component";
import CategoryPreviewPage from "./categoryPreviewPage";
import "./shopPage.styles.scss";

export default function Shop() {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(fetchCategoriesSuccess());
  }, []);
  return (
    <Routes>
      <Route index element={<CategoryPreviewPage />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}
