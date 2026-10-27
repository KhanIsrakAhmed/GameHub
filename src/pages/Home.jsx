import React, { useContext } from "react";
import { useLoaderData, Link } from "react-router-dom"; // ✅ react-router-dom ব্যবহার করো
import Newsletter from "../components/Newsletter";
import GameCard from "../components/GameCard";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import bannerImg from "../assets/Gemini_Generated_Image_31sfht31sfht31sf.png";
import { AuthContext } from "../contexts/AuthContextValue";

const Home = () => {
  const gamesData = useLoaderData();
 const {user} = useContext(AuthContext)
  const filteredGames = gamesData.filter((game) => game.rating >= 4.5);

  return (
    <div>
      <Helmet>
        <title>Home - GameHub</title>
      </Helmet>

      <section>
        <div
          style={{ backgroundImage: `url(${bannerImg})` }}
          className="bg-center bg-cover flex items-center justify-center min-h-screen px-5"
        >
          <motion.div
            className="text-center max-w-2xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 animate-text-shadow">
              CONNECT WITH GAMERS EVERYWHERE
            </h1>

            <p className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-500 to-yellow-500 animate-text-shadow mt-5 mb-8 text-lg sm:text-xl">
              Join our community to discuss your favorite games, share your
              content, and make new friends.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Link to={
                user ? '/games':'/login'
              
              }>
                <button className="px-6 py-3 text-lg font-bold rounded-lg bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/50 hover:shadow-purple-600/70 transition-all duration-300">
                  Get Started
                </button>
              </Link>
              <Link to="/about">
                <button className="px-6 py-3 text-lg font-bold rounded-lg bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white shadow-lg shadow-purple-500/30 transition-all duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="carousel mt-10 w-full h-[400px] rounded-xl shadow-lg">
          {filteredGames.slice(0, 3).map((game, index) => (
            <div
              key={game.id}
              id={`slide${index + 1}`}
              className="carousel-item relative w-full"
            >
              <img
                src={game.image}
                alt={game.name}
                className="w-full h-[400px] object-cover rounded-xl"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href={`#slide${index === 0 ? 3 : index}`}
                  className="btn btn-circle"
                >
                  ❮
                </a>
                <a
                  href={`#slide${index === 2 ? 1 : index + 2}`}
                  className="btn btn-circle"
                >
                  ❯
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 px-5">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-center font-bold text-5xl pb-10">
            Popular Games
          </h1>
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center p-5">
            {filteredGames.map((game) => (
              <GameCard game={game} key={game.id} />
            ))}
          </div>
        </motion.section>
      </section>
      <section className="mt-20 py-16 bg-blue-100">
        <Newsletter />
      </section>
    </div>
  );
};

export default Home;
