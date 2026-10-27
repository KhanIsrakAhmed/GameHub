import React from "react";
import { useLoaderData } from "react-router-dom";
import GameCard from "../components/GameCard";
import { Helmet } from "react-helmet";

const Games = () => {
  const gameData = useLoaderData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 py-12 px-5">
      <Helmet>
        <title>Games - GameHub</title>
      </Helmet>

      <h1 className="text-center font-extrabold text-4xl sm:text-5xl mb-10 text-gray-800">
        All Games <span className="text-purple-600">({gameData.length})</span>
      </h1>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {gameData.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </div>
    </div>
  );
};

export default Games;
