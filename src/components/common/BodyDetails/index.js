import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Slide from "../BodyDetails/Carousel";
import ZipPay from "../BodyDetails/ZipPay";
import IntroduceCard from "./IntroduceCard";
import Branch from "./Branch";
import Support from "../Support/index";
import NewsOffer from "../NewsOffer/index";
import CarouselNewProduct from "./CarouselNewProduct";
import ProductCard from "./ProductCard";
import { dataLaptop, dataCPU, dataScreen } from "./DataCard";

import IntroduceImage1 from "../../../assets/images/Body/MSILaptops.png";
import IntroduceImage2 from "../../../assets/images/Body/CustomeBuilds.png";
import IntroduceImage3 from "../../../assets/images/Body/GamingMonitors.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 768 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 768, min: 465 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 375, min: 0 },
    items: 1,
  },
};

const BodyDetails = () => {
  const [listCard, setListCard] = React.useState({
    Laptop: dataLaptop,
    CPU: dataCPU,
    Screen: dataScreen,
  });

  const listCardScreen = () => {
    const newListScreen = listCard.Screen.map((item, index) => {
      return (
        <ProductCard
          id={item.id}
          status={item.status}
          src={item.src}
          title={item.title}
          content={item.content}
          price={item.price}
        />
      );
    });
    return newListScreen;
  };

  const listCardLaptop = () => {
    const newListLaptop = listCard.Laptop.map((item, index) => {
      return (
        <ProductCard
          id={item.id}
          status={item.status}
          src={item.src}
          title={item.title}
          content={item.content}
          price={item.price}
        />
      );
    });
    return newListLaptop;
  };

  const listCardCPU = () => {
    const newListCPU = listCard.CPU.map((item, index) => {
      return (
        <ProductCard
          id={item.id}
          status={item.status}
          src={item.src}
          title={item.title}
          content={item.content}
          price={item.price}
        />
      );
    });
    return newListCPU;
  };

  return (
    <div className="container">
      <Slide />
      <CarouselNewProduct />
      <ZipPay />
      <div className="lazyLoad-wrapper">
        <IntroduceCard srcImage={IntroduceImage2} title="Custome Builds" />
        <Carousel responsive={responsive} swipeable={true} draggable={true}>
          {listCardCPU()}
        </Carousel>
      </div>
      <div className="lazyLoad-wrapper">
        <div className="sub__navigation">
          <Link>MSI GS Series</Link>
          <Link>MSI GT Series</Link>
          <Link>MSI GL Series</Link>
          <Link>MSI GE Series</Link>
        </div>
        <IntroduceCard srcImage={IntroduceImage1} title="MSI Laptops" />
        <Carousel responsive={responsive} swipeable={true} draggable={true}>
          {listCardLaptop()}
        </Carousel>
      </div>
      <div className="lazyLoad-wrapper">
        <IntroduceCard srcImage={IntroduceImage3} title="Gaming Monitors" />
        <Carousel responsive={responsive} swipeable={true} draggable={true}>
          {listCardScreen()}
        </Carousel>
      </div>
      <Branch />
      <NewsOffer />
      <Support />
    </div>
  );
};

export default BodyDetails;
