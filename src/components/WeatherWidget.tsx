import { getWeatherDescription } from "../hooks/useWeather";
import type { WeatherData } from "../hooks/useWeather";

interface Props {
  weather: WeatherData | null;
  loading: boolean;
  error: string;
}


const WeatherWidget = ({ weather, loading, error }: Props) => {
  if (loading)
    return (
      <div
        className="text-center p-3 h-100 d-flex align-items-center justify-content-center"
        role="status"
        aria-live="polite"
        aria-busy="true"
      >
        Loading weather...
      </div>
    );
  if (error)
    return (
      <div
        className="text-center p-3 text-danger h-100 d-flex align-items-center justify-content-center"
        role="alert"
        aria-live="assertive"
      >
        {error}
      </div>
    );
  if (!weather) return null;

  const { text, icon } = getWeatherDescription(weather.weatherCode);

  return (
    <section
      className="weather-widget p-3 h-100 d-flex flex-column justify-content-center text-center rounded shadow-sm"
      style={{ background: "rgba(255,255,255,0.6)", backdropFilter: "blur(5px)" }}
      aria-label="Weather information"
      tabIndex={0}
    >
      <h5
        className="mb-0 text-muted text-uppercase"
        style={{ fontSize: "0.9rem", letterSpacing: "1px" }}
        id="current-weather-heading"
      >
        Current Weather
      </h5>
      <div className="d-flex flex-column justify-content-center align-items-center mt-2" aria-labelledby="current-weather-heading">
        <span
          role="img"
          aria-label={text}
          aria-hidden={icon ? undefined : "true"}
          className={`bi ${icon} mb-2`}
          style={{ fontSize: "2rem" }}
        ></span>
        <span className="display-4 fw-bold text-dark" style={{ fontSize: "2.5rem" }} aria-label={`Temperature: ${weather.temperature} degrees Celsius`}>
          {weather.temperature}°C
        </span>
        <span className="text-muted mt-1" aria-label={`Weather condition: ${text}`}>{text}</span>
      </div>

      {weather.daily && weather.daily.length > 0 && (
        <section className="mt-4" aria-label="7-Day Forecast">
          <h6
            className="text-muted text-uppercase mb-2"
            style={{ fontSize: "0.85rem", letterSpacing: "1px" }}
            id="forecast-heading"
          >
            7-Day Forecast
          </h6>
          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
            <div className="d-flex flex-row" style={{ minWidth: '600px' }} role="list" aria-labelledby="forecast-heading">
              {weather.daily.map((day, idx) => {
                const desc = getWeatherDescription(day.weatherCode);
                const dateObj = new Date(day.date);
                const dayName = dateObj.toLocaleDateString(undefined, { weekday: 'short' });
                return (
                  <div
                    key={idx}
                    className="bg-white rounded shadow-sm px-3 py-2 mx-2 text-center"
                    style={{ minWidth: '110px', flex: '0 0 auto' }}
                    role="listitem"
                    aria-label={`${dayName}: High ${Math.round(day.temperatureMax)}°, Low ${Math.round(day.temperatureMin)}°, ${desc.text}`}
                    tabIndex={0}
                  >
                    <div className="fw-bold mb-1" style={{ fontSize: "1rem" }}>{dayName}</div>
                    <span
                      role="img"
                      aria-label={desc.text}
                      aria-hidden={desc.icon ? undefined : "true"}
                      className={`bi ${desc.icon} mb-1`}
                      style={{ fontSize: "1.5rem" }}
                    ></span>
                    <div style={{ fontSize: "1rem" }}>
                      <span className="text-danger">{Math.round(day.temperatureMax)}°</span>
                      <span className="text-primary ms-1">{Math.round(day.temperatureMin)}°</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </section>
  );
};

export default WeatherWidget;

