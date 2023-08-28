import "./styles/categories.scss";
import { categories } from "../../data";
import CategoryItem from "./categoryItem";

const Categories = () => {
  return (
    <div className="categories-container">
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Categories;