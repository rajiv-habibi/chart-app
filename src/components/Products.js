import React, { Fragment, useState } from "react";
import { Row, Col, Image, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../store/productAction";

const Products = () => {
  const menu = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    const id = product.id;
    dispatch(addProduct(product, id));
    console.log(product);
    dispatch({ type: "ADD_COUNT" });
  };

  return (
    <Row style={{ textAlign: "center" }}>
      {menu.map((m) => (
        <Fragment key={m.id}>
          <Col
            lg={{ span: 6 }}
            xs={24}
            style={{ marginTop: "6em", marginBottom: "2em" }}
          >
            <Image width={200} style={{}} src={m.img} />
            <h1 style={{ color: "grey", fontSize: "1rem", marginTop: "10px" }}>
              {m.name}
            </h1>
            <h2 style={{ fontSize: "1.2rem" }}>${m.price}</h2>
            <Button onClick={() => handleAdd(m)}>Add to Cart</Button>
          </Col>
        </Fragment>
      ))}
      <Col sm={5} xs={5} />
      <h1
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translate(-50%,-50%)",
          fontSize: "1rem",
          color: "grey",
          fontWeight: 400,
        }}
      >
        Build with ❤️ by{" "}
        <a href="https://github.com/rajiv-habibi" target="_blank">
          Rajiv
        </a>
      </h1>
    </Row>
  );
};

export default Products;
