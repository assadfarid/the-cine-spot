import { Link } from "react-router-dom";

function MovieCard({ movie, onLike, isFavorite }) {
    return (
        <div className="movie-card">
            <Link to={`/movie/${movie.id}`}>
                <img src={movie.medium_cover_image} alt={movie.title} className="movie-image" />
            </Link>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p className="movie-year">{movie.year}</p>
                <p className="movie-genres">
                    {movie.genres ? movie.genres.join(", ") : "No genres available"}
                </p>
                <button className={`like-button ${isFavorite ? "liked" : ""}`} onClick={() => onLike(movie)}>
                    {isFavorite ? "❤️" : "♡"}
                </button>
            </div>
        </div>
    );
}

export default MovieCard;