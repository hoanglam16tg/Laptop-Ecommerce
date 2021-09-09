import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const SearchBar = () => {
  return (
    <div className="container__search ">
      <Input
        className="container__search--input"
        placeholder="Search entiere store here..."
      />
      <SearchOutlined className="container__search--icon" />
    </div>
  );
};

export default SearchBar;
