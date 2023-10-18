import { imdbConfig } from "../../config/config";
import { Movie } from "../../types/movie.type";

export const discoverMovies = async (page: number = 1): Promise<Movie[]> => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${imdbConfig.IMDB_BEARER}`,
    },
  };

  const imdbRes = await fetch(
    `${imdbConfig.IMDB_BASE_URL}/discover/movie?page=${page}&sort_by=popularity.desc`,
    options
  );

  if (imdbRes.ok) {
    const body = await imdbRes.json();
    const movies = body.results.map((item: Movie): Movie => {
      return item;
    });
    return movies;
  }

  return [];
};
