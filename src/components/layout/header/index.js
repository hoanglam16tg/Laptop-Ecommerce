import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Badge, Dropdown } from "antd";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import LogoImage from "../../../assets/images/Logo.png";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import { DropdownAccount, DropdownMiniCard } from "./MenuDropdown";

const Header = () => {
  const [isShow, setIsShow] = React.useState(false);

  const handleShowFormSearch = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="header">
      <div className="container wrap--heading">
        <div className="header__logo">
          <Link>
            <img src={LogoImage} alt="" />
          </Link>
        </div>
        {!isShow ? <Navigation /> : <SearchBar />}

        <div className="header__iconShortCut">
          {!isShow ? (
            <SearchOutlined onClick={handleShowFormSearch} />
          ) : (
            <CloseOutlined
              className="btn--cancelFormSearch"
              onClick={handleShowFormSearch}
            />
          )}
          <Dropdown overlay={DropdownMiniCard} placement="bottomCenter" arrow>
            <Badge count={2}>
              <ShoppingCartOutlined />
            </Badge>
          </Dropdown>
          <Dropdown overlay={DropdownAccount} placement="bottomRight" arrow>
            <Avatar size={36} icon={<UserOutlined />} />
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Header;
