// src/components/Home.js
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json?limit=10")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "ok") {
          setMovies(data.data.movies);
        }
      })
      .catch((error) => console.error("Error fetching movie list:", error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading movies...</p>;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>YTS Movie List</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "20px", maxWidth: "800px", margin: "auto" }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ textAlign: "center" }}>
            <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "black" }}>
              <img src={movie.medium_cover_image} alt={movie.title} style={{ width: "100%", borderRadius: "10px" }} />
              <p>{movie.title} ({movie.year})</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;