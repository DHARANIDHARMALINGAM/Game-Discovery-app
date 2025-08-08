const API_KEY = process.env.REACT_APP_RAWG_API_KEY;
const BASE_URL = "https://api.rawg.io/api";

export const fetchGenres = async () => {
  const res = await fetch(`${BASE_URL}/genres?key=${API_KEY}`);
  return await res.json();
};

export const fetchGames = async () => {
  const res = await fetch(`${BASE_URL}/games?key=${API_KEY}`);
  return await res.json();
};

// ✅ Add this function to fix the error
export const fetchGamesByGenre = async (genreSlug) => {
  const res = await fetch(`${BASE_URL}/games?genres=${genreSlug}&key=${API_KEY}`);
  return await res.json();
};
