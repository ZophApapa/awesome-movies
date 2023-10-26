import { MovieList } from "../components/movies/movie-list/movie-list";

export default async function Home() {
  const moviesRes = await fetch("http://localhost:3000/api/movies");
  let movies = [];
  if (moviesRes.ok) {
    movies = await moviesRes.json();
  }

  return <MovieList movies={movies} />;
}
