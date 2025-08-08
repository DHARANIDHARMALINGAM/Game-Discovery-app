import React, { useEffect, useState } from "react";
import { fetchGames } from "../services/api";

const GameList = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGames = async () => {
      try {
        const data = await fetchGames();
        setGames(data);
      } catch (err) {
        console.error("API error", err);
      } finally {
        setLoading(false);
      }
    };

    loadGames();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-4 gap-4">
      {games.map((game) => (
        <div key={game.id} className="bg-gray-800 text-white rounded p-4">
          <img src={game.background_image} alt={game.name} className="w-full h-40 object-cover rounded" />
          <h2 className="mt-2 text-lg">{game.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default GameList;
