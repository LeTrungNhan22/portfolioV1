import React from "react";
import linkedinImage from "../assets/linkedin.png";
import facebookImage from "../assets/facebook.png";
import instagramImage from "../assets/instagram.png";
import twitterImage from "../assets/twitter.png";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-5 gap-7">
      <a
        href="https://www.linkedin.com"
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linked-in" src={linkedinImage} />
      </a>
      <a
        href="https://www.facebook.com"
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook" src={facebookImage} />
      </a>
      <a
        href="https://www.instagram.com"
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram" src={instagramImage} />
      </a>
      <a
        href="https://www.twitter.com"
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter" src={twitterImage} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
