import CategoryItem from "../category-item/category-item.component.jsx";
import NavigationBar from "../navigation-bar/navigation.component.jsx";
import "./directory.styles.css";

export default function Directory(categories) {
  return (
    <div className="categories-container">
      <NavigationBar />
      {categories.categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
}
