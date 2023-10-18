"use client";

import { Input } from "../../components/input/input";
import { MovieList } from "../../components/movies/movie-list/movie-list";
import { Movie } from "../../types/movie.type";
import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export default function Search() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 500);

  const handleInputChange = (value: string) => {
    setSearch(value);
  };

  useEffect(() => {
    fetch(`/api/movies/search/${encodeURIComponent(debouncedSearch)}`)
      .then((result) => {
        return result.json();
      })
      .then((movie: Movie[]) => {
        setMovies(movie);
      });
  }, [debouncedSearch]);

  return (
    <>
      <Input
        handleChange={handleInputChange}
        name="search-button"
        placeholder="Tape des trucs pour trouver des films"
      />
      <MovieList movies={movies ?? []} />
    </>
  );
}
