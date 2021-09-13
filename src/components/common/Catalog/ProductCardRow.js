import React from "react";
import { Row, Col } from "antd";
import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import ButtonAddCard from "../Form/ButtonAddCard";

import ProductParameters from "../../../assets/images/DetailProduct/Product parameters.png";
import iconEmail from "../../../assets/images/Icon/iconEmail.png";
import iconHeart from "../../../assets/images/Icon/iconHeart.png";
import iconWave from "../../../assets/images/Icon/iconWave.png";

const ProductCardRow = (props) => {
  const { status, src, alt, content, title, price } = props;
  return (
    <>
      <Row className="productCardRow">
        <Col lg={{ span: 7 }} md={{ span: 7 }}>
          <div className="productCardRow__wrap--image">
            <img src={src} alt={alt} />
            Review
          </div>
        </Col>
        <Col
          lg={{ span: 8 }}
          md={{ span: 12 }}
          className="productCardRow__content"
        >
          <h2 className="productCardRow__content--title">{title}</h2>
          <p>{content}</p>
          <h2 className="productCardRow__content--price">
            <s>${price}</s>
            <b> ${price}</b>
          </h2>
          <ButtonAddCard />
        </Col>
        <Col
          lg={{ span: 6 }}
          md={{ span: 1 }}
          className="productCardRow__productParameters"
        >
          <img src={ProductParameters} alt="" />
        </Col>
        <Col
          lg={{ span: 3 }}
          md={{ span: 5 }}
          className="productCardRow__status"
        >
          {status === "In Stock" ? (
            <h3 className="productCard__status--inStock">
              <CheckCircleOutlined style={{ marginRight: "5px" }} />
              {status}
            </h3>
          ) : (
            <h3 className="productCard__status--availability">
              <ExclamationCircleOutlined style={{ marginRight: "5px" }} />
              {status}
            </h3>
          )}
          <div className="productCardRow__icon">
            <img src={iconEmail} alt="" />
            <img src={iconWave} alt="" />
            <img src={iconHeart} alt="" />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ProductCardRow;
