import React from "react";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import LineGradient from "../components/LineGradient";
import skillsImage from "../assets/landing/skills-image.png";

const MySkills = () => {
  const skills = [
    {
      id: "01",
      title: "EXPERIENCE",
      content:
        "3-month internship in Java front-end position at Long Van Solution Company, ensuring the role of building UI for Inventory using JSF, Java Core, JSP technology",
      backgroundColor: "bg-gradient-to-r from-cyan-500 to-blue-500",
      delayTime: 0.0,
    },
    {
      id: "02",
      title: "INNOVATIVE",
      content:
        "With a keen eye for emerging technologies and a passion for experimentation, I continuously seek innovative solutions that elevate user experiences and streamline frontend development processes. My ability to think outside the box and implement cutting-edge techniques empowers me to deliver forward-thinking and dynamic web applications that leave a lasting impact.",
      backgroundColor: "bg-gradient-to-r from-pink-500 to-blue-500",
      delayTime: 0.2,
    },
    {
      id: "03",
      title: "IMAGINATIVE",
      content:
        "  My creativity and imagination drive me to constantly explore new and unique approaches to frontend development, resulting in captivating and original user interface designs. I enjoy pushing the boundaries of traditional web development to create imaginative and immersive digital experiences for users.t",
      backgroundColor: "bg-gradient-to-r from-amber-500 to-blue-500",
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
          <p className="mt-10 ">
            As a skilled Frontend Developer, I possess a strong command of HTML, CSS, and JavaScript, enabling me to create visually appealing and responsive web interfaces. I am proficient in implementing modern design principles, utilizing CSS frameworks like Bootstrap and Tailwind CSS to ensure seamless user experiences across various devices.
          </p>
          <br />
          <p>
            With expertise in frontend libraries and frameworks such as React and Vue.js, I excel in building interactive and dynamic user interfaces. I am well-versed in using AJAX and RESTful APIs to integrate backend functionalities seamlessly, ensuring smooth data flow and efficient performance.
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
      <div className="md:flex md:justify-between mt-16 gap-32 flex-wrap">
        {/* EXPERIENCE */}
        {skills.map(({ id, title, backgroundColor, content, delayTime }) => (
          <motion.div
            key={id}
            className="md:w-1/4 mt-10"
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
                className={`w-1/2 md:w-3/4 rounded h-32 ${backgroundColor} absolute right-0 top-0 z-[-1]`}
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
