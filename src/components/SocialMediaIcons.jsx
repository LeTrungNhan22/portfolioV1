import React from "react";
import linkedinImage from "../assets/socialMedia/linkedin.png";
import facebookImage from "../assets/socialMedia/facebook.png";
import instagramImage from "../assets/socialMedia/instagram.png";
import githubImage from "../assets/socialMedia/github-mark-white.png";

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
        href="https://www.facebook.com/lltnhan"
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook" src={facebookImage} />
      </a>
      <a
        href="https://www.instagram.com/lltnhan/"
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram" src={instagramImage} />
      </a>
      <a
        href="https://github.com/LeTrungNhan22"
        className="hover:opacity-50 transition duration-500 "
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter" src={githubImage} className="h-[30px] w[30px]" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
