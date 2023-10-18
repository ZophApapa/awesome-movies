import Image from "next/image";
import { Movie } from "../../../types/movie.type";
import classes from "./movie-hero.module.css";
import { Fragment } from "react";

export const MovieHero = (movie: Movie) => {
  return (
    <div className={classes["movie-hero"]}>
      <Image
        width={200}
        height={300}
        alt={`${movie.title} thumbnail`}
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
      />
      <div className={classes["movie-hero__data"]}>
        <h1>{movie.title}</h1>
        <div>
          {movie.release_date} -{" "}
          {movie.genres.map((genre) => (
            <Fragment key={`genre-${genre.id}`}>{genre.name}</Fragment>
          ))}
        </div>
        <div>
          Note du public : <strong>{movie.vote_average}</strong>
        </div>
        <div>Acteurs</div>
        <div className={classes["movie-hero__actors"]} id="actors">
          {/* TODO : GET MOVIE ACTORS, DID NOT FOUND API ENTRY TO MATCH */}
          <div>Michel</div>
          <div>Michel</div>
          <div>Michel</div>
          <div>Michel</div>
          <div>Michel</div>
          <div>Michel</div>
          <div>Michel</div>
          <div>Michel</div>
        </div>
      </div>
    </div>
  );
};
