import product from "../products.json";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

function AddCart() {
  // const [data, setData] = useState(...product.products);
  let navigate = useNavigate();

  return (
    <>
      <Link to="navigate">
        <Row>
          {product.products.map((data, idx) => (
            <Col key={idx}>
              <Card.Header>{data.title}</Card.Header>
              <Card>
                <Card.Img variant="top" src={data.thumbnail} />
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>
                    {" "}
                    <Button variant="primary">Price $ {data.price}</Button>
                    <Button variant="primary">Rating {data.rating}</Button>
                    <Button variant="primary">Add to cart{data.stock}</Button>
                  </Card.Text>
                  <Card.Text>{data.category}</Card.Text>
                  <Card.Text>{data.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {navigate("/cardDetails")}
      </Link>
      {/* <NoMatch  title = {data.title} src = {data.thumbnail} price = {data.price} description = {data.description}  category = {data.category}/> */}
    </>
  );
}

export default AddCart;
