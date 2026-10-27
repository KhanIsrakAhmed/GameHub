import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContextValue";
import { GameLibraryContext } from "./GameLibraryContextValue";

const GameLibraryProvider = ({ children }) => {
  const { user } = useContext(AuthContext);

  // Keys are per-user so data stays separate per account
  const libraryKey = user ? `gameLibrary_${user.uid}` : null;
  const playedKey = user ? `playedGames_${user.uid}` : null;

  const [library, setLibrary] = useState([]);
  const [playedGames, setPlayedGames] = useState([]);

  // Load from localStorage whenever user changes
  useEffect(() => {
    if (libraryKey) {
      const storedLibrary = JSON.parse(localStorage.getItem(libraryKey) || "[]");
      const storedPlayed = JSON.parse(localStorage.getItem(playedKey) || "[]");
      setLibrary(storedLibrary);
      setPlayedGames(storedPlayed);
    } else {
      setLibrary([]);
      setPlayedGames([]);
    }
  }, [libraryKey, playedKey]);

  // Persist library to localStorage
  const saveLibrary = (updated) => {
    if (libraryKey) localStorage.setItem(libraryKey, JSON.stringify(updated));
    setLibrary(updated);
  };

  // Persist played games to localStorage
  const savePlayed = (updated) => {
    if (playedKey) localStorage.setItem(playedKey, JSON.stringify(updated));
    setPlayedGames(updated);
  };

  // Add a game to the library (purchase)
  const addToLibrary = (game) => {
    if (library.find((g) => g.id === game.id)) return; // already owned
    saveLibrary([...library, game]);
  };

  // Remove a game from library (and played list)
  const removeFromLibrary = (gameId) => {
    saveLibrary(library.filter((g) => g.id !== gameId));
    savePlayed(playedGames.filter((g) => g.id !== gameId));
  };

  // Mark a game as played
  const markAsPlayed = (game) => {
    if (playedGames.find((g) => g.id === game.id)) return; // already marked
    savePlayed([...playedGames, { ...game, playedAt: new Date().toISOString() }]);
  };

  // Unmark a played game
  const unmarkAsPlayed = (gameId) => {
    savePlayed(playedGames.filter((g) => g.id !== gameId));
  };

  const isInLibrary = (gameId) => library.some((g) => g.id === gameId);
  const isPlayed = (gameId) => playedGames.some((g) => g.id === gameId);

  return (
    <GameLibraryContext.Provider
      value={{
        library,
        playedGames,
        addToLibrary,
        removeFromLibrary,
        markAsPlayed,
        unmarkAsPlayed,
        isInLibrary,
        isPlayed,
      }}
    >
      {children}
    </GameLibraryContext.Provider>
  );
};

export default GameLibraryProvider;
