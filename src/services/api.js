const API_KEY = "";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${'948d14724fbce2e31bfbbc41e0199188'}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${'948d14724fbce2e31bfbbc41e0199188'}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};