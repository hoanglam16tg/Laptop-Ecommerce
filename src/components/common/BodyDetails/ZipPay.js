import React from "react";
import ZipPayImage from "../../../assets/images/Body/Zip.png";
import { Link } from "react-router-dom";

const containerZipPay = {
  with: "100%",
  height: "70px",
  backgroundColor: "#f5f7ff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0 30px",
};
const styleContent = {
  fontSize: "18px",
  fontWeight: "600",
  color: "rgba(39, 37, 96, 1)",
  lineHeight: "22px",
};
const styleTagLink = {
  fontSize: "14px",
  color: "rgba(39, 37, 96, 1)",
  fontWeight: "400",
  textDecoration: "underline",
};

const ZipPay = () => {
  return (
    <div className="container ZipPay" style={containerZipPay}>
      <img src={ZipPayImage} alt="" />
      <span style={styleContent}>|</span>
      <span style={styleContent}>
        <b>own</b> it now, up to 6 months interest free{" "}
        <Link style={styleTagLink}> learn more</Link>
      </span>
    </div>
  );
};

export default ZipPay;
