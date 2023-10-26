import { MovieList } from "../components/movies/movie-list/movie-list";
import { MoviesInitializer } from "../domains/movies/movies-initializer";
import { useBoundStore } from "../domains/zustand/lib/zustand.lib";
import { Movie } from "../types/movie.type";

export default async function Home() {
  const moviesRes = await fetch("http://localhost:3000/api/movies");
  let movies: Movie[] = [];
  if (moviesRes.ok) {
    movies = await moviesRes.json();
  }

  useBoundStore.getState().setMovies(movies);

  return (
    <>
      <MoviesInitializer movies={movies} />
      <MovieList movies={Object.values(useBoundStore.getState().movies)} />
    </>
  );
}
