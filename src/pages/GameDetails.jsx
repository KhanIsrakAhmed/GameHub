import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStar, FaDownload, FaBookmark, FaCheckCircle } from "react-icons/fa";
import { MdOutlineBookmarkAdd, MdOutlineCheckCircle } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";
import { GameLibraryContext } from "../contexts/GameLibraryContextValue";
import { AuthContext } from "../contexts/AuthContextValue";
import toast from "react-hot-toast";

const GameDetails = () => {
  const gamesData = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { addToLibrary, markAsPlayed, unmarkAsPlayed, isInLibrary, isPlayed } =
    useContext(GameLibraryContext);

  const game = gamesData.find((g) => g.id === parseInt(id));

  if (!game) {
    return (
      <div className="text-center mt-20 text-2xl font-bold text-gray-700">
        Game not found!
      </div>
    );
  }

  const inLibrary = isInLibrary(game.id);
  const played = isPlayed(game.id);

  const handleAddToLibrary = () => {
    if (!user) {
      toast.error("Please login to add games to your library!");
      navigate("/login");
      return;
    }
    if (inLibrary) {
      toast("Already in your library!", { icon: "📚" });
      return;
    }
    addToLibrary(game);
    toast.success(`${game.name} added to your Library!`);
  };

  const handleMarkPlayed = () => {
    if (!user) {
      toast.error("Please login to track played games!");
      navigate("/login");
      return;
    }
    if (played) {
      unmarkAsPlayed(game.id);
      toast("Removed from Played Games", { icon: "🎮" });
    } else {
      markAsPlayed(game);
      toast.success(`${game.name} marked as Played!`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-5xl mx-auto my-12 px-5"
    >
      <Helmet>
        <title>{game.name} - GameHub</title>
      </Helmet>

      {/* Game Image */}
      <motion.div
        initial={{ scale: 0.97 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
        className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300"
      >
        <img
          src={game.image}
          alt={game.name}
          className="w-full h-[400px] object-cover"
        />
      </motion.div>

      {/* Game Details */}
      <div className="mt-8 bg-white rounded-2xl shadow-md p-8 border border-gray-100">
        <h1 className="text-4xl font-bold mb-3 text-gray-800">{game.name}</h1>
        <p className="text-gray-600 mb-5 leading-relaxed">{game.description}</p>

        <div className="flex flex-wrap gap-6 mb-6">
          <p className="text-gray-700">
            <span className="font-semibold">Category:</span> {game.category}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Developer:</span> {game.developer}
          </p>
          <p className="text-gray-700 flex items-center gap-1">
            <FaStar className="text-yellow-500" /> {game.rating}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Release Year:</span>{" "}
            {game.release_year}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Price:</span>{" "}
            {game.price === 0 ? "Free" : `$${game.price}`}
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex justify-center gap-4 flex-wrap">
          {/* Install / Download Button */}
          <motion.a
            href={game.downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08, boxShadow: "0 0 15px rgba(59,130,246,0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition-all duration-300"
          >
            <FaDownload /> Install / Download
          </motion.a>

          {/* Add to Library Button */}
          <motion.button
            onClick={handleAddToLibrary}
            whileHover={{ scale: 1.08, boxShadow: "0 0 15px rgba(168,85,247,0.5)" }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold shadow-md transition-all duration-300 ${
              inLibrary
                ? "bg-purple-200 text-purple-800 cursor-default"
                : "bg-purple-600 text-white hover:bg-purple-700"
            }`}
          >
            {inLibrary ? <FaBookmark /> : <MdOutlineBookmarkAdd className="text-lg" />}
            {inLibrary ? "In Library" : "Add to Library"}
          </motion.button>

          {/* Mark as Played Button */}
          <motion.button
            onClick={handleMarkPlayed}
            whileHover={{ scale: 1.08, boxShadow: "0 0 15px rgba(34,197,94,0.5)" }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold shadow-md transition-all duration-300 ${
              played
                ? "bg-green-200 text-green-800"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            {played ? <FaCheckCircle /> : <MdOutlineCheckCircle className="text-lg" />}
            {played ? "Played ✓" : "Mark as Played"}
          </motion.button>

          {/* Back to Games Button */}
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0 0 15px rgba(100,116,139,0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/games")}
            className="inline-flex items-center gap-2 bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-700 transition-all duration-300"
          >
            <IoGameControllerOutline /> Back to Games
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default GameDetails;
