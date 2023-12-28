import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import { addCollectionAndDocuments } from "../utils/firebase.utils";
import { getCategoriesAndDocuments } from "../utils/firebase.utils";
// import { SHOP_DATA } from "../../shop-data";

const CategoriesContext = createContext({ categoriesMap: {} });

const initialState = {
  categoriesMap: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "categories/setCategoriesMap":
      return { ...state, categoriesMap: action.payLoad };

      break;

    default:
      break;
  }
}

function CategoriesProvider({ children }) {
  // const [categoriesMap, setCategoriesMap] = useState({});
  const [{ categoriesMap }, dispatch] = useReducer(reducer, initialState);
  const value = { categoriesMap };
  // useEffect(function () {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  useEffect(function () {
    async function getCategories() {
      const categoryMap = await getCategoriesAndDocuments();
      // console.log(categoryMap);
      // setCategoriesMap(categoryMap);
      dispatch({ type: "categories/setCategoriesMap", payLoad: categoryMap });
    }
    getCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
}

function useCategories() {
  const context = useContext(CategoriesContext);
  return context;
}

export { CategoriesProvider, useCategories };
