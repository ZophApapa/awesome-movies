import { NextResponse } from "next/server";
import { searchMovies } from "../../../../../domains/imdb/search-movies.imdb";

export async function GET(
  request: Request,
  { params }: { params: { filter: string } }
) {
  const res = await searchMovies(params.filter);
  return NextResponse.json(res);
}
