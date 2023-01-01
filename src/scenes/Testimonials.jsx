import React from "react";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonialStyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col
                            justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px]
                            before:left-1/2`;

  const testimonialPersons = [
    {
      id: "1",
      contentImage: "person1",
      delayTime: 0.0,
      describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      bgColor: "bg-blue",
    },
    {
      id: "2",
      contentImage: "person2",
      delayTime: 0.2,
      describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      bgColor: "bg-red",
    },
    {
      id: "3",
      contentImage: "person3",
      delayTime: 0.4,
      describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      bgColor: "bg-yellow",
    },
  ];
  return (
    <section id="testimonials" className="pt-32 pb-16">
      {/*HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem magnam
          accusamus.
        </p>
      </motion.div>
      {/* HEADING   END */}

      {/* TESTIMONIALS SECTION */}
      <div className="md:flex md:justify-between gap-8">
        {testimonialPersons.map(
          ({ id, contentImage, delayTime, describe, bgColor }) => (
            <motion.div
              key={id}
              className={`${bgColor} ${testimonialStyles} before:content-${contentImage} rounded-md`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: delayTime, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
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
