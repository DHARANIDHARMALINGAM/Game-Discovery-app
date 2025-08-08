// src/components/GameCard.js
import React from "react";

const GameCard = ({ game }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
    <img
      src={game.background_image}
      alt={game.name}
      className="h-40 w-full object-cover"
    />
    <div className="p-4">
      <div className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-semibold">{game.name}</h3>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400">
        Released: {game.released}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Rating: {game.rating}/5
      </p>
    </div>
  </div>
);

export default GameCard;
