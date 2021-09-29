import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

import ProductCard from "./ProductCard";
import { dataLaptop, dataCPU, dataScreen } from "./DataCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 768 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 768, min: 465 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 375, min: 0 },
    items: 2,
  },
};

const CarouselNewProduct = () => {
  const [listCard, setListCard] = React.useState({
    Laptop: dataLaptop,
    CPU: dataCPU,
    Screen: dataScreen,
  });

  const newListProduct = () => {
    const listProductConcat = listCard.Laptop.concat(
      listCard.CPU,
      listCard.Screen
    );
    const listProduct = listProductConcat.map((item, index) => {
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
    return listProduct;
  };

  return (
    <div className="wrapper__carouselNewProduct">
      <div className="wrapper__carouselNewProduct--title">
        <h2>New Products</h2>
        <Link href="">See All New Products</Link>
      </div>
      <Carousel responsive={responsive} swipeable={true} draggable={true}>
        {newListProduct()}
      </Carousel>
    </div>
  );
};

export default CarouselNewProduct;
