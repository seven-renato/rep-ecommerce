import "./styles/categories.scss";
import { categories } from "../../data";
import CategoryItem from "./category-item";

const Categories = () => {
  return (
    <div className="container">
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Categories;