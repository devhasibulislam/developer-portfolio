import React from "react";
import { motion } from "framer-motion";
import { IoMdArrowDropright } from "react-icons/io";
//
import { skills } from "@modules/Home/config/constanst";
import { fadeTop, motionStep } from "@config/motion";

const Left = () => {
  // content
  const content = [
    "Hasibul Islam who helps small and medium businesses particularly agencies or companies and individuals by providing top-notch, high-quality and reliable website development support",
    "So they can focus on what they do best, increase productivity, take on new clients and grow their business. He has partnered with businesses, marketing professionals, agencies, and consultancies from around the world since 2021, becoming his extended development department.",
    "Feel free to articulate your requirements, and I will meticulously analyze and propose a tailored solution. If you find my expertise aligns with your needs, please engage further; otherwise, I appreciate your consideration.",
    "Let's collaborate and turn your ideas into remarkable digital experiences! Here are a few technologies I have been working with recently:",
  ];

  return (
    <motion.div variants={fadeTop} {...motionStep} className="col-span-3">
      <div className="space-y-4 mt-7 text-slate-400">
        {content.map((e: string, i: number) => (
          <p key={i}> {e} </p>
        ))}

        <div className="__skills md:pr-56">
          <ul className="grid grid-cols-2 space-y-2">
            {skills.map((e: string, i: number) => (
              <li
                key={i}
                className="gap-1 flex items-center transition-all duration-300 hover:translate-x-[7px] select-none hover:text-sky-400"
              >
                {" "}
                <IoMdArrowDropright className="text-sky-400 text-xl" /> {e}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Left;
