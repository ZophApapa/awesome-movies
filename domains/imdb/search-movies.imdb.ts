import { imdbConfig } from "../../config/config";
import { Movie } from "../../types/movie.type";

export const searchMovies = async (
  filter: string = "",
  page: number = 1
): Promise<Movie[]> => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${imdbConfig.IMDB_BEARER}`,
    },
  };

  let discoverUrl = `${
    imdbConfig.IMDB_BASE_URL
  }/search/movie?query=${encodeURIComponent(filter)}&page=${page}`;

  const imdbRes = await fetch(discoverUrl, options);

  if (imdbRes.ok) {
    const body = await imdbRes.json();
    const movies = body.results.map((item: Movie): Movie => {
      return item;
    });
    return movies;
  }

  return [];
};
