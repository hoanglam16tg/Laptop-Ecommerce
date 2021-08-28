import React from "react";
import IntroduceCard from "./IntroduceCard";
import ProductCard from "./ProductCard";
import { dataLaptop } from "./DataCard";

import backgroundLaptop from "../../../assets/images/Body/MSILaptops.png";

const ListProducts = () => {
  return (
    <div className="container">
      <IntroduceCard srcImage={backgroundLaptop} title="MSI LapTop" />
      {dataLaptop.map((item, index) => {
        return (
          <ProductCard
            status={item.status}
            src={item.src}
            title={item.title}
            content={item.content}
            price={item.price}
          />
        );
      })}
    </div>
  );
};
export default ListProducts;
