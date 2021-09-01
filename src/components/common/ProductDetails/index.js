import React from "react";
import { Switch, Route } from "react-router-dom";
import { Carousel } from "antd";

import Heading from "./Heading";
import AboutProductContent from "./AboutProductContent";
import DetailProductContent from "./DetailProductContent";
import ShowImage from "./ShowImage";
import Support from "../../common/Support/index";

import Image13 from "../../../assets/images/Group13.png";
import banner from "../../../assets/images/DetailProduct/bannerDetail.png";
import banner2 from "../../../assets/images/DetailProduct/bannerDetail2.png";
import banner3 from "../../../assets/images/DetailProduct/bannerDetail3.png";
const ProductDetails = () => {
  return (
    <>
      <div className="ProductDetails">
        <Heading />
        <div className="container__info">
          <div className="ProductDetails__aboutProduct">
            <Switch>
              <Route path="/AboutProduct">
                <AboutProductContent />
              </Route>
              <Route path="/ProductDetail">
                <DetailProductContent />
              </Route>
            </Switch>
          </div>
          <div className="ProductDetails__imageProduct">
            <ShowImage />
            <div style={{ margin: "0 0 60px 125px" }}>
              <img src={Image13} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Carousel autoplay>
        <div>
          <img src={banner} alt="" style={{ width: "100%" }} />
        </div>
        <div>
          <img src={banner} alt="" style={{ width: "100%" }} />
        </div>
      </Carousel>
      <div>
        <img src={banner3} alt="" style={{ width: "100%" }} />
      </div>
      <div>
        <img src={banner2} alt="" style={{ width: "100%" }} />
      </div>
      <Support />
    </>
  );
};

export default ProductDetails;
