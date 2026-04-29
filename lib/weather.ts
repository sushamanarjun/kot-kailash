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

/** Maps WeatherAPI condition codes to emoji icons */
function conditionCodeToIcon(code: number, isDay: 0 | 1): string {
  if (code === 1000) return isDay ? '☀️' : '🌙';
  if (code === 1003) return isDay ? '⛅' : '🌤';
  if (code <= 1009) return '☁️';
  if (code === 1030 || code === 1135 || code === 1147) return '🌫';
  if (code === 1087 || code >= 1273) return '⛈';
  if ((code >= 1210 && code <= 1264) || code === 1066 || code === 1069 || code === 1114 || code === 1117) return '🌨';
  if (code === 1063 || (code >= 1150 && code <= 1153)) return '🌦';
  if (code >= 1150) return '🌧';
  return '🌤';
}

export async function fetchWeather(): Promise<WeatherData> {
  const res = await fetch('/api/weather');
  if (!res.ok) throw new Error('Weather fetch failed');

  const data = await res.json();

  return {
    temp: data.temp,
    icon: conditionCodeToIcon(data.conditionCode, data.isDay),
    condition: data.condition,
  };
}
