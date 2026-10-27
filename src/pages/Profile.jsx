import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContextValue";
import { GameLibraryContext } from "../contexts/GameLibraryContextValue";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaTrashAlt, FaBookmark, FaCheckCircle } from "react-icons/fa";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import toast from "react-hot-toast";

// Mini game card used inside profile sections
const ProfileGameCard = ({ game, actions }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.25 }}
    className="bg-base-200 rounded-2xl overflow-hidden shadow-md border border-base-300 hover:shadow-lg transition-all duration-300"
  >
    <div className="relative">
      <img
        src={game.image}
        alt={game.name}
        className="w-full h-36 object-cover"
      />
      <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">
        {game.category}
      </span>
    </div>
    <div className="p-3">
      <h3 className="font-bold text-sm line-clamp-1">{game.name}</h3>
      <div className="flex items-center justify-between mt-1 text-xs text-gray-500">
        <span className="flex items-center gap-1">
          <FaStar className="text-yellow-400" /> {game.rating}
        </span>
        <span className="text-blue-500 font-semibold">
          {game.price === 0 ? "Free" : `$${game.price}`}
        </span>
      </div>
      {game.playedAt && (
        <p className="text-xs text-gray-400 mt-1">
          Played: {new Date(game.playedAt).toLocaleDateString()}
        </p>
      )}
      <div className="flex gap-2 mt-3">{actions}</div>
    </div>
  </motion.div>
);

const Profile = () => {
  const { user } = useContext(AuthContext);
  const {
    library,
    playedGames,
    removeFromLibrary,
    markAsPlayed,
    unmarkAsPlayed,
    isPlayed,
  } = useContext(GameLibraryContext);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("library");

  const handleRemoveFromLibrary = (game) => {
    removeFromLibrary(game.id);
    toast("Removed from Library", { icon: "🗑️" });
  };

  const handleTogglePlayed = (game) => {
    if (isPlayed(game.id)) {
      unmarkAsPlayed(game.id);
      toast("Removed from Played Games", { icon: "🎮" });
    } else {
      markAsPlayed(game);
      toast.success(`${game.name} marked as Played!`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 py-10 px-4">
      <Helmet>
        <title>My Profile - GameHub</title>
      </Helmet>

      {/* ── Profile Card ── */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card w-full max-w-md shadow-2xl bg-base-100 mx-auto mb-10"
      >
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center mb-2">My Profile</h2>
          <p className="text-center text-gray-500 mb-6">
            Manage your account information
          </p>

          <div className="text-center mb-6">
            <img
              src={
                user?.photoURL ||
                "https://i.ibb.co.com/Q3LYhjtx/pngtree-user-icon-png-image-1796659.jpg"
              }
              alt="User Avatar"
              className="w-24 h-24 mx-auto rounded-full border-4 border-gray-200 shadow-md mb-3 object-cover"
            />
            <h3 className="text-xl font-semibold">
              {user?.displayName || "No Name"}
            </h3>
            <p className="text-gray-500">{user?.email}</p>
          </div>

          {/* Stats row */}
          <div className="flex justify-center gap-8 mb-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">{library.length}</p>
              <p className="text-xs text-gray-500">In Library</p>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">{playedGames.length}</p>
              <p className="text-xs text-gray-500">Games Played</p>
            </div>
          </div>

          <button
            onClick={() => navigate("/updateProfile")}
            className="btn btn-primary w-full"
          >
            Update Profile
          </button>
        </div>
      </motion.div>

      {/* ── Game Sections ── */}
      <div className="max-w-5xl mx-auto">
        {/* Tab switcher */}
        <div className="flex gap-3 mb-6 justify-center">
          <button
            onClick={() => setActiveTab("library")}
            className={`btn gap-2 ${
              activeTab === "library" ? "btn-primary" : "btn-ghost"
            }`}
          >
            <FaBookmark />
            Game Library
            {library.length > 0 && (
              <span className="badge badge-sm">{library.length}</span>
            )}
          </button>
          <button
            onClick={() => setActiveTab("played")}
            className={`btn gap-2 ${
              activeTab === "played" ? "btn-success" : "btn-ghost"
            }`}
          >
            <FaCheckCircle />
            Played Games
            {playedGames.length > 0 && (
              <span className="badge badge-sm">{playedGames.length}</span>
            )}
          </button>
        </div>

        {/* ── GAME LIBRARY TAB ── */}
        {activeTab === "library" && (
          <motion.div
            key="library"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-base-100 rounded-2xl shadow-md p-6 mb-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">📚</span>
                <div>
                  <h2 className="text-xl font-bold">Game Library</h2>
                  <p className="text-sm text-gray-500">
                    Games you own or have purchased — your personal collection.
                  </p>
                </div>
              </div>
            </div>

            {library.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 bg-base-100 rounded-2xl shadow-md"
              >
                <MdOutlineBookmarkAdd className="text-6xl text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500 font-medium">Your library is empty.</p>
                <p className="text-gray-400 text-sm mt-1 mb-4">
                  Visit a game page and click "Add to Library" to start your collection.
                </p>
                <button
                  onClick={() => navigate("/games")}
                  className="btn btn-primary btn-sm"
                >
                  Browse Games
                </button>
              </motion.div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                <AnimatePresence>
                  {library.map((game) => (
                    <ProfileGameCard
                      key={game.id}
                      game={game}
                      actions={
                        <>
                          <button
                            onClick={() => handleTogglePlayed(game)}
                            title={isPlayed(game.id) ? "Unmark Played" : "Mark as Played"}
                            className={`btn btn-xs flex-1 gap-1 ${
                              isPlayed(game.id)
                                ? "btn-success"
                                : "btn-outline btn-success"
                            }`}
                          >
                            <FaCheckCircle className="text-xs" />
                            {isPlayed(game.id) ? "Played" : "Play"}
                          </button>
                          <button
                            onClick={() => handleRemoveFromLibrary(game)}
                            title="Remove from Library"
                            className="btn btn-xs btn-error btn-outline"
                          >
                            <FaTrashAlt className="text-xs" />
                          </button>
                        </>
                      }
                    />
                  ))}
                </AnimatePresence>
              </div>
            )}
          </motion.div>
        )}

        {/* ── PLAYED GAMES TAB ── */}
        {activeTab === "played" && (
          <motion.div
            key="played"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-base-100 rounded-2xl shadow-md p-6 mb-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🎮</span>
                <div>
                  <h2 className="text-xl font-bold">Played Games</h2>
                  <p className="text-sm text-gray-500">
                    Games you've played — track your gaming history and progress.
                  </p>
                </div>
              </div>
            </div>

            {playedGames.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 bg-base-100 rounded-2xl shadow-md"
              >
                <FaCheckCircle className="text-6xl text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500 font-medium">No played games yet.</p>
                <p className="text-gray-400 text-sm mt-1 mb-4">
                  Open any game page and click "Mark as Played" to log it here.
                </p>
                <button
                  onClick={() => navigate("/games")}
                  className="btn btn-success btn-sm"
                >
                  Browse Games
                </button>
              </motion.div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                <AnimatePresence>
                  {playedGames.map((game) => (
                    <ProfileGameCard
                      key={game.id}
                      game={game}
                      actions={
                        <button
                          onClick={() => handleTogglePlayed(game)}
                          title="Remove from Played"
                          className="btn btn-xs btn-error btn-outline w-full gap-1"
                        >
                          <FaTrashAlt className="text-xs" /> Remove
                        </button>
                      }
                    />
                  ))}
                </AnimatePresence>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Profile;
