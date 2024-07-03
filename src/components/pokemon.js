import React from "react";
import { motion } from "framer-motion";

const Pokemon = ({ name }) => {
  return (
    <motion.div
      className="list-none border-2 flex flex-col items-center gap-4 rounded-lg shadow-md p-4 flex-1 min-w-[350px] cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ rotateY: 360 }}
      transition={{ type: "tween", stiffness: 500 }}
    >
      <li className="text-xl font-bold">{name.toUpperCase()}</li>
      <img src={`https://img.pokemondb.net/artwork/${name}.jpg`} />
    </motion.div>
  );
};

export default Pokemon;
