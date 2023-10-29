import { useState, useEffect } from "react";
import Products from "./Products";
import Note from "./Note";
import { useLocation } from "react-router-dom";
import { FaTimes } from 'react-icons/fa'

const SearchList = ({ map }) => {
  const location = useLocation();

  const [items, setItems] = useState([]);
  const [searchedItems, setSearchedItems] = useState([]);
  const [text, setText] = useState("");

  const search = (searchString) => {
    if (searchString && searchString.length > 0) {
      const filteredItems = items.filter((item) => {
        return item.product.toLowerCase().includes(searchString.toLowerCase());
      });
      setSearchedItems(filteredItems);
    } else {
      setSearchedItems([]);
    }
    setText(searchString);
  };

  useEffect(() => {
    if (map) {
      const dataList = Object.values(map).flatMap((category) => category.data);
      setItems(dataList);
    }
  }, [map]);

  return (
    <div>
      <form className="add-form">
        <div className="form-control input-container">
          <input
            type="text"
            placeholder="Search Product"
            value={text}
            className="input-field" id="input" 
            onChange={(e) => search(e.target.value)}
          />
          {text && text.length >0 && <FaTimes className="clear-icon" 
          id="clear-input" style={{ color: 'grey', cursor: 'pointer' }}
          onClick={() => search("")}/>}
        </div>
      </form>
      {searchedItems && searchedItems.length > 0 && (
        <div>
          {location.pathname === "/" && <Note />}
          <br/>
          <br/>
          <Products itemList={searchedItems} />
          <hr className="horizontal-line" />
        </div>
      )}
    </div>
  );
};

export default SearchList;
