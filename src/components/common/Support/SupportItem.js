import React from "react";

const SupportItem = (props) => {
  const { title, subtitle, srcImage } = props;
  return (
    <>
      <div className="Support__content">
        <div className="Support__content--icon">
          <img src={srcImage} alt="" />
        </div>
        <div className="Support__content--title">
          <h3>{title}</h3>
        </div>
        <div className="Support__content--subTitle">
          <span>{subtitle}</span>
        </div>
      </div>
    </>
  );
};

export default SupportItem;
