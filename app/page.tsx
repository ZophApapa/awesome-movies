"use client";

import { MovieList } from "../components/movies/movie-list/movie-list";
import { Movie } from "../types/movie.type";
import { useEffect, useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch("/api/movies")
      .then((result) => {
        return result.json();
      })
      .then((movies: Movie[]) => {
        setMovies(movies);
      });
  }, []);

  return <MovieList movies={movies} />;
}
