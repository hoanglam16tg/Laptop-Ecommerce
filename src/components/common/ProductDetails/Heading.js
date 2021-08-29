import React from "react";
import { Link } from "react-router-dom";
import { InputNumber, Button } from "antd";

const Heading = () => {
  return (
    <div className="container">
      <div className="ProductDetails__navigation">
        <Link to="/AboutProduct">About Product</Link>
        <Link to="/ProductDetail">Details</Link>
      </div>

      <div className="ProductDetails__addProduct">
        <div className="ProductDetails__addProduct--quantity">
          <span>
            On Sale from <span style={{ fontWeight: "bold" }}>$3,299.00</span>
          </span>
          <InputNumber
            className="addProduct--quantity__form"
            size="large"
            min={1}
            max={100000}
            defaultValue={1}
          />
        </div>
        <Button className="ProductDetails__addProduct--btn">Add to Card</Button>
      </div>
    </div>
  );
};

export default Heading;
