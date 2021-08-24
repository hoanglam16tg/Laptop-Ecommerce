import React from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "antd";

import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons";
import paypalImage from "../../assets/images/paypal.png";
import discoverImage from "../../assets/images/discover.png";
import americanExpressrImage from "../../assets/images/american-express.png";
import visaImage from "../../assets/images/visa.png";
import maestroImage from "../../assets/images/maestro.png";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="Footer__SignUpNews">
          <div className="Footer__SignUpNews--title">
            <h2>Sign Up To Our Newsletter.</h2>
            <p>Be the first to hear about the latest offers.</p>
          </div>
          <div className="Footer__SignUpNews--form">
            <Input className="input--email" placeholder="Your Email" />
            <Button
              className="btn--subscribe"
              type="primary"
              shape="round"
              size={14}
            >
              Subscribe
            </Button>
          </div>
        </div>
        <div className="Footer__information">
          <div className="Footer__information--about">
            <h2>Information</h2>
            <p>About Us</p>
            <p>About Zip</p>
            <p>Privacy Policy</p>
            <p>Search</p>
            <p>Terms</p>
            <p>Orders and Returns</p>
            <p>Contact Us</p>
            <p>Advanced Search</p>
            <p>Newsletter Subscription</p>
          </div>

          <div className="Footer__information--PC">
            <h2>PC Parts</h2>
            <p>CPUS</p>
            <p>Add On Cards</p>
            <p>Hard Drives (Internal)</p>
            <p>Keyboards / Mice</p>
            <p>Cases / Power Supplies / Cooling</p>
            <p>RAM (Memory)</p>
            <p>Software</p>
            <p>Speakers / Headsets</p>
            <p>Motherboards</p>
          </div>
          <div className="Footer__information--desktop">
            <h2>Desktop PCs</h2>
            <p>Custom PCs</p>
            <p>Servers</p>
            <p>MSI All-In-One PCs</p>
            <p>HP/Compaq PCs</p>
            <p>ASUS PCs</p>
            <p>Tecs PCs</p>
          </div>
          <div className="Footer__information--laptop">
            <h2>Laptops</h2>
            <p>Evryday Use Notebooks</p>
            <p>MSI Workstation Series</p>
            <p>MSI Prestige Series</p>
            <p>Tablets and Pads</p>
            <p>Netbooks</p>
            <p>Infinity Gaming Notebooks</p>
          </div>
          <div className="Footer__information--address">
            <h2>Address</h2>
            <p>Address: 1234 Street Adress City Address, 1234</p>
            <p>
              Phones: <a>(00) 1234 5678</a>
            </p>
            <p>We are open: Monday-Thursday: 9:00 AM - 5:30 PM</p>
            <p>Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 11:00 AM - 5:00 PM</p>
            <p>
              E-mail: <a>shop@email.com</a>
            </p>
          </div>
        </div>
        <div className="Footer__social">
          <div className="Footer__social--socialNetwork">
            <FacebookOutlined className="iconFacebook" />
            <InstagramOutlined className="iconInstagram" />
          </div>
          <div className="Footer__social--pay">
            <Link>
              <img src={paypalImage} alt="" />
            </Link>
            <Link>
              <img src={visaImage} alt="" />
            </Link>
            <Link>
              <img src={americanExpressrImage} alt="" />
            </Link>
            <Link>
              <img src={maestroImage} alt="" />
            </Link>
            <Link>
              <img src={discoverImage} alt="" />
            </Link>
          </div>
          <div className="Footer__social--copyright">
            <span>Copyright © 2020 Shop Pty. Ltd.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
