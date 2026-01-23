import { getWeatherDescription } from "../hooks/useWeather";
import type { WeatherData } from "../hooks/useWeather";

interface Props {
  weather: WeatherData | null;
  loading: boolean;
  error: string;
}

const WeatherWidget = ({ weather, loading, error }: Props) => {
  if (loading) return <div className="text-center p-3 h-100 d-flex align-items-center justify-content-center">Loading weather...</div>;
  if (error) return <div className="text-center p-3 text-danger h-100 d-flex align-items-center justify-content-center">{error}</div>;
  if (!weather) return null;

  const { text, icon } = getWeatherDescription(weather.weatherCode);

  return (
    <div className="weather-widget p-3 h-100 d-flex flex-column justify-content-center text-center rounded shadow-sm" style={{ background: "rgba(255,255,255,0.6)", backdropFilter: "blur(5px)" }}>
      <h5 className="mb-0 text-muted text-uppercase" style={{ fontSize: "0.9rem", letterSpacing: "1px" }}>Current Weather</h5>
      <div className="d-flex flex-column justify-content-center align-items-center mt-2">
        <i className={`bi ${icon} mb-2`} style={{ fontSize: "2rem" }}></i>
        <span className="display-4 fw-bold text-dark" style={{ fontSize: "2.5rem" }}>{weather.temperature}°C</span>
        <span className="text-muted mt-1">{text}</span>
      </div>

      {weather.daily && weather.daily.length > 0 && (
        <div className="mt-4">
          <h6 className="text-muted text-uppercase mb-2" style={{ fontSize: "0.85rem", letterSpacing: "1px" }}>7-Day Forecast</h6>
          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
            <div className="d-flex flex-row" style={{ minWidth: '600px' }}>
              {weather.daily.map((day, idx) => {
                const desc = getWeatherDescription(day.weatherCode);
                const dateObj = new Date(day.date);
                const dayName = dateObj.toLocaleDateString(undefined, { weekday: 'short' });
                return (
                  <div key={idx} className="bg-white rounded shadow-sm px-3 py-2 mx-2 text-center" style={{ minWidth: '110px', flex: '0 0 auto' }}>
                    <div className="fw-bold mb-1" style={{ fontSize: "1rem" }}>{dayName}</div>
                    <i className={`bi ${desc.icon} mb-1`} style={{ fontSize: "1.5rem" }}></i>
                    <div style={{ fontSize: "1rem" }}>
                      <span className="text-danger">{Math.round(day.temperatureMax)}°</span>
                      <span className="text-primary ms-1">{Math.round(day.temperatureMin)}°</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;
