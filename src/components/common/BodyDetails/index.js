import React from "react";
import { Link } from "react-router-dom";

import Slide from "../BodyDetails/Carousel";
import ZipPay from "../BodyDetails/ZipPay";
import IntroduceCard from "./IntroduceCard";
import Branch from "./Branch";
import Support from "../Support/index";
import ListCardLaptop from "./ListCardLaptop";
import ListCardPC from "./ListCardPC";
import ListCardScreen from "./ListCardScreen";
import NewsOffer from "../NewsOffer/index";

import IntroduceImage1 from "../../../assets/images/Body/MSILaptops.png";
import IntroduceImage2 from "../../../assets/images/Body/CustomeBuilds.png";
import IntroduceImage3 from "../../../assets/images/Body/GamingMonitors.png";

const BodyDetails = () => {
  return (
    <div className="container">
      <Slide />
      <ZipPay />
      <div className="lazyLoad-wrapper">
        <div className="lazyLoad-wrapper__content">
          <IntroduceCard srcImage={IntroduceImage2} title="Custome Builds" />
          <ListCardPC />
        </div>
      </div>
      <div className="lazyLoad-wrapper">
        <div className="sub__navigation">
          <Link>MSI GS Series</Link>
          <Link>MSI GT Series</Link>
          <Link>MSI GL Series</Link>
          <Link>MSI GE Series</Link>
        </div>
        <div className="lazyLoad-wrapper__content">
          <IntroduceCard srcImage={IntroduceImage1} title="MSI Laptops" />
          <ListCardLaptop />
        </div>
      </div>
      <div className="lazyLoad-wrapper">
        <div className="lazyLoad-wrapper__content">
          <IntroduceCard srcImage={IntroduceImage3} title="Gaming Monitors" />
          <ListCardScreen />
        </div>
      </div>
      <Branch />
      <NewsOffer />
      <Support />
    </div>
  );
};

export default BodyDetails;
