import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.scss";
import { Link, Outlet } from "react-router-dom";
export default function CategoryPreview({ title, products }) {
  return (
    <>
      <div className="category-preview-container">
        <h2>
          <Link to={title} className="title">
            {title.toUpperCase()}
          </Link>
        </h2>
        <div className="preview">
          {products
            .filter((_, i) => i < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product}></ProductCard>
            ))}
        </div>
      </div>
    </>
  );
}
