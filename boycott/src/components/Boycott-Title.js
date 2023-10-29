
import CardGroup from "react-bootstrap/CardGroup";
import CardTitle from "./Card-Title";

const BoycottTitle = ({ data }) => {
  // {/* //todo try to loop on a hashmap and change the data in appjs to hashmp */}
  return (
    <CardGroup className="menu-card-container">
      {data &&
        Object.values(data).map((category, index) => (
          <CardTitle category={category}/>
        ))}
    </CardGroup>
  );
};


export default BoycottTitle;
