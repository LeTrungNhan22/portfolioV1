import React from "react";
import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, desc, link }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 
  transition duration-500 bg-grey z-30 flex flex-col justify-center items-center
  text-center p-16  text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair mb-3 font-bold">{title}</p>
        <a href={link || "#"} target="_blank" rel="noreferrer" className="text-2xl font-playfair text-red">
          View Project
        </a>
        <p className="mt-5">
          {desc}
        </p>
      </div>

      <img
        src={require(`../assets/project/${projectTitle}.jpeg`)}
        alt={projectTitle}
        className="w-[400px] h-[400px] object-cover"
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-48">
      {/* HEADING */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl ">
            MY <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3"></LineGradient>
          </div>
        </div>

        <p className="mt-10 mb-10">
          This is a collection of my projects. I have worked on a variety of projects, ranging from
          small to large scale. I have worked on a variety of projects, ranging from small to large
          scale.

        </p>
      </motion.div>
      {/* HEADING */}

      {/* PROJECT LIST */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex items-center  justify-center text-center  p-10 bg-red max-w-[400px] 
          max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            title="Project 1"
            link="https://share-prompts-mu.vercel.app/"
            desc="
            This is a shard prompt app. It is a place where you can share your prompts and see
            other people's prompts.
            "
          />
          <Project
            title="Project 2"
            link="https://ecommercial-v2.vercel.app/"
            desc="The e-commerce project, developed using Next.js and Spring Boot, presents a cutting-edge solution for businesses seeking to establish a robust online marketplace. Next.js ensures a dynamic and responsive user interface, facilitating smooth navigation and delightful shopping experiences for customers."
          />
          {/* ROW 1 */}
          {/* -------------------------- */}
          {/* ROW 2 */}
          <Project title="Project 3"
            desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus a
               fuga tempora labore facilis soluta."
          />
          <Project title="Project 4"
            desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus a
               fuga tempora labore facilis soluta."/>
          {/* ROW 2 */}

          <div
            className="flex items-center justify-center text-center  p-10 bg-blue max-w-[400px] 
          max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
          {/* ROW 3 */}
        </motion.div>
      </div>
      {/* PROJECT LIST */}
    </section>
  );
};

export default Projects;
