import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import IntroduceImage2 from '../../../assets/images/Body/CustomeBuilds.png';
import IntroduceImage3 from '../../../assets/images/Body/GamingMonitors.png';
import IntroduceImage1 from '../../../assets/images/Body/MSILaptops.png';
import { getApiDataScreen } from '../../../Redux/Reducer/productReducer';
import Slide from '../BodyDetails/Carousel';
import ZipPay from '../BodyDetails/ZipPay';
import NewsOffer from '../NewsOffer/index';
import Support from '../Support/index';
import Branch from './Branch';
import CarouselNewProduct from './CarouselNewProduct';
import IntroduceCard from './IntroduceCard';
import ProductCard from './ProductCard';

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

const BodyDetails = (props) => {
  const listProduct = useSelector((state) => {
    return state.product.listProductLaptop;
  });

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getApiDataScreen());
  }, []);

  const listCardScreen = () => {
    const newListScreen = listProduct.map((item, index) => {
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
    return newListScreen;
  };

  const listCardLaptop = () => {
    const newListLaptop = listProduct.map((item, index) => {
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
    return newListLaptop;
  };

  const listCardCPU = () => {
    const newListCPU = listProduct.map((item, index) => {
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
