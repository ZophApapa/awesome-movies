import Link from "next/link";
import { Movie } from "../../../types/movie.type";
import classes from "./movie-thumbnail.module.css";
import Image from "next/image";

export interface MovieThumbnailProps extends Movie {}

export const MovieThumbnail = (movie: MovieThumbnailProps) => {
  return (
    <Link
      prefetch
      className={classes["movie-thumbnail"]}
      href={`movie/${movie.id}`}
    >
      <div className={classes["movie-thumbnail__container"]}>
        <Image
          className={classes["movie-thumbnail__poster "]}
          width={200}
          height={300}
          alt={`${movie.title} thumbnail`}
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        />
        <div>Note du public : {movie.vote_average}</div>
        <div className={classes["movie-thumbnail__title"]}>{movie.title}</div>
        <div>Sorti le {movie.release_date}</div>
      </div>
    </Link>
  );
};
