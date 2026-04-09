export type WeatherData = {
  temp: number;
  icon: string;
  condition: string;
};

export const WEATHER_FALLBACK: WeatherData = {
  temp: 14,
  icon: '🌤',
  condition: 'Clear skies · Nanda Devi visible',
};

const WEATHER_CODE_MAP: Record<number, { icon: string; condition: string }> = {
  0: { icon: '☀️', condition: 'Clear sky' },
  1: { icon: '🌤', condition: 'Mainly clear' },
  2: { icon: '⛅', condition: 'Partly cloudy' },
  3: { icon: '☁️', condition: 'Overcast' },
  45: { icon: '🌫', condition: 'Fog' },
  48: { icon: '🌫', condition: 'Rime fog' },
  51: { icon: '🌦', condition: 'Light drizzle' },
  53: { icon: '🌦', condition: 'Drizzle' },
  55: { icon: '🌧', condition: 'Heavy drizzle' },
  61: { icon: '🌧', condition: 'Light rain' },
  63: { icon: '🌧', condition: 'Rain' },
  65: { icon: '🌧', condition: 'Heavy rain' },
  71: { icon: '🌨', condition: 'Light snow' },
  73: { icon: '🌨', condition: 'Snow' },
  75: { icon: '❄️', condition: 'Heavy snow' },
  95: { icon: '⛈', condition: 'Thunderstorm' },
};

export async function fetchWeather(): Promise<WeatherData> {
  const url =
    'https://api.open-meteo.com/v1/forecast?latitude=29.84&longitude=79.74&current=temperature_2m,weathercode&timezone=Asia%2FKolkata';

  const res = await fetch(url, { next: { revalidate: 1800 } });
  if (!res.ok) throw new Error('Weather fetch failed');

  const data = await res.json();
  const temp = Math.round(data.current.temperature_2m);
  const code = data.current.weathercode as number;
  const mapped = WEATHER_CODE_MAP[code] ?? WEATHER_CODE_MAP[1];

  return {
    temp,
    icon: mapped.icon,
    condition: mapped.condition,
  };
}
