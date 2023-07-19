import React from "react";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import profile1Image from "../assets/testimonials/person-1.png";

import profile2Image from "../assets/testimonials/person-2.png";
import profile3Image from "../assets/testimonials/person-3.png";


const Testimonials = () => {
  const testimonialStyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col
                            justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px]
                            before:left-1/2`;

  const testimonialPersons = [
    {
      id: "1",
      contentImage: profile1Image,
      delayTime: 0.0,
      describe: "Vu Van Minh - FullStack Developer with 1 year experience in Java Spring Boot",
      bgColor: "bg-gradient-to-r from-cyan-500 to-blue-500",
    },
    {
      id: "2",
      contentImage: profile2Image,
      delayTime: 0.2,
      describe: "Ho Xuan THinh - Frontend Developer with 1 year experience in ReactJS",
      bgColor: "bg-gradient-to-r from-pink-500 to-blue-500",
    },
    {
      id: "3",
      contentImage: profile3Image,
      delayTime: 0.4,
      describe: "Tran Trong Nghia - Front Developer with ability to learn new technology quickly",
      bgColor: "bg-gradient-to-r from-amber-500 to-blue-500",
    },
  ];

  return (
    <section id="testimonials" className="pt-32 pb-16">
      {/*HEADING */}
      <motion.div
        className="md:w-2/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          TESTIMONIALS
        </p>
        <LineGradient width="w-2/4 mx-auto"></LineGradient>
        <p className="mt-10">
          Through the positive feedback from satisfied clients and colleagues, my dedication to delivering high-quality frontend solutions that exceed expectations is evident. The testimonials highlight my strong communication skills, reliability, and ability to translate ideas into visually compelling and user-friendly interfaces.
        </p>
      </motion.div>
      {/* HEADING   END */}

      {/* TESTIMONIALS SECTION */}
      <div className="md:flex md:justify-between gap-8">
        {testimonialPersons && testimonialPersons.map(
          ({ id, contentImage, delayTime, describe, bgColor }) => (
            <motion.div
              key={id}
              className={`${bgColor} 
              ${testimonialStyles} before:  rounded-md`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: delayTime, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <div className="flex justify-center ">
                <img
                  src={contentImage}
                  alt=""
                  className="h-40 w-40 rounded-full absolute -top-12 "
                />
              </div>
              <p className="font-playfair text-6xl">”</p>
              <p className="text-center">{describe}</p>

            </motion.div>
          )
        )}
      </div>

      {/* TESTIMONIALS SECTION END */}
    </section>
  );
};

export default Testimonials;
