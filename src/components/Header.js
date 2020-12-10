import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Row } from "antd";
import { IconContext } from "react-icons";
import { AiFillShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const productCount = useSelector((state) => state.productCount);
  return (
    <div>
      <Row className="header">
        <IconContext.Provider value={{ color: "white", size: "20px" }}>
          <Link to="/">
            <AiFillShopping className="cart-icon" />
          </Link>
        </IconContext.Provider>
        <h1>React chart app</h1>
        <div className="cart-container">
          <IconContext.Provider value={{ color: "white", size: "20px" }}>
            <h1 className="counter">{productCount}</h1>
            <Link to="/cart">
              <FiShoppingCart className="cart-icon" />
            </Link>
          </IconContext.Provider>
        </div>
      </Row>
    </div>
  );
};

export default Header;
