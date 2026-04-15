import { NextResponse } from 'next/server';

const LAT = 29.655549413999495;
const LON = 79.84102259547427;

export const revalidate = 1800; // cache for 30 minutes server-side

export async function GET() {
  try {
    const [weatherRes, aqiRes] = await Promise.all([
      fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m,weathercode&timezone=Asia%2FKolkata`
      ),
      fetch(
        `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${LAT}&longitude=${LON}&current=european_aqi&timezone=Asia%2FKolkata`
      ),
    ]);

    if (!weatherRes.ok) {
      return NextResponse.json(null, { status: 502 });
    }

    const weather = await weatherRes.json();
    const aqi = aqiRes.ok ? await aqiRes.json() : null;

    return NextResponse.json({
      temp: Math.round(weather.current.temperature_2m),
      weathercode: weather.current.weathercode as number,
      aqi: aqi ? Math.round(aqi.current.european_aqi) : null,
    });
  } catch {
    return NextResponse.json(null, { status: 502 });
  }
}
