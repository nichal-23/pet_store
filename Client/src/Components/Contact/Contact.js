import React from "react";
import developerPng from "./images/developer-png.png";

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>
        <i class="fa fa-envelope"></i>
        <a class="mail-links" href="mailto:kashifkzmi5@gmail.com">
          nikki15j6@gmail.com
        </a>

        <i class="fa fa-phone"></i>
        <a class="mail-links" href="tel:+919849675199">
          +91 98496 75199
        </a>
      </div>
      <div className="contactUs-pic">
        <img src={developerPng} alt="Profile"/>
      </div>
    </div>
  );
};

export default Contact;
