import React from "react";
import { Link } from "react-router-dom";

const AboutProductContent = () => {
  return (
    <div className="wrapper__content">
      <h1>MSI MPG Trident 3</h1>
      <Link>Be the first to review this product</Link>
      <p>
        MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM,
        512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years
        Warranty Gaming Desktop
      </p>
      <span>
        <b>Have a Question?</b> <Link>Contact Us</Link>
      </span>
    </div>
  );
};

export default AboutProductContent;
