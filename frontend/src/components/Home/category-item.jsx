import "./styles/category-item.scss"

const CategoryItem = ({ item }) => {
  return (
    <div className="container">
        <img className="image" src={item.img}></img>
        <div className="info">
            <h1 className="title">{item.title}</h1>
            <button className="main-button">SHOP NOW</button>
        </div>
    </div>
  );
};

export default CategoryItem;