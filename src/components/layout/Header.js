import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Input } from "antd";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import LogoImage from "../../assets/images/Logo.png";

const Header = () => {
  const [isShow, setIsShow] = React.useState(false);

  const ShowFormSearch = () => {
    setIsShow(!isShow);
  };
  const CancelFormSearch = () => {
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
        {!isShow ? (
          <div className="header__navigation">
            <ul className="header__navigation--WrapItem">
              <li>
                <Link>Laptops</Link>
              </li>
              <li>
                <Link>Desktop PCs</Link>
              </li>
              <li>
                <Link>Networking Devices</Link>
              </li>
              <li>
                <Link>Printers & Scanners</Link>
              </li>
              <li>
                <Link>PC Parts</Link>
              </li>
              <li>
                <Link>All Other Products</Link>
              </li>
              <li>
                <Link>Repairs</Link>
              </li>
              <li>
                <Link>Our Deals</Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="container__search">
            <Input
              className="container__search--input"
              placeholder="Search entiere store here..."
            />
            <SearchOutlined className="container__search--icon" />
          </div>
        )}

        <div className="header__iconShortCut">
          {!isShow ? (
            <SearchOutlined onClick={ShowFormSearch} />
          ) : (
            <span className="btn--cancelFormSearch" onClick={CancelFormSearch}>
              x
            </span>
          )}
          <ShoppingCartOutlined />
          <Avatar size={36} icon={<UserOutlined />} />
        </div>
      </div>
    </div>
  );
};

export default Header;
