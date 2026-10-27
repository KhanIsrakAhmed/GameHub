import React from "react";
import { useNavigate } from "react-router-dom";
import { LiaStarHalfAltSolid } from "react-icons/lia";
import { motion } from "framer-motion";

const GameCard = ({ game }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      key={game.id}
      onClick={() => navigate(`/gameDetails/${game.id}`)}
      whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(168,85,247,0.4)" }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="relative bg-gradient-to-br from-purple-600/20 via-gray-900/40 to-blue-600/20 
                 p-[2px] rounded-2xl shadow-lg hover:shadow-purple-500/40 transition-all 
                 duration-300 cursor-pointer w-full sm:w-[90%] md:w-[320px] lg:w-[350px] mx-auto"
    >
      <div className="bg-base-200 rounded-2xl overflow-hidden">
        <div className="relative">
          <img
            src={game.image}
            alt={game.name}
            className="w-full h-56 sm:h-64 md:h-72 object-cover rounded-t-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-t-2xl"></div>

          <span className="absolute top-3 left-3 bg-purple-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
            {game.category}
          </span>
        </div>

        <div className="p-4">
          <h2 className="text-lg md:text-xl font-extrabold text-gray-800 line-clamp-1">
            {game.name}
          </h2>
          <p className="text-gray-500 text-sm mt-1 line-clamp-2">
            {game.description?.slice(0, 80) || "Explore this awesome game now!"}
          </p>

          <div className="flex justify-between items-center mt-4">
            <p className="flex items-center gap-1 text-yellow-400 font-semibold">
              {game.rating} <LiaStarHalfAltSolid />
            </p>
            <p className="text-blue-500 font-bold text-sm">💲{game.price}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GameCard;
