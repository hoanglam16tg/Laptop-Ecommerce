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
        <Col span={7}>
          <div className="productCardRow__wrap--image">
            <img src={src} alt={alt} />
            Review
          </div>
        </Col>
        <Col span={8} className="productCardRow__content">
          <h2 className="productCardRow__content--title">{title}</h2>
          <p>{content}</p>
          <h2 className="productCardRow__content--price">
            <s>${price}</s>
            <b> ${price}</b>
          </h2>
          <ButtonAddCard />
        </Col>
        <Col span={6} className="productCardRow__productParameters">
          <img src={ProductParameters} alt="" />
        </Col>
        <Col span={3} className="productCardRow__status">
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
      {/* <Row className="productCardRow">
        <Col span={7}>
          <div className="productCardRow__wrap--image">
            <img
              src="https://lh3.googleusercontent.com/0_o2q2NNaCqfQqN_L8vWtU88IOwNXCLvbA2e7YK30v1GWZKwjdu2QK9i4xFelhBObAXwhofauWcCm9-6KtPHpLdwRLpUP28=rw-w300"
              alt=""
            />
            Review
          </div>
        </Col>
        <Col span={8} className="productCardRow__content">
          <h2 className="productCardRow__content--title">
            Screen LCD SAMSUNG 23.8
          </h2>
          <p>
            MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen
            i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows
            10 PRO Laptop
          </p>
          <h2 className="productCardRow__content--price">
            <s> $999.000</s>
            <b> $999.000</b>
          </h2>
          <ButtonAddCard />
        </Col>
        <Col span={6} className="productCardRow__productParameters">
          <img src={ProductParameters} alt="" />
        </Col>
        <Col span={3} className="productCardRow__status">
          <h3 className="productCard__status--inStock">
            <CheckCircleOutlined style={{ marginRight: "5px" }} />
            inStock
          </h3>
          <div className="productCardRow__icon">
            <img src={iconEmail} alt="" />
            <img src={iconWave} alt="" />
            <img src={iconHeart} alt="" />
          </div>
        </Col>
      </Row> */}
    </>
  );
};

export default ProductCardRow;
