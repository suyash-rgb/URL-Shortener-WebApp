import React from "react";
import { motion } from "framer-motion";
const Card = ({ title, desc }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 120 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{ scale: 1.05, //Slightly enlarges the card 
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)", //Adds depth effect on hover
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="shadow-md shadow-slate-400 border flex flex-col px-4 py-8  gap-3 rounded-sm bg-white"
    >
      <h1 className="text-slate-900 text-xl font-bold ">{title}</h1>
      <p className="text-slate-700 text-sm"> {desc}</p>
    </motion.div>
  );
};

export default Card;