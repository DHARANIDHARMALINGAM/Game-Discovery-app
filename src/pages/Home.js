import { useEffect, useState } from "react";
import { fetchGenres, fetchGamesByGenre } from "../services/api";
import GameCard from "../components/GameCard";

const Home = () => {
  const [genres, setGenres] = useState([]);
  const [games, setGames] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);

  useEffect(() => {
    fetchGenres().then((data) => {
      if (data && Array.isArray(data.results)) {
        setGenres(data.results);
      }
    });
  }, []);

  useEffect(() => {
    if (selectedGenre) {
      fetchGamesByGenre(selectedGenre).then((data) => {
        if (data && Array.isArray(data.results)) {
          setGames(data.results);
        }
      });
    }
  }, [selectedGenre]);

  return (
    <div className="p-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 dark:from-green-400 dark:to-blue-500 mb-6 animate-pulse text-center">
  Welcome to the Game Discovery Application 🎮
</h2>

      <h2 className="text-xl font-bold mb-4">Select a Genre</h2>
      <div className="flex flex-wrap gap-2 mb-6">
        {genres.map((genre) => (
          <button
            key={genre.id}
            onClick={() => setSelectedGenre(genre.slug)}
            className={`px-4 py-2 rounded-lg border ${
              selectedGenre === genre.slug
                ? "bg-blue-600 text-white"
                : "bg hover:bg-gray-200"
            }`}
          >
            {genre.name}
          </button>
        ))}
      </div>

      <h2 className="text-xl font-bold mb-4">
        {selectedGenre ? `Games in "${selectedGenre}"` : "Select a genre"}
      </h2>

      {games.length === 0 ? (
        <p>No games loaded. Please select a genre.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
