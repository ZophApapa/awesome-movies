"use client";

import { useStore } from "zustand";
import { Movie } from "./movies.types";
import { useRef } from "react";
import { useBoundStore } from "../zustand/lib/zustand.lib";

interface MoviesInitializerProps {
  movies: Movie[];
}
export const MoviesInitializer = ({ movies }: MoviesInitializerProps) => {
  const initialized = useRef(false);
  if (!initialized.current) {
    useBoundStore.getState().setMovies(movies);
    initialized.current = true;
  }

  return null;
};
