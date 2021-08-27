import Slide from "../common/BodyDetails/Carousel";
import ListCard from "../common/BodyDetails/ListCard";
import ZipPay from "../common/BodyDetails/ZipPay";
import IntroduceCard from "../common/BodyDetails/IntroduceCard";
import background from "../../assets/images/Body/CustomeBuilds.png";

import background2 from "../../assets/images/Body/Desktops.png";
import ListProducts from "../common/BodyDetails/ListProducts";
const Body = () => {
  return (
    <>
      <Slide />
      <ListCard />
      <ZipPay />
      <ListProducts />
    </>
  );
};
export default Body;
