import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { useState, useEffect } from "react";

const Products = ({ itemList }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(itemList);
  }, [itemList]);

  const flip = (item) => {
    item.flip = !item.flip;
    setItems([...items]);
  };

  return (
        <CardGroup className="card-groupp">
          {items &&
            items.map((item, index) => (
              <Card key={index} className="card" onClick={() => flip(item)}>
                <Card.Body className="card-bodyy">
                  {item.product && (
                    <Card.Title className="card-title">
                      <h3> {item.product}</h3>
                      {item.flip && (
                        <h3 className="replacement">
                          {" "}
                          {item.replacement ? item.replacement : "لا يوجد"}
                        </h3>
                      )}
                    </Card.Title>
                  )}
                  {item.hint && (
                    <Card.Subtitle className="card-subtitle">
                      ({item.hint})
                    </Card.Subtitle>
                  )}
                </Card.Body>
              </Card>
            ))}
        </CardGroup> 
  );
};

export default Products;
