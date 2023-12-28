import { useSelector } from "react-redux";

import CategoryPreview from "../components/category-preview/category-preview.component";
import NavigationBar from "../components/navigation-bar/navigation.component";

import "./categoryPreviewPage.styles.scss";
import Spinner from "../components/spinner/spinner.component";

export default function CategoryPreviewPage() {
  const categoriesMap = useSelector((state) => state.categories.categoriesMap);
  const isLoading = useSelector((state) => state.categories.isLoading);
  // const { categoriesMap } = useCategories();

  return (
    <>
      <NavigationBar />
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          {Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
            return (
              <CategoryPreview key={title} title={title} products={products} />
            );
          })}
        </div>
      )}
    </>
  );
}
