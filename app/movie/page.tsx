"use client";

import { useEffect, useState } from "react";
import { Movie } from "../../types/movie.type";
import { MovieHero } from "../../components/movies/movie-hero/movie-hero";
import { getMovieById } from "../../domains/imdb/get-movie-by-id.imdb";

export default function MainPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    getMovieById(params.id).then((result) => {
      setMovie(result);
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
