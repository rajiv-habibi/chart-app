import React, { useState } from "react";
import "../App.css";
import { Row, Button, Col, Image, Divider, Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { incQty, decQty } from "../store/productAction";

const CartBody = ({ item, modal, handleOk, handleCancel }) => {
  const total = useSelector((state) => state.total);

  const dispatch = useDispatch();
  const handleIncrement = (item) => {
    const id = item.id;
    dispatch(incQty(id));
  };
  const handleDecrement = (item) => {
    const id = item.id;
    dispatch(decQty(id));
  };

  return (
    <Row style={{ display: "flex" }}>
      <Col
        lg={{ span: 16, offset: 4 }}
        xs={{ span: 20, offset: 2 }}
        style={{ display: "inline" }}
      >
        <Divider />
        <div className="cart-wrapper">
          <Image width={200} src={item.img} />
          <div style={{ margin: " 1em 2em", lineHeight: "15px" }}>
            <h1 style={{ color: "grey", fontSize: "1.2rem" }}>{item.name}</h1>
            <h1 style={{ fontSize: "1rem" }}>{item.price}</h1>
            <p style={{ width: "100px" }}>Quantity : {item.qty} </p>
          </div>
          <div className="buttons">
            <Button onClick={() => handleIncrement(item)}>+</Button>
            <Button onClick={() => handleDecrement(item)}>-</Button>
          </div>
        </div>
      </Col>
      <Modal
        title="Checkout"
        visible={modal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        Total : ${total}
      </Modal>
    </Row>
  );
};

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const total = useSelector((state) => state.total);
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };
  const handleOk = () => {
    setModal(false);
  };
  const handleCancel = () => {
    setModal(false);
  };

  return (
    <>
      {cart.length === 0 ? (
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: 300,
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "grey",
          }}
        >
          No item
        </h1>
      ) : (
        cart.map((c) => (
          <CartBody
            item={c}
            modal={modal}
            handleOk={handleOk}
            handleCancel={handleCancel}
          />
        ))
      )}

      <Divider />
      <div className="checkout">
        {cart.length === 0 ? "" : <h1>Total : ${total.toFixed(2)}</h1>}
        {cart.length === 0 ? (
          ""
        ) : (
          <Button onClick={openModal}>Check out</Button>
        )}
      </div>
    </>
  );
};

export default Cart;
