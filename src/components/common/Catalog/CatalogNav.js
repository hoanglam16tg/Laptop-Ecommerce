import React from "react";
import { Menu, Dropdown, Button } from "antd";
import {
  CaretLeftOutlined,
  DownOutlined,
  AppstoreOutlined,
  AlignLeftOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const menu = (
  <Menu>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

const CatalogNav = () => {
  return (
    <>
      <div className="catalogProduct__navBar">
        <div className="catalogProduct__navBar--left">
          
          <CaretLeftOutlined />
          Back
        </div>
        <div className="catalogProduct__navBar--right">
          <div className="itemNumber">
            <span>Items 1-35 of 61</span>
          </div>
          <div className="dropdown">
            <Dropdown overlay={menu} placement="bottomCenter">
              <Button>
                Sort By:
                <b style={{ color: "black", marginLeft: "3px" }}> Position</b>
                <DownOutlined />
              </Button>
            </Dropdown>
          </div>
          <div className="dropdown">
            <Dropdown overlay={menu} placement="bottomCenter">
              <Button>
                Show:
                <b style={{ color: "black", marginLeft: "3px" }}>
                  
                  35 per page
                </b>
                <DownOutlined />
              </Button>
            </Dropdown>
          </div>
          <div className="icon">
            <Link to="/catalog">
              <AppstoreOutlined className="icon--gridDisplay" />
            </Link>
            <Link to="/catalog/list-row">
              <AlignLeftOutlined className="icon--rowDisplay" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CatalogNav;
