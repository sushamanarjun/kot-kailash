import { NextResponse } from 'next/server';

const LAT = 29.655549413999495;
const LON = 79.84102259547427;
const KEY = process.env.WEATHERAPI_KEY;

export const revalidate = 1800; // cache for 30 minutes server-side

export async function GET() {
  if (!KEY) return NextResponse.json(null, { status: 503 });

  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${LAT},${LON}`
    );

    if (!res.ok) return NextResponse.json(null, { status: 502 });

    const data = await res.json();

    return NextResponse.json({
      temp: Math.round(data.current.temp_c),
      conditionCode: data.current.condition.code as number,
      condition: data.current.condition.text as string,
      isDay: data.current.is_day as 0 | 1,
    });
  } catch {
    return NextResponse.json(null, { status: 502 });
  }
}
