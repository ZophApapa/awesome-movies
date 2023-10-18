"use client";

import { useEffect, useState } from "react";
import { Movie } from "../../../types/movie.type";
import { MovieHero } from "../../../components/movies/movie-hero/movie-hero";

export default function MoviePage({ params }: { params: { id: string } }) {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    fetch(`/api/movies/${encodeURIComponent(params.id)}`)
      .then((result) => {
        return result.json();
      })
      .then((movie: Movie) => {
        console.log("movie :>> ", movie);
        setMovie(movie);
      });
  }, [params.id]);

  return (
    <main>
      {movie !== null ? (
        <MovieHero {...movie} />
      ) : (
        <div>Le film n&apos;a pas été trouvé</div>
      )}
    </main>
  );
}
