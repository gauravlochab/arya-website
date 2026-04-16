import { NextResponse } from "next/server";

export const revalidate = 3600; // cache for 1 hour

export async function GET() {
  try {
    const year = new Date().getFullYear();
    const res = await fetch(
      `https://github.com/users/gauravlochab/contributions?from=${year}-01-01&to=${year}-12-31`,
      { next: { revalidate: 3600 } }
    );
    const html = await res.text();

    const match = html.match(/([\d,]+)\s*\n\s*contributions/);
    const contributions = match ? match[1] : null;

    return NextResponse.json({ contributions, year });
  } catch {
    return NextResponse.json({ contributions: null }, { status: 500 });
  }
}
