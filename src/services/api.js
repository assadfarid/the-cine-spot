const BASE_URL = "https://yts.mx/api/v2";

// Fetch Movies with Pagination
export const getPopularMovies = async (page = 1) => {
    try {
        const response = await fetch(`${BASE_URL}/list_movies.json?limit=20&page=${page}`);
        const data = await response.json();
        return data.data.movies || [];
    } catch (error) {
        console.error("Error fetching popular movies:", error);
        return [];
    }
};

// Search Movies with Pagination
export const searchMovies = async (query, page = 1) => {
    try {
        const response = await fetch(
            `${BASE_URL}/list_movies.json?query_term=${encodeURIComponent(query)}&limit=20&page=${page}`
        );
        const data = await response.json();
        return data.data.movies || [];
    } catch (error) {
        console.error("Error searching movies:", error);
        return [];
    }
};


// Fetch Movie Details by ID
export const getMovieDetails = async (movieId) => {
    try {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}&with_images=true&with_cast=true`);
        const data = await response.json();
        return data.data.movie;
    } catch (error) {
        console.error("Error fetching movie details:", error);
        return null;
    }
};