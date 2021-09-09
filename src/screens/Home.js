import React from "react";
import Header from "../components/layout/header/index";
import Footer from "../components/layout/Footer";
import Body from "../components/layout/Body";
import ProductDetails from "../components/common/ProductDetails/index";
import Catalog from "../components/common/Catalog";
const Home = () => {
  return (
    <>
      <Header />
      <Body />
      {/* <ProductDetails />
      <Catalog /> */}
      <Footer />
    </>
  );
};

export default Home;
