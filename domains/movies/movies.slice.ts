import { StateCreator } from "zustand";
import { Movie } from "./movies.types";

export interface MovieSlice {
  movies: Record<number, Movie>;
  setMovies: (movies: Movie[]) => void;
  setMovie: (movie: Movie) => void;
}

export const createMoviesSlice: StateCreator<MovieSlice, [], [], MovieSlice> = (
  set,
  get
) => ({
  movies: {},
  setMovie: (movie) => {},
  setMovies: (movies) => {
    const state = get();
    movies.forEach((movie) => {
      state.movies[movie.id] = movie;
    });

    set(state);
  },
});
