import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BackButton from "./Back-Button";
import Products from "./Products";
import { DATA } from "./constants";

const BoycottProductList = ({ map }) => {
  const { name } = useParams();
  const [items, setItems] = useState([]);
  const [searchedItems, setSearchedItems] = useState([]);
  const [text, setText] = useState("");

  const search = (searchString) => {
    if (searchString && searchString.length > 0) {
      const filteredItems = items.filter((item) => {
        return item.product.toLowerCase().includes(searchString.toLowerCase());
      });
      setSearchedItems(filteredItems);
    }else{
      setSearchedItems([]);
    }
    setText(searchString);
  };

  useEffect(() => {
    setItems(map[name][DATA]);
    if (items) {
      items.forEach((item) => {
        item.flip = false;
      });
    }
    setItems(map[name][DATA]);
  }, [map, name]);

  return (
    <div>
      <form className="add-form">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search Product"
            value={text}
            onChange={(e) => search(e.target.value)}
          />
        </div>
      </form>
      {searchedItems && searchedItems.length > 0 && (
        <div>
          <Products itemList={searchedItems} />
          <hr className="horizontal-line" />
        </div>
      )}
      <Products itemList={items} />
      <div style={{ marginTop: "1.5rem" }}>
        <h4 className="note">ملحوظة: دوس على المنتج ليظهر البديل بالأحمر </h4>
        <br />
        <br />
        <BackButton></BackButton>
      </div>
    </div>
  );
};

export default BoycottProductList;
