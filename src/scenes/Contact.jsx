import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="py-48">
      {/*   HEADINGS */}
      <motion.div
        className="flex justify-end w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className="font-playfair  font-semibold text-4xl">
            <span className="text-yellow"> CONTACT ME </span>TO GET STARTED
          </p>
          <div className="flex md:justify-center my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>
      {/*   HEADINGS END */}

      {/* FORM AND IMAGES */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          className="basis-1/2 mt-10 md:mt-0 mb-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img
            alt="contact"
            src={require("../assets/landing/contact-image.jpeg")}
            className="rounded-md"
          />
        </motion.div>
        <motion.div
          className="basis-1/2 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            // target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/letrungnhan220801@gmail.com"
            method="POST"
          >
            <input
              type="text"
              className="w-full rounded-md shadow-md bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-400 to-sky-200 font-semibold placeholder-opaque-black p-3"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <div className="text-red mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char"}
              </div>
            )}

            <input
              type="text"
              className="w-full rounded-md  shadow-md  bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-400 to-sky-200 font-semibold placeholder-opaque-black p-3 mt-5"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
              })}
            />
            {errors.email && (
              <div className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address"}
              </div>
            )}

            <textarea
              type="text"
              className="w-full rounded-md  shadow-md  bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-400 to-sky-200 font-semibold placeholder-opaque-black p-3 mt-5"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <div className="text-red mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char"}
              </div>
            )}
            <button
              type="submit"
              class="relative mt-5 p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
            >
              <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
              <span class="relative px-6 py-3 transition-all ease-out bg-deep-blue rounded-md group-hover:bg-opacity-0 duration-400">
                <span class="relative text-white">SEND ME A MESSAGE</span>
              </span>
            </button>
          </form>
        </motion.div>
      </div>
      {/* FORM AND IMAGES END */}
    </section>
  );
};

export default Contact;
