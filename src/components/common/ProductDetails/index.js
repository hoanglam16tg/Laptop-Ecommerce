import { Carousel } from "antd";
import React from "react";
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import banner from "../../../assets/images/DetailProduct/bannerDetail.png";
import banner2 from "../../../assets/images/DetailProduct/bannerDetail2.png";
import banner3 from "../../../assets/images/DetailProduct/bannerDetail3.png";
import Image13 from "../../../assets/images/Group13.png";
import Support from "../../common/Support/index";
import AboutProductContent from "./AboutProductContent";
import DetailProductContent from "./DetailProductContent";
import Heading from "./Heading";
import ShowImage from "./ShowImage";



const ProductDetails = () => {

  const listProductLaptop = useSelector((state) => {
    return state.product.listProductLaptop;
  });
  const listProductCPU = useSelector((state) => {
    return state.product.listProductCPU;
  });
  const listProductScreen = useSelector((state) => {
    return state.product.listProductScreen;
  });
  const [isShowAbout, setIsShowAbout] = React.useState(true);
  const [isShowDetail, setIsShowDetail] = React.useState(false);
  const { id } = useParams();
  

  const listCardConcat = listProductLaptop.concat(listProductCPU, listProductScreen);
  const newListCard = listCardConcat.filter((item) => item.id === parseInt(id));

  const aboutProduct = () => {
    return newListCard.map((item, index) => {
      return (
        <AboutProductContent
          key={index}
          title={item.title}
          content={item.content}
          description={item.description}
        />
      );
    });
  };
  const detailProduct = () => {
    return newListCard.map((item, index) => {
      return (
        <DetailProductContent
          key={index}
          title={item.title}
          infoDetail={item.details}
        />
      );
    });
  };
  const showImage = () => {
    return newListCard.map((item, index) => {
      return <ShowImage key={index} srcImage={item.src} />;
    });
  };
  const onChangeAbout = () => {
    setIsShowAbout(true);
    setIsShowDetail(false);
  };
  const onChangeDetails = () => {
    setIsShowAbout(false);
    setIsShowDetail(true);
  };
  return (
    <>
      <div className="ProductDetails">
        <Heading
          onChangeAbout={onChangeAbout}
          onchangeDetails={onChangeDetails}
        />
        <div className="container__info">
          <div className="ProductDetails__aboutProduct">
            {isShowAbout ? aboutProduct() : null}
            {isShowDetail ? detailProduct() : null}
          </div>
          <div className="ProductDetails__imageProduct">
            {showImage()}
            <div style={{ margin: "0 0 60px 125px" }}>
              <img src={Image13} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Carousel autoplay>
        <div>
          <img src={banner} alt="" style={{ width: "100%" }} />
        </div>
        <div>
          <img src={banner} alt="" style={{ width: "100%" }} />
        </div>
      </Carousel>
      <div>
        <img src={banner3} alt="" style={{ width: "100%" }} />
      </div>
      <div>
        <img src={banner2} alt="" style={{ width: "100%" }} />
      </div>
      <Support />
    </>
  );
};

export default ProductDetails;
