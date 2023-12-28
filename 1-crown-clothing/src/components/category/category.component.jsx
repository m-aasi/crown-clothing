import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { useCategories } from "../../contexts/categoriesContext";
import ProductCard from "../product-card/product-card.component";
import "./category.styles.scss";
import NavigationBar from "../navigation-bar/navigation.component";
import Spinner from "../spinner/spinner.component";
export default function Category() {
  const { category } = useParams();
  // const { categoriesMap } = useCategories();
  const categoriesMap = useSelector((state) => state.categories.categoriesMap);
  const isLoading = useSelector((state) => state.categories.isLoading);

  const [products, setProducts] = useState([categoriesMap[category]]);

  useEffect(() => {
    // Check if categoriesMap is available and title is valid
    if (categoriesMap && category && categoriesMap[category]) {
      setProducts(categoriesMap[category]);
    }
  }, [categoriesMap, category]);

  return (
    <>
      <NavigationBar />
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}
