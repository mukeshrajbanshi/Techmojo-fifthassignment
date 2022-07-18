import React, { useEffect, useState } from 'react'
import product from "../products.json";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
// import { FormControl, FormGroup } from 'react-bootstrap';

function FilterCard() {
    const [filterData, setFilterData] = useState(JSON.stringify(product));
    const [brand , setBrand] = useState([...product.products]);

    const inputChange = (e) => {
        setFilterData(
          brand.filter((product) => product.brand.startsWith(e.target.value))
        );
      };

    const handleChange = (e) => {
        if(e.target.checked) {
            setBrand([...brand, e.target.value]);
        }
        else {
            setBrand(brand.filter(id => id !== e.target.value));
        }
    };

    useEffect(() => {
        if(brand.length === 0) {
            setFilterData(filterData);
        }
        else {
            setFilterData(brand.filter(filterData => brand.some(category => [filterData.brand].includes(category))));
        }
    },[brand])

  return (
    <>
    <input type="text" placeholder = "Search Products"  onChange ={inputChange}/><br />
    <label> Apple
    <input type= "checkbox" name ="Apple" value="Apple" onChange = {handleChange} />
    </label><br />
    <label> Samsung
    <input type= "checkbox" name ="Samsung" value="Samsung" onChange = {handleChange} />
    </label><br />
    <label> OPPO
    <input type= "checkbox" name ="OPPO" value="OPPO" onChange = {handleChange} />
    </label><br />
   <label> Huawei
    <input type= "checkbox" name ="Huawei" value="Huawei" onChange = {handleChange} />
    </label><br />
    <label>
        <input type="checkbox" name = "Microsoft Surface" value = "Microsoft Surface" onChange = {handleChange}/>
    </label>

    <Row xs={1} md={2} className="g-4">
      {brand.map((data, idx) => (
        <Col key={idx}>
        <Card.Header>{data.title}</Card.Header>
          <Card>
            <Card.Img variant="top" src={data.thumbnail}  />
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text> <Button variant="primary">Price $ {data.price}</Button> 
                  <span> <Button variant="primary">Rating  {data.rating}</Button> </span>
              </Card.Text>
              <Card.Text>
               {data.category}
              </Card.Text>
              <Card.Text>
               {data.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  )
}

export default FilterCard