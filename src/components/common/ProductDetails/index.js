import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Carousel } from 'antd';

import Heading from './Heading';
import AboutProductContent from './AboutProductContent';
import DetailProductContent from './DetailProductContent';
import ShowImage from './ShowImage';
import Support from '../../common/Support/index';

import Image13 from '../../../assets/images/Group13.png';
import banner from '../../../assets/images/DetailProduct/bannerDetail.png';
import banner2 from '../../../assets/images/DetailProduct/bannerDetail2.png';
const ProductDetails = () => {
  return (
    <>
      <div className="ProductDetails">
        <Heading />
        <div className="container__info">
          <div className="ProductDetails__aboutProduct">
            <Switch>
              <Route exact path="/product-details/AboutProduct">
                <AboutProductContent />
              </Route>
              <Route exact path="/product-details/ProductDetail">
                <DetailProductContent />
              </Route>
            </Switch>
          </div>
          <div className="ProductDetails__imageProduct">
            <ShowImage />
            <div style={{ marginLeft: '125px' }}>
              <img src={Image13} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Carousel autoplay>
        <div style={{ width: '100%' }}>
          <img src={banner} alt="" />
        </div>
        <div style={{ width: '100%' }}>
          <img src={banner} alt="" />
        </div>
      </Carousel>
      <div style={{ width: '100%' }}>
        <img src={banner2} alt="" />
      </div>
      <Support />
    </>
  );
};

export default ProductDetails;
