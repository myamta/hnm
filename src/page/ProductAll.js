import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [poroductList, SetproductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getproducts = async () => {
    let searchQuery = query.get("q") || "";
    let url = `https://my-json-server.typicode.com/myamta/data/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    //await를빼먹어서 productList.map is not a function이떴다. 빼먹지말기
    SetproductList(data);
  };

  console.log(poroductList);

  useEffect(() => {
    getproducts();
  }, [query]);
  //쿼리값이 변경될때마다 useEffect실행
  return (
    <div>
      <Container>
        <Row>
          {poroductList.map((menu) => (
            <Col lg={3}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
