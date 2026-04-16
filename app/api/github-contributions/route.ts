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

    // Parse: the number sits on its own line right before "contributions"
    const match = html.match(/([\d,]+)\s*\n\s*contributions/);
    const contributions = match ? match[1].trim() : null;

    return NextResponse.json({ contributions, year });
  } catch {
    return NextResponse.json({ contributions: null, year: null }, { status: 500 });
  }
}
