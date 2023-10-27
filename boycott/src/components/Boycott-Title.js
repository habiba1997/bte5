import Card from "react-bootstrap/Card";
import beauty from "../images/beauty.png";
import food from "../images/food.jpg"
import cafe from "../images/resturants.jpg";
import img from "../images/logo192.png";
import clean from "../images/clean.jpg";
import stream from "../images/stream2.webp";
import logistics from "../images/logistics.png";
import drinks from "../images/drinks.png";
import CardGroup from "react-bootstrap/CardGroup";
import { useNavigate } from "react-router-dom";
import { DISPLAY, NAME } from "./constants";

const BoycottTitle = ({ data }) => {
  const navigate = useNavigate();

  const extractDisplayName = (category) => {
    return category[DISPLAY];
  };

  const extractName = (category) => {
    return category[NAME];
  };

  const selectMenu = (category) => {
    var categoryName = extractName(category);
    navigate("/boycott/" + categoryName);
  };

  const selectImage = (category) => {
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
      default:
        return img;
    }
  };

  // {/* //todo try to loop on a hashmap and change the data in appjs to hashmp */}
  return (
    <CardGroup className="card-bodyyy">
      {data &&
        Object.values(data).map((category, index) => (
          <Card
            key={index}
            className="menu-card"
            onClick={() => selectMenu(category)}
          >
            <Card.Img variant="top" src={selectImage(category)} />
            <Card.Body>
              <Card.Title>
                <h2>{extractDisplayName(category)}</h2>
              </Card.Title>
            </Card.Body>
          </Card>
        ))}
    </CardGroup>
  );
};


export default BoycottTitle;
