import React from 'react';
import { Row, Col } from 'antd';

import SupportItem from './SupportItem';

import accountIcon from '../../../assets/images/Icon/Account.png';
import SupportIcon from '../../../assets/images/Icon/Support.png';
import SavingIcon from '../../../assets/images/Icon/Saving.png';
const Support = () => {
  return (
    <div className="Support">
      <Row>
        <Col sm={{ span:7, offset: 1 }}  >
          <SupportItem
            srcImage={accountIcon}
            title="Product Support"
            subtitle="Up to 3 years on-site warranty available for your peace of mind."
          />
        </Col>
        <Col sm={{ span:7, offset: 1 }} >
          <SupportItem
            srcImage={SupportIcon}
            title="Personal Account"
            subtitle="With big discounts, free delivery and a dedicated support specialist."
          />
        </Col>
        <Col sm={{ span:7, offset: 1 }} >
          <SupportItem
            srcImage={SavingIcon}
            title="Amazing Savings"
            subtitle="Up to 70% off new Products, you can be sure of the best price."
          />
        </Col>
      </Row>
    </div>
  );
};

export default Support;
