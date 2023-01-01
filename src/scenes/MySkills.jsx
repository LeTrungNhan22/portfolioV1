import React from "react";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import LineGradient from "../components/LineGradient";
import skillsImage from "../assets/skills-image.png";

const MySkills = () => {
  const skills = [
    {
      id: "01",
      title: "EXPERIENCE",
      content:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error vel beatae cum corporis possimus, quasi odio excepturi officiis praesentium architecto sint",
      backgroundColor: "bg-blue",
      delayTime: 0.0,
    },
    {
      id: "02",
      title: "INNOVATIVE",
      content:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error vel beatae cum corporis possimus, quasi odio excepturi officiis praesentium architecto sint",
      backgroundColor: "bg-red",
      delayTime: 0.2,
    },
    {
      id: "03",
      title: "IMAGINATIVE",
      content:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error vel beatae cum corporis possimus, quasi odio excepturi officiis praesentium architecto sint",
      backgroundColor: "bg-yellow",
      delayTime: 0.4,
    },
  ];
  const isAboveMediumScreen = useMediaQuery("(min-width : 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE  SECTION */}
      <div
        className="md:flex md:justify-between md:gap-16
                      mt-32"
      >
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3"></LineGradient>
          <p className="mt-10 mb-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            magnam accusamus, doloremque velit quisquam quis doloribus odit sunt
            necessitatibus, asperiores libero itaque consequatur debitis vero
            aliquid nesciunt rem, repellendus perferendis!
          </p>
        </motion.div>
        <div className="md:mt-0 mt-16">
          {isAboveMediumScreen ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:rounded-md before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img alt="skills" src={skillsImage} className="z-10 rounded-md" />
            </div>
          ) : (
            <img alt="skills" src={skillsImage} className="z-10 rounded-md" />
          )}
        </div>
      </div>
      {/* HEADER AND IMAGE  SECTION */}
      {/* SKILLS CONTENT */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        {skills.map(({ id, title, backgroundColor, content, delayTime }) => (
          <motion.div
            key={id}
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: delayTime, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="relative h-32">
              <div className="z-10">
                <p className="font-playfair font-semibold text-5xl">{id}</p>
                <p className="font-playfair font-semibold text-3xl mt-3">
                  {title}
                </p>
              </div>
              <div
                className={`w-1/2 md:w-3/4 h-32 ${backgroundColor} absolute right-0 top-0 z-[-1]`}
              ></div>
            </div>
            <p className="mt-5">{content}</p>
          </motion.div>
        ))}

        {/* EXPERIENCE */}
      </div>

      {/* SKILLS CONTENT */}
    </section>
  );
};

export default MySkills;
