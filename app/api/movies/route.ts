import { NextResponse } from "next/server";
import { discoverMovies } from "../../../domains/imdb/discover-movies.imdb";

export async function GET() {
  const res = await discoverMovies();
  return NextResponse.json(res);
}
