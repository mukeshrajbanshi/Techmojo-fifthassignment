import React, { useState } from "react";
import product from "../products.json";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function FilterCard() {
  const [brand, setBrand] = useState([...product.products]);

  const handlePrice = () => {
    const sortedData = [...brand.sort((r, i) => (r.price > i.price ? 1 : -1))];
    setBrand(sortedData);
  };
  const AsscendingSort = () => {
    setBrand(
      [...brand].sort((a, b) => {
        if (a.id < b.id) {
          return -1;
        } else if (a.id > b.id) {
          return 1;
        } else {
          return 0;
        }
      })
    );
  };

  const DecendingSort = () => {
    setBrand(
      [...brand].sort((a, b) => {
        if (a.id < b.id) {
          return 1;
        } else if (a.id > b.id) {
          return -1;
        } else {
          return 0;
        }
      })
    );
  };

  const DiscountSort = () => {
    setBrand(
      [...brand].sort((a, b) => {
        if (a.discountPercentage < b.discountPercentage) {
          return -1;
        } else if (a.discountPercentage > b.discountPercentage) {
          return 1;
        } else {
          return 0;
        }
      })
    );
  };
  const ratingSort = () => {
    setBrand(
      [...brand].sort((a, b) => {
        if (a.rating < b.rating) {
          return -1;
        } else if (a.rating > b.rating) {
          return 1;
        } else {
          return 0;
        }
      })
    );
  };

  const inputChange = (e) => {
    const searchFilter = product.products.filter((item) =>
      item.title.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
    setBrand(searchFilter);
  };

  const handleChange = (event) => {
    // if(e.target.checked) {
    //   setBrand([...brand],e.target.value);
    // }
    // else {
    //   setBrand(product.products.filter((a) => a.brand !== e.target.value));
    // }
    let checkedData = product.products.filter(
      (a) => a.brand === event.target.value
    );
    setBrand(checkedData);
  };

  return (
    <>
      <Row>
        <ButtonGroup aria-label="Third group">
          <input
            type="text"
            placeholder="Search Products"
            onKeyUp={inputChange}
          />
          <br />
          <label>
            Apple
            <input
              type="checkbox"
              name="Apple"
              value="Apple"
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Samsung
            <input
              type="checkbox"
              name="Samsung"
              value="Samsung"
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            OPPO
            <input
              type="checkbox"
              name="OPPO"
              value="OPPO"
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Huawei
            <input
              type="checkbox"
              name="Huawei"
              value="Huawei"
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Microsoft Surface
            <input
              type="checkbox"
              name="Microsoft Surface"
              value="Microsoft Surface"
              onChange={handleChange}
            />
          </label>
        </ButtonGroup>
      </Row>
      <Row>
        <ButtonGroup aria-label="Third group">
          <Button className="m-2" variant="primary" onClick={AsscendingSort}>
            Asscending
          </Button>
          <Button className="m-2" variant="primary" onClick={DecendingSort}>
            Decending
          </Button>
          <Button className="m-2" variant="primary" onClick={handlePrice}>
            Price
          </Button>
          <Button className="m-2" variant="primary" onClick={DiscountSort}>
            Discount
          </Button>
          <Button className="m-2" variant="primary" onClick={ratingSort}>
            Rating
          </Button>
        </ButtonGroup>
      </Row>

      <Row xs={1} md={2} className="g-4">
        {brand.map((data, idx) => (
          <Col key={idx}>
            <Card.Header>{data.title}</Card.Header>
            <Card>
              <Card.Img variant="top" src={data.thumbnail} />
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>
                  <Button variant="primary">Price $ {data.price}</Button>
                  <span>
                    <Button variant="primary">Rating {data.rating}</Button>
                  </span>
                  <br />
                  <br />
                  <Button variant="primary">Add to cart</Button>
                </Card.Text>
                <Card.Text>{data.category}</Card.Text>
                <Card.Text>{data.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default FilterCard;
