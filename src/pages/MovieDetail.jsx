// src/components/MovieDetail.js
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const { id } = useParams(); // Get movie ID from URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "ok") {
          setMovie(data.data.movie);
        }
      })
      .catch((error) => console.error("Error fetching movie details:", error))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!movie) return <p>Movie not found.</p>;

  return (
    <div style={{ maxWidth: "800px", margin: "auto", textAlign: "center" }}>
      <h1>{movie.title} ({movie.year})</h1>
      <img src={movie.large_cover_image} alt={movie.title} style={{ width: "300px", borderRadius: "10px" }} />
      <p><strong>Rating:</strong> {movie.rating}/10</p>
      <p><strong>Summary:</strong> {movie.description_intro || "No summary available."}</p>

      <h2>Cast</h2>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px" }}>
        {movie.cast ? (
          movie.cast.map((actor) => (
            <div key={actor.imdb_code} style={{ textAlign: "center" }}>
              <img src={actor.url_small_image} alt={actor.name} width="80" style={{ borderRadius: "50%" }} />
              <p>{actor.name} as {actor.character_name}</p>
            </div>
          ))
        ) : (
          <p>No cast information available.</p>
        )}
      </div>
    </div>
  );
}

export default MovieDetail;