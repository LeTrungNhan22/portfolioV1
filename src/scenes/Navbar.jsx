import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import menuIcon from "../assets/menu-icon.svg";
import closeMenuIcon from "../assets/close-icon.svg";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage
          ? "text-yellow"
          : "hover:text-yellow transition duration-500"
      }`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const links = [
    {
      link: (
        <Link
          page="Home"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        ></Link>
      ),
    },
    {
      link: (
        <Link
          page="Skills"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        ></Link>
      ),
    },
    {
      link: (
        <Link
          page="Projects"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        ></Link>
      ),
    },
    {
      link: (
        <Link
          page="Testimonials"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        ></Link>
      ),
    },
    {
      link: (
        <Link
          page="Contact"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        ></Link>
      ),
    },
  ];
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage
    ? ""
    : "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500";
  return (
    <nav
      className={`${navbarBackground} z-40 w-full fixed py-6 transition-all duration-500 
       `}
    >
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">LTN</h4>

        {/* DESKTOP NAV */}
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            {links.map((item, index) => (
              <div key={index}>{item.link}</div>
            ))}
          </div>
        ) : (
          <div>
            <button
              className="rounded-full p-2 bg-red"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <img alt="menu-icon" src={menuIcon} />
            </button>
          </div>
        )}

        {/* MOBILE MENU POPUP */}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
            {/* CLOSE MENU ICON */}
            <div className="justify-end flex p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src={closeMenuIcon} />
              </button>
            </div>
            {/* CLOSE MENU ICON */}
            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              {links.map((item, index) => (
                <div key={index}>{item.link}</div>
              ))}
            </div>
            {/* MENU ITEMS */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
