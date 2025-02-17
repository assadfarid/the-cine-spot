import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import "../css/Favorites.css";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <div className="favorites">
      <h2>Favorite Movies ❤️</h2>
      {favorites.length === 0 ? (
        <p className="no-favorites">No favorite movies yet!</p>
      ) : (
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} isFavorite={true} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
