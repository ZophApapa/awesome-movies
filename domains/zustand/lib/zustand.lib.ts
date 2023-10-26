import { create } from "zustand";
import { createMoviesSlice, MovieSlice } from "../../movies/movies.slice";

createMoviesSlice;
export const useBoundStore = create<MovieSlice>()((...a) => ({
  ...createMoviesSlice(...a),
}));
