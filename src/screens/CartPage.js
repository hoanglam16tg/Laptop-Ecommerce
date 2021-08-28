import * as React from 'react';
import {dataLaptop} from "../components/common/BodyDetails/DataCard"
import ProductCard from "../components/common/BodyDetails/ProductCard";

const CartPage = () => {
  const [listCard, setListCard] = React.useState({
    Laptop: dataLaptop,
  });
  const listCardLaptop = () => {
    const listLapTop = listCard.Laptop.map((item, index) => {
      return (
        <ProductCard
         status={item.status}
         src={item.src}
         title={item.title}
         content={item.content}
         price={item.price}
        />
      );
    });
    return listLapTop;
  }
  return (
    <>
      <div>CART PAGE</div>
      <br />
      {listCardLaptop()}
    </>
  );
};

export default CartPage;
