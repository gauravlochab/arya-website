import { NextResponse } from "next/server";

export const revalidate = 3600; // revalidate every hour

export async function GET() {
  try {
    const year = new Date().getFullYear();
    const res = await fetch(
      `https://github.com/users/gauravlochab/contributions?from=${year}-01-01&to=${year}-12-31`,
      { next: { revalidate: 3600 } }
    );
    const html = await res.text();

    // Extract the number from: <h2 ...>  795  contributions ...
    const match = html.match(
      /js-contribution-activity-description[^>]*>\s*([\d,]+)\s*\n?\s*contributions/
    );

    if (match) {
      return NextResponse.json({ contributions: match[1].trim(), year });
    }

    return NextResponse.json({ contributions: null, year });
  } catch {
    return NextResponse.json({ contributions: null }, { status: 500 });
  }
}
