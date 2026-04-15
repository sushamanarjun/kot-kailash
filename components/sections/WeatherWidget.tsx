'use client';

import { useState, useEffect } from 'react';
import { fetchWeather, WEATHER_FALLBACK, type WeatherData } from '@/lib/weather';

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData>(WEATHER_FALLBACK);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Entrance animation
    const t1 = setTimeout(() => setShow(true), 200);

    // Fetch live data
    fetchWeather()
      .then(setWeather)
      .catch(() => {/* keep fallback */});

    return () => clearTimeout(t1);
  }, []);

  return (
    <div
      className="weather-widget"
      style={{
        position: 'absolute',
        top: '104px',
        right: '64px',
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        padding: '13px 20px',
        background: 'rgba(12,18,10,0.58)',
        backdropFilter: 'blur(14px)',
        border: '1px solid rgba(255,255,255,0.07)',
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(-6px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}
    >
      <span className="weather-icon" style={{ fontSize: '1.35rem', lineHeight: 1 }}>{weather.icon}</span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        <span
          className="weather-label"
          style={{
            fontFamily: 'var(--sans)',
            fontSize: '11px',
            letterSpacing: '0.26em',
            textTransform: 'uppercase',
            color: 'var(--gold-pale)',
          }}
        >
          Shaukiyathal · Now
        </span>
        <span
          className="weather-condition"
          style={{
            fontFamily: 'var(--serif)',
            fontSize: '0.78rem',
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.75)',
          }}
        >
          {weather.condition}
        </span>
      </div>
      <span
        className="weather-temp"
        style={{
          fontFamily: 'var(--serif)',
          fontSize: '1.85rem',
          fontWeight: 300,
          color: 'white',
          lineHeight: 1,
        }}
      >
        {weather.temp}°
      </span>
      <span
        className="weather-aqi"
        style={{
          fontFamily: 'var(--sans)',
          fontSize: '11px',
          letterSpacing: '0.18em',
          padding: '3px 8px',
          color: 'rgba(115,225,125,0.88)',
          background: 'rgba(50,150,60,0.1)',
          border: '1px solid rgba(50,150,60,0.18)',
        }}
      >
        AQI &lt;10
      </span>
    </div>
  );
}
