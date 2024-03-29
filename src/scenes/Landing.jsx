import React from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import profileImage from "../assets/landing/profile-image.png";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreen = useMediaQuery("(min-width : 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="md:order-2 flex justify-center basis-2/4 z-10 mt-16 md:mt-32">
        {isAboveMediumScreen ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-16 before:-left-16
           before:rounded-md before:w-full before:max-w-[400px] 
           before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt=""
              src={profileImage}
              className="hover:filter hover:saturate-150 transition duration-500 z-10 w-full
              max-w-[300px] md:max-w-[300px] rounded-md"
            />
          </div>
        ) : (
          <img
            alt=""
            src={profileImage}
            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
          max-w-[300px] md:max-w-[300px] rounded-md"
          />
        )}
      </div>
      {/* MAIN SECTION */}
      <div className="z-30 basis-2/4 mt-12 md:mt-32">
        {/* HEADING */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Le {""}
            <span
              className="xs:relative xs:text-white xs:font-semibold z-20
                            xs:before:content-brush before:absolute before:-left-[25px] before:-top-[70px]
                            before:z-[-1]"
            >
              Trung Nhan
            </span>
          </p>
          <p className="mt-10 mb-7 text-center md:text-start">

            Hello, I'm Le Trung Nhan, a passionate and creative Frontend Developer. With a solid foundation in HTML, CSS, and JavaScript, I constantly seek opportunities to craft exceptional and user-optimized user interface experiences.
          </p>
        </motion.div>
        {/* HEADING */}

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex justify-center mt-5 md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-l-sm py-3 px-7 font-semibold
                        hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue-reverse py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div
              className="bg-deep-blue hover:text-red transition duration-500
                            rounded-r-sm
                            h-full w-full flex items-center font-playfair px-10"
            >
              Let's talk
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex justify-center mt-5 md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
        {/* CALL TO ACTIONS */}
      </div>
      {/* MAIN SECTION */}
    </section>
  );
};

export default Landing;
