import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BackButton from "./Back-Button";
import Products from "./Products";
import { DATA } from "./constants";

const BoycottProductList = ({ map }) => {
  const { name } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(map[name][DATA]);
  }, [map, name]);

  //todo get data from database if empty
  return (
    <div>
      <h4 className="note">ملحوظة: دوس على المنتج ليظهر البديل بالأحمر </h4>
      <br/>
      <br/>
      <Products itemList={items} />
      <div style={{ marginTop: "1.5rem" }}>
        <br />
        <BackButton></BackButton>
      </div>
    </div>
  );
};

export default BoycottProductList;
