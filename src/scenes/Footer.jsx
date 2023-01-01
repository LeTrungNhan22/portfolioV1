import React from "react";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-52 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-400 to-pink-600 pt-10">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-playfair font-semibold text-2xl  text-yellow">
            LeTrungNhan
          </p>
          <p className="font-playfair text-md ">
            ©2023 letrungnhan. All Rights Reserved.{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
