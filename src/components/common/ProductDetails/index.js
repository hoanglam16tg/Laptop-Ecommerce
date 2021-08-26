import React from "react";
import { Switch, Route } from "react-router-dom";
import Heading from "./Heading";
import AboutProductContent from "./AboutProductContent";
import DetailProductContent from "./DetailProductContent";
import ShowImage from "./ShowImage";
import Image13 from "../../../assets/images/Group13.png";
const ProductDetails = () => {
  return (
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
          <div style={{ marginLeft: "125px" }}>
            <img src={Image13} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
