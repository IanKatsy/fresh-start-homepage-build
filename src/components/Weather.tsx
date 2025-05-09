
import { useState, useEffect } from 'react';

const Weather = () => {
  const [weather, setWeather] = useState({
    temperature: '21',
    condition: 'Rainy',
  });
  
  // In a real implementation, we would fetch weather data from an API
  // For this demo, we'll just use the static data
  
  return (
    <div className="flex items-center justify-center gap-2 text-white/90">
      <span className="text-xl font-medium">{weather.temperature}°C</span>
      <span className="text-white/70">{weather.condition}</span>
    </div>
  );
};

export default Weather;
