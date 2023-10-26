"use client";

import { Movie } from "../../../types/movie.type";
import { MovieThumbnail } from "../movie-thumbnail/movie-thumbnail";
import classes from "./movie-list.module.css";

interface MovieListProps {
  movies: Movie[];
}

export const MovieList = ({ movies }: MovieListProps) => {
  if (movies.length === 0) {
    return <div> Aucun film trouvé</div>;
  }
  return (
    <div className={classes["movie-list"]}>
      {movies.map(({ id, ...movieProps }) => (
        <MovieThumbnail key={id} id={id} {...movieProps} />
      ))}
    </div>
  );
};
