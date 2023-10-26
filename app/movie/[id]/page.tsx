import { MovieHero } from "../../../components/movies/movie-hero/movie-hero";

export default async function MoviePage({
  params,
}: {
  params: { id: string };
}) {
  let movie = null;
  const movieRes = await fetch(
    `http://localhost:3000/api/movies/${encodeURIComponent(params.id)}`
  );
  if (movieRes.ok) {
    movie = await movieRes.json();
  }

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
