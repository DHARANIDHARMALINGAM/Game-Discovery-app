
import React, { useState } from "react";
import { mockGames } from "../mockGames";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedRating, setSelectedRating] = useState("");

  const filteredGames = mockGames.filter((game) => {
    const matchesSearch = game.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre ? game.genre === selectedGenre : true;
    const matchesRating = selectedRating ? game.rating >= parseFloat(selectedRating) : true;
    return matchesSearch && matchesGenre && matchesRating;
  });

  const uniqueGenres = [...new Set(mockGames.map((game) => game.genre))];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-500 to-green-500 text-center mb-8">
  Game Discovery Platform
</h1>

        {/* Filters Section */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search by name..."
            className="p-3 rounded-lg w-full md:w-1/3 bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Genre Filter */}
          <select
            className="p-3 rounded-lg w-full md:w-1/3 bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="">Filter by Genre</option>
            {uniqueGenres.map((genre, index) => (
              <option key={index} value={genre}>
                {genre}
              </option>
            ))}
          </select>

          {/* Rating Filter */}
          <select
            className="p-3 rounded-lg w-full md:w-1/3 bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105"
            value={selectedRating}
            onChange={(e) => setSelectedRating(e.target.value)}
          >
            <option value="">Filter by Rating</option>
            <option value="4.0">4.0 and above</option>
            <option value="4.5">4.5 and above</option>
          </select>
        </div>

        {/* Games List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGames.map((game) => (
            <div
              key={game.id}
              className="relative bg-gray-800 rounded-xl shadow-2xl overflow-hidden group transform hover:scale-105 transition-all duration-300"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-300"
                style={{
                  backgroundImage: `url(${game.background_image})`,
                  filter: "brightness(40%)", // Default brightness (darkened)
                }}
              ></div>

              {/* Game Details */}
              <div className="relative p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-2xl font-semibold text-white mb-4">{game.name}</h2>
                <p className="text-gray-300">Genre: {game.genre}</p>
                <p className="text-gray-300">Released: {game.released}</p>
                <p className="text-gray-300">Rating: {game.rating}</p>
              </div>
            </div>
          ))}
        </div>

        {/* No Games Found */}
        {filteredGames.length === 0 && (
          <p className="text-center text-gray-500 mt-8">No games found. Try adjusting your filters.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
