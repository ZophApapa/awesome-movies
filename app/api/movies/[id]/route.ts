import { NextResponse } from "next/server";
import { getMovieById } from "../../../../domains/imdb/get-movie-by-id.imdb";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  getMovieById(params.id);
  const res = await getMovieById(params.id);
  return NextResponse.json(res);
}
