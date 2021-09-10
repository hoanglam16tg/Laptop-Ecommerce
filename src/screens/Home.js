import React from "react";
import Body from "../components/layout/Body";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/header/index";
import Catalog from "../components/common/Catalog/index";
const Home = () => {
  return (
    <>
      <Header />
      {/* <Body /> */}
      <Catalog />
      <Footer />
    </>
  );
};

export default Home;
