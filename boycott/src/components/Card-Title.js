import Card from "react-bootstrap/Card";
import beauty from "../images/beauty.png";
import food from "../images/food.jpg";
import cafe from "../images/resturants.jpg";
import img from "../images/logo192.png";
import clean from "../images/clean.jpg";
import stream from "../images/stream2.webp";
import logistics from "../images/logistics.png";
import shop from "../images/shop.png";
import drinks from "../images/drinks.png";
import { useNavigate } from "react-router-dom";
import { DISPLAY, NAME } from "./constants";


const CardTitle = ({ category }) => {
  const navigate = useNavigate();

  const extractDisplayName = () => {
    return category[DISPLAY];
  };

  const extractName = () => {
    return category[NAME];
  };

  const selectMenu = () => {
    var categoryName = extractName(category);
    navigate("/boycott/" + categoryName);
  };

  const selectImage = () => {
    var categoryName = extractName(category);
    switch (categoryName) {
      case "food":
        return food;
      case "drink":
        return drinks;
      case "beauty":
        return beauty;
      case "deliver":
        return logistics;
      case "eat":
        return cafe;
      case "clean":
        return clean;
      case "stream":
        return stream;
      case "shop":
        return shop
      default:
        return img;
    }
  };

  return  <>
    {category && <Card
      className="menu-card"
      onClick={() => selectMenu()}
    >
      <Card.Img className="menu-card-image" variant="top" src={selectImage()} />
      <Card.Body>
        <Card.Title >
          <h2 className="menu-card-title" >{extractDisplayName()}</h2>
        </Card.Title>
      </Card.Body>
    </Card>}</>
  
}
export default CardTitle;
