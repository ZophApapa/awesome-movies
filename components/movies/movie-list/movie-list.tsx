"use client";

import { useBoundStore } from "../../../domains/zustand/lib/zustand.lib";
import { Movie } from "../../../types/movie.type";
import { MovieThumbnail } from "../movie-thumbnail/movie-thumbnail";
import classes from "./movie-list.module.css";

interface MovieListProps {
  movies: Movie[];
}

export const MovieList = ({ movies }: MovieListProps) => {
  const storeMovies = useBoundStore((store) => store.movies);

  if (movies.length === 0) {
    return <div> Aucun film trouvé</div>;
  }
  return (
    <div>
      <div>from zustand</div>
      <div className={classes["movie-list"]}>
        {Object.values(storeMovies).map(({ id, ...movieProps }) => (
          <MovieThumbnail key={id} id={id} {...movieProps} />
        ))}
      </div>
    </div>
  );
};
