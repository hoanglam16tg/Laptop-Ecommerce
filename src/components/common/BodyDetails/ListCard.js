import * as React from 'react';
import ProductCard from "./ProductCard";
import {dataLaptop,dataCPU,dataScreen} from "./DataCard"

const ListCard = () => {
  const [listCard, setListCard] = React.useState({
    Laptop: dataLaptop,
    CPU: dataCPU,
    Screen: dataScreen,
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
  const listCardCPU = () => {
    const listCPU = listCard.CPU.map((item, index) => {
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
    return listCPU;
  }
  const listCardScreen = () => {
    const listScreen = listCard.Screen.map((item, index) => {
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
    return listScreen;
  }
  return (
    <>
    {listCardLaptop()}
    <br/>
    {listCardCPU()}
    <br/>
    {listCardScreen()}
    </>
  )
}

export default ListCard;