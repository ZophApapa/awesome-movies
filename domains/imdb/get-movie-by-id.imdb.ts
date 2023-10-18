import { imdbConfig } from "../../config/config";
import { Movie } from "../../types/movie.type";

export const getMovieById = async (movieId: string): Promise<Movie | null> => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${imdbConfig.IMDB_BEARER}`,
    },
  };

  const imdbRes = await fetch(
    `${imdbConfig.IMDB_BASE_URL}movie/${movieId}`,
    options
  );

  if (imdbRes.ok) return imdbRes.json() as unknown as Movie;

  return null;
};
