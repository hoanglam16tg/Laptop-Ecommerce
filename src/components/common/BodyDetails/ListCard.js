import * as React from 'react';
import ProductCard from "./ProductCard";
import {dataLaptop,dataCPU,dataScreen} from "./DataCard"

const ListCard = () => {
  const [listCard, SetListCard] = React.useState(dataLaptop);
  const [listCardCPU, SetListCardCPU] =React.useState(dataCPU);
  // const [listCardScreen, SetListCardScreen] =React.useState(dataScreen);

  const renderCard = () =>{
    const list = listCard.map((item, index) => {
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
    return list;
  }
  const renderCardCPU = () =>{
    const listCPU = listCardCPU.map((item, index) => {
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
  return (
    <>
    {renderCard()}
    <br/>
    {renderCardCPU()}
    </>
  )
}
export default ListCard;