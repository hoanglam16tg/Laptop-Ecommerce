import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
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
  );
};

export default Navigation;
