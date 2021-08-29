import React from "react";
import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

const ProductCard = (props) => {
  return (
    <div className="productCard">
      {props.status === "In Stock" ? (
        <h3 className="productCard__status--inStock">
          <CheckCircleOutlined style={{ marginRight: "5px" }} />
          {props.status}
        </h3>
      ) : (
        <h3 className="productCard__status--availability">
          <ExclamationCircleOutlined style={{ marginRight: "5px" }} />
          {props.status}
        </h3>
      )}

      <img src={props.src} alt={props.alt} />
      <h2 className="productCard__title">{props.title}</h2>
      <p>{props.content}...</p>
      <h2 className="productCard__price">${props.price}.000</h2>
      <div className="productCard__wrapButton">
        <Button className="btn--add">
          <ShoppingCartOutlined style={{ fontSize: "16px" }} />
          Add To Cart
        </Button>
      </div>
    </div>
  );
};
export default ProductCard;
